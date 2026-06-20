/* ===== Velkomponert – delte UI-hjelpere =====
   Rendrer oppskriftskort fra manifestet (recipes-index.js), wirer søk/filter på
   forsiden, og bygger kategorisidene. Lastes av index.html og kategorisidene.
   Trygt å laste på en oppskriftsside også (alt er vokta av at containere finnes). */
(function () {
  "use strict";

  var BASE = "https://velkomponert.no";
  window.VK_BASE = BASE;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* Markup for ett kort – speiler det håndskrevne i index.html (samme CSS/filter). */
  function cardHtml(r) {
    var cats = (r.category || []).join(" ");
    var chip = "";
    var primary = (r.category || [])[0];
    if (primary && window.RecipesIndex) {
      var c = window.RecipesIndex.categoryBySlug(primary);
      chip = c ? c.label : primary;
    }
    var media = r.image
      ? '<img src="bilder/' + esc(r.image) + '" alt="' + esc(r.name) + '" loading="lazy">'
      : '<div class="recipe-card-noimg">' + esc(r.shortName || r.name) + '</div>';

    var body =
      '<div class="recipe-card-media">' + media + '</div>' +
      '<div class="recipe-card-body">' +
        '<h2>' + esc(r.shortName || r.name) + '</h2>' +
        '<div class="recipe-card-meta">' +
          '<span class="recipe-card-chip">' + esc(chip) + '</span>' +
          (r.status === "soon"
            ? '<span class="recipe-card-soon-badge">Kommer snart</span>'
            : '<span class="recipe-card-levels">' + esc(r.badge || "3 nivåer") + '</span>') +
        '</div>' +
        '<p>' + esc(r.tagline || r.description || "") + '</p>' +
      '</div>';

    var attrs = 'data-kategori="' + esc(cats) + '" data-navn="' + esc(r.search || (r.shortName || "").toLowerCase()) + '"';
    if (r.status === "soon") {
      return '<div class="recipe-card is-soon" ' + attrs + '>' + body + '</div>';
    }
    return '<a class="recipe-card" href="' + esc(r.slug) + '" ' + attrs + '>' + body + '</a>';
  }
  window.vkCardHtml = cardHtml;

  /* Rendrer en liste kort inn i en container (før et eventuelt #hub-empty). */
  function renderGrid(container, entries) {
    if (!container) return;
    var html = entries.map(cardHtml).join("");
    var empty = container.querySelector(".hub-empty");
    if (empty) empty.insertAdjacentHTML("beforebegin", html);
    else container.insertAdjacentHTML("afterbegin", html);
  }
  window.vkRenderGrid = renderGrid;

  /* Injiserer et JSON-LD-objekt i <head>. */
  function injectJsonLd(obj) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.textContent = JSON.stringify(obj, null, 2);
    document.head.appendChild(s);
  }
  window.vkInjectJsonLd = injectJsonLd;

  /* ---- Forsidens rutenett: render fra manifest + søk/kategorifilter ---- */
  function initHub() {
    var grid = document.getElementById("hub-grid");
    if (!grid || !window.RECIPES_INDEX) return;
    renderGrid(grid, window.RECIPES_INDEX);

    var cards = Array.prototype.slice.call(grid.querySelectorAll(".recipe-card"));
    var catBtns = document.querySelectorAll(".hub-cat-btn");
    var search = document.getElementById("hub-search");
    var empty = document.getElementById("hub-empty");
    var activeCat = "alle";

    function apply() {
      var q = (search && search.value || "").trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (card) {
        var catList = (card.getAttribute("data-kategori") || "").split(" ");
        var navn = card.getAttribute("data-navn") || "";
        var matchCat = activeCat === "alle" || catList.indexOf(activeCat) !== -1;
        var matchSearch = !q || navn.indexOf(q) !== -1;
        var show = matchCat && matchSearch;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (empty) empty.style.display = visible ? "none" : "";
    }

    catBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        catBtns.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        activeCat = btn.getAttribute("data-cat");
        apply();
      });
    });
    if (search) search.addEventListener("input", apply);
  }

  /* ---- Kategori-lenker på forsiden ---- */
  function initCategoryNav() {
    var nav = document.getElementById("hub-category-links");
    if (!nav || !window.RECIPE_CATEGORIES) return;
    nav.innerHTML = window.RECIPE_CATEGORIES.map(function (c) {
      return '<a class="hub-cat-link" href="' + c.slug + '.html">' + esc(c.label) + '</a>';
    }).join("");
  }

  /* ---- Kategoriside: render filtrert rutenett + breadcrumb + ItemList ---- */
  function initCategoryPage() {
    var grid = document.getElementById("cat-grid");
    if (!grid || !window.RecipesIndex) return;
    var slug = grid.getAttribute("data-cat");
    var cat = window.RecipesIndex.categoryBySlug(slug);
    var entries = window.RecipesIndex.byCategory(slug);
    renderGrid(grid, entries);

    if (cat) {
      injectJsonLd({
        "@context": "https://schema.org/",
        "@type": "CollectionPage",
        "name": cat.title,
        "description": cat.description,
        "url": BASE + "/" + slug + ".html",
        "inLanguage": "nb-NO",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": entries.filter(function (r) { return r.status !== "soon"; })
            .map(function (r, i) {
              return { "@type": "ListItem", "position": i + 1,
                       "name": r.name, "url": BASE + "/" + r.slug };
            })
        }
      });
      injectJsonLd({
        "@context": "https://schema.org/",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Hjem", "item": BASE + "/" },
          { "@type": "ListItem", "position": 2, "name": cat.label, "item": BASE + "/" + slug + ".html" }
        ]
      });
    }
  }

  function init() { initHub(); initCategoryNav(); initCategoryPage(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
