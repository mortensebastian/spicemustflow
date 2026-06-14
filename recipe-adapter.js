/* ===== Tilpass oppskriften (paella) =====
   Rendrer ingredienser og fremgangsmåte fra paella-data.js, og gir brukeren:
     1) en kompleksitetsvelger (enkel/medium/kompleks, standard medium) som
        bytter HELE grunnoppskriften,
     2) en diskré «endre»-knapp ved hver utbyttbar/fjernbar ingrediens, som
        åpner en liten panel der man kan bytte eller fjerne ingrediensen,
     3) ved fjerning: valget om å justere opp de andre ingrediensene (samme
        rolle først) så retten fortsatt rekker til antall porsjoner.

   Skaleringen GJENBRUKER omregningen i recipe.js via window.RecipeUnits.
   (Smaksbalanse-motoren – salt/syre/sødme – kommer i steg 4 som egen fil.) */

document.addEventListener('DOMContentLoaded', function () {
  // Kjør bare på sider som har både datamodellen og adapter-beholderne.
  if (typeof paellaRecipes === 'undefined' || !window.RecipeUnits) return;
  const listEl = document.getElementById('ingredient-list');
  const stepsEl = document.getElementById('step-list');
  if (!listEl || !stepsEl) return;

  const U = window.RecipeUnits;

  /* ----- Hjelpe-oppslag som hører til visningen (ikke datamodellen) ----- */

  // Tetthet (g per ml) for ingredienser der vi tilbyr g-omregning.
  const DENSITY = {
    rice: 0.85, stock: 1, fish_stock: 1, veg_stock: 1,
    olive_oil: 0.92, smoked_paprika: 0.5, sweet_paprika: 0.5,
    salt_added: 1.2, tomato: 1, turmeric_paprika: 0.5
  };

  // Omtrentlig vekt (g) per stk, slik at «juster opp de andre» kan regne i gram.
  const PIECE_WEIGHT = { red_pepper: 120, onion: 110, garlic: 5 };

  // Hvilke roller som utgjør «mengden mat» (bulk) ved kompensasjon.
  const BULK_ROLES = ['rice', 'liquid', 'protein', 'seafood', 'vegetable'];

  // Hvilke måleenheter man kan bytte mellom for en gitt ingrediens (etter id).
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

  const TOOLTIP = 'Trykk her for å bytte eller fjerne ingrediens, resten av oppskriften tilpasser seg automatisk';

  function addStageText(stage) {
    if (stage === 'end') return 'tilsettes mot slutten';
    if (stage === 'serve') return 'ved servering';
    return 'tilsettes tidlig (brunes/surres)';
  }

  /* ----- Tilstand ----- */
  let complexity = 'medium';     // valgt kompleksitet
  const removed = {};            // { slotId: true } fjernede ingredienser
  const compensate = {};         // { slotId: true } juster opp de andre for denne
  const swaps = {};              // { slotId: swapOption } byttede ingredienser
  const unitState = {};          // { slotId: valgt enhet }
  let openSlot = null;           // hvilken ingrediens har åpen panel (én om gangen)

  function activeRecipe() { return paellaRecipes[complexity]; }
  function baseServings() { return activeRecipe().servings; }

  const scaleInput = document.getElementById('recipe-scale-input');
  function currentServings() {
    return parseFloat(scaleInput && scaleInput.value) || baseServings();
  }

  /* ----- Bygg den effektive ingredienslista (med bytter lagt inn) ----- */
  function effectiveIngredients() {
    return activeRecipe().ingredients.map(function (base) {
      const swap = swaps[base.id];
      if (swap) {
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

  function originalLabel(slotId) {
    return activeRecipe().ingredients.filter(function (i) { return i.id === slotId; })[0].label;
  }

  function isEditable(ing) {
    return !!swapOptions[ing.slotId] || ing.removable;
  }

  /* ----- Salt-/krydder-justering fra aktive bytter (kun på mål som finnes) ----- */
  function computeAdjustments() {
    const mult = {}, setv = {};
    const ids = activeRecipe().ingredients.map(function (i) { return i.id; });
    Object.keys(swaps).forEach(function (slotId) {
      const sw = swaps[slotId];
      if (!sw.adjust) return;
      sw.adjust.forEach(function (rule) {
        if (ids.indexOf(rule.target) === -1) return;
        if (rule.op === 'multiply') mult[rule.target] = (mult[rule.target] || 1) * rule.value;
        else if (rule.op === 'set') setv[rule.target] = rule.value;
      });
    });
    return { mult: mult, setv: setv };
  }

  /* ----- «Juster opp de andre» (maintain yield, samme rolle først) ----- */
  function gramsAt(ing) {
    const ratio = currentServings() / baseServings();
    const amt = ing.amount * ratio; // bulk er lineær
    if (ing.unit === 'stk') return amt * (PIECE_WEIGHT[ing.effId] || 100);
    return U.toGrams(amt, ing.unit, DENSITY[ing.effId] || 1);
  }

  function computeCompensation() {
    const items = effectiveIngredients();
    const roleFactor = {};
    let orphan = 0;

    BULK_ROLES.forEach(function (role) {
      let remaining = 0, comp = 0;
      items.forEach(function (ing) {
        if (ing.role !== role) return;
        if (removed[ing.slotId]) { if (compensate[ing.slotId]) comp += gramsAt(ing); }
        else remaining += gramsAt(ing);
      });
      if (comp > 0) {
        if (remaining > 0) roleFactor[role] = (remaining + comp) / remaining;
        else orphan += comp; // hele rollen fjernet → fordeles på all annen bulk
      }
    });

    let globalFactor = 1;
    if (orphan > 0) {
      let pool = 0;
      items.forEach(function (ing) {
        if (removed[ing.slotId]) return;
        if (BULK_ROLES.indexOf(ing.role) === -1) return;
        if (roleFactor[ing.role]) return;
        pool += gramsAt(ing);
      });
      if (pool > 0) globalFactor = (pool + orphan) / pool;
    }
    return { roleFactor: roleFactor, globalFactor: globalFactor };
  }

  /* ----- Mengdeberegning ----- */
  function scaleByType(amount, scaling, ratio) {
    if (scaling === 'fixed') return amount;
    if (scaling === 'nonlinear') return amount * (1 + (ratio - 1) * 0.5);
    return amount * ratio;
  }

  function convert(amount, fromUnit, toUnit, density) {
    if (fromUnit === toUnit) return amount;
    return U.fromGrams(U.toGrams(amount, fromUnit, density), toUnit, density);
  }

  function displayAmount(ing, adj, comp) {
    const ratio = currentServings() / baseServings();
    let amt = scaleByType(ing.amount, ing.scaling, ratio);

    // Kompensasjon for gjenværende bulk-ingredienser når noe er fjernet med «Ja».
    if (!removed[ing.slotId] && BULK_ROLES.indexOf(ing.role) !== -1) {
      if (comp.roleFactor[ing.role]) amt *= comp.roleFactor[ing.role];
      else if (comp.globalFactor !== 1) amt *= comp.globalFactor;
    }

    // Salt/krydder-justering fra aktive bytter.
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
    if (!opts || opts.length < 2) return '<span class="unit-label">' + ing.unit + '</span>';
    let html = '<select class="unit-select" data-slot="' + ing.slotId + '" aria-label="Måleenhet for ' + ing.label + '">';
    opts.forEach(function (u) {
      html += '<option value="' + u + '"' + (u === current ? ' selected' : '') + '>' + u + '</option>';
    });
    html += '</select>';
    return html;
  }

  function traditionBadge(ing) {
    if (!ing.tradition || !ing.swapped) return '';
    return ' <span class="tradition-badge tradition-' + ing.tradition + '">' + TRADITION_TEXT[ing.tradition] + '</span>';
  }

  function noteMarkup(ing) {
    const bits = [];
    if (ing.scaling === 'nonlinear') bits.push('smak til');
    if (ing.swapped) { bits.push(addStageText(ing.addStage)); if (ing.note) bits.push(ing.note); }
    else if (ing.note) bits.push(ing.note);
    if (!bits.length) return '';
    return '<span class="ingredient-note">' + bits.join(' · ') + '</span>';
  }

  function panelMarkup(ing) {
    if (openSlot !== ing.slotId) return '';
    let html = '<div class="ingredient-panel">';

    // Bytte-nedtrekk (hvis det finnes godkjente bytter for slotten).
    if (swapOptions[ing.slotId]) {
      html += '<label class="panel-row"><span class="panel-label">Bytt til</span>' +
        '<select class="ingredient-swap" data-slot="' + ing.slotId + '">' +
        '<option value="">Standard: ' + originalLabel(ing.slotId) + '</option>';
      swapOptions[ing.slotId].forEach(function (opt) {
        const trad = opt.tradition ? ' (' + TRADITION_TEXT[opt.tradition] + ')' : '';
        const sel = (swaps[ing.slotId] && swaps[ing.slotId].id === opt.id) ? ' selected' : '';
        html += '<option value="' + opt.id + '"' + sel + '>' + opt.label + trad + '</option>';
      });
      html += '</select></label>';
    }

    // Fjern / legg tilbake + «juster opp de andre»-valg.
    if (ing.removable) {
      if (!removed[ing.slotId]) {
        html += '<button type="button" class="panel-remove" data-slot="' + ing.slotId + '">Fjern ingrediens</button>';
      } else {
        html += '<div class="compensate-choice">' +
          '<span class="panel-label">Juster opp de andre så det rekker til ' + currentServings() + ' porsjoner?</span>' +
          '<div class="compensate-buttons">' +
            '<button type="button" class="compensate-yes' + (compensate[ing.slotId] ? ' active' : '') + '" data-slot="' + ing.slotId + '">Ja</button>' +
            '<button type="button" class="compensate-no' + (!compensate[ing.slotId] ? ' active' : '') + '" data-slot="' + ing.slotId + '">Nei</button>' +
          '</div>' +
          '<button type="button" class="panel-restore" data-slot="' + ing.slotId + '">Legg tilbake</button>' +
        '</div>';
      }
    }

    html += '</div>';
    return html;
  }

  function editButton(ing) {
    if (!isEditable(ing)) return '';
    const open = openSlot === ing.slotId ? ' open' : '';
    return '<button type="button" class="ingredient-edit-btn' + open + '" data-slot="' + ing.slotId +
      '" title="' + TOOLTIP + '" aria-label="' + TOOLTIP + '">endre</button>';
  }

  function renderIngredients(adj, comp) {
    const items = effectiveIngredients();
    listEl.innerHTML = items.map(function (ing) {
      const da = displayAmount(ing, adj, comp);
      const removedClass = removed[ing.slotId] ? ' ingredient-removed' : '';
      const hasUnitSelect = UNIT_OPTIONS[ing.effId] && UNIT_OPTIONS[ing.effId].length > 1;
      return '<li class="ingredient' + removedClass + '">' +
        '<span class="ingredient-qty">' +
          '<span class="ingredient-amount">' + da.text + '</span>' +
          (hasUnitSelect ? unitMarkup(ing) : '<span class="unit-label">' + da.unit + '</span>') +
        '</span>' +
        '<span class="ingredient-name">' + ing.label + traditionBadge(ing) + noteMarkup(ing) + '</span>' +
        editButton(ing) +
        panelMarkup(ing) +
      '</li>';
    }).join('');
  }

  function renderSteps() {
    stepsEl.innerHTML = activeRecipe().steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
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

    if (adj.mult.salt_added && adj.mult.salt_added < 1) {
      msgs.push({ cls: 'recipe-message', text: 'Et salt bytte er lagt til – vi har automatisk redusert tilsatt salt. Smak til på slutten.' });
    }

    if (complexity === 'kompleks') {
      if (removed.tomato) {
        const tomato = activeRecipe().ingredients.filter(function (i) { return i.id === 'tomato'; })[0];
        if (tomato && tomato.onRemove) msgs.push({ cls: 'recipe-message', text: tomato.onRemove.tip });
      }
    } else {
      const strong = anySaltySwap();
      msgs.push({ cls: 'recipe-message' + (strong ? ' recipe-message-strong' : ''), text: servedAcid.tip });
    }

    box.innerHTML = msgs.map(function (m) { return '<p class="' + m.cls + '">' + m.text + '</p>'; }).join('');
  }

  function hasChanges() {
    return Object.keys(swaps).length > 0 || Object.keys(removed).length > 0;
  }

  function render() {
    const adj = computeAdjustments();
    const comp = computeCompensation();
    renderIngredients(adj, comp);
    renderSteps();
    renderMessages(adj);
    const resetBtn = document.getElementById('reset-recipe');
    if (resetBtn) resetBtn.style.display = hasChanges() ? 'inline-block' : 'none';
  }

  /* ----- Tilbakestill tilpasninger (uten å bytte kompleksitet) ----- */
  function clearCustomizations() {
    [removed, compensate, swaps, unitState].forEach(function (obj) {
      Object.keys(obj).forEach(function (k) { delete obj[k]; });
    });
    openSlot = null;
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
    clearCustomizations();
    if (scaleInput) scaleInput.value = baseServings();
    buildComplexitySelector();
    render();
  }

  /* ----- Hendelser ----- */
  const selectorHost = document.getElementById('complexity-selector');
  if (selectorHost) {
    selectorHost.addEventListener('click', function (e) {
      const btn = e.target.closest('.complexity-button');
      if (btn) setComplexity(btn.dataset.level);
    });
  }

  const resetBtn = document.getElementById('reset-recipe');
  if (resetBtn) {
    resetBtn.addEventListener('click', function () { clearCustomizations(); render(); });
  }

  // Klikk i ingredienslista (delegering).
  listEl.addEventListener('click', function (e) {
    const edit = e.target.closest('.ingredient-edit-btn');
    if (edit) {
      const slot = edit.dataset.slot;
      openSlot = (openSlot === slot) ? null : slot; // åpne denne, lukk andre
      render();
      return;
    }
    const remove = e.target.closest('.panel-remove');
    if (remove) { removed[remove.dataset.slot] = true; compensate[remove.dataset.slot] = true; render(); return; }

    const restore = e.target.closest('.panel-restore');
    if (restore) { delete removed[restore.dataset.slot]; delete compensate[restore.dataset.slot]; render(); return; }

    const yes = e.target.closest('.compensate-yes');
    if (yes) { compensate[yes.dataset.slot] = true; render(); return; }

    const no = e.target.closest('.compensate-no');
    if (no) { compensate[no.dataset.slot] = false; render(); return; }
  });

  // Bytte / enhetsbytte (delegering).
  listEl.addEventListener('change', function (e) {
    const swapSel = e.target.closest('.ingredient-swap');
    if (swapSel) {
      const slot = swapSel.dataset.slot;
      const val = swapSel.value;
      if (!val) delete swaps[slot];
      else {
        const opt = (swapOptions[slot] || []).filter(function (o) { return o.id === val; })[0];
        if (opt) swaps[slot] = opt;
      }
      delete unitState[slot];
      render();
      return;
    }
    const unitSel = e.target.closest('.unit-select');
    if (unitSel) { unitState[unitSel.dataset.slot] = unitSel.value; render(); }
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
