/* ===== Hjemmelagde fiskekaker – datamodell =====
   Tre nivåer (enkel/medium/kompleks), delte bytter og salt-lever. Ren data.
   Mengdene gjelder 4 porsjoner. Felt forklart i recipe-authoring.md.
   Generert av build-recipe fra recipes-pending/fiskekaker.json. */

window.RECIPE = {
  "id": "fiskekaker",
  "bulkRoles": [
    "protein",
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
    "umami": "Retten blir litt mildere – litt ekstra salt eller en skvett fiskekraft løfter smaken.",
    "sweet": "Mindre søtlig dybde fra løken – litt revet muskat balanserer."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til (husk at salt også binder farsen).",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Salt er det som binder farsen, så ikke kutt for hardt."
    }
  },
  "density": {
    "milk": 1.03,
    "cream": 1,
    "potato_flour": 0.6,
    "salt_added": 1.2,
    "butter": 0.95,
    "oat_milk": 1.03,
    "oat_cream": 1,
    "rapeseed_oil": 0.92
  },
  "pieceWeight": {
    "egg": 55,
    "onion": 110
  },
  "unitOptions": {
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
    "potato_flour": [
      "ss",
      "ts",
      "g"
    ],
    "butter": [
      "ss",
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
    "oat_cream": [
      "dl",
      "ml",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "g"
    ]
  },
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "fish",
          "label": "Hvit fisk (sei eller torsk), uten skinn og bein",
          "amount": 600,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 70,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "allergens": [
            "fish"
          ]
        },
        {
          "id": "potato_flour",
          "label": "Potetmel",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 2,
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
          "id": "salt_added",
          "label": "Salt",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Skjær den iskalde fisken i biter, ha den i kjøkkenmaskinen med saltet, og kjør til farsen er fast og seig.",
        "Tilsett potetmel, og spe med melken litt om gangen så hver omgang er innarbeidet før neste. Krydre med litt hvit pepper.",
        "Form kaker med en skje eller fuktige hender, og stek dem 3–4 minutter på hver side i smør på middels varme til de er gylne og gjennomstekte."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "fish",
          "label": "Hvit fisk (sei, torsk eller hyse), uten skinn og bein",
          "amount": 600,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 70,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "allergens": [
            "fish"
          ]
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "potato_flour",
          "label": "Potetmel",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 1.5,
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
          "id": "cream",
          "label": "Matfløte",
          "amount": 0.5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "onion",
          "label": "Løk, finrevet",
          "amount": 0.5,
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
          "id": "nutmeg",
          "label": "Revet muskat",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "butter",
          "label": "Smør (til steking)",
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
          "id": "salt_added",
          "label": "Salt",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Hold alt iskaldt. Skjær fisken i biter, kjør den med saltet i kjøkkenmaskinen til farsen er fast og seig.",
        "Tilsett egg, potetmel, finrevet løk og muskat, og kjør kort. Spe med melk og fløte litt om gangen til farsen er passe fast. Krydre med hvit pepper.",
        "Form jevne kaker, og press dem litt flate.",
        "Stek kakene i smør på middels varme, 3–4 minutter på hver side, til de er gylne og gjennomstekte. Server med kokte poteter og smeltet smør eller hvit saus."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "fish",
          "label": "Hyse (kolje), helt fersk, uten skinn og bein",
          "amount": 650,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 70,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "allergens": [
            "fish"
          ]
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "potato_flour",
          "label": "Potetmel",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
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
          "id": "cream",
          "label": "Fløte",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "onion",
          "label": "Løk, finrevet",
          "amount": 0.5,
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
          "id": "chives",
          "label": "Gressløk, finhakket",
          "amount": 3,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "nutmeg",
          "label": "Revet muskat",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "butter",
          "label": "Smør (til steking)",
          "amount": 3,
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
          "id": "salt_added",
          "label": "Salt",
          "amount": 2.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Hold fisk, melk, fløte og bolle iskaldt – legg gjerne bollen i fryseren først. Skjær fisken i biter.",
        "Kjør fisken med saltet til farsen er blank, fast og seig. Tilsett egg, potetmel, finrevet løk og muskat, og kjør kort.",
        "Spe med melk og fløte i små porsjoner, og la hver omgang bli helt innarbeidet før neste. Vend til slutt inn gressløken for hånd. Krydre med hvit pepper.",
        "La farsen hvile kaldt 15–20 minutter. Form jevne kaker.",
        "Stek kakene i smør på middels varme til de er gyllenbrune og gjennomstekte, ca. 4 minutter på hver side. Server med kokte poteter, smeltet smør og kokte grønnsaker."
      ]
    }
  },
  "swapOptions": {
    "fish": [
      {
        "id": "salmon",
        "label": "Laks (rosa, saftigere)",
        "amount": 600,
        "unit": "g",
        "sodiumPer100g": 75,
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Gir rosa, saftige kaker; litt fetere smak.",
        "allergens": [
          "fish"
        ]
      },
      {
        "id": "pollock",
        "label": "Lyr (mager hvit fisk)",
        "amount": 600,
        "unit": "g",
        "sodiumPer100g": 70,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Mild og fin; binder godt som sei og hyse.",
        "allergens": [
          "fish"
        ]
      }
    ],
    "egg": [
      {
        "id": "extra_potato_flour",
        "label": "Ekstra potetmel (eggfritt)",
        "amount": 1,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Binder uten egg; saltet gjør mesteparten av jobben."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 20,
        "note": "Nøytral, melkefri base.",
        "tradition": "non-traditional"
      }
    ],
    "cream": [
      {
        "id": "oat_cream",
        "label": "Havrefløte (melkefri)",
        "amount": 1,
        "unit": "dl",
        "sodiumPer100g": 15,
        "note": "Melkefritt alternativ til fløte.",
        "tradition": "non-traditional"
      }
    ],
    "butter": [
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (melkefri steking)",
        "amount": 2,
        "unit": "ss",
        "sodiumPer100g": 0,
        "note": "Nøytral olje til steking uten meieri.",
        "tradition": "non-traditional"
      }
    ]
  }
};
