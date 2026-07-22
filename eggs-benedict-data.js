/* ===== Eggs Benedict – datamodell =====
Eggs Benedict – posjert egg og hollandaise i tre nivåer (enkel/medium/kompleks). Data for den delte oppskriftsmotoren.
   Generert fra recipes-pending/eggs-benedict.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "eggs-benedict",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "bread",
          "label": "Loff eller toastbrød",
          "amount": 4,
          "unit": "stk",
          "role": "bread",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "bacon",
          "label": "Bacon",
          "amount": 150,
          "unit": "g",
          "role": "protein",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 1500,
          "removable": true,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "eggs",
          "label": "Egg (til posjering)",
          "amount": 4,
          "unit": "stk",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "creme_fraiche",
          "label": "Crème fraîche (til snarvei-hollandaise)",
          "amount": 2,
          "unit": "dl",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sour": 1
          }
        },
        {
          "id": "egg_yolk",
          "label": "Eggeplomme (til hollandaise)",
          "amount": 1,
          "unit": "stk",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "maizena",
          "label": "Maizena (jevning)",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false
        },
        {
          "id": "lemon_juice",
          "label": "Sitronsaft",
          "amount": 1,
          "unit": "ss",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 3
          }
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Kok opp vann til posjering og tilsett en spiseskje eddik. Stek baconet sprøtt, og hold det varmt.",
        "Lag snarvei-hollandaise: visp sammen crème fraîche, eggeplomme, maizena og sitronsaft i en liten kjele. Varm forsiktig på middels varme under stadig visping i 5–8 minutter til sausen tykner – la den aldri koke. Smak til med salt.",
        "Skru ned til vannet så vidt småkoker. Rør opp en virvel, knekk i ett egg om gangen, og la trekke cirka 3 minutter. Løft opp med hullsleiv.",
        "Rist brødet, legg på bacon og et posjert egg, og skje hollandaisen over. Server straks."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "bread",
          "label": "Engelske muffins",
          "amount": 4,
          "unit": "stk",
          "role": "bread",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "bacon",
          "label": "Bacon",
          "amount": 200,
          "unit": "g",
          "role": "protein",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 1500,
          "removable": true,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "eggs",
          "label": "Egg (til posjering)",
          "amount": 4,
          "unit": "stk",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "butter",
          "label": "Smør (til hollandaise)",
          "amount": 150,
          "unit": "g",
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
          "label": "Eggeplommer (til hollandaise)",
          "amount": 3,
          "unit": "stk",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "lemon_juice",
          "label": "Sitronsaft",
          "amount": 1,
          "unit": "ss",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 3
          }
        },
        {
          "id": "white_wine_vinegar",
          "label": "Hvitvinseddik",
          "amount": 1,
          "unit": "ts",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "taste": {
            "sour": 2
          }
        },
        {
          "id": "spinach",
          "label": "Babyspinat (valgfritt)",
          "amount": 100,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "white_pepper",
          "label": "Hvit pepper",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Kok opp vann til posjering og tilsett en spiseskje eddik. Stek baconet sprøtt. Surr eventuelt spinaten raskt sammen og hold varmt.",
        "Lag klassisk hollandaise: pisk eggeplommer med sitronsaft, hvitvinseddik og en skvett vann i vannbad til lys og luftig. Ta bollen av varmen og spe i smeltet, lunkent smør i en tynn stråle under stadig visping til en tykk, blank saus. Smak til med salt og hvit pepper.",
        "Skru ned til vannet så vidt småkoker. Rør opp en virvel, knekk i ett egg om gangen, og posjer cirka 3 minutter.",
        "Del og rist muffinsene, legg på bacon (og spinat), topp med posjert egg og rikelig hollandaise. Server straks."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "bread",
          "label": "Engelske muffins",
          "amount": 4,
          "unit": "stk",
          "role": "bread",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "bacon",
          "label": "Bacon",
          "amount": 200,
          "unit": "g",
          "role": "protein",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 1500,
          "removable": true,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "eggs",
          "label": "Egg (til posjering)",
          "amount": 4,
          "unit": "stk",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "butter",
          "label": "Smør (klaret, til hollandaise)",
          "amount": 200,
          "unit": "g",
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
          "label": "Eggeplommer (til hollandaise)",
          "amount": 4,
          "unit": "stk",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "shallot",
          "label": "Sjalott, finhakket (til reduksjon)",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "white_wine_vinegar",
          "label": "Hvitvinseddik (til reduksjon)",
          "amount": 2,
          "unit": "ss",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2
          }
        },
        {
          "id": "white_pepper",
          "label": "Hvit pepper, knust",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "lemon_juice",
          "label": "Sitronsaft",
          "amount": 1,
          "unit": "ss",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "taste": {
            "sour": 3
          }
        },
        {
          "id": "cayenne",
          "label": "Cayennepepper (en klype)",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true
        },
        {
          "id": "spinach",
          "label": "Babyspinat",
          "amount": 120,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Lag reduksjonen: kok inn finhakket sjalott, hvitvinseddik og knust hvit pepper til det nesten er tørt, og sil av.",
        "Klar smøret: smelt det sakte, skum av, og hell forsiktig av det klare fettet så melkerestene blir igjen i bunnen.",
        "Pisk eggeplommer med reduksjonen og en skvett vann i vannbad til en båndtykk sabayon. Ta bollen av varmen og spe i det lunkne, klarede smøret i tynn stråle til en blank, tykk hollandaise. Smak til med sitronsaft, salt og en klype cayenne.",
        "Kok opp vann med en spiseskje eddik, skru ned til småkoking, virvle opp vannet, og posjer eggene ett om gangen i cirka 3 minutter. Surr spinaten lett sammen.",
        "Rist muffinsene, legg på bacon og spinat, topp med posjert egg og hollandaise. Server straks."
      ]
    }
  },
  "swapOptions": {
    "bread": [
      {
        "id": "gf_bread",
        "label": "Glutenfritt brød/muffins",
        "amount": 4,
        "unit": "stk",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Glutenfritt alternativ – rist godt så det holder på hollandaisen."
      },
      {
        "id": "bagel",
        "label": "Bagel",
        "amount": 4,
        "unit": "stk",
        "allergens": [
          "gluten"
        ],
        "tradition": "non-traditional",
        "note": "Fastere base som tåler mye saus."
      }
    ],
    "bacon": [
      {
        "id": "ham",
        "label": "Kokt skinke",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 900,
        "taste": {
          "umami": 1
        },
        "tradition": "traditional",
        "note": "Den originale «Benedict»-varianten."
      },
      {
        "id": "salmon",
        "label": "Røkt laks (eggs royale)",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 700,
        "allergens": [
          "fish"
        ],
        "taste": {
          "umami": 1
        },
        "tradition": "regional",
        "note": "Nordisk vri – da heter retten eggs royale. Gjerne med litt dill."
      }
    ],
    "creme_fraiche": [
      {
        "id": "plant_creme",
        "label": "Plantefløte (melkefri)",
        "amount": 2,
        "unit": "dl",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Melkefri base til snarvei-hollandaisen."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 150,
        "unit": "g",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Melkefri hollandaise – samme teknikk."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "creme_fraiche": 1,
    "plant_creme": 1,
    "lemon_juice": 1,
    "white_wine_vinegar": 1.01,
    "maizena": 0.55,
    "salt_added": 1.2
  },
  "pieceWeight": {
    "egg": 55,
    "egg_yolk": 18,
    "bread": 60,
    "shallot": 25
  },
  "unitOptions": {
    "creme_fraiche": [
      "dl",
      "ml",
      "g"
    ],
    "plant_creme": [
      "dl",
      "ml",
      "g"
    ],
    "lemon_juice": [
      "ss",
      "ml",
      "g"
    ],
    "white_wine_vinegar": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "maizena": [
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
    "protein",
    "bread",
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
    "umami": "Uten baconet blir retten mildere og mer vegetarisk (eggs florentine) – litt ekstra salt og pepper i hollandaisen løfter smaken."
  },
  "leverMessages": {
    "salt": {
      "down": "Baconet/skinken salter mye – vi reduserte tilsatt salt automatisk. Smak til hollandaisen.",
      "up": "Du tok bort noe av det salte pålegget – vi økte tilsatt salt litt. Smak til."
    }
  }
};
