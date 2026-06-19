/* ===== Lussekatter – datamodell =====
   Norsk juleklassiker. Bakst-logikk som pannekake:
     - INGEN auto-balanse (levers: [])
     - Roller: bulk (mel), liquid (melk), binder (egg), fat (smør/brunet smør)
   Skalering basert på antall stykker (servings = 24 stk). */

const swapOptions = {
  flour: [
    { id: "gf_flour", label: "Glutenfri melblanding", amount: 14, unit: "dl",
      note: "Bruk en bakst-blanding med bindemiddel; deigen blir litt fastere." }
  ],
  milk: [
    { id: "oat_milk",         label: "Havremelk (melkefri)",  amount: 5, unit: "dl",
      note: "Nøytral og god melkefri base for gjærdeig." },
    { id: "lactosefree_milk", label: "Laktosefri melk",       amount: 5, unit: "dl",
      allergens: ["dairy"] }
  ],
  butter: [
    { id: "oil", label: "Nøytral olje (melkefri)", amount: 1.5, unit: "dl",
      note: "Fungerer i deigen; litt flatere smak enn smør." }
  ],
  brown_butter: [
    { id: "oil", label: "Nøytral olje (melkefri)", amount: 1.5, unit: "dl",
      note: "Mister den nøtteaktige smaken fra brunet smør." }
  ],
  egg: [
    { id: "flax_egg", label: "Linfrø-egg (eggfri)", amount: 2, unit: "stk",
      note: "1 ss malt linfrø + 3 ss vann per egg; la svelle 5 min. Deigen blir litt tettere." }
  ]
};


