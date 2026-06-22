/* ===== Thailandsk fiskesuppe – datamodell =====
   Thai kokos-/currysuppe med fisk og sjømat (i slekt med Tom Kha Pla).
   Tre grunnoppskrifter på «stige»-modellen:
     enkel    – rask hverdagssuppe med laks, kokosmelk og rød curry
     medium   – klassikeren: sitrongress, kaffirlime, torsk + laks + reker
     kompleks – elevert: hjemmelaget kraft, galangal, chili, breiflabb + scampi

   Smaksbalanse (recipe-balance.js): tre selvjusterende levere – akkurat den
   thailandske salt–sur–søt-balansen:
     salt → fish_sauce (via sodiumPer100g) – fiskesaus ER rettens salt
     sur  → lime        (via taste.sour)
     søt  → sugar        (via taste.sweet, palmesukker)

   Syre er kritisk: requireRoles inkluderer 'acid' (limen). Kokosmelken er
   naturlig melkefri; «ikke fosskok kokosmelken» er bakt inn i steg/notater så
   den ikke skiller seg. */

/* ===== Godkjente bytter (kuratert, etter teksturklasse/rolle) ===== */
const swapOptions = {
  salmon: [
    { id: "cod", label: "Torsk (mager, flakete)", amount: 400, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], tradition: "traditional", note: "Magrere enn laks – holder seg fin i kokosbasen." },
    { id: "saithe", label: "Sei (flakete)", amount: 400, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], note: "Rimelig og fast; tåler litt koking." }
  ],
  cod: [
    { id: "saithe", label: "Sei (flakete)", amount: 250, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], tradition: "traditional" },
    { id: "haddock", label: "Hyse (flakete)", amount: 250, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], note: "Mild og fin; legges i mot slutten." }
  ],
  monkfish: [
    { id: "cod", label: "Torsk (flakete)", amount: 200, unit: "g", sodiumPer100g: 70, taste: { umami: 1 },
      allergens: ["fish"], note: "Mindre fast enn breiflabb – legges i litt senere." },
    { id: "salmon", label: "Laks (fet)", amount: 200, unit: "g", sodiumPer100g: 60, taste: { umami: 2 },
      allergens: ["fish"], note: "Fyldigere; gir mer farge." }
  ],
  shrimp: [
    { id: "scallops", label: "Kamskjell", amount: 150, unit: "g", sodiumPer100g: 160, taste: { umami: 2 },
      allergens: ["shellfish"], note: "Mild og søt; trekkes helt til slutt." },
    { id: "mussels", label: "Blåskjell", amount: 200, unit: "g", sodiumPer100g: 285, taste: { umami: 2 },
      allergens: ["shellfish"], note: "Slipper salt skjellkraft i suppa." }
  ],
  scampi: [
    { id: "shrimp", label: "Reker (pillet)", amount: 150, unit: "g", sodiumPer100g: 120, taste: { umami: 2 },
      allergens: ["shellfish"] },
    { id: "scallops", label: "Kamskjell", amount: 150, unit: "g", sodiumPer100g: 160, taste: { umami: 2 },
      allergens: ["shellfish"], note: "Søt og mild." }
  ],
  coconut_milk: [
    { id: "coconut_cream", label: "Kokoskrem (rikere)", amount: 4, unit: "dl", taste: { sweet: 1 },
      note: "Tykkere og fyldigere; spe gjerne med litt ekstra kraft." },
    { id: "light_coconut", label: "Lett kokosmelk", amount: 4, unit: "dl",
      note: "Lettere base, mindre fett – men også mindre kremet." }
  ],
  red_curry_paste: [
    { id: "green_curry_paste", label: "Grønn currypaste (skarpere)", amount: 2, unit: "ss", sodiumPer100g: 2000, taste: { umami: 1 },
      allergens: ["shellfish"], note: "Friskere og som regel sterkere enn rød." },
    { id: "veg_curry_paste", label: "Rekefri/vegansk rød currypaste", amount: 2, unit: "ss", sodiumPer100g: 2000, taste: { umami: 1 },
      note: "Uten rekepasta – trygt ved skalldyrallergi." }
  ],
  fish_sauce: [
    { id: "soy_sauce", label: "Lys soyasaus", amount: 1, unit: "ss", sodiumPer100g: 6000, taste: { umami: 1 },
      allergens: ["gluten"], note: "Vegetarisk saltkilde; litt mindre umami – smak til med ekstra lime." }
  ],
  lime: [
    { id: "lemon", label: "Sitronsaft", amount: 1, unit: "ss", taste: { sour: 2 },
      note: "Mildere/fruktigere enn lime – bruk litt mer, smak til." }
  ],
  ginger: [
    { id: "galangal", label: "Galangal, revet (mer autentisk)", amount: 1, unit: "ss", tradition: "traditional",
      note: "Skarpere og mer sitrusaktig; den ekte thai-roten." }
  ],
  sugar: [
    { id: "honey", label: "Honning", amount: 2, unit: "ts", taste: { sweet: 3 },
      note: "Litt mer aromatisk sødme; rør inn til slutt." }
  ]
};


