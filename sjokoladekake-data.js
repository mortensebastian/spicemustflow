/* ===== Sjokoladekake (norsk rørekake) – datamodell =====
   Enkel, universell bakst (ingen research-dok nødvendig). Bekrefter samme
   «format» som pannekake: forholdsbasert bakst, antall-basert skalering (stk),
   ingen smakslevere (levers: []), diett-bytter som vanlige swaps.

   Merk om bakst: hevemiddel (bakepulver) og kakao må skaleres LINEÆRT med melet
   for at kaken skal heve/smake riktig – derfor scaling: "linear" på dem, ikke
   "nonlinear". Bare rene smakstilsetninger (vanilje, salt) holdes igjen.

   Form og glasur (addStage: "serve"):
     enkel    – rund springform 24 cm / liten langpanne. Enkel melisglasur.
     medium   – rund springform 22–24 cm. Delt i to lag med fyll + glasur.
     kompleks – rund springform 22–24 cm. Blank sjokoladeganache.
   Glasur/fyll-ingredienser har egne roller ("glaze"/"filling") utenfor bulkRoles
   så de ikke teller som «mengde kake» (ingen maintain-yield ved fjerning). Hver
   meieri-bærer i glasuren har melkefritt bytte + removable, så melkefri-filteret
   forblir komplett. */

const swapOptions = {
  flour: [
    { id: "gf_flour", label: "Glutenfri melblanding", amount: 3, unit: "dl", note: "Bruk blanding med bindemiddel; kaken blir litt tettere." }
  ],
  milk: [
    { id: "coffee", label: "Sterk kaffe", amount: 2, unit: "dl", note: "Forsterker sjokoladesmaken; smaker ikke kaffe i ferdig kake." },
    { id: "plant_milk", label: "Havremelk (melkefri)", amount: 2, unit: "dl" }
  ],
  butter: [
    { id: "oil", label: "Nøytral olje", amount: 100, unit: "g", note: "Gir saftig kake; melkefritt alternativ." }
  ],
  cocoa: [
    { id: "dark_chocolate", label: "Smeltet mørk sjokolade", amount: 150, unit: "g", taste: { bitter: 2 },
      note: "Smelt og rør inn; rikere og mer intens. Reduser gjerne melmengden litt." }
  ],
  glaze_butter: [
    { id: "glaze_margarine", label: "Margarin (melkefri)", amount: 30, unit: "g", note: "Melkefritt – til glasur eller ganache." }
  ],
  cream: [
    { id: "plant_cream", label: "Havrefløte (melkefri)", amount: 2, unit: "dl", note: "Melkefri ganache; bruk en variant til matlaging/pisking." }
  ]
};


