/* ===== Fiskesuppe – datamodell =====
   Tre grunnoppskrifter på «stige»-modellen fra kunnskapsgrunnlaget:
     enkel    – hverdags kremet laksesuppe (få komponenter)
     medium   – bergensk hjemmeversjon (fumet, flere sjømat, søt-sur balanse)
     kompleks – elevert safran-sjømatsuppe (skalldyrkraft, stegede komponenter)

   Smaksbalanse (recipe-balance.js): tre selvjusterende levere –
     salt  → salt_added (via sodiumPer100g)
     sur   → vinegar    (via taste.sour)   [enkel/medium]
     søt   → sugar       (via taste.sweet)  [enkel/medium]
   Kompleks bruker tomat/vin/sitron som syre (ingen eddik/sukker-lever der;
   leverne hoppes automatisk over når ingrediensen ikke finnes i retten).

   Syre er kritisk: requireRoles inkluderer 'acid'. Fløte-sikkerhet (curdling)
   er bakt inn som faste notater/steg: ikke kok etter fløte, temperér, bruk
   crème fraîche/helfløte, tilsett syre i små mengder. */

/* ===== Godkjente bytter (kuratert, etter teksturklasse/rolle) ===== */
const swapOptions = {
  salmon: [
    { id: "cod", label: "Torsk (mager, flakete)", amount: 400, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"],
      tradition: "traditional", note: "Magrere enn laks – vurder en liten skvett ekstra fløte/smør for fylde." },
    { id: "trout", label: "Ørret", amount: 400, unit: "g", sodiumPer100g: 60, taste: { umami: 2 },
      allergens: ["fish"], note: "Som laks; fet og fyldig." }
  ],
  cod: [
    { id: "haddock", label: "Hyse (flakete)", amount: 250, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], tradition: "traditional" },
    { id: "saithe", label: "Sei (flakete)", amount: 250, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], tradition: "traditional", note: "Tradisjonell i bergensk fiskesuppe." },
    { id: "monkfish", label: "Breiflabb (fast)", amount: 250, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], note: "Fast – holder formen, tåler litt lengre koking." }
  ],
  shrimp: [
    { id: "mussels", label: "Blåskjell", amount: 200, unit: "g", sodiumPer100g: 285, taste: { umami: 2 }, allergens: ["shellfish"], note: "Slipper salt skjellkraft i suppa." },
    { id: "scallops", label: "Kamskjell", amount: 150, unit: "g", sodiumPer100g: 160, taste: { umami: 2 }, allergens: ["shellfish"], note: "Mild og søt; trekkes helt til slutt." }
  ],
  cream: [
    { id: "creme_fraiche", label: "Crème fraîche", amount: 2.5, unit: "dl", taste: { sour: 1 },
      allergens: ["dairy"], tradition: "traditional",
      note: "Mer stabil mot curdling og gir norsk syrlig tone." },
    { id: "coconut", label: "Kokosmelk (uten melk)", amount: 2.5, unit: "dl", taste: { sweet: 1 },
      note: "Melkefri; litt søtlig – passer fint med safran." }
  ],
  vinegar: [
    { id: "lemon", label: "Sitronsaft", amount: 1, unit: "ss", taste: { sour: 2 }, note: "Mildere/fruktigere enn eddik – bruk litt mer, smak til." }
  ],
  dill: [
    { id: "parsley", label: "Persille", amount: 1, unit: "ss" },
    { id: "chives", label: "Gressløk", amount: 1, unit: "ss" }
  ],
  wine: [
    { id: "extra_stock", label: "Mer kraft + sitron", amount: 1.5, unit: "dl", taste: { sour: 1 },
      allergens: ["fish"], note: "Mister litt aromadybde; tilsett en skvett sitron til slutt." }
  ]
};


