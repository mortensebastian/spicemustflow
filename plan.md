# Prosjektplan – safran-nettsted (SpiceFlow + Lussekatter)

Helhetlig **levende dokument** for prosjektet: retning/strategi, hva som er gjort
til nå, veien videre, og en detaljert SEO-plan. Kryss av og oppdater etter hvert.

> **Domene ikke bestemt ennå.** SEO-researchen bruker `lussekatter.no` som
> eksempel. Du vurderer `paeja.no`. Erstatt domenet i alle eksempler når valget
> er tatt. Flere domener kan peke til samme nettsted (README → «Struktur og repoer»).

---

## Retning og strategi

**Beslutning (juni 2026):** Prosjektet bygges som en **oppskriftsdrevet
safran-side**. Lussekatter er første oppskrift; flere safranretter (paella,
risotto m.m.) kan komme senere for å bryte sesongavhengigheten. Oppskriftene er
gratis-innholdet som trekker folk inn via søk – og **safransalget er det vi
tjener på**. Oppskrift og salg er ikke konkurrenter: oppskriften er det beste
salgsverktøyet for safranen (folk som baker lussekatter trenger safran).

**Inntektsmodell – vurdert og prioritert:**

| Vei | Rolle | Vurdering |
|-----|-------|-----------|
| **Salg av safran** | Primær inntekt | Ekte penger raskest; krever lager, betaling (Vipps), frakt, backend |
| **Oppskrift + SEO** | Trafikkmotor | Gratis innhold som driver salget via intern lenking oppskrift → produkt |
| **Reklame** | Mulig bonus *senere* | IKKE fundament. Krever stor, jevn trafikk (50–100k visninger/mnd for gode nettverk). Sesongtoppen i desember gir tynne måneder ellers. Realistisk inntekt er måneder–år unna. |
| **AI-dialog under matlaging** | Mulig differensiator *senere* | En **kostnad** (API-penger), ikke en inntekt. Kul funksjon, men må betales av salg/abonnement. Vent til trafikken er bevist. |

**Konsekvens for arbeidet:** Bygg på salg + oppskriftsdrevet SEO. Reklame og
AI-dialog er ting vi *vurderer når trafikken er der*, ikke noe vi bygger
forretningen på nå.

---

## Status – hva vi har gjort til nå

**Plattform:** Statisk nettsted (ren HTML/CSS/JS, ingen rammeverk/byggesteg),
hostet via GitHub-repoet `mortensebastian/spicemustflow`. Kjører i bakgrunnen med
`orderingEnabled = false` – butikken er bevisst ikke kjøpbar ennå; ventelisten vises.

Gjort:
- [x] Koblet lokal mappe til GitHub-repoet og fått push/pull til å virke (token i Keychain).
- [x] To fronter (SpiceFlow/hverdag, Lussekatter/jul) med delt motor (`cart.js`, `products.js`).
- [x] Embedet YouTube-video i lussekatter-oppskriften. *(NB: video gir «Feil 153» –
      eieren har slått av innbygging. Må byttes til en innbyggbar/egen video.)*
- [x] Hardnet kurv-lagringen mot ødelagt `localStorage` (try/catch i `cart.js`).
- [x] Skrevet `README.md` (oversikt + veikart) og `plan.md` (denne).
- [x] Opprettet `CLAUDE.md` (arkitektur-kontekst for fremtidige AI-økter).
- [x] Bestemt retning: oppskriftsdrevet safran-side, salg som primær inntekt.

---

## Veien videre – helhetlig veikart

Rekkefølgen er grov; SEO-detaljene står i egen seksjon lenger ned.

**Nå (innhold + grunnmur, krever ikke domene):**
- [ ] Bytt ut lussekatt-videoen med en som tillater innbygging (eller egen video).
- [ ] Bestem domene (`paeja.no`?).
- [ ] Lett SEO-grunnmur: `lang="no"` → `lang="nb"`, `<meta name="description">` per side.
- [ ] Ekte produktbilder i `bilder/` (erstatt SVG-plassholderne).

**Før sesong (innhold som driver trafikk):**
- [ ] Bygg ut til oppskriftshub + undersider per rett (se «Utviklingsplan for
      oppskriftssidene» og «Domene- og oppskriftsarkitektur»).