const sjokoladekakeRecipes = {

  /* ---------- ENKEL: rask rørekake i én bolle, enkel glasur ---------- */
  enkel: {
    label: "Enkel", servings: 12,
    ingredients: [
      { id: "flour",          label: "Hvetemel",      amount: 3, unit: "dl",  role: "bulk",     scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "sugar",          label: "Sukker",        amount: 3, unit: "dl",  role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 } },
      { id: "cocoa",          label: "Kakao",         amount: 1.5, unit: "dl", role: "aromatic", scaling: "linear",    addStage: "early", removable: false, taste: { bitter: 2 } },
      { id: "baking_powder",  label: "Bakepulver",    amount: 2, unit: "ts",  role: "seasoning", scaling: "linear",   addStage: "early", removable: false, note: "Hevemiddel – skaleres med melet." },
      { id: "egg",            label: "Egg",           amount: 2, unit: "stk", role: "binder",   scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"] },
      { id: "milk",           label: "Melk",          amount: 2, unit: "dl",  role: "liquid",   scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "oil",            label: "Nøytral olje",  amount: 1.5, unit: "dl", role: "fat",     scaling: "linear",    addStage: "early", removable: false },
      { id: "vanilla",        label: "Vaniljesukker", amount: 1, unit: "ts",  role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "salt",           label: "Salt",          amount: 0.25, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, note: "En klype løfter sjokoladesmaken." },
      /* Enkel glasur (melisglasur) – ingen koking */
      { id: "powdered_sugar", label: "Melis (til glasur)",                amount: 2.5, unit: "dl", role: "glaze", scaling: "linear", addStage: "serve", removable: true },
      { id: "glaze_cocoa",    label: "Kakao (til glasur)",                amount: 1, unit: "ss",   role: "glaze", scaling: "linear", addStage: "serve", removable: true, taste: { bitter: 1 } },
      { id: "glaze_butter",   label: "Smeltet smør (til glasur)",         amount: 25, unit: "g",   role: "glaze", scaling: "linear", addStage: "serve", removable: true, allergens: ["dairy"] },
      { id: "glaze_coffee",   label: "Kokende kaffe eller vann (til glasur)", amount: 1.5, unit: "ss", role: "glaze", scaling: "linear", addStage: "serve", removable: true }
    ],
    steps: [
      "Sett ovnen på 175 °C. Smør en rund springform på 24 cm (eller en liten langpanne, ca. 20 × 30 cm) og kle bunnen med bakepapir.",
      "Bland alt det tørre (mel, sukker, kakao, bakepulver, salt).",
      "Rør inn egg, melk, olje og vanilje til en jevn røre.",
      "Hell i formen og stek ca. 30–35 minutter til en kakepinne kommer ren ut. Avkjøl kaken helt før du glaserer.",
      "Enkel glasur: rør melis og kakao sammen, og spe med smeltet smør og kokende kaffe (eller vann), litt om gangen, til en blank, smørbar glasur. Bre den over den avkjølte kaken og la den sette seg."
    ]
  },

  /* ---------- MEDIUM: saftigere med smør og kaffe, fyll + glasur ---------- */
  medium: {
    label: "Medium", servings: 12,
    ingredients: [
      { id: "flour",          label: "Hvetemel",      amount: 3, unit: "dl",  role: "bulk",     scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "sugar",          label: "Sukker",        amount: 3, unit: "dl",  role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 } },
      { id: "cocoa",          label: "Kakao",         amount: 1.5, unit: "dl", role: "aromatic", scaling: "linear",    addStage: "early", removable: false, taste: { bitter: 2 } },
      { id: "baking_powder",  label: "Bakepulver",    amount: 2, unit: "ts",  role: "seasoning", scaling: "linear",   addStage: "early", removable: false },
      { id: "egg",            label: "Egg",           amount: 3, unit: "stk", role: "binder",   scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"] },
      { id: "butter",         label: "Smeltet smør",  amount: 150, unit: "g", role: "fat",      scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "milk",           label: "Melk",          amount: 2, unit: "dl",  role: "liquid",   scaling: "linear",    addStage: "early", removable: false, note: "Bytt gjerne til sterk kaffe for dypere smak.", allergens: ["dairy"] },
      { id: "vanilla",        label: "Vaniljesukker", amount: 1, unit: "ts",  role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "salt",           label: "Salt",          amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      /* Fyll mellom lagene */
      { id: "raspberry_jam",  label: "Bringebærsyltetøy (til fyll)",      amount: 1.5, unit: "dl", role: "filling", scaling: "linear", addStage: "serve", removable: true, note: "Eller pisket krem / annet bærsyltetøy mellom lagene." },
      /* Sjokoladeglasur på toppen */
      { id: "powdered_sugar", label: "Melis (til glasur)",                amount: 3, unit: "dl",  role: "glaze", scaling: "linear", addStage: "serve", removable: true },
      { id: "glaze_cocoa",    label: "Kakao (til glasur)",                amount: 1.5, unit: "ss", role: "glaze", scaling: "linear", addStage: "serve", removable: true, taste: { bitter: 1 } },
      { id: "glaze_butter",   label: "Smeltet smør (til glasur)",         amount: 40, unit: "g",  role: "glaze", scaling: "linear", addStage: "serve", removable: true, allergens: ["dairy"] },
      { id: "glaze_coffee",   label: "Kokende kaffe eller vann (til glasur)", amount: 2, unit: "ss", role: "glaze", scaling: "linear", addStage: "serve", removable: true }
    ],
    steps: [
      "Sett ovnen på 175 °C. Smør en rund springform på 22–24 cm og kle bunnen med bakepapir.",
      "Bland det tørre (mel, sukker, kakao, bakepulver, salt).",
      "Visp inn egg, smeltet smør, melk og vanilje til en glatt røre.",
      "Hell i formen og stek ca. 35–40 minutter til kakepinnen er ren. Avkjøl kaken helt.",
      "Del kaken i to lag med en brødkniv. Legg bunnen på et fat, bre på bringebærsyltetøyet som fyll, og legg toppen tilbake.",
      "Glasur: rør melis og kakao sammen, spe med smeltet smør og kokende kaffe til en blank glasur, og bre den over kaken. La den sette seg litt før servering."
    ]
  },

  /* ---------- KOMPLEKS: mørk sjokolade, kaffe, appelsin, ganache ---------- */
  kompleks: {
    label: "Kompleks", servings: 12,
    ingredients: [
      { id: "flour",            label: "Hvetemel",            amount: 2.5, unit: "dl", role: "bulk",     scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "sugar",            label: "Sukker",              amount: 3, unit: "dl",   role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 } },
      { id: "dark_chocolate",   label: "Smeltet mørk sjokolade", amount: 150, unit: "g", role: "aromatic", scaling: "linear", addStage: "early", removable: false, taste: { bitter: 2 } },
      { id: "cocoa",            label: "Kakao",               amount: 0.5, unit: "dl", role: "aromatic", scaling: "linear",    addStage: "early", removable: true, taste: { bitter: 2 } },
      { id: "baking_powder",    label: "Bakepulver",          amount: 1.5, unit: "ts", role: "seasoning", scaling: "linear",  addStage: "early", removable: false },
      { id: "egg",              label: "Egg",                 amount: 3, unit: "stk", role: "binder",   scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"] },
      { id: "butter",           label: "Smeltet smør",        amount: 150, unit: "g", role: "fat",      scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "coffee",           label: "Sterk kaffe",         amount: 1.5, unit: "dl", role: "liquid",  scaling: "linear",    addStage: "early", removable: false, note: "Forsterker sjokoladen uten å smake kaffe." },
      { id: "orange_zest",      label: "Appelsinskall (revet)", amount: 1, unit: "ss", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, note: "Frisk kontrast til den mørke sjokoladen." },
      { id: "vanilla",          label: "Vaniljesukker",       amount: 1, unit: "ts", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "salt",             label: "Salt",                amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      /* Blank sjokoladeganache */
      { id: "cream",            label: "Kremfløte (til ganache)",          amount: 2, unit: "dl",  role: "glaze", scaling: "linear", addStage: "serve", removable: true, allergens: ["dairy"] },
      { id: "ganache_chocolate", label: "Mørk sjokolade, hakket (til ganache)", amount: 200, unit: "g", role: "glaze", scaling: "linear", addStage: "serve", removable: true, taste: { bitter: 1 } },
      { id: "glaze_butter",     label: "Smør (til glans i ganachen)",      amount: 20, unit: "g",  role: "glaze", scaling: "linear", addStage: "serve", removable: true, allergens: ["dairy"] }
    ],
    steps: [
      "Sett ovnen på 170 °C. Smør en rund springform på 22–24 cm og kle bunnen med bakepapir. Smelt sjokoladen til røren forsiktig.",
      "Bland det tørre (mel, sukker, kakao, bakepulver, salt).",
      "Visp inn egg, smeltet smør, smeltet sjokolade, kaffe, appelsinskall og vanilje til en blank røre.",
      "Hell i formen og stek ca. 35–40 minutter til kakepinnen har noen fuktige smuler. Avkjøl kaken helt.",
      "Ganache: varm fløten til den så vidt damper (ikke kok), hell den over den hakkede sjokoladen, og la stå et minutt før du rører den blank. Rør inn smøret for ekstra glans.",
      "La ganachen tykne litt ved romtemperatur, og hell den så over den avkjølte kaken så den legger seg jevnt og renner litt ned langs sidene."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "sjokoladekake",
  yieldNoun: "stykker",
  recipes: sjokoladekakeRecipes,
  swapOptions: swapOptions,
  servedAcid: null,

  density: {
    flour: 0.55, gf_flour: 0.55, sugar: 0.85, cocoa: 0.45, baking_powder: 0.9,
    milk: 1.03, coffee: 1, plant_milk: 1.03, oil: 0.92, butter: 0.95, dark_chocolate: 1,
    /* glasur + fyll */
    powdered_sugar: 0.5, glaze_cocoa: 0.45, glaze_coffee: 1, raspberry_jam: 1.3,
    cream: 1, plant_cream: 1
  },
  pieceWeight: { egg: 55 },
  unitOptions: {
    flour: ["dl", "ml", "g"], gf_flour: ["dl", "ml", "g"], sugar: ["dl", "ml", "g"], cocoa: ["dl", "ml", "g"],
    milk: ["dl", "ml"], plant_milk: ["dl", "ml"], coffee: ["dl", "ml", "g"], oil: ["dl", "ml", "ss"],
    baking_powder: ["ts", "g"],
    /* glasur + fyll */
    powdered_sugar: ["dl", "ml", "g"], glaze_cocoa: ["ss", "ts", "g"], glaze_coffee: ["ss", "ts", "ml"],
    raspberry_jam: ["dl", "ml", "g"], cream: ["dl", "ml", "g"], plant_cream: ["dl", "ml", "g"]
  },
  bulkRoles: ["bulk", "liquid", "binder"],
  levers: [],          // bakst styres av forhold, ikke smakslevere
  requireRoles: [],
  tasteMessages: {
    sweet: "Kaken blir mindre søt – juster gjerne med en glasur til slutt."
  },
  leverMessages: {}
};
