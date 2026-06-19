/* ===== Safraniskrem (persisk bastani) – datamodell =====
   Dessert. Tester motoren i et helt annet «format» enn hovedrettene:
     - INGEN salt-lever og INGEN syre → levers: [], requireRoles: []
     - søtt er HOVEDsmaken (sukker er strukturelt for frysing, ikke en
       liten justeringslever) → sukker er en vanlig ingrediens, ikke en lever
   Motoren skal da bare skalere + tillate bytte/fjern + maintain-yield, uten
   auto-balanse og uten syre-vakt. (Det er nettopp dette dessert avdekker.)

   taste brukes fortsatt til inline-tips ved fjerning (f.eks. fjern sukker →
   «mindre søt»). */

const swapOptions = {
  cream: [
    { id: "coconut_cream", label: "Kokoskrem (uten melk)", amount: 5, unit: "dl", taste: { sweet: 1 },
      note: "Melkefri; litt søtlig og passer fint med safran." }
  ],
  milk: [
    { id: "coconut_milk", label: "Kokosmelk (uten melk)", amount: 2.5, unit: "dl", taste: { sweet: 1 }, note: "Melkefri base." }
  ],
  pistachio: [
    { id: "almonds", label: "Mandler, grovhakket", amount: 50, unit: "g", note: "Mildere enn pistasj.",
      allergens: ["nuts"] }
  ],
  cardamom: [
    { id: "vanilla", label: "Vanilje", amount: 1, unit: "ts", note: "Rundere, mindre krydret enn kardemomme." }
  ]
};