- [ ] Flere safranoppskrifter: paella, fiskesuppe, risotto m.fl. (bryter sesong).
- [ ] FAQ/guide-innhold (treffer de ~60 % som ikke vet hvilket krydder – se SEO 3.1).
- [ ] Full SEO-implementering (JSON-LD, sitemap, robots.txt, Open Graph) – se under.
- [ ] Google Search Console: verifiser, send sitemap, request indexing.

**Når butikken skal åpne (salg = primær inntekt):**
- [ ] Backend for betaling (Vipps) – krever server/database.
- [ ] Flytt evt. ventelisten fra Web3Forms til egen database samtidig (README).
- [ ] Sett `waitlistAccessKey` (midlertidig) / `orderingEnabled = true` ved lansering.

**Senere / vurderes når trafikken er bevist:**
- [ ] Reklame (kun hvis jevn, stor trafikk – ellers ikke verdt det).
- [ ] AI-dialog under matlaging (trenger inntektsmodell under seg først).
- [ ] Vurder å dele i flere repoer KUN hvis frontene slutter å dele motor.

---

## Domene- og oppskriftsarkitektur (besluttet juni 2026)

**Beslutning: ett hoveddomene med oppskriftene som undersider – IKKE ett domene
per oppskrift.** Begrunnelse:

- SEO-styrke (lenker, intern lenking, «emneautoritet» – at Google ser deg som
  ekspert på safranmat) bygger seg opp på **én** adresse over tid. Sprer du
  innsatsen over fem domener, starter alle fem på null og ingen blir sterke.
- Du jobber alene: fem domener = fem sett sitemap, robots.txt, Search Console og
  vedlikehold. Ett domene holder alt samlet.

**Modell:** Én hovedside (domene TBD – `paeja.no` / `safrantilfolket.no`) med:
- En **oppskriftshub** som lister alle safranoppskriftene.
- **Én underside per oppskrift**, hver godt optimalisert (`/paella`, `/risotto`, …).
- Hver oppskrift lenker tilbake til butikken («du trenger ekte safran – kjøp her»).

**Vil du ha et kult, delbart domene** (f.eks. `paella.no`) og det er ledig/billig:
kjøp det, men sett opp **301-redirect** (permanent videresending) til undersiden,
f.eks. `paella.no → hoveddomene/paella`. Da får du den kule adressen uten å
splitte SEO-styrken. Entusiasme uten å skyte deg selv i foten.

### Oppskrifter å bygge (rangert etter styrke for norsk publikum)

1. **Lussekatter** – allerede laget. Sterkest sesong (Lucia/jul).
2. **Paella** – mest kjente safranretten, lett gjenkjennelig. God «kul domene»-kandidat.
3. **Fiskesuppe med safran** – sterkeste lokale vinkel; nordmenn elsker fiskesuppe.
4. **Risotto alla Milanese** (safranrisotto) – klassiker, safran er selve poenget.
5. **Bouillabaisse** – fransk fiskegryte der safran er essensielt.
6. **Persisk safranris + safrankylling** – vakkert, «gave-verdig» visuelt.
7. **Safraniskrem** (persisk bastani / indisk kulfi) – dessert, bra for jul/gave.

Retter som *blir bedre* med safran men ikke krever det (senere, lavere prioritet):
kremsauser til fisk/skalldyr, marokkansk tagine, skalldyrgryter (cioppino, zarzuela).

---

## Utviklingsplan for oppskriftssidene

Hvordan vi teknisk bygger om fra dagens to-front-oppsett til en oppskriftsdrevet
side. Statisk stack beholdes (ingen rammeverk/byggesteg).

**Gjenbruk vi allerede har:** `recipe.js` er **allerede generisk** – den skalerer
hvilken som helst ingrediensliste via `data-amount`/`data-unit`/`data-density`.
Nye oppskriftssider kan bruke den rett. `style-felles.css` + lussekatter-temaet
gir delt struktur/utseende.

