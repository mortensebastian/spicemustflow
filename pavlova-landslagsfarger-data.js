/* ===== Pavlova i landslagsfarger med pasjonsfrukt – datamodell =====
   VM-rett 1 (Norge–Brasil): sprø pavlova i landslagsfarger med pasjonsfrukt.
   Tre nivåer: én stor pavlova → + pasjonsfrukt-curd → individuelle mini-pavlovaer.
   Egg (marengs) er strukturelt og ærlig flagget; meieri (krem) løses med plantefløte.
   Generert fra recipes-pending/pavlova-landslagsfarger.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "pavlova-landslagsfarger",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 8,
      "ingredients": [
        {
          "id": "egg_white",
          "label": "Eggehviter (romtemperert)",
          "amount": 4,
          "unit": "stk",
          "role": "binder",
          "essential": true,
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
          "id": "vinegar",
          "label": "Eplecidereddik",
          "amount": 1,
          "unit": "ts",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sour": 2
          },
          "note": "Stabiliserer marengsen og gir seig kjerne."
        },
        {
          "id": "cornstarch",
          "label": "Maizena",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Gir den seige marshmallow-kjernen."
        },
        {
          "id": "vanilla",
          "label": "Vaniljesukker",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "cream",
          "label": "Kremfløte (til topp)",
          "amount": 3,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "berries_red",
          "label": "Jordbær og bringebær (rødt)",
          "amount": 200,
          "unit": "g",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 1
          }
        },
        {
          "id": "blueberries",
          "label": "Blåbær (blått)",
          "amount": 100,
          "unit": "g",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "passionfruit",
          "label": "Pasjonsfrukt / maracujá",
          "amount": 2,
          "unit": "stk",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2
          },
          "note": "Den grønn-gule broen til Brasil – skjes over på toppen."
        },
        {
          "id": "powdered_sugar",
          "label": "Melis (hvitt, til pynt)",
          "amount": 1,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Sett ovnen på 120 °C (over- og undervarme). Tegn en sirkel på ca. 24 cm på et bakepapir og snu det ned på stekebrettet.",
        "Pisk eggehvitene til stive topper i en helt ren, tørr bolle. Tilsett sukkeret én spiseskje om gangen, og pisk til marengsen er blank og stiv.",
        "Vend forsiktig inn eddik, maizena og vanilje med en slikkepott.",
        "Form marengsen innenfor sirkelen med en liten fordypning i midten. Stek 75–90 minutter til overflaten er tørr og slipper papiret. Skru av ovnen og la pavlovaen kjølne helt med døren på gløtt.",
        "Pisk kremfløten til den så vidt holder formen, og fordel den i fordypningen på den avkjølte bunnen.",
        "VM-tips: pynt i landslagsfarger – røde bær, blåbær og et dryss melis – og skje pasjonsfrukt over. Server straks."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 8,
      "ingredients": [
        {
          "id": "egg_white",
          "label": "Eggehviter (romtemperert)",
          "amount": 5,
          "unit": "stk",
          "role": "binder",
          "essential": true,
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
          "id": "vinegar",
          "label": "Eplecidereddik",
          "amount": 1,
          "unit": "ts",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sour": 2
          },
          "note": "Stabiliserer marengsen."
        },
        {
          "id": "cornstarch",
          "label": "Maizena",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "vanilla",
          "label": "Vaniljesukker",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "egg_yolk",
          "label": "Eggeplommer (til pasjonsfrukt-curd)",
          "amount": 3,
          "unit": "stk",
          "role": "binder",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "curd_sugar",
          "label": "Sukker (til curd)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "curd_butter",
          "label": "Smør (til curd)",
          "amount": 50,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "cream",
          "label": "Kremfløte (til topp)",
          "amount": 3,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "berries_red",
          "label": "Jordbær og bringebær (rødt)",
          "amount": 250,
          "unit": "g",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 1
          }
        },
        {
          "id": "blueberries",
          "label": "Blåbær (blått)",
          "amount": 100,
          "unit": "g",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "passionfruit",
          "label": "Pasjonsfrukt / maracujá",
          "amount": 4,
          "unit": "stk",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2
          },
          "note": "Til curd og pynt."
        },
        {
          "id": "powdered_sugar",
          "label": "Melis (hvitt, til pynt)",
          "amount": 1,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Sett ovnen på 120 °C. Tegn en sirkel på ca. 24 cm på bakepapir.",
        "Pisk eggehvitene stive, tilsett sukkeret gradvis til marengsen er blank og stiv, og vend inn eddik, maizena og vanilje.",
        "Form marengsen til en sirkel med fordypning i midten, og stek 75–90 minutter. La den kjølne i avslått ovn med døren på gløtt.",
        "Pasjonsfrukt-curd: visp eggeplommer, sukker og fruktkjøtt fra pasjonsfrukten over vannbad til det tykner. Rør inn smøret til en blank curd, og avkjøl.",
        "Pisk kremfløten. Fordel kremen på den avkjølte bunnen, og skje curden over i et virvlende mønster.",
        "VM-tips: pynt i landslagsfarger med røde bær, blåbær og melis, og skje resten av pasjonsfrukten over. Server straks."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 8,
      "ingredients": [
        {
          "id": "egg_white",
          "label": "Eggehviter (romtemperert)",
          "amount": 5,
          "unit": "stk",
          "role": "binder",
          "essential": true,
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
          "id": "vinegar",
          "label": "Eplecidereddik",
          "amount": 1,
          "unit": "ts",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sour": 2
          }
        },
        {
          "id": "cornstarch",
          "label": "Maizena",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "vanilla",
          "label": "Vaniljesukker",
          "amount": 1,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "egg_yolk",
          "label": "Eggeplommer (til pasjonsfrukt-curd)",
          "amount": 3,
          "unit": "stk",
          "role": "binder",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "curd_sugar",
          "label": "Sukker (til curd)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "curd_butter",
          "label": "Smør (til curd)",
          "amount": 50,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "cream",
          "label": "Kremfløte (til topp)",
          "amount": 3,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "mascarpone",
          "label": "Mascarpone (i kremen)",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "Gjør kremen fastere og rikere; fint til individuelle pavlovaer."
        },
        {
          "id": "berries_red",
          "label": "Jordbær og bringebær (rødt)",
          "amount": 250,
          "unit": "g",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 1
          }
        },
        {
          "id": "blueberries",
          "label": "Blåbær (blått)",
          "amount": 125,
          "unit": "g",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "passionfruit",
          "label": "Pasjonsfrukt / maracujá",
          "amount": 4,
          "unit": "stk",
          "role": "fruit",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2
          }
        },
        {
          "id": "powdered_sugar",
          "label": "Melis (hvitt, til pynt)",
          "amount": 1,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Sett ovnen på 120 °C. Tegn 8 sirkler på ca. 9 cm på bakepapir til individuelle pavlovaer.",
        "Pisk eggehvitene stive, tilsett sukkeret gradvis til blank og stiv marengs, og vend inn eddik, maizena og vanilje.",
        "Sprøyt eller form marengsen til små reir med fordypning i midten. Stek 60–75 minutter, og la dem kjølne i avslått ovn med døren på gløtt.",
        "Pasjonsfrukt-curd: visp eggeplommer, sukker og pasjonsfruktkjøtt over vannbad til det tykner, rør inn smøret, og avkjøl.",
        "Pisk kremfløten med mascarpone til en fast, rik krem. Fyll hvert reir med krem og en klatt curd.",
        "VM-tips: pynt hver pavlova i landslagsfarger – røde bær, blåbær, melis og en skje pasjonsfrukt – og del dem ut foran skjermen."
      ]
    }
  },
  "swapOptions": {
    "cream": [
      {
        "id": "plant_cream",
        "label": "Pisket plantefløte (melkefri)",
        "amount": 3,
        "unit": "dl",
        "tradition": "non-traditional",
        "note": "Kokos- eller havrebasert fløte merket for pisking; gjør hele desserten melkefri."
      }
    ],
    "berries_red": [
      {
        "id": "strawberries_only",
        "label": "Bare jordbær",
        "amount": 250,
        "unit": "g",
        "tradition": "regional",
        "note": "Rendyrket rødt; fint hvis bringebær er dyrt eller utilgjengelig."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "sugar": 0.85,
    "cream": 1,
    "plant_cream": 1,
    "vinegar": 1,
    "curd_sugar": 0.85
  },
  "pieceWeight": {
    "egg_white": 33,
    "egg_yolk": 18,
    "passionfruit": 40
  },
  "unitOptions": {
    "sugar": [
      "dl",
      "ml",
      "g"
    ],
    "cream": [
      "dl",
      "ml",
      "g"
    ],
    "plant_cream": [
      "dl",
      "ml",
      "g"
    ],
    "vinegar": [
      "ts",
      "ss",
      "ml"
    ],
    "curd_sugar": [
      "dl",
      "ml",
      "g"
    ]
  },
  "bulkRoles": [
    "binder",
    "fat"
  ],
  "levers": [],
  "requireRoles": [],
  "tasteMessages": {
    "sour": "Desserten blir mindre frisk – mer bær eller en ekstra pasjonsfrukt balanserer den søte marengsen."
  },
  "leverMessages": {}
};
