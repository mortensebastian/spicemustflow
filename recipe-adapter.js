/* ===== Tilpass oppskriften (paella) =====
   Rendrer ingredienser og fremgangsmåte fra paella-data.js, og gir brukeren:
     1) en kompleksitetsvelger (enkel/medium/kompleks, standard medium) som
        bytter HELE grunnoppskriften,
     2) et «Tilpass oppskriften»-lag (av som standard) der man kan bytte eller
        fjerne ingredienser fra godkjente lister, mens retten holdes i balanse
        (salt reduseres automatisk, friskhet foreslås).

   Skaleringen GJENBRUKER omregningen i recipe.js via window.RecipeUnits –
   vi lager ingen ny enhetslogikk her. */

document.addEventListener('DOMContentLoaded', function () {
  // Kjør bare på sider som har både datamodellen og adapter-beholderne.
  if (typeof paellaRecipes === 'undefined' || !window.RecipeUnits) return;
  const listEl = document.getElementById('ingredient-list');
  const stepsEl = document.getElementById('step-list');
  if (!listEl || !stepsEl) return;

  const U = window.RecipeUnits;

  /* ----- Hjelpe-oppslag som hører til visningen (ikke datamodellen) ----- */

  // Tetthet (g per ml) for ingredienser der vi tilbyr g-omregning. Ligger her,
  // ikke i datamodellen, så dataene holdes rene. Mangler en ingrediens her,
  // brukes 1 (og da tilbyr vi uansett bare volum↔volum, som ikke trenger tetthet).
  const DENSITY = {
    rice: 0.85, stock: 1, fish_stock: 1, veg_stock: 1,
    olive_oil: 0.92, smoked_paprika: 0.5, sweet_paprika: 0.5,
    salt_added: 1.2, tomato: 1, turmeric_paprika: 0.5
  };

  // Hvilke måleenheter man kan bytte mellom for en gitt ingrediens (etter id).
  // Ingredienser som ikke står her får ingen enhetsveksler (fast enhet).
  const UNIT_OPTIONS = {
    rice: ['dl', 'ml', 'g'],
    stock: ['dl', 'ml'], fish_stock: ['dl', 'ml'], veg_stock: ['dl', 'ml'],
    olive_oil: ['ss', 'ts', 'ml', 'g'],
    smoked_paprika: ['ts', 'g'], sweet_paprika: ['ts', 'g'],
    turmeric_paprika: ['ts', 'g'],
    salt_added: ['ts', 'g']
  };

  const TRADITION_TEXT = {
    traditional: 'tradisjonell',
    regional: 'regional',
    'non-traditional': 'ikke tradisjonell'
  };

  function addStageText(stage) {
    if (stage === 'end') return 'tilsettes mot slutten';
    if (stage === 'serve') return 'ved servering';
    return 'tilsettes tidlig (brunes/surres)';
  }

  /* ----- Tilstand ----- */
  let complexity = 'medium';     // valgt kompleksitet
  let customizeOn = false;       // er redigeringsmodus på?
  const removed = {};            // { slotId: true } for fjernede ingredienser
  const swaps = {};              // { slotId: swapOption } for byttede ingredienser
  const unitState = {};          // { slotId: valgt enhet }

  function activeRecipe() { return paellaRecipes[complexity]; }
  function baseServings() { return activeRecipe().servings; }

  // Antall-feltet (gjenbrukes fra den eksisterende skaleringen).
  const scaleInput = document.getElementById('recipe-scale-input');
  function currentServings() {
    return parseFloat(scaleInput && scaleInput.value) || baseServings();
  }

  /* ----- Bygg den effektive ingredienslista (med bytter lagt inn) ----- */
  function effectiveIngredients() {
    return activeRecipe().ingredients.map(function (base) {
      const swap = swaps[base.id];
      if (swap) {
        // Behold rolle/skalering/stadium/essensiell fra «slotten», men bytt ut
        // det byttet bestemmer (navn, mengde, enhet, natrium, tradisjon, note).
        return {
          slotId: base.id, effId: swap.id, label: swap.label,
          amount: swap.amount, unit: swap.unit,
          role: base.role, scaling: base.scaling, addStage: base.addStage,
          essential: base.essential, removable: base.removable,
          sodiumPer100g: swap.sodiumPer100g, tradition: swap.tradition,
          note: swap.note, swapped: true
        };
      }
      return {
        slotId: base.id, effId: base.id, label: base.label,
        amount: base.amount, unit: base.unit,
        role: base.role, scaling: base.scaling, addStage: base.addStage,
        essential: base.essential, removable: base.removable,
        sodiumPer100g: base.sodiumPer100g, tradition: base.tradition,
        note: base.note, swapped: false, onRemove: base.onRemove,
        isPrimaryAcid: base.isPrimaryAcid
      };
    });
  }

  /* ----- Salt-/krydder-justering fra aktive bytter (kun på mål som finnes) ----- */
  function computeAdjustments() {
    const mult = {}, setv = {};
    const ids = activeRecipe().ingredients.map(function (i) { return i.id; });
    Object.keys(swaps).forEach(function (slotId) {
      const sw = swaps[slotId];
      if (!sw.adjust) return;
      sw.adjust.forEach(function (rule) {
        if (ids.indexOf(rule.target) === -1) return; // målet finnes ikke nå
        if (rule.op === 'multiply') mult[rule.target] = (mult[rule.target] || 1) * rule.value;
        else if (rule.op === 'set') setv[rule.target] = rule.value;
      });
    });
    return { mult: mult, setv: setv };
  }

  /* ----- Mengdeberegning ----- */
  function scaleByType(amount, scaling, ratio) {
    if (scaling === 'fixed') return amount;            // f.eks. rosmarinkvist
    if (scaling === 'nonlinear') return amount * (1 + (ratio - 1) * 0.5); // hold igjen
    return amount * ratio;                             // linear
  }

  function convert(amount, fromUnit, toUnit, density) {
    if (fromUnit === toUnit) return amount;
    return U.fromGrams(U.toGrams(amount, fromUnit, density), toUnit, density);
  }

  function displayAmount(ing, adj) {
    const ratio = currentServings() / baseServings();
    let amt = scaleByType(ing.amount, ing.scaling, ratio);
    // Juster (salt/krydder) etter aktive bytter
    if (Object.prototype.hasOwnProperty.call(adj.setv, ing.slotId)) amt = adj.setv[ing.slotId];
    else if (Object.prototype.hasOwnProperty.call(adj.mult, ing.slotId)) amt *= adj.mult[ing.slotId];

    const targetUnit = unitState[ing.slotId] || ing.unit;
    const density = DENSITY[ing.effId] || 1;
    return { text: U.formatAmount(convert(amt, ing.unit, targetUnit, density)), unit: targetUnit };
  }

  /* ----- Rendering ----- */
  function unitMarkup(ing) {
    const opts = UNIT_OPTIONS[ing.effId];
    const current = unitState[ing.slotId] || ing.unit;
    if (!opts || opts.length < 2) {
      return '<span class="unit-label">' + ing.unit + '</span>';
    }
    let html = '<select class="unit-select" data-slot="' + ing.slotId + '" aria-label="Måleenhet for ' + ing.label + '">';
    opts.forEach(function (u) {
      html += '<option value="' + u + '"' + (u === current ? ' selected' : '') + '>' + u + '</option>';
    });
    html += '</select>';
    return html;
  }

  function traditionBadge(ing) {
    if (!ing.tradition) return '';
    if (!(ing.swapped || customizeOn)) return '';
    return ' <span class="tradition-badge tradition-' + ing.tradition + '">' +
      TRADITION_TEXT[ing.tradition] + '</span>';
  }

  function swapMarkup(ing) {
    const options = swapOptions[ing.slotId];
    if (!options) return '';
    let html = '<select class="ingredient-swap" data-slot="' + ing.slotId + '" aria-label="Bytt ' + ing.label + '">';
    html += '<option value="">Standard: ' + activeRecipe().ingredients
      .filter(function (i) { return i.id === ing.slotId; })[0].label + '</option>';
    options.forEach(function (opt) {
      const trad = opt.tradition ? ' (' + TRADITION_TEXT[opt.tradition] + ')' : '';
      const sel = (swaps[ing.slotId] && swaps[ing.slotId].id === opt.id) ? ' selected' : '';
      html += '<option value="' + opt.id + '"' + sel + '>' + opt.label + trad + '</option>';
    });
    html += '</select>';
    return html;
  }

  function controlsMarkup(ing) {
    if (!customizeOn) return '';
    let html = '<div class="ingredient-controls">';
    html += swapMarkup(ing);
    if (ing.removable) {
      const isRemoved = removed[ing.slotId];
      html += '<button type="button" class="ingredient-remove" data-slot="' + ing.slotId + '">' +
        (isRemoved ? 'Legg tilbake' : 'Fjern') + '</button>';
    }
    html += '</div>';
    return html;
  }

  function noteMarkup(ing) {
    const bits = [];
    if (ing.scaling === 'nonlinear') bits.push('smak til');
    if (ing.swapped) {
      bits.push(addStageText(ing.addStage));
      if (ing.note) bits.push(ing.note);
    } else if (ing.note) {
      bits.push(ing.note);
    }
    if (!bits.length) return '';
    return '<span class="ingredient-note">' + bits.join(' · ') + '</span>';
  }

  function renderIngredients(adj) {
    const items = effectiveIngredients();
    listEl.innerHTML = items.map(function (ing) {
      const da = displayAmount(ing, adj);
      const removedClass = removed[ing.slotId] ? ' ingredient-removed' : '';
      return '<li class="ingredient' + removedClass + '">' +
        '<span class="ingredient-qty">' +
          '<span class="ingredient-amount">' + da.text + '</span>' +
          (UNIT_OPTIONS[ing.effId] && UNIT_OPTIONS[ing.effId].length > 1
            ? unitMarkup(ing)
            : '<span class="unit-label">' + da.unit + '</span>') +
        '</span>' +
        '<span class="ingredient-name">' + ing.label + traditionBadge(ing) + noteMarkup(ing) + '</span>' +
        controlsMarkup(ing) +
      '</li>';
    }).join('');
  }

  function renderSteps() {
    stepsEl.innerHTML = activeRecipe().steps.map(function (s) {
      return '<li>' + s + '</li>';
    }).join('');
  }

  function anySaltySwap() {
    return Object.keys(swaps).some(function (slotId) {
      const sw = swaps[slotId];
      return (sw.sodiumPer100g && sw.sodiumPer100g > 250) || !!sw.adjust;
    });
  }

  function renderMessages(adj) {
    const box = document.getElementById('recipe-messages');
    if (!box) return;
    const msgs = [];

    // Salt (automatisk): vis rolig melding når et salt bytte har redusert salt.
    if (adj.mult.salt_added && adj.mult.salt_added < 1) {
      msgs.push({ cls: 'recipe-message', text: 'Et salt bytte er lagt til – vi har automatisk redusert tilsatt salt. Smak til på slutten.' });
    }

    // Friskhet (forslag).
    if (complexity === 'kompleks') {
      if (removed.tomato) {
        const tomato = activeRecipe().ingredients.filter(function (i) { return i.id === 'tomato'; })[0];
        if (tomato && tomato.onRemove) msgs.push({ cls: 'recipe-message', text: tomato.onRemove.tip });
      }
    } else {
      const strong = anySaltySwap();
      msgs.push({ cls: 'recipe-message' + (strong ? ' recipe-message-strong' : ''), text: servedAcid.tip });
    }

    box.innerHTML = msgs.map(function (m) {
      return '<p class="' + m.cls + '">' + m.text + '</p>';
    }).join('');
  }

  function render() {
    const adj = computeAdjustments();
    renderIngredients(adj);
    renderSteps();
    renderMessages(adj);
    const resetBtn = document.getElementById('reset-recipe');
    if (resetBtn) resetBtn.style.display = customizeOn ? 'inline-block' : 'none';
  }

  /* ----- Tilbakestill tilpasninger (uten å bytte kompleksitet) ----- */
  function clearCustomizations() {
    Object.keys(removed).forEach(function (k) { delete removed[k]; });
    Object.keys(swaps).forEach(function (k) { delete swaps[k]; });
    Object.keys(unitState).forEach(function (k) { delete unitState[k]; });
  }

  /* ----- Kompleksitetsvelger (segmenterte knapper) ----- */
  function buildComplexitySelector() {
    const host = document.getElementById('complexity-selector');
    if (!host) return;
    host.innerHTML = Object.keys(paellaRecipes).map(function (key) {
      const active = key === complexity ? ' active' : '';
      return '<button type="button" class="complexity-button' + active + '" data-level="' + key + '">' +
        paellaRecipes[key].label + '</button>';
    }).join('');
  }

  function setComplexity(level) {
    if (!paellaRecipes[level] || level === complexity) return;
    complexity = level;
    clearCustomizations();              // nullstill tilpasninger til nytt trinn
    if (scaleInput) scaleInput.value = baseServings(); // start på nytt trinns porsjoner
    buildComplexitySelector();
    render();
  }

  /* ----- Hendelser ----- */
  document.getElementById('complexity-selector').addEventListener('click', function (e) {
    const btn = e.target.closest('.complexity-button');
    if (btn) setComplexity(btn.dataset.level);
  });

  const toggle = document.getElementById('customize-toggle');
  if (toggle) {
    toggle.addEventListener('change', function () {
      customizeOn = toggle.checked;
      render();
    });
  }

  const resetBtn = document.getElementById('reset-recipe');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      clearCustomizations();
      render();
    });
  }

  // Bytt / fjern / enhetsbytte – via delegering, robust over re-rendering.
  listEl.addEventListener('change', function (e) {
    const swapSel = e.target.closest('.ingredient-swap');
    if (swapSel) {
      const slot = swapSel.dataset.slot;
      const val = swapSel.value;
      if (!val) { delete swaps[slot]; }
      else {
        const opt = (swapOptions[slot] || []).filter(function (o) { return o.id === val; })[0];
        if (opt) swaps[slot] = opt;
      }
      delete unitState[slot];   // enhet kan ha endret seg ved bytte
      render();
      return;
    }
    const unitSel = e.target.closest('.unit-select');
    if (unitSel) {
      unitState[unitSel.dataset.slot] = unitSel.value;
      render();
    }
  });

  listEl.addEventListener('click', function (e) {
    const btn = e.target.closest('.ingredient-remove');
    if (!btn) return;
    const slot = btn.dataset.slot;
    if (removed[slot]) delete removed[slot]; else removed[slot] = true;
    render();
  });

  // Antall-feltet og +/- (egen stepper her, siden adapteren eier paella-lista).
  if (scaleInput) {
    scaleInput.addEventListener('input', render);
    function step(direction) {
      const stepSize = parseInt(scaleInput.step, 10) || 1;
      const min = parseInt(scaleInput.min, 10) || stepSize;
      const max = parseInt(scaleInput.max, 10) || Infinity;
      const current = parseInt(scaleInput.value, 10) || baseServings();
      scaleInput.value = Math.min(max, Math.max(min, current + direction * stepSize));
      render();
    }
    const dec = document.getElementById('scale-decrease');
    const inc = document.getElementById('scale-increase');
    if (dec) dec.addEventListener('click', function () { step(-1); });
    if (inc) inc.addEventListener('click', function () { step(1); });
  }

  /* ----- Start ----- */
  buildComplexitySelector();
  render();
});
