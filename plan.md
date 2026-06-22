# Prosjektplan – Velkomponert

Helhetlig **levende dokument** for prosjektet: retning/strategi, hva som er gjort
til nå, og veien videre. Kryss av og oppdater etter hvert.

> **Domene:** `velkomponert.no` (sjekk ledighet på norid.no og kjøp).
> Frem til domenet er kjøpt kjøres siden lokalt eller via GitHub Pages.

---

## Retning og strategi

**Oppdatert beslutning (juni 2026):** Prosjektet er en **ren oppskriftsside med
reklameinntekter**. Safransalg er droppet. Målet er å bygge en library av
kvalitetsoppskrifter, drive organisk søketrafikk, og tjene på displayreklame.

**Inntektsmodell:**

| Vei | Rolle | Vurdering |
|-----|-------|-----------|
| **Reklame (display)** | Primær inntekt | Krever stor, jevn trafikk (50–100k visninger/mnd for gode nettverk). Realistisk inntekt er måneder–år unna etter lansering. |
| **Oppskrift + SEO** | Trafikkmotor | Gratis innhold som trekker folk via søk. Mange oppskrifter = mer trafikk = mer annonseinntekt. |
| **AI-dialog under matlaging** | Mulig *senere* | En **kostnad** (API-penger), ikke en inntekt. Kun aktuelt hvis trafikken er bevist og det finnes en klar betalingsmodell. |

**Konsekvens for arbeidet:** Bygg oppskriftsbiblioteket og SEO-grunnmuren.
Reklame settes opp når trafikken er stabil nok til å kvalifisere for et
annonsenettverk. AI-dialog ventes til da.

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
- [ ] Kjøp domene `velkomponert.no` og koble til GitHub Pages.
- [ ] Ekte matretter-bilder i `bilder/` (erstatt SVG-plassholderne).

**Innhold som driver trafikk:**
- [ ] Flere oppskrifter: risotto, bouillabaisse, persisk safranris (se liste under).
- [ ] Full SEO-implementering (sitemap, robots.txt, Open Graph) – se SEO-seksjonen.
- [ ] Google Search Console: verifiser, send sitemap, request indexing.

**Inntekt – når trafikken er bevist:**
- [ ] Sett opp annonsenettverk (Google AdSense eller Ezoic) når trafikken kvalifiserer.
- [ ] AI-dialog vurderes kun hvis det finnes en klar inntektsmodell under det.

**Personvern/GDPR (forutsetning for AdSense – se egen seksjon under):**
- [x] `personvern.html`, `om.html`, footer-lenker og samtykkebanner på plass.
- [ ] Fyll inn ekte behandlingsansvarlig + kontakt-e-post (plassholdere i dag).
- [ ] Aktiver Googles CMP i AdSense når annonser skrus på (se seksjon).

---

## Personvern, cookies og samtykke (GDPR)

AdSense og norsk/EØS-trafikk krever en personvernerklæring og gyldig
cookie-samtykke. Viktig nyanse: **siden har i dag ingen annonse- eller
sporings-cookies** – kun funksjonell førsteparts `localStorage` som brukeren selv
utløser (lagrede varianter/notater + samtykkevalget). Samtykke for cookies blir
*påkrevd* først når AdSense (eller analyse) faktisk skrus på. Vi har likevel lagt
banneret på plass nå, klart til å «gate» annonse-/analyse-scripts.

**Arkitektur (passer ingen-build, 13+ sider, skalerer til ~500):**
`consent.js` er en selvstendig modul som lastes med én `<script>`-tag på alle
sider. Den injiserer egen CSS, samtykkebanneret, felles footer-lenker
(Personvern · Om · Endre samtykke) og en liten API:
`VKConsent.whenConsented('ads', fn)`, `VKConsent.has(cat)`, `VKConsent.reopen()`.
Valget lagres i `localStorage` under `vkConsent`
(`{ necessary, ads, analytics, ts }`). Ingen avhengighet til `style-felles.css`
eller `site.js`, så den virker også på avvikende sider (lussekatter,
motoren-forklart).

**Gjort nå:**
- [x] `personvern.html` – personvernerklæring (localStorage, cookies, tredjeparter
      Google Fonts/GitHub Pages/AdSense-fremtidig, GDPR-rettigheter, Datatilsynet).
