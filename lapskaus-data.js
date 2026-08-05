/* ===== Lapskaus (brun og lys) – datamodell =====
Lapskaus – norsk tradisjonsgryte. Kjøtt og rotgrønnsaker kokt i én gryte, tyknet av poteten.
   Generert fra recipes-pending/lapskaus.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = {
  "id": "lapskaus",
  "recipes": {
    "enkel": {
      "label": "Enkel",
      "servings": 4,
      "ingredients": [
        {
          "id": "neutral_oil",
          "label": "Nøytral olje (eller smør)",
          "amount": 1,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "minced_beef",
          "label": "Kjøttdeig (eller ferdig kokt kjøtt i biter)",
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
          },
          "note": "Bruker du ferdig kokt kjøtt eller rester, rører du det inn helt mot slutten – det skal bare varmes gjennom."
        },
        {
          "id": "onion",
          "label": "Løk, i terninger",
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
          "id": "potato",
          "label": "Poteter, gjerne melne, i terninger",
          "amount": 700,
          "unit": "g",
          "role": "vegetable",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Melne poteter faller litt fra hverandre og tykner gryta – det er hele poenget med lapskaus."
        },
        {
          "id": "carrot",
          "label": "Gulrot i terninger",
          "amount": 2,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "bouillon",
          "label": "Oksebuljong (buljongterning + vann)",
          "amount": 7,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 300,
          "removable": false,
          "taste": {
            "umami": 2
          }
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
        },
        {
          "id": "pepper",
          "label": "Pepper",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        }
      ],
      "steps": [
        "Skrell og skjær poteter, gulrot og løk i terninger på cirka 1,5 cm, så alt blir mørt samtidig.",
        "Brun kjøttdeigen i olje i en romslig gryte til den har fått farge. Ha i løken og la den surre med et par minutter.",
        "Ha i poteter og gulrot, hell over buljongen, og kok opp. Bruker du ferdig kokt kjøtt i stedet for kjøttdeig, legger du det i mot slutten.",
        "La lapskausen småkoke uten lokk i 20–25 minutter, til potetene er helt møre. Rør av og til – noen av potetbitene skal falle fra hverandre og tykne gryta.",
        "Smak til med salt og pepper. Er den for tykk, sper du med litt vann; er den for tynn, koker du den noen minutter til uten lokk. Server med flatbrød og rørte tyttebær."
      ]
    },
    "medium": {
      "label": "Medium",
      "servings": 4,
      "ingredients": [
        {
          "id": "butter",
          "label": "Smør (til bruning)",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "stew_meat",
          "label": "Høyrygg eller bog av storfe, i terninger",
          "amount": 600,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 55,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "note": "Seige biter med mye bindevev blir møre og saftige av rolig koking – unngå magre steikebiter."
        },
        {
          "id": "onion",
          "label": "Løk, grovhakket",
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
          "id": "flour",
          "label": "Hvetemel (til melstøving)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "gluten"
          ],
          "note": "Melet gir brun farge og binder kraften. Vil du ha LYS lapskaus, fjerner du melet og hopper over bruningen."
        },
        {
          "id": "stock",
          "label": "Oksekraft (eller buljongterning + vann)",
          "amount": 9,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 200,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "bay_leaf",
          "label": "Laurbærblad",
          "amount": 1,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "potato",
          "label": "Poteter, melne (Beate, Kerrs Pink), i terninger",
          "amount": 700,
          "unit": "g",
          "role": "vegetable",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false,
          "note": "Legges i sist av grønnsakene – stivelsen fra potetene er det som tykner lapskausen."
        },
        {
          "id": "carrot",
          "label": "Gulrot i terninger",
          "amount": 2,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "swede",
          "label": "Kålrot i terninger",
          "amount": 250,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1,
            "bitter": 1
          },
          "note": "Kålrot trenger lengst tid av grønnsakene – legg den i først."
        },
        {
          "id": "leek",
          "label": "Purre i ringer",
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
          "id": "pepper",
          "label": "Pepper",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "lingonberry",
          "label": "Rørte tyttebær (til servering)",
          "amount": 4,
          "unit": "ss",
          "role": "acid",
          "isPrimaryAcid": true,
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2,
            "sweet": 2
          },
          "tradition": "traditional",
          "onRemove": {
            "tip": "Uten tyttebær mister lapskausen den friske motvekten til det fete kjøttet – rognebærgelé eller litt sylteagurk ved siden av gjør samme nytten."
          }
        }
      ],
      "steps": [
        "Skjær kjøttet i terninger på cirka 2 cm og tørk dem godt av. Brun dem i smør i en romslig gryte, i flere omganger så de ikke koker i egen kraft – det er bruningen som gjør lapskausen brun.",
        "Ha i den grovhakkede løken og la den brune med. Strø over hvetemelet og la det steke med et minutt. (Vil du ha lys lapskaus, hopper du over både bruningen og melet, og koker kjøttet i stedet.)",
        "Spe med oksekraften mens du rører, legg i laurbærbladet, og kok opp. Skru ned til gryta så vidt småkoker, legg på lokk, og la kjøttet trekke i cirka 1 time til det er mørt.",
        "Skrell og skjær poteter, gulrot og kålrot i terninger på cirka 1,5 cm, og skjær purren i ringer.",
        "Ha i kålrot og gulrot først, og etter 5 minutter potetene og purren. La alt koke videre uten lokk i 20–25 minutter, til grønnsakene er møre.",
        "Rør rundt så noen av potetbitene mases ut – det er de som tykner lapskausen. Fisk ut laurbærbladet, smak til med salt og pepper, og server med rørte tyttebær og gjerne flatbrød."
      ]
    },
    "kompleks": {
      "label": "Kompleks",
      "servings": 4,
      "ingredients": [
        {
          "id": "butter",
          "label": "Smør (til bruning og jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "fat",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": false,
          "allergens": [
            "dairy"
          ]
        },
        {
          "id": "stew_meat",
          "label": "Høyrygg av storfe, i terninger på 2 cm",
          "amount": 700,
          "unit": "g",
          "role": "protein",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 55,
          "removable": false,
          "taste": {
            "umami": 2
          }
        },
        {
          "id": "onion",
          "label": "Løk, grovhakket",
          "amount": 2,
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
          "id": "flour",
          "label": "Hvetemel (til mørk jevning)",
          "amount": 2,
          "unit": "ss",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "allergens": [
            "gluten"
          ],
          "note": "Brunes til den dufter nøttete – en mørk jevning gir både farge og dybde."
        },
        {
          "id": "stock",
          "label": "Hjemmelaget oksekraft",
          "amount": 10,
          "unit": "dl",
          "role": "liquid",
          "scaling": "linear",
          "addStage": "early",
          "sodiumPer100g": 120,
          "removable": false,
          "taste": {
            "umami": 2
          },
          "note": "Egen kraft løfter gryta mest av alt. Har du kraft fra pinnekjøtt eller en stek, er den enda bedre – men da salter du forsiktig."
        },
        {
          "id": "bay_leaf",
          "label": "Laurbærblad",
          "amount": 2,
          "unit": "stk",
          "role": "aromatic",
          "scaling": "fixed",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "thyme",
          "label": "Frisk timian",
          "amount": 2,
          "unit": "kvist",
          "role": "aromatic",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "allspice",
          "label": "Allehånde, malt eller hel",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true,
          "tradition": "traditional",
          "note": "Det klassiske varmkrydderet i norske brune gryter – litt er nok."
        },
        {
          "id": "potato",
          "label": "Poteter, melne (Beate, Kerrs Pink), i terninger",
          "amount": 800,
          "unit": "g",
          "role": "vegetable",
          "essential": true,
          "scaling": "linear",
          "addStage": "early",
          "removable": false
        },
        {
          "id": "carrot",
          "label": "Gulrot i terninger",
          "amount": 3,
          "unit": "stk",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 2
          }
        },
        {
          "id": "swede",
          "label": "Kålrot i terninger",
          "amount": 300,
          "unit": "g",
          "role": "vegetable",
          "scaling": "linear",
          "addStage": "early",
          "removable": true,
          "taste": {
            "sweet": 1,
            "bitter": 1
          }
        },
        {
          "id": "celeriac",
          "label": "Sellerirot i terninger",
          "amount": 150,
          "unit": "g",
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
          "id": "leek",
          "label": "Purre i ringer",
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
          "id": "salt_added",
          "label": "Salt",
          "amount": 1.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "sodiumPer100g": 38800,
          "removable": false
        },
        {
          "id": "pepper",
          "label": "Pepper, nykvernet",
          "amount": 0.5,
          "unit": "ts",
          "role": "seasoning",
          "scaling": "nonlinear",
          "addStage": "early",
          "removable": true
        },
        {
          "id": "lingonberry",
          "label": "Rørte tyttebær (til servering)",
          "amount": 4,
          "unit": "ss",
          "role": "acid",
          "isPrimaryAcid": true,
          "scaling": "linear",
          "addStage": "serve",
          "removable": true,
          "taste": {
            "sour": 2,
            "sweet": 2
          },
          "tradition": "traditional",
          "onRemove": {
            "tip": "Uten tyttebær mister lapskausen den friske motvekten til det fete kjøttet – rognebærgelé eller litt sylteagurk ved siden av gjør samme nytten."
          }
        }
      ],
      "steps": [
        "Tørk kjøttterningene godt og brun dem hardt i smør i flere små omganger, til de har en mørk skorpe. Legg dem over i en bolle etter hvert.",
        "Brun løken i samme gryte til den er gyllen og søt. Strø over melet og la det brune noen minutter til det dufter nøttete – det er den mørke jevningen som gir lapskausen farge og dybde.",
        "Spe med litt av kraften og skrap løs alt det brune i bunnen; der sitter smaken. Spe med resten av kraften, legg tilbake kjøttet, og ha i laurbær, timian og allehånde.",
        "La gryta trekke på svak varme under lokk i 1,5–2 timer, til kjøttet nesten faller fra hverandre. Skum av underveis.",
        "Skjær rotgrønnsakene i jevne terninger. Ha i kålrot og sellerirot først, deretter gulrot, og til sist poteter og purre, med cirka 5 minutter mellom hver.",
        "Kok videre uten lokk i 20–25 minutter. Mos noen av potetbitene mot grytekanten til lapskausen har den rette, tykke konsistensen – den skal så vidt renne av skjeen.",
        "Fisk ut laurbær og timiankvister, smak til med salt og pepper, og la gryta hvile 10 minutter før servering. Server med rørte tyttebær og flatbrød."
      ]
    }
  },
  "swapOptions": {
    "neutral_oil": [
      {
        "id": "butter",
        "label": "Smør (rundere smak)",
        "amount": 1,
        "unit": "ss",
        "allergens": [
          "dairy"
        ],
        "tradition": "traditional",
        "note": "Gir mer smak til bruningen, men tåler litt lavere varme."
      },
      {
        "id": "margarine",
        "label": "Margarin (melkefri)",
        "amount": 1,
        "unit": "ss",
        "note": "Melkefri bruning – oppfører seg som smør."
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
        "note": "Tåler høyere varme, så kjøttet bruner seg lettere hardt."
      }
    ],
    "minced_beef": [
      {
        "id": "sausage",
        "label": "Middagspølser i skiver (pølselapskaus)",
        "amount": 400,
        "unit": "g",
        "sodiumPer100g": 800,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Barnas favoritt. Legges i mot slutten – pølsene skal bare varmes gjennom. Salt justeres automatisk."
      },
      {
        "id": "leftover_meat",
        "label": "Rester av kokt kjøtt (pinnekjøtt, stek, ribbe)",
        "amount": 350,
        "unit": "g",
        "sodiumPer100g": 700,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Den originale restemat-lapskausen. Kjøttet er ferdig kokt – rør det inn helt til slutt."
      },
      {
        "id": "minced_chicken",
        "label": "Kyllingdeig (lettere)",
        "amount": 400,
        "unit": "g",
        "sodiumPer100g": 70,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Mildere og magrere; bruner seg raskere, så pass på at den ikke blir tørr."
      }
    ],
    "stew_meat": [
      {
        "id": "salted_pork",
        "label": "Lettsaltet svinekjøtt i terninger (lys lapskaus)",
        "amount": 600,
        "unit": "g",
        "sodiumPer100g": 900,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Den klassiske LYSE lapskausen: kok kjøttet i stedet for å brune det, og fjern melet. Kortere koketid (40–50 min), og saltet justeres automatisk."
      },
      {
        "id": "lamb_shoulder",
        "label": "Lammebog i terninger",
        "amount": 600,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Rundere og litt søtere smak; omtrent samme koketid som storfe."
      },
      {
        "id": "chicken_thigh",
        "label": "Kyllinglårfilet i biter",
        "amount": 600,
        "unit": "g",
        "sodiumPer100g": 60,
        "taste": {
          "umami": 1
        },
        "tradition": "non-traditional",
        "note": "Mye kortere koketid – legg kyllingen i sammen med rotgrønnsakene, ikke før."
      },
      {
        "id": "leftover_meat",
        "label": "Rester av kokt kjøtt (pinnekjøtt, stek, ribbe)",
        "amount": 350,
        "unit": "g",
        "sodiumPer100g": 700,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Da hopper du over koketiden helt: kok grønnsakene møre i kraften og rør inn kjøttet til slutt."
      },
      {
        "id": "sausage",
        "label": "Middagspølser i skiver (pølselapskaus)",
        "amount": 400,
        "unit": "g",
        "sodiumPer100g": 800,
        "taste": {
          "umami": 2
        },
        "tradition": "regional",
        "note": "Hverdagsvarianten – legges i de siste minuttene."
      }
    ],
    "potato": [
      {
        "id": "firm_potato",
        "label": "Faste poteter (Asterix, Folva)",
        "amount": 700,
        "unit": "g",
        "tradition": "non-traditional",
        "note": "Holder formen og gir tydelige terninger – men da tykner ikke gryta av seg selv. Kok litt lenger uten lokk, eller tykne med mel/maizena."
      }
    ],
    "swede": [
      {
        "id": "celeriac",
        "label": "Sellerirot i terninger",
        "amount": 250,
        "unit": "g",
        "allergens": [
          "celery"
        ],
        "taste": {
          "umami": 1
        },
        "tradition": "regional",
        "note": "Litt mer aromatisk og nøttete enn kålrot."
      },
      {
        "id": "parsnip",
        "label": "Pastinakk i terninger",
        "amount": 250,
        "unit": "g",
        "taste": {
          "sweet": 2
        },
        "tradition": "regional",
        "note": "Søtere og mykere; koker fortere enn kålrot, så legg den i litt senere."
      },
      {
        "id": "extra_carrot",
        "label": "Mer gulrot (i stedet for kålrot)",
        "amount": 250,
        "unit": "g",
        "taste": {
          "sweet": 2
        },
        "tradition": "non-traditional",
        "note": "Mildere og søtere – fin for dem som ikke liker kålrot."
      }
    ],
    "celeriac": [
      {
        "id": "fennel",
        "label": "Fennikel i terninger (sellerifri)",
        "amount": 150,
        "unit": "g",
        "taste": {
          "sweet": 1
        },
        "tradition": "non-traditional",
        "note": "Sellerifritt alternativ med en mild, søtlig anistone."
      },
      {
        "id": "parsnip",
        "label": "Pastinakk i terninger (sellerifri)",
        "amount": 150,
        "unit": "g",
        "taste": {
          "sweet": 2
        },
        "tradition": "regional",
        "note": "Sellerifri og søtere; koker raskt, så legg den i mot slutten."
      }
    ],
    "bouillon": [
      {
        "id": "stock",
        "label": "Oksekraft (mer smak)",
        "amount": 7,
        "unit": "dl",
        "sodiumPer100g": 200,
        "taste": {
          "umami": 2
        },
        "tradition": "traditional",
        "note": "Gir dypere smak enn terning – salt justeres automatisk."
      },
      {
        "id": "water",
        "label": "Vann (usaltet)",
        "amount": 7,
        "unit": "dl",
        "sodiumPer100g": 0,
        "note": "Uten buljong blir gryta mildere; kjøttet og rotgrønnsakene får bære smaken. Salt justeres automatisk."
      }
    ],
    "stock": [
      {
        "id": "bouillon",
        "label": "Buljongterning + vann (raskere)",
        "amount": 9,
        "unit": "dl",
        "sodiumPer100g": 300,
        "taste": {
          "umami": 1
        },
        "note": "Hverdagssnarveien – saltere, så tilsatt salt justeres automatisk."
      },
      {
        "id": "water",
        "label": "Vann (usaltet)",
        "amount": 9,
        "unit": "dl",
        "sodiumPer100g": 0,
        "note": "Mildere gryte; smak ekstra godt til på slutten."
      }
    ],
    "flour": [
      {
        "id": "potato_flour",
        "label": "Potetmel (glutenfri)",
        "amount": 1,
        "unit": "ss",
        "note": "Rør ut i litt kaldt vann og visp inn mot slutten – tykner raskt, så bruk lite."
      },
      {
        "id": "cornstarch",
        "label": "Maizena (glutenfri)",
        "amount": 1,
        "unit": "ss",
        "note": "Rør ut i kaldt vann og visp inn i den kokende gryta."
      }
    ],
    "lingonberry": [
      {
        "id": "rowan_jelly",
        "label": "Rognebærgelé",
        "amount": 4,
        "unit": "ss",
        "taste": {
          "sour": 2,
          "sweet": 2
        },
        "tradition": "traditional",
        "note": "Litt mer bitter og voksen enn tyttebær – klassisk til brune gryter."
      }
    ]
  },
  "servedAcid": {
    "tip": "Server gjerne rørte tyttebær ved siden av – syren skjærer gjennom det fete kjøttet og løfter hele gryta."
  },
  "density": {
    "neutral_oil": 0.92,
    "butter": 0.95,
    "margarine": 0.95,
    "rapeseed_oil": 0.92,
    "bouillon": 1,
    "stock": 1,
    "water": 1,
    "flour": 0.55,
    "potato_flour": 0.6,
    "cornstarch": 0.55,
    "salt_added": 1.2
  },
  "pieceWeight": {
    "onion": 110,
    "carrot": 70,
    "leek": 150
  },
  "unitOptions": {
    "neutral_oil": [
      "ss",
      "ts",
      "ml",
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
    "water": [
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
  "requireRoles": [
    "acid"
  ],
  "tasteMessages": {
    "sour": "Uten tyttebær eller gelé blir lapskausen tyngre å spise – en liten skje syrlig ved siden av friskner opp hver munnfull.",
    "umami": "Gryta blir mindre fyldig – vurder mer kraft, en buljongterning eller en god bruning av kjøttet for å bygge dybde.",
    "sweet": "Lapskausen mister litt av den milde sødmen fra rotgrønnsakene – mer gulrot eller kålrot balanserer den igjen."
  },
  "leverMessages": {
    "salt": {
      "down": "Gryta ble saltere – vi reduserte tilsatt salt automatisk. Smak til på slutten.",
      "up": "Du tok bort noe salt – vi økte tilsatt salt litt. Smak til på slutten."
    }
  }
};
