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
   og `indexEntry.faq`. **Viktigst for et ungt domene** – du vinner long-tail, ikke
   hodeordet. Samle 5–10 **ekte** spørsmål (PAA + relaterte søk + autocomplete) →
   `indexEntry.faq[]` (`{q,a}`). `recipe-schema.js` rendrer både synlig FAQ og
   FAQPage-schema fra denne lista – én kilde.
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

### Nivå-filosofi (les `recipe-authoring.md` → «Nivå-filosofi» – KRITISK)
Nivåene klatrer på **teknikk og innsats**, ikke på hvor smal handlelista er.
Tilgjengelige ingredienser gjelder på alle nivåer. Bygg **enkel** etter
tilgjengelighets-gaten:
- **Snarvei før bunn:** ferdig krydderblanding/buljong/hermetikk/ferdig saus der
  medium/kompleks lager det fra bunnen. Snarveien er poenget, ikke et nederlag.
- **Generisk før spesifikk i `label`:** «Nøytral olje» (ikke «rapsolje»),
  «Kjøttdeig» (ikke «grovkvernet høyrygg»), «Potetmel (eller hvetemel)», «Melk eller vann».
- **Krydder-budsjett ≤ 2** enkeltkrydder utover salt/pepper på enkel (sukker/ost/olje
  teller ikke). Flere → samle i én ferdigblanding eller løft til medium.
- **Merk valgfritt:** ikke-essensielle smaker på enkel = `removable:true` + «(valgfritt)».
- **Færre komponenter** og **aldri størst:** `enkel ≤ medium` i antall (kompleks kan
  ha færre linjer enn medium hvis den raffinerer ved å fjerne – komplekst = teknikk, ikke antall).
- **Kjerne-budsjett (ikke-servering):** gryte/panne/pasta ≤ 8, suppe ≤ 8, bygg-selv ≤ 7,
  bakst = 0 spesialvarer/-teknikker. Spesialvarene (sjalott, mascarpone, vin, carnaroli,
  hjemmelaget kraft) hører på medium/kompleks.
Salt-lever = `sodiumPer100g ~38800` + `levers:[{axis:"salt",id:"salt_added"}]`.
**`recipe.id` MÅ være lik `indexEntry.id`** (schema-generatoren slår opp på den).
Ta med `tasteMessages` **kun** for akser retten faktisk balanserer – ikke tomme
strenger for sour/umami «for ordens skyld» (build stripper dem uansett).
For **ikke-porsjonsretter**, sett `recipe.yieldNoun` (f.eks. `"vafler"`, `"stykker"`,
`"pannekaker"`) – styrer skala-etikett + motorens variant-/justér-tekst. Default «porsjoner».

**Søsken-retter (felles base):** deler retten grunnlag med en eksisterende/parallell rett
(gjærdeig: boller↔kanelboller; taco: kjøtt↔fisk; ragù: lasagne↔spagetti)? Da MÅ den ha
**eget id-sett** (ingen delte ingrediens-/bytte-id-er) og en **distinkt søkeord-/FAQ-vinkel**,
så de ikke kannibaliserer hverandre i SERP. Sjekk `recipes-index.js` for slektninger først.

### Standardbytter – basis kokkekunst (vurder ALLTID, ikke bare ad hoc)
Kuraterte bytter er ikke valgfri pynt. Gå **systematisk** gjennom ingrediensene og
legg inn det opplagte kjøkkenbyttet for hver – en hjemmekokk forventer dem, og det
er disse som gjør allergifilteret komplett. Minimumssett å vurdere per rolle:
- **Kraft/fond** ↔ buljong (terning, raskere) ↔ hjemmelaget (mer dybde).
- **Smør** ↔ margarin / nøytral olje (melkefri steking).
- **Melk/fløte** ↔ plantedrikk / plantefløte / vann (melkefri).
- **Hvetemel (binding/jevning)** ↔ potetmel / maizena (glutenfri) – OG potetmel ↔ hvetemel.
- **Egg (binding)** ↔ ekstra bindemiddel (eggfri).
- **Hard ost (parmesan)** ↔ grana padano / vegansk parmesan.
- **Ris/korn/protein** ↔ nære slektninger (arborio↔carnaroli, okse↔vilt/kylling, …).