**Nødvendig refaktor før flere oppskrifter:**
- [ ] `recipe.js` har `BASE_COUNT = 24` hardkodet (24 lussekatter). Andre retter
      teller i porsjoner, ikke 24 stk. Gjør grunntallet konfigurerbart, f.eks. les
      `data-base-yield` fra oppskrift-elementet i stedet for fast 24.
- [ ] Trekk oppskrift-markupen ut av `lussekatter.html` til et gjenbrukbart mønster
      (samme HTML-struktur per oppskrift: intro → skalering → ingredienser → steg
      → «kjøp safran»-CTA).

**Foreslått filstruktur (statisk, én fil per oppskrift):**
```
index.html              Forside (vurder: gjør om til oppskrift-fokus)
oppskrifter.html        NY: hub som lister alle safranoppskriftene
lussekatter.html        Oppskrift 1 (finnes)
paella.html             NY oppskrift 2
risotto.html            NY oppskrift 3
fiskesuppe.html         NY oppskrift 4 ...
spiceflow.html          Butikk-front (selger safran)
handlekurv.html         Kasse (felles)
```
Hver oppskriftsside: deler `style-felles.css` + tema + `recipe.js`, og har egen
SEO (`<title>`, `<meta description>`, Recipe JSON-LD) + CTA til butikken.

**Byggerekkefølge (én oppskrift om gangen, iterativt):**
- [ ] 1. Refaktorer `recipe.js` (konfigurerbart grunntall) + lag oppskrift-malen.
- [ ] 2. Lag `oppskrifter.html` (hub) med kort som lenker til hver oppskrift.
- [ ] 3. Legg til paella som første nye oppskrift (test malen på en ekte rett).
- [ ] 4. Verifiser scaler + CTA + SEO på paella, juster malen.
- [ ] 5. Rull ut resten (fiskesuppe, risotto, …) med samme mal.
- [ ] 6. Knytt alt sammen med intern lenking: hub ↔ oppskrift ↔ butikk.

**Åpne valg å ta underveis:**
- Hva blir `index.html` – oppskrift-hub eller fortsatt «velg butikk»-forside?
- Beholder vi to visuelle temaer (SpiceFlow/Lussekatter), eller ett felles
  oppskrift-tema med jule-variant for lussekatter? *(Påvirker CSS-strukturen.)*

---

## SEO-plan (detaljert)

Strategi og konkret implementeringsplan for SEO, basert på markedsresearch for
norsk safran-/lussekatt-salg.

---

## TL;DR – strategien i fem punkter

1. **Vinn på long-tail kjøps- og oppskriftssøk, ikke hovedord.** Et nytt domene
   slår ikke matprat.no/tine.no på «lussekatter oppskrift». Men det kan ranke på
   lavkonkurranse-fraser med kjøpsintensjon: «kjøpe safran til lussekatter»,
   «safran på nett», «safran julegave» – pluss en oppskriftsside med Recipe-markup
   som kan gi «rich result» (oppskriftskort med bilde/tid) i Google.
2. **Alt må være publisert og indeksert innen sept–tidlig okt.** Interessen for
   lussekatter/safran stiger i slutten av oktober og topper i **uke 49–50** (før
   Lucia, 13. desember). Et nytt domene trenger måneder på å bli «modent», og
   indeksering tar dager til uker. Live i september – ikke november.
3. **Den statiske stacken er en SEO-fordel.** Håndkodet HTML på GitHub Pages er
   raskt og stabilt (bra Core Web Vitals). Men du må **manuelt** legge til det et
   rammeverk ellers ville generert: title/meta, JSON-LD, sitemap.xml, robots.txt,
   Open Graph, språksignal og Search Console-verifisering.
4. **Hver side er en egen inngang fra Google.** Vi gir hver HTML-side sine egne
   tagger, tilpasset akkurat det innholdet. Lussekatter-oppskriften er en av de
   sterkeste mulighetene fordi du har ekte oppskriftsinnhold der.
5. **År én = grunnmur.** Regn med lite organisk trafikk første sesong; suppler
   med sosiale medier og evt. litt Google Ads på kjøpsord i nov–des.

---

## Hvordan dette kobles til våre faktiske filer

Researchen antar fem URL-er. Vi har i dag fire sider. Slik mapper vi det:

