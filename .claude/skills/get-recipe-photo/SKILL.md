---
name: get-recipe-photo
description: Hent et gratis, lovlig rett-bilde fra Pexels (eller Unsplash) og legg det inn som bilder/<slug>.jpg med diskret fotokreditering. Bruk når brukeren sier «hent bilde av <rett>», «finn et foto til <slug>», «get recipe photo <rett>». Krever at bilde-vertene er allowlistet i miljøet og en API-nøkkel i miljøvariabel.
---

# get-recipe-photo

Henter ÉTT pent, høyoppløst og **lovlig (kommersiell bruk OK)** matfoto til en
oppskriftsside, lagrer det som `bilder/<slug>.jpg`, og krediterer fotografen
diskret i footeren – samme mønster som paella/kjøttkaker/safranrisotto.

> Skillen endrer kun bildefila + (valgfritt) footer-kreditt og `og:image`.
> Den rører ikke motoren, dataene eller manifestet utover `indexEntry.image`.

## Forutsetninger (sjekk FØRST – feiler ellers med 403)
1. **Allowlistede verter** i miljøets egress-policy:
   - Pexels: `api.pexels.com` + `images.pexels.com`
   - (alt.) Unsplash: `api.unsplash.com` + `images.unsplash.com`
2. **API-nøkkel** som miljøvariabel (gratis å registrere):
   - `PEXELS_API_KEY` (primær) – https://www.pexels.com/api/
   - `UNSPLASH_ACCESS_KEY` (reserve) – https://unsplash.com/developers

Mangler verten eller nøkkelen → **stopp** og be brukeren (a) allowliste verten i
miljøinnstillingene og (b) sette nøkkelen som miljøvariabel. Reserveløsning uten
nettverk: brukeren laster bildet opp til GitHub, og du navngir/kobler det (som vi
gjorde manuelt før denne skillen fantes).

## Inndata
Rett-navn og/eller slug. Mangler slug → utled bar ASCII-slug (ingen æøå), eller
slå opp i `recipes-index.js` på rett-navnet. Bildet skal hete `<slug>.jpg`.

## Steg 1 – søk (Pexels primær)
Bruk et **engelsk** matsøkeord (gir flest treff), gjerne presist for retten
(«meatballs gravy», «saffron risotto», «norwegian pancakes»). Foretrekk liggende
format og stor størrelse:

```
curl -sS "https://api.pexels.com/v1/search?query=<URL-enkodet>&orientation=landscape&size=large&per_page=15" \
  -H "Authorization: $PEXELS_API_KEY"
```

Parse JSON. Relevante felt per treff: `src.original` (last NED denne, ligger på
`images.pexels.com`), `photographer`, `photographer_url`, `width`/`height`, `alt`.
Velg et treff som faktisk viser **retten** (les `alt`/url), helst ≥ 2000 px bredt.

Reserve (Unsplash) hvis Pexels mangler/ikke gir treff:
```
curl -sS "https://api.unsplash.com/search/photos?query=<q>&orientation=landscape&per_page=15" \
  -H "Authorization: Client-ID $UNSPLASH_ACCESS_KEY"
```
Felt: `results[].urls.full` (på `images.unsplash.com`), `results[].user.name`,
`results[].links.download_location`. **Unsplash krever** at du etter nedlasting
kaller `download_location` (samme Client-ID-header) – gjør det for å være ToS-lovlig.

## Steg 2 – last ned og verifiser
```
curl -sS -L "<valgt src.original eller urls.full>" -o "bilder/<slug>.jpg"
file "bilder/<slug>.jpg"   # MÅ si «JPEG image data …»; ellers fikk du en 403/HTML-feil
```
Får du `ASCII text`/«Host not in allowlist» → verten er ikke allowlistet, stopp og
meld fra. Sjekk at dimensjonene passer retten (portrett/landskap stemmer med motivet).

## Steg 2b – optimaliser (obligatorisk, ikke commit råfila)
Pexels/Unsplash-originalen er gjerne 6000–7000 px / 3–4 MB. `ny-rett`-kontrakten
(og Core Web Vitals) krever **1920 px lang side, < 400 KB, EXIF strippet** – samme
konvensjon som de øvrige bildene i `bilder/`. Last ned originalen til
**scratchpad**, optimaliser, og kopier først den ferdige fila til `bilder/<slug>.jpg`.

**Verktøy-fallback:** miljøet har ofte verken `convert`/ImageMagick, `cwebp` eller
`vips` (sjekk med `which convert magick cwebp vips`), og PIL/`sharp` er ikke
forhåndsinstallert. Da: `npm install sharp` **i scratchpad-mappa** (ikke i repoet –
det skal være dependency-fritt; `registry.npmjs.org` er i `noProxy` så det går uten
allowlisting), og kjør:
```bash
node -e 'const s=require("sharp");s("<scratchpad>/raw.jpg").rotate()
  .resize({width:1920,withoutEnlargement:true}).jpeg({quality:82,mozjpeg:true})
  .toFile("<scratchpad>/opt.jpg").then(i=>console.log(i.width+"x"+i.height));'
```
`.rotate()` (uten arg) baker inn EXIF-orientering før metadata strippes; `sharp`
dropper EXIF/ICC automatisk. Verifiser < 400 KB og gyldig JPEG, kopier så til
`bilder/<slug>.jpg`. (~211 KB på første kalkun-forsøk.)

## Steg 3 – kreditering (diskret, samme mønster som i dag)
I `<slug>.html`, i footeren rett etter
`<p>Velkomponert – gode oppskrifter, trinn for trinn.</p>`, legg:
```html
<p class="photo-credit">Foto: <Fotografnavn> (<Pexels|Unsplash>)</p>
```
`.photo-credit` finnes alt i `style-felles.css`. Oppdater også `og:image`/`twitter:image`
til `https://velkomponert.no/bilder/<slug>.jpg` hvis de mangler. Sett
`indexEntry.image` = `<slug>.jpg` i `recipes-index.js` om den var `null`.

## Steg 4 – valider
- [ ] `file bilder/<slug>.jpg` = gyldig JPEG (ikke HTML/feilmelding)
- [ ] Optimalisert (Steg 2b): ~1920 px lang side, **< 400 KB**, EXIF strippet
- [ ] Motivet er **riktig rett** og bildet er skarpt/høyoppløst
- [ ] Lisens tillater kommersiell bruk (Pexels/Unsplash: ja) – krediter likevel diskret
- [ ] Footer-kreditt lagt til; `og:image` peker på fila; `indexEntry.image` satt
- [ ] (Unsplash) `download_location` kalt

## Etterpå
Oppsummer: hvilken rett, fotograf/kilde, filsti, og om `og:image`/`indexEntry.image`
ble oppdatert. Commit + push. Bildet i `bilder/` skal være den optimaliserte
web-versjonen fra Steg 2b (1920 px, < 400 KB) – commit aldri fleremegabyte-råfila.
