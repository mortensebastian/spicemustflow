/* Validerer at sitemap.xml er i synk med oppskriftsmanifestet (recipes-index.js)
   og at hver lenke peker på en fil som finnes. Kjøres av GitHub Action ved push
   til main, så en ny rett aldri kan bli "live" uten å være korrekt i sitemapet. */
const fs = require("fs");
const path = require("path");

const BASE = "https://velkomponert.no/";
global.window = {};
require(path.join(process.cwd(), "recipes-index.js"));
const recipes = window.RECIPES_INDEX || [];
const sitemap = fs.readFileSync("sitemap.xml", "utf8");
const errors = [];

// 1) Hver LIVE oppskrift må ligge i sitemapet og ha en HTML-fil.
let liveCount = 0;
for (const r of recipes) {
  if (r.status !== "live") continue;
  liveCount++;
  const loc = BASE + r.slug;
  if (!sitemap.includes("<loc>" + loc + "</loc>")) errors.push("Mangler i sitemap.xml: " + loc + " (" + r.id + ")");
  if (!fs.existsSync(r.slug)) errors.push("HTML-fil finnes ikke: " + r.slug + " (" + r.id + ")");
}

// 2) Hver <loc> i sitemapet må peke på en fil som finnes (fanger døde lenker).
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
for (const loc of locs) {
  if (!loc.startsWith(BASE)) { errors.push("Uventet loc (ikke velkomponert.no): " + loc); continue; }
  let file = loc.slice(BASE.length);
  if (file === "" || file.endsWith("/")) file += "index.html";
  if (!fs.existsSync(file)) errors.push("sitemap peker på fil som ikke finnes: " + loc + " -> " + file);
}

if (errors.length) {
  console.error("SITEMAP-VALIDERING FEILET:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log("OK: " + liveCount + " live oppskrifter er i sitemap og har HTML-fil; alle " + locs.length + " sitemap-lenker peker på filer som finnes.");