| Vår fil | Rolle i SEO | Primært søkeord (eksempel) |
|---------|-------------|----------------------------|
| `index.html` | Merkevare / velg butikk | merkenavn (f.eks. «paeja safran») |
| `spiceflow.html` | Hverdagsbutikk – kjøp safran | `kjøpe safran på nett`, `safran nettbutikk` |
| `lussekatter.html` | Julebutikk **+ oppskrift** | `lussekatter med ekte safran`, `safran til lussekatter`, `safran julegave` |
| `handlekurv.html` | Kasse | **ingen** – skal IKKE i Google (se 2.2) |

> Lussekatter-siden bærer to roller (produkt + oppskrift). Det er greit nå, men
> hvis oppskriftssøk blir viktig kan oppskriften få sin egen URL senere
> (f.eks. `oppskrift/lussekatter-med-safran`) for renere targeting.

---

## FASE 1 – GJØR NÅ (før lansering, helst ferdig sent i september)

**Hvorfor fristen:** Google kan bruke dager–uker på å indeksere et nytt domene,
og domenet trenger måneder på å bygge tillit. For å fange topp i uke 49–50 må
sidene være live, indeksert og «modnet» i god tid før.

### 1.1 Søkeordskart (ett primært søkeord per side)
Hold ett tydelig primærord per side, så sidene ikke konkurrerer med hverandre
(«keyword cannibalization»).

- **`index.html`** – primært: merkenavn. Sekundært: `ekte safran`, `julekrydder`.
- **`spiceflow.html`** – primært: `kjøpe safran på nett`. Sekundært:
  `safran nettbutikk`, `safran pris`, `safrantråder`, `safran til matlaging`.
- **`lussekatter.html`** – primært: `safran til lussekatter`. Sekundært:
  `lussekatter med ekte safran`, `safran julegave`, `hvor mye safran i lussekatter`,
  `hvilket krydder i lussekatter`, `safran eller gurkemeie`.

**Realistiske long-tail-ord å bygge innhold rundt (lav konkurranse):**
`kjøpe safran til lussekatter`, `hvor mye safran til lussekatter`,
`hvor kjøpe ekte safran`, `safran pris Norge`, `safran på nett fri frakt`,
`safran julegave matelsker`, `hvilket krydder i lussekatter`,
`safran eller gurkemeie`, `slik bruker du safran`.

**For konkurransesterkt til år én** (vent): bare `lussekatter`, bare
`lussekatter oppskrift`, bare `safran`, `julebaking`.

### 1.2 On-page-elementer (konkrete norske eksempler)

**Title tag** (~50–60 tegn, primærord først, merke til slutt) – én per side:
- `index.html`: `Ekte safran til lussekatter og hverdagsmat | Paeja`
- `spiceflow.html`: `Safran på nett – kjøp ekte safran til god pris | Paeja`
- `lussekatter.html`: `Lussekatter med ekte safran – oppskrift til Lucia | Paeja`

**Meta description** (~150–160 tegn; påvirker ikke ranking direkte, men driver klikk):
- `lussekatter.html`: `Slik baker du saftige lussekatter med ekte safran til Luciadagen 13. desember. Enkel oppskrift steg for steg – og hvor mye safran du trenger.`
- `spiceflow.html`: `Kjøp ekte safran i forseglet pose. Håndplukket kvalitet, rask levering i hele Norge. Perfekt til lussekatter, risotto og hverdagsmat.`

**Overskrifter:** Én `<h1>` per side med primærordet. `<h2>` for seksjoner, f.eks.
`Hvorfor ekte safran?`, `Hvor mye safran til lussekatter?`, `Frakt og levering`.

**Bilde-alt-tekst** (beskriv bildet, inkluder søkeord naturlig):
- `alt="Pose med ekte safrantråder til lussekatter"`
- `alt="Nybakte lussekatter med safran pyntet med rosiner"`
- Bruk også beskrivende filnavn: `safran-til-lussekatter.jpg`, ikke `IMG_3920.jpg`.

