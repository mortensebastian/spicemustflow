---
name: trend-recipe
description: Oppskriftsspeider. Leser byggelista i plan.md («Oppskrifter å bygge»), sjekker hva som trender i norsk matsøk + sesong, og legger ÉN ny rett i lista per døgn. Bruk når brukeren sier «sjekk trender», «finn neste rett», «kjør oppskriftsspeideren», eller når en daglig schedulert økt skal foreslå dagens rett. Bygger ingenting – den fyller bare byggelista. Bruk /ny-rett for å faktisk bygge en rett fra lista.
---

# trend-recipe (oppskriftsspeider)

En lett «recipe list agent». Hver kjøring gjør **én** ting: finner den beste *nye*
retten å bygge ut fra trender + sesong + søkeordstrategi, og **legger den til
byggelista i `plan.md`**. Den bygger ingen sider og endrer ingen motor – den
mater bare køen som `/ny-rett` senere tømmer.

> **Kontrakt:** maks **én rett lagt til per døgn**. Skillen er idempotent: er det
> allerede lagt til en rett i dag (se loggen), stopper den uten å gjøre noe.

## Filer den rører
- **Leser:** `plan.md` (§ «Oppskrifter å bygge» + § «Søkeordstrategi» §6 +
  «Sesongkalender» §7), `recipes-index.js` (manifestet – fasit på hva som finnes),
  `recipes-pending/` (staging – retter som er researchet men ikke bygd).
- **Skriver:** `plan.md` (én ny linje i «Neste»-lista) og
  `recipes-pending/trend-log.md` (én loggrad).
- Den skal **ikke** lage `<rett>-data.js`, `<rett>.html` eller manifestoppføringer.
  Det er `/ny-rett` sin jobb.

## Fremgangsmåte (ett gjennomløp)

### 1. Døgnsperre (gjør dette FØRST)
- Finn dagens dato: `date +%F`.
- Les `recipes-pending/trend-log.md`. Finnes det allerede en rad med dagens dato →
  **stopp**. Rapporter «Allerede lagt til <rett> i dag (<dato>) – hopper over» og
  avslutt. Ikke legg til en rett til.
- Finnes ikke loggfila, opprett den med samme topptekst som seed-raden under.

### 2. Bygg «kjent»-settet (unngå duplikater)
Samle alt vi allerede har eller har planlagt, og dropp kandidater som matcher noe
av dette (sjekk både slug/id og rettens vanlige norske navn + nære synonymer):
- Alle `id`/`name`/`shortName` i `recipes-index.js` (både `status:"live"` og `"soon"`).
- Alle avkryssede **og** ikke-avkryssede punkter i `plan.md` → «Oppskrifter å bygge»
  («Ferdige» + «Neste»).
- Rettene i `plan.md` → «Oppskrifter klare til bygging».
- Alle filer i `recipes-pending/` (staging-objekter som venter på bygging).

### 3. Finn dagens kandidat (trend + sesong + strategi)
Mål: høyt norsk søkevolum / stigende interesse, og i tråd med eierføringen i
`plan.md` (§6: bygg **høyvolums norske hverdags- og bakeklassikere** først; safran
nedtones; sesong times etter §7).
- Bruk `WebSearch`/`WebFetch` mot **norsk** Google (geo = Norge): Google Trends
  (stigende matsøk siste 7–30 dager), «Folk spør også», norske matsider og
  sesongsignaler. Eksakte volum er ikke gratis (`plan.md` → Forbehold) → bruk
  **høy/middels/lav** + en kort begrunnelse, ikke tall.
- Vekt kandidatene slik (i prioritert rekkefølge):
  1. **Sesongtreff nå/snart** (§7-kalenderen, publiser uker før toppen). Er vi
     innenfor et 4–8 ukers vindu før en kjent topp, foretrekk den sesongretten.
  2. **Høyt, stabilt hverdags-/bakevolum** (§6-lista: kjøttkaker-klassen,
     taco, lasagne, kylling, vafler, boller, kanelboller, gryter, pasta …).
  3. **Stigende/virale matsøk** som passer profilen (justerbar, tre nivåer).
- **Velg ÉN** kandidat som ikke er i «kjent»-settet. Foretrekk lav/middels
  konkurranse der volumet er likt (ungt domene vinner long-tail først, §6).
- Ved ekte tvil mellom to gode kandidater (f.eks. en sesongrett vs. et hodeord):
  bruk `AskUserQuestion`. Ellers velg selv og begrunn kort – ikke spør i en
  schedulert/ubemannet kjøring.

### 4. Legg retten i byggelista
I `plan.md`, under «### Oppskrifter å bygge» → «Neste (prioritert …)»-lista, legg
til én linje nederst i lista:

```
- [ ] <Rett> — <trend/sesong-begrunnelse>, søkevolum <høy/middels/lav>, konkurranse <…> (trend-speider <dato>)
```

Behold eksisterende punkter og formatering. Ikke kryss av noe. Ikke endre andre
seksjoner.

### 5. Skriv loggraden
Legg til én rad nederst i `recipes-pending/trend-log.md`:

```
| <dato> | <Rett> | <høy/middels/lav> | <kort begrunnelse + kilde/signal> |
```

### 6. Oppsummer
Rapporter: dato, valgt rett, hvorfor (trend/sesong/volum/konkurranse), hvilke
kandidater som ble vurdert og forkastet (kort), og neste steg:
«Bygg den med `/ny-rett <rett>` når du vil.»

## Å kjøre den én gang i døgnet (scheduling)
Skillen gjør jobben; *å trigge den daglig* settes opp utenfor skillen:

- **Anbefalt – schedulert økt (Claude Code på web):** opprett en daglig
  **scheduled trigger** på dette repoet med prompten:
  «Kjør `/trend-recipe`», på en gren (f.eks. `claude/trend-speider`). Hver kjøring
  starter en fersk container, legger til maks én rett (døgnsperra hindrer dobbelt),
  committer og pusher. Se docs: https://code.claude.com/docs/en/claude-code-on-the-web
- **Alternativ – `/loop` i en åpen økt:** `/loop 24h /trend-recipe`. Merk at
  containeren er flyktig, så dette varer bare så lenge økta lever – mindre robust
  enn en schedulert trigger for noe som skal gå hver dag.

Døgnsperra i steg 1 gjør at det er trygt om en trigger skulle fyre to ganger.

## Grenser (med vilje)
- Legger **aldri** til mer enn én rett per døgn.
- **Bygger ikke** sider og endrer ikke motorfilene – bare byggelista + loggen.
- Fabrikkerer aldri søkevolum-tall; bruk relative nivåer og oppgi signalet.
