/* ===== Sjokoladekake (norsk rørekake) – datamodell =====
   Enkel, universell bakst (ingen research-dok nødvendig). Bekrefter samme
   «format» som pannekake: forholdsbasert bakst, antall-basert skalering (stk),
   ingen smakslevere (levers: []), diett-bytter som vanlige swaps.

   Merk om bakst: hevemiddel (bakepulver) og kakao må skaleres LINEÆRT med melet
   for at kaken skal heve/smake riktig – derfor scaling: "linear" på dem, ikke
   "nonlinear". Bare rene smakstilsetninger (vanilje, salt) holdes igjen. */

const swapOptions = {
  flour: [
    { id: "gf_flour", label: "Glutenfri melblanding", amount: 3, unit: "dl", note: "Bruk blanding med bindemiddel; kaken blir litt tettere." }
  ],
  milk: [
    { id: "coffee", label: "Sterk kaffe", amount: 2, unit: "dl", note: "Forsterker sjokoladesmaken; smaker ikke kaffe i ferdig kake.",
      incompatible: ["childfriendly"] },
    { id: "plant_milk", label: "Havremelk (melkefri)", amount: 2, unit: "dl" }
  ],
  butter: [
    { id: "oil", label: "Nøytral olje", amount: 100, unit: "g", note: "Gir saftig kake; melkefritt alternativ." }
  ],
  cocoa: [
    { id: "dark_chocolate", label: "Smeltet mørk sjokolade", amount: 150, unit: "g", taste: { bitter: 2 },
      note: "Smelt og rør inn; rikere og mer intens. Reduser gjerne melmengden litt.",
      incompatible: ["sugarfree"] }
  ]
};


