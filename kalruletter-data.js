/* ===== Kålruletter – datamodell =====
   Norsk tradisjonsrett: krydret kjøttfarse (i slekt med kjøttkakefarse) rullet i
   forvellede kålblader, trukket i kraft og servert med brun saus og tyttebær.
   Tre grunnoppskrifter på «stige»-modellen:
     enkel    – rent kjøttfyll, brun saus av kraften
     medium   – kjøtt + svin, kokt ris, egg, allehånde, smørjevnet brun saus
     kompleks – grovkvernet kjøtt, ris, ingefær, hjemmelaget kraft, fløte i sausen

   Smaksbalanse (recipe-balance.js): én selvjusterende lever –
     salt → salt_added (via sodiumPer100g)
   Ingen syre/søt-lever (retten har ingen syre-ingrediens); tyttebær serveres ved
   siden av. Ris er fjernbar (removable) for den helt tradisjonelle, rene
   kjøttvarianten. Full allergi-dekning: melkefri (havredrikk/margarin/plantefløte),
   eggfri (ekstra potetmel) og glutenfri jevning (potetmel/maizena) via bytter. */

/* ===== Godkjente bytter (kuratert, etter rolle/teksturklasse) ===== */
const swapOptions = {
  beef: [
    { id: "elk", label: "Elgdeig (vilt)", amount: 500, unit: "g", sodiumPer100g: 55, taste: { umami: 2 },
      tradition: "regional", note: "Magrere; tilsett litt ekstra smør/fløte." },
    { id: "chicken_mince", label: "Kyllingdeig (lettere)", amount: 500, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      tradition: "non-traditional", note: "Mildere; stek litt kortere." }
  ],
  egg: [
    { id: "extra_potato_flour", label: "Ekstra potetmel (eggfritt)", amount: 1, unit: "ss",
      tradition: "non-traditional", note: "Binder uten egg; spe med litt mer melk." }
  ],
  milk: [
    { id: "oat_milk", label: "Havredrikk (melkefri)", amount: 1, unit: "dl", note: "Nøytral, melkefri base." }
  ],
  butter: [
    { id: "margarine", label: "Margarin (melkefri)", amount: 1, unit: "ss", note: "Melkefri steking og jevning." },
    { id: "rapeseed_oil", label: "Rapsolje (melkefri)", amount: 1, unit: "ss", note: "Nøytral olje til bruning." }
  ],
  potato_flour: [
    { id: "wheat_flour_binder", label: "Hvetemel (binding)", amount: 1, unit: "ss", allergens: ["gluten"],
      note: "Binder farsen; ikke glutenfri." }
  ],
  flour: [
    { id: "potato_flour_thickener", label: "Potetmel (glutenfri jevning)", amount: 0.5, unit: "ss",
      note: "Rør ut i kaldt vann; bruk litt mindre enn hvetemel." },
    { id: "corn_starch", label: "Maizena (glutenfri jevning)", amount: 1, unit: "ss",
      note: "Glutenfri; rør ut i kaldt vann." }
  ],
  stock: [
    { id: "bouillon", label: "Oksebuljong (terning)", amount: 5, unit: "dl", sodiumPer100g: 350, taste: { umami: 1 },
      note: "Raskere; saltere – salt justeres automatisk." }
  ],
  cream: [
    { id: "plant_cream", label: "Plantefløte (melkefri)", amount: 1, unit: "dl",
      note: "Melkefri; gir rund saus uten meieri." }
  ],
  cabbage_leaf: [
    { id: "savoy_leaf", label: "Savoykålblader (møre)", amount: 12, unit: "stk", tradition: "regional",
      note: "Mørere, lettere å brette." },
    { id: "pointed_leaf", label: "Spisskålblader", amount: 14, unit: "stk",
      note: "Tynnere blader; bruk gjerne et par ekstra." }
  ]
};


