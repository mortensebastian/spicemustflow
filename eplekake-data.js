/* ===== Eplekake (saftig norsk eplekake) – datamodell =====
   Saftig norsk eplekake i tre nivåer (rask rørekake → kanel + mer smør →
   brunet smør / mandel). Sweet-lever på sukker, yieldNoun stykker. Høst-sesong.
   Allergener: gluten, meieri, egg; nøtter (mandel) kun i kompleks.
   Generert fra recipes-pending/eplekake.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "eplekake",
  "yieldNoun": "stykker",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 12,
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
          "id": "sugar",
          "label": "Sukker",
          "amount": 2,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 3
          }
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
          "id": "butter",
          "label": "Smeltet smør",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Avkjøl litt før det røres i.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 1,
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
          "id": "baking_powder",
          "label": "Bakepulver",
          "amount": 2,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Hevemiddel – skaleres med melet."
        },
        {
          "id": "apples",
          "label": "Epler (skrelt, i båter)",
          "amount": 3,
          "unit": "stk",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Litt syrlige, faste epler – legges på toppen."
        },
        {
          "id": "cinnamon_sugar",
          "label": "Kanelsukker (til topping)",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Kanel rørt i sukker; strøs over toppen.",
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
        }
      ],
      "steps": [
        "Sett ovnen på 175 °C og kle en springform (22–24 cm) med bakepapir.",
        "Rør sammen smeltet smør og sukker, og pisk inn eggene.",
        "Vend inn mel, bakepulver og salt sammen med melken til en jevn røre.",
        "Hell røra i formen, legg eplebåtene på toppen og strø over kanelsukker.",
        "Stek midt i ovnen ca. 35–40 minutter til en kakepinne kommer ut med noen fuktige smuler. Avkjøl litt før servering."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 12,
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
          "id": "sugar",
          "label": "Sukker",
          "amount": 2,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 3
          }
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
          "id": "butter",
          "label": "Smeltet smør",
          "amount": 150,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Ordentlig smørmengde gir saftig kake.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 1,
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
          "id": "baking_powder",
          "label": "Bakepulver",
          "amount": 2,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "cinnamon",
          "label": "Malt kanel",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "Kanel og eple hører sammen."
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
          "id": "apples",
          "label": "Epler (skrelt, i terninger og båter)",
          "amount": 3,
          "unit": "stk",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Vend halvparten inn i røra, legg resten i båter på toppen."
        },
        {
          "id": "cinnamon_sugar",
          "label": "Kanelsukker (til topping)",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Strøs over toppen før steking.",
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
        }
      ],
      "steps": [
        "Sett ovnen på 175 °C og kle en springform (22–24 cm) med bakepapir.",
        "Rør smeltet smør og sukker sammen, og pisk inn eggene til en luftig røre.",
        "Bland mel, bakepulver, kanel, vaniljesukker og salt, og vend det inn vekselvis med melken.",
        "Vend halvparten av eplene (i terninger) inn i røra, hell i formen, og legg resten som båter på toppen. Strø over kanelsukker.",
        "Stek midt i ovnen ca. 40 minutter til kakepinnen har noen fuktige smuler. Avkjøl litt og server gjerne lun med vaniljeis eller krem."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 12,
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
          "id": "sugar",
          "label": "Sukker",
          "amount": 2,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 3
          }
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
          "id": "brown_butter",
          "label": "Brunet smør",
          "amount": 150,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Brun smøret til det dufter nøtteaktig, og avkjøl litt før det røres i.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 1,
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
          "id": "baking_powder",
          "label": "Bakepulver",
          "amount": 2,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "almond_flour",
          "label": "Malte mandler",
          "amount": 0.5,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Gir fuktig, fyldig bunn med mandelpreg.",
          "allergens": [
            "nuts"
          ]
        },
        {
          "id": "cinnamon",
          "label": "Malt kanel",
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
          "id": "apples",
          "label": "Epler (skrelt, i tynne båter)",
          "amount": 4,
          "unit": "stk",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Legges i et pent vifteformet mønster på toppen."
        },
        {
          "id": "cinnamon_sugar",
          "label": "Kanelsukker (til topping)",
          "amount": 1.5,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Strøs over eplemønsteret for karamellisert overflate.",
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
        }
      ],
      "steps": [
        "Brun smøret til det er gyllent og nøtteaktig, og avkjøl litt. Sett ovnen på 170 °C og kle en springform (22–24 cm) med bakepapir.",
        "Pisk egg og sukker luftig, og rør inn det brunede smøret.",
        "Bland mel, malte mandler, bakepulver, kanel, vaniljesukker og salt, og vend det inn vekselvis med melken til en jevn røre.",
        "Hell røra i formen, og legg eplebåtene tett i et vifteformet mønster på toppen. Strø rikelig kanelsukker over.",
        "Stek midt i ovnen ca. 40–45 minutter til kakepinnen har noen fuktige smuler. Avkjøl litt, dryss på melis, og server lun med vaniljesaus eller iskrem."
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
        "note": "Bruk en blanding med bindemiddel; la røra hvile litt og spe med en skvett mer melk."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 1,
        "unit": "dl",
        "note": "Nøytral, melkefri base."
      },
      {
        "id": "lactosefree_milk",
        "label": "Laktosefri melk",
        "amount": 1,
        "unit": "dl",
        "allergens": [
          "dairy"
        ]
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 100,
        "unit": "g",
        "note": "Smelt som smør; melkefritt."
      },
      {
        "id": "oil",
        "label": "Nøytral olje (melkefri)",
        "amount": 1,
        "unit": "dl",
        "note": "Raps-/solsikkeolje; gir ekstra saftig kake."
      }
    ],
    "brown_butter": [
      {
        "id": "margarine_brown",
        "label": "Margarin (melkefri)",
        "amount": 150,
        "unit": "g",
        "note": "Brunes ikke som smør, men gir fett; melkefritt."
      },
      {
        "id": "oil_complex",
        "label": "Nøytral olje (melkefri)",
        "amount": 1.5,
        "unit": "dl",
        "note": "Melkefri base for kompleks-røra; gir saftig kake."
      }
    ],
    "egg": [
      {
        "id": "extra_baking_powder",
        "label": "Ekstra bakepulver + litt mer melk (eggfri)",
        "amount": 1,
        "unit": "ts",
        "note": "Per egg: 0,5 ts ekstra bakepulver og litt mer melk/plantedrikk for binding og luft."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "flour": 0.55,
    "gf_flour": 0.55,
    "almond_flour": 0.45,
    "sugar": 0.85,
    "milk": 1.03,
    "oat_milk": 1.03,
    "lactosefree_milk": 1.03,
    "butter": 0.95,
    "brown_butter": 0.95,
    "margarine": 0.95,
    "margarine_brown": 0.95,
    "oil": 0.92,
    "oil_complex": 0.92,
    "baking_powder": 0.9,
    "extra_baking_powder": 0.9,
    "cinnamon": 0.5,
    "vanilla_sugar": 0.7,
    "cinnamon_sugar": 0.85,
    "salt": 1.2
  },
  "pieceWeight": {
    "egg": 55,
    "apples": 150
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
    "almond_flour": [
      "dl",
      "ml",
      "g"
    ],
    "sugar": [
      "dl",
      "ml",
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
    "baking_powder": [
      "ts",
      "g"
    ],
    "extra_baking_powder": [
      "ts",
      "g"
    ],
    "cinnamon": [
      "ts",
      "g"
    ],
    "vanilla_sugar": [
      "ts",
      "g"
    ],
    "cinnamon_sugar": [
      "ss",
      "ts",
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
    "binder",
    "fruit"
  ],
  "levers": [
    {
      "axis": "sweet",
      "id": "sugar"
    }
  ],
  "requireRoles": [],
  "tasteMessages": {
    "sweet": "Kaka blir mindre søt – strø gjerne litt melis eller kanelsukker på toppen, eller server med en søt vaniljesaus."
  },
  "leverMessages": {
    "sweet": {
      "down": "Røra ble søtere – vi reduserte sukkeret litt for å holde balansen. Smak til.",
      "up": "Du tok bort noe sødme – vi økte sukkeret litt igjen. Smak til."
    }
  }
};
