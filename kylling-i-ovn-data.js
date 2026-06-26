/* ===== Kylling i ovn (kyllingfilet i ovn) – datamodell =====
Saftig kylling i ovn; tre nivåer som teknikk-stige rundt salting og kjernetemperatur.
   Generert fra recipes-pending/kylling-i-ovn.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "kylling-i-ovn",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "chicken_breast",
          "label": "Kyllingfilet",
          "amount": 600,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "note": "Tørk filetene tørre før krydring."
        },
        {
          "id": "neutral_oil",
          "label": "Nøytral olje",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "chicken_spice",
          "label": "Ferdig kyllingkrydder (eller paprikakrydder)",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "vegetables",
          "label": "Grovt skårne grønnsaker (paprika, løk, squash)",
          "amount": 600,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "(valgfritt) Vend i litt olje og salt, og stek i samme form."
        },
        {
          "id": "salt_added",
          "label": "Salt og pepper",
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
        "Sett ovnen på 200 °C. Tørk kyllingfiletene, og gni dem inn med olje, kyllingkrydder, salt og pepper.",
        "Skjær grønnsakene i grove biter, vend dem i litt olje og salt, og fordel dem i en ildfast form. Legg kyllingen oppå.",
        "Stek midt i ovnen i 18–25 minutter, til kyllingen har en kjernetemperatur på 68–70 °C i den tykkeste delen.",
        "La kyllingen hvile noen minutter før du skjærer i den, så holder den på saften. Smak til og server."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "chicken_breast",
          "label": "Kyllingfilet",
          "amount": 600,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "note": "Salt filetene 30–60 minutter før steking for saftigere kjøtt."
        },
        {
          "id": "olive_oil",
          "label": "Olivenolje",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "garlic",
          "label": "Hvitløk, finhakket",
          "amount": 2,
          "unit": "fedd",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "lemon_juice",
          "label": "Sitronsaft (fra ½ sitron)",
          "amount": 1,
          "unit": "ss",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2
          },
          "onRemove": {
            "tip": "Uten sitron blir marinaden mildere – press gjerne litt sitron over den ferdige kyllingen i stedet."
          }
        },
        {
          "id": "paprika_powder",
          "label": "Paprikapulver",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "thyme",
          "label": "Tørket timian",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "root_vegetables",
          "label": "Rotgrønnsaker (gulrot, potet, løk), i biter",
          "amount": 700,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "Skjær i jevne biter så de blir ferdige samtidig med kyllingen."
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
        },
        {
          "id": "pepper",
          "label": "Pepper",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        }
      ],
      "steps": [
        "Rør sammen olivenolje, hvitløk, sitronsaft, paprikapulver, timian, salt og pepper til en marinade. Vend kyllingfiletene i den, og la dem helst stå 30–60 minutter (eller over natten i kjøleskapet).",
        "Sett ovnen på 200 °C. Skjær rotgrønnsakene i jevne biter, vend dem i litt olje og salt, og fordel dem i en ildfast form.",
        "Legg kyllingen oppå grønnsakene, og hell over resten av marinaden. Stek midt i ovnen i 20–30 minutter, til kjernetemperaturen er 68–70 °C.",
        "La kyllingen hvile noen minutter. Smak til, og press gjerne litt fersk sitron over før servering."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "chicken_thigh",
          "label": "Kyllinglår med skinn",
          "amount": 800,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 75,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "note": "Tørrsalt lårene i kjøleskapet et par timer (gjerne over natten) for skarpt skinn og saftig kjøtt."
        },
        {
          "id": "herb_butter",
          "label": "Hjemmelaget urtesmør (smør, hvitløk, persille)",
          "amount": 3,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "Smøres under skinnet for saftig, smaksrikt kjøtt."
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
          "id": "garlic",
          "label": "Hvitløk",
          "amount": 4,
          "unit": "fedd",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "lemon",
          "label": "Sitron, i båter",
          "amount": 1,
          "unit": "stk",
          "role": "acid",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 2
          },
          "onRemove": {
            "tip": "Uten sitron i formen blir retten mildere – press litt sitron over kyllingen ved servering."
          }
        },
        {
          "id": "thyme",
          "label": "Frisk timian",
          "amount": 3,
          "unit": "kvist",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "white_wine",
          "label": "Hvitvin (i bunnen av formen)",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Holder formen fuktig og gir en liten sjy; kan byttes til kraft."
        },
        {
          "id": "chicken_stock",
          "label": "Kyllingkraft",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 150,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "root_vegetables",
          "label": "Rotgrønnsaker (gulrot, pastinakk, sjalott), i biter",
          "amount": 700,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 1.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "pepper",
          "label": "Sort pepper, nykvernet",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        }
      ],
      "steps": [
        "Tørrsalt kyllinglårene: gni inn salt, og la dem ligge utildekket i kjøleskapet et par timer eller over natten, så skinnet tørker og blir sprøtt.",
        "Rør sammen urtesmøret, og smør det forsiktig inn under skinnet på hvert lår. Pensle skinnet med litt olivenolje, og kvern over pepper.",
        "Sett ovnen på 200 °C. Fordel rotgrønnsaker, hvitløk, sitronbåter og timian i en ildfast form, og hell hvitvin og kraft i bunnen. Legg lårene oppå med skinnsiden opp.",
        "Stek midt i ovnen i 35–45 minutter, til kjernetemperaturen i lårene er rundt 75 °C og skinnet er gyllent og sprøtt. Øk eventuelt til 225 °C de siste minuttene for ekstra farge.",
        "La kyllingen hvile noen minutter. Hell sjyen fra formen over ved servering."
      ]
    }
  },
  "swapOptions": {
    "chicken_breast": [
      {
        "id": "chicken_thigh_fillet",
        "label": "Kyllinglårfilet (saftigere)",
        "amount": 700,
        "unit": "g",
        "sodiumPer100g": 75,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Mørkere, saftigere kjøtt; tåler lengre steketid – stek til ca. 75 °C."
      }
    ],
    "chicken_thigh": [
      {
        "id": "chicken_breast_swap",
        "label": "Kyllingfilet (magrere)",
        "amount": 600,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Magrere og raskere; ta ut ved 68–70 °C så den ikke blir tørr."
      }
    ],
    "neutral_oil": [
      {
        "id": "olive_oil",
        "label": "Olivenolje",
        "amount": 2,
        "unit": "ss",
        "tradition": "traditional",
        "note": "Litt fyldigere smak."
      }
    ],
    "olive_oil": [
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (nøytral)",
        "amount": 2,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Nøytral og rimelig."
      }
    ],
    "chicken_spice": [
      {
        "id": "single_spices",
        "label": "Egne krydder (paprika, hvitløkspulver, timian)",
        "amount": 2,
        "unit": "ts",
        "tradition": "non-traditional",
        "note": "Bland selv i stedet for ferdigkrydder."
      }
    ],
    "herb_butter": [
      {
        "id": "herb_oil",
        "label": "Urtolje (melkefri)",
        "amount": 3,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Olje rørt med hvitløk og persille; melkefritt alternativ til urtesmør."
      },
      {
        "id": "margarine",
        "label": "Urtemargarin (melkefri)",
        "amount": 3,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Margarin rørt med hvitløk og persille; melkefri fylde."
      }
    ],
    "white_wine": [
      {
        "id": "stock_extra",
        "label": "Ekstra kyllingkraft (alkoholfritt)",
        "amount": 1,
        "unit": "dl",
        "sodiumPer100g": 150,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Alkoholfritt; tilsett en skvett sitron for friskhet."
      }
    ],
    "chicken_stock": [
      {
        "id": "bouillon",
        "label": "Kyllingbuljong (terning)",
        "amount": 1,
        "unit": "dl",
        "sodiumPer100g": 350,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Raskere; saltere – salt justeres automatisk."
      }
    ]
  },
  "servedAcid": {
    "tip": "Mangler retten friskhet? Press litt sitron over den ferdige kyllingen rett før servering."
  },
  "density": {
    "neutral_oil": 0.92,
    "olive_oil": 0.92,
    "rapeseed_oil": 0.92,
    "lemon_juice": 1,
    "white_wine": 0.99,
    "chicken_stock": 1,
    "stock_extra": 1,
    "bouillon": 1,
    "salt_added": 1.2,
    "herb_butter": 0.95,
    "herb_oil": 0.92,
    "margarine": 0.95
  },
  "pieceWeight": {
    "onion": 110,
    "garlic": 5,
    "lemon": 100,
    "bell_pepper": 160
  },
  "unitOptions": {
    "neutral_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "olive_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "lemon_juice": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "white_wine": [
      "dl",
      "ml",
      "g"
    ],
    "chicken_stock": [
      "dl",
      "ml",
      "g"
    ],
    "stock_extra": [
      "dl",
      "ml",
      "g"
    ],
    "bouillon": [
      "dl",
      "ml",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "herb_butter": [
      "ss",
      "g"
    ],
    "herb_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "margarine": [
      "ss",
      "g"
    ]
  },
  "bulkRoles": [
    "protein",
    "vegetable"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    }
  ],
  "requireRoles": ["acid"],
  "tasteMessages": {
    "sweet": "Mindre søtlig dybde – litt mer løk eller paprika i formen balanserer.",
    "umami": "Retten blir litt flatere – et dryss krydder eller en skvett soya gir fylde."
  },
  "leverMessages": {
    "salt": {
      "down": "Du la til en saltere ingrediens – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    }
  }
};
