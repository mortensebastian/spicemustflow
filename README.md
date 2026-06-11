# Safran-nettbutikk

En liten nettbutikk for krydder som starter med safran. Bygget med **ren
HTML, CSS og JavaScript** – ingen rammeverk, ingen byggeverktøy. Du kan åpne
filene rett i nettleseren og se resultatet med en gang.

Butikken har **to fronter som deler én felles motor**:

- **SpiceFlow** – hverdagsbutikken. Safran i forseglet pose, vanlig prisnivå.
  Stil: moderne og minimalistisk (lyst).
- **Lussekatter** – julebutikken. Safran som gave og til julebaksten, pluss
  julekrydderkit. Stil: premium og julete (dyp grangrønn med gull og krem).

Samme produktdata og samme handlekurv ligger under begge. Bare fargene,
fontene og hvilke produkter som vises, er forskjellig.

---

## Av/på: butikk eller venteliste

Butikken har én enkel bryter i **`config.js`**:

```js
const orderingEnabled = false;   // false = venteliste, true = vanlig butikk
```

- **false** – produktene og handlekurven skjules. Besøkende ser i stedet en
  venteliste der de melder seg på med e-post. Påmeldingene sendes til
  skjematjenesten **Web3Forms** og havner i innboksen din.
- **true** – vanlig butikk: produkter og handlekurv vises som normalt.

Sett `waitlistAccessKey` i `config.js` til din egen nøkkel fra web3forms.com,
ellers virker ikke påmeldingen. Ved lansering setter du `orderingEnabled = true` –
ingenting annet må endres.

---

## Slik åpner du siden

1. Last ned hele mappen.
2. Dobbeltklikk på **`index.html`** – den åpnes i nettleseren.
3. Velg en av de to butikkene.

> Fontene hentes fra Google Fonts og krever internett. Uten nett brukes
> vanlige reservefonter – siden virker fortsatt, den ser bare litt enklere ut.

---

## Filstruktur

```
safran-butikk/
│
├── index.html            Forside: velg butikk (SpiceFlow eller Lussekatter)
│
├── spiceflow.html        Front 1 – hverdag  (moderne, lyst)
├── lussekatter.html      Front 2 – jul      (premium, grangrønn/gull)
├── handlekurv.html       Felles kurv + kasse (tema velges via adressen)
│
├── config.js             INNSTILLINGER: av/på-bryter + Web3Forms-nøkkel
├── products.js           DATA:   listen over alle produkter
├── cart.js               LOGIKK: handlekurven (legge til, antall, sum, lagring)
├── shop.js               LOGIKK: tegner produktkortene (når butikken er på)
├── waitlist.js           LOGIKK: tegner ventelisten (når butikken er av)
├── handlekurv.js         LOGIKK: styrer kun handlekurv-siden
├── recipe.js             LOGIKK: skalerer oppskriften og bytter måleenheter (lussekatter.html)
│
├── style-felles.css      STRUKTUR: layout og avstander (delt av alle sider)
├── style-spiceflow.css   TEMA:  SpiceFlow sine farger og fonter
├── style-lussekatter.css TEMA:  Lussekatter sine farger og fonter
│
└── bilder/
    ├── saffron-pose.svg   Midlertidig bilde (pose) – bytt ut med foto
    └── saffron-glass.svg  Midlertidig bilde (krukke) – bytt ut med foto
```

---

## Hvordan delene henger sammen

```
                    config.js   (av/på-bryter for hele butikken)
                         │
                    products.js   (én felles liste med alle varer)
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   spiceflow.html   lussekatter.html  handlekurv.html
   (data-storefront   (data-storefront  (leser ?butikk= i
    = "hverdag")       = "lussekatter")  adressen for tema)
        │                │                │
        ├── shop.js ─────┤                │
        │ (produkter når butikken er på)  │
        ├── waitlist.js ─┤                │
        │ (venteliste når butikken er av) │
        │                │                │
        └──── cart.js ───┴────────────────┘
                  (felles handlekurv, lagres i nettleseren)
```

- **`config.js`** avgjør om frontene viser produkter (`shop.js`) eller
  venteliste (`waitlist.js`).
- **`products.js`** er det eneste stedet du legger til eller endrer varer.
- **`cart.js`** lagrer kurven i nettleseren (localStorage).
- **`handlekurv.html`** er én felles side. Lenken dit har en markør i adressen,
  f.eks. `handlekurv.html?butikk=lussekatter`, og `handlekurv.js` bruker den til
  å laste riktig tema-CSS.

---

## Legge til et nytt produkt

Åpne **`products.js`** og kopier ett av objektene i listen. Endre feltene:

```js
{
  id: "kanel-stang-50g",                 // unik tekst, ingen mellomrom
  name: "Kanelstenger, 50 g",
  price: 79,                             // pris i hele kroner
  weight: 50,                            // vekt i gram
  description: "Hele kanelstenger ...",
  image: "bilder/kanel.svg",            // legg bildet i bilder-mappen
  storefront: "hverdag"                  // "hverdag", "lussekatter" eller "begge"
}
```

Lagre, og last siden på nytt. Produktet dukker opp i riktig butikk automatisk.

---

## Hva som IKKE er bygget ennå

- **Betaling.** Kassen tar imot leveringsinfo, men sender ingenting. En ekte
  betalingsløsning (Vipps) kobles på senere, og krever en backend.
- **Abonnement.** Selve abonnementsflyten er ikke bygget ennå.
- **Ekte bilder.** Bildene i `bilder/` er enkle plassholdere.

---

## Kodestil i prosjektet

- Kommentarer på **norsk**, variabel- og funksjonsnavn på **engelsk**.
- Koden er delt i små filer med **ett ansvarsområde hver**.
- Enkle løsninger framfor smarte triks. Der noe er litt avansert
  (CSS-variabler, localStorage, tema via adressen, skjemainnsending) er det
  forklart i koden.
