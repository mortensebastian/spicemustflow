/* ===== Tomatsuppe med makaroni – datamodell =====
Tomatsuppe med makaroni – datamodell. Barndomsklassikeren fra bunnen: tre nivåer fra rask hverdagssuppe av hermetiske tomater til fra-bunnen-versjon med ovnsbakte tomater og frisk basilikum. Salt- og sweet-lever balanserer tomatsyren; requireRoles:['acid'] dekket av hermetiske tomater/passata. Makaroni og kokt egg som klassisk følge; melkefri/glutenfri via bytter.
   Generert fra recipes-pending/tomatsuppe-med-makaroni.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "tomatsuppe-med-makaroni",
  "yieldNoun": "porsjoner",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "onion",
          "label": "Løk, finhakket",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "tomato_paste",
          "label": "Tomatpuré",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": true,
          "taste": {
            "umami": 1,
            "sweet": 1
          }
        },
        {
          "id": "chopped_tomatoes",
          "label": "Hermetiske, hakkede tomater",
          "amount": 800,
          "unit": "g",
          "role": "acid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 80,
          "removable": false,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          },
          "onRemove": {
            "tip": "Tomatene er selve suppa – uten dem har du ingen tomatsuppe."
          }
        },
        {
          "id": "stock",
          "label": "Grønnsaksbuljong (terning + vann)",
          "amount": 6,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 250,
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "sugar",
          "label": "Sukker (til tomatsyren)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "milk",
          "label": "Melk (valgfritt, for mildhet)",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "macaroni",
          "label": "Makaroni",
          "amount": 150,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Finhakk løken, og surr den myk og blank i litt smør eller olje i en gryte, uten å brune den.",
        "Rør inn tomatpuré, og la den steke med et halvt minutt. Ha i hermetiske tomater, buljong, sukker og salt.",
        "La suppa småkoke i 15–20 minutter. Vil du ha den helt glatt, kan du kjøre den med stavmikser.",
        "Ha i makaronien og la den koke med de siste 6–8 minuttene, til den er mør. Spe med litt vann om suppa blir for tykk.",
        "Rør inn en skvett melk for mildhet, smak til med salt, og server – gjerne med et kokt egg delt i to."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "butter",
          "label": "Smør (til surring)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "onion",
          "label": "Løk, finhakket",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "carrot",
          "label": "Gulrot, finhakket",
          "amount": 1,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "garlic",
          "label": "Hvitløk",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "tomato_paste",
          "label": "Tomatpuré",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": true,
          "taste": {
            "umami": 1,
            "sweet": 1
          }
        },
        {
          "id": "chopped_tomatoes",
          "label": "Hermetiske, hakkede tomater",
          "amount": 800,
          "unit": "g",
          "role": "acid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 80,
          "removable": false,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          },
          "onRemove": {
            "tip": "Tomatene er selve suppa – uten dem har du ingen tomatsuppe."
          }
        },
        {
          "id": "stock",
          "label": "Grønnsakskraft (eller buljongterning + vann)",
          "amount": 6,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 200,
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "herbs",
          "label": "Tørket basilikum eller oregano",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "sugar",
          "label": "Sukker (til tomatsyren)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cream",
          "label": "Matfløte (for kremethet)",
          "amount": 1,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "macaroni",
          "label": "Makaroni",
          "amount": 150,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "egg",
          "label": "Kokt egg (til servering)",
          "amount": 2,
          "unit": "stk",
          "role": "protein",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Finhakk løk, gulrot og hvitløk. Surr løk og gulrot myke i smør på middels varme i 5–6 minutter, og ha i hvitløken mot slutten.",
        "Rør inn tomatpuré, og la den steke med et minutt. Tilsett hermetiske tomater, kraft, basilikum, sukker og salt.",
        "La suppa småkoke i 20 minutter, til grønnsakene er møre. Kjør den gjerne glatt med stavmikser for en jevn, kremet suppe.",
        "Kok makaronien al dente i eget vann (eller rett i suppa de siste minuttene). Kok eggene 8 minutter, avkjøl og skrell.",
        "Rør fløten inn i suppa, ha i makaronien, og smak til. Server med et halvt kokt egg i hver skål."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "olive_oil",
          "label": "Olivenolje",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "onion",
          "label": "Løk, finhakket (soffritto)",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "carrot",
          "label": "Gulrot, finhakket (soffritto)",
          "amount": 1,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "celery",
          "label": "Stangselleri, finhakket (soffritto)",
          "amount": 1,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "celery"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "garlic",
          "label": "Hvitløk",
          "amount": 2,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "fresh_tomatoes",
          "label": "Friske tomater, ovnsbakte",
          "amount": 400,
          "unit": "g",
          "role": "acid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 5,
          "removable": true,
          "taste": {
            "sour": 2,
            "sweet": 1
          },
          "tradition": "traditional",
          "note": "Ovnsbaking konsentrerer smaken og gir dybde – kan utelates om du har dårlig tid."
        },
        {
          "id": "passata",
          "label": "Passata (siktet tomat)",
          "amount": 5,
          "unit": "dl",
          "role": "acid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 80,
          "removable": false,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          },
          "onRemove": {
            "tip": "Passataen er selve suppa – uten tomat har du ingen tomatsuppe."
          }
        },
        {
          "id": "tomato_paste",
          "label": "Tomatpuré",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": true,
          "taste": {
            "umami": 1,
            "sweet": 1
          }
        },
        {
          "id": "stock",
          "label": "Hjemmelaget grønnsaks- eller kyllingkraft",
          "amount": 4,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 150,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "balsamic",
          "label": "Balsamico (skvett, for dybde)",
          "amount": 1,
          "unit": "ss",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sour": 1,
            "umami": 1
          },
          "tradition": "non-traditional",
          "onRemove": {
            "tip": "Balsamicoen gir syrlig dybde – dropper du den, kan en skvett sitron gi samme friskhet."
          }
        },
        {
          "id": "cream",
          "label": "Fløte",
          "amount": 1.5,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "sugar",
          "label": "Sukker (til tomatsyren)",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "macaroni",
          "label": "Makaroni",
          "amount": 150,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "basil",
          "label": "Frisk basilikum (til servering)",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "egg",
          "label": "Kokte egg (til servering)",
          "amount": 4,
          "unit": "stk",
          "role": "protein",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "parmesan",
          "label": "Revet parmesan (til servering)",
          "amount": 40,
          "unit": "g",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "serve",
          "sodiumPer100g": 1500,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Del friske tomater i to, vend dem i litt olje og salt, og stek dem på 200 °C i 20–25 minutter til de er myke og lett karamelliserte.",
        "Finhakk løk, gulrot og selleri til en soffritto, og surr den myk i olivenolje på middels varme i 8–10 minutter. Ha i hvitløken mot slutten.",
        "Rør inn tomatpuré, og la den steke med. Tilsett de ovnsbakte tomatene, passata, kraft, balsamico, sukker og salt.",
        "La suppa småkoke på svak varme i 25–30 minutter. Kjør den glatt med stavmikser, og sil den gjerne for en helt fløyelsmyk konsistens.",
        "Kok makaronien al dente og eggene i 8 minutter. Rør fløten inn i suppa, smak til, og ha i makaronien.",
        "Server med et halvt egg, litt revet parmesan og frisk basilikum i hver skål."
      ]
    }
  },
  "swapOptions": {
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 1,
        "unit": "ss",
        "note": "Melkefri surring – oppfører seg som smør."
      },
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (nøytral, melkefri)",
        "amount": 1,
        "unit": "ss",
        "note": "Nøytral olje; tåler god varme."
      }
    ],
    "olive_oil": [
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (nøytral)",
        "amount": 2,
        "unit": "ss",
        "note": "Nøytral steking; tåler høy varme."
      }
    ],
    "chopped_tomatoes": [
      {
        "id": "passata",
        "label": "Passata (glattere suppe)",
        "amount": 8,
        "unit": "dl",
        "sodiumPer100g": 80,
        "taste": {
          "sour": 2,
          "sweet": 1,
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Siktet tomat gir en jevnere, glattere suppe uten biter."
      }
    ],
    "stock": [
      {
        "id": "bouillon",
        "label": "Buljongterning + vann (raskere)",
        "amount": 6,
        "unit": "dl",
        "sodiumPer100g": 350,
        "taste": {
          "umami": 1
        },
        "note": "Raskere og saltere – salt justeres automatisk."
      }
    ],
    "milk": [
      {
        "id": "plant_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 1,
        "unit": "dl",
        "note": "Nøytral, melkefri base for mildhet."
      }
    ],
    "cream": [
      {
        "id": "plant_cream",
        "label": "Plantefløte (melkefri)",
        "amount": 1,
        "unit": "dl",
        "note": "Soya- eller havrebasert; gir samme kremethet, melkefri."
      },
      {
        "id": "milk_light",
        "label": "Melk (lettere)",
        "amount": 1,
        "unit": "dl",
        "allergens": [
          "dairy"
        ],
        "note": "Lettere alternativ til fløte – litt mindre fyldig."
      }
    ],
    "macaroni": [
      {
        "id": "gf_pasta",
        "label": "Glutenfri makaroni/pasta",
        "amount": 150,
        "unit": "g",
        "note": "Mais-/risbasert; kok for seg og ha i ved servering så den ikke blir grøtete."
      }
    ],
    "balsamic": [
      {
        "id": "lemon",
        "label": "Sitronsaft (frisk syre)",
        "amount": 1,
        "unit": "ss",
        "note": "Friskere, lysere syre enn balsamico."
      }
    ],
    "parmesan": [
      {
        "id": "grana_padano",
        "label": "Grana Padano (mildere, rimeligere)",
        "amount": 40,
        "unit": "g",
        "sodiumPer100g": 600,
        "allergens": [
          "dairy"
        ],
        "taste": {
          "umami": 2
        },
        "note": "Mildere og rimeligere hardost."
      },
      {
        "id": "vegan_parmesan",
        "label": "Vegansk parmesan (melkefri)",
        "amount": 40,
        "unit": "g",
        "sodiumPer100g": 700,
        "taste": {
          "umami": 1
        },
        "note": "Melkefri; salt justeres automatisk."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "butter": 0.95,
    "olive_oil": 0.92,
    "rapeseed_oil": 0.92,
    "margarine": 0.95,
    "tomato_paste": 1.1,
    "passata": 1.05,
    "stock": 1,
    "bouillon": 1,
    "milk": 1.03,
    "plant_milk": 1,
    "milk_light": 1.03,
    "cream": 1,
    "plant_cream": 1,
    "sugar": 0.85,
    "salt_added": 1.2,
    "balsamic": 1.1,
    "lemon": 1.02
  },
  "pieceWeight": {
    "onion": 110,
    "carrot": 70,
    "celery": 50,
    "garlic": 5,
    "egg": 55
  },
  "unitOptions": {
    "butter": [
      "ss",
      "ts",
      "g"
    ],
    "olive_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "margarine": [
      "ss",
      "ts",
      "g"
    ],
    "tomato_paste": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "passata": [
      "dl",
      "ml",
      "g"
    ],
    "stock": [
      "dl",
      "ml",
      "g"
    ],
    "bouillon": [
      "dl",
      "ml",
      "g"
    ],
    "milk": [
      "dl",
      "ml",
      "g"
    ],
    "plant_milk": [
      "dl",
      "ml",
      "g"
    ],
    "milk_light": [
      "dl",
      "ml",
      "g"
    ],
    "cream": [
      "dl",
      "ml",
      "g"
    ],
    "plant_cream": [
      "dl",
      "ml",
      "g"
    ],
    "sugar": [
      "ts",
      "ss",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "balsamic": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "lemon": [
      "ss",
      "ts",
      "ml",
      "g"
    ]
  },
  "bulkRoles": [
    "liquid",
    "vegetable",
    "starch"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    },
    {
      "axis": "sweet",
      "id": "sugar"
    }
  ],
  "requireRoles": [
    "acid"
  ],
  "tasteMessages": {
    "sour": "Mindre friskhet – la suppa koke litt lenger, eller ha i en skvett tomat, sitron eller balsamico.",
    "sweet": "Mindre rundhet mot tomatsyren – en klype sukker eller litt revet gulrot balanserer.",
    "umami": "Mindre dybde – litt ekstra tomatpuré, kraft eller revet ost hjelper."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    },
    "sweet": {
      "down": "Suppa ble søtere – vi reduserte sukkeret litt for å holde balansen mot tomatsyren.",
      "up": "Mindre naturlig sødme – vi økte sukkeret litt for å runde av tomatsyren."
    }
  }
};