const safraniskremRecipes = {

  /* ---------- ENKEL: no-churn, uten iskremmaskin ---------- */
  enkel: {
    label: "Enkel", servings: 6,
    ingredients: [
      { id: "cream",         label: "Kremfløte",            amount: 5, unit: "dl", role: "fat",       scaling: "linear",    addStage: "early", removable: false, note: "Piskes til myke topper.", allergens: ["dairy"] },
      { id: "condensed_milk",label: "Søtet kondensert melk", amount: 2, unit: "dl", role: "sweet",     scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 }, note: "Gir både sødme og kremet, frysbar base (no-churn).", allergens: ["dairy"] },
      { id: "saffron",       label: "Safran (blomstret)",   amount: 0.5, unit: "g", role: "saffron",   scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 }, note: "Bløtlegg i 1 ss varmt vann ~15 min; gir farge og aroma." },
      { id: "cardamom",      label: "Malt kardemomme",      amount: 1, unit: "ts", role: "aromatic",   scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 } },
      { id: "pistachio",     label: "Pistasj, grovhakket",  amount: 50, unit: "g", role: "aromatic",   scaling: "linear",    addStage: "serve", removable: true,  allergens: ["nuts"] }
    ],
    steps: [
      "Bløtlegg safran i 1 ss varmt vann i ~15 minutter.",
      "Pisk kremfløten til myke topper.",
      "Vend inn kondensert melk, safranvann og kardemomme til en jevn blanding.",
      "Hell i en form, dryss over halvparten av pistasjen, og frys minst 6 timer.",
      "Server med resten av pistasjen på toppen."
    ]
  },

  /* ---------- MEDIUM: klassisk vaniljesaus-base (bastani) ---------- */
  medium: {
    label: "Medium", servings: 6,
    ingredients: [
      { id: "cream",     label: "Kremfløte",            amount: 5, unit: "dl",  role: "fat",      scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "milk",      label: "Helmelk",              amount: 2.5, unit: "dl", role: "liquid",   scaling: "linear",    addStage: "early", removable: false, note: "Sammen med fløten danner den base for vaniljesausen.", allergens: ["dairy"] },
      { id: "sugar",     label: "Sukker",               amount: 1.5, unit: "dl", role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 }, note: "Strukturelt for frysing – hold mengden ganske stabil." },
      { id: "egg_yolk",  label: "Eggeplommer",          amount: 4, unit: "stk", role: "fat",      scaling: "linear",    addStage: "early", removable: false, note: "Tykner sausen; ikke kok over ~82 °C.", allergens: ["egg"] },
      { id: "saffron",   label: "Safran (blomstret)",   amount: 0.5, unit: "g", role: "saffron",  scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 }, note: "Bløtlegg i litt varm (ikke kokende) melk ~15 min." },
      { id: "cardamom",  label: "Malt kardemomme",      amount: 1, unit: "ts",  role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 } },
      { id: "pistachio", label: "Pistasj, grovhakket",  amount: 50, unit: "g",  role: "aromatic", scaling: "linear",    addStage: "serve", removable: true,  allergens: ["nuts"] }
    ],
    steps: [
      "Varm fløte, melk, kardemomme og blomstret safran til like under kokepunktet.",
      "Pisk eggeplommer og sukker lyst, og spe forsiktig med den varme blandingen under omrøring.",
      "Varm alt tilbake i kjelen på svak varme til kremen tykner litt (~82 °C) – ikke kok.",
      "Avkjøl helt, gjerne over natten.",
      "Kjør i iskremmaskin, eller frys og rør hvert 30. minutt til den er fast. Vend inn pistasj mot slutten."
    ]
  },

  /* ---------- KOMPLEKS: tradisjonell bastani med rosenvann + seig tekstur ---------- */
  kompleks: {
    label: "Kompleks", servings: 6,
    ingredients: [
      { id: "cream",     label: "Kremfløte",            amount: 5, unit: "dl",  role: "fat",      scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "milk",      label: "Helmelk",              amount: 2.5, unit: "dl", role: "liquid",   scaling: "linear",    addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "sugar",     label: "Sukker",               amount: 1.5, unit: "dl", role: "sweet",    scaling: "linear",    addStage: "early", removable: false, taste: { sweet: 3 }, note: "Strukturelt for frysing." },
      { id: "egg_yolk",  label: "Eggeplommer",          amount: 5, unit: "stk", role: "fat",      scaling: "linear",    addStage: "early", removable: false, note: "Litt flere for en rikere base.", allergens: ["egg"] },
      { id: "saffron",   label: "Safran (ristet, blomstret)", amount: 0.6, unit: "g", role: "saffron", scaling: "nonlinear", addStage: "early", removable: true, taste: { bitter: 1 }, note: "Rist lett, knus, bløtlegg i varm melk." },
      { id: "cardamom",  label: "Malt kardemomme",      amount: 1, unit: "ts",  role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true,  taste: { bitter: 1 } },
      { id: "rosewater", label: "Rosenvann",            amount: 1, unit: "ss",  role: "aromatic", scaling: "nonlinear", addStage: "end",   removable: true,  note: "Tradisjonelt persisk; tilsett etter avkjøling så aromaen ikke koker bort." },
      { id: "salep",     label: "Salep / maisstivelse", amount: 1, unit: "ss",  role: "seasoning", scaling: "linear",   addStage: "early", removable: true,  note: "Gir den seige, tyggbare bastani-teksturen. Røres ut i litt kald melk." },
      { id: "pistachio", label: "Pistasj, grovhakket",  amount: 60, unit: "g",  role: "aromatic", scaling: "linear",    addStage: "serve", removable: true,  allergens: ["nuts"] }
    ],
    steps: [
      "Rør salep/maisstivelse ut i litt av den kalde melken.",
      "Varm resten av fløte, melk, kardemomme og blomstret safran til like under kokepunktet, og rør inn salep-blandingen til den tykner lett.",
      "Pisk eggeplommer og sukker lyst, spe med den varme blandingen, og varm tilbake på svak varme til ~82 °C – ikke kok.",
      "Avkjøl helt; rør inn rosenvann.",
      "Kjør i iskremmaskin (eller frys og rør hvert 30. min). Vend inn pistasj, og server gjerne strødd med ekstra safrantråder."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "safraniskrem",
  recipes: safraniskremRecipes,
  swapOptions: swapOptions,
  servedAcid: null,        // dessert – ingen syre i retten

  density: {
    cream: 1, milk: 1.03, condensed_milk: 1.3, coconut_cream: 1, coconut_milk: 1,
    sugar: 0.85, cardamom: 0.5, rosewater: 1, salep: 0.6
  },
  pieceWeight: { egg_yolk: 18 },
  unitOptions: {
    cream: ["dl", "ml", "g"], milk: ["dl", "ml", "g"], condensed_milk: ["dl", "ml"],
    sugar: ["dl", "ml", "g"], cardamom: ["ts", "g"], rosewater: ["ss", "g"], salep: ["ss", "g"]
  },
  bulkRoles: ["fat", "liquid"],
  levers: [],              // INGEN auto-balanse: sukker er strukturelt, ikke en lever
  requireRoles: [],        // ingen syre å beskytte i en dessert
  tasteMessages: {
    sweet: "Retten blir mindre søt – det merkes godt i en dessert; vurder å la sukkeret stå.",
    sour: "",
    umami: ""
  },
  leverMessages: {}        // ingen levere → ingen auto-justeringsmeldinger
};
