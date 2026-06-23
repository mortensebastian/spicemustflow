/* Deterministisk bygger for build-recipe. Konsumerer recipes-pending/<slug>.json
   og produserer: <slug>-data.js + manifestoppføring i recipes-index.js +
   <slug>.html (fra adapter-malen) + sitemap.xml-linje.

   KJØR FRA REPO-ROTEN:
     node .claude/skills/build-recipe/build.js <slug> "<norsk header-kommentar>"

   Idempotent nok: hopper over manifest-/sitemap-innsetting hvis slug-en finnes.
   Etterpå: valider (build-recipe Steg 5), oppdater lærdom-loggen, arkiver staging,
   commit. Bilde håndteres separat (image:null til foto finnes). */
const fs = require('fs');
const slug = process.argv[2];
const headerComment = process.argv[3] || '';
if (!slug) throw new Error('Bruk: node .claude/skills/build-recipe/build.js <slug> "<header>"');

const staging = JSON.parse(fs.readFileSync(`recipes-pending/${slug}.json`, 'utf8'));
const ie = staging.indexEntry;
const R = staging.recipe;

/* ---------- 1) <slug>-data.js ---------- */
// Strip tomme tasteMessages-nøkler (en akse uten budskap skal utelates, ikke stå tom).
if (R.tasteMessages) {
  Object.keys(R.tasteMessages).forEach(k => { if (!R.tasteMessages[k]) delete R.tasteMessages[k]; });
}
// Feltrekkefølge som spagetti-kjottsaus-data.js (yieldNoun rett etter id).
const order = ['id','yieldNoun','recipes','swapOptions','servedAcid','density','pieceWeight',
               'unitOptions','bulkRoles','levers','requireRoles','tasteMessages','leverMessages'];
const ordered = {};
order.forEach(k => { if (R[k] !== undefined) ordered[k] = R[k]; });
Object.keys(R).forEach(k => { if (!(k in ordered)) ordered[k] = R[k]; });

const dataJs = `/* ===== ${ie.name} – datamodell =====
${headerComment}
   Generert fra recipes-pending/${slug}.json (build-recipe). Engelske id-er, norske labels. */

window.RECIPE = ${JSON.stringify(ordered, null, 2)};
`;
fs.writeFileSync(`${slug}-data.js`, dataJs);

/* ---------- 2) manifestoppføring i recipes-index.js ---------- */
const idx = fs.readFileSync('recipes-index.js', 'utf8');
if (idx.includes(`id: "${ie.id}"`)) {
  console.log('manifest: oppføring finnes alt, hopper over splice');
} else {
  const q = s => JSON.stringify(s);
  const t = ie.times;
  const lines = [];
  lines.push('  {');
  lines.push(`    id: ${q(ie.id)}, slug: ${q(ie.slug)}, status: ${q(ie.status || 'live')},`);
  lines.push(`    shortName: ${q(ie.shortName)}, name: ${q(ie.name)},`);
  lines.push(`    tagline: ${q(ie.tagline)},`);
  lines.push(`    description: ${q(ie.description)},`);
  lines.push(`    image: ${ie.image == null ? 'null' : q(ie.image)}, category: ${JSON.stringify(ie.category)}, badge: ${q(ie.badge || '3 nivåer')},`);
  lines.push(`    recipeCategory: ${q(ie.recipeCategory)}, cuisine: ${q(ie.cuisine)},`);
  if (ie.season) lines.push(`    season: ${q(ie.season)},`);
  lines.push(`    keywords: ${q(ie.keywords)},`);
  lines.push(`    recipeYield: ${q(ie.recipeYield)}, times: { prep: ${q(t.prep)}, cook: ${q(t.cook)}, total: ${q(t.total)} },`);
  lines.push(`    search: ${q(ie.search)},`);
  lines.push('    faq: [');
  ie.faq.forEach((f, i) => {
    const comma = i === ie.faq.length - 1 ? '' : ',';
    lines.push(`      { q: ${q(f.q)}, a: ${q(f.a)} }${comma}`);
  });
  lines.push('    ]');
  lines.push('  },');
  const entry = lines.join('\n') + '\n\n';
  const anchor = '  /* ── Kommer snart ── */';
  if (!idx.includes(anchor)) throw new Error('fant ikke «Kommer snart»-anker i recipes-index.js');
  fs.writeFileSync('recipes-index.js', idx.replace(anchor, entry + anchor));
  console.log('manifest: oppføring spleiset inn før «Kommer snart»');
}

