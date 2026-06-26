/* ===== Hjemmelaget kyllingkraft – datamodell =====
Kyllingkraft – grunnoppskrift (base). Tre nivåer: enkel hurtigkraft på ett skrog, medium standard skrog+bein+rotgrønnsaker, kompleks ovnsstekt/brunet mørk kraft med tomatpuré og vin. Ingen levere/requireRoles – en kraft auto-balanseres ikke; salt bevisst valgfritt og lavt. Yield i liter. Ingen kategori (linkbar base-rett).
   Generert fra recipes-pending/kyllingkraft.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "kyllingkraft",
  "yieldNoun": "liter",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 2,
      "ingredients": [
        {
          "id": "chicken_bones",
          "label": "Kyllingskrog (ett, gjerne rester av stekt kylling)",
          "amount": 700,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "water",
          "label": "Vann (kaldt)",
          "amount": 22,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "onion",
          "label": "Løk, delt i to (med skall for farge)",
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
          "id": "carrot",
          "label": "Gulrot, i grove biter",
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
          "id": "bay_leaf",
          "label": "Laurbærblad",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "peppercorns",
          "label": "Hele sorte pepperkorn",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "salt_added",
          "label": "Salt (valgfritt – hold lavt)",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "note": "Kraft saltes helst lite. Salt heller retten du bruker kraften i."
        }
      ],
      "steps": [
        "Skyll kyllingskroget i kaldt vann, legg det i en stor gryte og dekk med det kalde vannet.",
        "Kok opp, og skum av skummet som stiger opp de første minuttene med en hullsleiv.",
        "Skru ned til kraften så vidt syder. Ha i løk, gulrot, laurbærblad og pepperkorn.",
        "La syde uten lokk i halvannen til to timer – ikke kok hardt, da blir kraften grumsete.",
        "Sil kraften gjennom en finmasket sil. Smak til med en liten klype salt om du vil, eller la den stå usaltet. Avkjøl raskt."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 2,
      "ingredients": [
        {
          "id": "chicken_bones",
          "label": "Kyllingskrog og bein",
          "amount": 1200,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "water",
          "label": "Vann (kaldt)",
          "amount": 25,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "onion",
          "label": "Løk, delt i to (med skall)",
          "amount": 2,
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
          "id": "carrot",
          "label": "Gulrot, i grove biter",
          "amount": 2,
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
          "id": "leek",
          "label": "Purre, i grove biter",
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
          "id": "celery_stalk",
          "label": "Stilkselleri",
          "amount": 2,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "celery"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "bay_leaf",
          "label": "Laurbærblad",
          "amount": 2,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "thyme",
          "label": "Frisk timian",
          "amount": 2,
          "unit": "kvist",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "parsley",
          "label": "Persillestilker",
          "amount": 3,
          "unit": "kvist",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "peppercorns",
          "label": "Hele sorte pepperkorn",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "salt_added",
          "label": "Salt (valgfritt – hold lavt)",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "note": "Kraft saltes helst lite. Salt heller retten du bruker kraften i."
        }
      ],
      "steps": [
        "Skyll skrog og bein i kaldt vann, legg dem i en stor gryte og dekk med det kalde vannet.",
        "Kok opp, og skum grundig av skum og fett som stiger opp i starten med en hullsleiv.",
        "Skru ned til kraften så vidt syder. Skjær grønnsakene i grove biter og ha dem i sammen med urter og pepperkorn.",
        "La syde uten lokk i tre til fire timer. Hold svak varme hele veien – kraften skal aldri fosskoke.",
        "Sil kraften gjennom en finmasket sil over i en ren bolle. Avkjøl raskt, og sett den kaldt.",
        "Dagen etter løfter du lett av fettlaget som har stivnet på toppen. Smak eventuelt til med litt salt ved bruk."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 2,
      "ingredients": [
        {
          "id": "chicken_bones",
          "label": "Kyllingskrog og bein (gjerne vinger for ekstra gelatin)",
          "amount": 1500,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "oil",
          "label": "Nøytral olje (til ovnssteking)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "water",
          "label": "Vann (kaldt)",
          "amount": 25,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "onion",
          "label": "Løk, delt i to (med skall)",
          "amount": 2,
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
          "id": "carrot",
          "label": "Gulrot, i grove biter",
          "amount": 2,
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
          "id": "leek",
          "label": "Purre, i grove biter",
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
          "id": "celery_stalk",
          "label": "Stilkselleri",
          "amount": 2,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "celery"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "garlic",
          "label": "Hvitløksfedd, knust",
          "amount": 4,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "tomato_paste",
          "label": "Tomatpuré",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          },
          "note": "Strykes på beina før ovnssteking – gir farge og dybde."
        },
        {
          "id": "wine",
          "label": "Hvitvin (til å løse stekeskorpen)",
          "amount": 1.5,
          "unit": "dl",
          "role": "acid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sour": 1
          },
          "note": "Brukes til å skrape løs all den brune stekeskorpen fra brettet.",
          "onRemove": {
            "tip": "Vinen løser stekeskorpen og gir syrlig dybde. Uten den skraper du brettet rent med litt vann i stedet."
          }
        },
        {
          "id": "bay_leaf",
          "label": "Laurbærblad",
          "amount": 2,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "thyme",
          "label": "Frisk timian",
          "amount": 3,
          "unit": "kvist",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "parsley",
          "label": "Persillestilker",
          "amount": 3,
          "unit": "kvist",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "peppercorns",
          "label": "Hele sorte pepperkorn",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "salt_added",
          "label": "Salt (valgfritt – hold lavt)",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "note": "Kraft saltes helst lite. Salt heller retten du bruker kraften i."
        }
      ],
      "steps": [
        "Sett ovnen på 200 °C. Legg skrog, bein og de grovkuttede grønnsakene i en langpanne, ringle over olje, og smør tomatpuré på beina.",
        "Stek midt i ovnen i 30–40 minutter til alt er gyllenbrunt – det er bruningen som gir den mørke, rike kraften.",
        "Ha alt over i en stor gryte. Sett langpannen på platen, hell i vinen, og skrap løs all stekeskorpen; hell dette i gryta.",
        "Dekk med det kalde vannet, ha i hvitløk, urter og pepperkorn. Kok opp og skum av.",
        "Skru ned til kraften så vidt syder, og la den trekke uten lokk i fire til seks timer. Hold svak varme – aldri fosskoking.",
        "Sil kraften gjennom en finmasket sil. Vil du ha den mer konsentrert, koker du den forsiktig inn. Avkjøl raskt, og løft av fettet dagen etter."
      ]
    }
  },
  "swapOptions": {
    "chicken_bones": [
      {
        "id": "whole_chicken",
        "label": "Hel kylling",
        "amount": 1200,
        "unit": "g",
        "tradition": "traditional",
        "note": "Gir både kokt kyllingkjøtt og kraft. Ta opp kyllingen når den er gjennomkokt (ca. 1 time), plukk kjøttet, og la beina trekke videre."
      },
      {
        "id": "chicken_wings",
        "label": "Kyllingvinger",
        "amount": 1200,
        "unit": "g",
        "tradition": "regional",
        "note": "Mye brusk og gelatin – gir en ekstra rik og fyldig kraft som stivner godt."
      },
      {
        "id": "hen",
        "label": "Suppehøne (hønsekraft)",
        "amount": 1200,
        "unit": "g",
        "tradition": "traditional",
        "note": "Eldre høne gir en dypere, mer smaksrik kraft, men trenger lengre koketid (gjerne 4–6 timer)."
      }
    ],
    "celery_stalk": [
      {
        "id": "fennel",
        "label": "Fennikel (sellerifri)",
        "amount": 1,
        "unit": "stk",
        "tradition": "non-traditional",
        "note": "Sellerifritt alternativ med en mild, søtlig anistone. Bruk omtrent en halv fennikel per to stilker selleri.",
        "taste": {
          "sweet": 1
        }
      }
    ],
    "wine": [
      {
        "id": "no_wine",
        "label": "Mer vann (uten vin)",
        "amount": 1.5,
        "unit": "dl",
        "tradition": "non-traditional",
        "note": "Skrap stekeskorpen løs med vann i stedet. Du mister litt syrlig dybde, men kraften blir like fin."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "water": 1,
    "oil": 0.92,
    "tomato_paste": 1.1,
    "wine": 0.99,
    "salt_added": 1.2,
    "no_wine": 1
  },
  "pieceWeight": {
    "onion": 110,
    "carrot": 70,
    "leek": 150,
    "celery_stalk": 50,
    "garlic": 5,
    "fennel": 250
  },
  "unitOptions": {
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "tomato_paste": [
      "ss",
      "g"
    ],
    "wine": [
      "dl",
      "ml",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "no_wine": [
      "dl",
      "ml",
      "g"
    ]
  },
  "bulkRoles": [
    "liquid",
    "protein"
  ],
  "levers": [],
  "requireRoles": [],
  "tasteMessages": {
    "umami": "Kraften blir mindre fyldig – la den trekke lenger, bruk flere bein, eller kok den litt inn for å konsentrere smaken."
  },
  "leverMessages": {}
};
