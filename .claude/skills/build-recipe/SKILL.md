---
name: build-recipe
description: Bygg en ferdig oppskriftsside fra et staging-objekt. Bruk når brukeren sier «bygg <slug>», «lag siden fra manifestet», eller etter at /research-recipe har skrevet recipes-pending/<slug>.json. Genererer <slug>-data.js, legger oppføringen i recipes-index.js, lager <slug>.html fra mal, og oppdaterer sitemap.xml. Kort, breadcrumb, relaterte og JSON-LD lages automatisk.
---

# build-recipe

Konsumerer `recipes-pending/<slug>.json` og produserer en komplett side med den
**delte motoren + den sentrale SEO-infrastrukturen** – ingen kjernemotorendring.

> Kontrakt: en ny rett er **ren data + én manifestoppføring + én HTML fra mal +
> én sitemap-linje**. Kort, «Relaterte oppskrifter», Recipe- og BreadcrumbList-
> JSON-LD genereres AUTOMATISK av `site.js` + `recipe-schema.js` fra manifestet.
> Ikke skriv JSON-LD eller kort for hånd. Må du endre `recipe.js`/`recipe-balance.js`/
> `recipe-adapter.js`, stopp og noter det som lærdom i `recipe-authoring.md`.

## Inndata
`recipes-pending/<slug>.json` (skjema: se `research-recipe/manifest.example.json`).
Mangler den → be brukeren kjøre `/research-recipe <rett>` først.
**Les `recipes-index.js`, `recipe-schema.js` og en fersk `paella.html` først** så
du speiler dagens mønster nøyaktig.

## Rask vei – generatoren (anbefalt, deterministisk)
`build.js` (i denne skill-mappa) gjør Steg 1–4 i én kjøring – serialiserer datafil,
spleiser manifestoppføring inn før «Kommer snart», støper HTML fra adapter-malen, og
legger sitemap-linje. Kjør fra **repo-roten**:
```bash
node .claude/skills/build-recipe/build.js <slug> "<norsk header-kommentar til datafila>"
```
Den setter skala-etiketten fra `recipe.yieldNoun` (default «porsjoner»), stripper tomme
`tasteMessages`, og er idempotent på manifest/sitemap. **Du må fortsatt:** kjøre Steg 5-
valideringene, oppdatere lærdom-loggen, arkivere staging og committe. Stegene under
beskriver hva generatoren gjør (og er fasit hvis du bygger for hånd).

## Steg 1 – `<slug>-data.js`
Serialiser `staging.recipe` til `window.RECIPE` (norske kommentarer, engelske
id-er; feltrekkefølge som i `recipe-authoring.md`). `window.RECIPE.id` MÅ matche
`indexEntry.id` – `recipe-schema.js` slår opp på den. **Strip tomme
`tasteMessages`-nøkler** (`sour:""` o.l. fra staging) – en akse uten budskap skal
utelates, ikke stå tom.

## Steg 2 – manifestoppføring i `recipes-index.js`
Splice `staging.indexEntry` inn i `window.RECIPES_INDEX` (blant `status:"live"`,
før «Kommer snart»-blokken). Behold feltrekkefølgen fra de eksisterende
oppføringene. **Dette ene steget gir automatisk:** kort på `index.html`, kort på
riktig kategoriside, «Relaterte oppskrifter», og Recipe/Breadcrumb-schema. Ikke
rør `index.html` eller kategorisidene manuelt.

## Steg 3 – `<slug>.html` (kopier fersk `paella.html`, bytt mal-feltene)
Endre **kun** Lag 1-feltene:
1. `<title>` = `seo.title`.
2. `<meta name="description">` = `indexEntry.description`.
3. `<link rel="canonical" href="https://velkomponert.no/<slug>.html">`.
4. Open Graph: `og:title` (uten `| Velkomponert`), `og:description`, `og:url`,
   `og:image` (`…/bilder/<image>`). Twitter-card likt.
