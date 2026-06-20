/* ===== Velkomponert – schema-generator for oppskriftssider =====
   Bygger Recipe-, BreadcrumbList- og (om retten har spørsmål) FAQPage-JSON-LD fra
   <rett>-data.js (window.RECIPE) + manifestet (recipes-index.js), og injiserer dem
   i <head>. Da finnes schema alltid og kan aldri komme i utakt med dataene –
   uansett hvor mange retter. Den synlige FAQ-en rendres fra samme faq-liste i
   manifestet (inn i <div id="recipe-faq">), så schema og tekst alltid samsvarer.

   Speiler «medium»-varianten (standardvalget på siden). Lussekatter har egen,
   statisk schema og laster ikke denne (den bruker ikke window.RECIPE).

   Lastes etter recipe-adapter.js, recipes-index.js og site.js. */
(function () {
  "use strict";

  var BASE = (typeof window !== "undefined" && window.VK_BASE) || "https://velkomponert.no";

  function fmtAmount(a) {
    var n = Math.round(Number(a) * 100) / 100;
    return String(n).replace(".", ",");
  }

  function ingredientLine(ing) {
    var amt = fmtAmount(ing.amount);
    if (ing.unit === "stk") return amt + " " + ing.label;
    return amt + " " + ing.unit + " " + ing.label;
  }

  function escHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function defaultVariant(recipe) {
    var r = recipe.recipes || {};
    return r.medium || r.standard || r[Object.keys(r)[0]];
  }

  /* Pure: bygg Recipe-JSON-LD fra dataobjekt + manifestoppføring. */
  function buildRecipeLd(recipe, meta) {
    var v = defaultVariant(recipe);
    var ld = {
      "@context": "https://schema.org/",
      "@type": "Recipe",
      "name": meta.name,
      "description": meta.description,
      "recipeCategory": meta.recipeCategory,
      "recipeCuisine": meta.cuisine,
      "keywords": meta.keywords,
      "recipeYield": meta.recipeYield
    };
    if (meta.image) ld.image = [BASE + "/bilder/" + meta.image];
    if (meta.times) {
      if (meta.times.prep) ld.prepTime = meta.times.prep;
      if (meta.times.cook) ld.cookTime = meta.times.cook;
      if (meta.times.total) ld.totalTime = meta.times.total;
    }
    ld.recipeIngredient = (v.ingredients || []).map(ingredientLine);
    ld.recipeInstructions = (v.steps || []).map(function (s) {
      return { "@type": "HowToStep", "text": s };
    });
    return ld;
  }

  /* Pure: bygg BreadcrumbList (Hjem › Kategori › Rett). */
  function buildBreadcrumbLd(meta, category) {
    var items = [
      { "@type": "ListItem", "position": 1, "name": "Hjem", "item": BASE + "/" }
    ];
    if (category) {
      items.push({ "@type": "ListItem", "position": 2, "name": category.label,
                   "item": BASE + "/" + category.slug + ".html" });
    }
    items.push({ "@type": "ListItem", "position": items.length + 1,
                 "name": meta.name, "item": BASE + "/" + meta.slug });
    return { "@context": "https://schema.org/", "@type": "BreadcrumbList",
             "itemListElement": items };
  }

  /* Pure: bygg FAQPage-JSON-LD fra manifestets faq-liste (kan være tom). */
  function buildFaqLd(faq) {
    return {
      "@context": "https://schema.org/",
      "@type": "FAQPage",
      "mainEntity": (faq || []).map(function (item) {
        return {
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": { "@type": "Answer", "text": item.a }
        };
      })
    };
  }

  function inject(obj) {
    if (window.vkInjectJsonLd) return window.vkInjectJsonLd(obj);
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(obj, null, 2);
    document.head.appendChild(s);
  }

  /* «Relaterte oppskrifter» – samme kategori, live, maks 3. */
  function renderRelated(meta) {
    var host = document.getElementById("related-recipes");
    if (!host || !window.RecipesIndex || !window.vkCardHtml) return;
    var primary = (meta.category || [])[0];
    if (!primary) return;
    var related = window.RecipesIndex.byCategory(primary).filter(function (r) {
      return r.id !== meta.id && r.status !== "soon";
    }).slice(0, 3);
    if (!related.length) return;
    host.innerHTML =
      '<h2 class="related-title">Relaterte oppskrifter</h2>' +
      '<div class="hub-grid related-grid">' + related.map(window.vkCardHtml).join("") + '</div>';
  }

  /* Synlig FAQ fra manifestet – samme kilde som FAQPage-schema, så de aldri
     kommer i utakt. Rendres kun hvis siden har en <div id="recipe-faq"> og
     retten har spørsmål. */
  function renderFaq(meta) {
    var host = document.getElementById("recipe-faq");
    if (!host || !meta.faq || !meta.faq.length) return;
    host.innerHTML =
      '<h2 class="section-title">Vanlige spørsmål</h2>' +
      '<div class="faq-list">' +
      meta.faq.map(function (item) {
        return '<details class="faq-item"><summary>' + escHtml(item.q) +
               '</summary><p>' + escHtml(item.a) + '</p></details>';
      }).join("") + '</div>';
  }

  function run() {
    if (!window.RECIPE || !window.RecipesIndex) return;
    var meta = window.RecipesIndex.byId(window.RECIPE.id);
    if (!meta || meta.schema === "static") return;
    var category = window.RecipesIndex.categoryBySlug((meta.category || [])[0]);
    inject(buildRecipeLd(window.RECIPE, meta));
    inject(buildBreadcrumbLd(meta, category));
    if (meta.faq && meta.faq.length) inject(buildFaqLd(meta.faq));
    renderFaq(meta);
    renderRelated(meta);
  }

  if (typeof window !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", run);
    } else {
      run();
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { buildRecipeLd: buildRecipeLd, buildBreadcrumbLd: buildBreadcrumbLd,
                       buildFaqLd: buildFaqLd, ingredientLine: ingredientLine };
  }
})();