const sjokoladekakeRecipes = {

  /* ---------- ENKEL: rask rørekake i én bolle ---------- */
  enkel: {
    label: "Enkel", servings: 12,
    ingredients: [
      { id: "flour",         label: "Hvetemel",     amount: 3, unit: "dl",  role: "bulk",     scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "sugar",         label: "Sukker",       amount: 3, unit: "dl",  role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 }, incompatible: ["sugarfree"] },
      { id: "cocoa",         label: "Kakao",        amount: 1.5, unit: "dl", role: "aromatic", scaling: "linear",    addStage: "early", removable: false, taste: { bitter: 2 } },
      { id: "baking_powder", label: "Bakepulver",   amount: 2, unit: "ts",  role: "seasoning", scaling: "linear",   addStage: "early", removable: false, note: "Hevemiddel – skaleres med melet." },
      { id: "egg",           label: "Egg",          amount: 2, unit: "stk", role: "binder",   scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"], incompatible: ["vegan"] },
      { id: "milk",          label: "Melk",         amount: 2, unit: "dl",  role: "liquid",   scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"], incompatible: ["vegan"] },
      { id: "oil",           label: "Nøytral olje", amount: 1.5, unit: "dl", role: "fat",     scaling: "linear",    addStage: "early", removable: false },
      { id: "vanilla",       label: "Vaniljesukker", amount: 1, unit: "ts", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true,  incompatible: ["sugarfree"] },
      { id: "salt",          label: "Salt",         amount: 0.25, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, note: "En klype løfter sjokoladesmaken." }
    ],
    steps: [
      "Sett ovnen på 175 °C og smør en kakeform.",
      "Bland alt det tørre (mel, sukker, kakao, bakepulver, salt).",
      "Rør inn egg, melk, olje og vanilje til en jevn røre.",
      "Hell i formen og stek ca. 30–35 minutter til en kakepinne kommer ren ut. Avkjøl."
    ]
  },

  /* ---------- MEDIUM: saftigere med smør og kaffe ---------- */
  medium: {
    label: "Medium", servings: 12,
    ingredients: [
      { id: "flour",         label: "Hvetemel",     amount: 3, unit: "dl",  role: "bulk",     scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "sugar",         label: "Sukker",       amount: 3, unit: "dl",  role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 }, incompatible: ["sugarfree"] },
      { id: "cocoa",         label: "Kakao",        amount: 1.5, unit: "dl", role: "aromatic", scaling: "linear",    addStage: "early", removable: false, taste: { bitter: 2 } },
      { id: "baking_powder", label: "Bakepulver",   amount: 2, unit: "ts",  role: "seasoning", scaling: "linear",   addStage: "early", removable: false },
      { id: "egg",           label: "Egg",          amount: 3, unit: "stk", role: "binder",   scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"], incompatible: ["vegan"] },
      { id: "butter",        label: "Smeltet smør", amount: 150, unit: "g", role: "fat",      scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"], incompatible: ["vegan"] },
      { id: "milk",          label: "Melk",         amount: 2, unit: "dl",  role: "liquid",   scaling: "linear",    addStage: "early", removable: false, note: "Bytt gjerne til sterk kaffe for dypere smak.", allergens: ["dairy"], incompatible: ["vegan"] },
      { id: "vanilla",       label: "Vaniljesukker", amount: 1, unit: "ts", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true,  incompatible: ["sugarfree"] },
      { id: "salt",          label: "Salt",         amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true }
    ],
    steps: [
      "Sett ovnen på 175 °C og smør en kakeform.",
      "Bland det tørre (mel, sukker, kakao, bakepulver, salt).",
      "Visp inn egg, smeltet smør, melk og vanilje til en glatt røre.",
      "Hell i formen og stek ca. 35–40 minutter til kakepinnen er ren. Avkjøl før glasur."
    ]
  },

  /* ---------- KOMPLEKS: mørk sjokolade, kaffe, appelsin ---------- */
  kompleks: {
    label: "Kompleks", servings: 12,
    ingredients: [
      { id: "flour",         label: "Hvetemel",            amount: 2.5, unit: "dl", role: "bulk",     scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "sugar",         label: "Sukker",              amount: 3, unit: "dl",   role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 }, incompatible: ["sugarfree"] },
      { id: "dark_chocolate",label: "Smeltet mørk sjokolade", amount: 150, unit: "g", role: "aromatic", scaling: "linear", addStage: "early", removable: false, taste: { bitter: 2 }, incompatible: ["sugarfree"] },
      { id: "cocoa",         label: "Kakao",               amount: 0.5, unit: "dl", role: "aromatic", scaling: "linear",    addStage: "early", removable: true, taste: { bitter: 2 } },
      { id: "baking_powder", label: "Bakepulver",          amount: 1.5, unit: "ts", role: "seasoning", scaling: "linear",  addStage: "early", removable: false },
      { id: "egg",           label: "Egg",                 amount: 3, unit: "stk", role: "binder",   scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"], incompatible: ["vegan"] },
      { id: "butter",        label: "Smeltet smør",        amount: 150, unit: "g", role: "fat",      scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"], incompatible: ["vegan"] },
      { id: "coffee",        label: "Sterk kaffe",         amount: 1.5, unit: "dl", role: "liquid",  scaling: "linear",    addStage: "early", removable: false, note: "Forsterker sjokoladen uten å smake kaffe.", incompatible: ["childfriendly"] },
      { id: "orange_zest",   label: "Appelsinskall (revet)", amount: 1, unit: "ss", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, note: "Frisk kontrast til den mørke sjokoladen." },
      { id: "vanilla",       label: "Vaniljesukker",       amount: 1, unit: "ts", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true,  incompatible: ["sugarfree"] },
      { id: "salt",          label: "Salt",                amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true }
    ],
    steps: [
      "Sett ovnen på 170 °C og smør en kakeform. Smelt sjokoladen forsiktig.",
      "Bland det tørre (mel, sukker, kakao, bakepulver, salt).",
      "Visp inn egg, smeltet smør, smeltet sjokolade, kaffe, appelsinskall og vanilje til en blank røre.",
      "Hell i formen og stek ca. 35–40 minutter til kakepinnen har noen fuktige smuler. Avkjøl."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "sjokoladekake",
  recipes: sjokoladekakeRecipes,
  swapOptions: swapOptions,
  servedAcid: null,

  density: {
    flour: 0.55, gf_flour: 0.55, sugar: 0.85, cocoa: 0.45,
    milk: 1.03, coffee: 1, plant_milk: 1.03, oil: 0.92, butter: 0.95, dark_chocolate: 1
  },
  pieceWeight: { egg: 55 },
  unitOptions: {
    flour: ["dl", "ml", "g"], sugar: ["dl", "ml", "g"], cocoa: ["dl", "ml", "g"],
    milk: ["dl", "ml"], coffee: ["dl", "ml"], oil: ["dl", "ml", "ss"]
  },
  bulkRoles: ["bulk", "liquid", "binder"],
  levers: [],          // bakst styres av forhold, ikke smakslevere
  requireRoles: [],
  tasteMessages: {
    sweet: "Kaken blir mindre søt – juster gjerne med en glasur til slutt.",
    bitter: "", sour: "", umami: ""
  },
  leverMessages: {}
};
