/* ===== Tilpass oppskriften (data-drevet) =====
   Rendrer en oppskrift fra ETT config-objekt, window.RECIPE, som hver
   oppskrifts-datafil (paella-data.js, fiskesuppe-data.js, …) leverer. Samme
   motor driver alle retter; en ny rett er ren data + en HTML fra mal.

   window.RECIPE = {
     recipes: { enkel, medium, kompleks },   // hver: { label, servings, ingredients[], steps[] }
     swapOptions: { <slotId>: [ ...bytter ] },
     servedAcid: { tip } | null,             // stående sitron-tips (retter uten syre-ingrediens)
     density:     { <id>: gPerMl },          // for g-omregning
     pieceWeight: { <id>: gramPerStk },      // for «juster opp de andre»
     unitOptions: { <id>: [enheter] },       // hvilke enheter man kan bytte mellom
     bulkRoles:   [ ...roller som teller som «mengde mat» ],
     levers:      [ { axis, id } ],          // selvjusterende balanse-ingredienser
     requireRoles:[ ...roller retten må ha (f.eks. 'acid') ],
     tasteMessages: { sour, umami, sweet },  // inline-tips ved fjerning
     leverMessages: { <axis>: { down, up } } // melding når en lever justeres
   }

   Funksjoner: kompleksitetsvelger, porsjoner, inline bytt/fjern, «juster opp de
   andre» (maintain yield, samme rolle først), og automatisk smaksbalanse der
   hver lever (salt/sur/søt) løses mot rettens mål. Omregning gjenbrukes fra
   recipe.js (window.RecipeUnits) og balansen fra recipe-balance.js. */

