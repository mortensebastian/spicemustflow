/* ===== Venteliste =====
   Denne filen styrer ventelisten som vises når butikken er "av"
   (orderingEnabled = false i config.js).

   Når butikken er av, gjør den:
     1. Skjuler produktene og handlekurv-lenken.
     2. Tegner et påmeldingsskjema.
     3. Sender påmeldinger til skjematjenesten Web3Forms og viser en takk-melding.

   Er butikken på (orderingEnabled = true), gjør denne filen ingenting –
   da er det shop.js som viser produktene som normalt. */


/* Bygger HTML-en for ventelisteskjemaet som tekst.
   Skjemaet sender til Web3Forms via tre skjulte felter:
     - access_key: nøkkelen fra config.js
     - butikk:     hvilken front påmeldingen kom fra (leses fra <body>)
     - subject:    emne på e-posten du mottar
   "botcheck"-feltet er en honningfelle mot søppelpost: ekte besøkende ser
   det ikke, men roboter fyller det ofte ut, og da stopper Web3Forms dem. */
function buildWaitlistForm(storefront) {
  return (
    '<div class="container">' +
      '<div class="waitlist-box">' +
        '<h2 class="section-title">Bli med på ventelisten</h2>' +
        '<p class="waitlist-intro">Butikken åpner snart. Meld deg på, så gir vi deg beskjed straks safranen er klar til salg.</p>' +
        '<form id="waitlist-form" class="waitlist-form">' +
          '<input type="hidden" name="access_key" value="' + waitlistAccessKey + '">' +
          '<input type="hidden" name="butikk" value="' + storefront + '">' +
          '<input type="hidden" name="subject" value="Ny ventelistepåmelding">' +
          '<div class="form-field">' +
            '<label for="waitlist-name">Navn</label>' +
            '<input type="text" id="waitlist-name" name="name">' +
          '</div>' +
          '<div class="form-field">' +
            '<label for="waitlist-email">E-post</label>' +
            '<input type="email" id="waitlist-email" name="email" required>' +
          '</div>' +
          '<input type="checkbox" name="botcheck" class="hidden-honeypot" tabindex="-1" autocomplete="off">' +
          '<button type="submit" class="button">Meld meg på</button>' +
          '<p class="waitlist-note">Vi bruker e-postadressen din kun til å varsle deg om lansering.</p>' +
        '</form>' +
        '<p id="waitlist-success" class="waitlist-success"></p>' +
      '</div>' +
    '</div>'
  );
}


/* Sender påmeldingen til Web3Forms uten å laste siden på nytt.
   "fetch" er nettleserens måte å sende data til en nettjeneste i bakgrunnen.
   Vi sender skjemafeltene og venter på svaret. Går det bra, skjuler vi
   skjemaet og viser en takk-melding. */
function setupWaitlistSubmit() {
  const form = document.getElementById("waitlist-form");
  const success = document.getElementById("waitlist-success");

  form.addEventListener("submit", function (event) {
    // Stopp den vanlige innsendingen (som ville lastet siden på nytt)
    event.preventDefault();

    // Samle alle skjemafeltene
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.success) {
          form.style.display = "none";
          success.textContent =
            "Takk! Du står nå på ventelisten. Vi gir deg beskjed ved lansering.";
        } else {
          success.textContent = "Noe gikk galt. Prøv igjen om litt.";
        }
      })
      .catch(function () {
        success.textContent =
          "Noe gikk galt. Sjekk nettforbindelsen og prøv igjen.";
      });
  });
}


/* ===== Start =====
   Kjør bare hvis butikken er AV. Da: skjul produkter og kurv-lenke,
   gjør om hero-knappen, tegn skjemaet, og gjør det klart til innsending. */
document.addEventListener("DOMContentLoaded", function () {
  // Er butikken på, gjør vi ingenting her (shop.js viser produktene).
  if (orderingEnabled) {
    return;
  }

  // Skjul produktseksjonen
  const productSection = document.getElementById("produkter");
  if (productSection) {
    productSection.style.display = "none";
  }

  // Skjul handlekurv-lenken i toppmenyen (ingen kurv når butikken er av)
  const cartLink = document.querySelector(".cart-link");
  if (cartLink) {
    cartLink.style.display = "none";
  }

  // Gjør hero-knappen om til en "bli med på ventelisten"-knapp
  const heroButton = document.querySelector(".hero .button");
  if (heroButton) {
    heroButton.setAttribute("href", "#waitlist");
    heroButton.textContent = "Bli med på ventelisten";
  }

  // Fyll ventelistebeholderen med skjemaet, vis den, og koble på innsending
  const waitlistSection = document.getElementById("waitlist");
  if (waitlistSection) {
    const storefront = document.body.getAttribute("data-storefront");
    waitlistSection.innerHTML = buildWaitlistForm(storefront);
    waitlistSection.style.display = "block";
    setupWaitlistSubmit();
  }
});
