/* ===== Chili con carne – datamodell =====
Chili con carne – tex-mex-gryte med kjøtt, bønner og tomat, kokt i én gryte.
   Generert fra recipes-pending/chili-con-carne.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "chili-con-carne",
  "yieldNoun": "porsjoner",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "mince",
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
          "id": "oil",
          "label": "Nøytral olje (til steking)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "onion",
          "label": "Løk, hakket",
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
          "id": "chili_spice_mix",
          "label": "Tacokrydder eller chilikrydder (ferdig blanding)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 9000,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "note": "Én pose ferdigkrydder tilsvarer omtrent 2 ss og rekker til 400–500 g kjøttdeig."
        },
        {
          "id": "canned_tomatoes",
          "label": "Hakkede tomater (2 bokser)",
          "amount": 800,
          "unit": "g",
          "role": "acid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 80,
          "removable": false,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          },
          "isPrimaryAcid": true,
          "onRemove": {
            "tip": "Tomatene er både syren og væsken i gryta – uten dem mister chilien friskhet og blir tørr."
          }
        },
        {
          "id": "kidney_beans",
          "label": "Kidneybønner (boks, avrent og skylt)",
          "amount": 240,
          "unit": "g",
          "role": "legume",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 150,
          "removable": true,
          "taste": {
            "umami": 1
          },
          "onRemove": {
            "tip": "Uten bønner nærmer du deg ekte Texas-chili – da bærer kjøttet gryta alene, så kok den gjerne litt lenger inn."
          }
        },
        {
          "id": "chili_flakes",
          "label": "Chiliflak (valgfritt, for mer styrke)",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "sugar",
          "label": "Sukker (runder av tomatsyren)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
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
          "id": "sour_cream",
          "label": "Rømme (til servering)",
          "amount": 2,
          "unit": "dl",
          "role": "dairy",
          "scaling": "nonlinear",
          "addStage": "serve",
          "sodiumPer100g": 50,
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "rice",
          "label": "Ris (ukokt) eller nachos, til servering",
          "amount": 250,
          "unit": "g",
          "role": "starch",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Hakk løken. Varm oljen i en vid gryte, og stek kjøttdeigen på god varme til den er brun og smuldret – gjerne i to omganger, så damper den ikke.",
        "Ha i løken og stek den blank et par minutter. Dryss over krydderblandingen, og la den steke med et halvt minutt til den dufter.",
        "Hell i de hakkede tomatene, og la gryta småkoke uten lokk i 20–25 minutter til den tykner.",
        "Rør inn de avrente bønnene de siste 5–10 minuttene. Smak til med salt, sukker og eventuelt chiliflak.",
        "Server med ris eller nachos og en klatt rømme. Selve chilien er én gryte – tilbehøret lager du ved siden av mens den putrer."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "mince",
          "label": "Kjøttdeig av storfe",
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
          "id": "oil",
          "label": "Nøytral olje",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
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
          "id": "garlic",
          "label": "Hvitløk, finhakket",
          "amount": 2,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "bell_pepper",
          "label": "Rød paprika, i biter",
          "amount": 1,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "cumin",
          "label": "Malt spisskummen",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "paprika_powder",
          "label": "Paprikapulver",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "oregano",
          "label": "Tørket oregano",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "chili_powder",
          "label": "Chilipulver (juster etter ønsket styrke)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "tomato_paste",
          "label": "Tomatpuré",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": true,
          "taste": {
            "umami": 1,
            "sweet": 1
          }
        },
        {
          "id": "canned_tomatoes",
          "label": "Hakkede tomater (boks)",
          "amount": 400,
          "unit": "g",
          "role": "acid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 80,
          "removable": false,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          },
          "isPrimaryAcid": true,
          "onRemove": {
            "tip": "Tomatene er både syren og væsken i gryta – uten dem mister chilien friskhet og blir tørr."
          }
        },
        {
          "id": "beef_stock",
          "label": "Oksekraft (eller buljongterning + vann)",
          "amount": 2,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "cost": 2
        },
        {
          "id": "kidney_beans",
          "label": "Kidneybønner (boks, avrent og skylt)",
          "amount": 240,
          "unit": "g",
          "role": "legume",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 150,
          "removable": true,
          "taste": {
            "umami": 1
          },
          "onRemove": {
            "tip": "Uten bønner nærmer du deg ekte Texas-chili – da bærer kjøttet gryta alene, så kok den gjerne litt lenger inn."
          }
        },
        {
          "id": "sugar",
          "label": "Sukker (runder av tomatsyren)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
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
          "id": "sour_cream",
          "label": "Rømme (til servering)",
          "amount": 2,
          "unit": "dl",
          "role": "dairy",
          "scaling": "nonlinear",
          "addStage": "serve",
          "sodiumPer100g": 50,
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "lime",
          "label": "Lime, i båter (til servering)",
          "amount": 1,
          "unit": "stk",
          "role": "acid",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2
          },
          "onRemove": {
            "tip": "Limen er den friske kontrasten til den mørke gryta – dropper du den, gjør en liten skvett eddik omtrent samme nytte."
          }
        },
        {
          "id": "rice",
          "label": "Ris (ukokt) eller nachos, til servering",
          "amount": 250,
          "unit": "g",
          "role": "starch",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Finhakk løk og hvitløk, og skjær paprikaen i biter. Bland spisskummen, paprikapulver, oregano og chilipulver i en liten skål – det er din egen chilikrydderblanding.",
        "Varm oljen i en tykkbunnet gryte, og brun kjøttdeigen godt i to omganger. Ta den opp underveis hvis pannen blir for full.",
        "Surr løk, hvitløk og paprika myke i samme gryte i 4–5 minutter. Ha i krydderblandingen og tomatpuréen, og stek videre et minutt så krydderet får utvikle seg.",
        "Ha kjøttet tilbake i gryta sammen med hakkede tomater og kraft. Kok opp, skru ned varmen, og la chilien småkoke uten lokk i 30–40 minutter. Rør av og til.",
        "Rør inn bønnene de siste 10 minuttene. Smak til med salt og sukker – gryta skal ha både syre, rundhet og varme.",
        "Server med ris eller nachos, rømme og limebåter. Kok risen mens chilien putrer."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef_cubes",
          "label": "Høyrygg eller bog, i små terninger",
          "amount": 800,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 3
          }
        },
        {
          "id": "oil",
          "label": "Nøytral olje",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "onion",
          "label": "Løk, finhakket",
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
          "id": "garlic",
          "label": "Hvitløk, finhakket",
          "amount": 4,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "dried_chili",
          "label": "Hele tørkede chili (ancho og guajillo)",
          "amount": 3,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "tradition": "traditional",
          "cost": 3,
          "note": "Fjern stilk og frø, bløtlegg i kokende vann i 20 minutter, og kjør til en glatt pasta med litt av vannet."
        },
        {
          "id": "chipotle",
          "label": "Chipotle i adobo, hakket",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 700,
          "removable": true,
          "taste": {
            "umami": 1,
            "bitter": 1
          },
          "tradition": "traditional"
        },
        {
          "id": "cumin",
          "label": "Hele spisskummenfrø, ristet og knust",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "oregano",
          "label": "Tørket oregano (gjerne meksikansk)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "tomato_paste",
          "label": "Tomatpuré",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": true,
          "taste": {
            "umami": 1,
            "sweet": 1
          }
        },
        {
          "id": "canned_tomatoes",
          "label": "Hakkede tomater (boks)",
          "amount": 400,
          "unit": "g",
          "role": "acid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 80,
          "removable": false,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          },
          "isPrimaryAcid": true,
          "onRemove": {
            "tip": "Tomatene er både syren og væsken i gryta – uten dem mister chilien friskhet og blir tørr."
          }
        },
        {
          "id": "beef_stock",
          "label": "Hjemmelaget oksekraft",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 150,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "cost": 3
        },
        {
          "id": "coffee",
          "label": "Sterk, nytraktet kaffe",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 2
          },
          "tradition": "regional",
          "onRemove": {
            "tip": "Kaffen smaker ikke kaffe i ferdig gryte, men gir mørk dybde. Uten den blir chilien lysere og mer tomatdominert."
          }
        },
        {
          "id": "dark_chocolate",
          "label": "Mørk sjokolade (70 %)",
          "amount": 20,
          "unit": "g",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "taste": {
            "bitter": 2,
            "sweet": 1
          },
          "tradition": "traditional",
          "onRemove": {
            "tip": "Sjokoladen gjør ikke gryta søt, men rund og mørk. Uten den blir chilien friskere og skarpere i kanten."
          }
        },
        {
          "id": "kidney_beans",
          "label": "Kidneybønner (boks, avrent og skylt)",
          "amount": 240,
          "unit": "g",
          "role": "legume",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 150,
          "removable": true,
          "taste": {
            "umami": 1
          },
          "onRemove": {
            "tip": "Uten bønner er dette ekte «Texas red» – bare kjøtt, chili og krydder. Kok gryta litt lenger inn så den ikke blir tynn."
          }
        },
        {
          "id": "sugar",
          "label": "Sukker (runder av tomatsyren)",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "taste": {
            "sweet": 2
          }
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
        },
        {
          "id": "sour_cream",
          "label": "Rømme eller crème fraîche (til servering)",
          "amount": 2,
          "unit": "dl",
          "role": "dairy",
          "scaling": "nonlinear",
          "addStage": "serve",
          "sodiumPer100g": 50,
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "cheese",
          "label": "Revet ost (til servering)",
          "amount": 100,
          "unit": "g",
          "role": "cheese",
          "scaling": "nonlinear",
          "addStage": "serve",
          "sodiumPer100g": 600,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "lime",
          "label": "Lime, i båter (til servering)",
          "amount": 1,
          "unit": "stk",
          "role": "acid",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2
          },
          "onRemove": {
            "tip": "Limen er den friske kontrasten til den mørke gryta – dropper du den, gjør en liten skvett eddik omtrent samme nytte."
          }
        },
        {
          "id": "cilantro",
          "label": "Frisk koriander, grovhakket (til servering)",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "rice",
          "label": "Ris (ukokt) eller nachos, til servering",
          "amount": 250,
          "unit": "g",
          "role": "starch",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Fjern stilk og frø fra de tørkede chiliene, rist dem raskt i en tørr panne til de dufter, og bløtlegg dem i kokende vann i 20 minutter. Kjør dem til en glatt pasta med litt av bløtevannet.",
        "Skjær kjøttet i små terninger og tørk det godt. Brun det i olje i en tykkbunnet gryte, litt om gangen, til det har mørk stekeskorpe. Ta kjøttet opp.",
        "Surr løk og hvitløk myke i samme gryte. Ha i chilipastaen, chipotle, spisskummen, oregano og tomatpuré, og stek et par minutter til alt dufter og tomatpuréen mørkner.",
        "Spe med litt kraft, og skrap løs alt det brune fondet i bunnen – det er halve smaken. Ha kjøttet tilbake sammen med hakkede tomater, resten av kraften og kaffen.",
        "Kok opp, legg på lokk på gløtt, og la chilien putre på svak varme i 2–3 timer, eller i ovnen på 150 °C, til kjøttet faller fra hverandre. Rør av og til og spe med vann om den blir tykk.",
        "Rør inn bønnene og den mørke sjokoladen de siste 15 minuttene. Smak til med salt og eventuelt litt sukker, og la gryta hvile 10 minutter før servering.",
        "Server med ris eller nachos, rømme, revet ost, limebåter og frisk koriander. Chilien blir enda bedre dagen etter."
      ]
    }
  },
  "swapOptions": {
    "mince": [
      {
        "id": "lean_mince",
        "label": "Karbonadedeig (magrere)",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Magrere; tilsett gjerne litt ekstra olje så gryta ikke blir tørr."
      },
      {
        "id": "chicken_mince",
        "label": "Kyllingkjøttdeig (lettere)",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 70,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Mildere og lettere – stek litt kortere og smak ekstra til med krydder."
      },
      {
        "id": "plant_mince",
        "label": "Vegetarfarse (vegetar)",
        "amount": 450,
        "unit": "g",
        "sodiumPer100g": 400,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Bruner som kjøttdeig. Salt justeres automatisk – smak til."
      },
      {
        "id": "lentils",
        "label": "Linser (boks, avrent) og sopp (vegetar)",
        "amount": 450,
        "unit": "g",
        "sodiumPer100g": 120,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Stek soppen godt først for dybde, og ha linsene i sammen med tomatene."
      }
    ],
    "beef_cubes": [
      {
        "id": "coarse_mince",
        "label": "Grovkvernet kjøttdeig (raskere)",
        "amount": 700,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Kortere koketid – 45–60 minutter holder."
      },
      {
        "id": "pork_shoulder",
        "label": "Svinenakke i terninger",
        "amount": 800,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Litt fetere og mildere enn okse; samme lange koketid."
      },
      {
        "id": "plant_chunks",
        "label": "Vegetarbiter (vegetar)",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 400,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Brun bitene godt, og kort ned koketiden til 45 minutter."
      }
    ],
    "kidney_beans": [
      {
        "id": "black_beans",
        "label": "Sorte bønner (boks, avrent)",
        "amount": 240,
        "unit": "g",
        "sodiumPer100g": 150,
        "taste": {
          "umami": 1
        },
        "tradition": "traditional",
        "note": "Mørkere og mer meksikansk i uttrykket."
      },
      {
        "id": "chickpeas",
        "label": "Kikerter (boks, avrent)",
        "amount": 240,
        "unit": "g",
        "sodiumPer100g": 150,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Fastere biter og litt nøtteaktig smak."
      }
    ],
    "chili_spice_mix": [
      {
        "id": "home_spice_mix",
        "label": "Hjemmelaget chilikrydder (egen blanding)",
        "amount": 2,
        "unit": "ss",
        "sodiumPer100g": 200,
        "taste": {
          "umami": 1
        },
        "tradition": "traditional",
        "note": "Bland 2 ts spisskummen, 2 ts paprikapulver, 1 ts oregano og 0,5–1 ts chilipulver. Mye mindre salt enn ferdigposen – saltet justeres automatisk."
      }
    ],
    "beef_stock": [
      {
        "id": "bouillon",
        "label": "Buljongterning + vann (raskere)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 400,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "cost": 1,
        "note": "Hverdagssnarveien – salter mer, så smak til før du salter ekstra."
      },
      {
        "id": "water",
        "label": "Vann",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 0,
        "tradition": "non-traditional",
        "cost": 1,
        "note": "Mildere gryte – smak ekstra til med salt og krydder."
      }
    ],
    "oil": [
      {
        "id": "olive_oil",
        "label": "Olivenolje",
        "amount": 1,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Litt fruktigere; tåler bruning fint."
      },
      {
        "id": "butter",
        "label": "Smør",
        "amount": 1,
        "unit": "ss",
        "allergens": [
          "dairy"
        ],
        "tradition": "non-traditional",
        "note": "Rundere stekesmak, men tåler mindre varme enn olje."
      }
    ],
    "dried_chili": [
      {
        "id": "ground_chili",
        "label": "Chilipulver (lettere å få tak i)",
        "amount": 2,
        "unit": "ts",
        "tradition": "non-traditional",
        "cost": 1,
        "note": "Enklere, men mindre fruktig dybde enn hele tørkede chili."
      }
    ],
    "chipotle": [
      {
        "id": "smoked_paprika",
        "label": "Røkt paprikapulver (mildere)",
        "amount": 2,
        "unit": "ts",
        "tradition": "non-traditional",
        "note": "Gir røyksmaken uten styrken – bra til barn."
      }
    ],
    "coffee": [
      {
        "id": "stock_extra",
        "label": "Ekstra kraft (uten kaffe)",
        "amount": 1,
        "unit": "dl",
        "sodiumPer100g": 150,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "cost": 1,
        "note": "Mildere gryte uten den mørke bitterheten."
      }
    ],
    "dark_chocolate": [
      {
        "id": "cocoa",
        "label": "Usøtet kakaopulver",
        "amount": 1,
        "unit": "ss",
        "taste": {
          "bitter": 2
        },
        "tradition": "traditional",
        "note": "1 ss kakao gir omtrent samme dybde som 20 g mørk sjokolade."
      }
    ],
    "chili_flakes": [
      {
        "id": "fresh_chili",
        "label": "Fersk rød chili, finhakket",
        "amount": 1,
        "unit": "stk",
        "tradition": "traditional",
        "note": "Friskere varme. Ta ut frøene om du vil ha den mildere."
      }
    ],
    "bell_pepper": [
      {
        "id": "corn",
        "label": "Mais (boks, avrent)",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 200,
        "taste": {
          "sweet": 2
        },
        "tradition": "non-traditional",
        "note": "Søtere og barnevennlig – ha den i mot slutten."
      },
      {
        "id": "carrot",
        "label": "Gulrot, i terninger",
        "amount": 150,
        "unit": "g",
        "taste": {
          "sweet": 1
        },
        "tradition": "non-traditional",
        "note": "Gir naturlig sødme og demper styrken."
      }
    ],
    "sour_cream": [
      {
        "id": "plant_creme",
        "label": "Plantebasert rømme (melkefri)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 50,
        "tradition": "non-traditional",
        "note": "Samme kjølende effekt uten meieri."
      },
      {
        "id": "creme_fraiche",
        "label": "Crème fraîche (fyldigere)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 50,
        "allergens": [
          "dairy"
        ],
        "tradition": "non-traditional"
      },
      {
        "id": "greek_yogurt",
        "label": "Gresk yoghurt (lettere)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 50,
        "allergens": [
          "dairy"
        ],
        "tradition": "non-traditional",
        "note": "Friskere og syrligere enn rømme."
      }
    ],
    "cheese": [
      {
        "id": "vegan_cheese",
        "label": "Vegansk revet ost (melkefri)",
        "amount": 100,
        "unit": "g",
        "sodiumPer100g": 600,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional"
      }
    ],
    "rice": [
      {
        "id": "tortilla_chips",
        "label": "Nachos / tortillachips (mais)",
        "amount": 200,
        "unit": "g",
        "sodiumPer100g": 400,
        "tradition": "traditional",
        "note": "Klassisk til chili – naturlig glutenfritt når de er laget av mais."
      },
      {
        "id": "baked_potato",
        "label": "Bakt potet",
        "amount": 4,
        "unit": "stk",
        "tradition": "non-traditional",
        "note": "Chili i bakt potet er en mettende variant – stek potetene mens gryta putrer."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "oil": 0.92,
    "olive_oil": 0.92,
    "butter": 0.95,
    "chili_spice_mix": 0.5,
    "home_spice_mix": 0.5,
    "tomato_paste": 1.1,
    "beef_stock": 1,
    "bouillon": 1,
    "water": 1,
    "stock_extra": 1,
    "coffee": 1,
    "chipotle": 1,
    "smoked_paprika": 0.45,
    "ground_chili": 0.5,
    "cocoa": 0.45,
    "sour_cream": 1,
    "creme_fraiche": 1,
    "plant_creme": 1,
    "greek_yogurt": 1.03,
    "sugar": 0.85,
    "salt_added": 1.2
  },
  "pieceWeight": {
    "onion": 110,
    "garlic": 5,
    "bell_pepper": 150,
    "lime": 70,
    "dried_chili": 8,
    "fresh_chili": 15,
    "cilantro": 20,
    "baked_potato": 200
  },
  "unitOptions": {
    "oil": [
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
    "butter": [
      "ss",
      "ts",
      "g"
    ],
    "chili_spice_mix": [
      "ss",
      "ts",
      "g"
    ],
    "home_spice_mix": [
      "ss",
      "ts",
      "g"
    ],
    "tomato_paste": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "beef_stock": [
      "dl",
      "ml",
      "g"
    ],
    "bouillon": [
      "dl",
      "ml",
      "g"
    ],
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "stock_extra": [
      "dl",
      "ml",
      "g"
    ],
    "coffee": [
      "dl",
      "ml",
      "g"
    ],
    "chipotle": [
      "ss",
      "ts",
      "g"
    ],
    "smoked_paprika": [
      "ts",
      "ss",
      "g"
    ],
    "ground_chili": [
      "ts",
      "ss",
      "g"
    ],
    "cocoa": [
      "ss",
      "ts",
      "g"
    ],
    "sour_cream": [
      "dl",
      "ml",
      "g"
    ],
    "creme_fraiche": [
      "dl",
      "ml",
      "g"
    ],
    "plant_creme": [
      "dl",
      "ml",
      "g"
    ],
    "greek_yogurt": [
      "dl",
      "ml",
      "g"
    ],
    "sugar": [
      "ts",
      "ss",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ]
  },
  "bulkRoles": [
    "protein",
    "legume",
    "vegetable",
    "liquid"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    },
    {
      "axis": "sweet",
      "id": "sugar"
    }
  ],
  "requireRoles": [
    "acid"
  ],
  "tasteMessages": {
    "sour": "Mindre friskhet og syre – en klem lime over tallerkenen eller en skvett eddik retter det opp.",
    "sweet": "Mindre rundhet mot tomatsyren – en klype sukker eller litt ekstra surret løk balanserer.",
    "umami": "Mindre dybde i gryta – litt ekstra tomatpuré, kraft eller en bit mørk sjokolade hjelper."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Ferdig chilikrydder og buljong salter mye, så smak alltid til på slutten.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til før servering."
    },
    "sweet": {
      "down": "Gryta ble søtere – vi reduserte sukkeret litt så tomatsyren fortsatt kommer fram.",
      "up": "Mindre naturlig sødme – vi økte sukkeret litt for å runde av tomatsyren."
    }
  }
};
