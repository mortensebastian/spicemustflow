/* ===== Focaccia (italiensk olivenoljebrød) – datamodell =====
   Italiensk focaccia i tre nivåer (rask samme-dags → olivenolje + flaksalt +
   rosmarin → kald langheving / høy hydrering). Salt-lever på salt_added,
   yieldNoun stykker. Distinkt fra grovbrød/pizza. Allergen: gluten.
   Generert fra recipes-pending/focaccia.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "focaccia",
  "yieldNoun": "stykker",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 500,
          "unit": "g",
          "role": "flour",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "water",
          "label": "Vann (lunkent)",
          "amount": 3.5,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "fresh_yeast",
          "label": "Fersk gjær",
          "amount": 25,
          "unit": "g",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "salt_added",
          "label": "Salt (i deigen)",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "olive_oil",
          "label": "Olivenolje (i deig og form)",
          "amount": 4,
          "unit": "ss",
          "role": "fat",
          "essential": true,
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "flaky_salt",
          "label": "Flaksalt (topping)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "sodiumPer100g": 38800,
          "removable": true
        },
        {
          "id": "rosemary",
          "label": "Fersk rosmarin (topping)",
          "amount": 2,
          "unit": "kvist",
          "role": "garnish",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true
        }
      ],
      "steps": [
        "Løs opp gjæren i lunkent vann. Bland inn mel, salt og halvparten av olivenoljen, og rør deigen sammen til en klissete, smidig deig. La den heve tildekket i romtemperatur i 1 time til dobbel størrelse.",
        "Olje en langpanne (ca. 30 x 20 cm) godt med resten av oljen, og hell deigen oppi. Dra den forsiktig utover med oljede fingre.",
        "La focacciaen etterheve 30 minutter. Lag dype fordypninger over hele overflaten med fingertuppene.",
        "Ringle litt olivenolje over, strø på flaksalt og rosmarin, og stek midt i ovnen på 220 grader i 20–25 minutter til gyllen. Avkjøl litt før du skjærer den i stykker."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 500,
          "unit": "g",
          "role": "flour",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "water",
          "label": "Vann (lunkent)",
          "amount": 3.75,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "fresh_yeast",
          "label": "Fersk gjær",
          "amount": 15,
          "unit": "g",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "honey",
          "label": "Honning (mater gjæren)",
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
          "label": "Salt (i deigen)",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "olive_oil",
          "label": "Olivenolje (i deig, form og topping)",
          "amount": 6,
          "unit": "ss",
          "role": "fat",
          "essential": true,
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "flaky_salt",
          "label": "Flaksalt (topping)",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "sodiumPer100g": 38800,
          "removable": true
        },
        {
          "id": "rosemary",
          "label": "Fersk rosmarin (topping)",
          "amount": 3,
          "unit": "kvist",
          "role": "garnish",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true
        }
      ],
      "steps": [
        "Løs opp gjæren og honningen i lunkent vann. Bland inn mel, salt og 2 ss olivenolje, og rør til en våt, klissete deig. Den skal være løsere enn en vanlig brøddeig.",
        "La deigen heve tildekket i 1,5–2 timer til den er luftig og full av bobler. Brett den gjerne sammen et par ganger underveis for mer struktur.",
        "Hell rikelig olivenolje (2–3 ss) i bunnen av en langpanne (ca. 30 x 20 cm). Hell deigen oppi, og dra den forsiktig ut til kantene med oljede fingre uten å klemme luften ut.",
        "La focacciaen etterheve 45 minutter. Dypp fingrene i olje og lag dype fordypninger over hele overflaten.",
        "Ringle resten av olivenoljen over, strø på flaksalt og plukket rosmarin, og stek midt i ovnen på 220 grader i 22–25 minutter til den er gyllen og sprø. Avkjøl litt på rist før du skjærer den i stykker."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Tipo 00 eller sterkt brødmel",
          "amount": 500,
          "unit": "g",
          "role": "flour",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "water",
          "label": "Vann (kaldt, høy hydrering)",
          "amount": 4,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "fresh_yeast",
          "label": "Fersk gjær (lite, til langheving)",
          "amount": 3,
          "unit": "g",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "honey",
          "label": "Honning (mater gjæren)",
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
          "label": "Salt (i deigen)",
          "amount": 2.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "olive_oil",
          "label": "Ekstra virgin olivenolje (deig, form, topping)",
          "amount": 7,
          "unit": "ss",
          "role": "fat",
          "essential": true,
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "flaky_salt",
          "label": "Flaksalt, f.eks. Maldon (topping)",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "sodiumPer100g": 38800,
          "removable": true
        },
        {
          "id": "rosemary",
          "label": "Fersk rosmarin (topping)",
          "amount": 3,
          "unit": "kvist",
          "role": "garnish",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true
        }
      ],
      "steps": [
        "Løs den lille mengden gjær og honningen i kaldt vann. Bland inn mel, salt og 2 ss olivenolje, og rør til en svært våt deig. Dekk bollen.",
        "Strekk og brett deigen i bollen 3–4 ganger med 15 minutters mellomrom den første timen, for å bygge styrke uten å elte.",
        "Kaldhev deigen tildekket i kjøleskap i 18–24 timer. Den skal være full av store bobler.",
        "Hell rikelig olivenolje (3 ss) i en langpanne (ca. 30 x 20 cm), og hell den kalde deigen forsiktig oppi. La den temperere og etterheve i romtemperatur i 2 timer, til den fyller formen.",
        "Olje fingrene og lag dype fordypninger over hele overflaten. Ringle resten av olivenoljen over, og strø på flaksalt og plukket rosmarin.",
        "Stek midt i ovnen på 230 grader i 22–25 minutter til den er dypt gyllen og sprø i kanten. Ta den ut av formen og avkjøl på rist før du skjærer den i stykker."
      ]
    }
  },
  "swapOptions": {
    "fresh_yeast": [
      {
        "id": "dry_yeast",
        "label": "Tørrgjær",
        "amount": 1,
        "unit": "ts",
        "tradition": "traditional",
        "note": "Bland tørrgjær rett i melet. 1 ts tørrgjær ≈ 12–15 g fersk gjær; bruk mindre til kald langheving."
      }
    ],
    "flour": [
      {
        "id": "gf_flour",
        "label": "Glutenfri brødmiks (glutenfri)",
        "amount": 500,
        "unit": "g",
        "tradition": "non-traditional",
        "note": "Glutenfri; øk væsken litt og bre den klissete deigen ut med en våt slikkepott. Gjerne med psylliumfrøskall for struktur."
      }
    ],
    "olive_oil": [
      {
        "id": "neutral_oil",
        "label": "Nøytral olje (raps/solsikke)",
        "amount": 4,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Fungerer teknisk, men olivenolje er focacciaens sjel – smaken og den blanke, sprø overflaten kommer fra den. Bruk olivenolje hvis du kan."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "water": 1,
    "olive_oil": 0.92,
    "salt_added": 1.2,
    "honey": 1.42,
    "neutral_oil": 0.92,
    "gf_flour": 0.55,
    "dry_yeast": 0.6
  },
  "pieceWeight": {
    "fresh_yeast": 50
  },
  "unitOptions": {
    "water": [
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
    "salt_added": [
      "ts",
      "g"
    ],
    "honey": [
      "ss",
      "ts",
      "g"
    ],
    "neutral_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "dry_yeast": [
      "ts",
      "g"
    ]
  },
  "bulkRoles": [
    "flour",
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
    "sweet": "Mindre rundhet – en liten klype sukker eller honning i deigen mater gjæren og runder smaken."
  },
  "leverMessages": {
    "salt": {
      "down": "Du la til salt fra en annen kilde – vi reduserte saltet i deigen automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte saltet i deigen litt. Brødet trenger salt for smak; husk at flaksalt på toppen også teller. Smak til."
    }
  }
};
