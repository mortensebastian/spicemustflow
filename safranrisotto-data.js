/* ===== Safranrisotto (Risotto alla Milanese) – datamodell =====
   Tre nivåer (enkel/medium/kompleks), delte bytter og salt-lever. Ren data.
   Mengdene gjelder 4 porsjoner. Felt forklart i recipe-authoring.md.
   Generert av build-recipe fra recipes-pending/safranrisotto.json. */

window.RECIPE = {
  "id": "safranrisotto",
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
    "umami": "Mindre fyldig – litt ekstra parmesan eller kraft hjelper.",
    "sour": "Mindre frisk – ha i en skvett sitron til slutt.",
    "sweet": "Mindre sødme – litt mer løk balanserer."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til (parmesan er salt).",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    }
  },
  "density": {
    "rice": 0.85,
    "stock": 1,
    "veg_stock": 1,
    "beef_stock": 1,
    "wine": 0.99,
    "vermouth": 0.98,
    "olive_oil": 0.92,
    "butter": 0.95,
    "parmesan": 0.4,
    "grana_padano": 0.4,
    "vegan_parm": 0.4,
    "salt_added": 1.2,
    "carnaroli": 0.85,
    "no_wine": 1,
    "olive_oil_only": 0.92
  },
  "pieceWeight": {
    "onion": 110,
    "shallot": 40,
    "garlic": 5
  },
  "unitOptions": {
    "rice": [
      "dl",
      "ml",
      "g"
    ],
    "stock": [
      "dl",
      "ml",
      "g"
    ],
    "veg_stock": [
      "dl",
      "ml",
      "g"
    ],
    "beef_stock": [
      "dl",
      "ml",
      "g"
    ],
    "wine": [
      "dl",
      "ml",
      "g"
    ],
    "olive_oil": [
      "ss",
      "ts",
      "ml",
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
    "carnaroli": [
      "dl",
      "ml",
      "g"
    ],
    "vermouth": [
      "dl",
      "ml",
      "g"
    ],
    "no_wine": [
      "dl",
      "ml",
      "g"
    ],
    "olive_oil_only": [
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
          "id": "rice",
          "label": "Arborioris",
          "amount": 3,
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
          "id": "stock",
          "label": "Grønnsaks- eller kyllingkraft, varm",
          "amount": 9,
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
          "id": "saffron",
          "label": "Safran",
          "amount": 0.5,
          "unit": "g",
          "role": "saffron",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          },
          "note": "Bløtlegg i en øse varm (ikke kokende) kraft."
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
          "id": "butter",
          "label": "Smør",
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
          "id": "parmesan",
          "label": "Parmesan, revet",
          "amount": 50,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 1100,
          "removable": true,
          "taste": {
            "umami": 2
          },
          "allergens": [
            "dairy"
          ],
          "note": "Røres inn helt til slutt (mantecatura)."
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
          "note": "Parmesan er salt – juster til slutt."
        }
      ],
      "steps": [
        "Varm kraften og hold den varm ved siden av. Legg safranen i en øse varm kraft.",
        "Surr løken myk i smøret i en vid gryte. Tilsett risen og rør til kornene er blanke, 1–2 minutter.",
        "Spe med én øse varm kraft om gangen. Rør jevnlig og la risen suge til seg før neste øse – ca. 18 minutter.",
        "Rør inn safrankraften mot slutten. Ta gryten av varmen, og rør inn parmesan og en klatt smør til risottoen er kremet. Smak til med salt og server straks."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "rice",
          "label": "Arborioris",
          "amount": 3,
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
          "id": "stock",
          "label": "Kyllingkraft, varm",
          "amount": 9,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 200,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "note": "Bruk gjerne usaltet, så styrer du saltet selv."
        },
        {
          "id": "wine",
          "label": "Tørr hvitvin",
          "amount": 1,
          "unit": "dl",
          "role": "acid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2
          },
          "onRemove": {
            "tip": "Vinen gir friskhet og syre – uten den blir risottoen rundere. Ha i en skvett sitron til slutt."
          }
        },
        {
          "id": "saffron",
          "label": "Safran",
          "amount": 0.5,
          "unit": "g",
          "role": "saffron",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          },
          "note": "Bløtlegg i varm kraft."
        },
        {
          "id": "onion",
          "label": "Sjalottløk, finhakket",
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
          "id": "garlic",
          "label": "Hvitløksfedd",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "olive_oil",
          "label": "Olivenolje",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "butter",
          "label": "Smør (til mantecatura)",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "parmesan",
          "label": "Parmesan, revet",
          "amount": 60,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 1100,
          "removable": true,
          "taste": {
            "umami": 2
          },
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
          "removable": false
        }
      ],
      "steps": [
        "Varm kraften. Legg safranen i en øse varm kraft.",
        "Surr sjalottløk og hvitløk myke i olivenolje. Tilsett risen og rør til kornene er blanke, 1–2 minutter.",
        "Hell i vinen og rør til den er kokt inn.",
        "Spe med én øse varm kraft om gangen, rør jevnlig, og la risen suge til seg før neste – ca. 18 minutter.",
        "Rør inn safrankraften mot slutten. Ta gryten av varmen, og mantecatura: rør inn kaldt smør og parmesan til risottoen er blank og kremet. Smak til med salt og server straks."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "rice",
          "label": "Carnaroliris",
          "amount": 3,
          "unit": "dl",
          "role": "rice",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 0,
          "removable": false,
          "note": "Carnaroli holder bittet best."
        },
        {
          "id": "stock",
          "label": "Hjemmelaget oksekraft, varm",
          "amount": 9,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 150,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "note": "Usaltet; gir dybde."
        },
        {
          "id": "wine",
          "label": "Tørr hvitvin",
          "amount": 1,
          "unit": "dl",
          "role": "acid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2
          },
          "onRemove": {
            "tip": "Vinen gir friskhet og syre – uten den blir risottoen rundere. Ha i en skvett sitron til slutt."
          }
        },
        {
          "id": "saffron",
          "label": "Safran (lett ristet)",
          "amount": 0.6,
          "unit": "g",
          "role": "saffron",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          },
          "note": "Rist lett, knus, og bløtlegg i varm kraft."
        },
        {
          "id": "marrow",
          "label": "Beinmarg (midollo)",
          "amount": 30,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "tradition": "traditional",
          "taste": {
            "umami": 1
          },
          "note": "Tradisjonell i ekte Milanese; smelter med løken."
        },
        {
          "id": "onion",
          "label": "Sjalottløk, finhakket",
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
          "id": "butter",
          "label": "Kaldt smør (mantecatura)",
          "amount": 3,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "parmesan",
          "label": "Parmigiano Reggiano, revet",
          "amount": 70,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 1100,
          "removable": true,
          "taste": {
            "umami": 2
          },
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
          "removable": false
        }
      ],
      "steps": [
        "Lag eller varm oksekraften, og hold den varm. Rist safranen lett, knus den, og bløtlegg i en øse varm kraft.",
        "Smelt beinmargen med sjalottløken i en vid gryte til løken er blank.",
        "Tilsett risen og rist den 1–2 minutter til kornene er blanke og varme.",
        "Hell i vinen og rør til den er kokt inn.",
        "Spe med én øse varm kraft om gangen, rør jevnlig, og la risen suge til seg før neste – ca. 18 minutter til al dente.",
        "Rør inn safrankraften mot slutten. Ta gryten av varmen og pisk inn kaldt smør og parmesan kraftig (mantecatura) til risottoen er blank og bølger. Smak til med salt, la hvile 1 minutt, og server straks – all'onda."
      ]
    }
  },
  "swapOptions": {
    "rice": [
      {
        "id": "carnaroli",
        "label": "Carnaroliris (tradisjonell)",
        "amount": 3,
        "unit": "dl",
        "sodiumPer100g": 0,
        "tradition": "traditional",
        "note": "Holder bittet enda bedre enn arborio."
      }
    ],
    "stock": [
      {
        "id": "veg_stock",
        "label": "Grønnsakskraft (vegetar)",
        "amount": 9,
        "unit": "dl",
        "sodiumPer100g": 150,
        "taste": {
          "umami": 1
        },
        "note": "Gir en lettere, vegetarisk variant."
      },
      {
        "id": "beef_stock",
        "label": "Oksekraft (mer dybde)",
        "amount": 9,
        "unit": "dl",
        "sodiumPer100g": 150,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional"
      }
    ],
    "wine": [
      {
        "id": "vermouth",
        "label": "Tørr vermut",
        "amount": 1,
        "unit": "dl",
        "taste": {
          "sour": 2,
          "bitter": 1
        },
        "note": "Litt mer aromatisk enn hvitvin."
      },
      {
        "id": "no_wine",
        "label": "Uten vin (mer kraft + sitron)",
        "amount": 1,
        "unit": "dl",
        "sodiumPer100g": 150,
        "tradition": "non-traditional",
        "note": "Alkoholfritt; spe med kraft og ha i en skvett sitron til slutt."
      }
    ],
    "onion": [
      {
        "id": "shallot",
        "label": "Sjalottløk (mildere)",
        "amount": 1,
        "unit": "stk",
        "tradition": "traditional",
        "taste": {
          "sweet": 1
        }
      }
    ],
    "butter": [
      {
        "id": "olive_oil_only",
        "label": "Kun olivenolje (melkefri)",
        "amount": 2,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Melkefri mantecatura; mindre rund, men fungerer."
      }
    ],
    "parmesan": [
      {
        "id": "grana_padano",
        "label": "Grana Padano",
        "amount": 60,
        "unit": "g",
        "sodiumPer100g": 1000,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "allergens": [
          "dairy"
        ],
        "note": "Mildere og rimeligere enn parmesan."
      },
      {
        "id": "vegan_parm",
        "label": "Vegansk parmesan (melkefri)",
        "amount": 50,
        "unit": "g",
        "sodiumPer100g": 800,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Melkefritt alternativ basert på næringsgjær/nøtter."
      }
    ]
  }
};
