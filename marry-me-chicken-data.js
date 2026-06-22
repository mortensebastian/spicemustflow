/* ===== Marry me chicken – datamodell =====
   Viral TikTok-kyllingrett: saftige kyllingfileter i en kremet fløtesaus med
   soltørkede tomater, hvitløk og parmesan. Tre grunnoppskrifter på «stige»-modellen:
     enkel    – kylling i biter, rask saus av kraft + fløte + parmesan
     medium   – hele bankede fileter, løk, deglaze med kraft, frisk basilikum
     kompleks – hvitvin, hjemmelaget kraft, mascarpone og sitronskall i sausen

   Smaksbalanse (recipe-balance.js): én selvjusterende lever –
     salt → salt_added (via sodiumPer100g)
   Ingen syre-lever (ingen ren syre-ingrediens; hvitvin/sitron er valgfrie i kompleks).
   Retten er naturlig glutenfri. Eneste allergen er meieri (smør, fløte, parmesan,
   mascarpone) – hver bærer har melkefritt bytte eller er fjernbar, så melkefri
   dekning er komplett. */

/* ===== Godkjente bytter (kuratert, etter rolle/teksturklasse) ===== */
const swapOptions = {
  chicken_breast: [
    { id: "chicken_thigh", label: "Kyllinglårfilet (saftigere)", amount: 700, unit: "g", sodiumPer100g: 75, taste: {"umami":2}, note: "Mørkere, saftigere kjøtt; stek litt lenger." },
    { id: "chicken_inner_fillet", label: "Kyllingfilet, indrefilet", amount: 600, unit: "g", sodiumPer100g: 60, note: "Små, møre biter; stek kort." }
  ],
  butter: [
    { id: "margarine", label: "Margarin (melkefri)", amount: 1, unit: "ss", note: "Melkefri steking." },
    { id: "rapeseed_oil", label: "Rapsolje (melkefri)", amount: 1, unit: "ss", note: "Nøytral olje til bruning." }
  ],
  cream: [
    { id: "plant_cream", label: "Plantefløte (melkefri)", amount: 3, unit: "dl", note: "Soya- eller havrebasert; melkefri og kremet." },
    { id: "creme_fraiche", label: "Crème fraîche (fyldigere)", amount: 3, unit: "dl", allergens: ["dairy"], note: "Tykkere, litt syrligere saus." },
    { id: "matfloete", label: "Matfløte (lettere)", amount: 3, unit: "dl", allergens: ["dairy"], note: "Lettere saus; kok forsiktig så den ikke skiller seg." }
  ],
  parmesan: [
    { id: "grana_padano", label: "Grana Padano", amount: 50, unit: "g", sodiumPer100g: 600, allergens: ["dairy"], taste: {"umami":2}, note: "Mildere, rimeligere hardost." },
    { id: "vegan_parmesan", label: "Vegansk parmesan (melkefri)", amount: 50, unit: "g", sodiumPer100g: 700, taste: {"umami":1}, note: "Melkefri; salt – salt justeres automatisk." }
  ],
  stock: [
    { id: "bouillon", label: "Kyllingbuljong (terning)", amount: 1.5, unit: "dl", sodiumPer100g: 350, taste: {"umami":1}, note: "Raskere; saltere – salt justeres automatisk." },
    { id: "homemade_stock", label: "Hjemmelaget kyllingkraft", amount: 1.5, unit: "dl", sodiumPer100g: 120, taste: {"umami":2}, note: "Mer dybde og rundere smak." }
  ],
  sun_dried_tomato: [
    { id: "red_pesto", label: "Rød pesto (snarvei)", amount: 3, unit: "ss", sodiumPer100g: 700, allergens: ["dairy","nuts"], taste: {"umami":1,"sweet":1}, note: "Rask smaksbombe; inneholder ofte ost og pinjekjerner." }
  ],
  onion: [
    { id: "shallot", label: "Sjalottløk (mildere)", amount: 2, unit: "stk", taste: {"sweet":1}, note: "Mildere og søtere enn vanlig løk." }
  ],
  white_wine: [
    { id: "stock_extra", label: "Ekstra kraft (alkoholfritt)", amount: 1, unit: "dl", sodiumPer100g: 200, taste: {"umami":1}, note: "Alkoholfritt; tilsett en skvett sitron for friskhet." }
  ],
  mascarpone: [
    { id: "vegan_cream_cheese", label: "Vegansk flødeost (melkefri)", amount: 1, unit: "ss", note: "Melkefri fylde i sausen." }
  ]
};


