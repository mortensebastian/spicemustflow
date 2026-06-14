/* ===== Paella – datamodell =====
   Tre grunnoppskrifter etter kompleksitet (enkel/medium/kompleks), delte
   bytter (swapOptions), og et stående friskhet-tips (servedAcid). Ren data –
   ingen logikk. recipe-adapter.js leser herfra og rendrer siden.

   Mengdene gjelder 4 porsjoner. Feltene er forklart i byggeprompten:
   role, essential, scaling (linear/nonlinear/fixed), addStage (early/end/serve),
   sodiumPer100g, removable, isPrimaryAcid/onRemove, tradition. */

/* ===== Godkjente bytter, delt på tvers av oppskriftene ===== */
const swapOptions = {

  chicken: [
    { id: "rabbit", label: "Kanin (tradisjonell)", amount: 300, unit: "g",
      sodiumPer100g: 50, tradition: "traditional",
      note: "Magrere. Brunes tidlig, som kylling." },
    { id: "pork", label: "Svineribbe i biter", amount: 300, unit: "g",
      sodiumPer100g: 60, tradition: "regional", note: "Litt fetere." },
    { id: "chorizo", label: "Chorizo", amount: 250, unit: "g",
      sodiumPer100g: 1235, tradition: "non-traditional",
      note: "Salt og fet, ikke tradisjonell. Tilsatt salt og paprika er redusert. Stekes tidlig for paprikaolje.",
      adjust: [
        { target: "salt_added",     op: "multiply", value: 0.4 },
        { target: "smoked_paprika", op: "multiply", value: 0.5 }
      ] }
  ],

  prawns: [
    { id: "squid", label: "Blekksprutringer", amount: 200, unit: "g",
      sodiumPer100g: 45, note: "Mildt salt; surres kort tidlig." },
    { id: "more_mussels", label: "Mer blåskjell", amount: 300, unit: "g",
      sodiumPer100g: 285, note: "Slipper salt skjellkraft i risen." }
  ],

  mussels: [
    { id: "clams", label: "Skjell (clams)", amount: 200, unit: "g", sodiumPer100g: 600 }
  ],

  stock: [
    { id: "fish_stock", label: "Fiske-/skalldyrkraft", amount: 6, unit: "dl",
      sodiumPer100g: 200, note: "Passer sjømatversjon." },
    { id: "veg_stock", label: "Grønnsakskraft", amount: 6, unit: "dl",
      sodiumPer100g: 150, note: "Passer vegetar; gi sofritoen ekstra smak." }
  ],

  saffron: [
    { id: "turmeric_paprika", label: "Gurkemeie + paprika (kun farge)",
      amount: 1, unit: "ts", note: "Gir farge, men ikke safranens aroma." }
  ],

  smoked_paprika: [
    { id: "sweet_paprika", label: "Søt paprika (pimentón dulce)",
      amount: 1, unit: "ts", tradition: "traditional" }
  ],

  red_pepper: [
    { id: "artichoke", label: "Artisjokk", amount: 200, unit: "g",
      tradition: "traditional", note: "Forkokt, legges oppå." },
    { id: "green_beans", label: "Flate grønne bønner", amount: 150, unit: "g",
      tradition: "traditional" }
  ]
};


