/* ===== Handlekurv-siden =====
   Denne filen styrer KUN selve handlekurv-siden (handlekurv.html).
   Den gjør tre ting:
     1. Velger riktig tema (CSS) ut fra hvilken front kunden kom fra.
     2. Tegner varene i kurven, med mulighet til å endre antall.
     3. Tar imot leveringsinfo i kassen (betaling kobles på senere).

   Er butikken AV (orderingEnabled = false i config.js), vises ingen kurv –
   da viser vi en kort "åpner snart"-beskjed i stedet. */


/* ===== 1. Velg tema ut fra adressen =====
   Adressen ser slik ut: handlekurv.html?butikk=lussekatter
   Vi leser ut verdien etter "butikk=" og bruker den til å laste riktig
   CSS-fil, sette riktig navn, og lenke tilbake til riktig butikk.

   "URLSearchParams" er nettleserens innebygde hjelper for å lese slike
   verdier fra adressen. Da slipper vi å pirke i teksten selv. */
function applyTheme() {
  const params = new URLSearchParams(window.location.search);
  let storefront = params.get("butikk");

  // Mangler markøren, faller vi tilbake på hverdagsbutikken
  if (storefront !== "lussekatter") {
    storefront = "hverdag";
  }

  // Velg riktige verdier for hver front
  let themeFile;
  let storeName;
  let backLink;

  if (storefront === "lussekatter") {
    themeFile = "style-lussekatter.css";
    storeName = "Lussekatter";
    backLink = "lussekatter.html";
  } else {
    themeFile = "style-spiceflow.css";
    storeName = "SpiceFlow";
    backLink = "spiceflow.html";
  }

  // Sett body-markøren slik at felles-CSS vet hvilken front dette er
  document.body.setAttribute("data-storefront", storefront);

  // Last inn riktig tema-CSS ved å lage en <link>-tag og legge den i <head>
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = themeFile;
  document.head.appendChild(link);

  // Skriv butikknavnet og pek "tilbake"-lenken til riktig front
  const nameElements = document.querySelectorAll(".store-name");
  nameElements.forEach(function (element) {
    element.textContent = storeName;
  });

  const backElement = document.getElementById("back-to-store");
  if (backElement) {
    backElement.href = backLink;
    backElement.textContent = "← Tilbake til " + storeName;
  }
}


/* ===== Butikken er av =====
   Hvis noen går rett til handlekurven mens butikken er stengt, viser vi
   en kort beskjed i stedet for kurv og kasse. */
function showShopClosed() {
  const container = document.getElementById("cart-items");
  const summary = document.querySelector(".cart-summary");
  const checkout = document.querySelector(".checkout");
  const total = document.getElementById("cart-total");
  const cartLink = document.querySelector(".cart-link");

  if (container) {
    container.innerHTML =
      '<p class="cart-empty">Butikken åpner snart. Meld deg på ventelisten på forsiden, så gir vi deg beskjed ved lansering.</p>';
  }
  if (summary) {
    summary.style.display = "none";
  }
  if (checkout) {
    checkout.style.display = "none";
  }
  if (total) {
    total.textContent = "";
  }
  if (cartLink) {
    cartLink.style.display = "none";
  }
}


/* ===== 2. Tegn varene i kurven ===== */

/* Lager HTML for én rad i kurven (ett produkt).
   Hver rad har minus- og pluss-knapp for antall, og en fjern-knapp.
   Vi legger data-id på knappene så vi vet hvilket produkt de gjelder. */
function buildCartRow(item) {
  const product = findProduct(item.id);
  if (!product) {
    return ""; // Produktet finnes ikke lenger – hopp over det
  }

  const lineTotal = product.price * item.quantity;

  return (
    '<div class="cart-row">' +
      '<img class="cart-image" src="' + product.image + '" alt="' + product.name + '">' +
      '<div class="cart-info">' +
        '<h3 class="cart-name">' + product.name + '</h3>' +
        '<p class="cart-unit-price">' + product.price + ' kr per stk</p>' +
      '</div>' +
      '<div class="cart-quantity">' +
        '<button class="qty-button" data-id="' + product.id + '" data-action="decrease">−</button>' +
        '<span class="qty-number">' + item.quantity + '</span>' +
        '<button class="qty-button" data-id="' + product.id + '" data-action="increase">+</button>' +
      '</div>' +
      '<span class="cart-line-total">' + lineTotal + ' kr</span>' +
      '<button class="remove-button" data-id="' + product.id + '">Fjern</button>' +
    '</div>'
  );
}

/* Tegner hele kurven på nytt: alle rader + totalsum.
   Er kurven tom, viser vi en vennlig melding i stedet. */
function renderCart() {
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");
  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Handlekurven er tom.</p>';
    totalElement.textContent = "0 kr";
    updateCartBadge();
    return;
  }

  const allRowsHtml = cart.map(buildCartRow).join("");
  container.innerHTML = allRowsHtml;
  totalElement.textContent = getCartTotal() + " kr";

  updateCartBadge();
}


/* Gjør antalls- og fjern-knappene levende.
   Vi lytter på hele kurv-området med én lytter (event delegation), og
   sjekker hva som ble klikket. Etter hver endring tegner vi kurven på nytt. */
function setupCartButtons() {
  const container = document.getElementById("cart-items");

  container.addEventListener("click", function (event) {
    // Var det en antall-knapp (+ eller −)?
    const qtyButton = event.target.closest(".qty-button");
    if (qtyButton) {
      const productId = qtyButton.getAttribute("data-id");
      const action = qtyButton.getAttribute("data-action");

      // Finn nåværende antall og endre det opp eller ned
      const item = getCart().find(function (item) {
        return item.id === productId;
      });
      const currentQuantity = item ? item.quantity : 0;
      const newQuantity =
        action === "increase" ? currentQuantity + 1 : currentQuantity - 1;

      changeQuantity(productId, newQuantity);
      renderCart();
      return;
    }

    // Var det fjern-knappen?
    const removeButton = event.target.closest(".remove-button");
    if (removeButton) {
      const productId = removeButton.getAttribute("data-id");
      removeFromCart(productId);
      renderCart();
    }
  });
}


/* ===== 3. Kassen (leveringsinfo) =====
   Vi tar imot skjemaet, men sender det IKKE noe sted ennå. Betaling
   (Vipps/Stripe/Klarna) kobles på senere. Foreløpig viser vi bare en
   bekreftelse og tømmer kurven, slik at flyten kan testes. */
function setupCheckout() {
  const form = document.getElementById("checkout-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    // Stopper nettleseren fra å laste siden på nytt slik skjemaer vanligvis gjør
    event.preventDefault();

    if (getCart().length === 0) {
      alert("Handlekurven er tom – legg til noe før du går til kassen.");
      return;
    }

    // Her ville vi senere sendt bestillingen til en betalingsløsning.
    alert("Takk! Bestillingen er registrert. Betaling kobles på senere.");

    clearCart();
    renderCart();
    form.reset();
  });
}


/* ===== Start =====
   Velg tema først (så siden ser riktig ut uansett). Er butikken av,
   viser vi "åpner snart" og stopper. Ellers tegner vi kurven som normalt. */
document.addEventListener("DOMContentLoaded", function () {
  applyTheme();

  if (!orderingEnabled) {
    showShopClosed();
    return;
  }

  renderCart();
  setupCartButtons();
  setupCheckout();
});