const marryMeChickenRecipes = {
  enkel: {
    label: "Enkel", servings: 4,
    ingredients: [
      { id: "chicken_breast", label: "Kyllingfilet, i biter", amount: 600, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: {"umami":1}, note: "Skjær i jevne biter for rask steking." },
      { id: "olive_oil", label: "Olivenolje", amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "butter", label: "Smør", amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "garlic", label: "Hvitløk", amount: 2, unit: "fedd", role: "aromatic", scaling: "linear", addStage: "early", removable: true },
      { id: "sun_dried_tomato", label: "Soltørkede tomater, i strimler", amount: 75, unit: "g", role: "vegetable", scaling: "linear", addStage: "early", removable: false, taste: {"umami":1,"sweet":1} },
      { id: "italian_herbs", label: "Tørket oregano/italiensk krydder", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "chili_flakes", label: "Chiliflak", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "stock", label: "Kyllingkraft", amount: 1.5, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", sodiumPer100g: 200, removable: false, taste: {"umami":1} },
      { id: "cream", label: "Matfløte/kremfløte", amount: 3, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", removable: false, allergens: ["dairy"] },
      { id: "parmesan", label: "Nyrevet parmesan", amount: 50, unit: "g", role: "seasoning", scaling: "nonlinear", addStage: "end", sodiumPer100g: 1500, removable: true, allergens: ["dairy"], taste: {"umami":2} },
      { id: "salt_added", label: "Salt", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false },
      { id: "pepper", label: "Pepper", amount: 0.25, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "fresh_basil", label: "Frisk basilikum, til servering", amount: 10, unit: "blader", role: "aromatic", scaling: "fixed", addStage: "end", removable: true }
    ],
    steps: [
      "Krydre kyllingbitene med salt og pepper. Varm olje og smør i en vid panne, og brun bitene raskt på alle sider til de er gylne. Ta dem eventuelt ut mens du lager sausen.",
      "Stek hvitløk og soltørkede tomater i samme panne et minutt, og rør inn oregano og chiliflak.",
      "Hell i kyllingkraften og la den koke inn et par minutter. Tilsett fløten, og la sausen småkoke til den tykner litt.",
      "Rør inn parmesan utenfor sterkeste varmen til sausen blir blank. Legg kyllingen tilbake og varm gjennom.",
      "Smak til, dryss over frisk basilikum, og server med pasta, poteter eller godt brød."
    ]
  },

  medium: {
    label: "Medium", servings: 4,
    ingredients: [
      { id: "chicken_breast", label: "Kyllingfilet, hele", amount: 600, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: {"umami":1}, note: "Bank filetene lett flate så de blir jevntykke." },
      { id: "paprika_powder", label: "Paprikapulver", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "olive_oil", label: "Olivenolje", amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "butter", label: "Smør", amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "onion", label: "Løk, finhakket", amount: 1, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "garlic", label: "Hvitløk", amount: 3, unit: "fedd", role: "aromatic", scaling: "linear", addStage: "early", removable: true },
      { id: "sun_dried_tomato", label: "Soltørkede tomater, i strimler", amount: 100, unit: "g", role: "vegetable", scaling: "linear", addStage: "early", removable: false, taste: {"umami":1,"sweet":1} },
      { id: "italian_herbs", label: "Tørket oregano/italiensk krydder", amount: 1.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "thyme", label: "Timian", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "chili_flakes", label: "Chiliflak", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "stock", label: "Kyllingkraft", amount: 2, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", sodiumPer100g: 200, removable: false, taste: {"umami":1} },
      { id: "cream", label: "Kremfløte", amount: 3, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", removable: false, allergens: ["dairy"] },
      { id: "parmesan", label: "Nyrevet parmesan", amount: 60, unit: "g", role: "seasoning", scaling: "nonlinear", addStage: "end", sodiumPer100g: 1500, removable: true, allergens: ["dairy"], taste: {"umami":2} },
      { id: "salt_added", label: "Salt", amount: 0.75, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false },
      { id: "pepper", label: "Pepper", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "fresh_basil", label: "Frisk basilikum, til servering", amount: 15, unit: "blader", role: "aromatic", scaling: "fixed", addStage: "end", removable: true }
    ],
    steps: [
      "Bank kyllingfiletene lett flate, og krydre dem med salt, pepper og paprikapulver. Varm olje og smør i en vid panne, og brun filetene gylne på begge sider. Ta dem ut.",
      "Surr løk og hvitløk blanke i samme panne, og tilsett soltørkede tomater, oregano, timian og chiliflak.",
      "Hell i kyllingkraften og skrap løs stekeskorpene. La det koke inn et par minutter, tilsett fløten, og la sausen småkoke til den tykner.",
      "Rør inn parmesan utenfor sterkeste varmen til sausen blir blank og fyldig. Legg filetene tilbake, og la dem trekke ferdig i sausen 3–4 minutter til de er gjennomstekte.",
      "Smak til, dryss over frisk basilikum, og server med pasta, most poteter eller godt brød."
    ]
  },

  kompleks: {
    label: "Kompleks", servings: 4,
    ingredients: [
      { id: "chicken_breast", label: "Kyllingfilet, hele", amount: 700, unit: "g", role: "protein", essential: true, scaling: "linear", addStage: "early", sodiumPer100g: 60, removable: false, taste: {"umami":1}, note: "Bank filetene jevntykke; kyllinglårfilet kan byttes inn for saftigere kjøtt." },
      { id: "paprika_powder", label: "Paprikapulver", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "olive_oil", label: "Olivenolje", amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false },
      { id: "butter", label: "Smør", amount: 2, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "early", removable: false, allergens: ["dairy"] },
      { id: "shallot", label: "Sjalottløk, finhakket", amount: 2, unit: "stk", role: "aromatic", scaling: "linear", addStage: "early", removable: true, taste: {"sweet":1} },
      { id: "garlic", label: "Hvitløk", amount: 4, unit: "fedd", role: "aromatic", scaling: "linear", addStage: "early", removable: true },
      { id: "sun_dried_tomato", label: "Soltørkede tomater, i strimler", amount: 120, unit: "g", role: "vegetable", scaling: "linear", addStage: "early", removable: false, taste: {"umami":1,"sweet":1} },
      { id: "white_wine", label: "Hvitvin", amount: 1, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", removable: true, note: "Koker ut alkoholen og gir syrlig dybde." },
      { id: "stock", label: "Hjemmelaget kyllingkraft", amount: 2, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", sodiumPer100g: 150, removable: false, taste: {"umami":2} },
      { id: "cream", label: "Kremfløte", amount: 3, unit: "dl", role: "liquid", scaling: "linear", addStage: "end", removable: false, allergens: ["dairy"] },
      { id: "mascarpone", label: "Mascarpone", amount: 1, unit: "ss", role: "fat", scaling: "nonlinear", addStage: "end", removable: true, allergens: ["dairy"], note: "Gir en ekstra fyldig, silkemyk saus." },
      { id: "parmesan", label: "Nyrevet parmesan", amount: 75, unit: "g", role: "seasoning", scaling: "nonlinear", addStage: "end", sodiumPer100g: 1500, removable: true, allergens: ["dairy"], taste: {"umami":2} },
      { id: "italian_herbs", label: "Tørket oregano/italiensk krydder", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "thyme", label: "Frisk timian", amount: 1, unit: "kvist", role: "seasoning", scaling: "fixed", addStage: "early", removable: true },
      { id: "chili_flakes", label: "Chiliflak", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "lemon_zest", label: "Revet sitronskall", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "end", removable: true, note: "Frisker opp den fyldige sausen." },
      { id: "salt_added", label: "Salt", amount: 1, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", sodiumPer100g: 38800, removable: false },
      { id: "pepper", label: "Pepper", amount: 0.5, unit: "ts", role: "seasoning", scaling: "nonlinear", addStage: "early", removable: true },
      { id: "fresh_basil", label: "Frisk basilikum, til servering", amount: 20, unit: "blader", role: "aromatic", scaling: "fixed", addStage: "end", removable: true }
    ],
    steps: [
      "Bank kyllingfiletene jevntykke, og krydre med salt, pepper og paprikapulver. Brun dem gylne i olje og smør i en vid panne, og ta dem ut.",
      "Surr sjalottløk og hvitløk mykt i samme panne, og tilsett soltørkede tomater, oregano, timian og chiliflak.",
      "Hell i hvitvinen og kok den nesten inn. Tilsett kraften og kok et par minutter, før du rører inn fløte og mascarpone og lar sausen småkoke til den tykner.",
      "Rør inn parmesan utenfor sterkeste varmen til sausen blir blank og silkemyk. Legg filetene tilbake, og la dem trekke ferdig 4–5 minutter til de er gjennomstekte.",
      "Smak til med sitronskall, salt og pepper. Dryss over frisk basilikum, og server med pasta, kremet potetmos eller godt brød."
    ]
  }
};


/* ===== Config som recipe-adapter.js leser (window.RECIPE) ===== */
window.RECIPE = {
  id: "marry-me-chicken",
  recipes: marryMeChickenRecipes,
  swapOptions: swapOptions,
  servedAcid: null,

  density: {"olive_oil":0.92,"butter":0.95,"margarine":0.95,"rapeseed_oil":0.92,"stock":1,"bouillon":1,"homemade_stock":1,"stock_extra":1,"white_wine":0.99,"cream":1,"plant_cream":1,"creme_fraiche":1,"matfloete":1,"parmesan":0.4,"grana_padano":0.4,"vegan_parmesan":0.4,"mascarpone":0.95,"vegan_cream_cheese":0.95,"sun_dried_tomato":0.55,"red_pesto":0.95,"salt_added":1.2},
  pieceWeight: {"onion":110,"shallot":30,"garlic":5},
  unitOptions: {"olive_oil":["ss","ts","ml","g"],"butter":["ss","g"],"margarine":["ss","g"],"rapeseed_oil":["ss","ts","ml","g"],"stock":["dl","ml","g"],"bouillon":["dl","ml","g"],"homemade_stock":["dl","ml","g"],"stock_extra":["dl","ml","g"],"white_wine":["dl","ml","g"],"cream":["dl","ml","g"],"plant_cream":["dl","ml","g"],"creme_fraiche":["dl","ml","g"],"matfloete":["dl","ml","g"],"parmesan":["g","dl"],"grana_padano":["g","dl"],"vegan_parmesan":["g","dl"],"mascarpone":["ss","g"],"vegan_cream_cheese":["ss","g"],"sun_dried_tomato":["g"],"red_pesto":["ss","g"],"salt_added":["ts","g"]},
  bulkRoles: ["protein","liquid","vegetable"],
  levers: [{"axis":"salt","id":"salt_added"}],
  requireRoles: [],
  tasteMessages: {"umami":"Retten blir mindre fyldig – vurder litt ekstra parmesan eller kraft.","sweet":"Mindre søtlig dybde – litt mer soltørket tomat eller brunet løk balanserer."},
  leverMessages: {"salt":{"down":"Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til på slutten.","up":"Du tok bort noe salt – vi økte tilsatt salt litt. Smak til på slutten."}}
};
