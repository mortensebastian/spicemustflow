// ===== Lussekatt-oppskrift: skalering og måleenheter =====
// Hver ingrediens i lussekatter.html har data-amount/data-unit som gjelder
// for 24 stykker (oppskriftens grunnoppskrift). Denne filen:
//  1. regner om alle mengder når brukeren endrer "Antall lussekatter"
//  2. regner om mellom måleenheter (dl/ss/ts/ml/g) når brukeren bytter
//     enhet i nedtrekksmenyen ved siden av en ingrediens

document.addEventListener('DOMContentLoaded', function () {
  const BASE_COUNT = 24; // grunnoppskriften gir 24 stykker

  // Hvor mange milliliter én av hver volumenhet er.
  const ML_PER_UNIT = { dl: 100, ss: 15, ts: 5, ml: 1 };

  const scaleInput = document.getElementById('recipe-scale-input');
  const decreaseButton = document.getElementById('scale-decrease');
  const increaseButton = document.getElementById('scale-increase');
  const ingredients = document.querySelectorAll('.recipe-ingredients .ingredient[data-amount]');

  if (!scaleInput || ingredients.length === 0) return;

  // Gjør om en mengde til gram. "stk" og "g" er allerede en vekt/antall,
  // og trenger ikke regnes om via tetthet.
  function toGrams(amount, unit, density) {
    if (unit === 'g' || unit === 'stk') return amount;
    return amount * ML_PER_UNIT[unit] * density;
  }

  // Det motsatte av toGrams: gram tilbake til ønsket enhet.
  function fromGrams(grams, unit, density) {
    if (unit === 'g' || unit === 'stk') return grams;
    return grams / density / ML_PER_UNIT[unit];
  }

  // Runder pent til norsk visning: små mengder til nærmeste kvart,
  // store mengder til nærmeste hele. Bruker komma som dessimaltegn.
  function formatAmount(value) {
    const rounded = value < 10
      ? Math.round(value * 4) / 4
      : Math.round(value);

    return rounded
      .toFixed(2)
      .replace(/0+$/, '')
      .replace(/\.$/, '')
      .replace('.', ',');
  }

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

  // Hver ingrediens med en nedtrekksmeny regner seg selv om når
  // brukeren bytter måleenhet (f.eks. fra ss til g).
  ingredients.forEach(function (li) {
    const select = li.querySelector('.unit-select');
    if (select) {
      select.addEventListener('change', function () {
        updateIngredient(li);
      });
    }
  });

  // Antall-feltet: skriver brukeren et nytt tall, regnes alle
  // ingrediensene om på nytt ut fra grunnoppskriften (24 stykker).
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