- [x] `om.html` – om-side + kontakt (Google vil se at siden er «ekte»).
- [x] `consent.js` – samtykkebanner («Godta alle» / «Bare nødvendige», likeverdige
      knapper) + footer-lenker + API, lastet på alle sider.
- [x] `.legal`-stiler i `style-felles.css`; `om.html`/`personvern.html` i sitemap.
- [x] Footer-lenke «Endre samtykke» lar brukeren trekke tilbake/endre når som helst.

**Gjenstår (du / ved AdSense-oppstart):**
- [ ] Erstatt plassholderne `[ditt navn / virksomhet]` og `[din e-post]` i
      `personvern.html` og `om.html` med ekte behandlingsansvarlig + kontakt.
- [ ] Når AdSense er godkjent: aktiver Googles innebygde CMP i AdSense-dashbordet
      («Privacy & messaging» / Funding Choices). Merk: Googles CMP er ikke en snutt
      du limer inn selv – den konfigureres i dashbordet og serveres automatisk når
      AdSense-koden er på siden. Det du limer inn på alle sider er selve
      AdSense-script-taggen (`adsbygoogle.js` med din publisher-ID).
- [ ] Beslutt om vi beholder vårt eget banner eller lar Googles CMP overta når
      AdSense er på. Velger vi Googles CMP, kan `consent.js`-banneret skrus av og
      kun API-en/gatingen beholdes.
- [ ] Gate annonse-/analyse-lasting på samtykke:
      `VKConsent.whenConsented('ads', () => { /* last adsbygoogle.js */ })`.
- [ ] Test: banner vises ved første besøk, valg huskes, annonser lastes først
      *etter* samtykke, og «Endre samtykke» åpner banneret igjen.

**Personvern-forbedring (vurder):** Google Fonts lastes i dag fra Googles servere,
som dermed mottar brukerens IP. Mest personvernvennlig er å **self-hoste fontene**
(last ned og server fra `bilder/`/egen mappe) for å unngå tredjeparts-overføring –
da kan Google Fonts fjernes fra tredjepartslisten i personvernerklæringen.

---

## Arkitektur

**Modell:** `velkomponert.no` med én oppskriftshub (`index.html`) og én underside
per oppskrift (`paella.html`, `fiskesuppe.html`, …). Ikke ett domene per oppskrift
— SEO-styrke bygger seg på én adresse over tid.

Har du lyst på et kult delbart domene (f.eks. `paella.no`): kjøp det og sett opp
en **301-redirect** til `velkomponert.no/paella`. Du får den kule adressen uten å
splitte SEO-styrken.

### Oppskrifter å bygge

Ferdige:
- [x] Lussekatter
- [x] Paella
- [x] Fiskesuppe
- [x] Safraniskrem
- [x] Pannekaker
- [x] Sjokoladekake

Neste (prioritert etter norsk søkevolum og sesong — se SEO-plan §6):
> **Merk:** safran nedtones (eierføring). De påbegynte safranrettene under kan
> fullføres som lavkonkurranse-bonus, men *vekstmotoren* er høyvolums norske
> hverdags- og bakeklassikere (kjøttkaker, taco, lasagne, kylling, vafler, boller,
> kanelboller, skolebrød …). Bygg disse parallelt og prioritert.

> **Vedlikeholdes av `/trend-recipe`** (oppskriftsspeideren): den legger til maks
> én ny rett per døgn her ut fra trender + sesong, og logger i
> `recipes-pending/trend-log.md`. Kan schedules daglig. Bygg en rett med `/ny-rett`.
- [ ] Safranrisotto (Risotto alla Milanese)
- [ ] Bouillabaisse
- [ ] Persisk safranris og safrankylling
- [ ] Tagine med safran
- [ ] Marry Me Chicken — viral på TikTok/Instagram med norsk fotfeste (matprat/meny/rema har den); kremet kyllingrett som passer motoren (nivåer, bytte fløte/parmesan, skalering). Søkevolum stigende, konkurranse middels — rid trenden med en justerbar versjon (trend-speider 2026-06-22)

---

## Utviklingsplan for oppskriftssidene

**Teknisk mal for en ny oppskrift:**
- `<rett>-data.js` — ren data (window.RECIPE); se `recipe-authoring.md`
- `<rett>.html` — kopier paella.html og endre: tittel, meta, JSON-LD, data-base-yield, bilde
- `bilder/<rett>.jpg` — sett `--recipe-image: url('bilder/<rett>.jpg')` på `<body>`

