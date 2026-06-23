/* ===== Saftige kanelboller – datamodell =====
   Saftige kanelboller i tre nivåer (rask gjærdeig → kardemomme + ordentlig
   heving → kald langheving / brunet smør i fyllet). Sweet-lever på fyll-sukker,
   yieldNoun kanelboller. Allergener: gluten, meieri (deig+fyll-smør), egg.
   Generert fra recipes-pending/kanelboller.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "kanelboller",
  "yieldNoun": "kanelboller",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 8,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ],
          "note": "Hold igjen litt – tilsett ikke mer mel enn deigen trenger, ellers blir bollene tørre."
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Lunkes til ca. 37 °C for hurtigheving.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "yeast_dry",
          "label": "Tørrgjær",
          "amount": 1,
          "unit": "ts",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "butter",
          "label": "Smør (i deigen)",
          "amount": 75,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "sugar",
          "label": "Sukker (i deigen)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "filling_butter",
          "label": "Romtemperert smør (fyll)",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "filling_sugar",
          "label": "Sukker (fyll)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cinnamon",
          "label": "Kanel (fyll)",
          "amount": 2,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "egg",
          "label": "Egg (til pensling)",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "egg"
          ]
        }
      ],
      "steps": [
        "Lunk melken til ca. 37 °C, og rør ut tørrgjæren. Smelt smøret og rør det inn sammen med sukker og salt.",
        "Tilsett mesteparten av melet og elt til en smidig deig – hold igjen litt mel så deigen forblir litt klissete. La heve lunt i ca. 30 minutter.",
        "Rør sammen romtemperert smør, sukker og kanel til fyllet. Kjevle deigen tynt ut til et rektangel, smør på fyllet, rull stramt sammen og skjær i 12 skiver.",
        "Sett bollene på stekebrett, la etterheve ~20 minutter, pensle med sammenpisket egg og stek midt i ovnen ved 220 °C i 10–12 minutter til gylne."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 8,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ],
          "note": "Mål gjerne med vekt (~480 g) og hold igjen litt – for mye mel gir tørre boller."
        },
        {
          "id": "milk",
          "label": "Melk",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Lunkes til ca. 37 °C.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "yeast_fresh",
          "label": "Fersk gjær",
          "amount": 25,
          "unit": "g",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Tilsvarer ca. 1 ts tørrgjær om du heller vil bruke det."
        },
        {
          "id": "butter",
          "label": "Smør (i deigen)",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "sugar",
          "label": "Sukker (i deigen)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "cardamom",
          "label": "Malt kardemomme",
          "amount": 1.5,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "egg_dough",
          "label": "Egg (i deigen)",
          "amount": 1,
          "unit": "stk",
          "role": "binder",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "note": "Gir rikere deig.",
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "filling_butter",
          "label": "Romtemperert smør (fyll)",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "filling_sugar",
          "label": "Sukker (fyll)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cinnamon",
          "label": "Kanel (fyll)",
          "amount": 2,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "egg",
          "label": "Egg (til pensling)",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "egg"
          ]
        }
      ],
      "steps": [
        "Smuldre den ferske gjæren i en bakebolle. Lunk melken til ca. 37 °C og rør den inn til gjæren er oppløst.",
        "Tilsett mykt smør, sukker, kardemomme, egg og salt, og rør inn mesteparten av melet. Elt deigen smidig og blank i 8–10 minutter – hold den litt klissete.",
        "Dekk til og la heve lunt til dobbel størrelse, ca. 45–60 minutter.",
        "Rør sammen romtemperert smør, sukker og kanel til fyllet. Kjevle deigen tynt ut til et rektangel (~30×40 cm), smør fyllet jevnt utover, rull stramt sammen og skjær i 12 skiver.",
        "Sett bollene på stekebrett med god avstand, dekk til og etterhev ~30 minutter. Pensle med sammenpisket egg.",
        "Stek midt i ovnen ved 220 °C i 10–12 minutter til gyllenbrune. Avkjøl på rist, gjerne under et kjøkkenhåndkle så de holder seg myke."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 12,
      "ingredients": [
        {
          "id": "flour",
          "label": "Hvetemel",
          "amount": 8,
          "unit": "dl",
          "role": "bulk",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "gluten"
          ],
          "note": "Vei melet (~480 g). En klissete deig blir saftigst – motstå trangen til å tilsette mer mel."
        },
        {
          "id": "milk",
          "label": "Kald melk",
          "amount": 3,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Kald melk rett fra kjøleskapet til kald langheving.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "yeast_fresh",
          "label": "Fersk gjær",
          "amount": 12,
          "unit": "g",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Halvert mengde fordi deigen heves kaldt over natten."
        },
        {
          "id": "butter",
          "label": "Smør (i deigen)",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "sugar",
          "label": "Sukker (i deigen)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "sweet": 1
          }
        },
        {
          "id": "cardamom",
          "label": "Nystøtt kardemomme",
          "amount": 2,
          "unit": "ts",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "bitter": 1
          },
          "note": "Nystøtte frø gir mest aroma."
        },
        {
          "id": "egg_dough",
          "label": "Egg (i deigen)",
          "amount": 1,
          "unit": "stk",
          "role": "binder",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "egg"
          ]
        },
        {
          "id": "salt",
          "label": "Salt",
          "amount": 0.75,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "filling_butter",
          "label": "Brunet smør (fyll)",
          "amount": 100,
          "unit": "g",
          "role": "fat",
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Brun smøret til det dufter nøtteaktig, avkjøl til mykt før det røres med sukker og kanel.",
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "filling_sugar",
          "label": "Sukker (fyll)",
          "amount": 1,
          "unit": "dl",
          "role": "sweet",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "cinnamon",
          "label": "Kanel (fyll)",
          "amount": 2.5,
          "unit": "ss",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "taste": {
            "bitter": 1
          }
        },
        {
          "id": "egg",
          "label": "Egg (til pensling)",
          "amount": 1,
          "unit": "stk",
          "role": "seasoning",
          "scaling": "fixed",
          "addStage": "end",
          "removable": true,
          "allergens": [
            "egg"
          ]
        }
      ],
      "steps": [
        "Smuldre gjæren i en bakebolle og rør den ut i kald melk. Tilsett mykt smør, sukker, kardemomme, egg og salt, og elt inn mesteparten av melet til en smidig, litt klissete deig.",
        "Dekk bollen tett og sett deigen til kald langheving i kjøleskapet i 8–24 timer.",
        "Brun smøret til fyllet til det er gyllent og nøtteaktig, og avkjøl til det er mykt. Rør det med sukker og kanel.",
        "Ta deigen ut ca. 1 time før steking. Kjevle den tynt ut til et rektangel, smør på fyllet, rull stramt sammen og skjær i 12 skiver.",
        "Etterhev bollene lunt til de er luftige, ~45–60 minutter. Pensle med sammenpisket egg.",
        "Stek midt i ovnen ved 220 °C i 10–12 minutter til mørkt gylne. Avkjøl under et håndkle for ekstra myke, saftige boller."
      ]
    }
  },
  "swapOptions": {
    "flour": [
      {
        "id": "gf_flour",
        "label": "Glutenfri melblanding",
        "amount": 8,
        "unit": "dl",
        "note": "Bruk en blanding med bindemiddel; glutenfri deig blir klissete – håndter forsiktig og la den hvile litt lenger."
      }
    ],
    "milk": [
      {
        "id": "oat_milk",
        "label": "Havredrikk (melkefri)",
        "amount": 3,
        "unit": "dl",
        "note": "Nøytral, melkefri base."
      },
      {
        "id": "lactosefree_milk",
        "label": "Laktosefri melk",
        "amount": 3,
        "unit": "dl",
        "allergens": [
          "dairy"
        ]
      }
    ],
    "yeast_fresh": [
      {
        "id": "yeast_dry_swap",
        "label": "Tørrgjær",
        "amount": 1,
        "unit": "ts",
        "note": "1 ts tørrgjær ≈ 25 g fersk gjær; bland rett i melet."
      }
    ],
    "butter": [
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 100,
        "unit": "g",
        "note": "Smelt/mykne som smør; melkefritt."
      }
    ],
    "filling_butter": [
      {
        "id": "filling_margarine",
        "label": "Margarin (melkefri, fyll)",
        "amount": 100,
        "unit": "g",
        "note": "Romtemperert, melkefritt fyll-smør."
      }
    ],
    "egg_dough": [
      {
        "id": "extra_milk_dough",
        "label": "En skvett ekstra melk/plantedrikk (eggfri)",
        "amount": 0.5,
        "unit": "dl",
        "note": "Erstatter egget i deigen; gir litt mer væske for binding."
      }
    ],
    "egg": [
      {
        "id": "egg_wash_plant",
        "label": "Plantedrikk til pensling (eggfri)",
        "amount": 1,
        "unit": "ss",
        "note": "Pensle med havredrikk for farge uten egg; eller dryss perlesukker uten pensling."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "flour": 0.55,
    "gf_flour": 0.55,
    "milk": 1.03,
    "oat_milk": 1.03,
    "lactosefree_milk": 1.03,
    "sugar": 0.85,
    "cardamom": 0.5,
    "filling_sugar": 0.85,
    "cinnamon": 0.45,
    "egg_wash_plant": 1.03,
    "yeast_dry_swap": 0.5,
    "extra_milk_dough": 1.03
  },
  "pieceWeight": {
    "egg": 55,
    "yeast_fresh": 50
  },
  "unitOptions": {
    "flour": [
      "dl",
      "ml",
      "g"
    ],
    "gf_flour": [
      "dl",
      "ml",
      "g"
    ],
    "milk": [
      "dl",
      "ml",
      "g"
    ],
    "oat_milk": [
      "dl",
      "ml",
      "g"
    ],
    "lactosefree_milk": [
      "dl",
      "ml",
      "g"
    ],
    "sugar": [
      "ss",
      "ts",
      "g"
    ],
    "cardamom": [
      "ts",
      "g"
    ],
    "filling_sugar": [
      "dl",
      "ss",
      "g"
    ],
    "cinnamon": [
      "ss",
      "ts",
      "g"
    ],
    "egg_wash_plant": [
      "ss",
      "ml",
      "g"
    ],
    "yeast_dry_swap": [
      "ts",
      "g"
    ],
    "extra_milk_dough": [
      "dl",
      "ml",
      "g"
    ]
  },
  "bulkRoles": [
    "bulk",
    "liquid"
  ],
  "levers": [
    {
      "axis": "sweet",
      "id": "filling_sugar"
    }
  ],
  "requireRoles": [],
  "tasteMessages": {
    "sweet": "Bollene blir mindre søte – pensle gjerne med litt melisglasur eller strø perlesukker på toppen."
  },
  "leverMessages": {
    "sweet": {
      "down": "Fyllet ble søtere – vi reduserte sukkeret i fyllet litt for å holde balansen.",
      "up": "Du tok bort noe sødme – vi økte sukkeret i fyllet litt igjen. Smak til."
    }
  }
};
