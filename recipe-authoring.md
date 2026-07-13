# Forfatterguide for oppskriftssider (utkast til skill)

Dette dokumentet beskriver **hvordan man lager en ny oppskriftsside** med den
delte motoren (`recipe.js` + `recipe-balance.js` + `recipe-adapter.js`) og den
sentrale SEO-infrastrukturen (`recipes-index.js` + `site.js` + `recipe-schema.js`).
Det er et **levende dokument**: hver gang vi bygger en ny rett, oppdaterer vi
skjemaet, konvensjonene og «lærdom»-loggen nederst.

> **Skill-ene gjør dette nå.** `/ny-rett` orkestrerer `/research-recipe`
> (mat + SEO → `recipes-pending/<slug>.json`) og `/build-recipe` (datafil +
> manifestoppføring + HTML + sitemap). Dette dokumentet er kontrakten skill-ene
> følger – hold dem i synk.

> Mål: en ny rett skal være **ren data + én HTML fra mal + ett bilde** — ingen
> endring i motoren. Hver gang vi *må* endre motoren for en ny rett, er det en
> lærdom som skal noteres i loggen nederst (og helst gjøre motoren mer generell).

---

## Hva en ny rett består av
1. `<rett>-data.js` — oppskriftsdata + `window.RECIPE`-config (`id` = sluggen).
2. **Én oppføring i `recipes-index.js`** (`window.RECIPES_INDEX`) — manifestet.
   Dette ene gir AUTOMATISK: kort på `index.html`, kort på kategorisiden,
   «Relaterte oppskrifter», Recipe-/BreadcrumbList-/FAQPage-schema og synlig FAQ.
3. `<rett>.html` — kopi av en fersk oppskriftsside (`paella.html`), med kun
   mal-feltene endret (se sjekkliste). **Ingen inline JSON-LD** og **ingen
   håndskrevne kort** — det genereres.
4. `bilder/<rett>.jpg` — web-optimalisert bilde (≤ ~1920 px, < ~500 KB).
5. Én `<url>`-linje i `sitemap.xml`.

Felles og UENDRET: `recipe.js`, `recipe-balance.js`, `recipe-adapter.js`,
`recipes-index.js`-hjelperne, `site.js`, `recipe-schema.js`, `style-felles.css`.

---

## `window.RECIPE` – config-skjema
```js
window.RECIPE = {
  id: "<rett>",
  recipes: { enkel, medium, kompleks },  // hver: { label, servings, ingredients[], steps[] }
  swapOptions: { <slotId>: [ ...bytter ] },
  servedAcid: { tip } | null,            // stående sitron-tips – KREVER requireRoles:["acid"] for å vises (se under)
  density:     { <id>: gPerMl },         // for g-omregning (volum↔vekt)
  pieceWeight: { <id>: gramPerStk },     // for «juster opp de andre» når enhet er stk
  unitOptions: { <id>: [enheter] },      // hvilke enheter man kan bytte mellom (volum↔volum gratis; g krever density)
  bulkRoles:   [ ...roller som teller som «mengde mat» ],
  levers:      [ { axis, id } ],         // selvjusterende balanse-ingredienser (kan være tom)
  requireRoles:[ ...roller retten må ha ],// f.eks. ['acid']; kan være tom []. MÅ inneholde "acid" for at servedAcid/acid-onRemove-tips skal vises
  tasteMessages: { sour, umami, sweet }, // inline-tips ved fjerning
  leverMessages: { <axis>: { down, up } }// melding når en lever justeres
};
```

## Ingrediens-felt
| Felt | Forklaring |
|---|---|
| `id`, `label` | id (engelsk, unik i retten) + visningsnavn (norsk) |
| `amount`, `unit` | mengde for grunnoppskriftens porsjoner |
| `role` | `rice`/`liquid`/`protein`/`seafood`/`vegetable`/`fat`/`acid`/`aromatic`/`seasoning`/`saffron`/`dairy`/`sweet` … |
| `scaling` | `linear` (skaleres med porsjoner) · `nonlinear` (hold igjen, «smak til» – krydder/salt/olje) · `fixed` (uendret – f.eks. 1 kvist) |
| `addStage` | `early`/`end`/`serve` (vises som tidspunkt-notat ved bytte) |
| `sodiumPer100g` | natrium – brukes av salt-leveren (gi salt-lever-ingrediensen ~38800) |
| `taste` | `{ sweet, sour, bitter, umami }` 0–3, relativ intensitet per 100 g/ml (salt dekkes av sodium) |
| `removable` | kan fjernes? Anker-ingredienser (siste protein osv.) settes `false` |
| `onRemove.tip` | tekst som vises inline når en (typisk syre-)ingrediens fjernes |
| `isPrimaryAcid` | marker rettens innebygde syre |
| `tradition` | `traditional`/`regional`/`non-traditional` (ærlig merking, vises på bytter) |
| `cost` | valgfri kostnads-tier: `1` rimelig · `2` middels (standard når uoppgitt) · `3` dyr |

## Nivå-filosofi: hva skiller enkel / medium / kompleks

> **Kjerneprinsipp:** de tre nivåene klatrer på **én akse – kokkekunst og innsats
> (teknikk, finsmak, ting laget fra bunnen)**, *ikke* på hvor smal og spesifikk
> handlelista er. Tilgjengelige ingredienser gjelder på **alle** nivåer; det er
> teknikken og raffineringen som øker oppover. En «enkel» rett som krever fem
> enkeltkrydder, spesialvarer (sjalott, mascarpone, carnaroli) eller en
> roux/temperering er feil bygget – da har vi forvekslet «få komponenter» med
> «smal handleliste».

| Nivå | Hva det er | Ingredienser & teknikk |
|---|---|---|
| **enkel** | Skap-først hverdag | Færrest *aktive* ingredienser, **snarvei-produkter** (ferdig krydderblanding, buljongterning, hermetikk, ferdig saus), **generiske** varer, tilgivende teknikk, færrest steg. Ingen spesialvarer, ingen krydderhylle, ingen roux/temperering. |
| **medium** | Standard hjemmelaget | Balansert. Litt mer fra bunnen (egen krydderblanding, frisk salsa, surret løk), men fortsatt vanlig hverdagshandel. **Dette er standardnivået schema speiler.** |
| **kompleks** | Fra bunnen | Spesialvarer (vin, hjemmelaget kraft, mascarpone, sjalott), teknikk-tunge steg, finsmak (deglaze, mørk jevning, sitronskall til slutt). |

### Tilgjengelighets-gate for «enkel» (følg alle seks)
1. **Snarvei før bunn.** Der medium/kompleks lager noe fra bunnen, bruk
   ferdigproduktet på enkel (tacokrydder-pose, buljongterning, ferdig salsa,
   hermetiske tomater, crème fraîche i stedet for béchamel-roux). Snarveien er
   *poenget* med enkel, ikke et nederlag.
2. **Generisk før spesifikk i `label`.** «Nøytral olje» (ikke «Rapsolje/solsikke»),
   «Kjøttdeig» (ikke «grovkvernet høyrygg»), «Potetmel (eller hvetemel)», «Melk
   eller vann». Spesifisiteten hører hjemme på medium/kompleks.
3. **Krydder-budsjett:** maks **2 enkeltkrydder utover salt/pepper** på enkel
   (sukker, parmesan/ost og olje teller ikke som «krydder»). Trenger retten flere,
   samle dem i én ferdigblanding eller løft dem til medium.
4. **Merk valgfritt.** Ikke-essensielle smaksingredienser på enkel settes
   `removable:true` og merkes «(valgfritt)» i `label`, så lista leses kortere.
5. **Færre komponenter.** Enkel skal ikke kreve flere delretter (pico + guac +
   krydderkjøtt). Én hovedting + ferdig/utsatt tilbehør.
6. **Aldri størst.** `enkel.ingredients.length ≤ medium`. Enkel skal aldri ha
   flest ingredienser. (Validatoren i `build.js` advarer.) NB: `medium ≤ kompleks`
   sjekkes *ikke* – kompleks kan ha **færre** linjer fordi den raffinerer ved å
   *fjerne* (autentisitet), f.eks. risotto alla Milanese som dropper olje+hvitløk
   og tilsetter beinmarg. Kompleksitet = teknikk, ikke antall.

### Kjerne-budsjett for enkel (per rett-type, foreslått)
Mål på **kjerne-ingredienser = de du aktivt lager med** (`addStage !== "serve"`),
og tell ikke rent salt/pepper/olje/vann eller sukker. Tall er retningsgivende
(validatoren advarer, stopper ikke):