**Design – bakgrunnsbilde:**
```html
<body class="recipe-page" style="--recipe-image: url('bilder/paella.jpg')">
```
Bildet toner gradvis ut nedover via mask-gradient i `style-felles.css`. Én linje å endre per oppskrift.

**Ferdigstilte steg:**
- [x] `recipe.js` konfigurerbart (data-base-yield)
- [x] `recipe-adapter.js`: kompleksitet, skalering, bytt/fjern, smaksbalanse, allergenfilter, lagrede varianter, notater, "Nøyaktig (gram)"-toggle
- [x] 6 oppskrifter live: lussekatter, paella, fiskesuppe, safraniskrem, pannekaker, sjokoladekake
- [x] `index.html` som oppskriftshub med "Mine varianter"-seksjon
- [x] Nettbutikk fjernet; CLAUDE.md og plan.md oppdatert

- [ ] Ekte rett-foto for alle sider (erstatt SVG/plassholder med `--recipe-image`)

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
1. [x] Bytt global bryter → **diskré per-ingrediens-knapp + tooltip** (panel åpner/lukker).
2. [x] Panel med **bytte + fjern**.
3. [x] **Fjern → Ja/Nei «juster opp de andre»** (maintain yield, samme rolle
   først). Kompensasjon verifisert i JSC (5/5).
4. [x] **Smaksbalanse-motoren** (`recipe-balance.js`) + `taste`-data erstatter
   `adjust`. Salt løses fra natrium-budsjett (fjern skjell → mer salt; chorizo →
   mindre salt); søtt/surt/bittert/umami gir tips når de faller. Verifisert i JSC (8/8).
5. [x] Syre/umami-tips drevet av motoren; reset vises kun ved endringer.

---

## Plan: fiskesuppe.html (gjenbruk av tilpasnings-/balansemotoren)

Lag `fiskesuppe.html` med samme funksjonalitet som paella (kompleksitetsvelger,
porsjoner, inline bytt/fjern, maintain-yield, smaksbalanse), basert på
kunnskapen i `Kokebok.md` + `fiskesuppe.md`. Bildet `bilder/fiskesuppe.jpg`
finnes allerede (optimalisert).

### Steg 0 (forutsetning) — Gjør motoren data-drevet
I dag har `recipe-adapter.js` paella-navn (`paellaRecipes`, `swapOptions`,
`servedAcid`) og oppslag (`DENSITY`, `PIECE_WEIGHT`, `UNIT_OPTIONS`, `SALT_LEVER`,
`TASTE_MESSAGES`) hardkodet. For at en ny rett skal være **ren data + HTML fra
mal**, generaliserer vi:
- Hver datafil eksponerer ETT objekt, f.eks. `window.RECIPE = { id, recipes,
  swapOptions, servedAcid, density, pieceWeight, unitOptions, saltLever,
  requireRoles, tasteMessages, bulkRoles }`.
- `recipe-adapter.js` leser `window.RECIPE` i stedet for globale paella-navn og
  hardkodede oppslag. Ingen funksjonell endring for paella (samme verdier flyttes
  inn i `paella-data.js`).
- [x] Refaktorert adapter + `paella-data.js` (window.RECIPE); paella verifisert uendret (JSC 6/6).

### Steg 1 — `fiskesuppe-data.js` (tre rungs fra fiskesuppe.md)
Tre grunnoppskrifter på «stige»-modellen (fiskesuppe.md §4):
- **enkel** = hverdags/lohikeitto-stil: terningkraft, én fisk (laks eller torsk),
  fløte, dill, fin vinegar+sukker. Få komponenter.
- **medium** = bergensk hjemmeversjon: god fumet, 2–3 sjømat (torsk+laks+reker),
  rotgrønnsaker, fløte/crème fraîche + mel-slurry, vinegar+sukker balansert.
- **kompleks** = elevert safran-sjømatsuppe: skalldyrkraft, stegede sjømat-
  komponenter, **safran (blomstret)**, eggeplomme/fløte-liaison eller picada,
  tomat/fennikel-base, sitron til slutt.

