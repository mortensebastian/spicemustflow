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

## Veikart / huskeliste

Ting som må gjøres før lansering, i grov rekkefølge:

- [ ] **Sett Web3Forms-nøkkelen.** I `config.js` står `waitlistAccessKey`
      fortsatt som plassholderen `"LIM-INN-NØKKELEN-DIN-HER"`. Helt til den
      byttes ut med den ekte nøkkelen fra [web3forms.com](https://web3forms.com),
      kommer ingen ventelistepåmeldinger fram. *(Løses sammen med backend-valget
      under – se «Venteliste: Web3Forms eller egen database?».)*
- [ ] **Bestem hosting og domene** (f.eks. `paeja.no`) – se «Struktur og repoer».
- [ ] **Backend for betaling** (Vipps) når butikken skal åpne på ordentlig.
- [ ] **Ekte produktbilder** i `bilder/`.
- [ ] **SEO-grunnmur**: `<meta name="description">`, sidetittel og delebilde
      (Open Graph) per side – se «SEO – kort forklart».

---

## Venteliste: Web3Forms eller egen database?

Akkurat nå sender ventelisten påmeldinger til **Web3Forms**, som videresender
dem til e-posten din. Det er den enkleste løsningen og krever **ingen** server
eller database – derfor er den valgt for oppstart.

Spørsmålet «kan jeg ikke like greit lage egen lagring for påmeldingene?» er
god – her er avveiningen:

| | Web3Forms (nå) | Egen database (senere) |
|---|---|---|
| Oppsett | Lim inn én nøkkel | Krever backend + database |
| Hvor havner påmeldingene | E-postinnboksen din | En tabell du eier |
| Eksportere/se hele lista | Manuelt fra e-post | Spørring mot databasen |
| Når lønner det seg | Få påmeldinger, vil bare i gang | Mange påmeldinger, eller du skal bruke dataene videre |

**Anbefaling:** Behold Web3Forms til lansering. Når du *uansett* trenger en
backend for **betaling** (Vipps krever en server), er det naturlig å lage en
liten database samtidig – og da kan ventelisten flytte dit i samme slengen.
Å sette opp database *bare* for ventelisten nå er mer arbeid enn det er verdt.

Når den dagen kommer, er en grei og rimelig vei:
- **Vercel** (hosting) + **Vercel Postgres** eller **Supabase** (database).
- Ett lite API-endepunkt (`/api/waitlist`) som tar imot e-post og lagrer den.
- Da bytter `waitlist.js` bare URL-en den sender til – resten av skjemaet er likt.

---

## Struktur og repoer

I dag ligger alt i **ett repo** med begge frontene (SpiceFlow + Lussekatter)
og én delt motor. Spørsmålet er om det bør deles opp.

**Anbefaling: behold ett repo nå.** Hele poenget med oppsettet er at de to
frontene *deler* produktdata, handlekurv og logikk. Deler du dem i to repoer
for tidlig, må du vedlikeholde `cart.js`, `products.js` osv. to steder – og de
kommer til å gli fra hverandre. Ett repo, to HTML-sider, er riktig så lenge de
deler motor.

**Domener kan godt peke til samme nettsted.** Du kan kjøpe `paeja.no` (og
gjerne flere) og la dem alle peke til den samme siden – f.eks. slik at
`paeja.no` åpner forsiden (`index.html`), eller at ett domene går rett til
SpiceFlow og et annet rett til Lussekatter. Det krever ikke delte repoer; det
er bare oppsett hos domene-/hostingleverandøren.

**Når det gir mening å splitte:** hvis de to butikkene en dag skal være helt
ulike (egne priser, eget lager, egen betaling, egne team), *da* lønner det seg
med to repoer – eller å gjøre om felleskoden (`cart.js`, `products.js`) til en
liten delt pakke begge bruker. Det er et større steg; ikke gjør det før du
faktisk trenger det.

---

## SEO – kort forklart

SEO («søkemotoroptimalisering») handler om å gjøre det lett for Google å
*forstå* og *vise fram* siden din. Ja – beskrivende ord er kjernen. Det
viktigste å legge til, per side:

- **`<title>`** – tittelen i fanen og som blå lenke i Google. (Du har dette
  allerede, f.eks. «SpiceFlow – safran til hverdagen».)
- **`<meta name="description">`** – den lille grå teksten under lenken i Google.
  Skriv 1–2 naturlige setninger med ordene folk faktisk søker etter, f.eks.
  «Kjøp ekte safran til lussekatter og julebaksten. Vakkert pakket, rask
  levering.»
- **Ekte tekst på siden.** Google leser overskrifter (`<h1>`, `<h2>`) og
  brødtekst. Ord som «safran», «lussekatter», «julekrydder» hjelper deg å bli
  funnet – og det har du allerede mye av.
- **Open Graph-tagger** (`og:title`, `og:image`) – styrer bildet og teksten når
  noen deler lenken i Facebook/Messenger/iMessage.

Dette legges til i `<head>` på hver HTML-side og er en grei neste øvelse.

---

## Kodestil i prosjektet

- Kommentarer på **norsk**, variabel- og funksjonsnavn på **engelsk**.
- Koden er delt i små filer med **ett ansvarsområde hver**.
- Enkle løsninger framfor smarte triks. Der noe er litt avansert
  (CSS-variabler, localStorage, tema via adressen, skjemainnsending) er det
  forklart i koden.
