/* ===== Velkomponert – oppskriftsmanifest (én kilde til sannhet) =====

   Dette er den sentrale lista over alle oppskrifter. Den driver:
   - oppskriftsrutenettet på forsiden (index.html)
   - kategorisidene (middag.html, suppe.html, …)
   - «Relaterte oppskrifter» på hver oppskriftsside
   - sitemap.xml (oppdateres av build-skillet når en rett legges til)
   - Recipe- og BreadcrumbList-schema (recipe-schema.js leser herfra + <rett>-data.js)

   ───────────────────────────────────────────────────────────────────────────
   SEO-KONTRAKT for skill-ene (jf. SEO-plan §3–§4 i plan.md):

   • Lag 1 – GENERELT (mal, ingen research): canonical, Open Graph, breadcrumb-
     struktur, tittelmønster « | Velkomponert». Skrives mekanisk av build-skillet.
   • Lag 2 – AVLEDET fra <rett>-data.js (ingen research): recipeIngredient,
     recipeInstructions, recipeYield. recipe-schema.js genererer dette.
   • Lag 3 – PER RETT, KREVER RESEARCH (research.recipe sin jobb → fylles inn her):
       slug, name, description, keywords, category, recipeCategory, cuisine,
       times, badge, search, (senere: faq, related, season).
   Med andre ord: research.recipe produserer ett objekt i lista under;
   build.recipesite + recipe-schema.js lager resten automatisk.
   ─────────────────────────────────────────────────────────────────────────── */

window.RECIPE_CATEGORIES = [
  { slug: "middag",  label: "Middag",
    title: "Middagsoppskrifter – enkle og gode middager",
    description: "Gode middagsoppskrifter i tre nivåer. Velg enkel, medium eller kompleks, juster porsjoner og tilpass ingrediensene – mengdene følger med." },
  { slug: "suppe",   label: "Suppe",
    title: "Suppeoppskrifter – kremede og klare supper",
    description: "Suppeoppskrifter i tre nivåer. Velg nivå, juster porsjoner og bytt ingredienser – mengdene regnes om automatisk." },
  { slug: "dessert", label: "Dessert",
    title: "Dessertoppskrifter – kaker, iskrem og søtt",
    description: "Dessertoppskrifter i tre nivåer. Velg hvor forseggjort du vil ha det, juster antall og tilpass ingrediensene." },
  { slug: "baking",  label: "Baking",
    title: "Bakeoppskrifter – kaker, boller og brød",
    description: "Bakeoppskrifter i tre nivåer. Skaler antallet du vil bake og tilpass ingrediensene – mengdene følger med automatisk." },
  { slug: "jul",     label: "Jul",
    title: "Juleoppskrifter – julebakst og julemat",
    description: "Norske juleoppskrifter – fra lussekatter til julemiddag. Skaler antallet og tilpass ingrediensene." }
];

