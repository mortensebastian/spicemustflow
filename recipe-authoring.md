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
  servedAcid: { tip } | null,            // stående sitron-tips KUN for retter uten syre-ingrediens
  density:     { <id>: gPerMl },         // for g-omregning (volum↔vekt)
  pieceWeight: { <id>: gramPerStk },     // for «juster opp de andre» når enhet er stk
  unitOptions: { <id>: [enheter] },      // hvilke enheter man kan bytte mellom (volum↔volum gratis; g krever density)
  bulkRoles:   [ ...roller som teller som «mengde mat» ],
  levers:      [ { axis, id } ],         // selvjusterende balanse-ingredienser (kan være tom)
  requireRoles:[ ...roller retten må ha ],// f.eks. ['acid']; kan være tom []
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
Husk også `<div id="precision-toggle"></div>` i `.recipe-customize` i HTML-en.

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



