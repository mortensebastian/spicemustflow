---
name: research-recipe
description: Research en ny rett til Velkomponert og skriv et staging-objekt (manifestoppføring + mat-data + SEO). Bruk når brukeren vil legge til en ny oppskrift, eller sier «research <rett>», «finn ut hva vi trenger om <rett>», «lag manifest for <rett>». Leverer recipes-pending/<slug>.json som /build-recipe konsumerer. Fyller «Lag 3»-feltene i SEO-kontrakten i recipes-index.js.
---

# research-recipe

Researcher **én ny rett** og skriver et staging-objekt
(`recipes-pending/<slug>.json`) som `/build-recipe` gjør om til ferdig side.
Skillen gjør ingen endringer i nettstedet utenom staging-fila. Mennesket ser over
den før bygging.

> **Les `recipes-index.js` først.** Den er manifestet («én kilde til sannhet») og
> definerer SEO-kontrakten. Jobben din er **Lag 3 – PER RETT, KREVER RESEARCH**:
> du produserer nøyaktig de feltene som skal inn i `window.RECIPES_INDEX`, pluss
> mat-dataene og brødteksten. Lag 1 (mal) og Lag 2 (avledet schema via
> `recipe-schema.js`) lager `/build-recipe` automatisk – ikke research dem.

## Hva du IKKE skal research (avledes automatisk)
`recipeIngredient`, `recipeInstructions`, `recipeYield`-lista, Recipe-/Breadcrumb-
JSON-LD, kort på forsiden/kategorisider, «Relaterte oppskrifter». Alt dette
genereres av `recipe-schema.js` + `site.js` fra `<rett>-data.js` + manifestet.
`times` *estimeres* fra oppskriften (ikke søk).

## Fremgangsmåte (ett gjennomløp)
1. **SEO-research** – de 8 punktene under (`WebSearch`/`WebFetch` mot norsk Google,
   geo = Norge). Eksakte søkevolum er ikke gratis (`plan.md` → Forbehold) → bruk
   **høy/middels/lav**, ikke tall.
2. **Mat-research** – autentiske ingredienser, tre nivåer, kuraterte bytter med
   natrium/smak/allergener, tetthet, tider. Følg `recipe-authoring.md`.
3. **Skriv brødtekst** – original prosa (ikke kopiert): `body.heroIntro`
   (1–2 setninger under H1) + `body.bodyIntro` (2–4 avsnitt om hva som gjør retten
   god, en teknikk-nøkkel, og hvorfor vår justerbare versjon).
4. **Fyll staging-objektet** etter skjemaet under, og **valider** mot sjekklista.
5. **Skriv** `recipes-pending/<slug>.json` og **oppsummer** for review: slug, navn,
   topp-3 søkeord, FAQ-spørsmålene, ingredienser per nivå, sesong, og SERP-strategi.

## De 8 SEO-punktene → manifestfelt

1. **Primærsøkeord + slug** → `id` (= bar slug, ASCII, ingen æøå),
   `indexEntry.slug` (= `<id>.html`), `indexEntry.name`, `indexEntry.shortName`.
   Hva *skriver* folk? («kjøttkaker» vs «kjøttkaker i brun saus»). Kilde: autocomplete.
2. **Long-tail + «Folk spør også» (PAA)** → `indexEntry.keywords`, `indexEntry.search`,
   og `faq`. **Viktigst for et ungt domene** – du vinner long-tail, ikke hodeordet.
   Samle 5–10 **ekte** spørsmål (PAA + relaterte søk + autocomplete) → `faq[]`.
   *(faq er «senere»-feltet i kontrakten – vi tar det nå; build rendrer det synlig.)*
3. **Søkeintensjon** → `serp.intent` (`recipe`/`info`/`mixed`). Bekreft oppskrift-intensjon.
4. **Konkurranse / SERP-bilde** → `serp.topCompetitors`, `serp.hasRecipeCarousel`,
   `serp.competition`. Inkognito-søk på norsk Google.
5. **Volum (relativt)** → `serp.volume` (`høy`/`middels`/`lav`).
6. **Sesong** → `indexEntry.season` (utelat ved helår; ellers f.eks. `"des"`, som lussekatter).
7. **Kategori + relaterte** → `indexEntry.category` (slug-array fra `RECIPE_CATEGORIES`:
   middag/suppe/dessert/baking/jul), `indexEntry.recipeCategory` (schema-label:
   Hovedrett/Suppe/Dessert/Baking). Relaterte trengs ikke – `recipe-schema.js`
   henter dem live fra samme kategori.
8. **Kjøkken + tittel-kvalifikator + meta** → `indexEntry.cuisine`,
   `indexEntry.tagline` (selger kortet), `seo.title` (primærsøkeord først +
   `| Velkomponert`), `indexEntry.description` (~155 tegn, det unike: justerbar/3 nivåer).

## Mat-research → `recipe` (window.RECIPE-data)
Følg `recipe-authoring.md`. Tre nivåer `enkel`/`medium`/`kompleks` (`medium` =
standard, og det `recipe-schema.js` speiler). Per ingrediens: `id`/`label`/`amount`/
`unit`/`role`/`scaling`/`addStage`/`sodiumPer100g`/`taste`/`removable`/`allergens`.
Salt-lever = `sodiumPer100g ~38800` + `levers:[{axis:"salt",id:"salt_added"}]`.
Bytter trenger `sodiumPer100g` + `allergens`. g-omregnbare id-er → både `density`
og `unitOptions`. **`recipe.id` MÅ være lik `indexEntry.id`** (schema-generatoren
slår opp på den).

## Staging-skjema (`recipes-pending/<slug>.json`)
Se `manifest.example.json` for et komplett, utfylt eksempel. Topp-nivå:
```
{
  "indexEntry": { ...nøyaktig RECIPES_INDEX-form: id, slug, status:"live",
                  shortName, name, tagline, description, image, category[],
                  badge, recipeCategory, cuisine, keywords, recipeYield,
                  times:{prep,cook,total}, search, (season?) },
  "seo":  { title },                 // <title>; resten av <head> avledes av build
  "body": { heroIntro, bodyIntro },  // synlig prosa på siden
  "faq":  [ { q, a } ],              // 5–10 ekte spørsmål
  "serp": { intent, volume, competition, topCompetitors, hasRecipeCarousel, strategy },
  "recipe": { ...window.RECIPE: recipes{enkel,medium,kompleks}, swapOptions,
              servedAcid, density, pieceWeight, unitOptions, bulkRoles, levers,
              requireRoles, tasteMessages, leverMessages, id }
}
```
`indexEntry.image` = `<slug>.jpg` (eller `null` til bildet skaffes).

## Sjekkliste før du skriver staging-fila
- [ ] `id` er ASCII (ingen æøå); `indexEntry.slug` = `<id>.html`; `recipe.id` = `id`
- [ ] `category`-slugs finnes i `RECIPE_CATEGORIES`; `recipeCategory` er schema-label
- [ ] `description` ~155 tegn; `seo.title` har primærsøkeord først + `| Velkomponert`
- [ ] 5–10 **ekte** FAQ-spørsmål fra PAA/autocomplete (ikke oppfunnet)
- [ ] `season` satt kun hvis retten faktisk har en topp
- [ ] Tre nivåer; `medium` finnes; salt-lever har `sodiumPer100g ~38800` der den brukes
- [ ] Hver `swapOptions`-oppføring har `sodiumPer100g` + `allergens` (der relevant)
- [ ] Alle g-omregnbare id-er er i både `density` og `unitOptions`
- [ ] Allergener tagget på ingredienser **og** bytter
- [ ] `body.bodyIntro` er original prosa
