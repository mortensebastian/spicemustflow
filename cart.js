/* ===== Handlekurv – felles logikk =====
   Denne filen styrer ALT som har med handlekurven å gjøre, og begge
   frontene + kassen bruker den. Den lagrer kurven i nettleseren slik at
   varene ikke forsvinner når kunden bytter side eller laster på nytt.

   "localStorage" er en liten lagringsplass inne i nettleseren. Tenk på den
   som en notatblokk nettleseren husker mellom sidevisninger. Vi lagrer
   kurven der som tekst, og leser den tilbake når en side åpnes. */

/* Navnet (nøkkelen) vi lagrer kurven under i localStorage.
   Alt lagres som tekst, så vi gjør om til/fra JSON (et tekstformat for data). */
const CART_STORAGE_KEY = "saffronCart";


/* ===== Lese og lagre kurven ===== */

/* Henter kurven fra localStorage og gir tilbake en liste.
   Hvert element ser slik ut: { id: "saffron-pose-1g", quantity: 2 }
   Finnes ingen kurv ennå, gir vi tilbake en tom liste. */
function getCart() {
  const savedText = localStorage.getItem(CART_STORAGE_KEY);
  if (!savedText) {
    return [];
  }
  // JSON.parse gjør teksten om til en ekte liste igjen.
  // Skulle lagringen være ødelagt (ugyldig tekst), kaster JSON.parse en
  // feil som ellers ville stoppet ALL kode på siden. Vi fanger den og
  // starter med tom kurv i stedet, så siden fortsatt virker.
  try {
    return JSON.parse(savedText);
  } catch {
    return [];
  }
}

/* Lagrer kurven tilbake til localStorage.
   JSON.stringify gjør lista om til tekst, som er det localStorage kan lagre. */
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}


/* ===== Endre innholdet i kurven ===== */

/* Legger ett eksemplar av et produkt i kurven.
   Finnes produktet allerede, øker vi antallet med 1 i stedet for å
   lage en ny rad. */
function addToCart(productId) {
  const cart = getCart();

  // Let etter om produktet allerede ligger i kurven
  const existingItem = cart.find(function (item) {
    return item.id === productId;
  });

  if (existingItem) {
    existingItem.quantity = existingItem.quantity + 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart(cart);
}

/* Setter antallet for et produkt til et bestemt tall.
   Blir antallet 0 eller lavere, fjerner vi varen helt. */
function changeQuantity(productId, newQuantity) {
  let cart = getCart();

  if (newQuantity <= 0) {
    // Behold alle varer UNNTATT den vi vil fjerne
    cart = cart.filter(function (item) {
      return item.id !== productId;
    });
  } else {
    const item = cart.find(function (item) {
      return item.id === productId;
    });
    if (item) {
      item.quantity = newQuantity;
    }
  }

  saveCart(cart);
}

/* Fjerner et produkt helt fra kurven. */
function removeFromCart(productId) {
  const cart = getCart().filter(function (item) {
    return item.id !== productId;
  });
  saveCart(cart);
}

/* Tømmer hele kurven (brukes f.eks. etter fullført bestilling). */
function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
}


/* ===== Oppslag og utregninger =====
   Kurven lagrer bare id og antall. Detaljer (navn, pris) henter vi fra
   "products"-lista i products.js ved hjelp av id-en. */

/* Finner hele produktet ut fra en id. Gir tilbake undefined hvis det
   ikke finnes (f.eks. hvis et produkt er fjernet fra products.js). */
function findProduct(productId) {
  return products.find(function (product) {
    return product.id === productId;
  });
}

/* Teller hvor mange varer det er i kurven til sammen (summen av antall).
   Brukes til det lille tallet ved siden av "Handlekurv" i toppmenyen. */
function getCartCount() {
  return getCart().reduce(function (sum, item) {
    return sum + item.quantity;
  }, 0);
}

/* Regner ut totalsummen i kroner for hele kurven. */
function getCartTotal() {
  return getCart().reduce(function (sum, item) {
    const product = findProduct(item.id);
    if (!product) {
      return sum;
    }
    return sum + product.price * item.quantity;
  }, 0);
}


/* ===== Oppdater tallet i toppmenyen =====
   Alle sider har et element med id="cart-count". Denne funksjonen skriver
   det riktige antallet inn der. Vi kaller den når en side åpnes og hver
   gang noe legges i kurven. */
function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.textContent = getCartCount();
  }
}