const fiskesuppeRecipes = {

  /* ---------- ENKEL: kremet laksesuppe, hverdag ---------- */
  enkel: {
    label: "Enkel", servings: 4,
    ingredients: [
      { id: "stock",      label: "Fiskekraft (terning)", amount: 8, unit: "dl", role: "liquid",  scaling: "linear", addStage: "early", sodiumPer100g: 300, removable: false, taste: { umami: 1 }, allergens: ["fish"] },
      { id: "salmon",     label: "Laks i terninger",     amount: 400, unit: "g", role: "protein", scaling: "linear", addStage: "end",   sodiumPer100g: 60,  removable: false, taste: { umami: 2 }, allergens: ["fish"], note: "Oljefisk – gir farge og fylde. Trekkes mot slutten, ikke kok." },
      { id: "potato",     label: "Potet i terninger",    amount: 300, unit: "g", role: "vegetable", scaling: "linear", addStage: "early", removable: true },
      { id: "carrot",     label: "Gulrot",               amount: 2, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "leek",       label: "Purre",                amount: 1, unit: "stk", role: "aromatic",  scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "cream",      label: "Fløte",                amount: 2.5, unit: "dl", role: "fat",      scaling: "linear", addStage: "end",   removable: false, allergens: ["dairy"], note: "Tilsett mot slutten; ikke la suppa koke etter fløten." },
      { id: "vinegar",    label: "Hvitvinseddik",        amount: 1, unit: "ts",  role: "acid",     scaling: "nonlinear", addStage: "serve", removable: true, taste: { sour: 3 },
        onRemove: { tip: "Eddiken er suppas syre og «løft». Uten den blir den flat og tung – tilsett litt sitron til slutt i stedet." } },
      { id: "sugar",      label: "Sukker",               amount: 1, unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "serve", removable: true, taste: { sweet: 3 }, note: "Balanserer eddiken til en mild søt-sur tone." },
      { id: "salt_added", label: "Salt",                 amount: 1, unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "end",   sodiumPer100g: 38800, removable: false, note: "Justeres automatisk; smak til etter fløten." },
      { id: "dill",       label: "Frisk dill",           amount: 1, unit: "ss",  role: "aromatic",  scaling: "linear", addStage: "serve", removable: true }
    ],
    steps: [
      "Kok opp fiskekraften, og kok potet og gulrot møre i den, ca. 8–10 minutter.",
      "Tilsett purren de siste minuttene.",
      "Skru ned varmen, legg i laksen og la den trekke 3–4 minutter til den så vidt er gjennom – ikke kok.",
      "Tilsett fløten og varm forsiktig opp uten å koke.",
      "Smak til med eddik og sukker i små mengder til en subtil søt-sur balanse, og juster salt og pepper.",
      "Rør inn frisk dill og server med en gang."
    ]
  },

  /* ---------- MEDIUM: bergensk hjemmeversjon ---------- */
  medium: {
    label: "Medium", servings: 4,
    ingredients: [
      { id: "stock",      label: "Fiskekraft (fumet)",   amount: 10, unit: "dl", role: "liquid",  scaling: "linear", addStage: "early", sodiumPer100g: 200, removable: false, taste: { umami: 1 }, allergens: ["fish"], note: "Bruk gjerne hjemmelaget av magre fiskebein; ikke kok hardt." },
      { id: "cod",        label: "Torsk i terninger",    amount: 250, unit: "g", role: "protein", scaling: "linear", addStage: "end",   sodiumPer100g: 70,  removable: false, taste: { umami: 1 }, allergens: ["fish"], tradition: "traditional", note: "Flakete – legges i først av fisken." },
      { id: "salmon",     label: "Laks i terninger",     amount: 150, unit: "g", role: "protein", scaling: "linear", addStage: "end",   sodiumPer100g: 60,  removable: true,  taste: { umami: 2 }, allergens: ["fish"], note: "Gir farge og fylde." },
      { id: "shrimp",     label: "Reker (pillet)",       amount: 150, unit: "g", role: "seafood", scaling: "linear", addStage: "end",   sodiumPer100g: 120, removable: true,  taste: { umami: 2 }, allergens: ["shellfish"], note: "Vendes inn helt til slutt." },
      { id: "leek",       label: "Purre",                amount: 1, unit: "stk", role: "aromatic",  scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "carrot",     label: "Gulrot",               amount: 2, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "celeriac",   label: "Sellerirot",           amount: 150, unit: "g", role: "vegetable", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "butter",     label: "Smør",                 amount: 1, unit: "ss",  role: "fat",      scaling: "nonlinear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "flour",      label: "Hvetemel",             amount: 1, unit: "ss",  role: "seasoning", scaling: "linear", addStage: "end",   removable: true, allergens: ["gluten"], note: "Visp i fløten – jevner og stabiliserer mot curdling." },
      { id: "cream",      label: "Fløte / crème fraîche", amount: 3, unit: "dl", role: "fat",      scaling: "linear", addStage: "end",   removable: false, allergens: ["dairy"], note: "Tilsett mot slutten; ikke kok etter fløten. Crème fraîche tåler varme/syre best." },
      { id: "vinegar",    label: "Hvitvinseddik",        amount: 1, unit: "ts",  role: "acid",     scaling: "nonlinear", addStage: "serve", removable: true, taste: { sour: 3 },
        onRemove: { tip: "Eddiken gir den bergenske søt-sure tonen. Uten den blir suppa flat – tilsett sitron til slutt i stedet." } },
      { id: "sugar",      label: "Sukker",               amount: 1, unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "serve", removable: true, taste: { sweet: 3 }, note: "Balanserer eddiken; sikt mot subtil søt-sur." },
      { id: "salt_added", label: "Salt",                 amount: 1, unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "end",   sodiumPer100g: 38800, removable: false, note: "Justeres automatisk; salt etter at fløten er i." },
      { id: "dill",       label: "Frisk dill",           amount: 1, unit: "ss",  role: "aromatic",  scaling: "linear", addStage: "serve", removable: true }
    ],
    steps: [
      "Smelt smøret og surr purre, gulrot og sellerirot blanke uten å brune.",
      "Hell over fiskekraften og la rotgrønnsakene småkoke møre, ca. 8–10 minutter (ikke hard koking).",
      "Visp melet inn i fløten, rør blandingen i suppa og la den så vidt småkoke til den tykner litt.",
      "Skru ned varmen. Legg i torsken (3–4 min), så laks og reker (1–2 min) til fisken akkurat flaker – ikke kok.",
      "Ta gryta av varmen. Smak til med eddik og sukker i små mengder til en subtil søt-sur balanse, og juster salt/pepper.",
      "Rør inn frisk dill og server straks."
    ]
  },

  /* ---------- KOMPLEKS: elevert safran-sjømatsuppe ---------- */
  kompleks: {
    label: "Kompleks", servings: 4,
    ingredients: [
      { id: "stock",        label: "Skalldyrkraft",        amount: 12, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", sodiumPer100g: 150, removable: false, taste: { umami: 1 }, allergens: ["shellfish"], note: "Lag av ristede reke-/krabbeskall for dyp sjøsmak." },
      { id: "olive_oil",    label: "Olivenolje",           amount: 2, unit: "ss",  role: "fat",     scaling: "nonlinear", addStage: "early", removable: false },
      { id: "onion",        label: "Løk, finhakket",       amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "fennel",       label: "Fennikel, i skiver",   amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "garlic",       label: "Hvitløksfedd",         amount: 3, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true },
      { id: "tomato_paste", label: "Tomatpuré",            amount: 1, unit: "ss",  role: "seasoning", scaling: "linear", addStage: "early", removable: true, taste: { umami: 1 } },
      { id: "tomato",       label: "Hakkede tomater",      amount: 200, unit: "g", role: "acid",    scaling: "linear", addStage: "early", removable: true, isPrimaryAcid: true, taste: { sour: 2, sweet: 1, umami: 2 },
        onRemove: { tip: "Tomaten gir syre, sødme og dybde til basen – uten den blir suppa flatere. Server med rikelig sitron." } },
      { id: "wine",         label: "Hvitvin",              amount: 1.5, unit: "dl", role: "acid",   scaling: "linear", addStage: "early", removable: true, taste: { sour: 2 },
        onRemove: { tip: "Vinen gir syre og aroma. Erstatt med mer kraft + en skvett sitron til slutt." } },
      { id: "saffron",      label: "Safran (blomstret)",   amount: 0.5, unit: "g", role: "saffron", scaling: "nonlinear", addStage: "early", removable: true, taste: { bitter: 1 }, note: "Bløtlegg i litt varm (ikke kokende) kraft ~15 min; bitter/aromatisk motvekt til søt sjømat." },
      { id: "monkfish",     label: "Breiflabb (fast)",     amount: 200, unit: "g", role: "protein", scaling: "linear", addStage: "end", sodiumPer100g: 70, removable: false, taste: { umami: 1 }, allergens: ["fish"], note: "Fast fisk – legges i først." },
      { id: "cod",          label: "Torsk (flakete)",      amount: 150, unit: "g", role: "protein", scaling: "linear", addStage: "end", sodiumPer100g: 70, removable: true, taste: { umami: 1 }, allergens: ["fish"] },
      { id: "mussels",      label: "Blåskjell",            amount: 200, unit: "g", role: "seafood", scaling: "linear", addStage: "end", sodiumPer100g: 285, removable: true, taste: { umami: 2 }, allergens: ["shellfish"] },
      { id: "shrimp",       label: "Scampi",               amount: 150, unit: "g", role: "seafood", scaling: "linear", addStage: "end", sodiumPer100g: 120, removable: true, taste: { umami: 2 }, allergens: ["shellfish"], note: "Helt til slutt, ~1–2 min." },
      { id: "lemon",        label: "Sitron (til slutt)",   amount: 1, unit: "stk", role: "acid",    scaling: "fixed",  addStage: "serve", removable: true, taste: { sour: 2 }, note: "Frisk syre ved servering." },
      { id: "salt_added",   label: "Salt",                 amount: 1, unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "end", sodiumPer100g: 38800, removable: false, note: "Justeres automatisk; smak til på slutten." },
      { id: "parsley",      label: "Persille / fennikeltopp", amount: 1, unit: "ss", role: "aromatic", scaling: "linear", addStage: "serve", removable: true }
    ],
    steps: [
      "Lag skalldyrkraft av ristede skall om du kan: fres skallene i olje, dekk med vann, trekk 20–30 min og sil.",
      "Surr løk, fennikel og hvitløk myke i olivenolje. Rør inn tomatpuré og hakkede tomater, og la sofritoen koke inn til mørk og tykk.",
      "Slå på hvitvinen og kok litt inn. Hell over kraften, tilsett blomstret safran, og la småkoke 20–30 minutter.",
      "Skru ned varmen. Legg i breiflabb (3–4 min), så torsk (2 min), så blåskjell til de åpner seg, og scampi helt til slutt (1–2 min) – ikke kok hardt.",
      "Smak til med salt og en god skvett sitron. Strø over persille / fennikeltopp og server med rouille-crouton om du vil."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "fiskesuppe",
  recipes: fiskesuppeRecipes,
  swapOptions: swapOptions,
  servedAcid: null, // syre er en ingrediens i retten (eddik/tomat) – ingen stående tips

  density: {
    stock: 1, cream: 1, creme_fraiche: 1, coconut: 1, olive_oil: 0.92,
    wine: 0.99, vinegar: 1, sugar: 0.85, salt_added: 1.2, butter: 0.95,
    flour: 0.55, tomato: 1, tomato_paste: 1.1, lemon: 1, extra_stock: 1
  },
  pieceWeight: { carrot: 70, leek: 150, onion: 110, garlic: 5, fennel: 250, lemon: 100 },
  unitOptions: {
    stock: ["dl", "ml", "g"], cream: ["dl", "ml"], creme_fraiche: ["dl", "ml"], coconut: ["dl", "ml"],
    wine: ["dl", "ml", "g"], olive_oil: ["ss", "ts", "ml", "g"], vinegar: ["ts", "ss", "ml"],
    sugar: ["ts", "ss", "g"], salt_added: ["ts", "g"], butter: ["ss", "g"], flour: ["ss", "g"],
    tomato_paste: ["ss", "g"], lemon: ["ts", "ss", "ml"], extra_stock: ["dl", "ml", "g"]
  },
  bulkRoles: ["liquid", "protein", "seafood", "vegetable"],
  // Tre selvjusterende levere; sur/søt hoppes over i kompleks (mangler eddik/sukker).
  levers: [
    { axis: "salt", id: "salt_added" },
    { axis: "sour", id: "vinegar" },
    { axis: "sweet", id: "sugar" }
  ],
  requireRoles: ["acid"],
  tasteMessages: {
    sour: "Retten blir mindre frisk/syrlig – tilsett litt sitron eller eddik til slutt.",
    umami: "Retten blir mindre fyldig (umami) – vurder mer kraft, skalldyr eller en skvett fiskesaus.",
    sweet: "Retten blir mindre søt – litt mer rotgrønnsaker eller en klype sukker kan balansere."
  },
  leverMessages: {
    salt: {
      down: "Retten ble saltere – vi har automatisk redusert tilsatt salt. Smak til på slutten.",
      up: "Du tok bort noe salt – vi har automatisk økt tilsatt salt litt. Smak til på slutten."
    },
    sour: {
      down: "Du la til noe syrlig – vi har redusert eddiken. Smak til (eddik er lett å overdrive).",
      up: "Retten ble mindre syrlig – vi har økt eddik/sitron litt. Smak til."
    },
    sweet: {
      down: "Du la til noe søtt – vi har redusert sukkeret. Smak til.",
      up: "Retten ble mindre søt – vi har økt sukkeret litt. Smak til."
    }
  }
};
