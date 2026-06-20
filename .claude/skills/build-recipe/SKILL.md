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

## Steg 1 – `<slug>-data.js`
Serialiser `staging.recipe` til `window.RECIPE` (norske kommentarer, engelske
id-er; feltrekkefølge som i `recipe-authoring.md`). `window.RECIPE.id` MÅ matche
`indexEntry.id` – `recipe-schema.js` slår opp på den.

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
- [ ] `node -e "require('./recipes-index.js')"` – manifestet laster, ny `id` finnes
- [ ] `recipe.id` === `indexEntry.id`; `indexEntry.slug` === `<slug>.html`
- [ ] `category`-slugs finnes i `RECIPE_CATEGORIES`
- [ ] `medium` finnes; tre nivåer har `ingredients[]` + `steps[]`
- [ ] Salt-lever ⇒ `salt_added` m/ `sodiumPer100g ~38800` i hvert nivå som bruker den
- [ ] `requireRoles:["acid"]` ⇒ en ingrediens har `role:"acid"`; ellers `servedAcid`/`null`
- [ ] Hver g-omregnbar id i både `density` og `unitOptions`; `stk`/`kvist` utenfor
- [ ] Allergener tagget på ingredienser **og** bytter
- [ ] HTML: alle DOM-kroker, `#related-recipes`, riktig script-rekkefølge, **ingen inline JSON-LD**
- [ ] canonical + OG + `<title>` (primærsøkeord først + `| Velkomponert`)
- [ ] sitemap-linje lagt til
- [ ] Bilde i `bilder/<slug>.jpg` (ellers flagg – `image:null` til det skaffes)

## Etter bygging
- Oppdater **lærdom-loggen** i `recipe-authoring.md` (én linje; spesielt hvis du var
  fristet til å endre kjernemotoren).
- Arkiver/slett `recipes-pending/<slug>.json` (bygget).
- Oppsummer for brukeren: nye/endrede filer, manglende bilde, SEO-strategi fra `serp`.