Roller (Kokebok §2): `liquid`(kraft), `protein`/`seafood`, `fat`(fløte/smør),
`acid`(vinegar/vin/sitron/tomat), `sweet`(sukker), `aromatic`(løk/dill/fennikel),
`vegetable`/`rice`-bulk (potet/rotgrønt), `seasoning`(salt).
- [x] Skrevet ingredienser med `role`, `scaling`, `sodiumPer100g`, `taste`
  `{sweet,sour,bitter,umami}`, `removable`, `onRemove` (for syre), `tradition`.
- [x] `swapOptions` (kuratert, fiskesuppe.md §5): fisk etter teksturklasse
  (lean-firm ↔ lean-flaky, advar ved kryssing/oljefisk); fløte ↔ crème fraîche ↔
  kokosmelk (dairy-free, advar lavfett curdler); vin → kraft + sitron; dill ↔
  persille; safran-tilsetting.

### Steg 2 — Balanse tilpasset fiskesuppe
- **Salt-lever** = tilsatt salt (som paella).
- **Syre er kritisk her** og finnes som ingrediens (vinegar/sitron). `requireRoles`
  inkluderer `acid`; fjernes syren → `onRemove`-tips («tilsett sitron/eddik til
  slutt, ellers blir suppa flat»).
- **Sweet-sour-paret:** vinegar (`sour`) + sukker (`sweet`) er begge justerbare
  ingredienser brukeren kan endre; motoren gir tips hvis balansen skeier ut.
  **Besluttet: auto-lever for sur + søt nå** (ikke bare salt). Motoren
  generaliseres til en liste av levere `[{axis,id}]`; hver akse løses mot sitt
  mål (salt via `sodiumPer100g`, sur/søt via `taste`-intensitet).
- **Anti-curdle** (fiskesuppe.md §3) som faste notater på fløte/steg: «ikke kok
  etter fløte; temperér; bruk crème fraîche/helfløte; tilsett syre i små mengder».
- [x] Verifisert salt + sur + søt-levere i JSC (9/9) mot fiskesuppe-data.

