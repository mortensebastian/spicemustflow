/* ===== Baja fish tacos – datamodell =====
   Meksikansk gatemat fra Baja California: sprøstekt, ølfritert hvit fisk (eller
   kylling – likestilt alternativ) i myke tortillas med frisk rødkålslaw, røkt
   chipotlekrem og lime. Tre grunnoppskrifter på «stige»-modellen:
     enkel    – panstekt fisk i krydret mel, rask kålslaw, lime-/chipotlemajo, hvetetortilla
     medium   – ekte Baja: ølfritert fisk, rødkålslaw, chipotlekrem, pico, majstortilla
     kompleks – maizena-ølrøre, syltet rødløk, guacamole, crème fraîche-krem, majstortilla

   Smaksbalanse (recipe-balance.js): én selvjusterende lever –
     salt → salt_added (via sodiumPer100g)
   requireRoles:["acid"] – lime (role:"acid") gir den friskheten retten lever av.
   Allergener: fisk (løses via kylling/halloumi-bytte), gluten (mel→glutenfri,
   øl→sprudlevann, hvetetortilla→majstortilla), egg (majones→eggfri), meieri
   (rømme/crème fraîche→plantebasert). Hver bærer i hvert nivå er løsbar. */

/* ===== Godkjente bytter (kuratert, etter rolle/teksturklasse) ===== */
const swapOptions = {
  white_fish: [
    { id: "salmon", label: "Laks (fetere)", amount: 600, unit: "g", sodiumPer100g: 60, allergens: ["fish"], taste: {"umami":2}, note: "Fyldigere og fetere; stek litt kortere." },
    { id: "chicken", label: "Kyllingfilet i strimler (fiskefri)", amount: 600, unit: "g", sodiumPer100g: 60, taste: {"umami":1}, note: "Likestilt alternativ til fisken – baja chicken tacos. Friter i samme ølrøre eller stek sprø i krydret mel; stek til gjennomstekt." },
    { id: "halloumi", label: "Halloumi i staver (vegetar)", amount: 500, unit: "g", sodiumPer100g: 1200, allergens: ["dairy"], taste: {"umami":1}, note: "Vegetar; salt – salt justeres automatisk. Stek sprø." }
  ],
  wheat_flour: [
    { id: "gf_flour", label: "Glutenfri melblanding", amount: 1.5, unit: "dl", note: "Glutenfri røre; bland gjerne med litt maizena." }
  ],
  beer: [
    { id: "sparkling_water", label: "Sprudlevann eller glutenfritt øl", amount: 2, unit: "dl", note: "Glutenfri røre; kullsyren gir samme sprøhet." }
  ],
  mayo: [
    { id: "vegan_mayo", label: "Eggfri majones (vegansk)", amount: 1, unit: "dl", note: "Eggfri og melkefri base for kremen." }
  ],
  sour_cream: [
    { id: "plant_creme", label: "Plantebasert crème fraîche (melkefri)", amount: 1, unit: "dl", note: "Soya- eller havrebasert; melkefri og kremet." },
    { id: "greek_yogurt", label: "Gresk yoghurt (lettere)", amount: 1, unit: "dl", allergens: ["dairy"], taste: {"sour":1}, note: "Lettere og litt syrligere krem." }
  ],
  creme_fraiche: [
    { id: "plant_creme", label: "Plantebasert crème fraîche (melkefri)", amount: 1, unit: "dl", note: "Soya- eller havrebasert; melkefri og kremet." },
    { id: "greek_yogurt", label: "Gresk yoghurt (lettere)", amount: 1, unit: "dl", allergens: ["dairy"], taste: {"sour":1}, note: "Lettere og litt syrligere krem." }
  ],
  chipotle_adobo: [
    { id: "chipotle_paste", label: "Chipotlepasta", amount: 1, unit: "ss", taste: {"heat":2,"umami":1}, note: "Konsentrert; bruk litt mindre." },
    { id: "smoked_paprika", label: "Røkt paprikapulver (mildere)", amount: 1, unit: "ts", taste: {"heat":1,"umami":1}, note: "Mildere; ingen friskhet – ha gjerne en skvett sterk saus i." }
  ],
  corn_tortilla: [
    { id: "wheat_tortilla", label: "Hvetetortilla, små", amount: 10, unit: "stk", allergens: ["gluten"], note: "Vanlig i Norge; mykere og litt større." }
  ],
  wheat_tortilla: [
    { id: "corn_tortilla", label: "Majstortilla, små (glutenfri)", amount: 8, unit: "stk", note: "Autentisk og naturlig glutenfri." }
  ]
};


