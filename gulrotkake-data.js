/* ===== Saftig gulrotkake med ostekrem – datamodell =====
Saftig gulrotkake med ostekrem; tre nivåer, bakst-scaling (struktur=linear, krydder=nonlinear).
   Generert fra recipes-pending/gulrotkake.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "gulrotkake",
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
          "amount": 2.5,
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
          "id": "oil",
          "label": "Nøytral olje",
          "amount": 2,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Olje gir saftig kake som holder seg lenge."
        },
        {
          "id": "carrots",
          "label": "Gulrøtter, finrevne",
          "amount": 4,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Riv dem selv rett før baking for mest saft."
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
          "id": "cinnamon",
          "label": "Malt kanel",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
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
          "id": "cream_cheese_frosting",
          "label": "Ferdig ostekrem (eller melisglasur)",
          "amount": 1,
          "unit": "dl",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "note": "Snarvei: ferdig ostekrem fra butikk, eller rør melis med litt vann til glasur.",
          "allergens": [
            "dairy"
          ]
        }
      ],
      "steps": [
        "Sett ovnen på 180 °C og kle en liten langpanne (ca. 30×20 cm) med bakepapir.",
        "Pisk egg og sukker luftig, og rør inn oljen.",
        "Bland mel, bakepulver, kanel og salt, og vend det inn i røra.",
        "Rør inn de revne gulrøttene, og hell røra i langpanna.",
        "Stek midt i ovnen ca. 35–40 minutter til en kakepinne kommer ut med noen fuktige smuler. Avkjøl helt, og smør på ostekrem eller melisglasur før du skjærer kaka i stykker."
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
          "amount": 2.5,
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
          "id": "oil",
          "label": "Nøytral olje",
          "amount": 2,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Raps-/solsikkeolje gir saftig kake."
        },
        {
          "id": "carrots",
          "label": "Gulrøtter, finrevne",
          "amount": 4,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Nyrevne gir mest saft og smak."
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
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "ginger",
          "label": "Malt ingefær",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Litt varme som løfter gulroten."
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
          "id": "walnuts",
          "label": "Valnøtter, grovhakkede (valgfritt)",
          "amount": 1,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Vend inn for crunch; kan utelates.",
          "allergens": [
            "nuts"
          ]
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
          "id": "cream_cheese",
          "label": "Kremost (naturell, til ostekrem)",
          "amount": 1.5,
          "unit": "dl",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "note": "Kald og fast; røres inn til slutt.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "frosting_butter",
          "label": "Smør (romtemperert, til ostekrem)",
          "amount": 50,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "note": "Piskes luftig med melis.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "powdered_sugar",
          "label": "Melis (til ostekrem)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "taste": {
            "sweet": 2
          }
        }
      ],
      "steps": [
        "Sett ovnen på 180 °C og kle en liten langpanne (ca. 30×20 cm) med bakepapir.",
        "Pisk egg og sukker luftig, og rør inn oljen.",
        "Bland mel, bakepulver, kanel, ingefær, vaniljesukker og salt, og vend det inn i røra.",
        "Vend inn de revne gulrøttene og eventuelt valnøttene, og hell røra i langpanna.",
        "Stek midt i ovnen ca. 35–40 minutter til kakepinnen har noen fuktige smuler. Avkjøl helt.",
        "Ostekrem: pisk romtemperert smør luftig med melis, og rør forsiktig inn kald kremost til en glatt krem. Smør over den avkjølte kaka, sett kaldt, og skjær i stykker."
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
          "label": "Sukker (gjerne halvt brunt)",
          "amount": 2.5,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Brunt sukker gir dypere, karamellaktig smak.",
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
          "id": "oil",
          "label": "Nøytral olje",
          "amount": 2,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Holder krummen saftig i flere dager."
        },
        {
          "id": "carrots",
          "label": "Gulrøtter, finrevne",
          "amount": 4,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Nyrevne; klem ut litt væske om de er svært saftige."
        },
        {
          "id": "pineapple",
          "label": "Ananas, finhakket og avrent",
          "amount": 1,
          "unit": "dl",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Hemmeligheten for ekstra saftig kake – la den renne godt av."
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
          "id": "baking_soda",
          "label": "Natron",
          "amount": 0.5,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Reagerer med syren i brunt sukker/ananas for ekstra heving."
        },
        {
          "id": "cinnamon",
          "label": "Malt kanel",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "ginger",
          "label": "Malt ingefær",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "nutmeg",
          "label": "Revet muskat",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "cardamom",
          "label": "Malt kardemomme",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "walnuts",
          "label": "Ristede valnøtter, grovhakkede",
          "amount": 1,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Rist dem tørt i panna til de dufter; gir dypere nøttesmak.",
          "allergens": [
            "nuts"
          ]
        },
        {
          "id": "coconut",
          "label": "Kokosmasse",
          "amount": 0.5,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Litt kokos gir tygg og fukt."
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
          "id": "cream_cheese",
          "label": "Kremost (naturell, til ostekrem)",
          "amount": 1.5,
          "unit": "dl",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "note": "Kald og fast.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "brown_butter_frosting",
          "label": "Brunet smør (avkjølt, til ostekrem)",
          "amount": 50,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "note": "Brun smøret til det dufter nøtteaktig, avkjøl, og pisk luftig med melis.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "powdered_sugar",
          "label": "Melis (til ostekrem)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "taste": {
            "sweet": 2
          }
        }
      ],
      "steps": [
        "Sett ovnen på 175 °C og kle en liten langpanne (ca. 30×20 cm) med bakepapir. Rist valnøttene tørt til de dufter, og brun smøret til ostekremen; avkjøl begge.",
        "Pisk egg og sukker luftig, og rør inn oljen til en jevn røre.",
        "Bland mel, bakepulver, natron, kanel, ingefær, muskat, kardemomme og salt, og vend det inn i røra.",
        "Vend inn revne gulrøtter, avrent ananas, ristede valnøtter og kokos, og hell røra i langpanna.",
        "Stek midt i ovnen ca. 40–45 minutter til kakepinnen har noen fuktige smuler. Avkjøl helt, gjerne over natten.",
        "Ostekrem: pisk det avkjølte brunede smøret luftig med melis, og rør forsiktig inn kald kremost til en glatt krem. Smør over kaka, sett kaldt til kremen stivner, og skjær i stykker."
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
        "note": "Bruk en blanding med bindemiddel; la røra hvile litt og spe med en skvett mer væske."
      }
    ],
    "egg": [
      {
        "id": "applesauce_egg",
        "label": "Eplemos (eggfri binding)",
        "amount": 1.5,
        "unit": "dl",
        "note": "Ca. 0,5 dl eplemos per egg; gir binding og fukt."
      },
      {
        "id": "flaxseed_egg",
        "label": "Linfrø + vann (eggfri binding)",
        "amount": 3,
        "unit": "ss",
        "note": "1 ss malt linfrø + 3 ss vann per egg; la svelle 10 minutter."
      }
    ],
    "oil": [
      {
        "id": "butter_melted",
        "label": "Smeltet smør",
        "amount": 175,
        "unit": "g",
        "note": "Gir mer smørsmak, men litt mindre saftig enn olje.",
        "allergens": [
          "dairy"
        ]
      }
    ],
    "cream_cheese": [
      {
        "id": "vegan_cream_cheese",
        "label": "Vegansk kremost (melkefri)",
        "amount": 1.5,
        "unit": "dl",
        "note": "Melkefri base for ostekrem; bruk kald og fast."
      }
    ],
    "cream_cheese_frosting": [
      {
        "id": "vegan_frosting",
        "label": "Vegansk ostekrem / melisglasur (melkefri)",
        "amount": 1,
        "unit": "dl",
        "note": "Melkefri topping; eller bland melis med litt vann."
      }
    ],
    "frosting_butter": [
      {
        "id": "frosting_margarine",
        "label": "Margarin (melkefri)",
        "amount": 50,
        "unit": "g",
        "note": "Romtemperert; piskes som smør. Melkefritt."
      }
    ],
    "brown_butter_frosting": [
      {
        "id": "frosting_margarine_complex",
        "label": "Margarin (melkefri)",
        "amount": 50,
        "unit": "g",
        "note": "Brunes ikke, men gir fett til kremen. Melkefritt."
      }
    ],
    "butter_melted": [
      {
        "id": "oil_back",
        "label": "Nøytral olje (melkefri)",
        "amount": 2,
        "unit": "dl",
        "note": "Tilbake til olje; melkefritt og ekstra saftig."
      }
    ],
    "walnuts": [
      {
        "id": "sunflower_seeds",
        "label": "Solsikkefrø (nøttefri crunch)",
        "amount": 1,
        "unit": "dl",
        "note": "Nøttefritt alternativ med tygg."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "flour": 0.55,
    "gf_flour": 0.55,
    "sugar": 0.85,
    "powdered_sugar": 0.55,
    "oil": 0.92,
    "oil_back": 0.92,
    "butter_melted": 0.95,
    "baking_powder": 0.9,
    "baking_soda": 0.9,
    "cinnamon": 0.5,
    "ginger": 0.5,
    "nutmeg": 0.5,
    "cardamom": 0.5,
    "vanilla_sugar": 0.7,
    "walnuts": 0.45,
    "sunflower_seeds": 0.55,
    "coconut": 0.35,
    "pineapple": 0.7,
    "applesauce_egg": 1.05,
    "flaxseed_egg": 0.5,
    "cream_cheese": 1,
    "vegan_cream_cheese": 1,
    "cream_cheese_frosting": 1,
    "vegan_frosting": 1,
    "salt": 1.2
  },
  "pieceWeight": {
    "egg": 55,
    "carrots": 75
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
    "sugar": [
      "dl",
      "ml",
      "g"
    ],
    "powdered_sugar": [
      "dl",
      "ml",
      "g"
    ],
    "oil": [
      "dl",
      "ml",
      "g"
    ],
    "oil_back": [
      "dl",
      "ml",
      "g"
    ],
    "butter_melted": [
      "g"
    ],
    "baking_powder": [
      "ts",
      "g"
    ],
    "baking_soda": [
      "ts",
      "g"
    ],
    "cinnamon": [
      "ts",
      "g"
    ],
    "ginger": [
      "ts",
      "g"
    ],
    "nutmeg": [
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
    "walnuts": [
      "dl",
      "ml",
      "g"
    ],
    "sunflower_seeds": [
      "dl",
      "ml",
      "g"
    ],
    "coconut": [
      "dl",
      "ml",
      "g"
    ],
    "pineapple": [
      "dl",
      "ml",
      "g"
    ],
    "applesauce_egg": [
      "dl",
      "ml",
      "g"
    ],
    "flaxseed_egg": [
      "ss",
      "ts",
      "g"
    ],
    "cream_cheese": [
      "dl",
      "ml",
      "g"
    ],
    "vegan_cream_cheese": [
      "dl",
      "ml",
      "g"
    ],
    "cream_cheese_frosting": [
      "dl",
      "ml",
      "g"
    ],
    "vegan_frosting": [
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
    "vegetable",
    "binder",
    "fat",
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
    "sweet": "Kaka blir mindre søt – server gjerne med en god ostekrem, eller strø litt melis på toppen."
  },
  "leverMessages": {
    "sweet": {
      "down": "Røra ble søtere – vi reduserte sukkeret litt for å holde balansen. Smak til.",
      "up": "Du tok bort noe sødme – vi økte sukkeret litt igjen. Smak til."
    }
  }
};