const kalruletterRecipes = {

  /* ---------- ENKEL: rent kjøttfyll, hverdag ---------- */
  enkel: {
    label: "Enkel", servings: 4,
    ingredients: [
      { id: "cabbage_leaf", label: "Store kålblader (hodekål)", amount: 12, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: false, note: "Forvelles myke; selve «rulletten». Regn 2–3 per porsjon." },
      { id: "beef",         label: "Kjøttdeig",                 amount: 500, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: { umami: 2 } },
      { id: "onion",        label: "Løk, finhakket",            amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "milk",         label: "Melk",                      amount: 1, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "potato_flour", label: "Potetmel",                  amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false, note: "Binder farsen." },
      { id: "nutmeg",       label: "Revet muskat",              amount: 0.25, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "salt_added",   label: "Salt",                      amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false },
      { id: "butter",       label: "Smør (til bruning)",        amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "stock",        label: "Oksekraft (til koking/saus)", amount: 5, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", sodiumPer100g: 200, removable: false, taste: { umami: 1 } },
      { id: "flour",        label: "Hvetemel (til jevning)",    amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end", removable: true, allergens: ["gluten"], note: "Jevner kraften til brun saus." }
    ],
    steps: [
      "Skyll kålbladene og forvell dem 1–2 minutter i lettsaltet, kokende vann til de er myke og bøyelige. Avkjøl, og skjær bort den tykkeste delen av stilken.",
      "Bland kjøttdeig, løk, melk, potetmel, muskat og salt til en smidig farse. La den gjerne hvile litt.",
      "Legg en skje farse på hvert kålblad, brett inn sidene og rull sammen til tette pakker. Legg dem med skjøten ned.",
      "Brun rulettene i smør, hell over oksekraft, og la dem trekke under lokk i ca. 20 minutter.",
      "Jevn kraften til en blank brun saus med litt mel utrørt i kaldt vann. Smak til, og server med kokte poteter og tyttebær."
    ]
  },

  /* ---------- MEDIUM: kjøtt + svin, ris og egg ---------- */
  medium: {
    label: "Medium", servings: 4,
    ingredients: [
      { id: "cabbage_leaf", label: "Store kålblader (hodekål)", amount: 12, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: false, note: "Forvelles myke." },
      { id: "beef",         label: "Karbonadedeig",             amount: 350, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: { umami: 2 } },
      { id: "pork",         label: "Svinedeig",                 amount: 150, unit: "g", role: "protein", scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: true, taste: { umami: 1 } },
      { id: "rice",         label: "Kokt rundkornet ris",       amount: 1, unit: "dl", role: "grain", scaling: "linear", addStage: "early", removable: true, note: "Gir saftigere og drøyere fyll – fjern for helt tradisjonelle, rene kjøttruletter." },
      { id: "egg",          label: "Egg",                       amount: 1, unit: "stk", role: "seasoning", scaling: "fixed", addStage: "early", removable: true, allergens: ["egg"] },
      { id: "onion",        label: "Løk, finhakket",            amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "milk",         label: "Melk",                      amount: 1, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "potato_flour", label: "Potetmel",                  amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false, note: "Binder farsen." },
      { id: "nutmeg",       label: "Revet muskat",              amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "allspice",     label: "Malt allehånde",            amount: 0.25, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, tradition: "traditional", note: "Klassisk krydder i kålruletter." },
      { id: "salt_added",   label: "Salt",                      amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false },
      { id: "butter",       label: "Smør (til bruning og jevning)", amount: 2, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "stock",        label: "Oksekraft",                 amount: 6, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", sodiumPer100g: 200, removable: false, taste: { umami: 1 } },
      { id: "flour",        label: "Hvetemel (til jevning)",    amount: 1.5, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end", removable: true, allergens: ["gluten"], note: "Smørjevning til brun saus." }
    ],
    steps: [
      "Forvell kålbladene myke i lettsaltet, kokende vann (1–2 min), avkjøl, og skjær ned den tykke stilken.",
      "Arbeid kjøttdeig og svinedeig seigt med salt, og bland inn kokt ris, egg, løk, melk, potetmel, muskat og allehånde til en smidig farse.",
      "Legg farse på hvert blad, brett inn sidene og rull til tette pakker. Legg dem med skjøten ned i en gryte eller form.",
      "Brun rulettene i smør, hell over kraften, og la dem trekke under lokk i ca. 20 minutter (eller dekk formen og stek ved 200 °C i ca. 30 min).",
      "Lag en lys smørjevning av smør og mel, og spe med kraften til en blank brun saus. Smak til.",
      "Server med kokte poteter, brun saus og tyttebær."
    ]
  },

  /* ---------- KOMPLEKS: grovkvernet kjøtt, hjemmelaget kraft, fløtesaus ---------- */
  kompleks: {
    label: "Kompleks", servings: 4,
    ingredients: [
      { id: "cabbage_leaf", label: "Store kålblader (savoy- eller hodekål)", amount: 12, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: false, note: "Savoykål gir møre, vakre blader." },
      { id: "beef",         label: "Høyrygg, grovkvernet",      amount: 350, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: { umami: 2 } },
      { id: "pork",         label: "Ribbe/nakke, kvernet",      amount: 150, unit: "g", role: "protein", scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: true, taste: { umami: 1 } },
      { id: "rice",         label: "Kokt rundkornet ris",       amount: 1.5, unit: "dl", role: "grain", scaling: "linear", addStage: "early", removable: true, note: "Gir saftig fyll; fjern for ren kjøttvariant." },
      { id: "egg",          label: "Egg",                       amount: 1, unit: "stk", role: "seasoning", scaling: "fixed", addStage: "early", removable: true, allergens: ["egg"] },
      { id: "onion",        label: "Løk, finhakket",            amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "milk",         label: "Helmelk",                   amount: 1, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "potato_flour", label: "Potetmel",                  amount: 1.5, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false, note: "Binder farsen." },
      { id: "nutmeg",       label: "Revet muskat",              amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "allspice",     label: "Malt allehånde",            amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, tradition: "traditional" },
      { id: "ginger",       label: "Malt ingefær",              amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, tradition: "traditional", taste: { bitter: 1 } },
      { id: "salt_added",   label: "Salt",                      amount: 1.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false },
      { id: "butter",       label: "Smør",                      amount: 3, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "stock",        label: "Hjemmelaget oksekraft",     amount: 7, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", sodiumPer100g: 150, removable: false, taste: { umami: 2 } },
      { id: "flour",        label: "Hvetemel (til jevning)",    amount: 2, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end", removable: true, allergens: ["gluten"], note: "Mørk smørjevning til sausen." },
      { id: "cream",        label: "Fløte (til sausen)",        amount: 1, unit: "dl", role: "fat", scaling: "linear", addStage: "end", removable: true, allergens: ["dairy"], note: "Gir en rundere, fyldigere saus." }
    ],
    steps: [
      "Forvell kålbladene myke, avkjøl i kaldt vann, og skjær ned den tykke stilken så de lar seg rulle.",
      "Kvern kjøttet selv eller be slakteren grovkverne. Arbeid farsen seig med salt, og bland inn kokt ris, egg, løk, melk, potetmel, muskat, allehånde og ingefær. Hvil kaldt 30 minutter.",
      "Legg farse på hvert blad, brett inn og rull til stramme pakker. Legg dem tett med skjøten ned i en ildfast form.",
      "Brun rulettene i smør, hell over den hjemmelagde kraften, dekk formen, og stek ved 200 °C i ca. 30 minutter.",
      "Lag en mørk smørjevning av smør og mel, spe med kraften, og kok sausen blank. Rør inn fløten og varm forsiktig uten å koke hardt.",
      "Smak til sausen, og server kålrulettene med kokte poteter, brun saus og tyttebær."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "kalruletter",
  recipes: kalruletterRecipes,
  swapOptions: swapOptions,
  servedAcid: null, // ingen syre-ingrediens i retten; tyttebær serveres ved siden av

  density: {
    milk: 1.03, oat_milk: 1.03, stock: 1, bouillon: 1,
    butter: 0.95, margarine: 0.95, rapeseed_oil: 0.92,
    flour: 0.55, wheat_flour_binder: 0.55,
    potato_flour: 0.6, potato_flour_thickener: 0.6, extra_potato_flour: 0.6, corn_starch: 0.6,
    cream: 1, plant_cream: 1, rice: 0.8, salt_added: 1.2
  },
  pieceWeight: { onion: 110, egg: 55, cabbage_leaf: 30 },
  unitOptions: {
    milk: ["dl", "ml", "g"], oat_milk: ["dl", "ml", "g"],
    stock: ["dl", "ml", "g"], bouillon: ["dl", "ml", "g"],
    butter: ["ss", "g"], margarine: ["ss", "g"], rapeseed_oil: ["ss", "ts", "ml", "g"],
    flour: ["ss", "g"], wheat_flour_binder: ["ss", "g"],
    potato_flour: ["ss", "g"], potato_flour_thickener: ["ss", "g"], extra_potato_flour: ["ss", "g"], corn_starch: ["ss", "g"],
    cream: ["dl", "ml", "g"], plant_cream: ["dl", "ml", "g"], rice: ["dl", "g"], salt_added: ["ts", "g"]
  },
  bulkRoles: ["protein", "vegetable", "grain", "liquid"],
  levers: [
    { axis: "salt", id: "salt_added" }
  ],
  requireRoles: [],
  tasteMessages: {
    umami: "Retten blir mindre fyldig – vurder litt ekstra kraft eller en skvett soya i sausen.",
    sweet: "Mindre søtlig dybde – litt brunet løk balanserer."
  },
  leverMessages: {
    salt: {
      down: "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til på slutten.",
      up: "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til på slutten."
    }
  }
};
