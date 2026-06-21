---
name: ny-rett
description: Lag en ny oppskrift til Velkomponert fra ende til ende. Bruk når brukeren sier «ny rett <navn>», «legg til oppskrift på <navn>», «lag <rett>-siden». Orkestrerer research → review → bygging mot recipes-index.js + recipe-schema.js.
---

# ny-rett

Tynn orkestrator for å lage én ny rett. Den kjører de to fagskillene i rekkefølge,
med et menneskelig sjekkpunkt imellom. **Les `recipes-index.js` først** – den er
manifestet og SEO-kontrakten alt bygger på.

## Flyt
1. **Research** – kjør `research-recipe` for `<rett>`. Den skriver
   `recipes-pending/<slug>.json` (én `RECIPES_INDEX`-oppføring + mat-data + FAQ +
   brødtekst) og oppsummerer funnene.
   - *Hold hovedkonteksten ren?* Research er nettsøk-tung – send den til en
     **subagent** (`Agent`), som returnerer bare staging-stien + oppsummering.
2. **Review (stopp her)** – vis slug, navn, topp-3 søkeord, FAQ-spørsmålene,
   ingredienser per nivå, sesong og SERP-strategi. Bruk `AskUserQuestion` ved ekte
   valg (hodeord/slug, kategori, eller om en egen guide-side trengs). **Ikke bygg
   før brukeren har sett over staging-objektet.**
3. **Bygg** – kjør `build-recipe` for `<slug>`: datafil + manifestoppføring + HTML
   fra mal + sitemap-linje, og valider. Kort, relaterte og JSON-LD kommer automatisk.
4. **Bilde → main** – sørg for at retten har et foto før den regnes som ferdig:
   - **Plassering/navn:** `bilder/<slug>.jpg` – nøyaktig det navnet `--recipe-image`,
     `og:image` og `Recipe.image` allerede peker på. Ligger bildet et annet sted (egen
     gren, annet navn, opplastet til main «løst»), hent/kopier og døp det om hit.
   - **Optimaliser (SEO/Core Web Vitals):** skaler til **1920 px lang side** og
     komprimer til **< 400 KB** (gjerne WebP) – samme konvensjon som de øvrige
     bildene i `bilder/`. Store originaler (flere MB / 20–45 MP) gir treg LCP og
     svekker rangering – ikke commit råfilen. Strip EXIF.
   - **Manifest:** sett `indexEntry.image = "<slug>.jpg"` (ikke `null`) når fila finnes,
     så schema/OG/forsidekort får bildet. `null` kun hvis bildet ennå ikke er skaffet.
   - **Få det på `main`:** bildet er en publiseringsklar ressurs, ikke kode under review –
     commit `bilder/<slug>.jpg` og **få det inn på `main`** (samme gren som resten av
     retten merges fra, eller direkte til `main` om det er mønsteret for bilder), slik at
     den publiserte siden faktisk serverer fotoet. La aldri en «live» rett peke på et
     bilde som ikke finnes på `main`.
5. **Avslutt** – rapporter nye/endrede filer, bildestatus (på `main`? optimalisert?),
   og neste SEO-steg.

## Hvorfor to fagskill + staging-objekt
Research er fuzzy og token-tung; bygging er presis og schema-bundet. Staging-fila
er et **kontrollerbart artefakt** du ser over (og retter) før en side støpes – og
den har nøyaktig formen til en `RECIPES_INDEX`-oppføring, så build bare splicer den inn.

## Merk
- Endre aldri kjernemotoren (`recipe.js`/`recipe-balance.js`/`recipe-adapter.js`)
  for en ny rett. Fanges et behov, er det en lærdom for `recipe-authoring.md`.
- All SEO-automatikk bor i `recipes-index.js` + `site.js` + `recipe-schema.js`.
  Bygg på den – ikke skriv kort/JSON-LD for hånd.
- `lussekatter.html` har statisk schema (`schema:"static"` i manifestet) og er ikke
  på adapteren; nye retter bygges alltid på adapter-malen (kopi av `paella.html`).
