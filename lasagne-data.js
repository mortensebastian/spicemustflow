/* ===== Lasagne – datamodell =====
   Klassisk kjøtt-lasagne i tre nivåer (rask kjøttsaus + enkel hvit saus →
   ekte bechamel → langtidskokt ragù + ferske eggplater). Salt-lever på
   salt_added, requireRoles:[acid] (tomat). Allergener: gluten (plater+mel),
   meieri (bechamel+ost), egg (eggplater i kompleks), selleri (fjernbar).
   Generert fra recipes-pending/lasagne.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "lasagne",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
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
          "id": "olive_oil",
          "label": "Olivenolje (til steking)",
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
          "id": "chopped_tomatoes",
          "label": "Hermetiske, hakkede tomater",
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
            "tip": "Tomatene er kjøttsausens syre og base – uten dem mister den både friskhet og væske."
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
          "id": "herbs",
          "label": "Tørket oregano/italiensk krydder",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "creme_fraiche",
          "label": "Crème fraîche (enkel hvit saus)",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "umami": 1
          },
          "note": "Lettvint hvit saus – rør sammen med litt revet ost i stedet for å koke bechamel."
        },
        {
          "id": "lasagne_sheets",
          "label": "Lasagneplater",
          "amount": 250,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "parmesan",
          "label": "Revet parmesan",
          "amount": 50,
          "unit": "g",
          "role": "seasoning",
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
          "id": "salt_added",
          "label": "Salt",
          "amount": 0.75,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Surr løk og hvitløk myk i olivenolje. Ha i kjøttdeigen og brun den godt.",
        "Rør inn tomatpuré, hakkede tomater, oregano og salt. La kjøttsausen putre 15–20 minutter til den er passe tjukk.",
        "Rør crème fraîche sammen med litt av den revne osten til en enkel hvit saus.",
        "Smør et lag kjøttsaus i en form. Legg på lasagneplater, så hvit saus, og fortsett til alt er brukt opp – avslutt med hvit saus og resten av parmesanen.",
        "Stek på 200 °C i 30–35 minutter til lasagnen er gyllen og boblende. La den hvile 10 minutter før servering."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
          "label": "Kjøttdeig (gjerne okse + svin)",
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
          "id": "carrot",
          "label": "Gulrot, finhakket (soffritto)",
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
          "id": "celery",
          "label": "Stangselleri, finhakket (soffritto)",
          "amount": 1,
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
          "id": "chopped_tomatoes",
          "label": "Hermetiske, hakkede tomater",
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
            "tip": "Tomatene er kjøttsausens syre og base – uten dem mister den både friskhet og væske."
          }
        },
        {
          "id": "stock",
          "label": "Oksekraft",
          "amount": 2,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 200,
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "herbs",
          "label": "Tørket oregano og litt timian",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "butter",
          "label": "Smør (til bechamel)",
          "amount": 3,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "flour",
          "label": "Hvetemel (til bechamel)",
          "amount": 3,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "milk",
          "label": "Melk (til bechamel)",
          "amount": 6,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "lasagne_sheets",
          "label": "Lasagneplater",
          "amount": 300,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "parmesan",
          "label": "Nyrevet parmesan",
          "amount": 60,
          "unit": "g",
          "role": "seasoning",
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
          "id": "mozzarella",
          "label": "Revet mozzarella (på toppen)",
          "amount": 100,
          "unit": "g",
          "role": "seasoning",
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
        "Finhakk løk, gulrot og selleri til en soffritto, og surr den myk i olivenolje 6–8 minutter. Ha i hvitløken mot slutten.",
        "Skru opp varmen, ha i kjøttdeigen og brun den godt. Rør inn tomatpuré og la den steke med et minutt.",
        "Tilsett hakkede tomater, kraft, oregano og salt. La kjøttsausen putre på svak varme i 30–45 minutter. Spe med vann om den blir tørr.",
        "Lag bechamel: smelt smøret, rør inn melet og la jevningen surre et par minutter. Spe med melken litt etter litt mens du visper, og kok sausen blank og passe tjukk. Smak til med salt og litt revet parmesan.",
        "Smør litt kjøttsaus i bunnen av en form. Legg på lasagneplater, kjøttsaus og bechamel i lag – tre til fire lag – og avslutt med bechamel, parmesan og mozzarella på toppen.",
        "Stek på 200 °C i 40–45 minutter til lasagnen er gyllen og gjennomvarm. La den hvile 10–15 minutter før du skjærer den opp."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "beef",
          "label": "Grovkvernet storfe (høyrygg/bog)",
          "amount": 400,
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
          "id": "pork",
          "label": "Grovkvernet svinekjøtt",
          "amount": 200,
          "unit": "g",
          "role": "protein",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": true,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "pancetta",
          "label": "Pancetta eller bacon, finhakket",
          "amount": 80,
          "unit": "g",
          "role": "protein",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 1500,
          "removable": true,
          "taste": {
            "umami": 2
          }
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
          "id": "onion",
          "label": "Løk, finhakket (soffritto)",
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
          "label": "Gulrot, finhakket (soffritto)",
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
          "id": "celery",
          "label": "Stangselleri, finhakket (soffritto)",
          "amount": 1,
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
          "id": "wine",
          "label": "Rødvin (eller ekstra kraft)",
          "amount": 1.5,
          "unit": "dl",
          "role": "acid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sour": 1,
            "umami": 1
          },
          "onRemove": {
            "tip": "Vinen gir syrlig dybde – dropper du den, spe med litt ekstra kraft og en skvett balsamico."
          }
        },
        {
          "id": "passata",
          "label": "Passata (siktet tomat)",
          "amount": 4,
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
          },
          "isPrimaryAcid": true,
          "onRemove": {
            "tip": "Tomaten er kjøttsausens syre og base – uten den mister den både friskhet og væske."
          }
        },
        {
          "id": "stock",
          "label": "Hjemmelaget oksekraft",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 150,
          "removable": true,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "herbs",
          "label": "Frisk timian og laurbær",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "butter",
          "label": "Smør (til bechamel)",
          "amount": 4,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "flour",
          "label": "Hvetemel (til bechamel)",
          "amount": 4,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "milk",
          "label": "Helmelk (til bechamel)",
          "amount": 7,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "nutmeg",
          "label": "Revet muskatnøtt (i bechamel)",
          "amount": 0.25,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "tradition": "traditional",
          "note": "Et lite dryss muskat løfter den hvite sausen – klassisk i ekte bechamel."
        },
        {
          "id": "egg_sheets",
          "label": "Ferske eggplater (lasagne)",
          "amount": 300,
          "unit": "g",
          "role": "starch",
          "essential": true,
          "scaling": "linear",
          "addStage": "end",
          "removable": false,
          "allergens": [
            "gluten",
            "egg"
          ]
        },
        {
          "id": "parmesan",
          "label": "Nyrevet parmesan (Parmigiano-Reggiano)",
          "amount": 80,
          "unit": "g",
          "role": "seasoning",
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
          "id": "mozzarella",
          "label": "Revet mozzarella (på toppen)",
          "amount": 125,
          "unit": "g",
          "role": "seasoning",
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
        "Smelt pancetta ut i olivenolje i en tykkbunnet gryte til fettet løsner. Tilsett soffritto av løk, gulrot og selleri, og surr den myk i 8–10 minutter. Ha i hvitløken mot slutten.",
        "Skru opp varmen og brun kjøttdeigen godt til mørk farge. Rør inn tomatpuré og la den steke med.",
        "Hell i vinen og kok den nesten bort. Tilsett passata, kraft, timian, laurbær og salt. La ragùen putre på svært svak varme i 2–3 timer, og spe med vann eller kraft når den blir tørr.",
        "Lag rik bechamel: smelt smøret, rør inn melet og la jevningen surre. Spe med melken litt etter litt mens du visper til en blank, fyldig saus. Smak til med salt og revet muskat.",
        "Bygg lasagnen: tynt lag ragù i bunnen, så eggplater, ragù og bechamel i fire–fem lag. Avslutt med bechamel, parmesan og mozzarella.",
        "Stek på 190–200 °C i 45–50 minutter til den er dypt gyllen. La lasagnen hvile 15 minutter før servering så lagene setter seg."
      ]
    }
  },
  "swapOptions": {
    "beef": [
      {
        "id": "beef_pork_mix",
        "label": "Blanding okse og svin (saftigere)",
        "amount": 500,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Svinekjøttet gir fett og mildhet – nærmere den ekte ragùen."
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
        "note": "Mildere og magrere; stek litt kortere."
      },
      {
        "id": "lentils_mushroom",
        "label": "Røde linser og sopp (vegetarisk)",
        "amount": 450,
        "unit": "g",
        "sodiumPer100g": 5,
        "taste": {
          "umami": 2
        },
        "tradition": "non-traditional",
        "note": "Vegetarisk – finhakket sopp + linser gir en fyldig, kjøttaktig saus. Spe med litt ekstra kraft."
      },
      {
        "id": "plant_mince",
        "label": "Plantebasert farse (vegansk)",
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
    "olive_oil": [
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (nøytral)",
        "amount": 1,
        "unit": "ss",
        "note": "Nøytral steking; tåler høy varme."
      }
    ],
    "stock": [
      {
        "id": "bouillon",
        "label": "Oksebuljong (terning)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 350,
        "taste": {
          "umami": 1
        },
        "note": "Raskere; saltere – salt justeres automatisk."
      }
    ],
    "wine": [
      {
        "id": "stock_extra",
        "label": "Ekstra kraft + balsamico (alkoholfritt)",
        "amount": 1,
        "unit": "dl",
        "sodiumPer100g": 200,
        "taste": {
          "sour": 1,
          "umami": 1
        },
        "note": "Alkoholfritt; ha i en skvett balsamico for syrlig dybde. Fint til barn."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 3,
        "unit": "ss",
        "allergens": [],
        "note": "Melkefri bechamel-base; smelt og lag roux som med smør."
      },
      {
        "id": "rapeseed_oil",
        "label": "Rapsolje (melkefri)",
        "amount": 3,
        "unit": "ss",
        "note": "Nøytral, melkefri – lag roux med olje og mel."
      }
    ],
    "flour": [
      {
        "id": "cornstarch",
        "label": "Maizena (glutenfri jevning)",
        "amount": 2,
        "unit": "ss",
        "allergens": [],
        "note": "Glutenfri; rør ut i litt kald melk og kok inn – bruk litt mindre enn hvetemel."
      },
      {
        "id": "gf_flour",
        "label": "Glutenfri melblanding",
        "amount": 3,
        "unit": "ss",
        "allergens": [],
        "note": "Glutenfri roux; lag bechamel som vanlig."
      }
    ],
    "milk": [
      {
        "id": "plant_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 6,
        "unit": "dl",
        "allergens": [],
        "note": "Nøytral, melkefri base til bechamelen."
      }
    ],
    "creme_fraiche": [
      {
        "id": "plant_creme",
        "label": "Plantebasert crème fraîche (melkefri)",
        "amount": 3,
        "unit": "dl",
        "allergens": [],
        "note": "Melkefri hvit saus; rør sammen med vegansk ost."
      }
    ],
    "lasagne_sheets": [
      {
        "id": "gf_sheets",
        "label": "Glutenfrie lasagneplater",
        "amount": 250,
        "unit": "g",
        "allergens": [],
        "note": "Mais-/risbaserte; forvell kort eller gjør sausene litt løsere."
      }
    ],
    "egg_sheets": [
      {
        "id": "dry_sheets",
        "label": "Tørre lasagneplater (eggfrie)",
        "amount": 300,
        "unit": "g",
        "allergens": [
          "gluten"
        ],
        "note": "Vanlige tørre plater uten egg."
      },
      {
        "id": "gf_sheets_egg",
        "label": "Glutenfrie lasagneplater (glutenfri/eggfri)",
        "amount": 300,
        "unit": "g",
        "allergens": [],
        "note": "Mais-/risbaserte; forvell kort eller gjør sausene løsere."
      }
    ],
    "parmesan": [
      {
        "id": "grana_padano",
        "label": "Grana Padano (mildere)",
        "amount": 60,
        "unit": "g",
        "sodiumPer100g": 600,
        "allergens": [
          "dairy"
        ],
        "taste": {
          "umami": 2
        },
        "note": "Mildere og rimeligere hardost."
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
        "note": "Melkefri; salt justeres automatisk."
      }
    ],
    "mozzarella": [
      {
        "id": "vegan_cheese",
        "label": "Vegansk ost (melkefri)",
        "amount": 100,
        "unit": "g",
        "sodiumPer100g": 400,
        "allergens": [],
        "taste": {
          "umami": 1
        },
        "note": "Melkefri smelteost til toppen."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "olive_oil": 0.92,
    "tomato_paste": 1.1,
    "chopped_tomatoes": 1.05,
    "passata": 1.05,
    "wine": 0.99,
    "stock": 1,
    "milk": 1.03,
    "salt_added": 1.2,
    "butter": 0.95,
    "flour": 0.55,
    "rapeseed_oil": 0.92,
    "bouillon": 1,
    "plant_milk": 1,
    "margarine": 0.92,
    "cornstarch": 0.6,
    "gf_flour": 0.55,
    "stock_extra": 1,
    "creme_fraiche": 1,
    "plant_creme": 1
  },
  "pieceWeight": {
    "onion": 110,
    "garlic": 5,
    "carrot": 70,
    "celery": 50
  },
  "unitOptions": {
    "olive_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "tomato_paste": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "chopped_tomatoes": [
      "dl",
      "ml",
      "g"
    ],
    "passata": [
      "dl",
      "ml",
      "g"
    ],
    "wine": [
      "dl",
      "ml",
      "g"
    ],
    "stock": [
      "dl",
      "ml",
      "g"
    ],
    "milk": [
      "dl",
      "ml",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "butter": [
      "ss",
      "ts",
      "g"
    ],
    "flour": [
      "ss",
      "ts",
      "dl",
      "g"
    ],
    "rapeseed_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "bouillon": [
      "dl",
      "ml",
      "g"
    ],
    "plant_milk": [
      "dl",
      "ml",
      "g"
    ],
    "margarine": [
      "ss",
      "ts",
      "g"
    ],
    "cornstarch": [
      "ss",
      "ts",
      "g"
    ],
    "gf_flour": [
      "ss",
      "ts",
      "dl",
      "g"
    ],
    "stock_extra": [
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
    ]
  },
  "bulkRoles": [
    "protein",
    "vegetable",
    "liquid",
    "starch"
  ],
  "levers": [
    {
      "axis": "salt",
      "id": "salt_added"
    }
  ],
  "requireRoles": [
    "acid"
  ],
  "tasteMessages": {
    "umami": "Mindre dybde i kjøttsausen – litt ekstra tomatpuré, kraft eller en skvett soya hjelper.",
    "sour": "Mindre friskhet – la kjøttsausen koke litt lenger, eller ha i en skvett tomat eller balsamico.",
    "sweet": "Mindre rundhet mot tomatsyren – litt revet gulrot eller en klype sukker balanserer."
  },
  "leverMessages": {
    "salt": {
      "down": "Retten ble saltere – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    }
  }
};
