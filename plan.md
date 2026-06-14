# Prosjektplan – safran-nettsted (SpiceFlow + Lussekatter)

Helhetlig **levende dokument** for prosjektet: retning/strategi, hva som er gjort
til nå, veien videre, og en detaljert SEO-plan. Kryss av og oppdater etter hvert.

> **Domene:** ett av `safranoppskrifter.no` / `safrantilfolket.no` (endelig valg
> gjenstår). SEO-researchen bruker `lussekatter.no` som eksempel – erstatt domenet
> i alle eksempler når valget er tatt. Flere domener kan peke til samme nettsted
> (README → «Struktur og repoer»).

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
- [x] Gjort `recipe.js` konfigurerbar (`data-base-yield`) så skaleringen virker
      for porsjonsbaserte retter, ikke bare 24 lussekatter.
- [x] Gjort om `index.html` til oppskriftshub (`lang="nb"`, meta description,
      kort til lussekatter + «kommer snart»-retter). SpiceFlow ikke lenket herfra.

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

**Design – bakgrunnsbilde per oppskrift (delt mekanisme):**
Hver oppskriftsside har et bilde av retten øverst som **toner gradvis ut til
gjennomsiktig** nedover, så sidefargen overtar. Mekanismen ligger i
`style-felles.css` (`body::before` med en mask-gradient) og styres per side med
variabelen `--recipe-image` på `<body>`:
```html
<body style="--recipe-image: url('bilder/paella.jpg')">
```
- [x] Mekanismen bygget og demonstrert på paella (med midlertidig SVG-placeholder).
- [ ] **Ekte rett-foto** for hver side (bytter ut placeholderne – kun én linje per
      side). Henger sammen med veikartets «ekte produktbilder»-punkt.
- [ ] Sett `--recipe-image` på lussekatter og hver nye oppskrift når foto finnes.

**Filstruktur (statisk, én fil per oppskrift):**
```
index.html              Oppskriftshub – lister alle safranoppskriftene (BESLUTTET)
lussekatter.html        Oppskrift 1 (finnes) – bare én av grenene
paella.html             NY oppskrift 2
risotto.html            NY oppskrift 3
fiskesuppe.html         NY oppskrift 4 ...
spiceflow.html          Butikkside – står tom foreløpig, IKKE lenket fra index ennå
handlekurv.html         Kasse (felles)
```
Hver oppskriftsside: deler `style-felles.css` + tema + `recipe.js`, og har egen
SEO (`<title>`, `<meta description>`, Recipe JSON-LD) + CTA til butikken.

**Krav til ALLE oppskrifter:** ingredienslistene skal ha **justerbare måleenheter**
(dl → gram → ss osv.) på samme måte som lussekatter-oppskriften. Dette er allerede
innebygd i `recipe.js`; det krever bare at hver ingrediens bygges med
`data-amount`/`data-unit`/`data-density` + `<select class="unit-select">` etter
samme mønster som i `lussekatter.html`.

**Byggerekkefølge (én oppskrift om gangen, iterativt):**
- [x] 1. Refaktorer `recipe.js` (konfigurerbart grunntall via `data-base-yield`).
      *(Oppskrift-malen generaliseres når vi lager paella i steg 3.)*
- [x] 2. Gjort om `index.html` til oppskriftshub med kort. Lussekatter er live;
      paella/risotto/fiskesuppe vises som «kommer snart» (ikke klikkbare).
      SpiceFlow-butikken lenkes IKKE herfra ennå.
- [x] 3. Lagt til paella (`paella.html`) som første nye oppskrift. Oppskrift-malen
      er nå generalisert: oppskrift-layouten flyttet til `style-felles.css` (delt),
      paella bruker standardtemaet, og kortet på `index.html` er klikkbart.
- [x] 4. Verifisert paella-skalering + enhetsbytte i JavaScriptCore (11/11 PASS;
      statiske grunnverdier matcher recipe.js). CTA er foreløpig ikke-lenket
      («kommer snart») til butikken er klar – kommentar i HTML viser hvordan den
      gjøres til lenke ved lansering.