| Rett-type | Kjerne (≤) | Enkeltkrydder (≤) | Merk |
|---|---|---|---|
| Hverdagsgryte / panne / wok / pasta-saus | 8 | 2 | Ferdig krydder/buljong oppmuntret |
| Suppe | 8 | 1 | Ferdig kraft/buljong tillatt |
| Bakst / dessert | 9 distinkte innkjøp | – | Mål: **0 spesialvarer, 0 spesialteknikker** (ingen mel-sjatteringer, brunet smør, temperering). Mengde-presisjon beholdes – den er funksjonell. |
| Saus / jevning | – | – | Enkleste jevning (maizena/utrøring eller ferdig base), ev. generisk mel-label |
| Bygg-selv-rett (taco o.l.) | 7 kjerne | 2 | Mange serveringsboller er greit – de øker ikke kokekompleksiteten |

> **Servering teller mildt.** En taco med 12 ingredienser kan være genuint enkel
> fordi 6 av dem er pålegg satt i skåler (`addStage:"serve"`). Derfor måler både
> budsjettet og validatoren på **kjerne (ikke-servering)**, ikke rått totalantall.

## Budsjett (rimeligere)
- «Budsjett»-bryteren vises **kun på enkel/medium** (speilbilde av «Nøyaktig», som
  bare er på kompleks) – og kun når retten faktisk har et rimeligere bytte.
- Når den er på, byttes hver ingrediens til det **billigste passende** alternativet
  i `swapOptions` (cost lavere enn ingrediensens egen). Resten rebalanseres som vanlig.
- Sett `cost: 3` på de dyre ankrene (f.eks. safran, scampi) og `cost: 1` på det
  billige byttet. Lar du `cost` stå tomt, regnes alt som middels (`2`) og bryteren
  dukker ikke opp. Komponerer med allergifilteret: er begge på, velges billigste
  *allergivennlige* bytte.

## Levere (auto-balanse)
- En **lever** er en ingrediens som regulerer én grunnsmak. Motoren løser hvor mye
  som trengs for å treffe standardrettens nivå igjen.
- `axis: 'salt'` bruker `sodiumPer100g`; `axis: 'sour'|'sweet'|'umami'|'bitter'`
  bruker `taste[axis]`.
- Lever-ingrediensen må ha styrke på sin akse (salt: høy sodium; eddik: `sour: 3`).
- Mangler lever-ingrediensen i en gitt kompleksitet, **hoppes leveren over** der.
- `levers: []` er gyldig → retten har ingen auto-balanse (kun skalering + bytter).

## Sjekkliste for `<rett>.html` (fra mal)
- [ ] `<title>` (primærsøkeord først + `| Velkomponert`) + `<meta name="description">`
- [ ] `<link rel="canonical">` + Open Graph/Twitter-tagger
- [ ] `<body class="recipe-page" style="--recipe-image: url('bilder/<rett>.jpg')">`
- [ ] Hero `<h1>` + ingress, og `body.bodyIntro`-prosa over oppskriften
- [ ] Alle DOM-kroker, `<div id="related-recipes">`, og `<div id="recipe-faq">`
- [ ] Script-rekkefølge: `<rett>-data.js` → `recipe.js` → `recipe-balance.js` →
      `recipe-adapter.js` → `recipes-index.js` → `site.js` → `recipe-schema.js` → `consent.js`
- [ ] **Ingen** inline JSON-LD, **ingen** håndskrevet FAQ/kort (genereres)
- [ ] Oppføring lagt i `recipes-index.js` (`status:"live"`, `faq[]` fylt) + sitemap-linje

---

## Allergifilter

Filteret vises automatisk på alle sider med `<div id="diet-filter"></div>` i HTML-en.
Det er **ingen motorendring** nødvendig for nye retter — bare tagging i datafilen.

> **Avgrenset til allergier med vilje.** Diett (vegan/vegetar/pesketar/lavkarbo)
> er *ikke* en del av filteret. Store kostholdsomlegginger endrer hva retten
> *er* (vegansk fiskesuppe = grønnsakssuppe), og halv-automatisk transformasjon
> gir mat ingen har smakt på. Slike varianter lager vi heller som **egne,
> håndskrevne oppskrifter** (egen `*-data.js`), på linje med enkel/medium/kompleks.

### Ingrediens-felt (tillegg)
| Felt | Forklaring |
|---|---|
| `allergens` | `["dairy","egg","gluten","shellfish","fish","nuts"]` — ingrediensens faktiske allergener. Mangler feltet: ingen advarsel/tilpasning. |

Samme felt settes også på **byttalternativer** i `swapOptions`.

### Taggingsprinsipper
| Ingrediens | Tag |
|---|---|
| Meieri (fløte/smør/melk/ost) | `allergens: ["dairy"]` |
| Egg / eggeplomme | `allergens: ["egg"]` |
| Hvetemel | `allergens: ["gluten"]` |
| Fisk (laks/torsk/kraft av fisk) | `allergens: ["fish"]` |
| Krepsdyr (reker/scampi/krabbe) | `allergens: ["shellfish"]` |
| Bløtdyr (blåskjell/kamskjell/blekksprut/clams) | `allergens: ["shellfish"]` |
| Nøtter (pistasj/mandel) | `allergens: ["nuts"]` |

> **Om «Skalldyr»:** EU skiller krepsdyr og bløtdyr som to allergener, men i
> dagligtale dekker «skalldyr» begge, og folk med skalldyrallergi unngår som
> regel begge. Vi bruker derfor **én** `shellfish`-tag på både reker *og*
> blåskjell/kamskjell/blekksprut, slik at «Skalldyr»-filteret fjerner alt.

### Sjekkliste for allergi i en ny rett
- [ ] `<div id="diet-filter"></div>` lagt til i HTML-malen (før `.recipe-customize`)
- [ ] Alle fisk-ingredienser tagget `allergens: ["fish"]`
- [ ] Alle skall-/bløtdyr tagget `allergens: ["shellfish"]`
- [ ] Alle meieri-ingredienser tagget `allergens: ["dairy"]`
- [ ] Egg, hvetemel og nøtter tagget tilsvarende
- [ ] Samme tagging gjort på relevante **byttalternativer** i `swapOptions`

> **Uten tagging er filteret stille, ikke feil** — tilpasning skjer bare for
> taggede ingredienser.

### Slik oppfører filteret seg (dynamisk tilpasning)
Når et allergen krysses av, transformerer motoren oppskriften automatisk. For
hver ingrediens som inneholder allergenet, i denne rekkefølgen:
1. **Bytt** til første allergivennlige alternativ i `swapOptions` (f.eks.
   skalldyr: skalldyrkraft → fiskekraft/grønnsakskraft).
2. Ingen trygt bytte, men `removable: true` → **fjern + juster opp de andre**
   (gjenbruker maintain-yield-kompensasjonen).
3. `removable: false` og ingen trygt bytte → ingrediensen blir stående
   **flagget**, med en ærlig melding («… kan ikke byttes ut – retten passer ikke
   ved …-allergi»).

**Konsekvens for datakvalitet:** hvor god tilpasningen blir avhenger av
`swapOptions`. Skal en rett kunne bli f.eks. skalldyrfri uten å bli fjernet helt,
legg inn et trygt bytte for den ikke-fjernbare ingrediensen (typisk kraften).

**Bare relevante avkrysninger vises:** motoren regner ut hvilke allergener som
faktisk finnes i retten (alle nivåer + alle bytter) og viser kun dem. Egg dukker
ikke opp på en fiskesuppe.

**Manuelle overstyringer respekteres:** bytter/fjerner brukeren en konkret
ingrediens selv, «pinnes» den og auto-tilpasningen lar den være. «Tilbakestill»
nullstiller brukerens egne valg; filteret utleder på nytt.

---

## Lærdom-logg (oppdateres per rett)

**paella** (første rett) — etablerte mønsteret: tre kompleksiteter, kuraterte
bytter, salt-budsjett, maintain-yield. Avdekket: `BASE_COUNT` måtte bli
konfigurerbar (`data-base-yield`); oppskrift-layout måtte flyttes til
`style-felles.css` (delt).

**fiskesuppe** (andre rett) — utløste **data-drevet motor** (`window.RECIPE`,
adapteren sluttet å hardkode paella-navn/oppslag) og **fler-lever-balanse**
(salt + sur + søt, ikke bare salt). Avdekket: levere må kunne variere mellom
kompleksiteter (kompleks har ikke eddik/sukker) → motoren hopper over fraværende
levere.

**safraniskrem** (tredje rett, dessert) — **krevde ingen endring i motoren.**
Bekreftet at motoren degraderer pent til «bare skalering + bytte/fjern +
maintain-yield» når `levers: []` og `requireRoles: []`. Lærdom for skillen:
- Søtt som *hovedsmak* modelleres ved å la sukker være en **vanlig ingrediens
  (ikke en lever)** — strukturelt for frysing, ikke noe man auto-nudger.
- En rett trenger ikke salt-lever eller syre-vakt; tomme lister er gyldige.
- `tasteMessages` kan ha tomme strenger for akser som ikke er relevante.
- Nye roller (`fat`, `liquid`, `sweet`, `aromatic`) fungerer uten kodeendring –
  rollene er bare tekst motoren grupperer på.

