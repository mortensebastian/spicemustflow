/* ===== Kremet kyllingsuppe – datamodell =====
Kremet kyllingsuppe – norsk hverdagsklassiker i tre nivaaer (enkel/medium/kompleks). Ren data (window.RECIPE) for recipe-adapter.js.
   Generert fra recipes-pending/kyllingsuppe.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "kyllingsuppe",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "butter",
          "label": "Smør (eller nøytral olje)",
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
          "id": "chicken_fillet",
          "label": "Kyllingfilet i biter (eller kyllingstrimler)",
          "amount": 500,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "leek",
          "label": "Purre i skiver",
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
          "id": "carrot",
          "label": "Gulrot i skiver",
          "amount": 2,
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
          "id": "curry",
          "label": "Karri (valgfritt)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Gir den klassiske norske kyllingsuppe-tonen – kan utelates for en helt mild, kremet suppe."
        },
        {
          "id": "bouillon",
          "label": "Hønsebuljong (terning + vann)",
          "amount": 8,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "cream",
          "label": "Matfløte (eller crème fraîche)",
          "amount": 2,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "note": "Rør inn mot slutten og la suppa bare så vidt småkoke, ikke fosskoke."
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Fres kyllingbitene raskt i smør i en gryte på god varme til de er hvite på utsiden, uten å brune dem hardt.",
        "Ha i purre og gulrot, og fres et par minutter. Rør inn karrien og la den steke med et halvt minutt til det dufter.",
        "Hell over hønsebuljongen, kok opp, og la suppa småkoke i 8–10 minutter til kyllingen er gjennomkokt og grønnsakene møre.",
        "Skru ned varmen og rør inn fløten. La suppa så vidt småkoke – ikke fosskok, da kan fløten skille seg.",
        "Smak til med salt og pepper, og server, gjerne med litt brød til."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "butter",
          "label": "Smør (til surring)",
          "amount": 2,
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
          "id": "leek",
          "label": "Purre i skiver",
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
          "id": "carrot",
          "label": "Gulrot i skiver",
          "amount": 2,
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
          "id": "mushroom",
          "label": "Sjampinjong i skiver",
          "amount": 200,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "chicken_thigh",
          "label": "Kyllinglårfilet i biter",
          "amount": 500,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "gluten"
          ],
          "note": "Rør inn i det surrede smøret før du sper med kraft – det binder suppa til en fyldig konsistens."
        },
        {
          "id": "stock",
          "label": "Kyllingkraft (eller buljongterning + vann)",
          "amount": 8,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 200,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "curry",
          "label": "Karri (valgfritt)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Klassisk norsk touch – kan utelates for en helt mild suppe."
        },
        {
          "id": "cream",
          "label": "Matfløte",
          "amount": 2,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "note": "Tilsettes mot slutten; la suppa bare så vidt småkoke etterpå."
        },
        {
          "id": "parsley",
          "label": "Frisk persille, hakket (til servering)",
          "amount": 1,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Finhakk løk og hvitløk, og skjær purre, gulrot og sopp i skiver. Surr løk, purre og gulrot myke i smøret på middels varme i 5–6 minutter.",
        "Ha i sopp og hvitløk, og fres et par minutter til soppen faller sammen. Strø over hvetemelet og karrien, og la det steke med et minutt.",
        "Spe litt etter litt med kyllingkraften mens du rører, så jevningen blir klumpfri. Kok opp.",
        "Legg i kyllingbitene, og la suppa småkoke i 10–12 minutter til kyllingen er gjennomkokt og suppa har tyknet lett.",
        "Skru ned varmen og rør inn fløten. Smak til med salt og pepper, og la så vidt trekke.",
        "Strø over frisk persille, og server."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "butter",
          "label": "Smør (til surring og jevning)",
          "amount": 2,
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
          "id": "shallot",
          "label": "Sjalottløk, finhakket",
          "amount": 2,
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
          "id": "leek",
          "label": "Purre i skiver",
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
          "id": "carrot",
          "label": "Gulrot i biter",
          "amount": 2,
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
          "id": "celeriac",
          "label": "Sellerirot i terninger",
          "amount": 150,
          "unit": "g",
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
          "id": "mushroom",
          "label": "Aromasopp eller sjampinjong i skiver",
          "amount": 250,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          },
          "note": "Brunes godt for seg for dypere smak før den vendes inn."
        },
        {
          "id": "chicken_thigh",
          "label": "Kyllinglårfilet, benfri, i biter",
          "amount": 500,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "gluten"
          ],
          "note": "Lag en lys smørjevning før du sper med kraft – gir kropp uten å tynge."
        },
        {
          "id": "stock",
          "label": "Hjemmelaget kyllingkraft",
          "amount": 9,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 120,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "note": "Egen kraft løfter suppa mest av alt – se vår oppskrift på kyllingkraft."
        },
        {
          "id": "thyme",
          "label": "Frisk timian",
          "amount": 2,
          "unit": "kvist",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "cream",
          "label": "Kremfløte",
          "amount": 2,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "egg_yolk",
          "label": "Eggeplomme (til legering)",
          "amount": 2,
          "unit": "stk",
          "role": "fat",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "egg"
          ],
          "note": "Pisk eggeplommene med litt av fløten, spe med varm suppe, og rør blandingen tilbake i gryta uten å koke – gir en fløyelsmyk, blank suppe."
        },
        {
          "id": "parsley",
          "label": "Frisk persille eller gressløk (til servering)",
          "amount": 1,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Brun soppen godt i en tørr panne, og sett den til side. Surr sjalottløk, purre, gulrot og sellerirot myke i smøret i en stor gryte i 8–10 minutter, og ha i hvitløken mot slutten.",
        "Strø over hvetemelet og lag en lys jevning. Spe litt etter litt med den hjemmelagde kyllingkraften mens du rører, så den blir helt klumpfri. Kok opp, og ha i timian.",
        "Legg i kyllingbitene og den brunede soppen, og la suppa småkoke på svak varme i 12–15 minutter til kyllingen er mør og gjennomkokt.",
        "Ta gryta av varmen. Pisk eggeplommene sammen med litt av fløten i en bolle, spe forsiktig med noen øser varm suppe, og rør blandingen tilbake i gryta sammen med resten av fløten.",
        "Varm suppa forsiktig opp igjen uten å la den koke – da tykner legeringen og gir en blank, fløyelsmyk konsistens. Smak til med salt og pepper.",
        "Fjern timiankvistene, strø over frisk persille eller gressløk, og server."
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
    "chicken_fillet": [
      {
        "id": "chicken_thigh",
        "label": "Kyllinglårfilet (saftigere)",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Saftigere og mer smaksrik; tåler litt lengre koketid uten å bli tørr."
      },
      {
        "id": "leftover_chicken",
        "label": "Rester av stekt kylling",
        "amount": 400,
        "unit": "g",
        "sodiumPer100g": 70,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Plukk i biter og rør inn mot slutten – trenger bare å varmes gjennom."
      },
      {
        "id": "turkey",
        "label": "Kalkun i biter",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Magrere; god måte å bruke opp kalkunrester på, f.eks. etter jul."
      }
    ],
    "chicken_thigh": [
      {
        "id": "chicken_fillet",
        "label": "Kyllingfilet (magrere)",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "note": "Magrere og raskere; legg den i mot slutten så den ikke blir tørr."
      },
      {
        "id": "leftover_chicken",
        "label": "Rester av stekt kylling",
        "amount": 400,
        "unit": "g",
        "sodiumPer100g": 70,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Rør inn helt til slutt, bare til det er varmt."
      }
    ],
    "bouillon": [
      {
        "id": "stock",
        "label": "Hjemmelaget kyllingkraft (mer smak)",
        "amount": 8,
        "unit": "dl",
        "sodiumPer100g": 120,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Gir dypere smak enn terning – se vår egen oppskrift på kyllingkraft."
      }
    ],
    "stock": [
      {
        "id": "bouillon",
        "label": "Buljongterning + vann (raskere)",
        "amount": 8,
        "unit": "dl",
        "sodiumPer100g": 300,
        "taste": {
          "umami": 1
        },
        "note": "Raskere og saltere – salt justeres automatisk."
      }
    ],
    "cream": [
      {
        "id": "plant_cream",
        "label": "Plantefløte (melkefri)",
        "amount": 2,
        "unit": "dl",
        "note": "Havre- eller soyabasert; gir samme kremethet, melkefri."
      },
      {
        "id": "creme_fraiche",
        "label": "Crème fraîche (friskere, syrlig)",
        "amount": 2,
        "unit": "dl",
        "allergens": [
          "dairy"
        ],
        "note": "Litt syrligere og fyldigere; rør inn mot slutten så den ikke skiller seg."
      }
    ],
    "flour": [
      {
        "id": "cornstarch",
        "label": "Maizena (glutenfri)",
        "amount": 1,
        "unit": "ss",
        "note": "Rør ut i litt kaldt vann og visp inn i den kokende suppa – bruk omtrent halvparten av melmengden."
      },
      {
        "id": "potato_flour",
        "label": "Potetmel (glutenfri)",
        "amount": 1,
        "unit": "ss",
        "note": "Rør ut i kaldt vann og visp inn til slutt; tykner raskt, så bruk litt."
      }
    ],
    "celeriac": [
      {
        "id": "fennel",
        "label": "Fennikel (sellerifri)",
        "amount": 150,
        "unit": "g",
        "tradition": "non-traditional",
        "note": "Sellerifritt alternativ med en mild, søtlig anistone.",
        "taste": {
          "sweet": 1
        }
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "butter": 0.95,
    "margarine": 0.95,
    "rapeseed_oil": 0.92,
    "bouillon": 1,
    "stock": 1,
    "cream": 1,
    "plant_cream": 1,
    "creme_fraiche": 1,
    "flour": 0.55,
    "cornstarch": 0.55,
    "potato_flour": 0.6,
    "salt_added": 1.2
  },
  "pieceWeight": {
    "onion": 110,
    "leek": 150,
    "carrot": 70,
    "shallot": 30,
    "garlic": 5
  },
  "unitOptions": {
    "butter": [
      "ss",
      "ts",
      "g"
    ],
    "margarine": [
      "ss",
      "ts",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "bouillon": [
      "dl",
      "ml",
      "g"
    ],
    "stock": [
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
    "creme_fraiche": [
      "dl",
      "ml",
      "g"
    ],
    "flour": [
      "ss",
      "ts",
      "g"
    ],
    "cornstarch": [
      "ss",
      "ts",
      "g"
    ],
    "potato_flour": [
      "ss",
      "ts",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ]
  },
  "bulkRoles": [
    "liquid",
    "protein",
    "vegetable"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    }
  ],
  "requireRoles": [],
  "tasteMessages": {
    "umami": "Suppa blir mindre fyldig – vurder litt mer kraft, buljong eller sopp for å bygge dybde."
  },
  "leverMessages": {
    "salt": {
      "down": "Suppa ble saltere – vi reduserte tilsatt salt automatisk. Smak til på slutten.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til på slutten."
    }
  }
};
