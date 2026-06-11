/* ===== Produktdata =====
   Dette er det felles "datalageret" for hele butikken.
   Det er bare en vanlig liste (array) med produkter – ikke en database.
   Begge frontene (SpiceFlow og Lussekatter) leser fra DENNE samme listen.

   Vil du legge til et nytt krydder senere? Kopier ett av objektene under,
   lim det inn, og endre feltene. Du trenger ikke røre resten av koden. */

/* Hvert produkt har disse feltene:
   - id:          unik tekst som skiller produktet fra andre (kurven bruker den)
   - name:        navnet kunden ser
   - price:       pris i hele kroner (NOK)
   - weight:      vekt i gram
   - description: kort beskrivelse
   - image:       sti til bildet (bytt ut med ekte foto senere)
   - storefront:  hvilken front varen hører til:
                  "hverdag", "lussekatter" eller "begge"          */

const products = [

  /* --- Safran for hverdagsbruk (vises i SpiceFlow) --- */
  {
    id: "saffron-pose-1g",
    name: "Safran i pose, 1 g",
    price: 99,
    weight: 1,
    description: "Forseglet pose med ren safran – perfekt til lussekatter og hverdagsmat.",
    image: "bilder/saffron-pose.svg",
    storefront: "hverdag"
  },
  {
    id: "saffron-pose-2g",
    name: "Safran i pose, 2 g",
    price: 179,
    weight: 2,
    description: "Dobbel mengde i forseglet pose. For deg som baker og lager mat ofte.",
    image: "bilder/saffron-pose.svg",
    storefront: "hverdag"
  },

  /* --- Safran og julekrydder (vises i Lussekatter) ---
     Denne fronten het tidligere "eksklusiv" (safrangave). Nå er den
     julebutikken Lussekatter, så storefront er endret til "lussekatter".
     Tonen er premium og julete, og varene selges både som gave og til eget bruk. */
  {
    id: "saffron-glass-1g",
    name: "Safran i glasskrukke, 1 g",
    price: 249,
    weight: 1,
    description: "Ren safran i pen glasskrukke med ektehetsbevis. Fin å gi bort – eller å bruke selv til julebaksten.",
    image: "bilder/saffron-glass.svg",
    storefront: "lussekatter"
  },
  {
    id: "saffron-gaveeske-2g",
    name: "Safran i gaveeske, 2 g",
    price: 449,
    weight: 2,
    description: "Glasskrukke i håndpakket gaveeske med safranens opprinnelseshistorie. Klar til å gis bort.",
    image: "bilder/saffron-glass.svg",
    storefront: "lussekatter"
  },
  {
    id: "julekrydder-kit",
    name: "Julekrydderkit",
    price: 399,
    weight: 50,
    description: "Safran, kanel, kardemomme og nellik samlet i én eske – alt du trenger til julens baking.",
    image: "bilder/saffron-glass.svg",
    storefront: "lussekatter"
  }

  /* Tips: et produkt med storefront: "begge" ville dukket opp i begge butikkene.
     Vil du lage flere kit senere, kopier "Julekrydderkit"-objektet over og endre feltene. */

];