→ Konklusjon: motoren er moden nok for skillen etter to retter til på ulike
  «format» (pannekake, sjokoladekake) for å bekrefte bake-/forhold-baserte retter.

**pannekake** (fjerde rett, bakst/antall-basert) — **ingen motorendring.**
Bekreftet: antall-basert skalering (`data-base-yield` i stk pannekaker) virker
gjennom hele adapteren, og diett-bytter (glutenfritt mel, havremelk, linfrø-egg)
er bare vanlige `swapOptions`-oppføringer. Lærdom:
- «porsjoner» vs «antall stk» er bare en etikett (`<label>` + `data-base-yield`);
  motoren bryr seg ikke.
- Diett/allergi-bytter trenger ingen egen mekanisme – kuraterte bytter dekker det.
  (Hvis vi senere vil *filtrere* på diett, er det et eget lag, ikke balanse.)

**sjokoladekake** (femte rett, bakst) — **ingen motorendring.** Bekreftet
forholdsbasert bakst: hevemiddel (bakepulver) og kakao må ha `scaling: "linear"`
så de følger melet – ren smaks-«hold igjen» (`nonlinear`) ville vært feil for
hevemiddel. Lærdom for skillen: *velg `scaling` etter funksjon* – strukturelle
ting (mel, sukker, hevemiddel, væske) = `linear`; rene smakstilsetninger
(krydder, salt, vanilje, sitronskall) = `nonlinear`; engangsting (1 kvist) = `fixed`.

→ **Fem retter på tvers av format (hovedrett, suppe, dessert, to bakst), de tre
  siste uten en eneste motorendring. Motoren er moden – klar til å skrive skillen.**

**Allergifilter** (alle 5 sider samtidig) — liten motorendring (`activeAllergens`,
`violations()`, `compatibleSwaps()`, `relevantFilters()`, `applyDietAdaptations()`,
pinning av manuelle valg i `recipe-adapter.js`). Filteret er **generisk og
datafil-drevet**: en ny rett trenger kun `allergens`-felt i datafilen + én
`<div id="diet-filter">` i HTML. Krysser man av et allergen, transformeres retten
automatisk: bytt → fjern+kompenser → flagg (ufiksbart). Bare allergener som
finnes i retten vises som avkrysning.

**Først bygget med diett også (vegan/vegetar/pesketar/gravid/sukkerfri/barnevennlig),
så fjernet med vilje.** Lærdom: små 1:1-bytter (allergier) egner seg for
auto-tilpasning; store kostholdsomlegginger gjør det ikke — de endrer hva retten
*er*, og motoren leverer da mat ingen har smakt på. Slike varianter skal være
**egne, håndskrevne oppskrifter**, ikke en filterbryter. `incompatible`-feltet og
«Annet»-kolonnen ble derfor luket ut igjen.

**Skalldyr = krepsdyr + bløtdyr (én tag).** EU skiller dem, men «Skalldyr»-filteret
skal fjerne både reker og blåskjell/kamskjell/blekksprut, så alle får
`allergens: ["shellfish"]`.

**"Nøyaktig" (gram)-bryter** (nå på alle fem retter, kompleks-nivå) — liten
motorendring (`formatAmountPrecise` i `recipe.js`, en bryter + `unitState`-
override i `recipe-adapter.js`). For at en kompleks-rett skal kunne vise alt
i gram, må **alle ingredienser som ikke allerede er `g`/`stk`** ha både
`density` og `"g"` i `unitOptions`. `stk`-ingredienser (egg, sitron) holdes
utenfor med vilje – "6,7 stk" gir ikke mening; rene «smak til»-garnityr i
`kvist`/herbe-enheter forblir også som de er. Sjekkliste for neste kompleks-rett
som skal støtte dette: gå gjennom `kompleks.ingredients`, og for hver med enhet
`dl`/`ss`/`ts`/`ml`, sørg for `density[id]` og legg `"g"` til `unitOptions[id]`.
**Dette gjelder også hver `swapOptions`-id med volum-enhet** – motoren slår opp på
`effId` (bytte-id-en), så et bytte uten `density`/`unitOptions` mister enhetsvalg
og gram-visning idet det velges.
Husk også `<div id="budget-toggle"></div>` og `<div id="precision-toggle"></div>` i
`.recipe-customize` i HTML-en (byggemalen legger inn begge automatisk).

Utrullingen til de andre fire: bare data + HTML, ingen motorendring. Nye `g`:
paella `stock`/`fish_stock`/`veg_stock`; fiskesuppe `stock`/`wine`/`olive_oil`/
`tomato_paste`; pannekake `milk`/`cardamom`; sjokoladekake `coffee` +
`baking_powder` (ny `density: 0.9`).

**safranrisotto** (sjette rett, første bygd gjennom skill-ene) — **ingen
kjernemotorendring.** Hele flyten `/research-recipe → review → /build-recipe`
fungerte mot den nye infrastrukturen: ett staging-objekt → datafil +
manifestoppføring (soon→live) + HTML fra mal + sitemap-linje. Kort, relaterte,
Recipe-/Breadcrumb-/FAQPage-schema og synlig FAQ kom automatisk. Lærdom:
- **Manifestet er sannheten for SEO**, ikke HTML-en: `faq` legges på
  `RECIPES_INDEX`-oppføringen, og `recipe-schema.js` rendrer både synlig FAQ og
  FAQPage fra samme liste (`renderFaq` + `buildFaqLd`).
- Validér manifestet i Node med en window-shim: `global.window={}` før
  `require('./recipes-index.js')` (fila setter `window.*` på toppnivå).
- Wine som `role:"acid"` + `isPrimaryAcid` + `onRemove.tip` gir riktig
  «fjernet syre»-tips uten å sette `requireRoles:["acid"]` (risotto krever den ikke).

**kjøttkaker** (syvende rett, andre via skill-ene) — **ingen kjernemotorendring.**
Hodeord «kjøttkaker» er hardt (matprat/tine/godt eier topp-3 med karusell), så
navnet ble long-tail-vinklet «Kjøttkaker i brun saus» og FAQ-en bygd på ekte
PAA-spørsmål (sprekking, melk vs vann, vs karbonader, uten egg). Lærdom:
- **Hold `tasteMessages` til nøklene adapteren faktisk leser** (`sour`/`umami`/
  `sweet`, og bare ved `taste.*>=2`). Tomme `""`-felt eller en ubrukt `bitter`-
  nøkkel er død data – ta dem ut. Build-skillet luket dem ut etter serialisering.
- Jevning med to ingredienser (smør `role:"fat"` + hvetemel `role:"seasoning"`,
  `addStage:"end"`) modellerer brun saus fint; hvetemel tagget `allergens:["gluten"]`
  med et glutenfritt potetmel-bytte, slik at allergenfilteret og bytter henger sammen.

**fiskekaker** (åttende rett, tredje via skill-ene) — **ingen kjernemotorendring.**
Long-tail-navn «Hjemmelagde fiskekaker», `allergens:["fish"]` på fisken og alle
fiske-bytter. Salt er bevisst høyt (~2 ts/600 g) fordi det *binder* farsen, og
`leverMessages.salt.up` advarer mot å kutte for hardt – levermeldingene kan bære
matlagings-kontekst, ikke bare «vi justerte». Lærdom:
- **Paritetssjekk fanget en ekte feil i review:** `butter` lå i `density` men
  manglet i `unitOptions`. Regelen «hver g-omregnbar id i begge» er verdt å kjøre
  som node-assert før bygging (`Object.keys(density)` vs `Object.keys(unitOptions)`).

**review-runde (kjøttkaker + safranrisotto)** — review fanget to mønsterfeil som
gjaldt *bytter*, ikke ingredienser, og som de tidlige byggene gjentok:
- **Paritetsregelen gjelder også bytte-id-er.** Motoren slår opp `density`/
  `unitOptions` på `effId` (= bytte-id-en når et bytte er valgt), ikke på slot-en.
  Volum-bytter som manglet dem (`oat_milk`, `carnaroli`, `no_wine`, `vermouth`,
  `olive_oil_only`, …) mistet enhets-nedtrekk og «Nøyaktig (gram)» ved bytte.
  Paritets-snutten må derfor iterere over `swapOptions`, ikke bare ingredienslista
  (lagt inn i `/build-recipe` steg 5).
- **Manglende standardbytter ga falsk «passer ikke ved allergi».** Kjøttkaker hadde
  melkefritt bytte på `melk`, men ikke på `smør` – begge bærer meieri, så
  meieri-filteret flagget retten som uegnet selv om melken ble byttet. Dessuten
  manglet opplagte kjøkkenbytter (oksekraft↔buljong, potetmel↔hvetemel). Lærdom:
  kuraterte bytter må følge en **systematisk standardbytte-liste** per rolle
  (kraft/fett/væske/mel/egg/ost), ikke ad hoc skjønn – lagt inn i `/research-recipe`.