window.RECIPES_INDEX = [
  {
    id: "fiskesuppe", slug: "fiskesuppe.html", status: "live",
    shortName: "Fiskesuppe", name: "Kremet fiskesuppe",
    tagline: "Kremet norsk favoritt med en mild søt-sur balanse.",
    description: "Kremet norsk fiskesuppe med torsk, laks og reker, med den klassiske søt-sure balansen.",
    image: "fiskesuppe.jpg", category: ["suppe"], badge: "3 nivåer",
    recipeCategory: "Suppe", cuisine: "Norsk",
    keywords: "fiskesuppe, kremet fiskesuppe, bergensk fiskesuppe",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT25M", total: "PT45M" },
    search: "fiskesuppe kremet norsk torsk laks"
  },
  {
    id: "paella", slug: "paella.html", status: "live",
    shortName: "Paella", name: "Paella",
    tagline: "Den spanske klassikeren med kylling, scampi og safran.",
    description: "Klassisk spansk paella med kylling, scampi og safran. Velg nivå, juster porsjoner og tilpass ingrediensene.",
    image: "paella.jpg", category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Spansk",
    keywords: "paella, spansk paella, paella med kylling og scampi",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT30M", total: "PT50M" },
    search: "paella spansk kylling scampi"
  },
  {
    id: "sjokoladekake", slug: "sjokoladekake.html", status: "live",
    shortName: "Sjokoladekake", name: "Saftig sjokoladekake",
    tagline: "Saftig rørekake – fra enkel til mørk sjokolade med kaffe.",
    description: "Saftig norsk sjokoladekake med smør og kaffe. Velg nivå, juster antall og tilpass ingrediensene.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "sjokoladekake, saftig sjokoladekake, kakaokake",
    recipeYield: "12 stykker", times: { prep: "PT15M", cook: "PT35M", total: "PT60M" },
    search: "sjokoladekake kake kakao"
  },
  {
    id: "pannekake", slug: "pannekake.html", status: "live",
    shortName: "Pannekaker", name: "Pannekaker",
    tagline: "Tynne norske pannekaker – fra hverdag til fest.",
    description: "Tynne norske pannekaker, fra enkel grunnrøre til mer forseggjorte varianter med brunet smør.",
    image: null, category: ["dessert"], badge: "3 nivåer",
    recipeCategory: "Dessert", cuisine: "Norsk",
    keywords: "pannekaker, norske pannekaker, tynne pannekaker",
    recipeYield: "12 pannekaker", times: { prep: "PT10M", cook: "PT20M", total: "PT50M" },
    search: "pannekaker pannekake"
  },
  {
    id: "safraniskrem", slug: "safraniskrem.html", status: "live",
    shortName: "Safraniskrem", name: "Safraniskrem (bastani)",
    tagline: "Persisk bastani med safran, kardemomme og pistasj.",
    description: "Persisk safraniskrem (bastani) med kardemomme og pistasj. Velg nivå, juster porsjoner og tilpass ingrediensene.",
    image: null, category: ["dessert"], badge: "3 nivåer",
    recipeCategory: "Dessert", cuisine: "Persisk",
    keywords: "safraniskrem, bastani, persisk iskrem",
    recipeYield: "6 porsjoner", times: { prep: "PT30M", cook: "PT15M", total: "PT8H" },
    search: "safraniskrem bastani iskrem persisk"
  },
  {
    id: "lussekatter", slug: "lussekatter.html", status: "live", schema: "static",
    shortName: "Lussekatter", name: "Lussekatter med safran",
    tagline: "Myke, gylne safranboller til Lucia og julebaksten.",
    description: "Saftige lussekatter med safran til Lucia og julebaksten.",
    image: "lussekatter.jpg", category: ["baking", "jul"], badge: "Juleklassiker",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "lussekatter, safran, lucia, julebakst",
    recipeYield: "24 stykker", times: { prep: "PT30M", cook: "PT10M", total: "PT1H30M" },
    search: "lussekatter jul lucia safran boller", season: "des"
  },

  /* ── Kommer snart ── */
  {
    id: "safranrisotto", slug: "safranrisotto.html", status: "soon",
    shortName: "Safranrisotto", name: "Safranrisotto (Risotto alla Milanese)",
    tagline: "Risotto alla Milanese – kremet ris der safran er poenget.",
    image: null, category: ["middag"], recipeCategory: "Hovedrett",
    search: "risotto safranrisotto milanese"
  },
  {
    id: "bouillabaisse", slug: "bouillabaisse.html", status: "soon",
    shortName: "Bouillabaisse", name: "Bouillabaisse",
    tagline: "Fransk fiskegryte med safran, servert med rouille.",
    image: null, category: ["suppe"], recipeCategory: "Suppe",
    search: "bouillabaisse fransk fiskegryte"
  },
  {
    id: "persisk-safranris", slug: "persisk-safranris.html", status: "soon",
    shortName: "Persisk safranris", name: "Persisk safranris og safrankylling",
    tagline: "Safranris og safrankylling – vakkert og gavegivende.",
    image: null, category: ["middag"], recipeCategory: "Hovedrett",
    search: "persisk safranris safrankylling kylling"
  }
];

/* Hjelpere – brukes av site.js og recipe-schema.js (delt global scope). */
window.RecipesIndex = {
  all: function () { return window.RECIPES_INDEX; },
  byId: function (id) {
    var list = window.RECIPES_INDEX || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  },
  byCategory: function (slug) {
    return (window.RECIPES_INDEX || []).filter(function (r) {
      return (r.category || []).indexOf(slug) !== -1;
    });
  },
  categoryBySlug: function (slug) {
    var cats = window.RECIPE_CATEGORIES || [];
    for (var i = 0; i < cats.length; i++) if (cats[i].slug === slug) return cats[i];
    return null;
  }
};

/* Gjør manifestet tilgjengelig for Node-tester (ingen effekt i nettleser). */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    RECIPES_INDEX: window.RECIPES_INDEX,
    RECIPE_CATEGORIES: window.RECIPE_CATEGORIES,
    RecipesIndex: window.RecipesIndex
  };
}
