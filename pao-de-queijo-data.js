/* ===== Pão de queijo med Norvegia – brasiliansk ostebrød – datamodell =====
   VM-rett 4 (Norge–Brasil): naturlig glutenfritt brasiliansk ostebrød på tapiokamel,
   bakt med norsk Norvegia. Tre nivåer: blender → skåldet deig → Norvegia + lagret ost.
   Generert fra recipes-pending/pao-de-queijo.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "pao-de-queijo",
  "yieldNoun": "boller",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 16,
      "ingredients": [
        {
          "id": "tapioca_flour",
          "label": "Tapiokamel",
          "amount": 3,
          "unit": "dl",
          "role": "bulk",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Glutenfritt – gir den seige konsistensen. Kan ikke byttes med potetmel/maizena."
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
          "id": "oil",
          "label": "Nøytral olje",
          "amount": 0.5,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
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
          "id": "cheese",
          "label": "Norvegia, revet",
          "amount": 150,
          "unit": "g",
          "role": "cheese",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "sodiumPer100g": 600,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "sodiumPer100g": 38800
        }
      ],
      "steps": [
        "Sett ovnen på 200 °C, og smør en muffinsform.",
        "Ha tapiokamel, melk, olje, egg og salt i en blender, og kjør til en glatt, tynn røre.",
        "Tilsett mesteparten av den revne osten og puls kort så den blandes inn.",
        "Fordel røren i muffinsformene til ca. 2/3 fulle, og strø resten av osten på toppen.",
        "Stek 20–25 minutter til bollene er pufne og gylne. Server rykende ferske."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 16,
      "ingredients": [
        {
          "id": "tapioca_flour",
          "label": "Tapiokamel",
          "amount": 4,
          "unit": "dl",
          "role": "bulk",
          "essential": true,
          "scaling": "linear",
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
          "id": "oil",
          "label": "Nøytral olje",
          "amount": 0.5,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.75,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "sodiumPer100g": 38800
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 2,
          "unit": "stk",
          "role": "binder",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "cheese",
          "label": "Norvegia, revet",
          "amount": 200,
          "unit": "g",
          "role": "cheese",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "sodiumPer100g": 600,
          "taste": {
            "umami": 2
          }
        }
      ],
      "steps": [
        "Sett ovnen på 200 °C, og kle et stekebrett med bakepapir.",
        "Kok opp melk, olje og salt i en kjele. Ta kjelen av varmen og rør inn alt tapiokamelet på én gang – massen blir klumpete og litt rar, det er som det skal.",
        "La massen kjølne til håndvarm, og rør så inn eggene ett om gangen til en glatt, seig deig.",
        "Rør inn den revne osten. Trill deigen til ca. 16 kuler med tapiokamel-dryssede hender, og sett dem på brettet.",
        "Stek 20–25 minutter til bollene er pufne og gylne. Server rykende ferske."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 16,
      "ingredients": [
        {
          "id": "tapioca_flour",
          "label": "Tapiokamel",
          "amount": 4,
          "unit": "dl",
          "role": "bulk",
          "essential": true,
          "scaling": "linear",
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
          "id": "butter",
          "label": "Smør",
          "amount": 50,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "note": "Gir rikere smak enn olje."
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.75,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "sodiumPer100g": 38800
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 2,
          "unit": "stk",
          "role": "binder",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "cheese",
          "label": "Norvegia, revet",
          "amount": 175,
          "unit": "g",
          "role": "cheese",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "sodiumPer100g": 600,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "hard_cheese",
          "label": "Lagret ost / litt parmesan, revet",
          "amount": 75,
          "unit": "g",
          "role": "cheese",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "sodiumPer100g": 700,
          "taste": {
            "umami": 3
          },
          "note": "Gir kraftigere, mer voksen ostesmak."
        }
      ],
      "steps": [
        "Sett ovnen på 200 °C, og kle et stekebrett med bakepapir.",
        "Kok opp melk, smør og salt i en kjele. Ta av varmen og rør inn alt tapiokamelet på én gang til en klumpete masse.",
        "La massen kjølne til håndvarm, og rør så inn eggene ett om gangen til en glatt, seig deig.",
        "Rør inn begge ostene. Trill deigen til ca. 16 kuler med tapiokamel-dryssede hender.",
        "Stek 22–27 minutter til bollene er gylne og sprø utenpå, seige inni. Server rykende ferske, gjerne i en kurv foran kampen."
      ]
    }
  },
  "swapOptions": {
    "milk": [
      {
        "id": "plant_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 1.5,
        "unit": "dl",
        "tradition": "non-traditional",
        "note": "Melkefri væske; smaker likt i ferdige boller."
      }
    ],
    "cheese": [
      {
        "id": "vegan_cheese",
        "label": "Fast vegansk ost (melkefri)",
        "amount": 175,
        "unit": "g",
        "tradition": "non-traditional",
        "note": "Velg en som smelter; gir melkefrie ostebrød med litt annen smak.",
        "taste": {
          "umami": 1
        }
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 50,
        "unit": "g",
        "tradition": "non-traditional",
        "note": "Melkefritt alternativ til smøret."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "tapioca_flour": 0.6,
    "milk": 1.03,
    "plant_milk": 1.03,
    "oil": 0.92
  },
  "pieceWeight": {
    "egg": 55
  },
  "unitOptions": {
    "tapioca_flour": [
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
    "oil": [
      "dl",
      "ml",
      "ss",
      "g"
    ]
  },
  "bulkRoles": [
    "bulk",
    "liquid",
    "binder"
  ],
  "levers": [],
  "requireRoles": [],
  "tasteMessages": {
    "umami": "Bollene blir mildere – mer Norvegia eller litt lagret ost gir kraftigere ostesmak."
  },
  "leverMessages": {}
};
