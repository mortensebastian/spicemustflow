/* ===== Pasta carbonara – datamodell =====
Pasta carbonara – ekte romersk uten fløte; tre nivåer som teknikk-stige.
   Generert fra recipes-pending/pasta-carbonara.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "pasta-carbonara",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "pasta",
          "label": "Spaghetti",
          "amount": 350,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "bacon",
          "label": "Bacon eller baconterninger",
          "amount": 150,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 1300,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "eggs",
          "label": "Egg",
          "amount": 3,
          "unit": "stk",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "cheese",
          "label": "Revet ost (parmesan eller hvitost)",
          "amount": 60,
          "unit": "g",
          "role": "dairy",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 1200,
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "cream",
          "label": "Litt fløte (valgfritt, trygt mot eggerøre)",
          "amount": 0.5,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "Snarvei-trygghet: gjør sausen mer tilgivende. Sløyf den for en mer autentisk carbonara."
        },
        {
          "id": "black_pepper",
          "label": "Nykvernet svart pepper",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false
        },
        {
          "id": "salt_added",
          "label": "Salt (til pastavannet)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": true
        }
      ],
      "steps": [
        "Kok pastaen al dente i godt saltet vann. Ta vare på en kopp av kokevannet før du heller av.",
        "Stek bacon eller baconterninger sprøtt i en stor panne. Skru ned varmen.",
        "Visp sammen egg, revet ost, rikelig svart pepper og eventuelt en skvett fløte i en bolle.",
        "Ta panna av varmen. Vend den nykokte pastaen inn i baconet, og hell over eggeblandingen mens du rører raskt. Spe med litt pastavann til sausen blir blank og kremet. Server straks med mer pepper."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "pasta",
          "label": "Spaghetti",
          "amount": 400,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "guanciale",
          "label": "Guanciale eller pancetta",
          "amount": 150,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 1500,
          "removable": false,
          "taste": {
            "umami": 3
          }
        },
        {
          "id": "eggs",
          "label": "Egg",
          "amount": 2,
          "unit": "stk",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "egg_yolk",
          "label": "Eggeplomme (ekstra)",
          "amount": 2,
          "unit": "stk",
          "role": "protein",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "egg"
          ],
          "note": "Ekstra plommer gir rikere, mer fløyelsmyk saus."
        },
        {
          "id": "pecorino",
          "label": "Pecorino Romano, fint revet",
          "amount": 70,
          "unit": "g",
          "role": "dairy",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 1800,
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 3
          }
        },
        {
          "id": "black_pepper",
          "label": "Nykvernet svart pepper",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false
        },
        {
          "id": "salt_added",
          "label": "Salt (til pastavannet)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": true
        }
      ],
      "steps": [
        "Skjær guanciale i staver eller terninger. Kok pastaen al dente i godt saltet vann, og ta vare på rikelig kokevann.",
        "Stek guanciale på middels varme til fettet er smeltet og kjøttet sprøtt og gyllent. Ta panna av varmen.",
        "Visp egg, ekstra eggeplommer, fint revet pecorino og rikelig svart pepper til en jevn masse. Rør inn en skje varmt pastavann for å temperere.",
        "Vend den nykokte pastaen inn i det varme guanciale-fettet. Ta panna helt av varmen, hell over eggeblandingen, og rør raskt og kontinuerlig.",
        "Spe med litt pastavann til sausen blir silkeblank og kremet. Smak til og server straks med mer pecorino og pepper."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "pasta",
          "label": "Spaghetti eller tonnarelli",
          "amount": 400,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "guanciale",
          "label": "Tørrsaltet guanciale",
          "amount": 180,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 1500,
          "removable": false,
          "taste": {
            "umami": 3
          }
        },
        {
          "id": "egg_yolk",
          "label": "Eggeplommer",
          "amount": 5,
          "unit": "stk",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "egg"
          ],
          "note": "Bare plommer gir den dypeste, mest fløyelsmyke sausen."
        },
        {
          "id": "eggs",
          "label": "Helt egg",
          "amount": 1,
          "unit": "stk",
          "role": "protein",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "egg"
          ],
          "note": "Ett helt egg gir litt mer volum og binding sammen med plommene."
        },
        {
          "id": "pecorino",
          "label": "Pecorino Romano, fint revet",
          "amount": 50,
          "unit": "g",
          "role": "dairy",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 1800,
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 3
          }
        },
        {
          "id": "parmigiano",
          "label": "Parmigiano Reggiano, fint revet",
          "amount": 30,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 1500,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 2
          },
          "note": "Blanding pecorino/parmigiano (ca. 60/40) runder av saltet fra pecorinoen."
        },
        {
          "id": "black_pepper",
          "label": "Grovt nykvernet svart pepper",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Ristes kort i guanciale-fettet for dypere smak."
        },
        {
          "id": "salt_added",
          "label": "Salt (til pastavannet)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": true
        }
      ],
      "steps": [
        "Skjær guanciale i tykke staver. Stek den langsomt på middels-lav varme til fettet er klart og kjøttet sprøtt; ta opp litt av den sprøeste biten til pynt.",
        "Rist grovt nykvernet pepper kort i det varme fettet for å løse ut aromaen. Ta panna av varmen.",
        "Kok pastaen al dente i lett saltet vann (osten og guanciale salter mye). Ta vare på rikelig stivelsesrikt kokevann.",
        "Visp eggeplommer, eventuelt det hele egget, fint revet pecorino og parmigiano til en tykk, glatt masse. Temperer med et par skjeer varmt pastavann mens du visper.",
        "Vend pastaen inn i det peprede fettet utenfor varmen. Hell over eggemassen og rør kraftig og raskt, og spe med pastavann til emulsjonen blir silkeblank uten å skille seg.",
        "Server straks med den sprøstekte guanciale-pynten, ekstra revet ost og mer pepper."
      ]
    }
  },
  "swapOptions": {
    "pasta": [
      {
        "id": "gf_pasta",
        "label": "Glutenfri pasta",
        "amount": 350,
        "unit": "g",
        "note": "Mais-/risbasert; kok etter pakken, gjerne litt kortere. Ta vare på kokevannet til emulsjonen."
      }
    ],
    "bacon": [
      {
        "id": "pancetta_swap",
        "label": "Pancetta (mildere, uten røyk)",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 1500,
        "allergens": [],
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Nærmere originalen enn bacon – mildere og ikke røkt."
      },
      {
        "id": "guanciale_swap",
        "label": "Guanciale (autentisk)",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 1500,
        "allergens": [],
        "taste": {
          "umami": 3
        },
        "tradition": "traditional",
        "note": "Det ekte romerske valget; mye smeltende fett."
      }
    ],
    "guanciale": [
      {
        "id": "pancetta_alt",
        "label": "Pancetta (lettere å få tak i)",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 1500,
        "allergens": [],
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Nest beste valg; litt mildere og mindre fett enn guanciale."
      },
      {
        "id": "bacon_alt",
        "label": "Bacon (i en knipe)",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 1300,
        "allergens": [],
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Røkt smak; velg en mild variant. Avviker fra den romerske originalen."
      }
    ],
    "cheese": [
      {
        "id": "pecorino_swap",
        "label": "Pecorino Romano (autentisk)",
        "amount": 60,
        "unit": "g",
        "sodiumPer100g": 1800,
        "allergens": [
          "dairy"
        ],
        "taste": {
          "umami": 3
        },
        "tradition": "traditional",
        "note": "Salt og skarp sauemelksost – den originale."
      },
      {
        "id": "vegan_parmesan",
        "label": "Vegansk parmesan (melkefri)",
        "amount": 60,
        "unit": "g",
        "sodiumPer100g": 700,
        "allergens": [],
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Melkefri; salt justeres automatisk."
      }
    ],
    "pecorino": [
      {
        "id": "parmesan_swap",
        "label": "Parmesan (mildere)",
        "amount": 70,
        "unit": "g",
        "sodiumPer100g": 1500,
        "allergens": [
          "dairy"
        ],
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Mildere og mindre salt enn pecorino; vanlig kompromiss."
      },
      {
        "id": "vegan_pecorino",
        "label": "Vegansk hardost (melkefri)",
        "amount": 70,
        "unit": "g",
        "sodiumPer100g": 700,
        "allergens": [],
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Melkefri; salt justeres automatisk."
      }
    ],
    "parmigiano": [
      {
        "id": "vegan_parmigiano",
        "label": "Vegansk parmesan (melkefri)",
        "amount": 30,
        "unit": "g",
        "sodiumPer100g": 700,
        "allergens": [],
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Melkefri; salt justeres automatisk."
      }
    ],
    "cream": [
      {
        "id": "plant_cream",
        "label": "Plantefløte (melkefri)",
        "amount": 0.5,
        "unit": "dl",
        "allergens": [],
        "tradition": "non-traditional",
        "note": "Melkefritt sikkerhetsnett mot eggerøre."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "cream": 1.01,
    "salt_added": 1.2,
    "plant_cream": 1
  },
  "pieceWeight": {
    "eggs": 55,
    "egg_yolk": 18
  },
  "unitOptions": {
    "cream": [
      "dl",
      "ss",
      "ml",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "plant_cream": [
      "dl",
      "ss",
      "ml",
      "g"
    ]
  },
  "bulkRoles": [
    "protein",
    "starch",
    "dairy"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    }
  ],
  "requireRoles": [],
  "tasteMessages": {
    "umami": "Retten blir mindre fyldig – litt ekstra ost eller guanciale gir tilbake dybden."
  },
  "leverMessages": {
    "salt": {
      "down": "Du la til noe salt (ost/guanciale) – vi reduserte tilsatt salt automatisk. Husk at osten og kjøttet allerede salter mye; smak til.",
      "up": "Du tok bort noe salt (ost/guanciale) – vi økte tilsatt salt litt. Smak til."
    }
  }
};