**risgrøt** (niende rett, fjerde via skill-ene) — **ingen kjernemotorendring.** Grøt
som format: sukker, kanel og smørøye er **serverings-topping** (`addStage:"serve"`,
`scaling:"nonlinear"`, `removable:true`), ikke levere – «sødme» bor i serveringen og
auto-balanseres ikke (samme prinsipp som safraniskrem). Lærdom:
- Den nye **standardbytte-lista** (fra forrige review) traff på første forsøk:
  melk↔havredrikk, fløte↔plantefløte, smør↔margarin, grøtris↔jasminris ga **full
  meieri-dekning** på alle nivåer uten «unfixable». Bytte-paritet-snutten var grønn
  med en gang. Skill-herdingen virker etter hensikten.
- `fløte` som `role:"fat"` (ikke `liquid`) holder den utenfor `bulkRoles`, så «juster
  opp de andre» ikke skalerer risen når fløten byttes/fjernes.

**thailandsk fiskesuppe** (tiende rett, femte via skill-ene) — **ingen kjernemotorendring.**
Thai salt–sur–søt-balanse modellert som tre levere mot rettens egne ingredienser, ikke
mot tilsatt bordsalt. Lærdom:
- **Salt-leveren trenger ikke være rent salt.** `fiskesaus` (sodiumPer100g ~7800) ER
  rettens naturlige saltkilde, og fungerer fint som `axis:"salt"`-lever – motoren løser
  relativt mot mål-natrium, så `~38800` er bare konvensjonen for bordsalt, ikke et krav.
  Bekreftet i Node: `missingRoles` tom (lime dekker `acid`), `leverGrams` gir fornuftig
  fiskesaus-mengde og klampes til 0 ved nok salt. Sjekket at motoren ikke hardkoder
  `salt_added`/`38800` – leverne er fullt data-drevet.
- **Skalldyr-dekning via standardbytte på en ikke-fjernbar ingrediens.** Rød currypaste
  (`removable:false`) bærer skalldyr (rekepasta), men et `veg_curry_paste`-bytte
  (rekefri/vegansk) gjør hele retten skalldyrfri – kombinert med at reker/scampi er
  `removable`. **Fisk forblir bevisst «unfixable»** (kraft/fisk/fiskesaus): en fiskesuppe
  *kan* ikke gjøres fiskefri, akkurat som `fiskesuppe` – ærlig flagging er riktig her.
- **Naturlig melkefri** (kokosmelk i stedet for fløte) er både et SEO-poeng og gir null
  meieri-ingredienser å dekke. `coconut` regnes ikke som nøtt-allergen.

**kålruletter** (ellevte rett, sjette via skill-ene) — **ingen kjernemotorendring.** Bygd på
kjøttkaker-mønsteret (kjøttfarse + binding + brun saus) med kål som wrapper. Lærdom:
- **Full trippel allergi-dekning** (melkefri + eggfri + glutenfri) falt naturlig ut av den
  systematiske standardbytte-lista: `melk→havredrikk`, `smør→margarin/rapsolje`,
  `fløte→plantefløte`, `egg→ekstra potetmel`, og **jevningen** (`flour`, hvetemel) er både
  `removable:true` OG har glutenfri bytter (`potetmel`/`maizena`). Allergen-snutten meldte
  null uløselige – verdt å huske at *saus-jevning* er en skjult gluten-kilde som må dekkes.
- **Wrapper-ingrediens:** kålbladet er `removable:false`, uten allergen, og selve retten –
  `pieceWeight` i stk + tekstur-bytter (savoy/spisskål) som `tradition:"regional"`.
- **Ny rolle `grain`** (kokt ris) lagt i `bulkRoles` uten kodeendring; `removable:true`
  lar brukeren slå av risen for den rent tradisjonelle norske varianten (skiller den fra
  svensk kåldolmar) – et data-valg, ikke en motor-bryter.

**marry me chicken** (tolvte rett, syvende via skill-ene) — **ingen kjernemotorendring.**
Kremet fløtesaus-rett (kylling + soltørket tomat + parmesan). Lærdom:
- **Naturlig glutenfri = null gluten å dekke.** Sausen tykner via fløte-reduksjon +
  revet parmesan, ikke roux/mel – så retten har *ingen* gluten-bærer. Verdt en egen
  SEO-vinkel («naturlig glutenfri»), på linje med thai-fiskesuppe sin «naturlig melkefri».
- **Ett allergen (meieri) på flere bærere:** `smør` + `fløte` + `parmesan` (+ `mascarpone`
  i kompleks). Hver må løses – `smør→margarin/olje`, `fløte→plantefløte`, `parmesan→vegansk`,
  `mascarpone` er `removable`. NB: et slot kan ha *flere* bytter der bare ett er
  allergenfritt (`fløte` har også `crème fraîche`/`matfløte` som *fortsatt* er meieri) –
  allergi-snutten må finne det melkefrie byttet, ikke bare «et bytte».
- **Live uten foto:** ingen opplastet bilde → fulgte `fiskekaker`/`safraniskrem`-mønsteret:
  `image:null` i manifestet, droppet `og:image`/`twitter:image`, `twitter:card:"summary"`,
  og lot `--recipe-image`-variabelen peke på den framtidige stien (manglende CSS-bakgrunn
  vises som ingenting, ikke knust-ikon). Aldri la en «live» rett ha `image` mot en fil som
  ikke finnes på `main`.

**baja fish tacos** (trettende rett) — **ingen kjernemotorendring.**
Sprøstekt/ølfritert fisketaco fra Baja California, med kylling som likestilt alternativ. Lærdom:
- **`requireRoles:["acid"]` uten egen syre-lever:** lime er `role:"acid"` og `essential` i
  alle tre nivåer, så `missingRoles` er tom og motoren får friskheten den krever – men vi
  trenger ingen auto-syre-lever (ingen ren syre-ingrediens å skru på/av). `servedAcid:null`.
- **Fire allergener i én rett (fisk/gluten/egg/meieri), alle løst med data:** fisk via
  `white_fish→chicken` (fiskefritt), gluten via `wheat_flour→gf_flour` + `beer→sparkling_water`
  + `wheat_tortilla↔corn_tortilla`, egg via `mayo→vegan_mayo`, meieri via
  `sour_cream`/`creme_fraiche→plant_creme`. Merk **toveis tortilla-bytte** (mais↔hvete) så
  gluten er løsbart uansett hvilket nivå/standardvalg.
- **«Likestilt alternativ» = data + kopi, ikke ny motor-mekanikk.** Brukeren ville ha kylling
  likestilt med fisk. Løst uten ny variant-bryter: kylling-byttet på `white_fish` (gjelder alle
  nivåer siden id-en er felles), løftet i navn/tagline/keywords (`baja chicken tacos`),
  body-tekst, egen FAQ og byttenotat. Motoren trengte ingen endring.

**spagetti med kjøttsaus / bolognese** (fjortende rett) — **ingen kjernemotorendring.**
Tre nivåer fra rask hverdagssaus til langtidskokt ragù. Lærdom:
- **To selvjusterende levere i samme rett:** `salt` (`salt_added`, sodium 38800) **og**
  `sweet` (`sugar`) – sukkeret balanserer tomatsyren og auto-justeres når porsjoner/nivå
  endres. `tasteMessages` dekker `umami/sour/sweet`, `leverMessages` dekker `salt/sweet`.
- **`requireRoles:["acid"]` dekket av hovedingrediens, ikke egen syre-lever:** hermetiske
  tomater/passata er `role:"acid"` i alle nivåer (vin i medium/kompleks), så `missingRoles`
  er tom uten å trenge en på/av-syre. `servedAcid:null`.
- **ts-krydder holdes utenfor `density`/`unitOptions` (som stk/kvist).** `herbs` (`role:"seasoning"`,
  `scaling:"nonlinear"`, «etter smak») skal IKKE i density/unitOptions – samme mønster som
  marry-me-chicken (`italian_herbs`/`thyme`/`pepper`). Den offisielle bytte-paritet-snutten
  sjekker bare `swapOptions`; en streng «alle ingredienser»-variant gir falsk positiv på slike
  krydder. Bare `salt_added`/`sugar` (lever-/gram-sporet) hører hjemme i density selv om de er ts.
- **«Stille bytte» = motsatt av «likestilt»:** brukeren valgte vegetar som stille bytte. Byttene
  (`lentils_mushroom`, `plant_mince` på `beef`) beholdes i «Tilpass», men fjernet det dedikerte
  body-avsnittet, vegetar-FAQ-en og vegetar fra `keywords`/`search` – data uten SEO-løft.
- **Slug-/hodeord-valg endte på norsk:** brukeren valgte `spagetti-kjottsaus` (norsk hodeord
  «spagetti med kjøttsaus») framfor engelsk `spaghetti-bolognese`; bolognese beholdt sekundært
  i tittel/navn/keywords. Husk: ASCII-slug uten æøå, men hodeordet kan likevel være norsk.

