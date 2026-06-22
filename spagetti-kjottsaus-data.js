/* ===== Spagetti med kjøttsaus (bolognese) – datamodell =====
   Hverdagsklassikeren: spagetti med rik kjøttsaus av kjøttdeig og tomat, fra rask
   hverdagsversjon til langtidskokt ragù alla bolognese. Tre grunnoppskrifter på
   «stige»-modellen:
     enkel    – rask kjøttsaus: kjøttdeig, løk, hvitløk, hermetiske tomater, ~25 min
     medium   – soffritto (løk/gulrot/selleri), okse+svin, rødvin, melk, lengre putring
     kompleks – full bolognese: pancetta, kyllinglever (valgfri), passata, helmelk, lang koking

   Smaksbalanse (recipe-balance.js): to selvjusterende levere –
     salt  → salt_added (via sodiumPer100g)
     sweet → sugar (balanserer tomatsyren)
   requireRoles:["acid"] – tomat (role:"acid"; vin i medium/kompleks) gir syren sausen trenger.
   Allergener: gluten (spagetti→glutenfri pasta; sausen er ellers glutenfri), meieri
   (parmesan/melk→plantebasert eller fjern), selleri (fjernbar soffritto-grønnsak).
   Vegetar er et stille bytte på kjøttdeigen (linser+sopp / plantefarse), ikke løftet i kopi. */

/* ===== Godkjente bytter (kuratert, etter rolle/teksturklasse) ===== */
const swapOptions = {
  beef: [
    { id: "beef_pork_mix", label: "Blanding okse og svin (saftigere)", amount: 500, unit: "g", sodiumPer100g: 60, taste: {"umami":2}, tradition: "traditional", note: "Svinekjøttet gir fett og mildhet – nærmere den ekte ragùen." },
    { id: "lentils_mushroom", label: "Røde linser og sopp (vegetarisk)", amount: 450, unit: "g", sodiumPer100g: 5, taste: {"umami":2}, tradition: "non-traditional", note: "Vegetarisk alternativ – finhakket sopp + linser gir en fyldig, kjøttaktig saus. Spe med litt ekstra kraft." },
    { id: "plant_mince", label: "Plantebasert farse (vegansk)", amount: 450, unit: "g", sodiumPer100g: 400, taste: {"umami":1}, tradition: "non-traditional", note: "Vegansk; bruner som kjøttdeig. Salt justeres automatisk." }
  ],
  olive_oil: [
    { id: "rapeseed_oil", label: "Rapsolje (nøytral)", amount: 1, unit: "ss", note: "Nøytral steking; tåler høy varme." }
  ],
  stock: [
    { id: "bouillon", label: "Oksebuljong (terning)", amount: 2, unit: "dl", sodiumPer100g: 350, taste: {"umami":1}, note: "Raskere; saltere – salt justeres automatisk." }
  ],
  wine: [
    { id: "stock_extra", label: "Ekstra kraft + balsamico (alkoholfritt)", amount: 1, unit: "dl", sodiumPer100g: 200, taste: {"sour":1,"umami":1}, note: "Alkoholfritt; ha i en skvett balsamico for syrlig dybde. Fint til barn." }
  ],
  milk: [
    { id: "plant_milk", label: "Havredrikk (melkefri)", amount: 1, unit: "dl", note: "Nøytral, melkefri base; runder av tomatsyren." }
  ],
  parmesan: [
    { id: "grana_padano", label: "Grana Padano (mildere)", amount: 50, unit: "g", sodiumPer100g: 600, allergens: ["dairy"], taste: {"umami":2}, note: "Mildere og rimeligere hardost." },
    { id: "vegan_parmesan", label: "Vegansk parmesan (melkefri)", amount: 50, unit: "g", sodiumPer100g: 700, taste: {"umami":1}, note: "Melkefri; salt justeres automatisk." }
  ],
  spaghetti: [
    { id: "gf_pasta", label: "Glutenfri pasta", amount: 400, unit: "g", note: "Mais-/risbasert; kok etter pakken, gjerne litt kortere." }
  ]
};


