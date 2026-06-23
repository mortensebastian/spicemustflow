/* ===== Hjemmelaget grovbrød – datamodell =====
   Hjemmelaget grovbrød i tre nivåer (raskt eltefritt → grovt formbrød med
   sammalt + frø → kald langheving med rug/surdeig). Salt-lever, yieldNoun brød
   (2 brød). Dekker hjemmelaget brød / grovbrød. Allergen: gluten.
   Generert fra recipes-pending/grovbrod.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "grovbrod",
  "yieldNoun": "brød",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 2,
      "ingredients": [
        {
          "id": "wholemeal_wheat",
          "label": "Sammalt hvete (grov)",
          "amount": 5,
          "unit": "dl",
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
          "id": "white_flour",
          "label": "Hvetemel",
          "amount": 5,
          "unit": "dl",
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
          "label": "Vann (fingervarmt)",
          "amount": 6,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Fingervarmt, ca. 37 grader – for varmt vann dreper gjæren."
        },
        {
          "id": "yeast",
          "label": "Tørrgjær",
          "amount": 1,
          "unit": "ts",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Bland tørrgjæren rett i melet. Tilsvarer ca. 25 g fersk gjær."
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
        "Bland sammalt hvete, hvetemel, tørrgjær og salt i en stor bolle.",
        "Tilsett det fingervarme vannet, og rør sammen til en våt, klissete deig – ikke tilsett mer mel.",
        "Dekk bollen med plast eller et klede, og la deigen heve lunt til dobbel størrelse, ca. 1 time.",
        "Smør en brødform, hell/skrap deigen ned i den, og la den etterheve ca. 30 minutter.",
        "Stek midt i ovnen på 200 grader i 35–40 minutter til brødet er gyllent og høres hult ut når du banker i bunnen. Avkjøl på rist."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 2,
      "ingredients": [
        {
          "id": "wholemeal_wheat",
          "label": "Sammalt hvete (grov)",
          "amount": 6,
          "unit": "dl",
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
          "id": "white_flour",
          "label": "Hvetemel",
          "amount": 5,
          "unit": "dl",
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
          "id": "oats",
          "label": "Havregryn",
          "amount": 2,
          "unit": "dl",
          "role": "flour",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Bløtlegg gjerne i litt av vannet 15–30 minutter så de ikke stjeler fukt fra deigen.",
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "sunflower_seeds",
          "label": "Solsikkekjerner",
          "amount": 1,
          "unit": "dl",
          "role": "flour",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Ikke blant de 14 lovpålagte allergenene; ingen allergen-tagg."
        },
        {
          "id": "water",
          "label": "Vann (fingervarmt)",
          "amount": 7,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Fingervarmt, ca. 37 grader."
        },
        {
          "id": "yeast",
          "label": "Fersk gjær",
          "amount": 25,
          "unit": "g",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "En halv pakke; eller ca. 1 ts tørrgjær."
        },
        {
          "id": "honey",
          "label": "Honning",
          "amount": 1,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "Litt sødme runder av smaken og gir fin skorpefarge."
        },
        {
          "id": "oil",
          "label": "Nøytral olje (raps/solsikke)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Litt olje holder brødet saftig lenger."
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
        }
      ],
      "steps": [
        "Bland havregryn og solsikkekjerner med litt av det fingervarme vannet, og la det svelle i 15–30 minutter.",
        "Rør gjæren ut i resten av det fingervarme vannet sammen med honning og olje.",
        "Bland sammalt hvete, hvetemel og salt i en stor bolle. Tilsett væsken og den bløtlagte frø-/havreblandingen, og elt til en smidig, litt klissete deig (8–10 minutter).",
        "Dekk bollen, og la deigen heve lunt til dobbel størrelse, ca. 45–60 minutter.",
        "Smør to brødformer (eller form to brød), fordel deigen, og la dem etterheve 30–45 minutter under et klede.",
        "Stek midt i ovnen på 200 grader i 35–40 minutter. Brødet er ferdig når kjernetemperaturen er ca. 98 grader, eller det høres hult ut når du banker i bunnen. Avkjøl på rist under et klede."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 2,
      "ingredients": [
        {
          "id": "wholemeal_wheat",
          "label": "Sammalt hvete (grov)",
          "amount": 5,
          "unit": "dl",
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
          "id": "rye_flour",
          "label": "Sammalt rug",
          "amount": 2,
          "unit": "dl",
          "role": "flour",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Rug gir mørkere farge og dypere smak.",
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "white_flour",
          "label": "Hvetemel",
          "amount": 4,
          "unit": "dl",
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
          "id": "oats",
          "label": "Havregryn",
          "amount": 2,
          "unit": "dl",
          "role": "flour",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Bløtlegg sammen med kjernene over natten.",
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "sunflower_seeds",
          "label": "Solsikkekjerner",
          "amount": 1,
          "unit": "dl",
          "role": "flour",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "pumpkin_seeds",
          "label": "Gresskarkjerner",
          "amount": 0.5,
          "unit": "dl",
          "role": "flour",
          "scaling": "linear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "sourdough",
          "label": "Surdeigsstarter (aktiv)",
          "amount": 1,
          "unit": "dl",
          "role": "leavening",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "note": "Gir syrlig dybde og bedre holdbarhet; kan droppes til fordel for litt mer gjær.",
          "allergens": [
            "gluten"
          ]
        },
        {
          "id": "water",
          "label": "Vann (kaldt)",
          "amount": 7,
          "unit": "dl",
          "role": "liquid",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Kaldt vann til kald langheving – gjæren jobber sakte i kjøleskapet."
        },
        {
          "id": "yeast",
          "label": "Fersk gjær (lite, til langheving)",
          "amount": 10,
          "unit": "g",
          "role": "leavening",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "note": "Mindre gjær til kald langheving over natten bygger mer smak."
        },
        {
          "id": "syrup",
          "label": "Mørk sirup",
          "amount": 1,
          "unit": "ss",
          "role": "sweet",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1
          },
          "note": "Tradisjonell i grovbrød; gir farge og en rund, malt-aktig sødme."
        },
        {
          "id": "oil",
          "label": "Nøytral olje (raps/solsikke)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "note": "Holder det grove brødet saftig."
        },
        {
          "id": "salt_added",
          "label": "Salt",
          "amount": 2.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        }
      ],
      "steps": [
        "Bløtlegg havregryn, solsikkekjerner og gresskarkjerner i litt av det kalde vannet, og sett til side (gjerne over natten).",
        "Rør gjæren ut i resten av det kalde vannet sammen med surdeigsstarter, sirup og olje.",
        "Bland sammalt hvete, sammalt rug, hvetemel og salt. Tilsett væsken og den bløtlagte kjerneblandingen, og elt til en smidig, blank og litt klissete deig.",
        "Dekk bollen tett, og sett deigen til kald langheving i kjøleskapet i 8–12 timer (gjerne over natten).",
        "Ta ut deigen, fordel den i to smurte brødformer, og la dem etterheve i romtemperatur 60–90 minutter til de er godt hevet.",
        "Stek midt i ovnen på 220 grader i 10 minutter, senk så til 200 grader og stek videre 30–35 minutter til kjernetemperaturen er ca. 98 grader. Avkjøl på rist."
      ]
    }
  },
  "swapOptions": {
    "yeast": [
      {
        "id": "dry_yeast",
        "label": "Tørrgjær",
        "amount": 1,
        "unit": "ts",
        "tradition": "traditional",
        "note": "Bland tørrgjær rett i melet. 1 ts tørrgjær ≈ 25 g fersk gjær; bruk mindre til langheving."
      }
    ],
    "wholemeal_wheat": [
      {
        "id": "gf_flour",
        "label": "Glutenfri brødmiks (grov)",
        "amount": 5,
        "unit": "dl",
        "tradition": "non-traditional",
        "note": "Glutenfritt brød oppfører seg annerledes: deigen blir mer som en tykk røre, hever mindre og trenger lengre steketid. Følg pakkens væskeforhold."
      }
    ],
    "white_flour": [
      {
        "id": "gf_flour",
        "label": "Glutenfri brødmiks",
        "amount": 5,
        "unit": "dl",
        "tradition": "non-traditional",
        "note": "Velg en miks med bindemiddel. Glutenfritt brød hever mindre og blir mer kompakt – form fuktig og gi god heving."
      }
    ],
    "oats": [
      {
        "id": "gf_oats",
        "label": "Glutenfrie havregryn",
        "amount": 2,
        "unit": "dl",
        "tradition": "non-traditional",
        "note": "Vanlige havregryn kan være forurenset med hvete; bruk sertifisert glutenfrie."
      }
    ],
    "honey": [
      {
        "id": "syrup",
        "label": "Sirup (vegansk)",
        "amount": 1,
        "unit": "ss",
        "taste": {
          "sweet": 1
        },
        "tradition": "traditional",
        "note": "Vegansk; lys eller mørk sirup gir samme rundhet som honning."
      }
    ],
    "syrup": [
      {
        "id": "honey",
        "label": "Honning",
        "amount": 1,
        "unit": "ss",
        "taste": {
          "sweet": 1
        },
        "tradition": "traditional",
        "note": "Honning gir litt lysere smak og farge enn mørk sirup."
      }
    ],
    "oil": [
      {
        "id": "soft_butter",
        "label": "Smør (mykt)",
        "amount": 1,
        "unit": "ss",
        "tradition": "regional",
        "allergens": [
          "dairy"
        ],
        "note": "Smør gir litt rikere smak; gjør brødet meierholdig."
      }
    ]
  },
  "servedAcid": null,
  "density": {
    "white_flour": 0.55,
    "wholemeal_wheat": 0.55,
    "gf_flour": 0.55,
    "water": 1,
    "oats": 0.4,
    "sunflower_seeds": 0.6,
    "pumpkin_seeds": 0.55,
    "honey": 1.4,
    "syrup": 1.4,
    "oil": 0.92,
    "salt_added": 1.2,
    "rye_flour": 0.55,
    "sourdough": 1.05,
    "gf_oats": 0.4,
    "soft_butter": 0.95,
    "dry_yeast": 0.6
  },
  "pieceWeight": {},
  "unitOptions": {
    "white_flour": [
      "dl",
      "ml",
      "g"
    ],
    "wholemeal_wheat": [
      "dl",
      "ml",
      "g"
    ],
    "gf_flour": [
      "dl",
      "ml",
      "g"
    ],
    "water": [
      "dl",
      "ml",
      "g"
    ],
    "oats": [
      "dl",
      "ml",
      "g"
    ],
    "sunflower_seeds": [
      "dl",
      "ml",
      "g"
    ],
    "pumpkin_seeds": [
      "dl",
      "ml",
      "g"
    ],
    "honey": [
      "ss",
      "ml",
      "g"
    ],
    "syrup": [
      "ss",
      "ml",
      "g"
    ],
    "oil": [
      "ss",
      "ml",
      "g"
    ],
    "salt_added": [
      "ts",
      "g"
    ],
    "rye_flour": [
      "dl",
      "ml",
      "g"
    ],
    "sourdough": [
      "dl",
      "ml",
      "g"
    ],
    "gf_oats": [
      "dl",
      "ml",
      "g"
    ],
    "soft_butter": [
      "ss",
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
  "tasteMessages": {},
  "leverMessages": {
    "salt": {
      "down": "Du la til salt fra en annen kilde – vi reduserte tilsatt salt automatisk. Smak til.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt igjen. Brøddeig trenger salt for både smak og gluten. Smak til."
    }
  }
};
