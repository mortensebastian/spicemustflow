/* ===== Helstekt kalkun – datamodell =====
Helstekt kalkun (hel fugl i ovn) – norsk høytidsrett til jul/nyttår. Teknikk-stige: enkel = smør + rask buljongsaus; medium = urtesmør under skinnet + sjysaus; kompleks = saltlake + hjemmelaget kraft + hvitvin + fløtesaus.
   Generert fra recipes-pending/helstekt-kalkun.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "helstekt-kalkun",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 8,
      "ingredients": [
        {
          "id": "turkey",
          "label": "Hel kalkun (ca. 4–5 kg)",
          "amount": 4.5,
          "unit": "kg",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "note": "Temperer 1 time og tørk godt før krydring. Regn ca. 500 g per person."
        },
        {
          "id": "butter",
          "label": "Smør, romtemperert",
          "amount": 4,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "note": "Gnis godt inn over hele kalkunen for gyllent skinn."
        },
        {
          "id": "bouillon",
          "label": "Kalkun- eller kyllingbuljong (til saus)",
          "amount": 4,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 320,
          "removable": false,
          "taste": {
            "umami": 1
          }
        },
        {
          "id": "flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "gluten"
          ],
          "note": "Rør ut i litt kaldt vann og spe i sausen."
        },
        {
          "id": "salt_added",
          "label": "Salt og pepper",
          "amount": 2,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false,
          "note": "Krydre godt, også inni kalkunen."
        }
      ],
      "steps": [
        "Ta kalkunen ut av kjøleskapet cirka 1 time før steking så den tempereres, og tørk den godt med kjøkkenpapir. Sett ovnen på 175 °C.",
        "Gni hele kalkunen inn med romtemperert smør, og krydre godt med salt og pepper – også inni. Legg den med brystet opp i en langpanne.",
        "Stek midt i ovnen, cirka 30–35 minutter per kilo. Dekk brystet løst med folie hvis det blir for mørkt. Kalkunen er ferdig når kjernetemperaturen i den tykkeste delen av låret er 68–70 °C.",
        "Løft kalkunen over på et fat, dekk med folie og la den hvile minst 20–30 minutter. Kok imens ut stekesjyen med buljong, jevn med hvetemel utrørt i litt vann, og la sausen småkoke et par minutter. Smak til og server."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 8,
      "ingredients": [
        {
          "id": "turkey",
          "label": "Hel kalkun (ca. 4–5 kg)",
          "amount": 4.5,
          "unit": "kg",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "note": "Temperer og tørk godt. Regn ca. 500 g per person."
        },
        {
          "id": "herb_butter",
          "label": "Urtesmør (smør, hvitløk, friske urter)",
          "amount": 5,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "note": "Smøres under skinnet på brystet for saftig kjøtt."
        },
        {
          "id": "garlic",
          "label": "Hvitløk, finhakket",
          "amount": 3,
          "unit": "fedd",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "lemon",
          "label": "Sitron, i båter (i kaviteten)",
          "amount": 1,
          "unit": "stk",
          "role": "acid",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 1
          },
          "onRemove": {
            "tip": "Uten sitron i kaviteten blir kalkunen mildere – press litt sitron over kjøttet ved servering, eller server med tyttebær."
          }
        },
        {
          "id": "thyme",
          "label": "Friske urter (timian, rosmarin)",
          "amount": 4,
          "unit": "kvist",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "root_vegetables",
          "label": "Rotgrønnsaker (gulrot, løk, selleri), i biter",
          "amount": 800,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "Legges i bunnen av langpannen og gir smak til sjyen."
        },
        {
          "id": "stock",
          "label": "Kalkunkraft (eller buljongterning + vann)",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 150,
          "removable": false,
          "cost": 3,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "gluten"
          ],
          "note": "Rør ut i litt kaldt vann og spe i sausen."
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
          "id": "pepper",
          "label": "Pepper",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        }
      ],
      "steps": [
        "Temperer og tørk kalkunen. Lag et urtesmør av romtemperert smør, hvitløk og friske urter, og smør det forsiktig inn under skinnet på brystet. Gni resten utenpå, og krydre godt med salt og pepper.",
        "Legg sitron i båter (og gjerne en løk) inne i kalkunen. Sett ovnen på 175 °C.",
        "Fordel grovt skårne rotgrønnsaker i bunnen av langpannen, hell over litt av kraften, og legg kalkunen oppå med brystet opp.",
        "Stek cirka 30–35 minutter per kilo til kjernetemperaturen i låret er 68–70 °C. Øs stekesjyen over kalkunen et par ganger underveis, og dekk brystet med folie hvis det blir for mørkt.",
        "La kalkunen hvile under folie i minst 30 minutter. Sil sjyen fra pannen, kok den opp med resten av kraften, jevn med hvetemel, og la sausen småkoke blank. Smak til og server."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 8,
      "ingredients": [
        {
          "id": "turkey",
          "label": "Hel kalkun (ca. 4–5 kg), gjerne økologisk",
          "amount": 4.5,
          "unit": "kg",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 60,
          "removable": false,
          "taste": {
            "umami": 1
          },
          "note": "Legges i saltlake dagen før for saftigst mulig kjøtt. Er den frossen, må den tine 2–3 døgn i kjøleskap først."
        },
        {
          "id": "herb_butter",
          "label": "Urtesmør (smør, hvitløk, salvie, timian)",
          "amount": 6,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ],
          "note": "Smøres under skinnet på både bryst og lår."
        },
        {
          "id": "garlic",
          "label": "Hvitløk",
          "amount": 5,
          "unit": "fedd",
          "role": "aromatic",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "lemon",
          "label": "Sitron, i båter (i kaviteten)",
          "amount": 1,
          "unit": "stk",
          "role": "acid",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "isPrimaryAcid": true,
          "taste": {
            "sour": 1
          },
          "onRemove": {
            "tip": "Uten sitron i kaviteten blir kalkunen mildere – press litt sitron over kjøttet ved servering, eller server med tyttebær."
          }
        },
        {
          "id": "thyme",
          "label": "Friske urter (salvie, timian, rosmarin)",
          "amount": 5,
          "unit": "kvist",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "white_wine",
          "label": "Hvitvin (til deglazing i bunnen)",
          "amount": 2,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "cost": 3,
          "note": "Gir syrlig dybde til sjysausen; kan byttes til ekstra kraft."
        },
        {
          "id": "homemade_stock",
          "label": "Hjemmelaget kalkunkraft",
          "amount": 5,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "end",
          "sodiumPer100g": 120,
          "removable": false,
          "cost": 3,
          "taste": {
            "umami": 2
          },
          "note": "Kokes gjerne på halsen og innmaten fra kalkunen."
        },
        {
          "id": "cream",
          "label": "Fløte (til sausen)",
          "amount": 1,
          "unit": "dl",
          "role": "fat",
          "scaling": "linear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "dairy"
          ],
          "note": "Runder av festsausen; kan byttes til plantefløte."
        },
        {
          "id": "root_vegetables",
          "label": "Rotgrønnsaker (gulrot, sellerirot, sjalott), i biter",
          "amount": 800,
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
          "id": "flour",
          "label": "Hvetemel (til jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "gluten"
          ],
          "note": "Rør ut i litt kaldt vann og spe i sausen."
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
          "removable": false,
          "note": "Vær varsom med ekstra salt hvis kalkunen har ligget i saltlake."
        },
        {
          "id": "pepper",
          "label": "Sort pepper, nykvernet",
          "amount": 1,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        }
      ],
      "steps": [
        "Legg kalkunen i saltlake dagen før: rør ut cirka 3 ss fint salt per liter kaldt vann i en stor bøtte, senk kalkunen ned så den er dekket, og sett kaldt i 12–24 timer. Skyll og tørk den godt før steking.",
        "Lag urtesmør av romtemperert smør, hvitløk og friske urter, og smør det inn under skinnet på bryst og lår. Gni skinnet med litt av smøret, og krydre med salt og pepper. Fyll kaviteten med sitron, hvitløk og noen urtekvister.",
        "Sett ovnen på 175 °C. Fordel rotgrønnsaker i langpannen, hell hvitvin og hjemmelaget kalkunkraft i bunnen, og legg kalkunen oppå med brystet opp.",
        "Stek cirka 30–35 minutter per kilo, og øs sjyen over hver halvtime. Dekk brystet med folie når det er gyllent. Kalkunen er ferdig ved 68–70 °C kjernetemperatur i den tykkeste delen av låret.",
        "La kalkunen hvile under folie i minst 30–45 minutter. Sil sjyen, skum av fett, og kok den inn med kraften. Jevn med hvetemel, rør inn fløte, og la sausen småkoke til den er blank og fyldig. Smak til og server."
      ]
    }
  },
  "swapOptions": {
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 4,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Melkefritt alternativ; gnis inn på samme måte."
      },
      {
        "id": "neutral_oil",
        "label": "Nøytral olje (melkefri)",
        "amount": 3,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Melkefritt; pensles utover skinnet."
      }
    ],
    "herb_butter": [
      {
        "id": "herb_oil",
        "label": "Urtolje (melkefri)",
        "amount": 5,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Olje rørt med hvitløk og urter; melkefritt alternativ til urtesmør."
      },
      {
        "id": "herb_margarine",
        "label": "Urtemargarin (melkefri)",
        "amount": 5,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Margarin rørt med hvitløk og urter; melkefri fylde."
      }
    ],
    "bouillon": [
      {
        "id": "homemade_stock",
        "label": "Hjemmelaget kalkunkraft (mer dybde)",
        "amount": 4,
        "unit": "dl",
        "sodiumPer100g": 120,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Kokt på halsen og innmaten; rikere smak enn buljong."
      }
    ],
    "stock": [
      {
        "id": "bouillon",
        "label": "Kalkun-/kyllingbuljong (terning)",
        "amount": 5,
        "unit": "dl",
        "sodiumPer100g": 320,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "cost": 1,
        "note": "Raskere og rimeligere; saltere – salt justeres automatisk."
      }
    ],
    "homemade_stock": [
      {
        "id": "bouillon",
        "label": "Kalkun-/kyllingbuljong (terning)",
        "amount": 5,
        "unit": "dl",
        "sodiumPer100g": 320,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "cost": 1,
        "note": "Rask snarvei når du ikke koker egen kraft; saltere – salt justeres automatisk."
      }
    ],
    "white_wine": [
      {
        "id": "stock_extra",
        "label": "Ekstra kalkunkraft (alkoholfritt)",
        "amount": 2,
        "unit": "dl",
        "sodiumPer100g": 120,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "cost": 1,
        "note": "Alkoholfritt; tilsett en skvett sitron eller eddik for friskheten vinen gir."
      }
    ],
    "cream": [
      {
        "id": "plant_cream",
        "label": "Plantefløte (melkefri)",
        "amount": 1,
        "unit": "dl",
        "tradition": "non-traditional",
        "note": "Soya- eller havrebasert; runder av sausen uten meieri."
      }
    ],
    "flour": [
      {
        "id": "maizena",
        "label": "Maizena (glutenfri)",
        "amount": 1,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Glutenfri jevning; bruk cirka halvparten av melmengden, utrørt i kaldt vann."
      },
      {
        "id": "potato_flour",
        "label": "Potetmel (glutenfri)",
        "amount": 1,
        "unit": "ss",
        "tradition": "non-traditional",
        "note": "Glutenfri jevning; rør ut i kaldt vann og spe forsiktig så sausen ikke blir seig."
      }
    ],
    "turkey": [
      {
        "id": "turkey_breast",
        "label": "Kalkunbryst med skinn (til mindre selskap)",
        "amount": 2,
        "unit": "kg",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 1
        },
        "tradition": "regional",
        "note": "Enklere og raskere når dere er få; stek til samme kjernetemperatur, men kortere tid."
      }
    ]
  },
  "servedAcid": {
    "tip": "Mangler retten friskhet? Server helstekt kalkun med tyttebær eller tranebærsaus, eller press litt sitron over kjøttet ved servering."
  },
  "density": {
    "butter": 0.95,
    "herb_butter": 0.95,
    "margarine": 0.95,
    "herb_margarine": 0.95,
    "neutral_oil": 0.92,
    "herb_oil": 0.92,
    "olive_oil": 0.92,
    "bouillon": 1,
    "stock": 1,
    "homemade_stock": 1,
    "stock_extra": 1,
    "white_wine": 0.99,
    "cream": 1.01,
    "plant_cream": 1.01,
    "flour": 0.55,
    "maizena": 0.6,
    "potato_flour": 0.6,
    "salt_added": 1.2
  },
  "pieceWeight": {
    "onion": 110,
    "garlic": 5,
    "lemon": 100
  },
  "unitOptions": {
    "butter": [
      "ss",
      "g"
    ],
    "herb_butter": [
      "ss",
      "g"
    ],
    "margarine": [
      "ss",
      "g"
    ],
    "herb_margarine": [
      "ss",
      "g"
    ],
    "neutral_oil": [
      "ss",
      "ts",
      "ml",
      "g"
    ],
    "herb_oil": [
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
    "bouillon": [
      "dl",
      "ml",
      "g"
    ],
    "stock": [
      "dl",
      "ml",
      "g"
    ],
    "homemade_stock": [
      "dl",
      "ml",
      "g"
    ],
    "stock_extra": [
      "dl",
      "ml",
      "g"
    ],
    "white_wine": [
      "dl",
      "ml",
      "g"
    ],
    "cream": [
      "dl",
      "ml",
      "g"
    ],
    "plant_cream": [
      "dl",
      "ml",
      "g"
    ],
    "flour": [
      "ss",
      "g"
    ],
    "maizena": [
      "ss",
      "g"
    ],
    "potato_flour": [
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
    "vegetable"
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
    "umami": "Retten blir litt flatere – litt mer kraft eller stekesjy i sausen gir fylde.",
    "sweet": "Mindre søtlig dybde – litt mer rotgrønnsaker i bunnen eller tyttebær til balanserer."
  },
  "leverMessages": {
    "salt": {
      "down": "Du la til en saltere ingrediens – vi reduserte tilsatt salt automatisk. Smak til, og husk at saltlake allerede salter kjøttet.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til."
    }
  }
};
