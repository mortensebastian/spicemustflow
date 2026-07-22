/* ===== Engelske muffins (hjemmelaget) – datamodell =====
Engelske muffins (britisk gjærbakst stekt i panne) – datamodell. Tre nivåer (rask tørrgjær-deig → semulegryn-strødd pannestekt → kald langheving med brunet smør). Salt-lever, yieldNoun muffins. Allergener: gluten + meieri, begge løsbare. Generert fra recipes-pending/engelske-muffins.json (build-recipe). Engelske id-er, norske labels.
   Generert fra recipes-pending/engelske-muffins.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "engelske-muffins",
  "yieldNoun": "muffins",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 8,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 400,
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
          "id": "milk",
          "label": "Melk eller vann (lunkent)",
          "amount": 2.5,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "dry_yeast",
          "label": "Tørrgjær",
          "amount": 2,
          "unit": "ts",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "sugar",
          "label": "Sukker (valgfritt)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
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
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "butter",
          "label": "Smør, romtemperert",
          "amount": 25,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        }
      ],
      "steps": [
        "Rør sammen mel, tørrgjær, sukker og salt i en bolle. Tilsett lunken melk (eller vann) og romtemperert smør, og elt til en smidig, litt klissete deig. La den heve tildekket i romtemperatur i ca. 1 time til dobbel størrelse.",
        "Del deigen i 8 emner og trykk hver flat til en rund kake på ca. 1,5 cm. Sett dem på bakepapir, dekk til, og la etterheve 20 minutter.",
        "Stek muffinsene i en tørr, middels varm stekepanne i 6–7 minutter på hver side til de er gyllne og gjennomstekte. Avkjøl på rist, og del dem med en gaffel før servering."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 8,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 400,
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
          "id": "milk",
          "label": "Melk (lunken)",
          "amount": 2.5,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
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
          "id": "sugar",
          "label": "Sukker",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
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
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "butter",
          "label": "Smør, romtemperert",
          "amount": 30,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "semolina",
          "label": "Semulegryn (til strøing)",
          "amount": 3,
          "unit": "ss",
          "role": "garnish",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "gluten"
          ]
        }
      ],
      "steps": [
        "Varm melken til fingervarm, og løs opp den ferske gjæren i den. Ha i sukker, salt, mel og romtemperert smør, og elt deigen smidig og blank i 8–10 minutter. La den heve tildekket 1 time til dobbel størrelse.",
        "Strø semulegryn på bakebenken. Rull deigen ut til ca. 1,5 cm tykkelse, og stikk ut runde emner (8–10 cm) med et glass eller en ring. Legg dem på semulegrynet og strø litt på toppen også.",
        "La muffinsene etterheve 30–45 minutter til de er luftige. Stek dem i en tørr, middels varm stekepanne i 6–7 minutter på hver side til de er gyllne, med lav nok varme til at de blir gjennomstekte uten å bli brente.",
        "Avkjøl muffinsene på rist. Del dem alltid med en gaffel, ikke kniv – da bevarer du de karakteristiske hullene som smør og syltetøy setter seg i. Rist dem gjerne før servering."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 8,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel (gjerne sterkt/tipo 00)",
          "amount": 400,
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
          "id": "milk",
          "label": "Helmelk (lunken)",
          "amount": 2.5,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
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
          "id": "sugar",
          "label": "Sukker",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
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
          "id": "butter",
          "label": "Smør (brunet)",
          "amount": 35,
          "unit": "g",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "semolina",
          "label": "Semulegryn (til strøing)",
          "amount": 3,
          "unit": "ss",
          "role": "garnish",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "gluten"
          ]
        }
      ],
      "steps": [
        "Brun smøret i en liten kjele til det dufter nøtteaktig, og avkjøl. Varm helmelken til fingervarm og løs opp gjæren i den.",
        "Elt mel, salt, sukker, det brunede smøret og melken til en glatt, elastisk deig i 10–12 minutter. Dekk til og sett deigen kaldt til kald langheving i 12–24 timer – den lange, kalde hevingen gir dypere smak og flere hull.",
        "Ta deigen ut, la den temperere 30 minutter, og rull den ut til ca. 1,5 cm på et semulegryn-strødd bord. Stikk ut runde emner, legg dem på semulegryn og strø litt på toppen. Etterhev 45–60 minutter til luftige.",
        "Stek muffinsene i en tørr, middels varm panne 6–7 minutter på hver side til gyllne. Vil du være sikker på at de er gjennomstekte, ettersteker du dem 5 minutter i ovn på 200 grader. Avkjøl på rist og del med gaffel."
      ]
    }
  },
  "swapOptions": {
    "flour": [
      {
        "id": "gf_flour",
        "label": "Glutenfri melblanding",
        "amount": 400,
        "unit": "g",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Glutenfri; øk væsken litt og tilsett gjerne psylliumfrøskall for struktur. Deigen blir løsere og muffinsene litt tettere."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 2.5,
        "unit": "dl",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Nøytral, melkefri base. Barista-variant gir litt mer fylde."
      },
      {
        "id": "water",
        "label": "Vann",
        "amount": 2.5,
        "unit": "dl",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Helt melkefri; gir en litt sprøere og mindre myk muffins."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 30,
        "unit": "g",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Melkefri; smaker litt mindre fyldig enn smør."
      }
    ],
    "fresh_yeast": [
      {
        "id": "dry_yeast",
        "label": "Tørrgjær",
        "amount": 2,
        "unit": "ts",
        "tradition": "non-traditional",
        "note": "25 g fersk gjær ≈ ½ pk (ca. 6 g / 2 ts) tørrgjær. Bland den rett i melet, eller løs den i den lunkne væsken."
      }
    ],
    "dry_yeast": [
      {
        "id": "fresh_yeast",
        "label": "Fersk gjær",
        "amount": 25,
        "unit": "g",
        "tradition": "traditional",
        "note": "≈ 25 g fersk gjær. Løs den opp i den lunkne væsken først."
      }
    ],
    "semolina": [
      {
        "id": "corn_semolina",
        "label": "Maismel / polenta (glutenfri strøing)",
        "amount": 3,
        "unit": "ss",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Glutenfritt alternativ til semulegryn; gir samme lette knasing utenpå."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "milk": 1.03,
    "water": 1,
    "oat_milk": 1.03,
    "sugar": 0.85,
    "semolina": 0.67,
    "corn_semolina": 0.65,
    "salt_added": 1.2,
    "gf_flour": 0.55,
    "dry_yeast": 0.6
  },
  "pieceWeight": {
    "fresh_yeast": 50
  },
  "unitOptions": {
    "milk": [
      "dl",
      "ml",
      "g"
    ],
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "oat_milk": [
      "dl",
      "ml",
      "g"
    ],
    "sugar": [
      "ss",
      "ts",
      "g"
    ],
    "semolina": [
      "ss",
      "g"
    ],
    "corn_semolina": [
      "ss",
      "g"
    ],
    "salt_added": [
      "ts",
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
    "sweet": "Litt mindre rundhet – sukkeret mater først og fremst gjæren, så deigen kan hevet litt tregere uten det."
  },
  "leverMessages": {
    "salt": {
      "down": "Du la til salt fra en annen kilde – vi reduserte saltet i deigen automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte saltet i deigen litt. Brødet trenger salt for smak og for å styre gjæringen. Smak til."
    }
  }
};