- [x] 4b. Bygget «Tilpass oppskriften» på paella: kompleksitetsvelger
      (enkel/medium/kompleks), bytt/fjern-ingredienser med automatisk salt-
      reduksjon og friskhet-tips. Data i `paella-data.js`, logikk i
      `recipe-adapter.js`, omregning gjenbrukt fra `recipe.js` (`window.RecipeUnits`).
      Logikk verifisert i JSC (13/14; salt-reduksjon vises avrundet til kvart).
- [ ] 5. Rull ut resten (fiskesuppe, risotto, …) med samme mal.
- [ ] 6. Knytt alt sammen med intern lenking: hub ↔ oppskrift ↔ butikk.

**Besluttede valg (juni 2026):**
- `index.html` blir **oppskriftshub** (ikke «velg butikk»-forside). Lussekatter er
  bare én av oppskriftsgrenene.
- Domene: **`safranoppskrifter.no`** eller **`safrantilfolket.no`** (ett av disse).
- **SpiceFlow** = butikkside som står tom foreløpig og er **ikke trykkbar fra
  `index.html`** ennå (butikken kjører fortsatt i bakgrunnen).

**Fortsatt åpent:**
- Beholder vi to visuelle temaer (SpiceFlow/Lussekatter), eller ett felles
  oppskrift-tema med jule-variant for lussekatter? *(Påvirker CSS-strukturen.)*

---

## Oppskrifter klare til bygging

Ferdige oppskrifter for de neste sidene, skrevet for å bygges direkte med `recipe.js`.
Hver ingrediens har **mengde**, **enhet** og **tetthet** (g per ml – brukes til
dl↔g-konvertering). `data-base-yield` settes til porsjonstallet i kolonneoverskriften.
Ingredienser i `g`/`stk` trenger ikke tetthet. Sett `data-units` til de enhetene det
gir mening å bytte mellom for hver ingrediens (volum-ingredienser: f.eks. `dl,ml,g`).

> Mengdene er standard, velprøvde forhold – juster gjerne etter smak før publisering.
> Hver side avsluttes med en CTA til butikken: «Du trenger ekte safran – kjøp den her».

### Paella (`data-base-yield="4"`)

| Mengde | Enhet | Tetthet | Ingrediens |
|--------|-------|---------|------------|
| 3 | dl | 0.85 | paellaris (rundkornet) |
| 6 | dl | 1.0 | varm kyllingkraft |
| 0,5 | g | – | safran |
| 300 | g | – | kyllinglår i biter |
| 200 | g | – | scampi/reker |
| 150 | g | – | blåskjell (valgfritt) |
| 1 | stk | – | rød paprika i strimler |
| 1 | stk | – | løk, finhakket |
| 2 | stk | – | hvitløksfedd |
| 2 | ss | 0.92 | olivenolje |
| 1 | ts | 0.5 | røkt paprikapulver |
| 100 | g | – | frosne erter |
| 1 | ts | 1.2 | salt |

**Slik gjør du:** 1) Legg safran i den varme kraften så den trekker. 2) Brun kylling
i olivenolje i en vid panne, ta opp. 3) Surr løk, hvitløk og paprika myk; rør inn
paprikapulver. 4) Tilsett ris og la den bli blank. 5) Hell over safrankraften, fordel
kyllingen og la putre uten omrøring ~15 min. 6) Legg på scampi, blåskjell og erter de
siste 5 min til risen er mør og skjellene har åpnet seg. 7) Hvil 5 min, server med sitron.

### Fiskesuppe med safran (`data-base-yield="4"`)