const bajaFishTacosRecipes = {
  enkel: {
    label: "Enkel", servings: 4,
    ingredients: [
      { id: "white_fish", label: "Torsk eller annen fast hvit fisk, i strimler", amount: 500, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 70, removable: false, allergens: ["fish"], taste: {"umami":1} },
      { id: "wheat_flour", label: "Hvetemel (til vending)", amount: 1, unit: "dl", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "spice_mix", label: "Tacokrydder", amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 8000, removable: false, taste: {"heat":1} },
      { id: "oil", label: "Nøytral olje (til steking)", amount: 0.5, unit: "dl", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "red_cabbage", label: "Rødkål eller spisskål, finstrimlet", amount: 300, unit: "g", role: "vegetable", scaling: "linear", addStage: "end", removable: false, taste: {"sweet":1} },
      { id: "lime", label: "Lime", amount: 2, unit: "stk", role: "acid", essential: true, scaling: "linear", addStage: "end", removable: false, taste: {"sour":2} },
      { id: "mayo", label: "Majones", amount: 3, unit: "ss", role: "fat", scaling: "linear", addStage: "end", removable: false, allergens: ["egg"] },
      { id: "chipotle_adobo", label: "Chipotlepasta (eller røkt paprika)", amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end", removable: true, taste: {"heat":2,"umami":1} },
      { id: "red_onion", label: "Rødløk, tynt skåret", amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "end", removable: true, taste: {"sweet":1} },
      { id: "cilantro", label: "Frisk koriander, grovhakket", amount: 1, unit: "stk", role: "aromatic", scaling: "fixed", addStage: "end", removable: true },
      { id: "wheat_tortilla", label: "Hvetetortilla, små", amount: 8, unit: "stk", role: "starch", essential: true, scaling: "linear", addStage: "end", removable: false, allergens: ["gluten"] },
      { id: "salt_added", label: "Salt", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false }
    ],
    steps: [
      "Bland hvetemel, tacokrydder og salt på en tallerken. Klapp fiskestrimlene tørre, og vend dem i melet.",
      "Stek fisken sprø og gyllen i olje, 2–3 minutter på hver side. Legg på litt kjøkkenpapir.",
      "Strimle kålen fint, og bland med en klem lime og litt salt. Rør sammen majones, chipotle og litt limesaft til en krem.",
      "Varm tortillaene i tørr panne. Fyll med kålslaw, fisk, chipotlekrem, rødløk og koriander, og server med limebåter."
    ]
  },

  medium: {
    label: "Medium", servings: 4,
    ingredients: [
      { id: "white_fish", label: "Torsk i strimler", amount: 600, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 70, removable: false, allergens: ["fish"], taste: {"umami":1} },
      { id: "wheat_flour", label: "Hvetemel (til ølrøren)", amount: 1.5, unit: "dl", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "beer", label: "Lys lager (til røren)", amount: 2, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "oil", label: "Nøytral olje (til fritering)", amount: 4, unit: "dl", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "red_cabbage", label: "Rødkål, finstrimlet", amount: 300, unit: "g", role: "vegetable", scaling: "linear", addStage: "end", removable: false, taste: {"sweet":1} },
      { id: "lime", label: "Lime", amount: 2, unit: "stk", role: "acid", essential: true, scaling: "linear", addStage: "end", removable: false, taste: {"sour":2} },
      { id: "mayo", label: "Majones", amount: 1, unit: "dl", role: "fat", scaling: "linear", addStage: "end", removable: false, allergens: ["egg"] },
      { id: "sour_cream", label: "Rømme", amount: 1, unit: "dl", role: "fat", scaling: "linear", addStage: "end", removable: false, allergens: ["dairy"] },
      { id: "chipotle_adobo", label: "Chipotle i adobo, hakket", amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end", removable: true, taste: {"heat":2,"umami":1} },
      { id: "garlic", label: "Hvitløk", amount: 1, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "end", removable: true, taste: {"umami":1} },
      { id: "tomato", label: "Tomat, i terninger (pico)", amount: 2, unit: "stk", role: "vegetable", scaling: "linear", addStage: "end", removable: true, taste: {"sour":1,"sweet":1} },
      { id: "red_onion", label: "Rødløk, finhakket", amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "end", removable: true, taste: {"sweet":1} },
      { id: "cilantro", label: "Frisk koriander, grovhakket", amount: 1, unit: "stk", role: "aromatic", scaling: "fixed", addStage: "end", removable: true },
      { id: "corn_tortilla", label: "Majstortilla, små", amount: 10, unit: "stk", role: "starch", essential: true, scaling: "linear", addStage: "end", removable: false },
      { id: "salt_added", label: "Salt", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false }
    ],
    steps: [
      "Lag pico: bland tomat, halvparten av rødløken, litt koriander, en klem lime og en klype salt. Sett kaldt.",
      "Rør sammen majones, rømme, chipotle, presset hvitløk og litt limesaft til en chipotlekrem. Smak til med salt.",
      "Strimle rødkålen fint, og vend med en klem lime og litt salt så den mykner litt.",
      "Visp hvetemel, salt og kaldt øl til en glatt røre rett før steking. Varm olje til 175 °C.",
      "Klapp fisken tørr, dypp i røren, og friter gyllen og sprø, et par minutter på hver side. Renn av på rist.",
      "Varm majstortillaene. Topp med kålslaw, fisk, chipotlekrem, pico og koriander, og server med limebåter."
    ]
  },

  kompleks: {
    label: "Kompleks", servings: 4,
    ingredients: [
      { id: "white_fish", label: "Fersk torsk eller lyr, i strimler", amount: 600, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 70, removable: false, allergens: ["fish"], taste: {"umami":1} },
      { id: "wheat_flour", label: "Hvetemel (til røren)", amount: 1, unit: "dl", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "cornstarch", label: "Maizena (for ekstra sprø røre)", amount: 0.5, unit: "dl", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "beer", label: "Lys lager (til røren)", amount: 2, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "oil", label: "Nøytral olje (til fritering)", amount: 5, unit: "dl", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "red_cabbage", label: "Rødkål, finstrimlet", amount: 300, unit: "g", role: "vegetable", scaling: "linear", addStage: "end", removable: false, taste: {"sweet":1} },
      { id: "lime", label: "Lime", amount: 3, unit: "stk", role: "acid", essential: true, scaling: "linear", addStage: "end", removable: false, taste: {"sour":2} },
      { id: "mayo", label: "Majones", amount: 1, unit: "dl", role: "fat", scaling: "linear", addStage: "end", removable: false, allergens: ["egg"] },
      { id: "creme_fraiche", label: "Crème fraîche", amount: 1, unit: "dl", role: "fat", scaling: "linear", addStage: "end", removable: false, allergens: ["dairy"] },
      { id: "chipotle_adobo", label: "Chipotle i adobo, hakket", amount: 1.5, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end", removable: true, taste: {"heat":2,"umami":1} },
      { id: "garlic", label: "Hvitløk", amount: 2, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "end", removable: true, taste: {"umami":1} },
      { id: "avocado", label: "Avokado (til guacamole)", amount: 2, unit: "stk", role: "vegetable", scaling: "linear", addStage: "end", removable: true, taste: {"sweet":1} },
      { id: "tomato", label: "Tomat, i terninger (pico)", amount: 2, unit: "stk", role: "vegetable", scaling: "linear", addStage: "end", removable: true, taste: {"sour":1,"sweet":1} },
      { id: "red_onion", label: "Rødløk", amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "end", removable: true, taste: {"sweet":1} },
      { id: "vinegar", label: "Eddik (til syltet rødløk)", amount: 0.5, unit: "dl", role: "liquid", scaling: "nonlinear", addStage: "early", removable: true, taste: {"sour":1} },
      { id: "sugar", label: "Sukker (til syltet rødløk)", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "cilantro", label: "Frisk koriander, grovhakket", amount: 1, unit: "stk", role: "aromatic", scaling: "fixed", addStage: "end", removable: true },
      { id: "corn_tortilla", label: "Majstortilla, små", amount: 12, unit: "stk", role: "starch", essential: true, scaling: "linear", addStage: "end", removable: false },
      { id: "salt_added", label: "Salt", amount: 1.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false }
    ],
    steps: [
      "Sylt rødløken: skjær den tynt, og legg i eddik, sukker og en klype salt. La trekke mens du lager resten.",
      "Lag guacamole av avokado, litt lime, salt og finhakket koriander. Lag pico av tomat og litt av rødløken.",
      "Rør sammen majones, crème fraîche, chipotle, presset hvitløk og limesaft til en røkt krem. Smak til.",
      "Strimle rødkålen fint, og vend med lime og litt salt så den mykner.",
      "Visp hvetemel, maizena, salt og iskaldt øl til en glatt røre rett før steking. Varm olje til 175 °C.",
      "Klapp fisken tørr, dypp i røren, og friter gyllen og sprø, et par minutter per side. Renn av på rist og salt lett.",
      "Varm majstortillaene. Bygg tacoene med kålslaw, fisk, chipotlekrem, guacamole, pico, syltet rødløk og koriander, og server med limebåter."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "baja-fish-tacos",
  recipes: bajaFishTacosRecipes,
  swapOptions: swapOptions,
  servedAcid: null,

  density: {"wheat_flour":0.55,"cornstarch":0.55,"beer":1,"oil":0.92,"mayo":0.95,"sour_cream":1,"creme_fraiche":1,"chipotle_adobo":1,"spice_mix":0.5,"vinegar":1,"sugar":0.85,"salt_added":1.2,"gf_flour":0.55,"sparkling_water":1,"vegan_mayo":0.95,"plant_creme":1,"greek_yogurt":1.05,"chipotle_paste":1,"smoked_paprika":0.5},
  pieceWeight: {"lime":70,"garlic":5,"tomato":90,"red_onion":110,"avocado":200,"wheat_tortilla":35,"corn_tortilla":30},
  unitOptions: {"wheat_flour":["dl","ml","g"],"cornstarch":["dl","ml","g"],"beer":["dl","ml","g"],"oil":["dl","ml","g"],"mayo":["dl","ss","ml","g"],"sour_cream":["dl","ss","ml","g"],"creme_fraiche":["dl","ss","ml","g"],"chipotle_adobo":["ss","ts","g"],"spice_mix":["ss","ts","g"],"vinegar":["dl","ml","g"],"sugar":["ts","ss","g"],"salt_added":["ts","g"],"gf_flour":["dl","ml","g"],"sparkling_water":["dl","ml","g"],"vegan_mayo":["dl","ss","ml","g"],"plant_creme":["dl","ss","ml","g"],"greek_yogurt":["dl","ss","ml","g"],"chipotle_paste":["ss","ts","g"],"smoked_paprika":["ss","ts","g"]},
  bulkRoles: ["protein","vegetable","liquid"],
  levers: [{"axis":"salt","id":"salt_added"}],
  requireRoles: ["acid"],
  tasteMessages: {"umami":"Mindre dybde i fisken – litt ekstra krydder eller en skvett soya i røren hjelper.","sour":"Mindre friskhet – en ekstra klem lime over toppen balanserer.","heat":"Mindre varme – litt ekstra chipotle eller chiliflak i kremen løfter den."},
  leverMessages: {"salt":{"down":"Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til.","up":"Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."}}
};
