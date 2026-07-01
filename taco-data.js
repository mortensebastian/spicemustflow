/* ===== Taco (fredagstaco) – datamodell =====
   Norsk fredagstaco med storfekjøttdeig i tre nivåer (ferdig tacokrydder →
   hjemmelaget krydder + frisk salsa → langtidskrydret kjøtt + pico de gallo +
   guacamole). Distinkt fra baja-fish-tacos (ingen fisk). Salt-lever på salt_added.
   Allergener: gluten (hvetetortilla→mais/glutenfri), meieri (ost+rømme→vegansk).
   Generert fra recipes-pending/taco.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "taco",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
          "label": "Storfekjøttdeig",
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
          "id": "spice_mix",
          "label": "Tacokrydder (ferdigpose)",
          "amount": 1,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 9000,
          "removable": false,
          "taste": {
            "heat": 1
          },
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "water",
          "label": "Vann (til kjøttdeigen)",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "salsa",
          "label": "Tacosaus/salsa (ferdig)",
          "amount": 2,
          "unit": "dl",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 350,
          "removable": true,
          "taste": {
            "sour": 1,
            "sweet": 1
          }
        },
        {
          "id": "corn",
          "label": "Mais (hermetisk)",
          "amount": 1,
          "unit": "boks",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 200,
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "iceberg",
          "label": "Isbergsalat, strimlet",
          "amount": 0.5,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "cheese",
          "label": "Revet ost",
          "amount": 150,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 700,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "sour_cream",
          "label": "Rømme",
          "amount": 2,
          "unit": "dl",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 40,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sour": 1
          }
        },
        {
          "id": "wheat_tortilla",
          "label": "Hvetetortilla/lefse, små",
          "amount": 8,
          "unit": "stk",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "allergens": [
            "gluten"
          ]
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
        }
      ],
      "steps": [
        "Finhakk løken. Varm olje i en panne, og brun kjøttdeigen godt mens du deler den opp – la den få farge, ikke bare bli grå. Stek løken med.",
        "Strø over tacokrydderet, hell i vannet, og la det putre et par minutter til en saftig, krydret kjøttdeig. Smak til med salt.",
        "Sett mais, revet ost, strimlet salat, salsa og rømme i hver sin skål på bordet.",
        "Varm tortillaene, og la alle bygge sin egen taco med kjøttdeig og tilbehør."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
          "label": "Storfekjøttdeig",
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
          "label": "Hvitløk",
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
          "id": "cumin",
          "label": "Spisskummen (malt)",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "umami": 1
          }
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
          "id": "chili_powder",
          "label": "Chilipulver (etter styrke)",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "heat": 2
          }
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
          "id": "water",
          "label": "Vann (til kjøttdeigen)",
          "amount": 1,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "tomato",
          "label": "Tomat, i terninger (til frisk salsa)",
          "amount": 3,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 1,
            "sweet": 1
          }
        },
        {
          "id": "red_onion",
          "label": "Rødløk, finhakket (til salsa)",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "lime",
          "label": "Lime",
          "amount": 1,
          "unit": "stk",
          "role": "acid",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2
          }
        },
        {
          "id": "corn",
          "label": "Mais (hermetisk)",
          "amount": 1,
          "unit": "boks",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 200,
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "bell_pepper",
          "label": "Paprika, i strimler",
          "amount": 1,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "iceberg",
          "label": "Isbergsalat, strimlet",
          "amount": 0.5,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "cheese",
          "label": "Revet ost",
          "amount": 150,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 700,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "sour_cream",
          "label": "Rømme",
          "amount": 2,
          "unit": "dl",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 40,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sour": 1
          }
        },
        {
          "id": "wheat_tortilla",
          "label": "Hvetetortilla/lefse, små",
          "amount": 10,
          "unit": "stk",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "allergens": [
            "gluten"
          ]
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
        }
      ],
      "steps": [
        "Finhakk løk og hvitløk. Varm olje i en panne, og brun kjøttdeigen godt mens du deler den opp. Stek løken med, og ha i hvitløken mot slutten.",
        "Bland spisskummen, paprikapulver, chilipulver og oregano, og strø over kjøttet. Stek krydderet med et halvt minutt, hell i vannet, og la det putre 3–4 minutter. Smak til med salt.",
        "Lag en frisk salsa: bland terninger av tomat, finhakket rødløk, en klem lime og en klype salt. Smak til med litt chili om du vil ha varme.",
        "Sett mais, paprikastrimler, strimlet salat, revet ost, rømme og salsaen i skåler på bordet.",
        "Varm tortillaene, og la alle bygge sin egen taco. Server med limebåter."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
          "label": "Grovkvernet storfe (høyrygg/bog)",
          "amount": 600,
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
          "label": "Hvitløk",
          "amount": 3,
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
          "id": "cumin",
          "label": "Spisskummen (malt)",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "paprika_powder",
          "label": "Røkt paprikapulver",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "chili_powder",
          "label": "Chilipulver / chipotle (etter styrke)",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "heat": 2
          }
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
          "id": "garlic_powder",
          "label": "Hvitløkspulver",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "tomato_paste",
          "label": "Tomatpuré",
          "amount": 1,
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
          "id": "water",
          "label": "Vann eller kraft (til langtidskoking)",
          "amount": 2,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "tomato",
          "label": "Tomat, i terninger (til pico de gallo)",
          "amount": 4,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 1,
            "sweet": 1
          }
        },
        {
          "id": "red_onion",
          "label": "Rødløk, finhakket (til pico)",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "jalapeno",
          "label": "Fersk jalapeño, finhakket",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "heat": 2
          }
        },
        {
          "id": "cilantro",
          "label": "Frisk koriander, grovhakket",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "fixed",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "lime",
          "label": "Lime",
          "amount": 2,
          "unit": "stk",
          "role": "acid",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2
          }
        },
        {
          "id": "avocado",
          "label": "Avokado (til guacamole)",
          "amount": 2,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "corn",
          "label": "Mais (gjerne grillet)",
          "amount": 1,
          "unit": "boks",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 200,
          "removable": true,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "iceberg",
          "label": "Sprø salat, strimlet",
          "amount": 0.5,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "serve",
          "removable": true
        },
        {
          "id": "cheese",
          "label": "Revet ost (gjerne cheddar)",
          "amount": 150,
          "unit": "g",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 700,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "sour_cream",
          "label": "Rømme",
          "amount": 2,
          "unit": "dl",
          "role": "dairy",
          "scaling": "linear",
          "addStage": "serve",
          "sodiumPer100g": 40,
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sour": 1
          }
        },
        {
          "id": "wheat_tortilla",
          "label": "Maistortilla eller hvetetortilla, små",
          "amount": 12,
          "unit": "stk",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "serve",
          "removable": false,
          "allergens": [
            "gluten"
          ]
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
        }
      ],
      "steps": [
        "Finhakk løk og hvitløk. Varm olje i en gryte, og brun kjøttet godt i flere omganger så det får mørk farge. Stek løken med, og ha i hvitløken mot slutten.",
        "Strø over spisskummen, røkt paprika, chili, oregano og hvitløkspulver, og rør inn tomatpuré. Stek krydderet med et minutt, og spe med vann eller kraft.",
        "La kjøttet putre på svak varme i 25–40 minutter til det er mørt og smakene har satt seg. Spe med litt mer væske om det blir tørt, og smak til med salt.",
        "Lag pico de gallo av tomat, rødløk, jalapeño, koriander, lime og en klype salt. Lag guacamole av avokado, lime, salt og litt koriander.",
        "Sett mais, salat, revet ost og rømme i skåler, og varm tortillaene godt.",
        "Server alt på bordet, og la alle bygge sin egen taco med det krydrede kjøttet, pico, guacamole og tilbehør. Server med limebåter."
      ]
    }
  },
  "swapOptions": {
    "beef": [
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
        "note": "Mildere og magrere; stek til gjennomstekt og spe gjerne med litt ekstra olje."
      },
      {
        "id": "pork_mince",
        "label": "Svinekjøttdeig (saftigere)",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Litt fetere og mildere enn storfe."
      },
      {
        "id": "plant_mince",
        "label": "Vegansk farse (kjøttfri)",
        "amount": 450,
        "unit": "g",
        "sodiumPer100g": 400,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Vegansk; bruner som kjøttdeig. Salt justeres automatisk."
      }
    ],
    "spice_mix": [
      {
        "id": "chicken_spice_mix",
        "label": "Hjemmelaget tacokrydder (glutenfritt)",
        "amount": 2,
        "unit": "ss",
        "sodiumPer100g": 9000,
        "taste": {
          "heat": 1
        },
        "tradition": "traditional",
        "note": "Spisskummen, paprika, chili, oregano og hvitløkspulver – glutenfri og uten tilsetninger. Se medium-nivået for mengder."
      }
    ],
    "salsa": [
      {
        "id": "fresh_salsa",
        "label": "Hjemmelaget frisk salsa",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 200,
        "taste": {
          "sour": 1,
          "sweet": 1
        },
        "tradition": "traditional",
        "note": "Hakket tomat, rødløk, lime og litt chili – friskere enn ferdigsalsa."
      }
    ],
    "oil": [
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (nøytral)",
        "amount": 1,
        "unit": "ss",
        "note": "Nøytral steking; tåler høy varme."
      }
    ],
    "wheat_tortilla": [
      {
        "id": "corn_tortilla",
        "label": "Maistortilla, små (glutenfri)",
        "amount": 10,
        "unit": "stk",
        "tradition": "traditional",
        "note": "Naturlig glutenfri og mer autentisk; varm dem godt så de ikke sprekker."
      },
      {
        "id": "gf_lefse",
        "label": "Glutenfri lefse/tortilla",
        "amount": 8,
        "unit": "stk",
        "tradition": "non-traditional",
        "note": "Glutenfritt alternativ i samme størrelse som hvetetortilla."
      }
    ],
    "cheese": [
      {
        "id": "vegan_cheese",
        "label": "Vegansk revet ost (melkefri)",
        "amount": 150,
        "unit": "g",
        "sodiumPer100g": 600,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Melkefri; smelter litt mindre, men gir samme funksjon."
      }
    ],
    "sour_cream": [
      {
        "id": "creme_fraiche",
        "label": "Crème fraîche (litt syrligere)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 40,
        "allergens": [
          "dairy"
        ],
        "taste": {
          "sour": 1
        },
        "note": "Litt fastere og syrligere enn rømme."
      },
      {
        "id": "plant_creme",
        "label": "Vegansk rømme (melkefri)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 40,
        "taste": {
          "sour": 1
        },
        "tradition": "non-traditional",
        "note": "Soya- eller havrebasert; melkefri og kremet."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "spice_mix": 0.5,
    "cumin": 0.5,
    "paprika_powder": 0.5,
    "chili_powder": 0.5,
    "oregano": 0.3,
    "garlic_powder": 0.55,
    "oil": 0.92,
    "water": 1,
    "salsa": 1.05,
    "tomato_paste": 1.1,
    "lime": 1,
    "sour_cream": 1,
    "salt_added": 1.2,
    "chicken_spice_mix": 0.5,
    "rapeseed_oil": 0.92,
    "fresh_salsa": 1.05,
    "plant_creme": 1,
    "creme_fraiche": 1
  },
  "pieceWeight": {
    "onion": 110,
    "garlic": 5,
    "red_onion": 110,
    "tomato": 90,
    "bell_pepper": 150,
    "lime": 70,
    "avocado": 200,
    "jalapeno": 15,
    "wheat_tortilla": 35,
    "corn_tortilla": 30,
    "gf_lefse": 40
  },
  "unitOptions": {
    "spice_mix": [
      "ss",
      "ts",
      "g"
    ],
    "cumin": [
      "ts",
      "ss",
      "g"
    ],
    "paprika_powder": [
      "ts",
      "ss",
      "g"
    ],
    "chili_powder": [
      "ts",
      "ss",
      "g"
    ],
    "oregano": [
      "ts",
      "ss",
      "g"
    ],
    "garlic_powder": [
      "ts",
      "ss",
      "g"
    ],
    "oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "salsa": [
      "dl",
      "ml",
      "g"
    ],
    "tomato_paste": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "sour_cream": [
      "dl",
      "ss",
      "ml",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "chicken_spice_mix": [
      "ss",
      "ts",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "fresh_salsa": [
      "dl",
      "ml",
      "g"
    ],
    "plant_creme": [
      "dl",
      "ss",
      "ml",
      "g"
    ],
    "creme_fraiche": [
      "dl",
      "ss",
      "ml",
      "g"
    ]
  },
  "bulkRoles": [
    "protein",
    "vegetable",
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
    "umami": "Mindre dybde i kjøttet – litt ekstra tacokrydder eller en skvett soya hjelper.",
    "sour": "Mindre friskhet – en ekstra klem lime eller litt mer salsa over toppen balanserer.",
    "heat": "Mindre varme – litt ekstra chili i krydderet eller frisk jalapeño på toppen løfter den."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    }
  }
};