5. `<body class="recipe-page" style="--recipe-image: url('bilder/<image>');">`.
6. Hero: `<h1>` = `indexEntry.name`, ingress = `body.heroIntro`.
7. **Brødtekst:** `body.bodyIntro` (2–4 `<p>`) i intro-området over oppskriften.
8. **FAQ-vert:** legg en tom `<section class="recipe-faq"><div class="container">
   <div id="recipe-faq"></div></div></section>` etter oppskriften. `recipe-schema.js`
   fyller den (synlig FAQ + FAQPage-schema) fra `indexEntry.faq` – ikke skriv
   spørsmål/svar eller FAQPage-JSON-LD for hånd.

9. **Skala-etikett + base-yield + yieldNoun:** sett `data-base-yield` (og `value`) til
   `medium`-nivåets `servings`. For ikke-porsjonsretter, sett `recipe.yieldNoun` i staging
   (f.eks. `"vafler"`, `"stykker"`, `"pannekaker"`) – da bruker BÅDE skala-etiketten («Antall
   <yieldNoun>») OG motoren (lagret-variant-etikett + «juster opp»-panel) riktig substantiv.
   Default er «porsjoner» når feltet mangler (middagsretter trenger det ikke). Generatoren
   leser `yieldNoun` automatisk; bygger du for hånd, sett `<label>` og `aria-label`-ene selv.

**Behold uendret:** alle DOM-kroker (`#complexity-selector`, `#recipe-scale-input`
med `data-base-yield`, `#diet-filter`, `#precision-toggle`, `#reset-recipe`,
`#recipe-messages`, `#ingredient-list`, `#step-list`, `#saved-variants`,
`#recipe-notes`), `<div id="related-recipes">`, og **script-rekkefølgen**:
`<slug>-data.js` → `recipe.js` → `recipe-balance.js` → `recipe-adapter.js` →
`recipes-index.js` → `site.js` → `recipe-schema.js` → `consent.js`.
**Ingen inline JSON-LD** – `recipe-schema.js` injiserer Recipe + Breadcrumb.

### FAQ (rendres sentralt)
`indexEntry.faq` driver **både** synlig FAQ og FAQPage-schema via `recipe-schema.js`
(`renderFaq` + `buildFaqLd`). Bygg-jobben er derfor bare: (1) ha `faq` på
manifestoppføringen, (2) sette inn den tomme `<div id="recipe-faq">`-verten.
Ikke skriv Q&A-markup eller FAQPage-JSON-LD i HTML – da unngår vi utakt.

## Steg 4 – `sitemap.xml`
Legg til `<url><loc>https://velkomponert.no/<slug>.html</loc><lastmod>I-DAG</lastmod></url>`.
(Manifestet sier build oppdaterer sitemap når en rett legges til.)

## Steg 5 – valider (viktigst – ingen testrammeverk)
- [ ] `node --check <slug>-data.js` og `node --check recipes-index.js` (gyldig JS)
- [ ] Manifest laster + ny `id` finnes (window-shim, fila setter `window.*`):
      `node -e "global.window={};require('./recipes-index.js');console.log(!!window.RecipesIndex.byId('<slug>'))"`
- [ ] `recipe.id` === `indexEntry.id`; `indexEntry.slug` === `<slug>.html`
- [ ] `category`-slugs finnes i `RECIPE_CATEGORIES`
- [ ] `medium` finnes; tre nivåer har `ingredients[]` + `steps[]`
- [ ] Salt-lever ⇒ `salt_added` m/ `sodiumPer100g ~38800` i hvert nivå som bruker den
- [ ] `requireRoles:["acid"]` ⇒ en ingrediens har `role:"acid"`; ellers `servedAcid`/`null`
- [ ] Hver g-omregnbar id – ingredienser **og alle bytte-id-er** med `dl/ml/ss/ts` – i
      både `density` og `unitOptions` (`stk`/`kvist` utenfor). Kjør bytte-snutten under.
