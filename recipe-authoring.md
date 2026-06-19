# Forfatterguide for oppskriftssider (utkast til skill)

Dette dokumentet beskriver **hvordan man lager en ny oppskriftsside** med den
delte motoren (`recipe.js` + `recipe-balance.js` + `recipe-adapter.js`). Det er
et **levende dokument**: hver gang vi bygger en ny rett, oppdaterer vi skjemaet,
konvensjonene og «lærdom»-loggen nederst. Når vi har nok erfaring, blir dette
innholdet i en `/ny-oppskrift`-skill.

> Mål: en ny rett skal være **ren data + én HTML fra mal + ett bilde** — ingen
> endring i motoren. Hver gang vi *må* endre motoren for en ny rett, er det en
> lærdom som skal noteres i loggen nederst (og helst gjøre motoren mer generell).

---

## Hva en ny rett består av
1. `<rett>-data.js` — oppskriftsdata + `window.RECIPE`-config.
2. `<rett>.html` — kopi av en eksisterende oppskriftsside (paella/fiskesuppe),
   med 4–5 felt endret (se sjekkliste).
3. `bilder/<rett>.jpg` — web-optimalisert bilde (≤ ~1920 px, < ~500 KB).
4. Ett klikkbart kort på `index.html`.

Felles og UENDRET: `recipe.js`, `recipe-balance.js`, `recipe-adapter.js`,
`style-felles.css`.

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
- [ ] `<title>` + `<meta name="description">`
- [ ] Recipe JSON-LD (speil medium-versjonen)
- [ ] `<body class="recipe-page" style="--recipe-image: url('bilder/<rett>.jpg')">`
- [ ] Hero `<h1>` + ingress
- [ ] `<script src="<rett>-data.js">` (resten av script-taggene likt)
- [ ] Kort på `index.html` gjort klikkbart

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
Husk også `<div id="precision-toggle"></div>` i `.recipe-customize` i HTML-en.

Utrullingen til de andre fire: bare data + HTML, ingen motorendring. Nye `g`:
paella `stock`/`fish_stock`/`veg_stock`; fiskesuppe `stock`/`wine`/`olive_oil`/
`tomato_paste`; pannekake `milk`/`cardamom`; sjokoladekake `coffee` +
`baking_powder` (ny `density: 0.9`).