| Mengde | Enhet | Tetthet | Ingrediens |
|--------|-------|---------|------------|
| 1 | stk | – | løk, finhakket |
| 0,5 | stk | – | fennikel, i skiver |
| 2 | stk | – | hvitløksfedd |
| 2 | ss | 0.92 | olivenolje |
| 0,5 | g | – | safran |
| 1 | ss | – | tomatpuré |
| 1 | dl | 0.99 | hvitvin |
| 8 | dl | 1.0 | fiskekraft |
| 4 | dl | 1.0 | kremfløte |
| 500 | g | – | hvit fisk (torsk) i biter |
| 200 | g | – | reker |
| 1 | ts | 1.2 | salt |

**Slik gjør du:** 1) Surr løk, fennikel og hvitløk myke i olje. 2) Rør inn tomatpuré
og safran, la frese et halvt minutt. 3) Slå på hvitvin og kok inn til halvparten.
4) Tilsett kraft og fløte, la småkoke 10 min. 5) Legg i fisken og trekk på svak varme
4–5 min til den er akkurat gjennom. 6) Vend inn rekene helt til slutt, smak til med
salt. Server med godt brød.

### Safranrisotto (Risotto alla Milanese) (`data-base-yield="4"`)

| Mengde | Enhet | Tetthet | Ingrediens |
|--------|-------|---------|------------|
| 3 | dl | 0.85 | risottoris (arborio/carnaroli) |
| 1 | stk | – | løk, finhakket |
| 2 | ss | 0.92 | olivenolje |
| 1 | dl | 0.99 | hvitvin |
| 9 | dl | 1.0 | varm kyllingkraft |
| 0,5 | g | – | safran |
| 50 | g | – | smør |
| 50 | g | – | revet parmesan |
| 1 | ts | 1.2 | salt |

**Slik gjør du:** 1) Legg safran i en øse av den varme kraften. 2) Surr løk blank i olje
uten å brune. 3) Tilsett risen og rør 1–2 min til kantene er gjennomsiktige. 4) Hell på
hvitvinen og rør til den er trukket inn. 5) Tilsett kraft én øse om gangen, rør jevnt og
vent til væsken er nesten borte før neste øse – inkludert safrankraften – i ca. 18 min.
6) Trekk av varmen, rør inn smør og parmesan til risottoen er kremet. Smak til med salt.

### Bouillabaisse (`data-base-yield="4"`)

| Mengde | Enhet | Tetthet | Ingrediens |
|--------|-------|---------|------------|
| 3 | ss | 0.92 | olivenolje |
| 1 | stk | – | løk, i skiver |
| 0,5 | stk | – | fennikel, i skiver |
| 3 | stk | – | hvitløksfedd |
| 400 | g | – | hermetiske tomater |
| 1 | dl | 0.99 | hvitvin |
| 10 | dl | 1.0 | fiskekraft |
| 0,5 | g | – | safran |
| 2 | stk | – | strimler appelsinskall |
| 800 | g | – | fast hvit fisk i biter |
| 200 | g | – | reker eller blåskjell |
| 1 | ts | 1.2 | salt |

**Slik gjør du:** 1) Surr løk, fennikel og hvitløk myke i olje. 2) Tilsett tomater og
la frese noen minutter. 3) Slå på hvitvin, kok inn litt. 4) Hell i fiskekraft, safran og
appelsinskall; la suppen putre 15–20 min. 5) Legg i den faste fisken først, skalldyr de
siste minuttene, og trekk til alt er gjennomvarmt. 6) Smak til med salt. Server med
ristet brød og rouille (hvitløksmajones).

### Persisk safranris og safrankylling (`data-base-yield="4"`)

| Mengde | Enhet | Tetthet | Ingrediens |
|--------|-------|---------|------------|
| 3 | dl | 0.85 | basmatiris |
| 0,5 | g | – | safran (oppløst i 2 ss varmt vann) |
| 600 | g | – | kyllinglår, uten skinn |
| 1 | stk | – | løk, revet |
| 2 | ss | 0.92 | olje |
| 1 | ss | – | sitronsaft |
| 50 | g | – | smør |
| 1 | ts | 1.2 | salt |

