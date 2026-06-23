/* ===== Boller (hveteboller) – datamodell =====
   Vanlige norske hveteboller/rosinboller i tre nivåer (rask grunndeig →
   kardemomme+rosiner → kald langheving). Sweet-lever på sukker, yieldNoun boller.
   Distinkt fra kanelboller (ingen kanelfyll). Allergener: gluten, meieri, egg.
   Generert fra recipes-pending/boller.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "boller",
  "yieldNoun": "boller",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 8,
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
          "label": "Melk (fingervarm)",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Lunken, ca. 37 grader – for varm melk dreper gjæren.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "yeast",
          "label": "Tørrgjær",
          "amount": 1,
          "unit": "ts",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Tilsvarer ca. en halv pakke fersk gjær; bruk dobbelt for ekstra rask heving."
        },
        {
          "id": "sugar",
          "label": "Sukker",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "butter",
          "label": "Smør (mykt)",
          "amount": 75,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Romtemperert smør elter seg lettere inn.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        }
      ],
      "steps": [
        "Rør gjæren ut i den fingervarme melken (bruker du tørrgjær, kan du blande den i melet i stedet).",
        "Bland mel, sukker og salt, tilsett melkeblandingen og det myke smøret, og elt til en smidig, blank deig.",
        "La deigen heve lunt under et klede til dobbel størrelse, ca. 45 minutter.",
        "Trill 12 boller, sett dem på bakepapir, og la dem etterheve ca. 30 minutter.",
        "Stek midt i ovnen på 200 grader i 10–12 minutter til de er gylne. Avkjøl under et klede."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 8,
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
          "label": "Melk (fingervarm)",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Lunken, ca. 37 grader – for varm melk dreper gjæren.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "yeast",
          "label": "Fersk gjær",
          "amount": 25,
          "unit": "g",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "En halv pakke fersk gjær; eller ca. 1 ts tørrgjær."
        },
        {
          "id": "sugar",
          "label": "Sukker",
          "amount": 1,
          "unit": "dl",
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
          },
          "note": "Nystøtte frø gir mest aroma."
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 1,
          "unit": "stk",
          "role": "binder",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "note": "Gir fyldigere deig og finere farge.",
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "butter",
          "label": "Smør (mykt)",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Romtemperert smør elter seg lettere inn.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "raisins",
          "label": "Rosiner",
          "amount": 1,
          "unit": "dl",
          "role": "addin",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "For rosinboller; bløtlegg gjerne i litt varmt vann først. Dropp for rene hveteboller."
        },
        {
          "id": "egg_wash",
          "label": "Egg til pensling",
          "amount": 1,
          "unit": "stk",
          "role": "garnish",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true,
          "note": "Sammenvispet egg gir blank, gyllen overflate.",
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "pearl_sugar",
          "label": "Perlesukker (valgfritt)",
          "amount": 2,
          "unit": "ss",
          "role": "garnish",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "Strø over etter pensling."
        }
      ],
      "steps": [
        "Smuldre/rør gjæren i den fingervarme melken til den er oppløst.",
        "Bland mel, sukker, kardemomme og salt. Tilsett melkeblandingen, egg og mykt smør, og elt til en smidig, blank og elastisk deig (8–10 minutter).",
        "Elt inn rosinene mot slutten om du vil ha rosinboller. La deigen heve lunt til dobbel størrelse, ca. 45–60 minutter.",
        "Trill 12 jevne boller, sett dem på bakepapir, og la dem etterheve 30–45 minutter under et klede.",
        "Pensle bollene med sammenvispet egg, strø over perlesukker, og stek midt i ovnen på 200 grader i 10–12 minutter til de er gylne.",
        "Avkjøl under et klede så skorpen holder seg myk."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 8,
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
          "label": "Melk (kald)",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Kald melk til kald langheving – gjæren jobber sakte i kjøleskapet.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "yeast",
          "label": "Fersk gjær",
          "amount": 12,
          "unit": "g",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Mindre gjær til kald langheving over natten; bygger mer smak."
        },
        {
          "id": "sugar",
          "label": "Sukker",
          "amount": 1.2,
          "unit": "dl",
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
          "amount": 1.5,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          },
          "note": "Støt hele frø i morter for mest aroma."
        },
        {
          "id": "egg",
          "label": "Egg",
          "amount": 2,
          "unit": "stk",
          "role": "binder",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "note": "Ekstra egg gir rikere, saftigere krumme.",
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "butter",
          "label": "Smør (mykt)",
          "amount": 125,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Rikelig smør for de saftigste bollene.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "raisins",
          "label": "Rosiner",
          "amount": 1,
          "unit": "dl",
          "role": "addin",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "Bløtlegg i litt varmt vann; dropp for rene hveteboller."
        },
        {
          "id": "egg_wash",
          "label": "Egg til pensling",
          "amount": 1,
          "unit": "stk",
          "role": "garnish",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true,
          "note": "Pensles før steking for blank overflate.",
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "sugar_glaze",
          "label": "Sukkerlake til pensling",
          "amount": 1,
          "unit": "dl",
          "role": "garnish",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 2
          },
          "note": "Kok like deler sukker og vann; pensle de varme bollene for blank, klissen glans.",
          "tradition": "regional"
        }
      ],
      "steps": [
        "Rør gjæren ut i den kalde melken. Bland mel, sukker, kardemomme og salt, og tilsett melkeblanding, egg og mykt smør.",
        "Elt deigen lenge og grundig til den er svært smidig, blank og elastisk. Elt inn rosinene mot slutten.",
        "Dekk bollen tett, og sett deigen til kald langheving i kjøleskapet i 8–12 timer (gjerne over natten).",
        "Ta ut deigen, trill 12 jevne boller, og la dem etterheve i romtemperatur 45–60 minutter til de er luftige.",
        "Pensle med sammenvispet egg, og stek midt i ovnen på 200 grader i 10–12 minutter til gylne.",
        "Pensle de varme bollene med sukkerlake for blank glans, og avkjøl under et klede."
      ]
    }
  },
  "swapOptions": {
    "flour": [
      {
        "id": "gf_flour",
        "label": "Glutenfri melblanding",
        "amount": 8,
        "unit": "dl",
        "note": "Bruk en blanding med bindemiddel; deigen blir klissere og hever mindre – form fuktig og gi god etterheving."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 3,
        "unit": "dl",
        "note": "Nøytral, melkefri base; varm til fingervarm på vanlig vis."
      },
      {
        "id": "lactosefree_milk",
        "label": "Laktosefri melk",
        "amount": 3,
        "unit": "dl",
        "allergens": [
          "dairy"
        ],
        "note": "For laktoseintoleranse; fortsatt melkebasert."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 75,
        "unit": "g",
        "note": "Bruk mykt; gir melkefrie boller."
      }
    ],
    "egg": [
      {
        "id": "extra_milk_eggfree",
        "label": "Ekstra plantedrikk (eggfri)",
        "amount": 0.5,
        "unit": "dl",
        "note": "Per egg: erstatt med litt ekstra plantedrikk for binding; deigen blir litt mindre rik."
      }
    ],
    "egg_wash": [
      {
        "id": "plant_wash",
        "label": "Plantedrikk til pensling (eggfri)",
        "amount": 1,
        "unit": "ss",
        "note": "Pensle med plantedrikk i stedet for egg for gylden, eggfri overflate."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "flour": 0.55,
    "gf_flour": 0.55,
    "milk": 1.03,
    "oat_milk": 1.03,
    "lactosefree_milk": 1.03,
    "extra_milk_eggfree": 1.03,
    "plant_wash": 1.03,
    "sugar": 0.85,
    "cardamom": 0.5,
    "salt": 1.2,
    "butter": 0.95,
    "margarine": 0.95
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
    "extra_milk_eggfree": [
      "dl",
      "ml",
      "g"
    ],
    "plant_wash": [
      "ss",
      "ml",
      "g"
    ],
    "sugar": [
      "dl",
      "ss",
      "ts",
      "g"
    ],
    "cardamom": [
      "ts",
      "g"
    ],
    "salt": [
      "ts",
      "g"
    ],
    "butter": [
      "g"
    ],
    "margarine": [
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
    "sweet": "Bollene blir mindre søte – fin som matbolle, eller server med syltetøy eller brunost på toppen."
  },
  "leverMessages": {
    "sweet": {
      "down": "Deigen ble søtere – vi reduserte sukkeret litt for å holde balansen.",
      "up": "Du tok bort noe sødme – vi økte sukkeret litt igjen. Smak til."
    }
  }
};
