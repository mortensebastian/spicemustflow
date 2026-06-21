/* ===== Risgrøt (risengrynsgrøt) – datamodell =====
   Tre nivåer (enkel/medium/kompleks), delte bytter og salt-lever. Ren data.
   Mengdene gjelder 4 porsjoner. Felt forklart i recipe-authoring.md.
   Generert av build-recipe fra recipes-pending/risgrot.json. */

window.RECIPE = {
  "id": "risgrot",
  "bulkRoles": [
    "rice",
    "liquid"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    }
  ],
  "requireRoles": [],
  "servedAcid": null,
  "tasteMessages": {
    "sweet": "Mindre søtt – dryss på mer sukker eller kanelsukker ved servering."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    }
  },
  "density": {
    "rice": 0.85,
    "water": 1,
    "milk": 1.03,
    "cream": 1,
    "butter": 0.95,
    "sugar": 0.85,
    "cinnamon": 0.45,
    "salt_added": 1.2,
    "oat_milk": 1.03,
    "plant_cream": 1,
    "margarine": 0.95,
    "jasmine_rice": 0.85
  },
  "pieceWeight": {},
  "unitOptions": {
    "rice": [
      "dl",
      "ml",
      "g"
    ],
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "milk": [
      "dl",
      "ml",
      "g"
    ],
    "cream": [
      "dl",
      "ml",
      "g"
    ],
    "butter": [
      "ss",
      "g"
    ],
    "sugar": [
      "ss",
      "g"
    ],
    "cinnamon": [
      "ts",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "oat_milk": [
      "dl",
      "ml",
      "g"
    ],
    "plant_cream": [
      "dl",
      "ml",
      "g"
    ],
    "margarine": [
      "ss",
      "g"
    ],
    "jasmine_rice": [
      "dl",
      "ml",
      "g"
    ]
  },
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "rice",
          "label": "Grøtris",
          "amount": 2.5,
          "unit": "dl",
          "role": "rice",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 0,
          "removable": false,
          "note": "Rundkornet grøtris gir kremen – ikke skyll risen."
        },
        {
          "id": "water",
          "label": "Vann",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Risen kokes først mør i vannet."
        },
        {
          "id": "milk",
          "label": "Helmelk",
          "amount": 10,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 50,
          "removable": false,
          "allergens": [
            "dairy"
          ]
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
          "removable": false,
          "note": "Litt salt løfter smaken."
        },
        {
          "id": "butter",
          "label": "Smørøye (til servering)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "En klatt smør som smelter i midten."
        },
        {
          "id": "sugar",
          "label": "Sukker (til servering)",
          "amount": 2,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cinnamon",
          "label": "Kanel (til servering)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Kok opp grøtris og vann i en tykkbunnet gryte, og la det småkoke til vannet er nesten kokt inn, ca. 10 minutter.",
        "Spe med melken, rør godt, og kok opp igjen.",
        "Skru ned varmen og la grøten småkoke på svak varme i 40–45 minutter til risen er mør. Rør ofte, særlig mot slutten, så den ikke svir seg.",
        "Smak til med salt. Server med en klatt smør, sukker og kanel."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "rice",
          "label": "Grøtris",
          "amount": 2.5,
          "unit": "dl",
          "role": "rice",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 0,
          "removable": false,
          "note": "Ikke skyll risen – stivelsen gir kremen."
        },
        {
          "id": "water",
          "label": "Vann",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "milk",
          "label": "Helmelk",
          "amount": 9,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 50,
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "cream",
          "label": "Fløte",
          "amount": 1,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 38,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 1
          },
          "note": "Gir en rundere, kremet grøt; røres inn mot slutten."
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
        },
        {
          "id": "butter",
          "label": "Smørøye (til servering)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "En klatt smør i midten."
        },
        {
          "id": "sugar",
          "label": "Sukker (til servering)",
          "amount": 2,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cinnamon",
          "label": "Kanel (til servering)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Kok opp grøtris og vann i en tykkbunnet gryte, og la det småkoke til vannet er nesten kokt inn, ca. 10 minutter.",
        "Spe med melken, kok opp, og skru ned til svak varme.",
        "La grøten småkoke i 40–45 minutter til risen er mør. Rør ofte mot slutten.",
        "Rør inn fløten de siste minuttene, og smak til med salt.",
        "Server med en klatt smør, sukker og kanel."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "rice",
          "label": "Grøtris",
          "amount": 2.5,
          "unit": "dl",
          "role": "rice",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 0,
          "removable": false,
          "note": "Ikke skyll risen."
        },
        {
          "id": "water",
          "label": "Vann",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "milk",
          "label": "Helmelk",
          "amount": 8,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 50,
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "cream",
          "label": "Fløte",
          "amount": 2,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 38,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 1
          },
          "note": "Mer fløte gir en rikere grøt."
        },
        {
          "id": "vanilla",
          "label": "Vaniljestang, frøene",
          "amount": 0.5,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "tradition": "traditional",
          "note": "Del stangen og skrap ut frøene."
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
        },
        {
          "id": "butter",
          "label": "Smørøye (til servering)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "En klatt smør i midten."
        },
        {
          "id": "sugar",
          "label": "Sukker (til servering)",
          "amount": 2,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cinnamon",
          "label": "Kanel (til servering)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Kok opp grøtris og vann i en tykkbunnet gryte, og la det småkoke til vannet er nesten kokt inn, ca. 10 minutter.",
        "Spe med melken, tilsett vaniljefrøene, og kok opp.",
        "Skru ned til svak varme og la grøten småkoke i 45–55 minutter til risen er helt mør og grøten kremet. Rør ofte. (Alternativt: sett gryta med lokk i ovnen på ca. 110 °C i 1,5–2 timer.)",
        "Rør inn fløten de siste minuttene, og smak til med salt.",
        "Server med en klatt smør, sukker og kanel. For ekte julegrøt: gjem en skåldet mandel i grøten – den som finner den, vinner marsipangrisen."
      ]
    }
  },
  "swapOptions": {
    "rice": [
      {
        "id": "jasmine_rice",
        "label": "Jasminris",
        "amount": 2.5,
        "unit": "dl",
        "sodiumPer100g": 0,
        "tradition": "non-traditional",
        "note": "Fungerer fint; gir en litt løsere grøt enn grøtris."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 9,
        "unit": "dl",
        "sodiumPer100g": 40,
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Melkefri grøt; velg gjerne barista-variant for kremethet."
      }
    ],
    "cream": [
      {
        "id": "plant_cream",
        "label": "Plantefløte (melkefri)",
        "amount": 1,
        "unit": "dl",
        "sodiumPer100g": 30,
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Havre- eller soyafløte gir kremethet uten melk."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 1,
        "unit": "ss",
        "sodiumPer100g": 0,
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Melkefritt smørøye."
      }
    ]
  }
};