**Slik gjør du:** 1) Skyll risen til vannet er klart, og kok den nesten mør i godt
saltet vann. Hell av. 2) Bland revet løk, halve safranvannet, sitronsaft, olje og salt,
og mariner kyllingen 20 min. 3) Stek eller grill kyllingen til gylden og gjennomstekt.
4) Damp risen ferdig på svak varme med smør under lokk til den blir luftig. 5) Vend det
resterende safranvannet inn i en del av risen for en gyllen topp. Server kyllingen på
safranrisen.

### Safraniskrem (persisk bastani) (`data-base-yield="6"`)

| Mengde | Enhet | Tetthet | Ingrediens |
|--------|-------|---------|------------|
| 5 | dl | 1.0 | kremfløte |
| 2,5 | dl | 1.03 | helmelk |
| 1,5 | dl | 0.85 | sukker |
| 0,5 | g | – | safran (oppløst i 1 ss varmt vann) |
| 4 | stk | – | eggeplommer |
| 1 | ts | 0.5 | malt kardemomme |
| 50 | g | – | pistasjnøtter, grovhakket (valgfritt) |

**Slik gjør du:** 1) Varm fløte, melk, kardemomme og safranvann til like under kokepunktet.
2) Pisk eggeplommer og sukker lyst, og spe forsiktig med den varme blandingen under omrøring.
3) Varm alt tilbake i kjelen på svak varme til kremen tykner litt (til ~82 °C) – ikke kok.
4) Avkjøl helt, gjerne over natten. 5) Kjør i iskremmaskin, eller frys og rør hvert 30. min
til den er fast. Vend inn pistasj mot slutten. Server med ekstra safrantråder på toppen.

---

## Plan: inline tilpasning per ingrediens + balanse ved fjerning

Videreutvikling av «Tilpass oppskriften» på paella (se `recipe-adapter.js`).
Mål: ingen global av/på-bryter – tilpasning skjer rett ved hver ingrediens, og
retten rebalanseres automatisk (salt, syre, sødme) også når noe *fjernes*.

### A. UX-endringer
1. **Fjern den globale «Tilpass oppskriften»-bryteren** (`#customize-toggle`).
2. Hver **utbyttbar/fjernbar** ingrediens får en alltid-synlig, **diskré grå
   knapp** etter seg (liten, utydelig til man hover-er – f.eks. «endre» / «⋯»).
3. **Hover** → tooltip: «Trykk her for å bytte eller fjerne ingrediens, resten av
   oppskriften tilpasser seg automatisk».
4. **Klikk** → åpner en liten inline-panel under ingrediensen med: bytte-nedtrekk
   (som nå) + **«Fjern ingrediens»**. Bare én panel åpen om gangen.
5. Ved **Fjern** → vis et lite valg: **«Juster opp de andre så det rekker til N
   porsjoner?»** (Ja / Nei).
6. Behold **«Tilbakestill»**, men vis den bare når minst én endring er gjort.

### B. Smaksbalanse-motor (de fem grunnsmakene) – GJENBRUKBAR
Besluttet: balansen bygges som en **generell motor rundt de fem grunnsmakene**
(salt, søtt, surt, bittert, umami), ikke en paella-spesifikk saltregel. Den skal
gjenbrukes av hundrevis av framtidige oppskrifter, så den bør bo i en egen,
rett-uavhengig fil (forslag: `recipe-balance.js`) og lese et **smaksprofil-felt**
på hver ingrediens.

**Datamodell – `taste` per ingrediens (valgfritt felt):**
```js
taste: { salt: 0-3, sweet: 0-3, sour: 0-3, bitter: 0-3, umami: 0-3 }
```
- Tallene er **relativ intensitet per 100 g/ml** (0 = ingenting, 3 = sterkt).
- Faktisk bidrag = `intensitet × mengde i gram` (via `RecipeUnits`), så å fjerne
  en stor, salt ingrediens slår mer ut enn en liten.
