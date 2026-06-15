/* ===== Pannekaker (norske, tynne) – datamodell =====
   Bevisst enkel rett (ingen research-dok nødvendig). Tester to ting motoren
   ikke har møtt før via adapteren:
     - ANTALL-basert skalering (data-base-yield i stk pannekaker, ikke porsjoner)
     - DIETT-bytter (glutenfritt mel, havremelk, egg-erstatning)

   Som dessert: ingen salt-lever og ingen syre → levers: [], requireRoles: [].
   Roller er bakst-strukturelle: bulk (mel), liquid (melk), binder (egg). */

const swapOptions = {
  flour: [
    { id: "gf_flour", label: "Glutenfri melblanding", amount: 3, unit: "dl", note: "Bruk en blanding med bindemiddel; la røren hvile litt lenger." },
    { id: "whole_wheat", label: "Sammalt hvete (grov)", amount: 3, unit: "dl", note: "Tyngre; spe med litt ekstra melk." }
  ],
  milk: [
    { id: "oat_milk", label: "Havremelk (melkefri)", amount: 5, unit: "dl", note: "Nøytral; god melkefri base." },
    { id: "lactosefree_milk", label: "Laktosefri melk", amount: 5, unit: "dl" }
  ],
  egg: [
    { id: "flax_egg", label: "Linfrø-egg (eggfri)", amount: 3, unit: "stk", note: "1 ss malt linfrø + 3 ss vann per egg; la svelle. Litt tettere røre." }
  ],
  butter: [
    { id: "oil", label: "Nøytral olje", amount: 2, unit: "ss", note: "Til steking; melkefritt alternativ." }
  ]
};


const pannekakeRecipes = {

  /* ---------- ENKEL: grunnrøre, rett fram ---------- */
  enkel: {
    label: "Enkel", servings: 12,
    ingredients: [
      { id: "flour",  label: "Hvetemel",        amount: 3, unit: "dl", role: "bulk",   scaling: "linear",    addStage: "early", removable: false },
      { id: "milk",   label: "Melk",            amount: 5, unit: "dl", role: "liquid", scaling: "linear",    addStage: "early", removable: false, note: "Spe litt etter litt for en klumpfri røre." },
      { id: "egg",    label: "Egg",             amount: 3, unit: "stk", role: "binder", scaling: "linear",    addStage: "early", removable: false },
      { id: "salt",   label: "Salt",            amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "butter", label: "Smør til steking", amount: 2, unit: "ss", role: "fat",   scaling: "nonlinear", addStage: "early", removable: false }
    ],
    steps: [
      "Visp sammen mel og halvparten av melken til en jevn, tykk røre uten klumper.",
      "Visp inn egg, salt og resten av melken til en tynn røre.",
      "La røren svelle ~20 minutter (gir mørere pannekaker).",
      "Stek tynne pannekaker i smør på middels varme, gylne på begge sider."
    ]
  },

  /* ---------- MEDIUM: litt rikere, kardemomme ---------- */
  medium: {
    label: "Medium", servings: 12,
    ingredients: [
      { id: "flour",    label: "Hvetemel",        amount: 3, unit: "dl", role: "bulk",   scaling: "linear",    addStage: "early", removable: false },
      { id: "milk",     label: "Melk",            amount: 5, unit: "dl", role: "liquid", scaling: "linear",    addStage: "early", removable: false },
      { id: "egg",      label: "Egg",             amount: 4, unit: "stk", role: "binder", scaling: "linear",    addStage: "early", removable: false, note: "Et ekstra egg gir fyldigere pannekaker." },
      { id: "sugar",    label: "Sukker",          amount: 1, unit: "ss", role: "sweet",  scaling: "linear",    addStage: "early", removable: true, taste: { sweet: 2 } },
      { id: "cardamom", label: "Malt kardemomme", amount: 0.5, unit: "ts", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, taste: { bitter: 1 } },
      { id: "salt",     label: "Salt",            amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "butter",   label: "Smør til steking", amount: 2, unit: "ss", role: "fat",   scaling: "nonlinear", addStage: "early", removable: false }
    ],
    steps: [
      "Visp mel, sukker, kardemomme og salt sammen.",
      "Spe med halvparten av melken til en tykk, klumpfri røre, og visp så inn egg og resten av melken.",
      "La røren hvile ~20–30 minutter.",
      "Stek tynne pannekaker i smør, gylne på begge sider. Server med syltetøy."
    ]
  },

  /* ---------- KOMPLEKS: safranpannekaker, brunet smør ---------- */
  kompleks: {
    label: "Kompleks", servings: 12,
    ingredients: [
      { id: "flour",    label: "Hvetemel",          amount: 3, unit: "dl", role: "bulk",   scaling: "linear",    addStage: "early", removable: false },
      { id: "milk",     label: "Melk",              amount: 5, unit: "dl", role: "liquid", scaling: "linear",    addStage: "early", removable: false },
      { id: "egg",      label: "Egg",               amount: 4, unit: "stk", role: "binder", scaling: "linear",    addStage: "early", removable: false },
      { id: "saffron",  label: "Safran (blomstret)", amount: 0.4, unit: "g", role: "saffron", scaling: "nonlinear", addStage: "early", removable: true, taste: { bitter: 1 }, note: "Bløtlegg i 2 ss varm melk ~15 min; gir farge og aroma." },
      { id: "sugar",    label: "Sukker",            amount: 1.5, unit: "ss", role: "sweet", scaling: "linear",    addStage: "early", removable: true, taste: { sweet: 2 } },
      { id: "cardamom", label: "Malt kardemomme",   amount: 0.5, unit: "ts", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, taste: { bitter: 1 } },
      { id: "salt",     label: "Salt",              amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "brown_butter", label: "Brunet smør",   amount: 2, unit: "ss", role: "fat",   scaling: "nonlinear", addStage: "early", removable: false, note: "Brun smøret til det dufter nøtteaktig; rør litt i røren og bruk resten til steking." }
    ],
    steps: [
      "Brun smøret til det er gyllent og nøtteaktig, og avkjøl litt.",
      "Bløtlegg safran i 2 ss varm melk i ~15 minutter.",
      "Visp mel, sukker, kardemomme og salt, spe med melk til en klumpfri røre, og visp inn egg, safranmelk og litt av det brunede smøret.",
      "La røren hvile ~30 minutter.",
      "Stek tynne, gyllene safranpannekaker i resten av det brunede smøret."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "pannekake",
  recipes: pannekakeRecipes,
  swapOptions: swapOptions,
  servedAcid: null,

  density: {
    flour: 0.55, gf_flour: 0.55, whole_wheat: 0.55,
    milk: 1.03, oat_milk: 1.03, lactosefree_milk: 1.03,
    sugar: 0.85, cardamom: 0.5, butter: 0.95, brown_butter: 0.95, oil: 0.92
  },
  pieceWeight: { egg: 55 },
  unitOptions: {
    flour: ["dl", "ml", "g"], milk: ["dl", "ml"],
    sugar: ["ss", "ts", "g"], butter: ["ss", "g"], brown_butter: ["ss", "g"]
  },
  bulkRoles: ["bulk", "liquid", "binder"],
  levers: [],          // ingen auto-balanse – bakst styres av forhold, ikke smakslevere
  requireRoles: [],
  tasteMessages: {
    sweet: "Retten blir mindre søt – server gjerne med syltetøy eller sukker på toppen.",
    sour: "", umami: ""
  },
  leverMessages: {}
};
