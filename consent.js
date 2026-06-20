/* ===== Velkomponert – samtykke (GDPR/ePrivacy) + felles juridiske footer-lenker =====
   Selvstendig modul: injiserer egen CSS, et samtykkebanner, footer-lenker
   (Personvern · Om · Endre samtykke) og en liten samtykke-API. Lastes av ALLE
   sider med én <script>-tag – ingen avhengighet til style-felles.css eller site.js,
   så den virker likt også på sider som avviker (lussekatter, motoren-forklart).

   Hvorfor banner allerede nå: siden har i dag ingen annonse-/analyse-cookies, kun
   funksjonell førsteparts localStorage som brukeren selv utløser. Banneret er likevel
   på plass og klart til å «gate» annonse-/analyse-scripts den dagen AdSense skrus på.

   Slik gater du et fremtidig script (f.eks. AdSense) på samtykke:
       VKConsent.whenConsented('ads', function () { /* last adsbygoogle.js her * / });

   Samtykkevalget lagres i localStorage under nøkkelen 'vkConsent':
       { necessary: true, ads: bool, analytics: bool, ts: <ISO-dato> }
*/
(function () {
  "use strict";

  var KEY = "vkConsent";
  var CATEGORIES = ["ads", "analytics"]; // 'necessary' er alltid på
  var listeners = [];

  /* ---------- Lagring ---------- */
  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }
  function write(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); } catch (e) {}
  }
  function decide(consentAll) {
    var obj = { necessary: true, ts: new Date().toISOString() };
    CATEGORIES.forEach(function (c) { obj[c] = !!consentAll; });
    write(obj);
    notify(obj);
    return obj;
  }
  function notify(obj) {
    listeners.forEach(function (fn) { try { fn(obj); } catch (e) {} });
  }

  /* ---------- Offentlig API ---------- */
  var VKConsent = {
    get: read,
    has: function (cat) {
      if (cat === "necessary") return true;
      var c = read();
      return !!(c && c[cat]);
    },
    /* Kjør fn straks hvis allerede samtykket, ellers når samtykke gis senere. */
    whenConsented: function (cat, fn) {
      if (this.has(cat)) { fn(); return; }
      listeners.push(function (c) { if (c && c[cat]) fn(); });
    },
    onChange: function (fn) { listeners.push(fn); },
    reopen: function () { showBanner(); }
  };
  window.VKConsent = VKConsent;

  /* ---------- CSS (selvstendig) ---------- */
  function injectStyle() {
    if (document.getElementById("vk-consent-style")) return;
    var css =
      "#vk-consent{position:fixed;left:0;right:0;bottom:0;z-index:9999;" +
      "background:#1f1b16;color:#f3ede3;padding:18px 20px;" +
      "box-shadow:0 -6px 24px rgba(0,0,0,.28);font-family:inherit;" +
      "font-size:14.5px;line-height:1.5}" +
      "#vk-consent .vk-consent-inner{max-width:960px;margin:0 auto;" +
      "display:flex;flex-wrap:wrap;gap:14px 20px;align-items:center;" +
      "justify-content:space-between}" +
      "#vk-consent p{margin:0;flex:1 1 320px}" +
      "#vk-consent a{color:#e8c477;text-decoration:underline}" +
      "#vk-consent .vk-consent-btns{display:flex;gap:10px;flex-wrap:wrap}" +
      "#vk-consent button{cursor:pointer;border:0;border-radius:8px;" +
      "padding:10px 18px;font:inherit;font-weight:600}" +
      "#vk-consent .vk-accept{background:#e8c477;color:#1f1b16}" +
      "#vk-consent .vk-reject{background:transparent;color:#f3ede3;" +
      "border:1px solid rgba(243,237,227,.5)}" +
      ".vk-footer-legal{margin-top:10px;font-size:13px;opacity:.85}" +
      ".vk-footer-legal a,.vk-footer-legal button{color:inherit;" +
      "background:none;border:0;padding:0;font:inherit;cursor:pointer;" +
      "text-decoration:underline}" +
      ".vk-footer-legal .vk-sep{margin:0 8px;opacity:.6}";
    var s = document.createElement("style");
    s.id = "vk-consent-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ---------- Banner ---------- */
  function showBanner() {
    injectStyle();
    var existing = document.getElementById("vk-consent");
    if (existing) existing.parentNode.removeChild(existing);

    var bar = document.createElement("div");
    bar.id = "vk-consent";
    bar.setAttribute("role", "dialog");
    bar.setAttribute("aria-label", "Samtykke til informasjonskapsler");
    bar.innerHTML =
      '<div class="vk-consent-inner">' +
        "<p>Vi bruker bare nødvendig lagring for at siden skal virke. Hvis vi " +
        "senere viser annonser eller måler trafikk, skjer det kun med ditt " +
        'samtykke. Les mer i <a href="personvern.html">personvernerklæringen</a>.</p>' +
        '<div class="vk-consent-btns">' +
          '<button type="button" class="vk-reject" id="vk-reject">Bare nødvendige</button>' +
          '<button type="button" class="vk-accept" id="vk-accept">Godta alle</button>' +
        "</div>" +
      "</div>";
    document.body.appendChild(bar);

    function close() { if (bar.parentNode) bar.parentNode.removeChild(bar); }
    document.getElementById("vk-accept").addEventListener("click", function () {
      decide(true); close();
    });
    document.getElementById("vk-reject").addEventListener("click", function () {
      decide(false); close();
    });
  }

  /* ---------- Footer-lenker (Personvern · Om · Endre samtykke) ---------- */
  function injectFooterLinks() {
    injectStyle();
    // Foretrekk den delte footeren; fall tilbake til <footer>, ellers <body>.
    var host = document.querySelector(".site-footer .container") ||
               document.querySelector("footer") || document.body;
    if (!host || host.querySelector(".vk-footer-legal")) return;
    var nav = document.createElement("nav");
    nav.className = "vk-footer-legal";
    nav.setAttribute("aria-label", "Juridisk");
    nav.innerHTML =
      '<a href="personvern.html">Personvern</a>' +
      '<span class="vk-sep">·</span>' +
      '<a href="om.html">Om</a>' +
      '<span class="vk-sep">·</span>' +
      '<button type="button" id="vk-reopen">Endre samtykke</button>';
    host.appendChild(nav);
    nav.querySelector("#vk-reopen").addEventListener("click", function () {
      VKConsent.reopen();
    });
  }

  /* ---------- Oppstart ---------- */
  function init() {
    injectFooterLinks();
    if (!read()) showBanner(); // vis kun til et valg er tatt
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
