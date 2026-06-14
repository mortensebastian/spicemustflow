/* ===== Tilpass oppskriften (paella) =====
   Rendrer ingredienser og fremgangsmåte fra paella-data.js, og gir brukeren:
     1) en kompleksitetsvelger (enkel/medium/kompleks, standard medium),
     2) en diskré «endre»-knapp ved hver utbyttbar/fjernbar ingrediens, som
        åpner en panel der man kan bytte eller fjerne ingrediensen,
     3) ved fjerning: valget om å justere opp de andre (samme rolle først),
     4) automatisk smaksbalanse via recipe-balance.js: salt løses fra et
        natrium-budsjett, og søtt/surt/bittert/umami gir tips når de faller mye.

   Skaleringen GJENBRUKER omregningen i recipe.js via window.RecipeUnits, og
   balansen recipe-balance.js via window.RecipeBalance. */

document.addEventListener('DOMContentLoaded', function () {
  if (typeof paellaRecipes === 'undefined' || !window.RecipeUnits || !window.RecipeBalance) return;
  const listEl = document.getElementById('ingredient-list');
  const stepsEl = document.getElementById('step-list');
  if (!listEl || !stepsEl) return;

  const U = window.RecipeUnits;
  const B = window.RecipeBalance;

  /* ----- Hjelpe-oppslag som hører til visningen (ikke datamodellen) ----- */
  const DENSITY = {
    rice: 0.85, stock: 1, fish_stock: 1, veg_stock: 1,
    olive_oil: 0.92, smoked_paprika: 0.5, sweet_paprika: 0.5,
    salt_added: 1.2, tomato: 1, turmeric_paprika: 0.5
  };
  const PIECE_WEIGHT = { red_pepper: 120, onion: 110, garlic: 5 };
  const BULK_ROLES = ['rice', 'liquid', 'protein', 'seafood', 'vegetable'];
  const AXES = ['sweet', 'sour', 'bitter', 'umami'];

  const UNIT_OPTIONS = {
    rice: ['dl', 'ml', 'g'],
    stock: ['dl', 'ml'], fish_stock: ['dl', 'ml'], veg_stock: ['dl', 'ml'],
    olive_oil: ['ss', 'ts', 'ml', 'g'],
    smoked_paprika: ['ts', 'g'], sweet_paprika: ['ts', 'g'],
    turmeric_paprika: ['ts', 'g'],
    salt_added: ['ts', 'g']
  };

  const TRADITION_TEXT = {
    traditional: 'tradisjonell', regional: 'regional', 'non-traditional': 'ikke tradisjonell'
  };

  // Salt-leveren (ingrediensen som regulerer salt-aksen) + meldinger for de
  // kvalitative aksene. Dette er paella-spesifikk konfig; motoren er generell.
  const SALT_LEVER = 'salt_added';
  const TASTE_MESSAGES = {
    sour: 'Retten blir mindre frisk/syrlig – server gjerne med rikelig sitron.',
    umami: 'Retten blir mindre fyldig (umami) – vurder litt ekstra kraft, tomat eller skalldyr.',
    sweet: 'Retten blir mindre søt – litt mer løk eller paprika kan balansere.'
  };

  const TOOLTIP = 'Trykk her for å bytte eller fjerne ingrediens, resten av oppskriften tilpasser seg automatisk';

  function addStageText(stage) {
    if (stage === 'end') return 'tilsettes mot slutten';
    if (stage === 'serve') return 'ved servering';
    return 'tilsettes tidlig (brunes/surres)';
  }

  /* ----- Tilstand ----- */
  let complexity = 'medium';
  const removed = {};
  const compensate = {};
  const swaps = {};
  const unitState = {};
  let openSlot = null;

  function activeRecipe() { return paellaRecipes[complexity]; }
  function baseServings() { return activeRecipe().servings; }

  const scaleInput = document.getElementById('recipe-scale-input');
  function currentServings() { return parseFloat(scaleInput && scaleInput.value) || baseServings(); }

  /* ----- Effektiv ingrediensliste (med bytter lagt inn) ----- */
  function effectiveIngredients() {
    return activeRecipe().ingredients.map(function (base) {
      const swap = swaps[base.id];
      if (swap) {
        return {
          slotId: base.id, effId: swap.id, label: swap.label,
          amount: swap.amount, unit: swap.unit,
          role: base.role, scaling: base.scaling, addStage: base.addStage,
          essential: base.essential, removable: base.removable,
          sodiumPer100g: swap.sodiumPer100g, taste: swap.taste,
          tradition: swap.tradition, note: swap.note, swapped: true
        };
      }
      return {
        slotId: base.id, effId: base.id, label: base.label,
        amount: base.amount, unit: base.unit,
        role: base.role, scaling: base.scaling, addStage: base.addStage,
        essential: base.essential, removable: base.removable,
        sodiumPer100g: base.sodiumPer100g, taste: base.taste,
        tradition: base.tradition, note: base.note, swapped: false,
        onRemove: base.onRemove, isPrimaryAcid: base.isPrimaryAcid
      };
    });
  }

  function originalLabel(slotId) {
    return activeRecipe().ingredients.filter(function (i) { return i.id === slotId; })[0].label;
  }
  function isEditable(ing) { return !!swapOptions[ing.slotId] || ing.removable; }

  /* ----- Gram (lineær bulk) ved gjeldende porsjoner ----- */
  function gramsAt(ing) {
    const amt = ing.amount * (currentServings() / baseServings());
    if (ing.unit === 'stk') return amt * (PIECE_WEIGHT[ing.effId] || 100);
    return U.toGrams(amt, ing.unit, DENSITY[ing.effId] || 1);
  }

  /* ----- «Juster opp de andre» (maintain yield, samme rolle først) ----- */
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
      if (comp > 0) { if (remaining > 0) roleFactor[role] = (remaining + comp) / remaining; else orphan += comp; }
    });
    let globalFactor = 1;
    if (orphan > 0) {
      let pool = 0;
      items.forEach(function (ing) {
        if (removed[ing.slotId] || BULK_ROLES.indexOf(ing.role) === -1 || roleFactor[ing.role]) return;
        pool += gramsAt(ing);
      });
      if (pool > 0) globalFactor = (pool + orphan) / pool;
    }
    return { roleFactor: roleFactor, globalFactor: globalFactor };
  }

  function compFactorFor(ing, comp) {
    if (removed[ing.slotId] || BULK_ROLES.indexOf(ing.role) === -1) return 1;
    if (comp.roleFactor[ing.role]) return comp.roleFactor[ing.role];
    if (comp.globalFactor !== 1) return comp.globalFactor;
    return 1;
  }

  /* ----- Smaksbalanse (salt-budsjett + tips), via recipe-balance.js ----- */
  function computeBalance(comp) {
    const def = activeRecipe().ingredients;
    const items = effectiveIngredients();

    // Mål: standardrettens natrium + smaksprofil (ingen endringer), nå-porsjoner.
    let targetSodium = 0;
    const targetProfile = { sweet: 0, sour: 0, bitter: 0, umami: 0 };
    def.forEach(function (ing) {
      const g = gramsAt(ing);
      targetSodium += (ing.sodiumPer100g || 0) / 100 * g;
      AXES.forEach(function (a) { targetProfile[a] += ((ing.taste && ing.taste[a]) || 0) * g; });
    });

    // Faktisk: gjeldende ingredienser (med kompensasjon), uten de fjernede.
    let actualNonLever = 0;
    const curProfile = { sweet: 0, sour: 0, bitter: 0, umami: 0 };
    items.forEach(function (ing) {
      if (removed[ing.slotId]) return;
      const g = gramsAt(ing) * compFactorFor(ing, comp);
      if (ing.slotId !== SALT_LEVER) actualNonLever += (ing.sodiumPer100g || 0) / 100 * g;
      AXES.forEach(function (a) { curProfile[a] += ((ing.taste && ing.taste[a]) || 0) * g; });
    });

    // Løs salt-leveren mot målet.
    const leverIng = def.filter(function (i) { return i.id === SALT_LEVER; })[0];
    const leverGrams = B.leverGrams(targetSodium, actualNonLever, leverIng.sodiumPer100g);
    const leverDensity = DENSITY[SALT_LEVER] || 1;
    let leverAmount = U.fromGrams(leverGrams, leverIng.unit, leverDensity);
    leverAmount = Math.max(0, Math.min(2 * leverIng.amount, leverAmount)); // rimelige grenser

    const defaultLeverGrams = gramsAt(leverIng);
    let leverChanged = null;
    if (leverGrams < defaultLeverGrams * 0.95) leverChanged = 'down';
    else if (leverGrams > defaultLeverGrams * 1.05) leverChanged = 'up';

    const tips = B.tasteTips(curProfile, targetProfile, TASTE_MESSAGES);
    return { leverId: SALT_LEVER, leverUnit: leverIng.unit, leverAmount: leverAmount, leverChanged: leverChanged, tips: tips };
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

  function displayAmount(ing, comp, balance) {
    const density = DENSITY[ing.effId] || 1;
    const targetUnit = unitState[ing.slotId] || ing.unit;

    // Salt-leveren styres helt av budsjettet (ikke vanlig skalering).
    if (ing.slotId === balance.leverId) {
      return { text: U.formatAmount(convert(balance.leverAmount, ing.unit, targetUnit, density)), unit: targetUnit };
    }

    let amt = scaleByType(ing.amount, ing.scaling, currentServings() / baseServings());
    amt *= compFactorFor(ing, comp);
    return { text: U.formatAmount(convert(amt, ing.unit, targetUnit, density)), unit: targetUnit };
  }

  /* ----- Rendering ----- */
  function unitMarkup(ing) {
    const opts = UNIT_OPTIONS[ing.effId];
    const current = unitState[ing.slotId] || ing.unit;
    if (!opts || opts.length < 2) return '<span class="unit-label">' + ing.unit + '</span>';
    let html = '<select class="unit-select" data-slot="' + ing.slotId + '" aria-label="Måleenhet for ' + ing.label + '">';
    opts.forEach(function (u) { html += '<option value="' + u + '"' + (u === current ? ' selected' : '') + '>' + u + '</option>'; });
    return html + '</select>';
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
    return html + '</div>';
  }
  function editButton(ing) {
    if (!isEditable(ing)) return '';
    const open = openSlot === ing.slotId ? ' open' : '';
    return '<button type="button" class="ingredient-edit-btn' + open + '" data-slot="' + ing.slotId +
      '" title="' + TOOLTIP + '" aria-label="' + TOOLTIP + '">endre</button>';
  }

  function renderIngredients(comp, balance) {
    const items = effectiveIngredients();
    listEl.innerHTML = items.map(function (ing) {
      const da = displayAmount(ing, comp, balance);
      const removedClass = removed[ing.slotId] ? ' ingredient-removed' : '';
      const hasUnitSelect = UNIT_OPTIONS[ing.effId] && UNIT_OPTIONS[ing.effId].length > 1;
      return '<li class="ingredient' + removedClass + '">' +
        '<span class="ingredient-qty">' +
          '<span class="ingredient-amount">' + da.text + '</span>' +
          (hasUnitSelect ? unitMarkup(ing) : '<span class="unit-label">' + da.unit + '</span>') +
        '</span>' +
        '<span class="ingredient-name">' + ing.label + traditionBadge(ing) + noteMarkup(ing) + '</span>' +
        editButton(ing) + panelMarkup(ing) +
      '</li>';
    }).join('');
  }

  function renderSteps() {
    stepsEl.innerHTML = activeRecipe().steps.map(function (s) { return '<li>' + s + '</li>'; }).join('');
  }

  function renderMessages(balance) {
    const box = document.getElementById('recipe-messages');
    if (!box) return;
    const msgs = [];
    if (balance.leverChanged === 'down') {
      msgs.push('Retten ble saltere – vi har automatisk redusert tilsatt salt. Smak til på slutten.');
    } else if (balance.leverChanged === 'up') {
      msgs.push('Du tok bort noe salt – vi har automatisk økt tilsatt salt litt. Smak til på slutten.');
    }
    balance.tips.forEach(function (t) { msgs.push(t); });
    box.innerHTML = msgs.map(function (m) { return '<p class="recipe-message">' + m + '</p>'; }).join('');
  }

  function hasChanges() { return Object.keys(swaps).length > 0 || Object.keys(removed).length > 0; }

  function render() {
    const comp = computeCompensation();
    const balance = computeBalance(comp);
    renderIngredients(comp, balance);
    renderSteps();
    renderMessages(balance);
    const resetBtn = document.getElementById('reset-recipe');
    if (resetBtn) resetBtn.style.display = hasChanges() ? 'inline-block' : 'none';
  }

  function clearCustomizations() {
    [removed, compensate, swaps, unitState].forEach(function (obj) {
      Object.keys(obj).forEach(function (k) { delete obj[k]; });
    });
    openSlot = null;
  }

  /* ----- Kompleksitetsvelger ----- */
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
  if (resetBtn) resetBtn.addEventListener('click', function () { clearCustomizations(); render(); });

  listEl.addEventListener('click', function (e) {
    const edit = e.target.closest('.ingredient-edit-btn');
    if (edit) { const slot = edit.dataset.slot; openSlot = (openSlot === slot) ? null : slot; render(); return; }
    const remove = e.target.closest('.panel-remove');
    if (remove) { removed[remove.dataset.slot] = true; compensate[remove.dataset.slot] = true; render(); return; }
    const restore = e.target.closest('.panel-restore');
    if (restore) { delete removed[restore.dataset.slot]; delete compensate[restore.dataset.slot]; render(); return; }
    const yes = e.target.closest('.compensate-yes');
    if (yes) { compensate[yes.dataset.slot] = true; render(); return; }
    const no = e.target.closest('.compensate-no');
    if (no) { compensate[no.dataset.slot] = false; render(); return; }
  });

  listEl.addEventListener('change', function (e) {
    const swapSel = e.target.closest('.ingredient-swap');
    if (swapSel) {
      const slot = swapSel.dataset.slot, val = swapSel.value;
      if (!val) delete swaps[slot];
      else { const opt = (swapOptions[slot] || []).filter(function (o) { return o.id === val; })[0]; if (opt) swaps[slot] = opt; }
      delete unitState[slot];
      render();
      return;
    }
    const unitSel = e.target.closest('.unit-select');
    if (unitSel) { unitState[unitSel.dataset.slot] = unitSel.value; render(); }
  });

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