**Intern lenking** (lenker mellom egne sider – sprer rankingsignal + hjelper bruker):
- Oppskriften lenker til produktet («Du trenger ekte safran – kjøp den her»).
- Produktet lenker til oppskriften («Se vår oppskrift på lussekatter med safran»).
- Bruk beskrivende lenketekst («ekte safran til lussekatter»), ikke «klikk her».

### 1.3 Strukturert data (JSON-LD) – limes inn i `<head>`
JSON-LD er et lite script som forteller Google nøyaktig hva siden er. Usynlig for
besøkende, ideelt for statiske sider. **Valider hver blokk i Googles Rich Results
Test før lansering**, og merk kun opp innhold som faktisk vises på siden.

- **Recipe-schema** på `lussekatter.html` – kan gi oppskriftskort med foto/tid/stjerner.
  (`@type: Recipe` med name, image, recipeIngredient, recipeInstructions, prepTime osv.)
- **Product-schema** på produktene – kan gi pris/tilgjengelighet i søk.
  Pris må være rent tall (`"99.00"`, ikke `"99 kr"`). Hold `availability` korrekt.
- **Organization-schema** på `index.html` – styrker merkevareidentitet (name, url, logo, sameAs).

> Konkrete kodeblokker ligger i researchen (SEO Action Plan). Når domenet er valgt
> og vi skal implementere, henter vi dem inn og fyller med ekte verdier.
> `aggregateRating` legges til **først når du har ekte anmeldelser** – aldri dikt opp.

### 1.4 Språk og region (Norge)
- Sett `<html lang="nb">` (nb = bokmål) på **alle** sider. *(I dag står det `lang="no"` –
  bør endres til `nb`.)*
- **hreflang trengs ikke** – det gjelder bare ved flere språk-/landsversjoner.
- Forsterk norsk intensjon: norsk innhold, NOK-priser, `.no`-domene, norsk
  fraktinfo og norsk adresse/telefon i footer.
- Legg til `<meta property="og:locale" content="nb_NO">`.

### 1.5 Open Graph (deling i Facebook/Instagram/Messenger/iMessage)
Et sesong-/gaveprodukt deles sosialt; OG-tagger styrer forhåndsvisningen. Unike
tagger per side i `<head>`, absolutte https-bilde-URL-er, bilde 1200×630 px:
`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`,
`og:locale`. Kjør hver side gjennom Facebook Sharing Debugger etter lansering.

---

## FASE 2 – RUNDT LANSERING

### 2.1 `robots.txt` (i repo-roten, serveres på /robots.txt)
```
User-agent: *
Allow: /
Sitemap: https://DITT-DOMENE.no/sitemap.xml
```

### 2.2 `sitemap.xml` (i repo-roten)
Lister sidene så Google finner dem. Vi har få sider – skriv den for hånd.
**Ta IKKE med `handlekurv.html`** (kassesider skal ikke indekseres). Inkluder
`index.html`, `spiceflow.html`, `lussekatter.html`.
Sjekk at begge filene laster i nettleser uten 404. For GitHub Pages med eget
domene: legg en `CNAME`-fil i repoet og skru på «Enforce HTTPS».

### 2.3 Google Search Console (GSC)
1. Legg til domenet som property.
2. Verifiser eierskap – for eget domene er DNS TXT-record reneste metode.
3. Send inn sitemap-URL under «Sitemaps».
4. Bruk «URL Inspection → Request indexing» for hver nøkkelside.
5. Valgfritt: importer til Bing Webmaster Tools (ett klikk fra GSC).

### 2.4 Sidehastighet / Core Web Vitals (mest allerede vunnet)
Statisk HTML er raskt by default. For å holde CWV i «good»:
- Komprimer/skaler bilder, server WebP (største spaken – LCP).
- Sett eksplisitt `width`/`height` på `<img>` (hindrer layout-hopp → CLS).
- Hold JavaScript minimalt; `defer` på ikke-kritiske scripts (INP).
- `loading="lazy"` på bilder under «folden».
- Test i PageSpeed Insights. Sjekk mobilvennlighet (de fleste julesøk er mobil).

---

## FASE 3 – LØPENDE (lansering → desember og videre)