**Review-runde etter #13/#14 — KJERNEMOTORENDRING (bevisst, godkjent):**
- **Diett-filteret støtter nå alle 14 lovpålagte allergengruppene (EU/Norge).** Tidligere var
  bare 6 hardkodet (`dairy, egg, gluten, shellfish, fish, nuts`), og listen var *duplisert* i
  `FILTER_LABELS` og i `buildDietFilter` – som drev fra hverandre. Spagetti #14 tagget `celery`
  (selleri) som ikke var blant de 6 → taggen ble **inert** (ingen avkrysning rendret), selv om
  validering sa «OK» (den sjekket bare removable/bytte, ikke at allergenet fantes i motoren).
  Fiks: **én felles `ALLERGENS`-liste** i `recipe-adapter.js` driver både etiketter og UI;
  utvidet til alle 14 (la til `molluscs, peanuts, soy, sesame, celery, mustard, sulphites,
  lupin`). `relevantFilters()` viser fortsatt **bare** allergener retten faktisk inneholder, så
  ingen tom støy per side. Build-skillet fikk en ny sjekk som flagger allergen-id utenfor lista.
- **Lærdom:** når en ny rett trenger et allergen, legg det til i den ene `ALLERGENS`-lista –
  aldri to steder. Et allergen som ikke står der, virker ikke i filteret uansett data.
- **Småplukk samtidig:** nøytraliserte «likestilt»-ordlyden i spagetti-vegetarbyttet (var i
  utakt med «stille bytte»-beslutningen).

