/* ===== Butikk – vis produkter =====
   Denne filen tegner produktkortene på en front (SpiceFlow eller Lussekatter).
   Begge frontene bruker SAMME fil. Forskjellen er at hver front bare viser
   sine egne produkter.

   Hvilken front vi er på, leser vi fra <body data-storefront="...">.
   Verdien er "hverdag" eller "lussekatter". Produkter merket "begge" vises
   uansett hvilken front man er på. */


/* Plukker ut produktene som hører til denne fronten. */
function getProductsForStorefront(storefront) {
  return products.filter(function (product) {
    return product.storefront === storefront || product.storefront === "begge";
  });
}


/* Lager HTML-en for ETT produktkort som tekst.
   Vi bygger kortet som en tekststreng og setter det inn i siden etterpå.
   Knappen får data-id slik at vi vet hvilket produkt som skal i kurven. */
function buildProductCard(product) {
  return (
    '<article class="product-card">' +
      '<img class="product-image" src="' + product.image + '" alt="' + product.name + '">' +
      '<div class="product-body">' +
        '<h3 class="product-name">' + product.name + '</h3>' +
        '<p class="product-description">' + product.description + '</p>' +
        '<p class="product-meta">' + product.weight + ' g</p>' +
        '<div class="product-footer">' +
          '<span class="product-price">' + product.price + ' kr</span>' +
          '<button class="add-button" data-id="' + product.id + '">Legg i kurv</button>' +
        '</div>' +
      '</div>' +
    '</article>'
  );
}


/* Tegner alle produktkortene inn i elementet med id="product-grid". */
function renderProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    return; // Siden har ingen produktliste – ikke gjør noe.
  }

  // Les hvilken front vi er på fra <body>
  const storefront = document.body.getAttribute("data-storefront");
  const productsToShow = getProductsForStorefront(storefront);

  // Bygg HTML for alle kortene og sett dem inn på én gang
  const allCardsHtml = productsToShow.map(buildProductCard).join("");
  grid.innerHTML = allCardsHtml;
}


/* Gjør "Legg i kurv"-knappene levende.
   Vi lytter på hele rutenettet (ikke hver knapp), og sjekker om det var
   en knapp som ble klikket. Dette kalles "event delegation" og er en enkel
   måte å håndtere mange knapper på med bare én lytter. */
function setupAddButtons() {
  const grid = document.getElementById("product-grid");
  if (!grid) {
    return;
  }

  grid.addEventListener("click", function (event) {
    // event.target er det som faktisk ble klikket
    const button = event.target.closest(".add-button");
    if (!button) {
      return; // Klikket var ikke på en knapp
    }

    const productId = button.getAttribute("data-id");
    addToCart(productId);
    updateCartBadge();

    // Liten bekreftelse til kunden på selve knappen
    button.textContent = "Lagt til ✓";
    setTimeout(function () {
      button.textContent = "Legg i kurv";
    }, 1200);
  });
}


/* ===== Start =====
   Når siden er ferdig lastet: tegn produktene, gjør knappene levende,
   og oppdater tallet i toppmenyen.

   Er butikken AV (orderingEnabled = false i config.js), gjør vi ingenting
   her – da overtar waitlist.js og viser ventelisten i stedet. */
document.addEventListener("DOMContentLoaded", function () {
  if (!orderingEnabled) {
    return;
  }
  renderProducts();
  setupAddButtons();
  updateCartBadge();
});
