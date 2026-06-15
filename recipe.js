// ===== Oppskrift: skalering og måleenheter =====
// Brukes på oppskriftssider med en statisk ingrediensliste (f.eks.
// lussekatter.html). Hver ingrediens har data-amount/data-unit som gjelder for
// grunnoppskriften (data-base-yield på antall-feltet), og kan ha data-density
// (g per ml) for å regne om mellom volum (dl/ss/ts) og vekt (g).
//
// Omregnings-funksjonene eksponeres også på window.RecipeUnits, slik at andre
// filer (f.eks. recipe-adapter.js på paella) kan GJENBRUKE samme omregning i
// stedet for å lage en ny.

// Hvor mange milliliter én av hver volumenhet er.
var ML_PER_UNIT = { dl: 100, ss: 15, ts: 5, ml: 1 };

// Gjør om en mengde til gram. "stk"/"g" (og ukjente enheter) er allerede en
// vekt/antall og trenger ikke regnes om via tetthet.
function toGrams(amount, unit, density) {
  if (unit === 'g' || unit === 'stk' || !ML_PER_UNIT[unit]) return amount;
  return amount * ML_PER_UNIT[unit] * density;
}

// Det motsatte av toGrams: gram tilbake til ønsket enhet.
function fromGrams(grams, unit, density) {
  if (unit === 'g' || unit === 'stk' || !ML_PER_UNIT[unit]) return grams;
  return grams / density / ML_PER_UNIT[unit];
}

// Runder pent til norsk visning: små mengder til nærmeste kvart, store mengder
// til nærmeste hele. Bruker komma som desimaltegn.
function formatAmount(value) {
  var rounded = value < 10
    ? Math.round(value * 4) / 4
    : Math.round(value);

  return rounded
    .toFixed(2)
    .replace(/0+$/, '')
    .replace(/\.$/, '')
    .replace('.', ',');
}

// "Nøyaktig"-visning (kun kompleks-nivå): runder til nærmeste 0,1 uansett
// størrelse, slik at gram/ml ikke avrundes bort til nærmeste kvart/hele.
function formatAmountPrecise(value) {
  var rounded = Math.round(value * 10) / 10;

  return rounded
    .toFixed(2)
    .replace(/0+$/, '')
    .replace(/\.$/, '')
    .replace('.', ',');
}

// Gjør omregningen tilgjengelig for andre filer.
window.RecipeUnits = {
  ML_PER_UNIT: ML_PER_UNIT,
  toGrams: toGrams,
  fromGrams: fromGrams,
  formatAmount: formatAmount,
  formatAmountPrecise: formatAmountPrecise
};


document.addEventListener('DOMContentLoaded', function () {
  const scaleInput = document.getElementById('recipe-scale-input');
  const decreaseButton = document.getElementById('scale-decrease');
  const increaseButton = document.getElementById('scale-increase');
  const ingredients = document.querySelectorAll('.recipe-ingredients .ingredient[data-amount]');

  // Ingen statisk ingrediensliste (f.eks. paella, der adapteren rendrer listen
  // selv) – da gjør auto-skaleringen ingenting, og adapteren overtar.
  if (!scaleInput || ingredients.length === 0) return;

  // Grunnoppskriftens mengde (f.eks. 24 lussekatter eller 4 porsjoner).
  // Leses fra data-base-yield på antall-feltet, ellers feltets startverdi,
  // og som siste utvei 24.
  const BASE_COUNT =
    parseFloat(scaleInput.dataset.baseYield) ||
    parseFloat(scaleInput.value) ||
    24;

  function updateIngredient(li) {
    const baseAmount = parseFloat(li.dataset.amount);
    const baseUnit = li.dataset.unit;
    const density = parseFloat(li.dataset.density || '1');
    const select = li.querySelector('.unit-select');
    const amountSpan = li.querySelector('.ingredient-amount');
    const scale = parseFloat(scaleInput.value) / BASE_COUNT;

    const scaledAmount = baseAmount * scale;
    const targetUnit = select ? select.value : baseUnit;

    let displayAmount;
    if (targetUnit === baseUnit) {
      displayAmount = scaledAmount;
    } else {
      const grams = toGrams(scaledAmount, baseUnit, density);
      displayAmount = fromGrams(grams, targetUnit, density);
    }

    amountSpan.textContent = formatAmount(displayAmount);
  }

  function updateAll() {
    ingredients.forEach(updateIngredient);
  }

  // Hver ingrediens med en nedtrekksmeny regner seg selv om når brukeren
  // bytter måleenhet (f.eks. fra ss til g).
  ingredients.forEach(function (li) {
    const select = li.querySelector('.unit-select');
    if (select) {
      select.addEventListener('change', function () {
        updateIngredient(li);
      });
    }
  });

  // Antall-feltet: nytt tall → alle ingrediensene regnes om.
  scaleInput.addEventListener('input', updateAll);

  function step(direction) {
    const stepSize = parseInt(scaleInput.step, 10) || 1;
    const min = parseInt(scaleInput.min, 10) || stepSize;
    const max = parseInt(scaleInput.max, 10) || Infinity;
    const current = parseInt(scaleInput.value, 10) || BASE_COUNT;
    const next = current + direction * stepSize;

    scaleInput.value = Math.min(max, Math.max(min, next));
    updateAll();
  }

  if (decreaseButton) {
    decreaseButton.addEventListener('click', function () {
      step(-1);
    });
  }

  if (increaseButton) {
    increaseButton.addEventListener('click', function () {
      step(1);
    });
  }
});
