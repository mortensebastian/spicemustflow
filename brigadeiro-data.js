/* ===== Brigadeiro med brunost – brasilianske sjokoladekuler – datamodell =====
   VM-rett 3 (Norge–Brasil): brasilianske sjokoladekuler med norsk brunost-vri.
   Enkel = klassisk brigadeiro; medium/kompleks smelter inn brunost. Melkefri via
   kokosbasert kondensert melk + margarin (dropp brunost).
   Generert fra recipes-pending/brigadeiro.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "brigadeiro",
  "yieldNoun": "kuler",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 20,
      "ingredients": [
        {
          "id": "condensed_milk",
          "label": "Søtet kondensert melk (1 boks)",
          "amount": 400,
          "unit": "g",
          "role": "bulk",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 3
          }
        },
        {
          "id": "cocoa",
          "label": "Kakao, siktet",
          "amount": 4,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "bitter": 2
          }
        },
        {
          "id": "butter",
          "label": "Smør",
          "amount": 30,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "salt",
          "label": "Flaksalt",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Løfter sjokoladesmaken."
        },
        {
          "id": "sprinkles",
          "label": "Sjokoladestrøssel (til rulling)",
          "amount": 1,
          "unit": "dl",
          "role": "topping",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Ha kondensert melk, siktet kakao og smør i en tykkbunnet kjele.",
        "Kok på svak til middels varme under stadig omrøring i 8–10 minutter, til massen er tykk og slipper bunnen når du drar slikkepotten over.",
        "Hell massen over på en smurt tallerken, og avkjøl helt – gjerne et par timer i kjøleskap eller over natten.",
        "Smør hendene med litt smør, ta små klatter med en teskje, og trill til ca. 20 kuler.",
        "Rull kulene i sjokoladestrøssel med en gang, og sett dem kaldt minst 1 time før servering."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 20,
      "ingredients": [
        {
          "id": "condensed_milk",
          "label": "Søtet kondensert melk (1 boks)",
          "amount": 400,
          "unit": "g",
          "role": "bulk",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 3
          }
        },
        {
          "id": "cocoa",
          "label": "Kakao, siktet",
          "amount": 3,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "bitter": 2
          }
        },
        {
          "id": "butter",
          "label": "Smør",
          "amount": 25,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "brown_cheese",
          "label": "Brunost, finrevet",
          "amount": 75,
          "unit": "g",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 1,
            "umami": 1
          },
          "note": "Den norske vrien – smelter inn til karamell-dybde."
        },
        {
          "id": "salt",
          "label": "Flaksalt",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "sprinkles",
          "label": "Sjokoladestrøssel (til rulling)",
          "amount": 1,
          "unit": "dl",
          "role": "topping",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Ha kondensert melk, siktet kakao, smør og finrevet brunost i en tykkbunnet kjele.",
        "Kok på svak til middels varme under stadig omrøring i 8–10 minutter, til brunosten er smeltet inn og massen slipper bunnen.",
        "Hell massen over på en smurt tallerken, og avkjøl helt.",
        "Smør hendene, og trill massen til ca. 20 kuler.",
        "Rull kulene i sjokoladestrøssel, og sett dem kaldt minst 1 time før servering."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 20,
      "ingredients": [
        {
          "id": "condensed_milk",
          "label": "Søtet kondensert melk (1 boks)",
          "amount": 400,
          "unit": "g",
          "role": "bulk",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 3
          }
        },
        {
          "id": "cocoa",
          "label": "Kakao, siktet",
          "amount": 2,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "bitter": 2
          }
        },
        {
          "id": "dark_chocolate",
          "label": "Mørk sjokolade, hakket",
          "amount": 50,
          "unit": "g",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 2
          },
          "note": "Gir rikere, mer voksen sjokoladesmak."
        },
        {
          "id": "butter",
          "label": "Smør",
          "amount": 25,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "brown_cheese",
          "label": "Brunost, finrevet",
          "amount": 100,
          "unit": "g",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 1,
            "umami": 1
          },
          "note": "Den norske vrien."
        },
        {
          "id": "cream",
          "label": "Kremfløte",
          "amount": 0.5,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "Gjør kulene ekstra kremete (fudge-aktige)."
        },
        {
          "id": "salt",
          "label": "Flaksalt",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "sprinkles",
          "label": "Strøssel i landslagsfarger (til rulling)",
          "amount": 1.5,
          "unit": "dl",
          "role": "topping",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "note": "Rødt, hvitt og blått strøssel/perler – og gjerne kokos for det hvite."
        }
      ],
      "steps": [
        "Ha kondensert melk, siktet kakao, hakket sjokolade, smør, brunost og fløte i en tykkbunnet kjele.",
        "Kok på svak til middels varme under stadig omrøring i 9–11 minutter, til massen er blank og slipper bunnen.",
        "Hell massen på en smurt tallerken, og avkjøl helt – gjerne over natten for fastest masse.",
        "Smør hendene, og trill massen til ca. 20 kuler. Sett dem i små papirformer.",
        "VM-tips: lag en landskamp på fatet – rull halvparten i mørkt sjokoladestrøssel (Brasil) og halvparten i rødt, hvitt og blått (Norge). Sett kaldt minst 1 time før servering."
      ]
    }
  },
  "swapOptions": {
    "condensed_milk": [
      {
        "id": "coconut_condensed",
        "label": "Kokosbasert kondensert melk (melkefri)",
        "amount": 400,
        "unit": "g",
        "tradition": "non-traditional",
        "taste": {
          "sweet": 3
        },
        "note": "Melkefri base; dropp brunosten for en helt melkefri kule."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 30,
        "unit": "g",
        "tradition": "non-traditional",
        "note": "Melkefritt alternativ til smøret."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "cocoa": 0.45,
    "sprinkles": 0.6,
    "cream": 1
  },
  "unitOptions": {
    "cocoa": [
      "ss",
      "ts",
      "g"
    ],
    "sprinkles": [
      "dl",
      "ml",
      "g"
    ],
    "cream": [
      "dl",
      "ml",
      "g"
    ]
  },
  "bulkRoles": [
    "bulk"
  ],
  "levers": [],
  "requireRoles": [],
  "tasteMessages": {
    "bitter": "Kulene blir søtere og mindre sjokoladeintense – øk gjerne kakaoen litt."
  },
  "leverMessages": {}
};