const spagettiKjottsausRecipes = {
  enkel: {
    label: "Enkel", servings: 4,
    ingredients: [
      { id: "beef", label: "Kjøttdeig av storfe", amount: 500, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: {"umami":2} },
      { id: "olive_oil", label: "Olivenolje (til steking)", amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "onion", label: "Løk, finhakket", amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "garlic", label: "Hvitløk", amount: 2, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, taste: {"umami":1} },
      { id: "chopped_tomatoes", label: "Hermetiske, hakkede tomater", amount: 800, unit: "g", role: "acid", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 80, removable: false, taste: {"sour":2,"sweet":1,"umami":1}, isPrimaryAcid: true, onRemove: {"tip":"Tomatene er rettens syre og base – uten dem mister sausen både friskhet og væske."} },
      { id: "tomato_paste", label: "Tomatpuré", amount: 1, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 300, removable: true, taste: {"umami":1,"sweet":1} },
      { id: "herbs", label: "Tørket oregano/italiensk krydder", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "sugar", label: "Sukker (til tomatsyren)", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, taste: {"sweet":2} },
      { id: "spaghetti", label: "Spagetti", amount: 350, unit: "g", role: "starch", essential: true, scaling: "linear", addStage: "end", removable: false, allergens: ["gluten"] },
      { id: "parmesan", label: "Revet parmesan (til servering)", amount: 40, unit: "g", role: "seasoning", scaling: "nonlinear", addStage: "serve", sodiumPer100g: 1500, removable: true, allergens: ["dairy"], taste: {"umami":2} },
      { id: "salt_added", label: "Salt", amount: 0.75, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false }
    ],
    steps: [
      "Finhakk løk og hvitløk. Varm olje i en vid panne, og surr løken myk og gyllen et par minutter. Tilsett hvitløken mot slutten.",
      "Ha i kjøttdeigen, og brun den godt mens du deler den opp – la den få farge, ikke bare bli grå.",
      "Rør inn tomatpuré, hakkede tomater, oregano, sukker og salt. La sausen putre på lav varme i 15–20 minutter, gjerne lenger.",
      "Kok spagettien al dente i godt saltet vann. Spar en kopp pastavann.",
      "Vend pastaen inn i sausen med en skvett pastavann. Smak til, og server med revet parmesan."
    ]
  },

  medium: {
    label: "Medium", servings: 4,
    ingredients: [
      { id: "beef", label: "Kjøttdeig (gjerne okse + svin)", amount: 500, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: {"umami":2} },
      { id: "olive_oil", label: "Olivenolje", amount: 2, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "onion", label: "Løk, finhakket", amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "carrot", label: "Gulrot, finhakket (soffritto)", amount: 1, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "celery", label: "Stangselleri, finhakket (soffritto)", amount: 1, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: true, allergens: ["celery"], taste: {"umami":1} },
      { id: "garlic", label: "Hvitløk", amount: 2, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, taste: {"umami":1} },
      { id: "tomato_paste", label: "Tomatpuré", amount: 2, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 300, removable: true, taste: {"umami":1,"sweet":1} },
      { id: "wine", label: "Rødvin (eller ekstra kraft)", amount: 1, unit: "dl", role: "acid", scaling: "linear", addStage: "early", removable: true, taste: {"sour":1,"umami":1}, onRemove: {"tip":"Vinen gir syrlig dybde – dropper du den, spe med litt ekstra kraft og en skvett balsamico."} },
      { id: "chopped_tomatoes", label: "Hermetiske, hakkede tomater", amount: 800, unit: "g", role: "acid", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 80, removable: false, taste: {"sour":2,"sweet":1,"umami":1}, isPrimaryAcid: true, onRemove: {"tip":"Tomatene er rettens syre og base – uten dem mister sausen både friskhet og væske."} },
      { id: "stock", label: "Oksekraft", amount: 2, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", sodiumPer100g: 200, removable: true, taste: {"umami":1} },
      { id: "milk", label: "Melk (runder av syren)", amount: 1, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", removable: true, allergens: ["dairy"], note: "Et italiensk triks – mildner tomatsyren og gjør sausen kremet." },
      { id: "herbs", label: "Tørket oregano og litt timian", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "bay_leaf", label: "Laurbærblad", amount: 1, unit: "stk", role: "seasoning", scaling: "fixed", addStage: "early", removable: true },
      { id: "sugar", label: "Sukker (til tomatsyren)", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, taste: {"sweet":2} },
      { id: "spaghetti", label: "Spagetti", amount: 400, unit: "g", role: "starch", essential: true, scaling: "linear", addStage: "end", removable: false, allergens: ["gluten"] },
      { id: "parmesan", label: "Nyrevet parmesan (til servering)", amount: 50, unit: "g", role: "seasoning", scaling: "nonlinear", addStage: "serve", sodiumPer100g: 1500, removable: true, allergens: ["dairy"], taste: {"umami":2} },
      { id: "salt_added", label: "Salt", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false }
    ],
    steps: [
      "Finhakk løk, gulrot og selleri til en soffritto. Surr den myk i olivenolje på middels varme i 6–8 minutter uten å brune for hardt. Tilsett hvitløken mot slutten.",
      "Skru opp varmen, ha i kjøttdeigen, og brun den godt til den får farge. Rør inn tomatpuré, og la den steke med et minutt.",
      "Hell i vinen, og la den nesten koke inn. Tilsett hakkede tomater, kraft, oregano, laurbærblad, sukker og salt.",
      "La sausen putre på svak varme i 30–45 minutter, gjerne lenger. Rør inn melken mot slutten og spe med vann om den blir tørr.",
      "Kok spagettien al dente, og spar en kopp pastavann. Vend pastaen i sausen med en skvett pastavann, smak til, og server med revet parmesan."
    ]
  },

  kompleks: {
    label: "Kompleks", servings: 4,
    ingredients: [
      { id: "beef", label: "Grovkvernet storfe (høyrygg/bog)", amount: 400, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: {"umami":2} },
      { id: "pork", label: "Grovkvernet svinekjøtt", amount: 200, unit: "g", role: "protein", scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: true, taste: {"umami":1} },
      { id: "pancetta", label: "Pancetta eller bacon, finhakket", amount: 80, unit: "g", role: "protein", scaling: "linear", addStage: "early", sodiumPer100g: 1500, removable: true, taste: {"umami":2} },
      { id: "olive_oil", label: "Olivenolje", amount: 2, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "onion", label: "Løk, finhakket (soffritto)", amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "carrot", label: "Gulrot, finhakket (soffritto)", amount: 1, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "celery", label: "Stangselleri, finhakket (soffritto)", amount: 1, unit: "stk", role: "vegetable", scaling: "linear", addStage: "early", removable: true, allergens: ["celery"], taste: {"umami":1} },
      { id: "garlic", label: "Hvitløk", amount: 3, unit: "stk", role: "aromatic", scaling: "nonlinear", addStage: "early", removable: true, taste: {"umami":1} },
      { id: "chicken_liver", label: "Kyllinglever, finhakket (valgfritt)", amount: 80, unit: "g", role: "protein", scaling: "linear", addStage: "early", sodiumPer100g: 70, removable: true, taste: {"umami":3}, tradition: "traditional", note: "Gir dyp, klassisk umami – kan utelates." },
      { id: "tomato_paste", label: "Tomatpuré", amount: 2, unit: "ss", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 300, removable: true, taste: {"umami":1,"sweet":1} },
      { id: "wine", label: "Hvit- eller rødvin", amount: 1.5, unit: "dl", role: "acid", scaling: "linear", addStage: "early", removable: true, taste: {"sour":1,"umami":1}, onRemove: {"tip":"Vinen gir syrlig dybde – dropper du den, spe med litt ekstra kraft og en skvett balsamico."} },
      { id: "milk", label: "Helmelk", amount: 1.5, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", removable: true, allergens: ["dairy"], note: "Tilsettes tidlig i autentisk ragù – gjør kjøttet mørt og sausen mild." },
      { id: "passata", label: "Passata (siktet tomat)", amount: 4, unit: "dl", role: "acid", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 80, removable: false, taste: {"sour":2,"sweet":1,"umami":1}, isPrimaryAcid: true, onRemove: {"tip":"Tomaten er rettens syre og base – uten den mister sausen både friskhet og væske."} },
      { id: "stock", label: "Hjemmelaget oksekraft", amount: 3, unit: "dl", role: "liquid", scaling: "linear", addStage: "early", sodiumPer100g: 150, removable: true, taste: {"umami":2} },
      { id: "bay_leaf", label: "Laurbærblad", amount: 1, unit: "stk", role: "seasoning", scaling: "fixed", addStage: "early", removable: true },
      { id: "herbs", label: "Frisk timian og litt muskat", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "sugar", label: "Sukker (til tomatsyren)", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true, taste: {"sweet":2} },
      { id: "spaghetti", label: "Spagetti eller tagliatelle", amount: 400, unit: "g", role: "starch", essential: true, scaling: "linear", addStage: "end", removable: false, allergens: ["gluten"] },
      { id: "parmesan", label: "Nyrevet parmesan (til servering)", amount: 60, unit: "g", role: "seasoning", scaling: "nonlinear", addStage: "serve", sodiumPer100g: 1500, removable: true, allergens: ["dairy"], taste: {"umami":2} },
      { id: "salt_added", label: "Salt", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false }
    ],
    steps: [
      "Finhakk pancetta, og smelt den ut i olivenolje i en tykkbunnet gryte til fettet løsner. Tilsett finhakket løk, gulrot og selleri, og surr soffritton myk i 8–10 minutter. Ha i hvitløken mot slutten.",
      "Skru opp varmen, og brun kjøttdeigen (og eventuell kyllinglever) godt til den får mørk farge. Rør inn tomatpuré, og la den steke med.",
      "Spe melken inn litt etter litt, og la den koke inn i kjøttet. Hell deretter i vinen, og kok den nesten bort.",
      "Tilsett passata, kraft, laurbærblad, timian, muskat, sukker og salt. La ragùen putre på svært svak varme i 2–3 timer, og spe med vann eller kraft når den blir tørr. Rør innimellom.",
      "Kok spagettien al dente, og spar en kopp pastavann. Vend pastaen i ragùen med en skvett pastavann så sausen fester seg.",
      "Smak til med salt og pepper, og server med rikelig nyrevet parmesan."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "spagetti-kjottsaus",
  recipes: spagettiKjottsausRecipes,
  swapOptions: swapOptions,
  servedAcid: null,

  density: {"olive_oil":0.92,"tomato_paste":1.1,"wine":0.99,"stock":1,"milk":1.03,"sugar":0.85,"salt_added":1.2,"passata":1.05,"rapeseed_oil":0.92,"bouillon":1,"plant_milk":1,"stock_extra":1},
  pieceWeight: {"onion":110,"garlic":5,"carrot":70,"celery":50,"bay_leaf":0.2},
  unitOptions: {"olive_oil":["ss","ts","ml","g"],"tomato_paste":["ss","ts","ml","g"],"wine":["dl","ml","g"],"stock":["dl","ml","g"],"milk":["dl","ss","ml","g"],"sugar":["ts","ss","g"],"salt_added":["ts","g"],"passata":["dl","ml","g"],"rapeseed_oil":["ss","ts","ml","g"],"bouillon":["dl","ml","g"],"plant_milk":["dl","ss","ml","g"],"stock_extra":["dl","ml","g"]},
  bulkRoles: ["protein","vegetable","liquid","starch"],
  levers: [{"axis":"salt","id":"salt_added"},{"axis":"sweet","id":"sugar"}],
  requireRoles: ["acid"],
  tasteMessages: {"umami":"Mindre dybde i sausen – litt ekstra tomatpuré, kraft eller en skvett soya hjelper.","sour":"Mindre friskhet – la sausen koke litt lenger, eller ha i en skvett tomat eller balsamico.","sweet":"Mindre rundhet mot tomatsyren – litt revet gulrot eller en klype sukker balanserer."},
  leverMessages: {"salt":{"down":"Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til.","up":"Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."},"sweet":{"down":"Sausen ble søtere – vi reduserte sukkeret litt for å holde balansen mot tomaten.","up":"Mindre naturlig sødme – vi økte sukkeret litt for å runde av tomatsyren."}}
};