/* ---------- 3) <slug>.html (fra adapter-malen) ---------- */
const base = R.recipes.medium ? R.recipes.medium.servings : (R.recipes[Object.keys(R.recipes)[0]].servings || 4);
// Skala-etikett: rett-spesifikt substantiv (yieldNoun), IKKE alltid «porsjoner».
const scaleNoun = R.yieldNoun || 'porsjoner';
const ogTitle = staging.seo.title.replace(/\s*\|\s*Velkomponert\s*$/, '');
const esc = s => s.replace(/"/g, '&quot;');
const introPs = staging.body.bodyIntro.split(/\n\n+/).map(p => `      <p class="recipe-intro">${p.trim()}</p>`).join('\n');
const maxY = Math.max(12, base * 2);

const html = `<!DOCTYPE html>
<html lang="nb">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${staging.seo.title}</title>
  <meta name="description" content="${esc(ie.description)}">
  <link rel="canonical" href="https://velkomponert.no/${slug}.html">

  <!-- Open Graph / deling -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Velkomponert">
  <meta property="og:title" content="${esc(ogTitle)}">
  <meta property="og:description" content="${esc(ie.description)}">
  <meta property="og:url" content="https://velkomponert.no/${slug}.html">
  <meta name="twitter:card" content="summary">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Hanken+Grotesk:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style-felles.css">

</head>

<!-- --recipe-image: legg et foto på bilder/${slug}.jpg så vises det øverst,
     sett image i manifestet tilbake til "${slug}.jpg", og krediter i footeren. -->
<body class="recipe-page" style="--recipe-image: url('bilder/${slug}.jpg');">

  <header class="site-header">
    <div class="container">
      <a class="logo" href="index.html">Velkomponert</a>
      <nav class="nav-links">
        <a href="index.html">Alle oppskrifter</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <h1>${ie.name}</h1>
      <p>${staging.body.heroIntro}</p>
    </div>
  </section>

  <section class="recipe" id="oppskrift">
    <div class="container">
${introPs}

      <div class="recipe-complexity">
        <span class="recipe-complexity-label">Nivå</span>
        <div id="complexity-selector" class="complexity-selector"></div>
      </div>

      <div class="recipe-scale">
        <label for="recipe-scale-input">Antall ${scaleNoun}</label>
        <div class="scale-controls">
          <button type="button" class="scale-button" id="scale-decrease" aria-label="Færre ${scaleNoun}">−</button>
          <input type="number" id="recipe-scale-input" value="${base}" min="2" max="${maxY}" step="2" data-base-yield="${base}">
          <button type="button" class="scale-button" id="scale-increase" aria-label="Flere ${scaleNoun}">+</button>
        </div>
      </div>

      <div id="diet-filter"></div>

      <div class="recipe-customize">
        <div id="precision-toggle"></div>
        <button type="button" id="reset-recipe" class="reset-recipe" style="display: none;">Tilbakestill</button>
      </div>

      <div id="recipe-messages" class="recipe-messages"></div>

      <div class="recipe-layout">
        <div>
          <h3>Ingredienser</h3>
          <ul class="recipe-ingredients" id="ingredient-list"></ul>
        </div>
        <div>
          <h3>Slik gjør du</h3>
          <ol class="recipe-steps" id="step-list"></ol>
        </div>
      </div>

      <div class="recipe-cta">
        <a class="recipe-cta-link" href="index.html">← Se alle oppskrifter</a>
      </div>

      <div id="saved-variants"></div>
      <div id="recipe-notes"></div>

    </div>
  </section>

  <!-- Vanlige spørsmål (rendres av recipe-schema.js fra manifestets faq). -->
  <section class="recipe-faq">
    <div class="container"><div id="recipe-faq"></div></div>
  </section>

  <!-- Relaterte oppskrifter (fra manifestet). -->
  <section class="related-section">
    <div class="container"><div id="related-recipes"></div></div>
  </section>

  <footer class="site-footer">
    <div class="container">
      <p>Velkomponert – gode oppskrifter, trinn for trinn.</p>
    </div>
  </footer>

  <!-- Rekkefølge: data → omregning (RecipeUnits) → balanse (RecipeBalance) → adapter. -->
  <script src="${slug}-data.js"></script>
  <script src="recipe.js"></script>
  <script src="recipe-balance.js"></script>
  <script src="recipe-adapter.js"></script>
  <!-- Manifest + delte hjelpere + schema-generator (Recipe/BreadcrumbList/FAQPage). -->
  <script src="recipes-index.js"></script>
  <script src="site.js"></script>
  <script src="recipe-schema.js"></script>
  <script src="consent.js"></script>
</body>
</html>
`;
fs.writeFileSync(`${slug}.html`, html);

/* ---------- 4) sitemap.xml ---------- */
let sm = fs.readFileSync('sitemap.xml', 'utf8');
if (!sm.includes(`/${slug}.html<`)) {
  const today = new Date().toISOString().slice(0, 10);
  const url = `  <url><loc>https://velkomponert.no/${slug}.html</loc><lastmod>${today}</lastmod></url>\n`;
  fs.writeFileSync('sitemap.xml', sm.replace('</urlset>', url + '</urlset>'));
  console.log('sitemap: linje lagt til');
} else {
  console.log('sitemap: linje finnes alt');
}

console.log(`FERDIG ${slug}: base-yield=${base}, yieldNoun="${scaleNoun}", intro-avsnitt=${introPs.split('<p').length - 1}, faq=${ie.faq.length}`);