const lussekatterRecipes = {

  /* ---------- ENKEL: klassisk grunnoppskrift ---------- */
  enkel: {
    label: "Enkel", servings: 24,
    ingredients: [
      { id: "milk",      label: "Helmelk",            amount: 5,   unit: "dl",  role: "liquid",    scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "butter",    label: "Smør",               amount: 150, unit: "g",   role: "fat",       scaling: "linear",    addStage: "early", removable: false, note: "Smeltes i melken.", allergens: ["dairy"] },
      { id: "saffron",   label: "Safran",              amount: 1,   unit: "g",   role: "saffron",   scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 }, note: "Bløtlegg i litt varm melk for best farge og aroma." },
      { id: "yeast",     label: "Gjær (fersk)",        amount: 50,  unit: "g",   role: "leavening", scaling: "linear",    addStage: "early", removable: false },
      { id: "sugar",     label: "Sukker",              amount: 1.5, unit: "dl",  role: "sweet",     scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 2 } },
      { id: "salt",      label: "Salt",                amount: 1,   unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "egg",       label: "Egg",                 amount: 1,   unit: "stk", role: "binder",    scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"] },
      { id: "flour",     label: "Hvetemel",            amount: 14,  unit: "dl",  role: "bulk",      scaling: "linear",    addStage: "early", removable: false, note: "Tilsett litt etter litt – deigen skal slippe bollen, men ikke bli for fast.", allergens: ["gluten"] },
      { id: "raisins",   label: "Rosiner til pynt",    amount: 50,  unit: "g",   role: "garnish",   scaling: "linear",    addStage: "serve", removable: true },
      { id: "egg_brush", label: "Egg til pensling",    amount: 1,   unit: "stk", role: "garnish",   scaling: "nonlinear", addStage: "serve", removable: true,  allergens: ["egg"] }
    ],
    steps: [
      "Smelt smøret i en kjele, hell i melken og varm til fingervarmt (~37 °C). Smuldre safranen oppi og la trekke i noen minutter.",
      "Smuldre gjæren i den lune safranmelken og rør til den er løst opp.",
      "Tilsett sukker, salt og egg. Arbeid inn melet litt etter litt til du har en smidig, blank deig som slipper bollen. Spar litt mel – deigen skal ikke bli for fast.",
      "La deigen heve under klede til dobbel størrelse, ca. 45–60 minutter.",
      "Del deigen i emner på ca. 40 g, rull til pølser og form til S-er. Trykk en rosin i hver krøll.",
      "Legg på bakepapirkledd brett og etterhev i ca. 20 minutter. Pensle med sammenvispet egg.",
      "Stek midt i ovnen på 220 °C i 8–10 minutter til gylne og velduftende. Avkjøl på rist."
    ]
  },

  /* ---------- MEDIUM: med kardemomme og vanilje ---------- */
  medium: {
    label: "Medium", servings: 24,
    ingredients: [
      { id: "milk",      label: "Helmelk",            amount: 5,   unit: "dl",  role: "liquid",    scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "butter",    label: "Smør",               amount: 150, unit: "g",   role: "fat",       scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "saffron",   label: "Safran",              amount: 1,   unit: "g",   role: "saffron",   scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 }, note: "Bløtlegg i 2 ss varm melk i ~15 min for best farge." },
      { id: "yeast",     label: "Gjær (fersk)",        amount: 50,  unit: "g",   role: "leavening", scaling: "linear",    addStage: "early", removable: false },
      { id: "sugar",     label: "Sukker",              amount: 1.5, unit: "dl",  role: "sweet",     scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 2 } },
      { id: "cardamom",  label: "Malt kardemomme",     amount: 0.5, unit: "ts",  role: "aromatic",  scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 } },
      { id: "vanilla",   label: "Vaniljesukker",       amount: 1,   unit: "ts",  role: "aromatic",  scaling: "nonlinear", addStage: "early", removable: true,  note: "Gir en varm, rund aroma." },
      { id: "salt",      label: "Salt",                amount: 1,   unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "egg",       label: "Egg",                 amount: 2,   unit: "stk", role: "binder",    scaling: "linear",    addStage: "early", removable: false, note: "To egg gir en rikere, mørere deig.", allergens: ["egg"] },
      { id: "flour",     label: "Hvetemel",            amount: 14,  unit: "dl",  role: "bulk",      scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "raisins",   label: "Rosiner til pynt",    amount: 50,  unit: "g",   role: "garnish",   scaling: "linear",    addStage: "serve", removable: true },
      { id: "egg_brush", label: "Egg til pensling",    amount: 1,   unit: "stk", role: "garnish",   scaling: "nonlinear", addStage: "serve", removable: true,  allergens: ["egg"] }
    ],
    steps: [
      "Smelt smøret i melken og varm til fingervarmt. Bløtlegg safran i 2 ss av den varme melken i ~15 minutter.",
      "Smuldre gjæren i den lune safranmelken til den er løst opp.",
      "Tilsett sukker, kardemomme, vaniljesukker, salt og egg. Arbeid inn melet til en smidig deig.",
      "La heve under klede i 45–60 minutter til dobbel størrelse.",
      "Form til S-er (~40 g per boll), trykk en rosin i hver krøll og etterhev i ~20 minutter.",
      "Pensle med sammenvispet egg og stek på 220 °C i 8–10 minutter."
    ]
  },

  /* ---------- KOMPLEKS: brunet smør, appelsinskall, ekstra safran ---------- */
  kompleks: {
    label: "Kompleks", servings: 24,
    ingredients: [
      { id: "milk",         label: "Helmelk",              amount: 5,   unit: "dl",  role: "liquid",    scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "brown_butter", label: "Brunet smør",          amount: 150, unit: "g",   role: "fat",       scaling: "linear",    addStage: "early", removable: false, note: "Brun smøret til det dufter nøtteaktig, avkjøl litt.", allergens: ["dairy"] },
      { id: "saffron",      label: "Safran (blomstret)",   amount: 1.5, unit: "g",   role: "saffron",   scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 }, note: "Bløtlegg i 2 ss varm melk i ~20 min for intens farge og aroma." },
      { id: "yeast",        label: "Gjær (fersk)",          amount: 50,  unit: "g",   role: "leavening", scaling: "linear",    addStage: "early", removable: false },
      { id: "sugar",        label: "Sukker",                amount: 1.5, unit: "dl",  role: "sweet",     scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 2 } },
      { id: "cardamom",     label: "Malt kardemomme",       amount: 1,   unit: "ts",  role: "aromatic",  scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 } },
      { id: "vanilla",      label: "Vaniljesukker",         amount: 1,   unit: "ts",  role: "aromatic",  scaling: "nonlinear", addStage: "early", removable: true },
      { id: "orange_zest",  label: "Appelsinskall (revet)", amount: 1,   unit: "stk", role: "aromatic",  scaling: "nonlinear", addStage: "early", removable: true,  note: "Skallet av 1 appelsin – kun det oransje, ikke det hvite." },
      { id: "salt",         label: "Salt",                  amount: 1,   unit: "ts",  role: "seasoning", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "egg",          label: "Egg",                   amount: 2,   unit: "stk", role: "binder",    scaling: "linear",    addStage: "early", removable: false, allergens: ["egg"] },
      { id: "flour",        label: "Hvetemel",              amount: 14,  unit: "dl",  role: "bulk",      scaling: "linear",    addStage: "early", removable: false, allergens: ["gluten"] },
      { id: "raisins",      label: "Rosiner til pynt",      amount: 50,  unit: "g",   role: "garnish",   scaling: "linear",    addStage: "serve", removable: true },
      { id: "egg_brush",    label: "Egg til pensling",      amount: 1,   unit: "stk", role: "garnish",   scaling: "nonlinear", addStage: "serve", removable: true,  allergens: ["egg"] }
    ],
    steps: [
      "Brun smøret på middels varme til det er gyllent og dufter nøtteaktig; avkjøl litt. Bløtlegg safran i 2 ss varm melk i ~20 minutter.",
      "Varm resten av melken til fingervarmt og smuldre gjæren oppi til den er løst opp.",
      "Tilsett sukker, kardemomme, vaniljesukker, revet appelsinskall, salt og egg. Rør inn det brunede smøret og safranmelken.",
      "Arbeid inn melet til en smidig, lett klissete deig. La heve under klede i ~60 minutter.",
      "Form til S-er (~40 g per boll), trykk en rosin i hver krøll og etterhev i ~20 minutter.",
      "Pensle forsiktig med sammenvispet egg. Stek på 220 °C i 8–10 minutter til gylne og velduftende."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "lussekatter",
  recipes: lussekatterRecipes,
  swapOptions: swapOptions,
  servedAcid: null,

  density: {
    flour: 0.55, gf_flour: 0.55,
    milk: 1.03, oat_milk: 1.03, lactosefree_milk: 1.03,
    butter: 0.95, brown_butter: 0.92, oil: 0.92,
    sugar: 0.85, cardamom: 0.5, yeast: 1.0
  },
  pieceWeight: { egg: 55, egg_brush: 55 },
  unitOptions: {
    flour:        ["dl", "g"],
    milk:         ["dl", "ml", "g"],
    sugar:        ["dl", "ss", "g"],
    cardamom:     ["ts", "g"],
    butter:       ["g", "ss"],
    brown_butter: ["g", "ss"]
  },
  bulkRoles: ["bulk", "liquid", "binder"],
  levers: [],
  requireRoles: [],
  tasteMessages: {
    sweet: "Bollene blir mindre søte – server gjerne med litt sukker på toppen.",
    sour: "", umami: ""
  },
  leverMessages: {}
};