const thaiFiskesuppeRecipes = {

  /* ---------- ENKEL: rask hverdagssuppe med laks ---------- */
  enkel: {
    label: "Enkel", servings: 4,
    ingredients: [
      { id: "fish_stock",      label: "Fiskekraft",                 amount: 5, unit: "dl", role: "liquid",  scaling: "linear",    addStage: "early", sodiumPer100g: 300, removable: false, taste: { umami: 1 }, allergens: ["fish"] },
      { id: "coconut_milk",    label: "Kokosmelk",                  amount: 4, unit: "dl", role: "liquid",  scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 1 }, note: "Gir den kremede basen – naturlig melkefri. La aldri suppa fosskoke etter kokosmelken." },
      { id: "red_curry_paste", label: "Rød currypaste",             amount: 2, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 2000, removable: false, taste: { umami: 1 }, allergens: ["shellfish"], note: "Mange pastaer inneholder rekepasta (skalldyr) – velg en rekefri variant om suppa skal være skalldyrfri." },
      { id: "ginger",          label: "Frisk ingefær, revet",       amount: 1, unit: "ss", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "salmon",          label: "Laks i terninger",           amount: 400, unit: "g", role: "protein", scaling: "linear",   addStage: "end",   sodiumPer100g: 60, removable: false, taste: { umami: 2 }, allergens: ["fish"], note: "Trekkes mot slutten, ikke kok." },
      { id: "fish_sauce",      label: "Fiskesaus",                  amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end",   sodiumPer100g: 7800, removable: false, taste: { umami: 2 }, allergens: ["fish"], note: "Rettens salt – justeres automatisk. Smak til på slutten." },
      { id: "lime",            label: "Limesaft",                   amount: 1, unit: "ss", role: "acid",     scaling: "nonlinear", addStage: "serve", removable: true, taste: { sour: 3 },
        onRemove: { tip: "Limen er suppas friske syre. Uten den blir den flat og søtlig – smak til med litt sitron i stedet." } },
      { id: "sugar",           label: "Palmesukker (el. brunt sukker)", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "serve", removable: true, taste: { sweet: 3 }, note: "Runder av chilien og balanserer limen til en mild søt-sur-sterk tone." },
      { id: "coriander",       label: "Frisk koriander",            amount: 1, unit: "ss", role: "aromatic", scaling: "linear",   addStage: "serve", removable: true }
    ],
    steps: [
      "Kok opp fiskekraften, rør inn currypaste og revet ingefær, og la det småkoke et par minutter til det dufter.",
      "Hell i kokosmelken og varm opp til så vidt småkoking – ikke fosskok.",
      "Skru ned varmen, legg i laksen og la den trekke 3–4 minutter til den så vidt er gjennom – ikke kok.",
      "Ta gryta av varmen og smak til med fiskesaus, limesaft og litt sukker til en balanse mellom salt, surt, søtt og sterkt.",
      "Strø over frisk koriander og server, gjerne med ris eller risnudler."
    ]
  },

  /* ---------- MEDIUM: klassikeren med flere sjømat ---------- */
  medium: {
    label: "Medium", servings: 4,
    ingredients: [
      { id: "fish_stock",      label: "Fiskekraft",                 amount: 6, unit: "dl", role: "liquid",  scaling: "linear",    addStage: "early", sodiumPer100g: 250, removable: false, taste: { umami: 1 }, allergens: ["fish"] },
      { id: "coconut_milk",    label: "Kokosmelk",                  amount: 4, unit: "dl", role: "liquid",  scaling: "linear",    addStage: "end",   removable: false, taste: { sweet: 1 }, note: "Tilsett etter at kraften er smakssatt, og la suppa bare så vidt småkoke." },
      { id: "red_curry_paste", label: "Rød currypaste",             amount: 2.5, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 2000, removable: false, taste: { umami: 1 }, allergens: ["shellfish"], note: "Sjekk innholdet for rekepasta (skalldyr) – bytt til rekefri variant ved skalldyrallergi." },
      { id: "lemongrass",      label: "Sitrongress, knust",         amount: 1, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, note: "Bank den flat med kniven så aromaen slipper ut; fiskes ut før servering." },
      { id: "ginger",          label: "Frisk ingefær, revet",       amount: 1, unit: "ss", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "garlic",          label: "Hvitløksfedd",               amount: 2, unit: "stk", role: "aromatic", scaling: "linear",   addStage: "early", removable: true },
      { id: "lime_leaves",     label: "Kaffirlimeblader",           amount: 3, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, note: "Gir den typiske thai-duften; fiskes ut før servering." },
      { id: "red_pepper",      label: "Rød paprika i strimler",     amount: 1, unit: "stk", role: "vegetable", scaling: "linear",  addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "cod",             label: "Torsk i terninger",          amount: 250, unit: "g", role: "protein", scaling: "linear",   addStage: "end",   sodiumPer100g: 70, removable: false, taste: { umami: 1 }, allergens: ["fish"], tradition: "traditional", note: "Flakete – legges i først av fisken." },
      { id: "salmon",          label: "Laks i terninger",           amount: 150, unit: "g", role: "protein", scaling: "linear",   addStage: "end",   sodiumPer100g: 60, removable: true, taste: { umami: 2 }, allergens: ["fish"], note: "Gir farge og fylde." },
      { id: "shrimp",          label: "Reker (pillet)",             amount: 150, unit: "g", role: "seafood", scaling: "linear",   addStage: "end",   sodiumPer100g: 120, removable: true, taste: { umami: 2 }, allergens: ["shellfish"], note: "Vendes inn helt til slutt." },
      { id: "snap_peas",       label: "Sukkererter",                amount: 100, unit: "g", role: "vegetable", scaling: "linear",  addStage: "end",   removable: true, taste: { sweet: 1 } },
      { id: "fish_sauce",      label: "Fiskesaus",                  amount: 1.5, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end",  sodiumPer100g: 7800, removable: false, taste: { umami: 2 }, allergens: ["fish"], note: "Rettens salt – justeres automatisk." },
      { id: "lime",            label: "Limesaft",                   amount: 1.5, unit: "ss", role: "acid",    scaling: "nonlinear", addStage: "serve", removable: true, taste: { sour: 3 },
        onRemove: { tip: "Limen gir den friske syren. Uten den blir suppa flat og søtlig – smak til med sitron i stedet." } },
      { id: "sugar",           label: "Palmesukker (el. brunt sukker)", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "serve", removable: true, taste: { sweet: 3 }, note: "Balanserer limen og chilien; sikt mot subtil søt-sur-sterk." },
      { id: "coriander",       label: "Frisk koriander",            amount: 1, unit: "ss", role: "aromatic", scaling: "linear",   addStage: "serve", removable: true },
      { id: "spring_onion",    label: "Vårløk i ringer",            amount: 1, unit: "stk", role: "aromatic", scaling: "linear",   addStage: "serve", removable: true }
    ],
    steps: [
      "Bank sitrongresset flatt og riv ingefær og hvitløk. Fres aromater og currypaste i litt olje i bunnen av gryta ~1–2 minutter til det dufter.",
      "Hell over fiskekraften, ha i kaffirlimeblader og paprika, og la småkoke 5 minutter.",
      "Hell i kokosmelken og varm til så vidt småkoking – ikke fosskok, så skiller den seg ikke.",
      "Legg i torsken (3–4 min), så laks, reker og sukkererter (1–2 min) til fisken akkurat flaker – ikke kok.",
      "Ta gryta av varmen. Smak til med fiskesaus, limesaft og sukker til en balansert salt-sur-søt-sterk suppe.",
      "Fisk ut sitrongress og kaffirlimeblader, strø over koriander og vårløk, og server med ris eller risnudler."
    ]
  },

  /* ---------- KOMPLEKS: elevert med galangal og hjemmelaget kraft ---------- */
  kompleks: {
    label: "Kompleks", servings: 4,
    ingredients: [
      { id: "fish_stock",      label: "Hjemmelaget fiske-/skalldyrkraft", amount: 7, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", sodiumPer100g: 150, removable: false, taste: { umami: 1 }, allergens: ["fish"], note: "Trekk av fiskebein eller ristede rekeskall for dyp sjøsmak." },
      { id: "coconut_milk",    label: "Kokosmelk (full)",           amount: 4, unit: "dl", role: "liquid",  scaling: "linear",    addStage: "end",   removable: false, taste: { sweet: 1 }, note: "Tilsett mot slutten og la bare så vidt småkoke." },
      { id: "shallot",         label: "Sjalottløk, finhakket",      amount: 2, unit: "stk", role: "aromatic", scaling: "linear",   addStage: "early", removable: true, taste: { sweet: 1 } },
      { id: "garlic",          label: "Hvitløksfedd",               amount: 3, unit: "stk", role: "aromatic", scaling: "linear",   addStage: "early", removable: true },
      { id: "galangal",        label: "Galangal, revet",            amount: 1, unit: "ss", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, tradition: "traditional", note: "Ekte thai-rot – skarpere og mer sitrusaktig enn ingefær, og ikke det samme." },
      { id: "lemongrass",      label: "Sitrongress, knust",         amount: 2, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, note: "Bankes flat; fiskes ut før servering." },
      { id: "lime_leaves",     label: "Kaffirlimeblader",           amount: 4, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, note: "Fiskes ut før servering." },
      { id: "red_curry_paste", label: "Rød currypaste (gjerne hjemmelaget)", amount: 2.5, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 1500, removable: false, taste: { umami: 1 }, allergens: ["shellfish"], note: "Hjemmelaget gir friskest smak; bytt til rekefri variant ved skalldyrallergi." },
      { id: "red_chili",       label: "Frisk rød chili, i skiver",  amount: 1, unit: "stk", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, note: "Juster mengden etter ønsket styrke." },
      { id: "monkfish",        label: "Breiflabb i terninger",      amount: 200, unit: "g", role: "protein", scaling: "linear",   addStage: "end",   sodiumPer100g: 70, removable: false, taste: { umami: 1 }, allergens: ["fish"], note: "Fast fisk – holder formen, legges i først." },
      { id: "salmon",          label: "Laks i terninger",           amount: 150, unit: "g", role: "protein", scaling: "linear",   addStage: "end",   sodiumPer100g: 60, removable: true, taste: { umami: 2 }, allergens: ["fish"] },
      { id: "scampi",          label: "Scampi",                     amount: 150, unit: "g", role: "seafood", scaling: "linear",   addStage: "end",   sodiumPer100g: 120, removable: true, taste: { umami: 2 }, allergens: ["shellfish"], note: "Helt til slutt, ~1–2 min." },
      { id: "fish_sauce",      label: "Fiskesaus",                  amount: 1.5, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "end",  sodiumPer100g: 7800, removable: false, taste: { umami: 2 }, allergens: ["fish"], note: "Rettens salt – justeres automatisk." },
      { id: "lime",            label: "Limesaft",                   amount: 2, unit: "ss", role: "acid",      scaling: "nonlinear", addStage: "serve", removable: true, taste: { sour: 3 },
        onRemove: { tip: "Limen er suppas friske syre. Uten den blir den flat – smak til med sitron i stedet." } },
      { id: "sugar",           label: "Palmesukker",                amount: 2, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "serve", removable: true, taste: { sweet: 3 }, note: "Balanserer chili og lime til en avrundet helhet." },
      { id: "thai_basil",      label: "Thaibasilikum",              amount: 1, unit: "ss", role: "aromatic", scaling: "linear",   addStage: "serve", removable: true, note: "Vendes inn helt til slutt for frisk anis-aktig duft." },
      { id: "coriander",       label: "Frisk koriander",            amount: 1, unit: "ss", role: "aromatic", scaling: "linear",   addStage: "serve", removable: true }
    ],
    steps: [
      "Lag gjerne kraften selv: trekk fiskebein eller ristede rekeskall med aromater i 20–30 minutter og sil.",
      "Fres sjalottløk, hvitløk, galangal, knust sitrongress og currypaste i litt olje til det dufter og blanker seg.",
      "Hell over kraften, ha i kaffirlimeblader og chili, og la småkoke 10–15 minutter så smakene trekker.",
      "Hell i kokosmelken og varm til så vidt småkoking – aldri fosskok, da skiller kokosmelken seg.",
      "Legg i breiflabb (3–4 min), så laks og scampi (1–2 min) til sjømaten akkurat er gjennom – ikke kok.",
      "Ta gryta av varmen og balanser med fiskesaus, limesaft og palmesukker til salt, surt, søtt og sterkt står i likevekt.",
      "Fisk ut sitrongress og kaffirlimeblader, vend inn thaibasilikum, strø over koriander, og server med dampet jasminris."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "thai-fiskesuppe",
  recipes: thaiFiskesuppeRecipes,
  swapOptions: swapOptions,
  servedAcid: null, // syre er en ingrediens i retten (lime) – ingen stående tips

  density: {
    fish_stock: 1, coconut_milk: 0.98, coconut_cream: 1, light_coconut: 0.98,
    red_curry_paste: 1.1, green_curry_paste: 1.1, veg_curry_paste: 1.1,
    ginger: 0.6, galangal: 0.6, fish_sauce: 1.2, soy_sauce: 1.2,
    lime: 1, lemon: 1, sugar: 0.85, honey: 1.4
  },
  pieceWeight: {
    garlic: 5, lime: 100, lemon: 100, lemongrass: 15, lime_leaves: 0.5,
    red_pepper: 150, spring_onion: 15, shallot: 30, red_chili: 10
  },
  unitOptions: {
    fish_stock: ["dl", "ml", "g"], coconut_milk: ["dl", "ml", "g"],
    coconut_cream: ["dl", "ml", "g"], light_coconut: ["dl", "ml", "g"],
    red_curry_paste: ["ss", "ts", "g"], green_curry_paste: ["ss", "ts", "g"],
    veg_curry_paste: ["ss", "ts", "g"], ginger: ["ss", "ts", "g"],
    galangal: ["ss", "ts", "g"], fish_sauce: ["ss", "ts", "ml", "g"],
    soy_sauce: ["ss", "ts", "ml", "g"], lime: ["ss", "ts", "ml"],
    lemon: ["ss", "ts", "ml"], sugar: ["ts", "ss", "g"], honey: ["ts", "ss", "g"]
  },
  bulkRoles: ["liquid", "protein", "seafood", "vegetable"],
  // Tre selvjusterende levere – den thailandske salt–sur–søt-balansen.
  levers: [
    { axis: "salt", id: "fish_sauce" },
    { axis: "sour", id: "lime" },
    { axis: "sweet", id: "sugar" }
  ],
  requireRoles: ["acid"],
  tasteMessages: {
    sour: "Retten blir mindre frisk – smak til med litt ekstra lime til slutt.",
    umami: "Retten blir mindre fyldig (umami) – vurder litt mer fiskesaus eller kraft.",
    sweet: "Retten blir mindre søt – en liten klype palmesukker balanserer chilien."
  },
  leverMessages: {
    salt: {
      down: "Retten ble saltere – vi reduserte fiskesausen automatisk. Smak til på slutten.",
      up: "Du tok bort noe salt – vi økte fiskesausen litt. Smak til på slutten."
    },
    sour: {
      down: "Du la til noe syrlig – vi reduserte limen. Smak til (lime er lett å overdrive).",
      up: "Retten ble mindre syrlig – vi økte limen litt. Smak til."
    },
    sweet: {
      down: "Du la til noe søtt – vi reduserte sukkeret. Smak til.",
      up: "Retten ble mindre søt – vi økte sukkeret litt. Smak til."
    }
  }
};