**vafler (rett #18, første rett-pulje)** — **ingen kjernemotorendring.**
- Første rett med **kun en sweet-lever** (`levers:[{axis:"sweet",id:"sugar"}]`, `requireRoles:[]`,
  ingen salt-lever) — motoren håndterte det rett fram. Saltet i røra er marginalt
  (`removable:false`, ingen sodiumPer100g), så salt-lever ville vært meningsløst. Bekrefter
  at lever-mekanikken er fullt akse-agnostisk.
- Tomme `tasteMessages`-nøkler (sour/umami: "") fra staging ble strippet i bygg — en akse uten
  budskap bør utelates, ikke settes tom. Verdt en kontrakt-presisering hvis det går igjen.

**taco / fredagstaco (rett #19, pulje)** — **ingen kjernemotorendring.**
- Andre rett som deler navnerom med en eksisterende (baja-fish-tacos) — løst med eget id-sett
  (beef/spice_mix/salsa/wheat_tortilla …), null ingrediens-/byttoverlapp. Bekrefter at
  «distinkt rett, samme tema» trygt kan bygges side om side uten kollisjon i manifest/schema.
- Største rett så langt: kompleks har 23 ingredienser. Adapter/skalering/diett-filter taklet
  det uten endring. requireRoles:[] selv om salsa/tomat er syrlig — akseptabelt (taco trenger
  ikke en tvungen syre-akse slik tomatsaus-retter gjør).
- Dobbel meieri-bærer (ost + rømme): begge fikk vegansk bytte, så melkefri-filteret er komplett
  — akkurat fallgruven smør+melk-lærdommen advarte mot. Standardbytte-rutinen fanget det.

**pizza / pizzadeig (rett #20, pulje)** — **ingen kjernemotorendring.**
- «Deig-tung» rett: hodeordet er `pizzadeig`, men siden dekker både deig og hel pizza. Tre nivåer
  brukt som **teknikk-stige** (samme-dags → 1–2 t heving → kald langheving 24–48 t / tipo 00),
  ikke bare flere ingredienser. Bekrefter at nivå-aksen tåler «samme rett, ulik teknikk/tid».
- Salt-lever på deig+saus fungerte rett fram; dobbel meieri-bærer (mozzarella + parmesan) begge
  med vegansk bytte.

**Pulje-observasjon (alle tre):** ingen av de tre trengte en motorendring — sweet-only-lever,
23-ingrediensers rett, og teknikk-stige ble alle absorbert av eksisterende motor.

**Retrospektiv etter pulje #1 (vafler/taco/pizza):**
- **[KONTRAKT, fikset]** Skala-etiketten skal være rett-spesifikk («Antall vafler»), ikke alltid
  «Antall porsjoner» (pannekake/sjokoladekake-konvensjonen). Generatoren satte feil på vafler →
  rettet til «Antall vafler», og `build-recipe` Steg 3 fikk et eksplisitt punkt 9.
- **[KONTRAKT, fikset]** Tomme `tasteMessages`-nøkler: build stripper dem nå (presisert i
  `build-recipe` Steg 1), og `research-recipe` er bedt om ikke å emittere dem.
- **[MOTOR, fikset — godkjent kjernemotorendring]** `recipe-adapter.js` hardkodet « porsjoner» i
  to brukervendte strenger (lagret-variant-etikett, «juster opp»-panel) — feil for ikke-porsjons-
  retter. Løst med nytt konfigurerbart felt **`window.RECIPE.yieldNoun`** (default «porsjoner»);
  begge strengene bruker det nå. Satt på vafler («vafler»), pannekake («pannekaker»), sjokoladekake
  («stykker»); resten faller til default. Bruk feltet for alle nye ikke-porsjonsretter.
- **[PROSESS, fikset]** Hele puljen ble bygd med én deterministisk generator (data + manifest +
  HTML-mal + sitemap), 3 retter / null byggefeil. Formalisert som `.claude/skills/build-recipe/
  build.js` og referert fra `build-recipe`-skillet. Den leser `yieldNoun` og stripper tomme
  tasteMessages automatisk.

**lasagne (rett #21, pulje #2)** — **ingen kjernemotorendring.**
- Flest allergener på én rett så langt: gluten, meieri, egg, selleri. Gluten bæres av TO kilder
  (plater + bechamel-mel), meieri av flere (smør + melk + crème fraîche + parmesan + mozzarella).
  Standardbytte-disiplinen dekket alle — ingen «unfixable». Bygd med generatoren på første forsøk.
- **Allergen kun på ett nivå:** egg finnes bare i kompleks (ferske eggplater). Diett-filteret
  viser likevel egg (union over nivåer i `relevantFilters`) — riktig: brukeren ser at det fins en
  variant med egg, og byttet/fjerningen gjelder det nivået. Bekrefter union-designet.

**boller (rett #22) + kanelboller (rett #23, pulje #2)** — **ingen kjernemotorendring.**
- Tredje/fjerde sweet-lever-bakerett (etter vafler) med `yieldNoun` («boller»/«kanelboller»).
  Generatoren satte skala-etikett + aria-labels riktig fra yieldNoun — yield-noun-fiksen virker
  ende-til-ende på nye retter.
- **Søsken-retter på samme grunndeig:** boller og kanelboller deler gjærdeig-base, bygd i samme
  pulje. Løst som taco/baja: eget id-sett hver (boller: …/raisins/pearl_sugar; kanelboller:
  …/filling_butter/filling_sugar/cinnamon), distinkte søkeord (rosinboller/grunndeig vs
  kanelfyll/snurrer). Mønster bekreftet: «felles base, distinkt rett» = separate id-rom + egen
  SEO-vinkel, aldri delt data.

**Retrospektiv etter pulje #2 (lasagne/boller/kanelboller):**
- **[VERIFISERT]** Yield-noun-fiksen fra pulje #1 virket ende-til-ende: generatoren satte «Antall
  boller»/«Antall kanelboller» + aria-labels automatisk fra `yieldNoun`, og motorens variant-/
  justér-tekst følger med. Lukket loop bekreftet.
- **[KONTRAKT, fikset]** «Søsken-retter på felles base» dukket opp 2. gang (boller/kanelboller
  etter taco/baja). La en eksplisitt sjekk i `research-recipe`: del retten base med en slektning
  → eget id-sett + distinkt SEO-vinkel, sjekk manifestet først.
- **Ingen [MOTOR]-funn.** Generatoren bygde alle tre på første forsøk, null byggefeil. To puljer
  på rad uten motorendring tyder på at motoren nå dekker hverdags-/bakerepertoaret godt.

**eplekake (rett #24, pulje #3)** — **ingen kjernemotorendring.**
- Første rett med `nuts`-allergen (mandel) — og igjen kun på ett nivå (kompleks), som lasagnes egg.
  Union-filteret viser nøtter med en gang; byttet (mandel→mer hvetemel) gjelder kompleks. OK.
- Første sesong-rett i puljene (`season:"okt"`, høst). Manifest/forside håndterer det uten noe
  ekstra i bygg. Sweet-lever på sukker, yieldNoun «stykker».

**focaccia (rett #25, pulje #3)** — **ingen kjernemotorendring.**
- Naturlig vegansk/melkefri rett: kun `gluten` som allergen → diett-filteret viser bare gluten.
  Bekrefter at `relevantFilters` skjuler alt retten ikke har. Salt-lever, yieldNoun «stykker».
- Tredje deig-søsken (pizza/grovbrød/focaccia) — eget id-sett, distinkt vinkel (luftig
  olivenoljebrød). Søsken-regelen i research-recipe fungerte forebyggende denne gangen.

**grovbrød (rett #26, pulje #3)** — **ingen kjernemotorendring.**
- Tredje yieldNoun-type: «brød» med `servings:2` — skalerer på antall *brød*, ikke porsjoner/
  stykker. base-yield=2 spiller fint med generatorens min2/step2. yieldNoun dekker alle tre
  tellemåter (porsjoner/stykker/brød) nå.
- Meieri dukker bare opp via et *valgfritt* bytte (olje→smør). Diett-filteret viser dermed dairy
  fordi et bytte bærer det — riktig (brukeren kan filtrere det bort), og basen er melkefri.

**Retrospektiv etter pulje #3 (eplekake/focaccia/grovbrød):**
- **[VERIFISERT]** yieldNoun dekker nå alle tre tellemåter (porsjoner/stykker/brød) — generatoren
  satte riktig etikett automatisk på alle tre. Søsken-regelen (research-recipe) virket forebyggende
  (focaccia/grovbrød/pizza distinkte uten korrigering). Begge forrige puljers fikser holder.
- **Ingen [MOTOR]-funn** for tredje pulje på rad. 9 retter bygd over 3 puljer, kun ÉN motorendring
  totalt (yieldNoun), og den kom fra et reelt gjentakende behov. Motoren er nå moden for
  hverdags-/bake-/brød-repertoaret.
- **[LOGG]** Mulig fremtidig vurdering (ikke en feil): allergen som bare finnes via et *valgfritt*
  bytte (grovbrød olje→smør) vises i filteret. Det er riktig i dag; hvis det blir forvirrende kan
  man senere skille «iboende» vs «kun-ved-bytte»-allergener. Ingen handling nå.

**Nivå-filosofi + tilgjengelighets-gate (etter eier-tilbakemelding: «enkel/medium
for avanserte og spesifikke på ingrediensene»)** — **ingen kjernemotorendring.**
Kontrakt-presisering som gjelder alle **nye** retter, pluss retrofit av verstingene.
- **[KONTRAKT]** Lagt til «Nivå-filosofi»-seksjonen over: nivåene klatrer på
  **teknikk/innsats**, ikke på hvor smal handlelista er. Seks-punkts tilgjengelighets-gate
  for enkel (snarvei før bunn · generisk før spesifikk · krydder-budsjett ≤2 · merk
  valgfritt · færre komponenter · aldri størst) + per-type kjerne-budsjett. Speilet i
  `research-recipe` (mat-research + sjekkliste) og håndhevet av en **soft validator** i
  `build.js` (`NIVÅ-SJEKK`: monotont antall, krydder-tak ≤2, kjerne-tak ≤9).
- **[VALIDATOR-AVGRENSNING]** «Generisk før spesifikk i label» håndheves **ikke** av
  maskinen – spesifisitet er rett-avhengig (arborio er feil i taco, riktig i risotto;
  soltørket tomat *er* marry-me-chicken; crème fraîche som snarvei-saus er riktig på enkel).
  En naiv regex ga bare falske positiver. Det forblir en **skjønnsregel for forfatter/review**.
- **[DATA-FUNN]** Gjennomgang av alle 23 retter: de fleste enkel-nivåene er allerede
  sunne. «Antall krydder»-heuristikken ga **falske positiver** på spagetti/lasagne fordi
  den telte *sukker* og *parmesan* som krydder – validatoren ekskluderer dem nå (samt
  salt/pepper/olje), og måler på **kjerne (ikke-servering)** så bygg-selv-retter som taco
  (mange serveringsboller) ikke flagges urettferdig.
- **[RETROFIT, verstinger]** `marry-me-chicken` enkel (13→11), `kjottkaker`
  (enkel+medium: niche varmkrydder muskat/ingefær flyttet til **kun kompleks**, og
  «Oksekraft» generisert til «Oksekraft (eller buljongterning + vann)» på enkel+medium),
  `kalruletter` enkel (samme muskat-/potetmel-fiks som kjøttkake-slektningen), og `taco`
  **medium** (5→4 krydder). To gjentakende grep krystalliserte seg:
  - **Kraft/fond som standard skal tilby hverdags-snarveien i selve etiketten** på
    enkel/medium («(eller buljongterning + vann)»), ikke bare som et skjult bytte.
    Standardvisningen er medium – den må stå på egne ben uten at brukeren åpner «Tilpass».
  - **Signaturkrydder hører på kompleks, ikke som standard.** Muskat/ingefær *definerer*
    kjøttkaker, men de er spesialvarer; standard (medium) klarer seg med salt+pepper, og
    den fulle krydringen ligger på kompleks for de som vil ha den.
  Medium/kompleks beholder spesialvarene – det er der de hører hjemme.
- **[VALIDATOR-AVGRENSNING 2]** `medium ≤ kompleks` håndheves **ikke**. `safranrisotto`
  kompleks (Milanese) har *færre* linjer enn medium fordi autentisiteten **fjerner**
  olje+hvitløk og bare tilsetter beinmarg. En naiv monoton-sjekk ga falsk positiv her –
  bekrefter prinsippet: kompleksitet er teknikk, ikke antall. Bare `enkel ≤ medium` sjekkes.

- **[ENKEL = BARE MINIMUM, runde 2]** Etter eier-tilbakemelding: medium *kan* ha
  signaturkrydder (muskat/ingefær i kjøttkaker er nå tilbake i medium); det er **enkel**
  som skal være «bare minimum, men fortsatt god». Trimmet rent garnityr/overflødig fra enkel:
  baja (koriander+rødløk), marry-me (basilikum + slo salt/pepper sammen), thai (fersk ingefær –
  currypasta har den alt). **Regel:** på enkel, kutt *fett* (garnityr, dublett-aromater,
  redundant krydder), men behold billige skap-staples som FORBEDRER retten (tomatpuré i
  spagetti/lasagne ble stående – det er muskel, ikke fett).

- **[MOTOR-AUDIT, fikset]** Kjørte motoren (`recipe-balance.js`) + en mirror-paritets-sjekk mot
  alle 23 retter. **Motoren er sunn** (leverGrams ok; `requireRoles:["acid"]`+`servedAcid` gir
  riktig sitron-tips på nivåer uten syre-ingrediens – ikke en feil), og **alle skill-bygde retter
  er paritets-rene**. Fant 22 bytte-paritets-hull i de **5 håndskrevne pre-skill-rettene**
  (fiskekaker/fiskesuppe/pannekake/safraniskrem/sjokoladekake) – et bytte uten `density`/
  `unitOptions` mister enhetsvalg+gram idet det velges. Fikset væske/mel/fett-byttene (speilet
  slottens tetthet/enheter). Bevisst utelatt: `vanilla`/`dark_chocolate` – «smak til»-/g-bytter
  der dl/gram ikke gir mening (slotten burde egentlig ikke vært g-konvertibel; uendret nå).
  **Lærdom:** mirror-regelen (bytte speiler slottens `unitOptions`) er den rette paritets-testen –
  strengere enn build-skillets, men uten falske positiver på rene ts-krydder.

**kyllingkraft (rett #27, første grunnoppskrift/base)** — **ingen kjernemotorendring.**
- **`recipeCategory` kan avvike fra kategori-sluggen.** En kraft er en *grunnoppskrift*, så den ligger i
  `category: ["suppe"]` (vises på suppe-kolleksjonen + «Relaterte», breadcrumb Hjem › Suppe › Kyllingkraft),
  men `recipeCategory: "Tilbehør"` i schema – fritt schema-tekstfelt som ikke trenger å speile kolleksjons-
  etiketten. Brukbart mønster for base-/tilbehørsretter som skal være browsbare *og* ærlig merket.
  (Vurderte `category: []` underveis – motoren takler tom kategori pent, men brukeren valgte suppe for
  oppdagbarhet; en base-rett trenger ikke å være kategoriløs for å være lenkbar.)
- **Fjerde yieldNoun-type: «liter».** Etter porsjoner/stykker/brød skalerer kraft på *liter* (base 2).
  Motoren har ingen liter-enhet, så vann skrives i `dl` (22–25 dl ≈ 2 L etter inntrekking); yieldNoun er
  bare skala-etiketten. Generatoren satte «Antall liter» riktig.
- **Base-rett = `levers: []` + `requireRoles: []` (som safraniskrem).** En kraft auto-balanseres ikke.
  Salt er bevisst *valgfritt og lavt* (`removable:true`, ingen salt-lever) med note «salt retten, ikke
  kraften» – riktig matlagings-budskap for noe som ofte kokes inn. Eneste tasteMessage er `umami`.
- **Tre nivåer som teknikk-stige** (lys hurtigkraft → standard → ovnsstekt/brunet mørk kraft med tomatpuré
  og vin), ikke bare flere ingredienser – samme mønster som pizza/brød.
- **Eneste allergen er `celery`** (stilkselleri), løst både via `removable` OG et sellerifritt
  `fennel`-bytte. Ellers naturlig glutenfri/melkefri/eggfri (SEO-bonus, jf. focaccia/thai-fiskesuppe).
- **Kryss-lenking til en base-rett uten motorendring:** «Hjemmelaget kyllingkraft» lenkes inn fra
  `marry-me-chicken.html` sin brødtekst (`<a href="kyllingkraft.html">`) der kompleks-varianten anbefaler
  hjemmelaget kraft. Ingrediens-/bytte-etiketter i adapteren er ren tekst (ingen `<a>`), så lenking gjøres
  i prosa. **Mulig fremtidig motorfunksjon** (ikke gjort, ville vært en bevisst kjernemotorendring + lærdom):
  la manifestet bære en valgfri «relatert grunnoppskrift»-URL som adapteren auto-lenker på en kjent
  ingrediens-id (f.eks. `stock`/`homemade_stock`). I dag er prosa-lenke det rette, in-scope grepet.

**pasta carbonara (rett #28, pulje #4)** — **ingen kjernemotorendring.** Nivåene er en ren
teknikk-stige rundt «ekte vs fløte»-debatten: enkel bruker bacon + hele egg + generisk «revet ost»
og en valgfri liten skvett fløte som ærlig snarvei-trygghet mot eggerøre; medium er den autentiske
romerske retten UTEN fløte (guanciale, egg + eggeplomme, pecorino, emulsjon av pastavann); kompleks
raffinerer (tørrsaltet guanciale, pecorino+parmigiano 60/40, bare eggeplommer, temperering). Lærdom:
- **Egg som strukturelt «unfixable» allergen er riktig, ikke en mangel.** Carbonara *er* egg + ost +
  svin + pasta; en eggfri «carbonara» er en annen rett. Som fisk i fiskesuppe lot vi egg stå ærlig
  flagget framfor å oppfinne en falsk eggfri løsning. Gluten (→GF-pasta) og meieri (→vegansk hardost
  på hver ost-bærer) er derimot fullt løsbare.
- **Salt-lever kan være `removable:true`/liten når saltet i hovedsak kommer fra ingrediensene selv**
  (ost + guanciale + pastavann). `salt_added` beholdes som lever for å treffe mål-natrium ved
  skalering/bytte, men den er ikke rettens primære saltkilde – beslektet med thai-fiskesuppe der
  fiskesaus var salt-leveren. `requireRoles:[]`, `servedAcid:null` (carbonara har ingen syre-akse).

**gulrotkake (rett #29, pulje #4)** — **ingen kjernemotorendring.** Bakst-stige med `yieldNoun:"stykker"`:
enkel = rør-sammen langpanne med snarvei-topping («Ferdig ostekrem (eller melisglasur)»), medium =
saftig kake med valnøtter (valgfri) + hjemmelaget ostekrem, kompleks = full krydderprofil, ristede
nøtter, ananas/kokos for fukt og brunet-smør-ostekrem. Lærdom:
- **Meieri på fire ostekrem-bærere, alle løst.** Frosting, kremost, smør og brunet smør bærer alle
  meieri; hver fikk melkefritt bytte eller er `removable` serve-topping. Største meieri-fanout så langt –
  standardbytte-disiplinen dekket alt (ingen «unfixable»), som lasagne-lærdommen krevde.
- **Sweet-lever på batter-`sugar`, ikke frostings-melis.** Sukkeret i røra er strukturelt og auto-
  balanseres; melis i ostekremen er serve-stage og holdes utenfor leveren (samme skille som
  eplekake). Bekrefter at sweet-lever på bakesukker (vafler/boller-mønsteret) også passer kaker.
- **Allergen kun på ett nivå igjen:** nøtter (valnøtter) er standard fra medium; union-filteret viser
  nøtter med en gang (som lasagnes egg / eplekakes mandel). Riktig.

**kylling i ovn (rett #30, pulje #4)** — **ingen kjernemotorendring**, men to fanget friksjoner ved review.
Teknikk-stige rundt saftighet/kjernetemperatur: enkel = olje + salt/pepper + ferdig kyllingkrydder,
medium = enkel marinade + rotgrønnsaker, kompleks = tørrsalting + urtesmør under skinnet + vin/kraft i
formen. Naturlig glutenfri/melkefri/eggfri på enkel/medium (meieri kun via removable urtesmør i kompleks).
- **`servedAcid` + acid-`onRemove`-tips er DØD DATA uten `requireRoles:["acid"]`.** Research satte en
  gjennomtenkt stående sitron-tips, removable `isPrimaryAcid`-sitron i medium/kompleks med myke
  `onRemove`-tips, MEN `requireRoles:[]` – og `acidMessage()` i adapteren returnerer null med en gang
  med mindre `requireRoles` inneholder `"acid"`. Hele syre-bevisstheten var inert. Fiks: `requireRoles:["acid"]`.
  Da vises den stående tipsen på **enkel** (ingen syre), er stille på medium/kompleks (sitron til stede),
  og fordi sitronen har `onRemove.tip` får man den **myke** inline-tipsen ved fjerning, ikke den harde
  «flat og tung»-advarselen. Dette er det dokumenterte mønsteret (jf. MOTOR-AUDIT-lærdommen). **Kontrakt-
  presisering nødvendig:** `servedAcid` virker kun sammen med `requireRoles:["acid"]`.
- **Bytte-paritet-snutten gir falsk positiv på ts-krydder-bytter.** `chicken_spice` er et `nonlinear`
  «smak til»-ferdigkrydder uten `density`/`unitOptions` (riktig, som `herbs`/`pepper` i spagetti/marry-me),
  men byttet `single_spices` (også `ts`) ble flagget fordi den offisielle snutten sjekker *enhver* `ts`-bytte
  uavhengig av om slotten er g-konvertibel. **Mirror-regelen** (bytte speiler slottens g-konvertibilitet)
  er grønn – det er den rette testen. Spagetti #14-lærdommen advarte mot dette for «alle ingredienser»-
  varianten; her tripper det den offisielle swapOptions-snutten fordi ts-krydderet *har* et bytte.

**Retrospektiv etter pulje #4 (pasta carbonara / gulrotkake / kylling i ovn):**
- **[KONTRAKT, fikset]** `servedAcid` og acid-`onRemove`-tips er DØD DATA uten `requireRoles:["acid"]` –
  `acidMessage()` returnerer null med en gang ellers. Kylling-i-ovn hadde gjennomtenkt syre-data men
  `requireRoles:[]`, så alt var inert til vi satte `["acid"]`. Presisert i kontrakten (`window.RECIPE`-
  skjema: `servedAcid`/`requireRoles`-kommentarene) og lagt en eksplisitt sjekk i `research-recipe`-
  sjekklista. Mønster: enkel uten syre + medium/kompleks med sitron ⇒ `requireRoles:["acid"]` + myke
  `onRemove`-tips gir riktig oppførsel (stående tips på enkel, stille ellers, ingen hard advarsel).
- **[VALIDERING, fikset]** Bytte-paritet-snutten i `build-recipe` ga falsk positiv på ts-krydder-bytter
  (`chicken_spice→single_spices`): den sjekket *enhver* `ts`-bytte uten å se på om slotten var
  g-konvertibel. Erstattet med **mirror-regelen** (flagg kun hvis slotten selv står i `unitOptions`).
  Verifisert: grønn på kylling-i-ovn, fanger fortsatt et ekte hull (g-konv slot + bytte uten density).
- **[LOGG] Kompleksitet/nivå-skillet (det justerte) holdt på tre svært ulike format.** Carbonara
  (emulsjons-teknikk), gulrotkake (bake-innsats) og kylling i ovn (steke-/saltingsteknikk) passerte alle
  `NIVÅ-SJEKK` på **første forsøk** med 0 advarsler, og `enkel ≤ medium` overalt. Teknikk-stige-framingen
  («enkel = snarvei/tilgjengelig, kompleks = teknikk, ikke smalere handleliste») produserer rene, godt
  graderte nivåer uten manuell justering. Nivå-kontrakten + soft-validatoren fra forrige runde virker.
- **Ingen [MOTOR]-fiks gjort.** Mulig fremtidig motor-nicety (ikke gjort, ville vært bevisst
  kjernemotorendring): koble `servedAcid` fra `requireRoles:["acid"]` så en stående syre-tips kan vises
  uten å «kreve» syre. I dag er kontrakt-presiseringen tilstrekkelig; en frakobling risikerer å endre
  oppførsel for eksisterende retter (baja m.fl.) og bør bare gjøres etter eksplisitt ja.

**VM-pulje «Norge–Brasil» (retter #31–33: pavlova-landslagsfarger, brigadeiro, pao-de-queijo)** —
**ingen kjernemotorendring.** Tre lekne fusjonsretter bygget i én økt via build.js. Lærdom:
- **Tematisk slug for å unngå kannibalisering:** plan.md hadde en planlagt generisk «pavlova», så
  VM-utgaven fikk slug `pavlova-landslagsfarger` (ikke `pavlova`) – tematisk long-tail som lar
  hodeordet stå fritt til en evergreen pavlova senere. Søsken-/kannibaliseringsregelen gjelder også
  mot *planlagte* (ikke bare bygde) retter. Brigadeiro tok derimot hodeordet `brigadeiro` fordi
  enkel-nivået er autentisk klassisk (tjener «brigadeiro oppskrift»), og brunost-fusjonen er vrien i
  medium/kompleks – ingen plan-konflikt.
- **Evergreen-ramme på tidsbundet tema:** navn/ingress er tidløse (landslagsfarger, brunost, Norvegia),
  VM løftes i tagline + ingress + et **«VM-tips» lagt som siste steg** (servering/landslagsfarger).
  Da råtner ikke innholdet når turneringen er over. «VM-tips» som steg (ikke egen seksjon) krevde ingen
  malendring – det er bare et vanlig `steps`-element.
- **Honest-flagging av strukturelt allergen i flere nye format:** egg er `removable:false` uten bytte i
  både marengs (pavlova) og tapiokadeig (pao de queijo) – samme ærlige «passer ikke ved egg-allergi» som
  fisk i fiskesuppe. Bekreftet at regelen «hver allergi løsbar» har et legitimt unntak: når allergenet ER
  retten. Meieri er derimot alltid løst (plantefløte, kokosbasert kondensert melk, vegansk ost, margarin).
- **Naturlig glutenfri som hovedvinkel:** pao de queijo (tapiokamel) har null gluten å dekke – diett-
  filteret viser bare meieri/egg. Sterk SEO-vinkel, jf. focaccia/thai-fiskesuppe. `tapioca_flour` er
  `removable:false` med note om at det IKKE kan byttes med potetmel/maizena (teksturbærer, ikke bytte).
- **Fjerde/femte yieldNoun-type:** «kuler» (brigadeiro) og «boller» (pao de queijo) – generatoren satte
  skala-etikett + aria-labels rett fra `yieldNoun`. Pavlova falt til default «porsjoner». Alle base-yield
  var partall (8/20/16) så scale-steget (min2/step2) lander rent.
- **Ny rolle `cheese` og `topping`** lagt i datafilene uten kodeendring – roller er bare grupperingstekst.
  `cheese` holdt utenfor `bulkRoles` så «juster opp de andre» ikke skalerer osten når den byttes.

**tomatsuppe med makaroni (rett #34)** — **ingen kjernemotorendring.** Barndomsklassikeren fra bunnen,
bygd på spagetti-kjøttsaus-mønsteret (tomat-syre + salt- og sweet-lever, `requireRoles:["acid"]`). Lærdom:
- **Snarvei-suppa er poenget på enkel – men ikke posesuppa.** Den ærlige hverdags-snarveien er
  hermetiske tomater + tomatpuré + buljongterning + sukker + makaroni, IKKE en Toro-pose (som ikke er
  «en oppskrift»). Enkel = fra-bunnen med skap-varer; medium legger til surret gulrot/hvitløk + fløte;
  kompleks ovnsbaker friske tomater + soffritto med selleri + balsamico. Hele SEO-vinkelen er
  «hjemmelaget/fra bunnen» mot pose- og produktsidene som eier hodeordet (Toro topper SERP).
- **Sweet-lever på `sugar` mot tomatsyren, andre gang (etter spagetti #14).** Sukkeret auto-balanseres
  ved skalering/nivåbytte; `tasteMessages` dekker `sour/sweet/umami`, `leverMessages` `salt/sweet`.
  Bekrefter at tomat-baserte retter deler dette lever-oppsettet uavhengig av format (saus vs suppe).
- **Egg + makaroni som serve-følge, pølser bevisst kun i FAQ/brødtekst.** «Med pølser – barnas favoritt»
  er en sterk long-tail, men løftet i prosa/FAQ (ikke som ingrediens) for å holde hodeordet «med makaroni
  og egg» rent – samme «stille vinkel»-valg som spagetti-vegetar. Egg er `removable` serve-protein, så
  egg-allergi løses ved fjerning (som taco/spagetti).
- **Naturlig full allergi-dekning:** meieri (smør/melk/fløte/parmesan – hver med melkefritt bytte),
  gluten (makaroni→GF-pasta), egg (fjernbar serve), selleri (fjernbar soffritto). Billig hverdagsrett
  uten dyrt anker → `cost` utelatt, budsjett-bryteren skjult. Generatoren bygde på første forsøk;
  `NIVÅ-SJEKK` grønn, bytte-paritet grønn (mirror-regel), allergen-id-er alle i motorens `ALLERGENS`.

**helstekt kalkun (rett #35)** — **ingen kjernemotorendring.** Hel fugl til jul/nyttår (`season:"des"`,
middag+jul). Teknikk-stige på en stor, mager fugl der temperatur er alt. Lærdom:
- **Kalkunen holdes utenfor gram-konvertering (kg-mønsteret).** Hovedråvaren står i `kg` (lesbart for en
  hel fugl), og `kg` er ukjent for motorens `toGrams` (returnerer tallet rått). Derfor er `turkey` og
  bytte-id-en `turkey_breast` bevisst UTELATT fra `density`/`unitOptions` – samme grep som `stk`/`kvist`.
  Dokumentert i `_comment_units`. Bytte-paritetssjekken (mirror-regel) er grønn nettopp fordi slotten selv
  ikke er g-konvertibel, så byttet trenger det heller ikke.
- **`servedAcid` + `requireRoles:["acid"]` med sitron kun på medium/kompleks (kylling-i-ovn-mønsteret).**
  Enkel mangler syre, men sitron i kaviteten (`role:"acid"`, `isPrimaryAcid`, `removable`, `onRemove`-tips)
  på medium/kompleks + `requireRoles:["acid"]` gjør at både `servedAcid`-tipsen (tyttebær/sitron) og de
  myke `onRemove`-tipsene faktisk vises. Uten `requireRoles` hadde `acidMessage()` returnert null.
- **Sesong-hodeord + long-tail-forsvar.** Hardt, sesongstyrt hodeord (matprat/meny/godt eier topp-3 med
  karusell) → hele SEO-vinkelen er FAQ-long-tail folk faktisk søker: «per kilo», «kjernetemperatur»,
  «per person», «unngå tørr», «saltlake», «saus av kraften», «tine frossen», «hvile». 9 ekte PAA-spørsmål.
- **Full allergi-dekning på par-bærere:** meieri på TRE bærere (smør→margarin/olje, urtesmør→urtolje/
  -margarin, fløte→plantefløte) og gluten (mel→maizena/potetmel, dessuten `removable`). Budsjett: dyre
  ankre `cost:3` (hjemmelaget kalkunkraft, hvitvin) med rimelig bytte `cost:1` (buljong, ekstra kraft);
  bryteren slår ut på medium (kraft→buljong), stille på enkel som allerede bruker buljong.

**kyllingsuppe (rett #36)** — **ingen kjernemotorendring.** Kremet norsk kyllingsuppe (suppe+middag),
teknikk-stige fra buljongterning til hjemmelaget kraft + eggeplomme-legering. Lærdom:
- **Søsken-avgrensning mot `kyllingkraft`:** kraften er en egen bygd rett; suppa *bruker* den (byttet
  `stock→hjemmelaget kyllingkraft` og kraft-nivået i kompleks) men har eget id-sett og en distinkt
  suppe-vinkel i navn/keywords/FAQ, så de ikke kannibaliserer hverandre i SERP. Sjekk alltid slektninger
  i manifestet før id-er og hodeord låses.
- **Kun umami-`tasteMessages` + salt-lever, ingen syre-akse.** Kremet kyllingsuppe balanserer ikke på
  syre, så `requireRoles:[]`, `servedAcid:null` og ingen tom acid-data (ville vært død – `acidMessage()`
  returnerer null uten `requireRoles:["acid"]`). Salt-leveren er standard bordsalt (`salt_added`, 38800).
- **Full meieri/gluten/egg/selleri-dekning ut av standardbytte-lista:** smør→margarin/rapsolje,
  fløte→plantefløte/crème fraîche, hvetemel-jevning→maizena/potetmel (+ `removable`), eggeplomme-legering
  `removable`, sellerirot→fennikel (+ `removable`). Billig hverdagsrett uten dyrt anker → `cost` utelatt,
  budsjett-bryteren skjult. Generatoren bygde på første forsøk; alle steg 5-snutter grønne.

