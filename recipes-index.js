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

  {
    id: "safranrisotto", slug: "safranrisotto.html", status: "live",
    shortName: "Safranrisotto", name: "Safranrisotto (Risotto alla Milanese)",
    tagline: "Kremet milanesisk risotto der ekte safran gir farge, duft og dybde.",
    description: "Kremet safranrisotto (Risotto alla Milanese) med arborio, hvitvin og parmesan. Velg nivå, juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "safranrisotto.jpg", category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Italiensk",
    keywords: "safranrisotto, risotto alla milanese, risotto med safran",
    recipeYield: "4 porsjoner", times: { prep: "PT15M", cook: "PT30M", total: "PT45M" },
    search: "safranrisotto risotto milanese safran arborio parmesan",
    faq: [
      { q: "Hvilken ris bruker jeg til risotto?", a: "Rundkornet ris med høyt stivelsesinnhold – arborio eller carnaroli. Stivelsen er det som gir den kremede konsistensen, så ikke skyll risen." },
      { q: "Må jeg røre hele tiden?", a: "Rør jevnlig, men ikke helt konstant. Røringen frigjør stivelse og gjør risottoen kremet; spe med én øse varm kraft om gangen og la den suge til seg før neste." },
      { q: "Hvorfor blir risottoen klissete eller grøtete?", a: "Som regel for kald kraft eller for høy varme. Bruk varm kraft og la det småkoke – kald kraft bremser kokingen og kan gjøre risen klissete." },
      { q: "Kan jeg lage safranrisotto uten vin?", a: "Ja. Dropp vinen og spe med litt ekstra kraft, og ha i en skvett sitron til slutt for samme friskhet." },
      { q: "Kan jeg varme opp risotto dagen etter?", a: "Ja – varm den forsiktig og spe med litt kraft eller vann så den blir kremet igjen. Den blir aldri helt som nylaget, men fungerer fint." }
    ]
  },

  {
    id: "kjottkaker", slug: "kjottkaker.html", status: "live",
    shortName: "Kjøttkaker", name: "Kjøttkaker i brun saus",
    tagline: "Møre, norske kjøttkaker som ikke sprekker, i blank brun saus.",
    description: "Hjemmelagde kjøttkaker i brun saus. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "kjottkaker.jpg", category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Norsk",
    keywords: "kjøttkaker, kjøttkaker i brun saus, hjemmelagde kjøttkaker",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT30M", total: "PT50M" },
    search: "kjøttkaker brun saus norsk hjemmelaget muskat ingefær",
    faq: [
      { q: "Hvorfor sprekker kjøttkakene mine?", a: "Som regel for løs farse eller for varm panne. Arbeid saltet godt inn så farsen blir seig, bind med potetmel og spe væsken litt om gangen, la farsen hvile, og brun kakene på middels varme." },
      { q: "Hva er forskjellen på kjøttkaker og karbonader?", a: "De er nært i slekt, men karbonader stekes ferdig i panna og er flatere, mens kjøttkaker brunes først og trekker ferdig i saus. Karbonader lages oftest av karbonadedeig (magrere), kjøttkaker av kjøttdeig." },
      { q: "Skal jeg bruke melk eller vann i kjøttkaker?", a: "Begge fungerer som binding. Melk gir en litt mildere, rundere smak; vann gir nøytral farse. Spe væsken litt om gangen og arbeid den godt inn før du tilsetter mer." },
      { q: "Hvilke krydder skal i kjøttkaker?", a: "Salt og pepper er grunnlaget. De to krydderne som virkelig løfter norske kjøttkaker er muskat og malt ingefær – litt av hver gir den klassiske smaken." },
      { q: "Kan jeg fryse kjøttkaker?", a: "Ja. Frys dem ferdigstekte, gjerne med saus, i lufttett boks i opptil 3 måneder, og varm forsiktig opp igjen. Stekte kjøttkaker holder seg også et par dager i kjøleskapet." },
      { q: "Hvor lenge skal kjøttkaker steke?", a: "Brun dem 2–3 minutter på hver side til de får fin skorpe, og la dem deretter trekke ferdig i sausen i 10–15 minutter." },
      { q: "Kan jeg lage kjøttkaker uten egg?", a: "Ja – mange tradisjonelle oppskrifter er eggfrie. Bytt egget mot litt ekstra potetmel og spe med litt mer melk eller vann for binding." },
      { q: "Hva passer til kjøttkaker i brun saus?", a: "Klassisk tilbehør er kokte poteter, brun saus, ertestuing eller kålstuing, gjerne gulrøtter, og tyttebær eller tyttebærsyltetøy ved siden av." }
    ]
  },

  {
    id: "fiskekaker", slug: "fiskekaker.html", status: "live",
    shortName: "Fiskekaker", name: "Hjemmelagde fiskekaker",
    tagline: "Saftige norske fiskekaker av hvit fisk – sprø ute, myke inne.",
    description: "Hjemmelagde fiskekaker av hvit fisk som ikke sprekker. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Norsk",
    keywords: "fiskekaker, hjemmelagde fiskekaker, fiskekaker oppskrift",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT15M", total: "PT35M" },
    search: "fiskekaker hjemmelaget norsk hvit fisk sei torsk muskat potetmel",
    faq: [
      { q: "Hvilken fisk er best til fiskekaker?", a: "Mager hvit fisk gir best resultat – sei, torsk, hyse (kolje) eller lyr. Hysa er en klassiker fordi den binder godt og har mild smak. Fersk fisk gir bedre binding enn frossen." },
      { q: "Hvorfor sprekker fiskekakene mine?", a: "Nesten alltid fordi farsen ble for varm. Hold fisk, melk og redskaper iskalde, kjør farsen så kort som mulig i kjøkkenmaskinen, og spe melken litt om gangen så hver omgang er innarbeidet før neste. Da blir farsen seig og holder formen." },
      { q: "Hvordan får jeg fiskefarsen til å binde seg?", a: "Salt er nøkkelen: kjør fisken med saltet først til den blir fast og seig før du sper med væske. Saltet trekker ut proteinene som binder farsen. Potetmel og egg hjelper også, men saltet gjør mesteparten av jobben." },
      { q: "Skal jeg bruke melk eller fløte i fiskekaker?", a: "Begge deler fungerer. Melk gir en lettere farse, mens en blanding av melk og fløte (gjerne halvt om halvt) gir saftigere og rundere kaker. Spe væsken litt om gangen til farsen er passe fast." },
      { q: "Hvilke krydder skal i fiskekaker?", a: "Salt og hvit pepper er grunnlaget. Det klassiske krydderet som løfter norske fiskekaker er revet muskat – en liten klype er nok. Finhakket gressløk gir friskhet hvis du vil ha mer smak." },
      { q: "Kan jeg fryse fiskekaker?", a: "Ja. Frys dem ferdigstekte i lufttett boks i opptil et halvt år, og varm dem forsiktig i panne – på samme måte som frosne kjøttboller. Du kan også fryse rå farse." },
      { q: "Hva passer til fiskekaker?", a: "Klassisk tilbehør er kokte poteter, smeltet smør eller hvit saus (gjerne med gressløk), og kokte grønnsaker som gulrot og erter. Mange spiser dem også som pålegg på brød med remulade." },
      { q: "Hvor lenge skal fiskekaker stekes?", a: "Stek dem 3–4 minutter på hver side på middels varme til de er gylne og gjennomstekte. For svak varme gir bleke kaker, for sterk gir brent overflate og rå kjerne." }
    ]
  },

  {
    id: "risgrot", slug: "risgrot.html", status: "live",
    shortName: "Risgrøt", name: "Risgrøt (risengrynsgrøt)",
    tagline: "Kremet, tradisjonell risgrøt med smørøye, sukker og kanel.",
    description: "Kremet, tradisjonell risgrøt (risengrynsgrøt) med smørøye, sukker og kanel. Velg nivå, juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "risgrot.jpg", category: ["middag", "jul"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Norsk",
    keywords: "risgrøt, risengrynsgrøt, risgrøt oppskrift",
    recipeYield: "4 porsjoner", times: { prep: "PT5M", cook: "PT50M", total: "PT55M" },
    search: "risgrøt risengrynsgrøt grøt grøtris melk kanel smørøye jul", season: "des",
    faq: [
      { q: "Hvilken ris bruker jeg til risgrøt?", a: "Rundkornet grøtris (risengryn) gir den kremede konsistensen, fordi det runde kornet slipper ut mye stivelse. Jasminris fungerer også, men gir en litt løsere grøt. Ikke skyll risen – stivelsen er det som binder grøten." },
      { q: "Hva er forholdet mellom ris, melk og vann i risgrøt?", a: "En god tommelfingerregel for fire porsjoner er ca. 2,5 dl grøtris, 5 dl vann og 1 liter melk. Risen kokes først mør i vannet, så sper du med melken. Vil du ha tykkere grøt, bruker du litt mindre ris enn pakken foreslår." },
      { q: "Hvorfor blir ikke risgrøten min tykk?", a: "Som regel trenger den bare mer tid. Grøten tykner først mot slutten, og den tykner ytterligere når den hviler. La den småkoke på svak varme til risen er helt mør, og rør jevnlig så den koker jevnt." },
      { q: "Hvordan unngår jeg klumper og at grøten svir seg?", a: "Bruk en tykkbunnet gryte, hold svak varme, og rør ofte – særlig mot slutten når grøten tykner. Sper du melken litt etter at risen har kokt i vann, blir grøten jevn og fin." },
      { q: "Kan jeg lage risgrøt i ovnen?", a: "Ja. Kok opp ris, vann og melk på platen, sett så gryta med lokk i ovnen på ca. 100–120 °C i 1,5–2 timer. Da slipper du å stå og røre, og grøten kan nesten ikke svi seg. Rør gjerne en gang underveis." },
      { q: "Kan jeg lage risgrøt uten melk eller laktosefritt?", a: "Ja. Bytt melken med havredrikk eller annen plantedrikk – velg gjerne en barista-variant for kremethet. Bruk melkefritt smør/margarin som smørøye, så blir hele grøten melkefri." },
      { q: "Hva er forskjellen på risgrøt og riskrem?", a: "Riskrem er avkjølt risgrøt vendt sammen med pisket krem (og ofte vanilje), servert kald med rød saus – den klassiske juledesserten. Risgrøt spises varm med smørøye, sukker og kanel." },
      { q: "Hva serverer man til risgrøt?", a: "Klassisk er en klatt smør som smelter i midten (smørøye), sukker og kanel på toppen. Mange har også saft eller rød saft-saus ved siden av, og i julen gjemmer man en mandel i grøten." }
    ]
  },

  /* ── Kommer snart ── */
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
