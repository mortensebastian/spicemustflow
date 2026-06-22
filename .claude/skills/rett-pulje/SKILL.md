---
name: rett-pulje
description: Bygg en pulje på tre nye oppskrifter på rad og kjør et retrospektiv som forbedrer skill-ene/motoren. Bruk når brukeren sier «kjør en pulje», «lag tre retter», «rett-pulje», «bygg de tre øverste», eller vil ha flere retter + selvforbedring i én økt. Plukker de 3 øverste ubygde rettene fra «Oppskrifter å bygge» i plan.md, kjører ny-rett helautomatisk per rett, og gruvedrifter lærdom-loggen for konkrete forbedringer.
---

# rett-pulje

Orkestrator over `ny-rett` som bygger **tre retter på rad** og avslutter med et
**retrospektiv** — selve poenget. Én rett gir anekdote; tre på rad avslører
*mønster*. Retrospektivet leser de nye lærdommene, ser hva som gjentok seg, og
gjør loopen aktiv: trygge forbedringer fikses automatisk, motorendringer foreslås.

> **Les først:** `recipes-index.js` (manifest/SEO-kontrakt), `recipe-authoring.md`
> (kontrakten + lærdom-loggen nederst), og `ny-rett`-skillet (flyten du gjentar).

## Forutsetninger / oppførsel
- **Helautomatisk:** ingen menneskelig stopp *mellom* rettene. Den eneste porten er
  helt til slutt (merge til `main`, Steg 4).
- **Kontekst-hygiene:** research er token-tung. Kjør **hver** rettes research i en
  egen **subagent** (`Agent`), som returnerer bare staging-stien + kort oppsummering.
  Uten dette tåler ikke én økt tre runder.
- **Branch:** bygg på arbeidsgrenen (samme som resten av arbeidet). Bilder og merge
  til `main` håndteres i Steg 4.

## Steg 0 — velg de tre rettene
Kilde: seksjonen **«Oppskrifter å bygge» → «Neste (prioritert)»** i `plan.md`.

1. Les alle `- [ ]`-linjer under «Neste (prioritert)» (rekkefølgen = prioritet).
2. **Kryssjekk mot faktisk byggede retter** — sjekklista drifter (en rett kan være
   bygd uten at boksen er krysset). Slugify hvert navn og hopp over retter som
   allerede finnes:
   ```bash
   # Bygde slugs (data-filer + manifest):
   node -e 'global.window={};require("./recipes-index.js");
   console.log(window.RecipesIndex.all().map(function(r){return r.slug.replace(/\.html$/,"");}).join("\n"));'
   ls *-data.js | sed 's/-data\.js$//'
   ```
   Match fuzzy (norsk navn → ascii-slug uten æøå). Er du i tvil om en match, regn
   retten som **ubygd** (verre å hoppe over noe enn å oppdage duplikat i research).
3. Ta de **3 øverste ubygde**. Færre enn 3 igjen? Bygg det som finnes og si fra at
   backlogen må fylles på.
4. **Snapshot baseline** for retrospektivet — tell linjer i lærdom-loggen nå:
   ```bash
   git rev-parse HEAD            # baseline-commit
   wc -l recipe-authoring.md     # baseline-lengde
   ```
   Noter HEAD-sha; retrospektivet diff-er mot denne.

Rapportér de tre valgte rettene før du starter (ingen stopp — bare så loggen viser valget).

## Steg 1 — pulje ×3 (per rett, helautomatisk)
For hver av de tre rettene, kjør `ny-rett`-flyten **uten** review-stoppet:
1. **Research i subagent** → `recipes-pending/<slug>.json`.
2. **Bygg** med `build-recipe` (datafil + manifest + HTML + sitemap + valider —
   inkl. allergen-id-sjekken og bytte-paritet).
3. **Lærdom:** følg `build-recipe`s «Etter bygging» — skriv én lærdom-linje i
   `recipe-authoring.md` (spesielt ved motor-fristelse). *Dette er drivstoffet
   retrospektivet leser — hopp aldri over det.*
4. **Commit** retten for seg (én commit per rett, beskrivende melding). Bilde
   håndteres samlet i Steg 4 (`image:null` til det skaffes).

