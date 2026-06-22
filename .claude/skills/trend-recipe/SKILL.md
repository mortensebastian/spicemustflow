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

### 3. Finn dagens kandidat — jakt på det som STIGER, ikke evergreen-volum
**Dette er hele poenget med speideren.** Eieren har allerede popularitetslista (de
stabile høyvolums-klassikerne i `plan.md` §6: taco, lasagne, kjøttkaker, vafler,
boller …). Speideren skal **ikke** gjenforeslå slike etablerte storselgere – de
fanges av den manuelle byggeplanen uansett. Jobben din er å finne **retter på vei
opp**: virale/stigende søk der vi kan rangere *før* konkurransen rekker å bygge ut.

Mål: en rett som **trender nå** (stigende kurve, viral på sosiale medier, eller en
skarp sesongtopp på vei), passer motoren (justerbar, tre nivåer), og som vi ikke
har. Tenk «Marry Me Chicken», feta-pasta, cottage cheese-retter, Dubai-sjokolade,
gnocchi-traybake – ikke «taco» eller «kjøttkaker».

Slik finner du den (`WebSearch`/`WebFetch`, norsk geo der mulig):
- **Sosiale mattrender:** TikTok/Instagram-virale retter med norsk fotfeste (norske
  creators, lagt ut på matprat/meny/rema = signal på at trenden har truffet Norge).
- **Stigende søk:** Google Trends «rising»/«breakout» for mat siste 7–30 dager;
  matnyhet-/trendartikler fra norske medier og kjeder (MENY-trender, Findus,
  dagligvare-nyheter).
- **Skarp sesongtopp på vei (§7):** en sesongrett innen 4–8 uker før toppen teller
  også som «stigende» og er et gyldig valg.

Utvelgelse:
- **Velg ÉN** kandidat med tydelig *stigende* signal som ikke er i «kjent»-settet.
- **Forkast** etablerte evergreen-storselgere (popularitetslista) – noter kort at
  de ble forkastet fordi de ikke er en *trend*.
- Vei inn at vi vinner raskest når **konkurransen ennå er tynn**: en fersk trend
  der få norske sider har en god, justerbar versjon, slår en moden trend alle har.
- Eksakte volum er ikke gratis (`plan.md` → Forbehold) → bruk **høy/middels/lav**
  + det konkrete trendsignalet (hvilken plattform/kilde, hvor ferskt), ikke tall.
- Ved ekte tvil mellom to like sterke trender: bruk `AskUserQuestion`. Ellers velg
  selv og begrunn kort – ikke spør i en schedulert/ubemannet kjøring.

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