- [ ] Allergener tagget på ingredienser **og** bytter; hver allergi retten kan ha er
      løsbar (bytte/fjerning) på HVER bærende ingrediens – ingen essensiell «unfixable»
- [ ] **Hvert allergen-id finnes i motorens `ALLERGENS`-liste** (`recipe-adapter.js`). Ellers
      er taggen inert i diett-filteret (ingen avkrysning rendres). Kjør allergen-snutten under.
      Trenger retten et allergen som mangler, er det en bevisst kjernemotorendring + lærdom.
- [ ] HTML: alle DOM-kroker, `#related-recipes`, riktig script-rekkefølge, **ingen inline JSON-LD**
- [ ] canonical + OG + `<title>` (primærsøkeord først + `| Velkomponert`)
- [ ] sitemap-linje lagt til
- [ ] Bilde i `bilder/<slug>.jpg` (ellers flagg – `image:null` til det skaffes)

**Bytte-paritet (kjør denne – fanger den vanligste byggefeilen):**
Mirror-regel: et bytte trenger `density`/`unitOptions` HVIS OG BARE HVIS **slotten det erstatter**
er g-konvertibel (dvs. slotten selv står i `unitOptions`). Et `nonlinear` «smak til»-ts-krydder
(`herbs`/`pepper`/`chicken_spice`) er bevisst IKKE g-konvertibelt – da skal byttet heller ikke være
det, og en ren «alle ts-bytter må ha density»-sjekk gir falsk positiv (jf. kylling-i-ovn / spagetti #14).
```bash
node -e 'global.window={};require("./<slug>-data.js");var R=window.RECIPE,V=["dl","ml","ss","ts"],bad=[];
Object.keys(R.swapOptions||{}).forEach(function(s){
var slotG=!!(R.unitOptions&&R.unitOptions[s]); /* speiler slotten: ikke g-konv slot => bytte trenger det ikke */
(R.swapOptions[s]||[]).forEach(function(o){
if(V.indexOf(o.unit)<0||!slotG)return;
if(!(R.density&&R.density[o.id]!=null)||!(R.unitOptions&&R.unitOptions[o.id]))bad.push(s+"->"+o.id);});});
console.log(bad.length?"MANGLER density/unitOptions for bytte-id: "+bad.join(", "):"bytte-paritet OK (mirror-regel)");'
```

**Allergi-dekning (ingen essensiell ingrediens skal bli «unfixable»):** for hvert
allergen retten kan inneholde, sjekk at hver bærende ingrediens enten har et
allergivennlig bytte eller er `removable:true`. (Typisk feil: `smør` *og* `melk`
bærer begge meieri, men bare `melk` fikk melkefritt bytte.)

**Allergen-id mot motoren (fanger inerte tagger):**
```bash
node -e 'var ad=require("fs").readFileSync("recipe-adapter.js","utf8");
var sup=new Set((ad.match(/id:\s*.(gluten|dairy|egg|fish|shellfish|molluscs|nuts|peanuts|soy|sesame|celery|mustard|sulphites|lupin)./g)||[]).map(function(s){return s.replace(/.*id:\s*.|.$/g,"");}));
global.window={};require("./<slug>-data.js");var R=window.RECIPE,bad=new Set();
function c(g){(g.allergens||[]).forEach(function(a){if(!sup.has(a))bad.add(a);});}
Object.values(R.recipes).forEach(function(L){L.ingredients.forEach(c);});
Object.values(R.swapOptions||{}).forEach(function(a){a.forEach(c);});
console.log(bad.size?"INERTE allergen-id (mangler i ALLERGENS-lista): "+[...bad].join(", "):"allergen-id OK");'
```

## Etter bygging
- Oppdater **lærdom-loggen** i `recipe-authoring.md` (én linje; spesielt hvis du var
  fristet til å endre kjernemotoren).
- Arkiver/slett `recipes-pending/<slug>.json` (bygget).
- Oppsummer for brukeren: nye/endrede filer, manglende bilde, SEO-strategi fra `serp`.
