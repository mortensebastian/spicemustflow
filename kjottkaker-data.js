/* ===== Kjøttkaker i brun saus – datamodell =====
   Tre nivåer (enkel/medium/kompleks), delte bytter og salt-lever. Ren data.
   Mengdene gjelder 4 porsjoner. Felt forklart i recipe-authoring.md.
   Generert av build-recipe fra recipes-pending/kjottkaker.json. */

window.RECIPE = {
  "id": "kjottkaker",
  "bulkRoles": [
    "protein",
    "liquid",
    "aromatic"
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
    "umami": "Retten blir mindre fyldig – vurder litt ekstra kraft for dybde.",
    "sweet": "Mindre søtlig dybde – litt brunet løk balanserer."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    }
  },
  "density": {
    "milk": 1.03,
    "stock": 1,
    "potato_flour": 0.6,
    "wheat_flour": 0.55,
    "butter": 0.95,
    "salt_added": 1.2,
    "nutmeg": 0.5,
    "ginger": 0.4,
    "pepper": 0.45,
    "oat_milk": 1.03,
    "water": 1,
    "extra_potato_flour": 0.6,
    "potato_flour_thickener": 0.6,
    "wheat_flour_binder": 0.55,
    "margarine": 0.95,
    "rapeseed_oil": 0.92,
    "bouillon": 1
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
    "stock": [
      "dl",
      "ml",
      "g"
    ],
    "potato_flour": [
      "ss",
      "g"
    ],
    "wheat_flour": [
      "ss",
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
    "nutmeg": [
      "ts",
      "g"
    ],
    "ginger": [
      "ts",
      "g"
    ],
    "pepper": [
      "ts",
      "g"
    ],
    "oat_milk": [
      "dl",
      "ml",
      "g"
    ],
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "extra_potato_flour": [
      "ss",
      "g"
    ],
    "potato_flour_thickener": [
      "ss",
      "g"
    ],
    "wheat_flour_binder": [
      "ss",
      "g"
    ],
    "margarine": [
      "ss",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "g"
    ],
    "bouillon": [
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
          "id": "beef",
          "label": "Kjøttdeig",
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
          "id": "potato_flour",
          "label": "Potetmel (eller hvetemel)",
          "amount": 1.5,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "milk",
          "label": "Melk (eller vann)",
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
          "id": "stock",
          "label": "Oksekraft (eller buljongterning + vann)",
          "amount": 4,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 200,
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "butter",
          "label": "Smør (til steking og saus)",
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
          "id": "wheat_flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Arbeid salt godt inn i kjøttdeigen til den blir seig. Bland inn potetmel og litt pepper.",
        "Spe med melk litt om gangen, og arbeid farsen jevn og smidig. La hvile 10 minutter.",
        "Form kaker, og brun dem i smør 2–3 minutter på hver side. Ta dem opp.",
        "Lag en lys smørjevning av smøret og hvetemelet, spe med varm kraft til blank saus.",
        "Legg kakene tilbake og la dem trekke 10–15 minutter. Smak til og server med kokte poteter."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
          "label": "Kjøttdeig av okse",
          "amount": 400,
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
          "id": "pork",
          "label": "Svinedeig",
          "amount": 100,
          "unit": "g",
          "role": "protein",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": true,
          "taste": {
            "umami": 1
          }
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
          "amount": 1.5,
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
          "id": "nutmeg",
          "label": "Revet muskat",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "ginger",
          "label": "Malt ingefær",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "stock",
          "label": "Oksekraft (eller buljongterning + vann)",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 200,
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "butter",
          "label": "Smør (til steking og saus)",
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
          "id": "wheat_flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Surr løken myk og blank i litt smør, og avkjøl.",
        "Arbeid salt inn i okse- og svinedeigen til farsen blir seig. Bland inn egg, potetmel, muskat, ingefær og pepper.",
        "Spe med melk litt om gangen, vend inn den avkjølte løken, og la farsen hvile 10 minutter.",
        "Form kaker, og brun dem i smør til gyllen skorpe. Ta dem opp.",
        "Lag en gyllen smørjevning av smøret og hvetemelet, spe med varm kraft til blank saus.",
        "La kjøttkakene trekke 12–15 minutter i sausen. Smak til og server med poteter og tyttebær."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
          "label": "Høyrygg, grovkvernet",
          "amount": 350,
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
          "id": "pork",
          "label": "Svinenakke, grovkvernet",
          "amount": 150,
          "unit": "g",
          "role": "protein",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": true,
          "taste": {
            "umami": 1
          }
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
          "label": "Helmelk",
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
          "id": "nutmeg",
          "label": "Revet muskat",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
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
          "taste": {
            "bitter": 1
          },
          "tradition": "traditional"
        },
        {
          "id": "pepper",
          "label": "Sort pepper, nykvernet",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "stock",
          "label": "Hjemmelaget oksekraft",
          "amount": 6,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 150,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "butter",
          "label": "Smør (til steking og saus)",
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
          "id": "wheat_flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2.5,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Kvern kjøttet selv eller be slakteren grovkverne. Hold alt kaldt.",
        "Surr løken gyllen i litt smør, og avkjøl helt.",
        "Arbeid salt inn i farsen til den blir seig og blank. Elt inn egg, potetmel, muskat, ingefær og pepper, og spe med melk litt om gangen.",
        "Vend inn den avkjølte løken, og la farsen hvile kaldt 30 minutter.",
        "Form kaker, og brun dem i smør til mørk skorpe. Ta dem opp.",
        "Lag en mørk smørjevning av smøret og hvetemelet i samme panne, spe med varm kraft, og kok sausen blank.",
        "La kjøttkakene trekke 15–20 minutter. Smak til og server med kokte poteter, ertestuing og tyttebær."
      ]
    }
  },
  "swapOptions": {
    "beef": [
      {
        "id": "elk",
        "label": "Elgdeig (vilt)",
        "amount": 400,
        "unit": "g",
        "sodiumPer100g": 55,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Magrere og mer smakfullt; tilsett litt ekstra smør for saftighet."
      },
      {
        "id": "chicken_mince",
        "label": "Kyllingkjøttdeig (lettere)",
        "amount": 400,
        "unit": "g",
        "sodiumPer100g": 70,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Mildere og lettere; stek litt kortere så kakene ikke blir tørre."
      }
    ],
    "egg": [
      {
        "id": "extra_potato_flour",
        "label": "Ekstra potetmel (eggfritt)",
        "amount": 1,
        "unit": "ss",
        "tradition": "traditional",
        "note": "Binder uten egg; spe med litt mer melk eller vann."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havremelk (melkefri)",
        "amount": 1,
        "unit": "dl",
        "note": "Nøytral, melkefri base.",
        "allergens": []
      },
      {
        "id": "water",
        "label": "Vann (melkefritt)",
        "amount": 1,
        "unit": "dl",
        "note": "Helt nøytral binding, slik mange tradisjonelle oppskrifter bruker.",
        "allergens": []
      }
    ],
    "wheat_flour": [
      {
        "id": "potato_flour_thickener",
        "label": "Potetmel (glutenfri jevning)",
        "amount": 1,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Rør ut i litt kald kraft og spe i sausen; gir glutenfri, blank saus.",
        "allergens": []
      }
    ],
    "stock": [
      {
        "id": "bouillon",
        "label": "Buljong (terning, raskere)",
        "amount": 5,
        "unit": "dl",
        "sodiumPer100g": 350,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Løs en oksebuljongterning i varmt vann. Buljong er salt – smak til før du har i mer salt.",
        "allergens": []
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 2,
        "unit": "ss",
        "sodiumPer100g": 0,
        "tradition": "non-traditional",
        "note": "Melkefri steking og saus; gir nøytral, rund smak.",
        "allergens": []
      },
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (melkefri steking)",
        "amount": 2,
        "unit": "ss",
        "sodiumPer100g": 0,
        "tradition": "non-traditional",
        "note": "Nøytral olje til steking uten meieri; bruk gjerne litt margarin i sausen for fylde.",
        "allergens": []
      }
    ],
    "potato_flour": [
      {
        "id": "wheat_flour_binder",
        "label": "Hvetemel (binding)",
        "amount": 2,
        "unit": "ss",
        "tradition": "traditional",
        "note": "Vanlig binding der man ikke bruker potetmel; spe da med litt mindre væske.",
        "allergens": [
          "gluten"
        ]
      }
    ]
  }
};
