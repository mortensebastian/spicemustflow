/* ===== Hjemmelaget pizza – datamodell =====
   Hjemmelaget pizza i tre nivåer (rask samme-dags deig → 1–2 t heving →
   kald langheving 24–48 t med tipo 00). Dekker både pizzadeig og hel pizza.
   Salt-lever på salt_added. Allergener: gluten (mel→glutenfri pizzamiks),
   meieri (mozzarella/parmesan→vegansk).
   Generert fra recipes-pending/pizza.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "pizza",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
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
          "amount": 3,
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
          "id": "olive_oil",
          "label": "Olivenolje",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "salt_added",
          "label": "Salt (i deigen)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "passata",
          "label": "Hermetiske tomater eller passata (saus)",
          "amount": 2,
          "unit": "dl",
          "role": "acid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 80,
          "removable": false,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          }
        },
        {
          "id": "garlic",
          "label": "Hvitløk (saus)",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "oregano",
          "label": "Tørket oregano (saus)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "mozzarella",
          "label": "Revet mozzarella",
          "amount": 200,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 600,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 1
          }
        }
      ],
      "steps": [
        "Løs opp gjæren i lunkent vann. Bland inn mel, salt og olje, og elt deigen smidig i 8–10 minutter. La den heve tildekket i romtemperatur i 1 time til dobbel størrelse.",
        "Rør sammen passata med presset hvitløk, oregano og en klype salt til en enkel pizzasaus.",
        "Sett ovnen på maks (250–275 grader) med et stekebrett eller en stekestein inni.",
        "Del deigen i to, og kjevle eller dra hver del tynt ut. Bre på et tynt lag saus, og strø over revet mozzarella og ønsket topping.",
        "Stek pizzaen på det glovarme brettet i 8–12 minutter til kanten er gyllen og bunnen sprø."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
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
          "amount": 3,
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
          "id": "olive_oil",
          "label": "Olivenolje",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "sugar",
          "label": "Sukker eller honning (mater gjæren / saus)",
          "amount": 0.5,
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
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "passata",
          "label": "Passata (siktet tomat, saus)",
          "amount": 2.5,
          "unit": "dl",
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
          }
        },
        {
          "id": "garlic",
          "label": "Hvitløk (saus)",
          "amount": 2,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "oregano",
          "label": "Tørket oregano (saus)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "mozzarella",
          "label": "Fersk mozzarella",
          "amount": 250,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 350,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "basil",
          "label": "Fersk basilikum",
          "amount": 1,
          "unit": "stk",
          "role": "garnish",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Løs opp gjæren i lunkent vann med sukkeret. Bland inn mel, salt og olje, og elt deigen blank og smidig i 10 minutter. La den heve tildekket i 1–2 timer til dobbel størrelse.",
        "Rør passata med presset hvitløk, oregano, en klype salt og en skvett olivenolje til en pizzasaus. La den gjerne stå og trekke.",
        "Sett ovnen på maks (250–275 grader) med stekestein eller et brett snudd opp ned inni, minst 30 minutter i forveien.",
        "Del deigen i to. Dra hver del tynt ut på melet underlag uten å kjevle kanten flat. Bre på et tynt lag saus, og legg på mozzarella i biter.",
        "Stek pizzaen rett på den glovarme steinen i 8–10 minutter til kanten bobler og bunnen er sprø. Strø over fersk basilikum og litt olivenolje før servering."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "flour",
          "label": "Tipo 00 pizzamel",
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
          "label": "Vann (kaldt)",
          "amount": 3.25,
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
          "id": "olive_oil",
          "label": "Ekstra virgin olivenolje",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
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
          "id": "passata",
          "label": "San Marzano-tomater, knust (saus)",
          "amount": 2.5,
          "unit": "dl",
          "role": "acid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 50,
          "removable": false,
          "taste": {
            "sour": 2,
            "sweet": 1,
            "umami": 1
          }
        },
        {
          "id": "garlic",
          "label": "Hvitløk (saus)",
          "amount": 2,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "oregano",
          "label": "Tørket oregano (saus)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "mozzarella",
          "label": "Buffelmozzarella (mozzarella di bufala)",
          "amount": 250,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 250,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "parmesan",
          "label": "Nyrevet parmesan",
          "amount": 30,
          "unit": "g",
          "role": "dairy",
          "scaling": "nonlinear",
          "addStage": "end",
          "sodiumPer100g": 1500,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "basil",
          "label": "Fersk basilikum",
          "amount": 1,
          "unit": "stk",
          "role": "garnish",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true
        }
      ],
      "steps": [
        "Løs den lille mengden gjær i kaldt vann. Bland med tipo 00-mel og salt, og elt deigen blank og elastisk i 12–15 minutter (eller bruk eltemaskin). Ha i oljen mot slutten.",
        "Form deigen til en glatt ball, dekk bollen og kaldhev i kjøleskap i 24–48 timer. Del den i to emner halvveis hvis du vil, og la dem heve videre.",
        "Ta deigen ut 2 timer før steking så den romtempereres. Knus tomatene med en klype salt, presset hvitløk og oregano til en rå saus.",
        "Varm ovnen på fullt (275 grader) med stekestein i minst 45 minutter, eller bruk pizzaovn på 400–450 grader.",
        "Strekk hvert emne forsiktig ut for hånd uten å klemme luften ut av kanten. Bre på et tynt lag saus, og legg på avrent buffelmozzarella i biter.",
        "Stek pizzaen i 6–8 minutter (eller 1–2 minutter i pizzaovn) til kanten er oppblåst og flekkete. Strø over parmesan, fersk basilikum og en skvett olivenolje før servering."
      ]
    }
  },
  "swapOptions": {
    "flour": [
      {
        "id": "gf_flour",
        "label": "Glutenfri pizzamelmiks",
        "amount": 500,
        "unit": "g",
        "tradition": "non-traditional",
        "note": "Inneholder som regel bindemiddel; deigen blir klissete – bre den ut med våte hender eller mellom bakepapir."
      }
    ],
    "fresh_yeast": [
      {
        "id": "dry_yeast",
        "label": "Tørrgjær",
        "amount": 1,
        "unit": "ts",
        "tradition": "traditional",
        "note": "Bland tørrgjær rett i melet. 1 ts tørrgjær ≈ 12–15 g fersk gjær; bruk mindre til langheving."
      }
    ],
    "olive_oil": [
      {
        "id": "neutral_oil",
        "label": "Nøytral olje (raps/solsikke)",
        "amount": 1,
        "unit": "ss",
        "note": "Nøytral smak; fungerer like godt i deigen."
      }
    ],
    "mozzarella": [
      {
        "id": "vegan_cheese",
        "label": "Vegansk pizzaost (melkefri)",
        "amount": 200,
        "unit": "g",
        "sodiumPer100g": 600,
        "tradition": "non-traditional",
        "note": "Melkefri; velg en type beregnet på smelting."
      }
    ],
    "parmesan": [
      {
        "id": "vegan_parmesan",
        "label": "Vegansk parmesan (melkefri)",
        "amount": 30,
        "unit": "g",
        "sodiumPer100g": 700,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Melkefri; salt justeres automatisk."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "water": 1,
    "olive_oil": 0.92,
    "salt_added": 1.2,
    "sugar": 0.85,
    "passata": 1.05,
    "neutral_oil": 0.92,
    "gf_flour": 0.55,
    "dry_yeast": 0.6
  },
  "pieceWeight": {
    "garlic": 5,
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
    "sugar": [
      "ts",
      "ss",
      "g"
    ],
    "passata": [
      "dl",
      "ml",
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
    "umami": "Mindre dybde – litt ekstra revet ost eller en skvett god olivenolje over hjelper.",
    "sweet": "Mindre rundhet mot tomatsyren – en liten klype sukker i sausen balanserer."
  },
  "leverMessages": {
    "salt": {
      "down": "Du la til mer salt fra en annen kilde – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Deig og saus trenger salt for smak. Smak til."
    }
  }
};