Gå rett videre til neste rett. Stopp bare hvis en rett er fundamentalt blokkert
(f.eks. research finner ikke nok kilder) — da hopp over den, noter hvorfor, fortsett.

## Steg 2 — RETROSPEKTIV (det nye steget)
Nå har du tre ferske retter og tre+ nye lærdommer. Mål: gjør skill/motor bedre.

1. **Samle signalet:**
   ```bash
   git diff <baseline-sha> -- recipe-authoring.md   # nye lærdommer
   git diff <baseline-sha> --stat                   # hva puljen rørte
   ```
   Les de nye lærdom-entries og de tre datafil-diffene.
2. **Klyngegjør friksjon.** For hvert mønster, tell hvor mange av de tre rettene
   det rammet:
   - **≥2 av 3** → sterkt signal (legitim utløser for motorendring — jf. regelen
     «aldri motoren for *én* rett», men et gjentakende behov er nettopp unntaket).
   - **1 av 3 + «fristet til å endre motoren»** → middels signal.
3. **Kategoriser hvert funn:**
   | Tag | Betyr | Standard handling |
   |-----|-------|-------------------|
   | `[MOTOR]` | motoren bør generaliseres | **STOPP, foreslå, spør** (AskUserQuestion) |
   | `[VALIDERING]` | manglende sjekk i build-recipe | **auto-fiks** (legg til sjekk-snutt) |
   | `[KONTRAKT]` | uklarhet i recipe-authoring.md | **auto-fiks** (presiser) |
   | `[RESEARCH]` | hull i research-recipe (data/bytter/FAQ) | **auto-fiks** (presiser steg) |
   | `[LOGG]` | ren notat-lærdom | allerede skrevet |
4. **Rangér** etter (frekvens × påvirkning), med konfidens.
5. **Handle (myndighet: auto-fiks trygt, spør på motor):**
   - `[VALIDERING]`/`[KONTRAKT]`/`[RESEARCH]`: implementér nå. Legg en validerings-
     snutt i `build-recipe` slik at feilklassen fanges neste gang; presiser kontrakt/
     research-steg der ordlyden sviktet. Commit som egen «retrospektiv»-commit.
   - `[MOTOR]`: **ikke** rør kjernekoden uoppfordret. Legg fram funnet + konkret
     forslag (hva, hvorfor, hvilke retter det rammet) via `AskUserQuestion`. Implementér
     bare etter ja. (Mønstereksempel: `celery`-taggen var inert fordi motoren bare
     kjente 6 allergener → ble til én felles `ALLERGENS`-liste + 14 grupper + ny
     valideringssjekk. Det er akkurat formen et godt `[MOTOR]`-funn har.)

## Steg 3 — backlog-vedlikehold (lett)
For hver rett som faktisk ble bygd, kryss av boksen i `plan.md` («Neste (prioritert)»):
`- [ ] Bouillabaisse` → `- [x] Bouillabaisse`. (Minimal vedlikehold så puljen ikke
plukker samme rett igjen — en fyldigere backlog-rutine er brukerens å lage senere.)
Commit sammen med retrospektiv-endringene.

## Steg 4 — merge-port (eneste menneskelige stopp)
Når alle tre er bygd, retrospektivet er kjørt og backlogen krysset av:
1. **Oppsummer** for brukeren: tre nye retter (slug + topp-søkeord), bildestatus
   (mangler foto?), rangert forbedringsliste (hva ble auto-fikset, hva venter på svar),
   og evt. `[MOTOR]`-forslag.
2. **Spør om merge** med `AskUserQuestion`: skal puljen (og bildene, når de finnes)
   merges til `main`? Husk: en «live» rett må ikke peke på et bilde som ikke er på
   `main` (se `ny-rett` Steg 4). Merge først etter ja.

## Merk
- Retrospektivet endrer **aldri** kjernemotoren uten eksplisitt ja — kun trygge
  skill/kontrakt-forbedringer er auto-fiks.
- Hver rett bygges på adapter-malen (kopi av `paella.html`), aldri statisk schema.
- Hold `recipe-authoring.md` og skill-ene i synk: en `[VALIDERING]`/`[KONTRAKT]`-fiks
  skal speiles i loggen så neste pulje ser at den er lukket.
