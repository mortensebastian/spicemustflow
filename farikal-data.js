/* ===== Fårikål (Norges nasjonalrett) – datamodell =====
Fårikål – Norges nasjonalrett. Lam/får og kål lagvis med hel pepper, kokt mørt i egen kraft.
   Generert fra recipes-pending/farikal.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "farikal",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "lamb",
          "label": "Fårikålkjøtt av lam (med bein)",
          "amount": 1200,
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
          "id": "cabbage",
          "label": "Hodekål i grove båter",
          "amount": 1200,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "peppercorns",
          "label": "Hel sort pepper",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
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
        },
        {
          "id": "stock",
          "label": "Kjøttbuljong (buljongterning + vann)",
          "amount": 4,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "flour",
          "label": "Hvetemel til jevning (valgfritt)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "gluten"
          ]
        }
      ],
      "steps": [
        "Legg kjøttet med fettsiden ned i bunnen av en tykkbunnet gryte. Legg så kål og kjøtt lagvis oppover, og strø salt, hel pepper og eventuelt litt hvetemel mellom lagene.",
        "Hell over buljong til det står omtrent halvveis opp i gryta. Kok opp uten lokk, og skum av om det trengs.",
        "Legg på lokk, skru ned varmen, og la fårikålen småkoke rolig i 2–2,5 timer til kjøttet er mørt og nesten slipper beinet. Ikke rør i gryta underveis – da faller kålen fra hverandre.",
        "Smak til med salt, og server rykende varm rett fra gryta med kokte poteter ved siden av."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "lamb",
          "label": "Fårikålkjøtt av lam, bog og nakke med bein",
          "amount": 1400,
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
          "id": "cabbage",
          "label": "Hodekål i båter, med litt av stilken igjen",
          "amount": 1400,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "peppercorns",
          "label": "Hel sort pepper (gjerne i en tepose eller pepperpose)",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
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
        },
        {
          "id": "stock",
          "label": "Kjøttkraft (eller buljongterning + vann)",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 250,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "flour",
          "label": "Hvetemel mellom lagene (valgfritt)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "carrot",
          "label": "Gulrot i grove staver (valgfritt)",
          "amount": 200,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "tradition": "regional"
        }
      ],
      "steps": [
        "Velg fårikålkjøtt med bein og synlig fett – bog og nakke gir mest smak og saftigst resultat. Skjær kålen i båter og la litt av stilken sitte igjen, så holder båtene formen gjennom kokingen.",
        "Legg de feteste kjøttbitene i bunnen med fettsiden ned. Bygg videre lagvis med kål og kjøtt, og strø salt og eventuelt litt hvetemel mellom lagene. Legg pepperkornene i en tepose og ned i gryta, så slipper du dem i munnen ved bordet.",
        "Legg gulrotstavene inn mellom lagene om du vil ha dem med. Hell over kraft til det står halvveis opp, kok opp, og skum av.",
        "Legg på lokk og la fårikålen småkoke rolig i 2,5–3 timer. Den skal putre så vidt, ikke fosskoke, og du skal la være å røre.",
        "Kjøttet er ferdig når det slipper beinet av seg selv. Smak til kraften med salt, og server med kokte poteter og gjerne flatbrød."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "lamb",
          "label": "Fårikålkjøtt av får (voksen sau), bog og nakke med bein",
          "amount": 1400,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 3
          },
          "tradition": "traditional"
        },
        {
          "id": "cabbage",
          "label": "Hodekål i båter",
          "amount": 1400,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "butter",
          "label": "Smør til bruning",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "peppercorns",
          "label": "Hel sort pepper",
          "amount": 1.5,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "juniper",
          "label": "Enebær, lett knust",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          },
          "tradition": "regional"
        },
        {
          "id": "stock",
          "label": "Hjemmelaget lamme- eller kjøttkraft",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 100,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "flour",
          "label": "Hvetemel mellom lagene (valgfritt)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "gluten"
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
        },
        {
          "id": "vinegar",
          "label": "Eddik 7 % (til slutt, valgfritt)",
          "amount": 1,
          "unit": "ts",
          "role": "acid",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "taste": {
            "sour": 3
          },
          "tradition": "regional"
        }
      ],
      "steps": [
        "Brun kjøttbitene raskt i smør i gryta, noen få om gangen, til de får farge på alle sider. Ta dem opp underveis. Bruningen er ikke tradisjonell, men gir en mørkere og rundere kraft.",
        "Legg de feteste bitene tilbake i bunnen med fettsiden ned, og bygg lagvis med kål og kjøtt. Strø salt og litt hvetemel mellom lagene, og fordel hel pepper og knuste enebær utover.",
        "Hell over hjemmelaget kraft til det står halvveis opp i gryta. Kok opp, skum grundig av, og legg gjerne en rist eller en tallerken i bunnen som forsikring mot at det svir seg.",
        "Legg på lokk og la fårikålen trekke på lavest mulig varme i 3–4 timer. Den skal knapt boble. Ikke rør – flytt heller på gryta hvis du må.",
        "Når kjøttet slipper beinet, tar du gryta av platen og smaker til med salt og noen dråper eddik. Syren løfter fettet og gjør kraften klarere i smaken.",
        "Avkjøl fårikålen og sett den kaldt over natten. Varm den forsiktig opp igjen dagen etter uten å røre, og server med mandelpoteter, flatbrød og et glass øl eller akevitt."
      ]
    }
  },
  "swapOptions": {
    "lamb": [
      {
        "id": "mutton",
        "label": "Fårekjøtt av voksen sau (mer smak)",
        "amount": 1400,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 3
        },
        "tradition": "traditional",
        "note": "Kraftigere og mer «villsmak». Beregn 30–60 minutter lengre koketid."
      },
      {
        "id": "pork_neck",
        "label": "Svinenakke med bein (rimeligere)",
        "amount": 1300,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Mildere og billigere «svinekål». Koker fortere – regn 1,5–2 timer."
      },
      {
        "id": "turkey_thigh",
        "label": "Kalkunlår i biter (magrere og rimeligere)",
        "amount": 1200,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Magert, så kraften blir tynnere. Kok kortere, ca. 1,5 time, og tilsett gjerne litt smør eller olje."
      }
    ],
    "cabbage": [
      {
        "id": "savoy_cabbage",
        "label": "Savoykål (mildere og mørere)",
        "amount": 1300,
        "unit": "g",
        "taste": {
          "sweet": 1
        },
        "tradition": "regional",
        "note": "Løsere blader som koker fortere – legg dem i siste time."
      },
      {
        "id": "pointed_cabbage",
        "label": "Spisskål (finere og raskere)",
        "amount": 1200,
        "unit": "g",
        "taste": {
          "sweet": 1
        },
        "tradition": "regional",
        "note": "Søtere og mer delikat, men koker fort i stykker. Legg den i mot slutten."
      }
    ],
    "stock": [
      {
        "id": "water",
        "label": "Bare vann (kjøttet lager kraften selv)",
        "amount": 4,
        "unit": "dl",
        "sodiumPer100g": 0,
        "tradition": "traditional",
        "note": "Det mest tradisjonelle. Kål og bein gir kraft nok – smak til med litt ekstra salt."
      },
      {
        "id": "bouillon",
        "label": "Buljongterning + vann (raskere)",
        "amount": 5,
        "unit": "dl",
        "sodiumPer100g": 300,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Hverdagssnarveien. Terningen salter godt, så vent med saltet til slutt."
      },
      {
        "id": "homemade_stock",
        "label": "Hjemmelaget lamme- eller kjøttkraft",
        "amount": 5,
        "unit": "dl",
        "sodiumPer100g": 100,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Mest dybde og minst salt. Kok gjerne kraft av bein fra kjøttet dagen før."
      }
    ],
    "flour": [
      {
        "id": "potato_flour",
        "label": "Potetmel (glutenfri jevning)",
        "amount": 1,
        "unit": "ss",
        "tradition": "regional",
        "note": "Rør ut i litt kaldt vann og visp inn i kraften til slutt – ikke mellom lagene."
      },
      {
        "id": "cornstarch",
        "label": "Maizena (glutenfri jevning)",
        "amount": 1,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Samme fremgangsmåte: rør ut kaldt og visp inn i den kokende kraften."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 2,
        "unit": "ss",
        "note": "Melkefri bruning – oppfører seg som smør."
      },
      {
        "id": "rapeseed_oil",
        "label": "Nøytral olje (melkefri)",
        "amount": 2,
        "unit": "ss",
        "note": "Tåler høyere varme enn smør og gir kraftigere bruning."
      }
    ],
    "peppercorns": [
      {
        "id": "ground_pepper",
        "label": "Grovmalt sort pepper",
        "amount": 1,
        "unit": "ts",
        "tradition": "non-traditional",
        "note": "Enklere å spise, men gir en skarpere og mindre rund peppersmak. Bruk mindre enn av hel pepper."
      }
    ],
    "carrot": [
      {
        "id": "rutabaga",
        "label": "Kålrot i grove terninger",
        "amount": 250,
        "unit": "g",
        "taste": {
          "sweet": 1
        },
        "tradition": "regional",
        "note": "Mer norsk enn gulrot og tåler lang koking uten å bli grøt."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "stock": 1,
    "water": 1,
    "bouillon": 1,
    "homemade_stock": 1,
    "flour": 0.55,
    "potato_flour": 0.6,
    "cornstarch": 0.55,
    "butter": 0.95,
    "margarine": 0.95,
    "rapeseed_oil": 0.92,
    "salt_added": 1.2
  },
  "pieceWeight": {},
  "unitOptions": {
    "stock": [
      "dl",
      "ml",
      "g"
    ],
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "bouillon": [
      "dl",
      "ml",
      "g"
    ],
    "homemade_stock": [
      "dl",
      "ml",
      "g"
    ],
    "flour": [
      "ss",
      "ts",
      "g"
    ],
    "potato_flour": [
      "ss",
      "ts",
      "g"
    ],
    "cornstarch": [
      "ss",
      "ts",
      "g"
    ],
    "butter": [
      "ss",
      "ts",
      "g"
    ],
    "margarine": [
      "ss",
      "ts",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "ts",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ]
  },
  "bulkRoles": [
    "protein",
    "vegetable",
    "liquid"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    }
  ],
  "requireRoles": [],
  "tasteMessages": {
    "sour": "Uten syren blir retten rundere, men også litt tyngre og fetere – en liten skvett eddik eller litt tyttebær ved siden av gjør samme nytten."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak alltid til kraften helt til slutt.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til på slutten, når kraften har kokt inn."
    }
  }
};