/* ===== Tre grunnoppskrifter etter kompleksitet (4 porsjoner) ===== */
const paellaRecipes = {

  /* ---------- ENKEL: rask hverdagsversjon, få ingredienser ---------- */
  enkel: {
    label: "Enkel", servings: 4,
    ingredients: [
      { id: "rice",          label: "Paellaris (rundkornet)", amount: 3, unit: "dl", role: "rice",     essential: true, scaling: "linear",    addStage: "early", sodiumPer100g: 0,   removable: false },
      { id: "stock",         label: "Kyllingkraft (ferdig)",  amount: 6, unit: "dl", role: "liquid",                    scaling: "linear",    addStage: "early", sodiumPer100g: 200, removable: false },
      { id: "saffron",       label: "Safran",                 amount: 0.5, unit: "g", role: "saffron",                  scaling: "nonlinear", addStage: "early", removable: true },
      { id: "chicken",       label: "Kyllinglår i biter",     amount: 300, unit: "g", role: "protein",                  scaling: "linear",    addStage: "early", sodiumPer100g: 75,  removable: false, tradition: "traditional" },
      { id: "prawns",        label: "Reker (ferdig pillet)",  amount: 200, unit: "g", role: "seafood",                  scaling: "linear",    addStage: "end",   sodiumPer100g: 120, removable: true },
      { id: "garlic",        label: "Hvitløksfedd",           amount: 2, unit: "stk", role: "aromatic",                 scaling: "linear",    addStage: "early", removable: true },
      { id: "olive_oil",     label: "Olivenolje",             amount: 2, unit: "ss",  role: "fat",     essential: true, scaling: "nonlinear", addStage: "early", removable: false },
      { id: "smoked_paprika",label: "Røkt paprikapulver",     amount: 1, unit: "ts",  role: "seasoning",                scaling: "nonlinear", addStage: "early", removable: false },
      { id: "salt_added",    label: "Salt",                   amount: 1, unit: "ts",  role: "seasoning",                scaling: "nonlinear", addStage: "early", removable: false }
    ],
    steps: [
      "Legg safran i den varme kraften så farge og aroma trekker ut.",
      "Brun kyllingen i olivenolje i en vid panne. Surr hvitløk, og rør inn paprikapulveret.",
      "Tilsett risen, rør et par minutter, og hell over kraften. La putre uten omrøring i ca. 15 minutter.",
      "Legg rekene oppå de siste 5 minuttene. Hvil 5 minutter under et klede. Smak til med salt og server med sitronbåter."
    ]
  },

  /* ---------- MEDIUM (standard): oppskriften som står på siden nå ---------- */
  medium: {
    label: "Medium", servings: 4,
    ingredients: [
      { id: "rice",          label: "Paellaris (rundkornet)", amount: 3, unit: "dl", role: "rice",     essential: true, scaling: "linear",    addStage: "early", sodiumPer100g: 0,   removable: false, note: "Bomba/Calasparra gir best resultat; ikke skyll risen." },
      { id: "stock",         label: "Varm kyllingkraft",      amount: 6, unit: "dl", role: "liquid",                    scaling: "linear",    addStage: "early", sodiumPer100g: 200, removable: false, note: "Bruk gjerne usaltet, så styrer du saltet selv." },
      { id: "saffron",       label: "Safran",                 amount: 0.5, unit: "g", role: "saffron",                  scaling: "nonlinear", addStage: "early", removable: true,  note: "Bløtlegg i varm (ikke kokende) kraft." },
      { id: "chicken",       label: "Kyllinglår i biter",     amount: 300, unit: "g", role: "protein",                  scaling: "linear",    addStage: "early", sodiumPer100g: 75,  removable: false, tradition: "traditional" },
      { id: "prawns",        label: "Scampi/reker",           amount: 200, unit: "g", role: "seafood",                  scaling: "linear",    addStage: "end",   sodiumPer100g: 120, removable: true,  note: "Fryst/behandlet reke kan ha mye mer natrium (opptil ~560)." },
      { id: "mussels",       label: "Blåskjell (valgfritt)",  amount: 150, unit: "g", role: "seafood",                  scaling: "linear",    addStage: "end",   sodiumPer100g: 285, removable: true,  note: "Slipper salt kraft når de åpner seg." },
      { id: "red_pepper",    label: "Rød paprika i strimler", amount: 1, unit: "stk", role: "vegetable",                scaling: "linear",    addStage: "early", removable: true },
      { id: "onion",         label: "Løk, finhakket",         amount: 1, unit: "stk", role: "aromatic",                 scaling: "linear",    addStage: "early", removable: true,  tradition: "regional", note: "Mange utelater løk i ekte Valenciana fordi den gjør risen våt." },
      { id: "garlic",        label: "Hvitløksfedd",           amount: 2, unit: "stk", role: "aromatic",                 scaling: "linear",    addStage: "early", removable: true },
      { id: "olive_oil",     label: "Olivenolje",             amount: 2, unit: "ss",  role: "fat",     essential: true, scaling: "nonlinear", addStage: "early", removable: false },
      { id: "smoked_paprika",label: "Røkt paprikapulver",     amount: 1, unit: "ts",  role: "seasoning",                scaling: "nonlinear", addStage: "early", removable: false },
      { id: "peas",          label: "Frosne erter",           amount: 100, unit: "g", role: "vegetable",                scaling: "linear",    addStage: "end",   removable: true,  tradition: "non-traditional", note: "Ikke tradisjonell i ekte Valenciana." },
      { id: "salt_added",    label: "Salt",                   amount: 1, unit: "ts",  role: "seasoning",                scaling: "nonlinear", addStage: "early", removable: false, note: "Smak til; reduseres automatisk ved salte bytter." }
    ],
    steps: [
      "Legg safranen i den varme kyllingkraften så farge og aroma trekker ut mens du gjør klar resten.",
      "Brun kyllingbitene i olivenolje i en vid panne, og ta dem opp.",
      "Surr løk, hvitløk og paprika myke i samme panne, og rør inn paprikapulveret.",
      "Tilsett risen og rør et par minutter til kornene er blanke.",
      "Hell over safrankraften, legg kyllingen tilbake, og la putre uten omrøring i ca. 15 minutter.",
      "Fordel scampi, blåskjell og erter over de siste 5 minuttene, til risen er mør og skjellene har åpnet seg.",
      "La paellaen hvile 5 minutter under et klede. Smak til med salt og server med sitronbåter."
    ]
  },

  /* ---------- KOMPLEKS: nærmere autentisk, mer teknikk, sofrito + socarrat ---------- */
  kompleks: {
    label: "Kompleks", servings: 4,
    ingredients: [
      { id: "rice",          label: "Paellaris (bomba)",          amount: 3, unit: "dl", role: "rice",     essential: true, scaling: "linear",    addStage: "early", sodiumPer100g: 0,   removable: false },
      { id: "stock",         label: "Hjemmelaget skalldyrkraft",  amount: 7, unit: "dl", role: "liquid",                    scaling: "linear",    addStage: "early", sodiumPer100g: 150, removable: false, note: "Laget av rekeskall; usaltet." },
      { id: "saffron",       label: "Safran (ristet)",            amount: 0.5, unit: "g", role: "saffron",                  scaling: "nonlinear", addStage: "early", removable: true,  note: "Rist lett, knus, og bløtlegg i varm kraft." },
      { id: "chicken",       label: "Kyllinglår i biter",         amount: 250, unit: "g", role: "protein",                  scaling: "linear",    addStage: "early", sodiumPer100g: 75,  removable: false, tradition: "traditional" },
      { id: "rabbit",        label: "Kanin i biter (tradisjonell)", amount: 200, unit: "g", role: "protein",                scaling: "linear",    addStage: "early", sodiumPer100g: 50,  removable: true,  tradition: "traditional" },
      { id: "prawns",        label: "Scampi med skall",           amount: 250, unit: "g", role: "seafood",                  scaling: "linear",    addStage: "end",   sodiumPer100g: 120, removable: true },
      { id: "mussels",       label: "Blåskjell",                  amount: 200, unit: "g", role: "seafood",                  scaling: "linear",    addStage: "end",   sodiumPer100g: 285, removable: true },
      { id: "clams",         label: "Skjell (clams)",             amount: 150, unit: "g", role: "seafood",                  scaling: "linear",    addStage: "end",   sodiumPer100g: 600, removable: true },
      { id: "squid",         label: "Blekksprut",                 amount: 150, unit: "g", role: "seafood",                  scaling: "linear",    addStage: "early", sodiumPer100g: 45,  removable: true,  note: "Surres kort." },
      { id: "tomato",        label: "Revet tomat (sofrito)",      amount: 150, unit: "g", role: "acid",                     scaling: "linear",    addStage: "early", removable: true,  isPrimaryAcid: true,
        onRemove: { suggestAcid: { label: "litt ekstra sitron", when: "ved servering" }, tip: "Tomaten er rettens innebygde syre/dybde – uten den blir den flatere. Server med rikelig sitron." } },
      { id: "red_pepper",    label: "Rød paprika i strimler",     amount: 1, unit: "stk", role: "vegetable",                scaling: "linear",    addStage: "early", removable: true },
      { id: "green_beans",   label: "Flate grønne bønner",        amount: 150, unit: "g", role: "vegetable",                scaling: "linear",    addStage: "early", removable: true,  tradition: "traditional" },
      { id: "garlic",        label: "Hvitløksfedd",               amount: 3, unit: "stk", role: "aromatic",                 scaling: "linear",    addStage: "early", removable: true },
      { id: "olive_oil",     label: "Olivenolje",                 amount: 4, unit: "ss",  role: "fat",     essential: true, scaling: "nonlinear", addStage: "early", removable: false },
      { id: "sweet_paprika", label: "Søt paprika (pimentón dulce)", amount: 1.5, unit: "ts", role: "seasoning",             scaling: "nonlinear", addStage: "early", removable: false, tradition: "traditional" },
      { id: "rosemary",      label: "Rosmarin",                   amount: 1, unit: "kvist", role: "aromatic",               scaling: "fixed",     addStage: "early", removable: true,  tradition: "traditional" },
      { id: "salt_added",    label: "Salt",                       amount: 1.5, unit: "ts", role: "seasoning",               scaling: "nonlinear", addStage: "early", removable: false, note: "Smak til; reduseres automatisk ved salte bytter." }
    ],
    steps: [
      "Lag kraft av rekeskall: fres skallene i litt olje, dekk med vann, la trekke 20–30 min, og sil.",
      "Rist safranen lett, knus den, og bløtlegg i litt varm (ikke kokende) kraft.",
      "Brun kylling og kanin i olivenolje til gyllent, og ta opp.",
      "Surr hvitløk, lag sofrito med revet tomat, og la den koke inn til mørk og tykk. Rør inn søt paprika.",
      "Tilsett grønne bønner og ris, og rør til kornene er blanke.",
      "Hell over kraften med safran, legg kjøttet tilbake, og legg i rosmarin. La putre uten omrøring i ca. 15 minutter.",
      "Surr blekksprut kort, og fordel sjømaten oppå de siste 5–8 minuttene til skjellene har åpnet seg.",
      "Skru opp varmen 1–2 minutter til slutt for socarrat – lytt etter svak knitring, og kjenn at det dufter ristet (ikke svidd).",
      "La hvile 5 minutter under et klede. Smak til med salt og server med sitronbåter."
    ]
  }
};

/* Friskhet for enkel/medium (ingen tomat): sitronbåter ved servering. */
const servedAcid = {
  label: "Sitronbåter", when: "ved servering",
  tip: "Server med sitronbåter for friskhet – ekstra viktig hvis du legger til noe salt (f.eks. chorizo eller mer skjell)."
};
