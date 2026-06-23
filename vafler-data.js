/* ===== Vafler (norske hjertevafler) – datamodell =====
   Norske hjertevafler med kardemomme i tre nivåer (enkel hverdagsrøre → kulturmelk
   og brunet smør). Søt-lever på sukker (recipe-balance.js). Allergener: gluten
   (hvetemel→glutenfri), meieri (melk/smør/rømme→plantebasert), egg (→bakepulver).
   Generert fra recipes-pending/vafler.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "vafler",
  "yieldNoun": "vafler",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 10,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 3,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 4,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Spe litt etter litt for en klumpfri røre.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 2,
          "unit": "stk",
          "role": "binder",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "sugar",
          "label": "Sukker",
          "amount": 2,
          "unit": "ss",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "baking_powder",
          "label": "Bakepulver",
          "amount": 1,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "butter",
          "label": "Smeltet smør",
          "amount": 50,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Avkjøl litt før du rører det i røren.",
          "allergens": [
            "dairy"
          ]
        }
      ],
      "steps": [
        "Visp sammen mel, sukker, bakepulver og salt.",
        "Spe med halvparten av melken til en jevn, tykk røre uten klumper, og visp så inn egg og resten av melken.",
        "Rør inn det smeltede smøret til slutt, og la røren svelle ~15 minutter.",
        "Stek gyllne vafler i et forvarmet vaffeljern. Server med syltetøy og rømme eller brunost."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 10,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 3,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 4,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 3,
          "unit": "stk",
          "role": "binder",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Et ekstra egg gir fyldigere vafler.",
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "sugar",
          "label": "Sukker",
          "amount": 3,
          "unit": "ss",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cardamom",
          "label": "Malt kardemomme",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "baking_powder",
          "label": "Bakepulver",
          "amount": 1,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "vanilla_sugar",
          "label": "Vaniljesukker",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "butter",
          "label": "Smeltet smør",
          "amount": 75,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Avkjøl litt før du rører det i røren.",
          "allergens": [
            "dairy"
          ]
        }
      ],
      "steps": [
        "Visp sammen mel, sukker, kardemomme, vaniljesukker, bakepulver og salt.",
        "Spe med halvparten av melken til en tykk, klumpfri røre, og visp så inn egg og resten av melken.",
        "Rør inn det smeltede smøret, og la røren hvile ~20–30 minutter så melet sveller.",
        "Stek gyllne hjertevafler i et godt forvarmet vaffeljern. Server med rømme og syltetøy, eller brunost."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 10,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 3,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "cultured_milk",
          "label": "Kulturmelk (eller kefir)",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Syren gjør vaflene møre og litt syrlige; reagerer med bakepulveret.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "sour_cream",
          "label": "Rømme",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Gir fyldige, ekstra møre vafler.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 3,
          "unit": "stk",
          "role": "binder",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "sugar",
          "label": "Sukker",
          "amount": 3,
          "unit": "ss",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cardamom",
          "label": "Nystøtt kardemomme",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          },
          "note": "Nystøtte frø gir mest aroma."
        },
        {
          "id": "baking_powder",
          "label": "Bakepulver",
          "amount": 1,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "vanilla_sugar",
          "label": "Vaniljesukker",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "brown_butter",
          "label": "Brunet smør",
          "amount": 75,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Brun smøret til det dufter nøtteaktig, og avkjøl litt før det røres i.",
          "allergens": [
            "dairy"
          ]
        }
      ],
      "steps": [
        "Brun smøret til det er gyllent og nøtteaktig, og avkjøl litt.",
        "Visp sammen mel, sukker, kardemomme, vaniljesukker, bakepulver og salt.",
        "Spe med kulturmelken til en tykk, klumpfri røre, og visp inn egg, rømme og det brunede smøret.",
        "La røren hvile minst 30 minutter, gjerne i kjøleskapet (eller lag den kvelden før).",
        "Stek gyllne, møre hjertevafler i et godt forvarmet vaffeljern. Server med rømme, syltetøy eller brunost."
      ]
    }
  },
  "swapOptions": {
    "flour": [
      {
        "id": "gf_flour",
        "label": "Glutenfri melblanding",
        "amount": 3,
        "unit": "dl",
        "note": "Bruk en blanding med bindemiddel; la røren hvile litt lenger og spe med litt mer melk."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 4,
        "unit": "dl",
        "note": "Nøytral, melkefri base."
      },
      {
        "id": "lactosefree_milk",
        "label": "Laktosefri melk",
        "amount": 4,
        "unit": "dl",
        "allergens": [
          "dairy"
        ]
      }
    ],
    "cultured_milk": [
      {
        "id": "plant_cultured",
        "label": "Plantebasert kefir/syrnet havredrikk (melkefri)",
        "amount": 3,
        "unit": "dl",
        "note": "Melkefritt; behold syrligheten."
      },
      {
        "id": "milk_lemon",
        "label": "Melk med en skvett sitron",
        "amount": 3,
        "unit": "dl",
        "note": "Surn melken med 1 ss sitron per dl; ligner kulturmelk.",
        "allergens": [
          "dairy"
        ]
      }
    ],
    "sour_cream": [
      {
        "id": "plant_creme",
        "label": "Plantebasert rømme (melkefri)",
        "amount": 1,
        "unit": "dl",
        "note": "Melkefritt alternativ."
      }
    ],
    "egg": [
      {
        "id": "extra_baking_powder",
        "label": "Ekstra bakepulver + 0,5 dl plantedrikk (eggfri)",
        "amount": 1,
        "unit": "ts",
        "note": "Per egg: 0,5 ts ekstra bakepulver og litt mer plantedrikk for binding og luft."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 50,
        "unit": "g",
        "note": "Smelt som smør; melkefritt."
      },
      {
        "id": "oil",
        "label": "Nøytral olje (melkefri)",
        "amount": 0.5,
        "unit": "dl",
        "note": "Raps-/solsikkeolje; melkefri base."
      }
    ],
    "brown_butter": [
      {
        "id": "margarine_brown",
        "label": "Margarin (melkefri)",
        "amount": 75,
        "unit": "g",
        "note": "Brunes ikke som smør, men gir fett; melkefritt."
      },
      {
        "id": "oil_complex",
        "label": "Nøytral olje (melkefri)",
        "amount": 0.75,
        "unit": "dl",
        "note": "Melkefri base for kompleks-røren."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "flour": 0.55,
    "gf_flour": 0.55,
    "extra_baking_powder": 0.9,
    "milk": 1.03,
    "oat_milk": 1.03,
    "lactosefree_milk": 1.03,
    "cultured_milk": 1.03,
    "plant_cultured": 1.03,
    "milk_lemon": 1.03,
    "sour_cream": 1,
    "plant_creme": 1,
    "sugar": 0.85,
    "cardamom": 0.5,
    "vanilla_sugar": 0.7,
    "butter": 0.95,
    "brown_butter": 0.95,
    "margarine": 0.95,
    "margarine_brown": 0.95,
    "oil": 0.92,
    "oil_complex": 0.92,
    "salt": 1.2
  },
  "pieceWeight": {
    "egg": 55
  },
  "unitOptions": {
    "flour": [
      "dl",
      "ml",
      "g"
    ],
    "gf_flour": [
      "dl",
      "ml",
      "g"
    ],
    "extra_baking_powder": [
      "ts",
      "g"
    ],
    "milk": [
      "dl",
      "ml",
      "g"
    ],
    "oat_milk": [
      "dl",
      "ml",
      "g"
    ],
    "lactosefree_milk": [
      "dl",
      "ml",
      "g"
    ],
    "cultured_milk": [
      "dl",
      "ml",
      "g"
    ],
    "plant_cultured": [
      "dl",
      "ml",
      "g"
    ],
    "milk_lemon": [
      "dl",
      "ml",
      "g"
    ],
    "sour_cream": [
      "dl",
      "ml",
      "g"
    ],
    "plant_creme": [
      "dl",
      "ml",
      "g"
    ],
    "sugar": [
      "ss",
      "ts",
      "g"
    ],
    "cardamom": [
      "ts",
      "g"
    ],
    "vanilla_sugar": [
      "ts",
      "g"
    ],
    "butter": [
      "g"
    ],
    "brown_butter": [
      "g"
    ],
    "margarine": [
      "g"
    ],
    "margarine_brown": [
      "g"
    ],
    "oil": [
      "dl",
      "ml",
      "g"
    ],
    "oil_complex": [
      "dl",
      "ml",
      "g"
    ],
    "salt": [
      "ts",
      "g"
    ]
  },
  "bulkRoles": [
    "bulk",
    "liquid",
    "binder"
  ],
  "levers": [
    {
      "axis": "sweet",
      "id": "sugar"
    }
  ],
  "requireRoles": [],
  "tasteMessages": {
    "sweet": "Vaflene blir mindre søte – server gjerne med syltetøy, brunost eller sukker på toppen."
  },
  "leverMessages": {
    "sweet": {
      "down": "Røren ble søtere – vi reduserte sukkeret litt for å holde balansen.",
      "up": "Du tok bort noe sødme – vi økte sukkeret litt igjen. Smak til."
    }
  }
};