### 3.1 Innholdskalender (publisér i god tid – alt live innen oktober)
- **Pilar-oppskrift:** «Lussekatter med ekte safran – steg for steg».
- **Kjøpsguide/FAQ** (treffer long-tail + de ~60 % som ikke vet hvilket krydder):
  - «Hvor mye safran trenger du til lussekatter?»
  - «Safran eller gurkemeie – hva er forskjellen?»
  - «Hvorfor er safran så dyrt? (verdens dyreste krydder)»
  - «Hvor kan du kjøpe ekte safran i Norge?»
- **Gavevinkel:** «Safran som julegave til matelskeren» / «matgaver til den som har alt».
- **Sesonghub:** «Julebaking med safran» som lenker oppskrift + produkter + guider.

### 3.2 Bygg autoritet (det trege, men avgjørende arbeidet)
- Bli nevnt/lenket av norske matbloggere, lokale Lucia-/julemarkedssider, nisjekataloger.
- Aktiv på Instagram/Facebook med oppskrift- og livsstilsbilder.
- Oppfordre til ekte kundeanmeldelser (legg så til `aggregateRating`).
- Vurder lite Google Ads-budsjett på kjøpsord («kjøpe safran») i nov–des.

### 3.3 Mål og juster
- Følg GSC «Performance»: hvilke søk gir visninger/klikk – doble ned på long-tail
  du faktisk ranker på.
- Har du visninger men få klikk → skriv om title/meta description.
- Frisk opp oppskrift/guider hvert år (oppdater datoer) før sesongen.

---

## Avkrysningsliste (kort)

**Fase 1 – før lansering**
- [ ] Velg domene, oppdater alle eksempler i denne planen
- [ ] `<title>` per side (index, spiceflow, lussekatter)
- [ ] `<meta name="description">` per side
- [ ] Endre `lang="no"` → `lang="nb"` på alle sider
- [ ] `<h1>` med primærord per side
- [ ] Beskrivende `alt`-tekst + filnavn på bilder
- [ ] Intern lenking oppskrift ↔ produkt
- [ ] JSON-LD: Recipe (lussekatter), Product (produkter), Organization (index)
- [ ] Open Graph-tagger per side
- [ ] Valider all JSON-LD i Rich Results Test

**Fase 2 – rundt lansering**
- [ ] `robots.txt`
- [ ] `sitemap.xml` (uten handlekurv)
- [ ] `CNAME` + «Enforce HTTPS» på GitHub Pages
- [ ] Search Console: verifiser, send sitemap, request indexing
- [ ] Bilder → WebP, `width`/`height`, `loading="lazy"`
- [ ] PageSpeed Insights-sjekk

**Fase 3 – løpende**
- [ ] Pilar-oppskrift + 3–5 FAQ-/guideartikler
- [ ] Sosiale medier i gang
- [ ] 5–10 ekte norske omtaler/lenker
- [ ] Følg GSC, juster title/meta etter data

---

## Forbehold (fra researchen)

- **Ingen offentlige søkevolum.** Eksakte norske månedstall finnes ikke gratis –
  hent live fra Google Keyword Planner (geo = Norge). Sesongsnitt undervurderer
  desembertoppen kraftig. Alle volum her er retningsgivende.
- **Trends-mønsteret** (stiger sent okt, topper uke 49–50) er sterkt antydet fra
  MatPrats «Norsk Juleindeks» og undersøkelser, ikke en publisert ukekurve.
  Bekreft med live Google Trends (geo = Norge; «lussekatter», «safran»).
- **Ranking-tidslinjer er sannsynligheter.** ~3–6 mnd for lavkonkurranse,
  6–12+ mnd for konkurransesterke ord. Regn år én som grunnmur.
- **Rich results er ikke garantert.** Gyldig schema gjør deg *kvalifisert*; Google
  bestemmer om det vises.
- **Andelen som baker lussekatter** varierer 15 %–28 % mellom undersøkelser –
  behandle som et spenn.
- **Safranpriser varierer mye** (≈40 000–180 000 kr/kg, per-gram 59–358 kr) –
  bruk som kontekst, ikke fast markedspris.

---

*Kilde: intern SEO-research (Norwegian Saffron & Julebaking). Oppdater denne
planen når domenet velges og når sidene faktisk får SEO-taggene implementert.*