document.addEventListener('DOMContentLoaded', function () {
  const R = window.RECIPE;
  if (!R || !window.RecipeUnits || !window.RecipeBalance) return;
  const listEl = document.getElementById('ingredient-list');
  const stepsEl = document.getElementById('step-list');
  if (!listEl || !stepsEl) return;

  const U = window.RecipeUnits;
  const B = window.RecipeBalance;

  const TRADITION_TEXT = {
    traditional: 'tradisjonell', regional: 'regional', 'non-traditional': 'ikke tradisjonell'
  };
  const TOOLTIP = 'Trykk her for å bytte eller fjerne ingrediens, resten av oppskriften tilpasser seg automatisk';

  function addStageText(stage) {
    if (stage === 'end') return 'tilsettes mot slutten';
    if (stage === 'serve') return 'ved servering';
    return 'tilsettes tidlig (brunes/surres)';
  }

  /* ----- Tilstand ----- */
  let complexity = R.recipes.medium ? 'medium' : Object.keys(R.recipes)[0];
  const removed = {};
  const compensate = {};
  const swaps = {};
  const unitState = {};
  const preciseUnits = {};
  let openSlot = null;
  let precise = false;

  function activeRecipe() { return R.recipes[complexity]; }
  function baseServings() { return activeRecipe().servings; }

  const scaleInput = document.getElementById('recipe-scale-input');
  function currentServings() { return parseFloat(scaleInput && scaleInput.value) || baseServings(); }

  /* ----- Hjelpere ----- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function leverIds() { return (R.levers || []).map(function (l) { return l.id; }); }
  function strengthOf(ing, axis) {
    return axis === 'salt' ? (ing.sodiumPer100g || 0) : ((ing.taste && ing.taste[axis]) || 0);
  }

  function effectiveIngredients() {
    return activeRecipe().ingredients.map(function (base) {
      const swap = swaps[base.id];
      if (swap) {
        return {
          slotId: base.id, effId: swap.id, label: swap.label, amount: swap.amount, unit: swap.unit,
          role: base.role, scaling: base.scaling, addStage: base.addStage,
          essential: base.essential, removable: base.removable, sodiumPer100g: swap.sodiumPer100g,
          taste: swap.taste, tradition: swap.tradition, note: swap.note, swapped: true
        };
      }
      return {
        slotId: base.id, effId: base.id, label: base.label, amount: base.amount, unit: base.unit,
        role: base.role, scaling: base.scaling, addStage: base.addStage,
        essential: base.essential, removable: base.removable, sodiumPer100g: base.sodiumPer100g,
        taste: base.taste, tradition: base.tradition, note: base.note, swapped: false,
        onRemove: base.onRemove, isPrimaryAcid: base.isPrimaryAcid
      };
    });
  }

  function originalLabel(slotId) {
    return activeRecipe().ingredients.filter(function (i) { return i.id === slotId; })[0].label;
  }
  function isEditable(ing) { return !!R.swapOptions[ing.slotId] || ing.removable; }

  function ingredientTip(ing) {
    const parts = [];
    if (ing.note) parts.push(ing.note);
    const sw = R.swapOptions[ing.slotId];
    if (sw && sw.length) parts.push('Kan byttes med: ' + sw.map(function (o) { return o.label; }).join(', '));
    return parts.join(' — ');
  }

  function removedTip(ing) {
    if (!removed[ing.slotId]) return '';
    let text = '';
    if (ing.onRemove && ing.onRemove.tip) text = ing.onRemove.tip;
    else {
      const t = ing.taste || {}, m = R.tasteMessages || {};
      if ((t.sour || 0) >= 2) text = m.sour;
      else if ((t.umami || 0) >= 2) text = m.umami;
      else if ((t.sweet || 0) >= 2) text = m.sweet;
    }
    if (!text) return '';
    return '<span class="ingredient-removed-tip">' + text + '</span>';
  }

  /* ----- Gram ved gjeldende porsjoner ----- */
  function gramsAt(ing) {
    const amt = ing.amount * (currentServings() / baseServings());
    if (ing.unit === 'stk') return amt * ((R.pieceWeight && R.pieceWeight[ing.effId]) || 100);
    return U.toGrams(amt, ing.unit, (R.density && R.density[ing.effId]) || 1);
  }

  /* ----- «Juster opp de andre» (maintain yield, samme rolle først) ----- */
  function computeCompensation() {
    const items = effectiveIngredients();
    const roleFactor = {};
    let orphan = 0;
    (R.bulkRoles || []).forEach(function (role) {
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
        if (removed[ing.slotId] || (R.bulkRoles || []).indexOf(ing.role) === -1 || roleFactor[ing.role]) return;
        pool += gramsAt(ing);
      });
      if (pool > 0) globalFactor = (pool + orphan) / pool;
    }
    return { roleFactor: roleFactor, globalFactor: globalFactor };
  }
  function compFactorFor(ing, comp) {
    if (removed[ing.slotId] || (R.bulkRoles || []).indexOf(ing.role) === -1) return 1;
    if (comp.roleFactor[ing.role]) return comp.roleFactor[ing.role];
    if (comp.globalFactor !== 1) return comp.globalFactor;
    return 1;
  }

  /* ----- Smaksbalanse: løs hver lever (salt/sur/søt) mot rettens mål ----- */
  function computeBalance(comp) {
    const def = activeRecipe().ingredients;
    const items = effectiveIngredients();
    const levers = {};

    (R.levers || []).forEach(function (lev) {
      const leverIng = def.filter(function (i) { return i.id === lev.id; })[0];
      if (!leverIng || removed[lev.id]) return; // leveren mangler/fjernet → guard håndterer

      let target = 0;
      def.forEach(function (ing) { target += strengthOf(ing, lev.axis) / 100 * gramsAt(ing); });

      let actual = 0;
      items.forEach(function (ing) {
        if (removed[ing.slotId] || ing.slotId === lev.id) return;
        actual += strengthOf(ing, lev.axis) / 100 * (gramsAt(ing) * compFactorFor(ing, comp));
      });

      const grams = B.leverGrams(target, actual, strengthOf(leverIng, lev.axis));
      let amount = U.fromGrams(grams, leverIng.unit, (R.density && R.density[lev.id]) || 1);
      amount = Math.max(0, Math.min(2 * leverIng.amount, amount));

      const defGrams = gramsAt(leverIng);
      let changed = null;
      if (grams < defGrams * 0.95) changed = 'down';
      else if (grams > defGrams * 1.05) changed = 'up';

      levers[lev.id] = { amount: amount, unit: leverIng.unit, axis: lev.axis, changed: changed };
    });

    return { levers: levers };
  }

  /* ----- Syrebalanse (rolle-vakt + tips) ----- */
  function presentRoles() {
    const roles = {};
    effectiveIngredients().forEach(function (ing) { if (!removed[ing.slotId]) roles[ing.role] = true; });
    return Object.keys(roles);
  }
  function recipeDesignHasAcid() {
    return activeRecipe().ingredients.some(function (i) { return i.role === 'acid'; });
  }
  function anyRichSwap() {
    return Object.keys(swaps).some(function (s) { return (swaps[s].sodiumPer100g || 0) > 250; });
  }
  function acidMessage() {
    const required = R.requireRoles || [];
    if (required.indexOf('acid') === -1) return null;
    const missingAcid = B.missingRoles(presentRoles(), ['acid']).length > 0;
    if (recipeDesignHasAcid() && missingAcid) {
      const hasInline = activeRecipe().ingredients.some(function (i) {
        return i.role === 'acid' && removed[i.id] && i.onRemove && i.onRemove.tip;
      });
      if (!hasInline) return { text: 'Retten mistet syren sin – server med rikelig sitron, ellers blir den flat og tung.', strong: true };
      if (anyRichSwap() && R.servedAcid) return { text: R.servedAcid.tip, strong: true };
      return null;
    }
    if (!recipeDesignHasAcid() && R.servedAcid) return { text: R.servedAcid.tip, strong: anyRichSwap() };
    if (anyRichSwap() && R.servedAcid) return { text: R.servedAcid.tip, strong: true };
    return null;
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
  function fmt(value) {
    return precise ? U.formatAmountPrecise(value) : U.formatAmount(value);
  }
  function displayAmount(ing, comp, balance) {
    const density = (R.density && R.density[ing.effId]) || 1;
    const targetUnit = unitState[ing.slotId] || ing.unit;
    const lev = balance.levers[ing.slotId];
    if (lev) {
      return { text: fmt(convert(lev.amount, ing.unit, targetUnit, density)), unit: targetUnit };
    }
    let amt = scaleByType(ing.amount, ing.scaling, currentServings() / baseServings());
    amt *= compFactorFor(ing, comp);
    return { text: fmt(convert(amt, ing.unit, targetUnit, density)), unit: targetUnit };
  }

  /* ----- Rendering ----- */
  function unitMarkup(ing) {
    const opts = R.unitOptions && R.unitOptions[ing.effId];
    const current = unitState[ing.slotId] || ing.unit;
    if (!opts || opts.length < 2) return '<span class="unit-label">' + ing.unit + '</span>';
    let html = '<select class="unit-select" data-slot="' + ing.slotId + '" aria-label="Måleenhet for ' + esc(ing.label) + '">';
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
    if (R.swapOptions[ing.slotId]) {
      html += '<label class="panel-row"><span class="panel-label">Bytt til</span>' +
        '<select class="ingredient-swap" data-slot="' + ing.slotId + '">' +
        '<option value="">Standard: ' + originalLabel(ing.slotId) + '</option>';
      R.swapOptions[ing.slotId].forEach(function (opt) {
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
          '<button type="button" class="panel-restore" data-slot="' + ing.slotId + '">Legg til igjen</button>' +
        '</div>';
      }
    }
    return html + '</div>';
  }
  function editButton(ing) {
    if (!isEditable(ing)) return '';
    const open = openSlot === ing.slotId ? ' open' : '';
    return '<button type="button" class="ingredient-edit-btn has-tip' + open + '" data-slot="' + ing.slotId +
      '" data-tip="' + esc(TOOLTIP) + '" aria-label="' + esc(TOOLTIP) + '">endre</button>';
  }

  function renderIngredients(comp, balance) {
    listEl.innerHTML = effectiveIngredients().map(function (ing) {
      const da = displayAmount(ing, comp, balance);
      const removedClass = removed[ing.slotId] ? ' ingredient-removed' : '';
      const hasUnitSelect = R.unitOptions && R.unitOptions[ing.effId] && R.unitOptions[ing.effId].length > 1;
      const tip = ingredientTip(ing);
      const nameClass = tip ? 'ingredient-name has-tip' : 'ingredient-name';
      const nameAttr = tip ? ' data-tip="' + esc(tip) + '"' : '';
      return '<li class="ingredient' + removedClass + '">' +
        '<span class="ingredient-qty">' +
          '<span class="ingredient-amount">' + da.text + '</span>' +
          (hasUnitSelect ? unitMarkup(ing) : '<span class="unit-label">' + da.unit + '</span>') +
        '</span>' +
        '<span class="' + nameClass + '"' + nameAttr + '>' + ing.label + traditionBadge(ing) + noteMarkup(ing) + '</span>' +
        editButton(ing) + removedTip(ing) + panelMarkup(ing) +
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
    const lm = R.leverMessages || {};
    Object.keys(balance.levers).forEach(function (id) {
      const lev = balance.levers[id];
      if (lev.changed && lm[lev.axis] && lm[lev.axis][lev.changed]) {
        msgs.push({ text: lm[lev.axis][lev.changed], strong: false });
      }
    });
    const acid = acidMessage();
    if (acid) msgs.push(acid);
    box.innerHTML = msgs.map(function (m) {
      return '<p class="recipe-message' + (m.strong ? ' recipe-message-strong' : '') + '">' + m.text + '</p>';
    }).join('');
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
    [removed, compensate, swaps, unitState, preciseUnits].forEach(function (obj) {
      Object.keys(obj).forEach(function (k) { delete obj[k]; });
    });
    precise = false;
    openSlot = null;
  }

  /* ----- Kompleksitetsvelger ----- */
  function buildComplexitySelector() {
    const host = document.getElementById('complexity-selector');
    if (!host) return;
    host.innerHTML = Object.keys(R.recipes).map(function (key) {
      const active = key === complexity ? ' active' : '';
      return '<button type="button" class="complexity-button' + active + '" data-level="' + key + '">' +
        R.recipes[key].label + '</button>';
    }).join('');
  }
  function setComplexity(level) {
    if (!R.recipes[level] || level === complexity) return;
    complexity = level;
    clearCustomizations();
    if (scaleInput) scaleInput.value = baseServings();
    buildComplexitySelector();
    buildPrecisionToggle();
    render();
  }

  /* ----- "Nøyaktig" (gram) - kun synlig på kompleks ----- */
  function applyPreciseUnits() {
    effectiveIngredients().forEach(function (ing) {
      const opts = R.unitOptions && R.unitOptions[ing.effId];
      if (opts && opts.indexOf('g') !== -1 && ing.unit !== 'g' && ing.unit !== 'stk') {
        unitState[ing.slotId] = 'g';
        preciseUnits[ing.slotId] = true;
      }
    });
  }
  function clearPreciseUnits() {
    Object.keys(preciseUnits).forEach(function (id) {
      delete unitState[id];
      delete preciseUnits[id];
    });
  }
  function buildPrecisionToggle() {
    const host = document.getElementById('precision-toggle');
    if (!host) return;
    if (complexity !== 'kompleks') {
      host.innerHTML = '';
      return;
    }
    host.innerHTML = '<label class="customize-switch"><input type="checkbox" id="precision-checkbox"' +
      (precise ? ' checked' : '') + '> Nøyaktig (gram)</label>';
    document.getElementById('precision-checkbox').addEventListener('change', function (e) {
      precise = e.target.checked;
      if (precise) applyPreciseUnits();
      else clearPreciseUnits();
      render();
    });
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
  if (resetBtn) resetBtn.addEventListener('click', function () { clearCustomizations(); buildPrecisionToggle(); render(); });

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
      else { const opt = (R.swapOptions[slot] || []).filter(function (o) { return o.id === val; })[0]; if (opt) swaps[slot] = opt; }
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
  buildPrecisionToggle();
  render();
});