### Steg 3 — `fiskesuppe.html` fra paella-malen
- [x] Laget fiskesuppe.html fra paella-malen (tittel, meta, Recipe
  JSON-LD (medium-versjonen), `--recipe-image: url('bilder/fiskesuppe.jpg')`,
  og last `fiskesuppe-data.js` i stedet for `paella-data.js`.
- [x] Fiskesuppe-kortet på `index.html` er klikkbart.

### Steg 4 — Verifiser
- [x] JSC-sjekk bestått; gjenstår: nettlesertest av interaksjon.
- [ ] Be bruker teste i nettleser (de 8 interaksjonsstegene fra paella).

### Notater mot skill/agent-målet
Etter steg 0 er en ny rett = `<rett>-data.js` (ren data) + `<rett>.html` (mal med
4 felt endret) + et bilde. Det er nøyaktig inputen en `/ny-oppskrift`-skill
trenger, gitt research som `fiskesuppe.md`.

---

## SEO-plan (revidert juni 2026)

Velkomponert er en ren innholdsside — SEO er den primære trafikkmotoren. Denne
planen erstatter den forrige «safran-pilar»-strategien etter to føringer fra eier:

> **Føring 1 — safran nedtones.** Safran var en midlertidig forretningsidé vi går
> bort fra. Det er helt greit at safran står i retter som faktisk bruker det
> (lussekatter, paella, bastani …), men safran skal **ikke** være SEO-vinkelen:
> ikke et primærsøkeord, ikke et merkevaregrep, og **ingen safran-pilarside**.
>
> **Føring 2 — bygg for skala.** Arkitekturen må tåle å vokse fra 6 til kanskje
> **~500 av de mest brukte norske oppskriftene**. Alt som gjøres for hånd per side
> i dag (JSON-LD, hub-kort, sitemap) må gjøres **data-drevet** før biblioteket
> vokser, ellers blir det uoverkommelig og full av feil.

### 0. Hva som endrer seg fra forrige plan
- **Safran-pilaren utgår.** Den tematiske autoriteten skal bygges på **kategori- og
  kolleksjonssider** (middag, suppe, dessert, baking, kylling, fisk, vegetar,
  rask hverdagsmat …), ikke på safran.
- **Ikke led titler/H1 med «med safran».** Researchen foreslo f.eks. «Fiskesuppe
  med safran» og «Paella med safran» som titler — det gjør vi **ikke**. Led med
  rettens egentlige primærsøkeord; nevn safran i brødteksten der det hører hjemme.
- **Schema og sitemap genereres fra data**, ikke skrives for hånd per fil.

### 1. Differensiator (erstatter safran som «vinkel»)
Det som skiller Velkomponert fra matprat/tine/godt er ikke en råvare, men at hver
oppskrift er **interaktiv og velkomponert**: tre nivåer (enkel/medium/kompleks),
skalerbare porsjoner, bytt/fjern ingredienser med automatisk smaksbalanse,
allergenfilter. Dette gir også en *reell SEO-fordel*: hver side har unikt,
funksjonelt innhold → lav risiko for «tynt/duplisert innhold» når biblioteket blir
stort (se §9). Selg dette i meta/innhold: «juster porsjoner og bytt ingredienser».

### 2. Informasjonsarkitektur som skalerer (hub → kategori → oppskrift)
Tre nivåer, der **kategorisidene er de nye pilarene**:
1. **Hub** (`index.html`) — lenker til kategorisider + utvalgte/nye oppskrifter.
   Kan ikke vise 500 håndkodede kort; griddet må genereres fra manifestet (§2.4).
2. **Kategori-/kolleksjonssider** (nye) — f.eks. `/middag`, `/suppe`, `/dessert`,
   `/baking`, `/kylling`, `/fisk`, `/vegetar`, `/rask-hverdagsmat`. Hver er en
   indekserbar side som rangerer på «[kategori] oppskrifter» og samler internlenker.
   Kolleksjoner kan også være tema/råvare («kyllingoppskrifter», «oppskrifter med
   torsk», «middag på 30 minutter»). Dette er ryggraden i intern lenking ved skala.
3. **Oppskriftssider** — én per rett, lenker opp til sin(e) kategori(er) og til
   3–6 relaterte oppskrifter (genereres fra samme kategori i manifestet).

**2.4 Manifest som én kilde til sannhet — `recipes-index.js` (NY).**
Ett array som beskriver hver rett: `{ id, slug, name, category[], image,
description, status: 'live'|'soon', published }`. Brukes til å generere: hub-grid,
kategorisider, «relaterte oppskrifter», `sitemap.xml` og interne lenker. Uten dette
skalerer ingenting. I dag er kortene hardkodet i `index.html` — migrer til manifest.

**2.5 URL-/slug-konvensjon (lås nå, før 500 filer).**
- Flat, små bokstaver, bindestrek, = primærsøkeordet: `kjottkaker.html`,
  `kylling-tikka-masala.html`. Slug endres aldri etter publisering (ellers
  redirect-gjeld). Vurder mappe (`/oppskrift/<slug>`) hvis flat rot blir uoversiktlig.
- Vanity-domener (f.eks. `paella.no`) → **301** til `velkomponert.no/<slug>`.

### 3. Strukturert data generert fra data (ikke håndskrevet per side)
I dag dupliseres Recipe-JSON-LD manuelt i hver HTML — og `lussekatter.html` mangler
det helt. Det holder ikke til 500 sider. Mål: **én kilde (datafila), generert markup.**
- **Recipe JSON-LD** bygges fra `window.RECIPE` (av `recipe-adapter.js` eller en
  liten delt `recipe-schema.js`) og injiseres i `<head>`. Da kan en side aldri ha
  ingredienser i dataene men feil/manglende schema. *Avveiing:* Google leser
  JS-generert JSON-LD, men server-rendret er tryggest. Siden vi ikke har byggesteg,
  er runtime-injeksjon det pragmatiske valget nå; et lite valgfritt Node-skript som
  skriver statisk JSON-LD kan komme senere.
- **BreadcrumbList** på hver oppskrift (Hjem › Kategori › Rett) — også fra manifest.
- **FAQPage** på sider som har FAQ-seksjon (bruk PAA-spørsmålene, se §6).
- **WebSite** (+ `SearchAction`) og **ItemList/CollectionPage** på hub/kategorisider.
- **Organization** (navn, logo) én gang.
- `aggregateRating` legges til **kun** når ekte anmeldelser finnes (aldri fabrikkert).
- Valider i Googles Rich Results Test ved hver malendring.

### 4. On-page-standard per oppskrift (sjekkliste — gjelder ALLE sider)
- `<title>`: `Primærsøkeord – kort kvalifikator | Velkomponert` (≤ ~60 tegn).
- `<meta name="description">`: ~155 tegn, spesifikk, nevner «juster porsjoner / bytt
  ingredienser» der det passer.
- Én `<h1>` = retten med primærsøkeord. H2-er fra PAA/long-tail (§6).
- `lang="nb"` (satt), `<link rel="canonical">` (mangler i dag — legg til overalt).
- **Open Graph + Twitter-kort** (mangler i dag): `og:title/description/image/type`,
  `og:url`, `twitter:card=summary_large_image`. Viktig for deling og CTR.
- Bilder: beskrivende `alt`, `loading="lazy"`, eksplisitt `width`/`height` (CLS), WebP.
- FAQ-seksjon nederst der det er naturlig (mater FAQPage-schema + PAA-trafikk).

### 5. Teknisk SEO
- **`robots.txt`** (mangler) — tillat alt + peker til sitemap.
- **`sitemap.xml`** (mangler) — **generert fra manifestet**, ikke håndholdt. Et lite
  skript (kan kjøres lokalt og committes) skriver alle live-URL-er.
- `CNAME` + HTTPS på GitHub Pages når domenet er kjøpt.
- Ytelse/Core Web Vitals: lazy-load, bildedimensjoner, WebP, minimer font-blokkering.
- Konsistent intern lenking (3–6 kontekstuelle lenker/side, beskrivende ankertekst).

### 6. Søkeordstrategi for ~500 retter (long-tail først, ikke hodeord)
Nytt domene rangerer ikke på «pannekaker»/«kjøttkaker» på 6–12 mnd. Strategien per
rett (gjelder generisk for hele biblioteket):
- **Primært:** `[rett] oppskrift`. **Vinnbart raskt:** spørsmål/long-tail fra «Folk
  spør også» → bli H2/FAQ: «hvor mange pannekaker av 1 liter melk», «enkel
  fiskesuppe med torsk», «hvor lenge steke …», «[rett] uten egg», «[rett] til X porsjoner».
- **Bygg bredt og høyt volum først.** Trafikken kommer fra norske hverdags-/
  bakeklassikere, ikke fra safran-nisjen. Prioritert byggeliste (verifiser volum i
  Keyword Planner, geo = Norge): **kjøttkaker, taco, lasagne, kyllinggryte/-form,
  fiskekaker, vafler, boller/hveteboller, kanelboller, skolebrød, gjærbakst,
  kjøttdeig-middager, lapskaus, suppe-varianter, grøt, pizza, wok, ovnsbakt laks,
  pasta carbonara/bolognese, brownies, gulrotkake, eplekake** … (fyll ut mot
  Keyword Planner + Trends). Sesongretter (fårikål, fastelavnsboller, pinnekjøtt,
  17. mai-kaker) timer du etter §7.
- **Safranrettene beholdes som de er** — lavkonkurranse «quick wins» som rangerer
  lett og er fine å ha. Men de er en **bonus**, ikke fokus, og får ingen egen pilar.

### 7. Sesongkalender (timing av publisering)
Norske matsøk har skarpe, gjentakende sesongtopper. Publiser og indekser **uker før**
toppen. Faste kroker å eie: **lussekatter / julebakst** (uke 49–50, ferdig i
okt/nov), **fastelavnsboller** (feb/mars), **fårikål** (siste torsdag i sept),
**pinnekjøtt/ribbe** (des), **17. mai-kaker** (mai), **påskebakst** (mars/april),
**grillmat** (sommer). Hold en enkel innholdskalender i dette dokumentet.

### 8. Skaleringsarbeidsflyt (gjør 500 retter operasjonelt mulig)
En ny rett skal være: `<slug>-data.js` (ren data) + `<slug>.html` (mal, 4 felt
endret) + bilde + **én linje i manifestet**. Schema, hub-kort, sitemap-oppføring og
relaterte-lenker faller da ut automatisk. Dette er nøyaktig inputen en
`/ny-oppskrift`-skill trenger (jf. notatene i fiskesuppe-seksjonen). Konsistent mal =
gyldig schema og SEO-standard på alle 500 uten manuelt arbeid per side.

### 9. Kvalitetsrisiko ved volum
Google straffer tynt/duplisert masseinnhold. Vern: (a) den interaktive motoren gir
hver side unik funksjon og tekst; (b) ekte, egne bilder; (c) reell brødtekst og FAQ
per rett (ikke bare ingrediensliste); (d) publiser i jevnt tempo, ikke 500 på én dag.

### 10. Måling (Search Console)
Etter domenekjøp: verifiser → send `sitemap.xml` → følg ukentlig.
- Inntrykk opp, klikk uteblir → forbedre titler/meta + schema.
- Long-tail i topp 10 innen 3–4 mnd → fremskynd angrep på hodeord.
- Ingenting rangerer etter 12 mnd → innholdskvalitet/teknisk/lenker, ikke «sandkasse».

### Strakstiltak (rekkefølge — ikke avhengig av domenekjøp)
1. **Rydd safran-rester:** fjern `spiceflow.html`/«Kjøp ekte safran»-CTA-en og den
   ødelagte kommentaren i `paella.html`; mykne kortcopy som leder mot safran
   (f.eks. «… helt til safranpannekaker» i `index.html`).
2. **Fiks `lussekatter.html`:** legg til meta description, `| Velkomponert` i tittel,
   canonical og Recipe JSON-LD (mangler helt i dag).
3. **Avsafranifiser titler/H1** der safran er brukt som vinkel (behold safran i body).
4. **Manifest (`recipes-index.js`)** + migrer hub-grid og «relaterte» til det.
5. **Schema-generator fra `window.RECIPE`** (Recipe + BreadcrumbList) → alle sider.
6. **Canonical + Open Graph/Twitter** på alle sider (via malen).
7. **`robots.txt` + generert `sitemap.xml`** fra manifestet.
8. **Første kategorisider** (middag, suppe, dessert, baking) + intern lenking.
9. Begynn å bygge høyvolums hverdagsretter fra §6 i jevnt tempo.

**Status (implementert juni 2026):**
- [x] Steg 1–3: safran-rester ryddet, titler/H1 avsafranifisert, lussekatter fikset.
- [x] Steg 4: manifest `recipes-index.js` (+ `RECIPE_CATEGORIES`); forsidens
      rutenett og «relaterte» rendres fra det via `site.js`.
- [x] Steg 5: `recipe-schema.js` genererer Recipe + BreadcrumbList fra
      `window.RECIPE` + manifest; statisk JSON-LD fjernet fra de 5 adapter-sidene
      (lussekatter beholder sin egen, siden den ikke bruker adapteren).
- [x] Steg 6: canonical + Open Graph/Twitter på alle sider.
- [x] Steg 7: `robots.txt` + `sitemap.xml` (statisk; build-skillet vedlikeholder).
- [x] Steg 8: kategorisider (`middag/suppe/dessert/baking/jul.html`) med
      CollectionPage/ItemList + breadcrumb, lenket fra forsiden.
- [ ] Steg 9: bygg høyvolums hverdagsretter (pågår løpende).

**SEO-kontrakt for skill-ene** (se topp av `recipes-index.js`): `research.recipe`
produserer Lag 3 (slug, name, description, keywords, category, recipeCategory,
cuisine, times, badge, search) som ett objekt i manifestet; `build.recipesite` +
`recipe-schema.js` lager Lag 1 (mal) og Lag 2 (avledet schema) automatisk.

### Lenkebygging
- Internt: hub ↔ kategori ↔ oppskrift ↔ relaterte (genereres fra manifest).
- Eksternt: bli nevnt av norske matbloggere/lokale medier — nye domener trenger
  tillitssignaler for å modne raskere.
- Ekte brukeranmeldelser → `aggregateRating` (aldri fabrikkert).

## Forbehold (fra researchen)

- **Ingen offentlige søkevolum.** Eksakte norske månedstall finnes ikke gratis –
  hent live fra Google Keyword Planner (geo = Norge). Alle volum er retningsgivende.
- **Ranking-tidslinjer er sannsynligheter.** ~3–6 mnd for lavkonkurranse,
  6–12+ mnd for konkurransesterke ord. Regn år én som grunnmur.
- **Rich results er ikke garantert.** Gyldig schema gjør deg *kvalifisert*; Google
  bestemmer om det vises.
- **Sesongkurver** bør bekreftes live i Google Trends (geo = Norge, 5 år).

---

*Kilde: intern SEO-research, tilpasset etter eierføring (safran nedtones; bygg for
~500 retter). Oppdater denne planen når domenet velges og når sidene faktisk får
SEO-taggene implementert.*