- Ingredienser uten `taste` teller som nøytrale (alle 0). Vi kan utlede salt fra
  eksisterende `sodiumPer100g` som start, men `taste` er den nye, generelle veien.

**Slik balanserer motoren:**
1. Regn ut grunnoppskriftens **mål-profil** (sum per akse for standardretten).
2. Etter hver endring (bytte/fjerning): regn ut **ny profil**.
3. For akser som har en **justerings-ingrediens (lever)**, dytt den mot målet:
   - **salt → `salt_added`** (finnes), **søtt → sukker**, **surt → sitron/eddik**,
     osv. Leveren defineres per oppskrift (hvilken ingrediens som regulerer aksen).
4. For akser **uten** lever (ofte bittert/umami): ingen automatisk justering – vis
   i stedet et rolig **tips** («retten blir mindre umami – vurder litt ekstra …»).
5. Alltid med nedre/øvre grenser og «smak til». Vis kort melding som forklarer.

For paella er i praksis bare **salt** (lever: `salt_added`) og **surt** (lever:
sitron/tomat) aktive; resten er 0. Men motoren og `taste`-feltet er på plass for
alle framtidige retter (tagine, dessert, gryter …) uten ny kode – bare ny data.

### C. Syre-spesifikt (utover motoren)
- Behold `isPrimaryAcid`/`onRemove`-tipset ved fjerning av tomat (kompleks).
- For enkel/medium uten syre-ingrediens: behold sitron-tipset, fremhevet når
  salt-aksen øker. Dette blir et spesialtilfelle av sur-aksen i motoren.

### D. «Juster opp de andre» ved fjerning (maintain yield)
- Definer **bulk-roller** som utgjør «mengden mat»: `rice`, `liquid`, `protein`,
  `seafood`, `vegetable`.
- Ved «Ja, juster opp»: regn fjernet bulk-andel, og skaler gjenværende
  bulk-ingredienser opp med en **kompensasjonsfaktor**
  = `total_bulk_før / total_bulk_etter_fjerning`. Krydder/salt (`nonlinear`)
  følger fortsatt sin egen dempede skalering + natrium-budsjettet.
- Ved «Nei»: la de andre stå (mindre rett / færre reelle porsjoner).
- **Besluttet: samme rolle først.** Fjerner du en sjømat → øk annen sjømat (ikke
  risen). Fall tilbake til all bulk bare hvis rollen blir tom.

### E. Kodeendringer per fil
- **`recipe-balance.js` (NY, gjenbrukbar):** smaksbalanse-motoren – regner
  mål-profil, ny profil og justerer leverne (rett-uavhengig; brukes av alle
  framtidige oppskrifter).
- `recipe-adapter.js`: alltid-synlig per-ingrediens-knapp; «åpen panel»-tilstand
  (hvilken slot er åpen); fjern-med-valg-flyt (maintain yield, samme rolle først);
  kaller `recipe-balance.js`; vis reset kun ved endringer.
- `paella-data.js`: legg til `taste`-profil på ingrediensene; definer hvilke
  ingredienser som er **levere** per akse; fjern `adjust`-blokker når motoren overtar.
- `paella.html`: fjern toggle-markup (behold messages + reset-knapp); last
  `recipe-balance.js`.
- `style-felles.css`: diskré endre-knapp + hover, tooltip, inline-panel, ja/nei-valg.

### F. Byggesteg (iterativt, test i nettleser mellom hvert)
1. Bytt global bryter → **diskré per-ingrediens-knapp + tooltip** (panel åpner/lukker).
2. Panel med **bytte + fjern**.
3. **Fjern → Ja/Nei «juster opp de andre»** (maintain yield).
4. **Smaksbalanse-motoren** (`recipe-balance.js`) + `taste`-data erstatter
   `adjust` (test: fjern salt skjell → mer salt; bytt inn chorizo → mindre salt;
   akser uten lever gir tips i stedet).
5. Finpuss syre-tips; reset vises kun ved endringer.

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
