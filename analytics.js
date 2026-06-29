/* ===== Velkomponert – Google Analytics 4 (GA4) =====
   Lastes av alle sider, men gjør INGENTING før brukeren har samtykket til
   kategorien «analytics» i samtykkebanneret (se consent.js). Slik holder vi oss
   i tråd med personvernerklæringen («Frem til du gir samtykke, lastes ingen
   annonse- eller analyseteknologi») og med ekomloven/GDPR.

   ── Slik tar du den i bruk ──────────────────────────────────────────────
   1. Opprett en GA4-konto og en «datastrøm» for velkomponert.no.
   2. Kopier måle-ID-en (ser ut som «G-XXXXXXXXXX»; Analytics → Admin →
      Datastrømmer → din strøm).
   3. Lim den inn på GA4_ID-linjen under – det er det eneste stedet du endrer.

   Frem til du bytter ut plassholderen, lastes GA ikke i det hele tatt – heller
   ikke etter samtykke – så siden er trygg å publisere allerede nå.

   Avhengighet: window.VKConsent fra consent.js. Last derfor denne ETTER consent.js.
*/
(function () {
  "use strict";

  var GA4_ID = "G-C95QG66G5S"; // ← bytt til din ekte måle-ID fra GA4

  // Gjør ingenting så lenge ID-en er plassholderen (eller mangler/ugyldig).
  if (!GA4_ID || GA4_ID.indexOf("G-") !== 0 || GA4_ID === "G-XXXXXXXXXX") return;

  // Krever samtykke-API-et fra consent.js. Mangler det, gjør vi ingenting.
  if (!window.VKConsent || typeof window.VKConsent.whenConsented !== "function") return;

  function loadGA() {
    if (window.__vkGaLoaded) return; // last kun én gang per sidevisning
    window.__vkGaLoaded = true;

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA4_ID);
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA4_ID);
  }

  // Kjør straks hvis brukeren allerede har samtykket, ellers når «Godta alle»
  // velges senere i samme økt.
  window.VKConsent.whenConsented("analytics", loadGA);
})();