**Allergi-dekningsregel:** hver allergi retten *kan* inneholde (meieri/gluten/egg/
…) skal kunne løses ENTEN via et trygt bytte ELLER via fjerning på **HVER**
ingrediens som bærer allergenet. Pass spesielt på par som begge bærer samme
allergen (f.eks. `smør` *og* `melk` = meieri) – da trenger BEGGE et melkefritt
bytte, ellers flagges retten som «passer ikke ved …-allergi» selv om den ene ble
byttet.

### Krav til hver bytte-oppføring
`sodiumPer100g` (om den salter) + `allergens`. **Hvert bytte med volum-enhet
(`dl`/`ml`/`ss`/`ts`) MÅ legges inn i BÅDE `density` og `unitOptions`** – motoren
slår disse opp på bytte-id-en (`effId`), ikke på slot-en. Glemmer du det, mister
ingrediensen enhets-nedtrekksmenyen og «Nøyaktig (gram)» så snart byttet velges.
`stk`/`kvist` trenger ingen av delene. Speil enheter/tetthet fra slot-en byttet
erstatter.

## Staging-skjema (`recipes-pending/<slug>.json`)
Se `manifest.example.json` for et komplett, utfylt eksempel. Topp-nivå:
```
{
  "indexEntry": { ...nøyaktig RECIPES_INDEX-form: id, slug, status:"live",
                  shortName, name, tagline, description, image, category[],
                  badge, recipeCategory, cuisine, keywords, recipeYield,
                  times:{prep,cook,total}, search, faq:[{q,a}], (season?) },
  "seo":  { title },                 // <title>; resten av <head> avledes av build
  "body": { heroIntro, bodyIntro },  // synlig prosa på siden
  "serp": { intent, volume, competition, topCompetitors, hasRecipeCarousel, strategy },
  "recipe": { ...window.RECIPE: recipes{enkel,medium,kompleks}, swapOptions,
              servedAcid, density, pieceWeight, unitOptions, bulkRoles, levers,
              requireRoles, tasteMessages, leverMessages, id, (yieldNoun?) }
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
- [ ] **`servedAcid`/acid-`onRemove`-tips ⇒ `requireRoles:["acid"]`.** Setter du en stående sitron-tips
      (`servedAcid`) eller myke `onRemove`-tips på en `role:"acid"`-ingrediens, MÅ `requireRoles` inneholde
      `"acid"` – ellers er hele syre-bevisstheten død data (adapterens `acidMessage()` returnerer null).
      Typisk for retter der enkel mangler syre, men medium/kompleks har sitron (jf. kylling-i-ovn).
- [ ] **Enkel følger tilgjengelighets-gaten:** snarvei-produkter, generiske labels,
      ≤ 2 enkeltkrydder, kjerne (ikke-servering) innen budsjett, `enkel ≤ medium ≤ kompleks`,
      ingen spesialvarer/-teknikk (de hører på medium/kompleks)
- [ ] Standardbytter vurdert (kraft↔buljong, smør↔margarin/olje, melk↔plantedrikk,
      hvetemel↔potetmel, egg↔bindemiddel, ost↔alternativ) – se Standardbytter over
- [ ] Hver allergi retten kan ha (meieri/gluten/egg) er løsbar (bytte ELLER fjerning)
      på HVER ingrediens som bærer den – ingen essensiell ingrediens blir «unfixable»
- [ ] Hver `swapOptions`-oppføring har `sodiumPer100g` + `allergens` (der relevant)
- [ ] Hver g-omregnbar id – **også bytte-id-ene** – er i både `density` og `unitOptions`
- [ ] Allergener tagget på ingredienser **og** bytter
- [ ] `body.bodyIntro` er original prosa
