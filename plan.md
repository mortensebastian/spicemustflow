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

Neste (prioritert etter norsk søkevolum og sesong):
- [ ] Safranrisotto (Risotto alla Milanese)
- [ ] Bouillabaisse
- [ ] Persisk safranris og safrankylling
- [ ] Tagine med safran

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

## SEO-plan

Velkomponert er en ren innholdsside — SEO er den primære trafikkmotoren.

### Grunnmur per side
- `<title>` — primærsøkeord først, sitenavn til slutt (`| Velkomponert`)
- `<meta name="description">` — ~155 tegn, beskriver siden spesifikt
- `<h1>` — én per side, primærsøkeord naturlig inkludert
- `lang="nb"` på alle sider (allerede satt)
- Recipe JSON-LD på alle oppskriftssider (allerede satt på 5 av 6)

### Teknisk
- `robots.txt` og `sitemap.xml` — lag når domenet er kjøpt
- `CNAME` + HTTPS på GitHub Pages
- `loading="lazy"` og `width`/`height` på bilder (CLS)
- Bildene i WebP-format når de er klare

### Søkeord å ta etter rett
Typisk mønster: `[rettens navn] oppskrift`, `enkel [rettens navn]`, `[rettens navn] [antall porsjoner]`.
Fiskesuppe og lussekatter har høyest norsk volum. Safranrettene treffer nisje-søk med høy intensjon.

### Lenkebygging
- Intern lenking: hub ↔ oppskrift (allerede: "← Se alle oppskrifter" på alle sider)
- Ekstern: bli nevnt av norske matbloggere, lokale matnyheter
- Oppfordre til ekte brukeranmeldelser (legg til `aggregateRating` i JSON-LD når det finnes)

### Search Console
Etter domenekjøp: verifiser → send sitemap → "URL Inspection → Request indexing" per side.
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
