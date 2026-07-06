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

  /* Sesong-løft: retter med en `season` som matcher inneværende måned løftes
     øverst på forsiden (f.eks. jul i desember). Aldri skjuling – bare rekkefølge,
     og kun i sesong; ellers beholdes manifest-rekkefølgen. Generelt for alle
     retter (ingen rett-spesialtilfeller). */
  var SEASON_MONTH = { jan: 1, feb: 2, mar: 3, apr: 4, mai: 5, jun: 6,
                       jul: 7, aug: 8, sep: 9, okt: 10, nov: 11, des: 12 };
  function inSeason(r) {
    return !!(r.season && SEASON_MONTH[r.season] === (new Date().getMonth() + 1));
  }
  function seasonOrdered(entries) {
    var boosted = entries.filter(inSeason);
    if (!boosted.length) return entries;            // utenfor sesong: uendret
    return boosted.concat(entries.filter(function (r) { return !inSeason(r); }));
  }

  /* Retter uten bilde synker alltid til bunnen av rutenettet – nye retter som
     ennå ikke har fått et foto skal ikke ligge øverst. Stabil: rekkefølgen
     innenfor «med bilde» og «uten bilde» beholdes (så sesong-løftet står ved lag). */
  function imageOrdered(entries) {
    var withImg = entries.filter(function (r) { return !!r.image; });
    var noImg = entries.filter(function (r) { return !r.image; });
    return withImg.concat(noImg);
  }

  /* ---- Forsidens rutenett: render fra manifest + søk/kategorifilter ---- */
  function initHub() {
    var grid = document.getElementById("hub-grid");
    if (!grid || !window.RECIPES_INDEX) return;
    renderGrid(grid, imageOrdered(seasonOrdered(window.RECIPES_INDEX)));

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
    var entries = imageOrdered(window.RecipesIndex.byCategory(slug));
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

  /* ---- Oppskriftsintro: vis de første setningene, gjem resten bak «Les mer» ----
     Introen (`.recipe-intro`-avsnittene rett under heroen) er ofte tre avsnitt.
     Vi viser et kort teaser (de første setningene) som en naturlig fortsettelse
     av heroen, og legger resten i en sammenleggbar boks med en diskré toggle.
     All tekst blir liggende i DOM-en (bra for søk); vi skjuler bare visuelt.
     Trygt å kalle på alle sider: gjør ingenting uten `.recipe-intro`. */
  var INTRO_TEASER_SENTENCES = 2;   // antall setninger som alltid vises
  var INTRO_MIN_TAIL_CHARS = 80;    // ikke lag toggle for nesten ingenting

  function splitSentences(text) {
    var m = text.match(/[^.!?]+[.!?]+(?:\s|$)/g);
    return m ? m.map(function (s) { return s.trim(); }) : [text.trim()];
  }

  function initRecipeIntro() {
    var section = document.getElementById("oppskrift");
    if (!section) return;
    var intros = Array.prototype.slice.call(section.querySelectorAll(".recipe-intro"));
    if (!intros.length) return;

    // Samle alle setninger på tvers av avsnittene, men husk avsnittsgrensene.
    var paras = intros.map(function (p) { return splitSentences(p.textContent); });
    var total = paras.reduce(function (n, s) { return n + s.length; }, 0);

    // Bygg teaseren av de første setningene (kan gå over i avsnitt nr. 2 ved behov).
    var teaser = [], rest = [], taken = 0;
    paras.forEach(function (sentences) {
      var head = [], tail = [];
      sentences.forEach(function (s) {
        if (taken < INTRO_TEASER_SENTENCES) { head.push(s); taken++; }
        else { tail.push(s); }
      });
      if (head.length) teaser.push(head.join(" "));
      if (tail.length) rest.push(tail.join(" "));
    });

    var restText = rest.join("\n");
    // Ingenting (eller nesten ingenting) å skjule → la introen stå som den er.
    if (total <= INTRO_TEASER_SENTENCES || restText.length < INTRO_MIN_TAIL_CHARS) return;

    // Tøm de opprinnelige avsnittene og bygg teaser + sammenleggbar resten.
    var anchor = intros[0];
    intros.slice(1).forEach(function (p) { p.parentNode.removeChild(p); });
    anchor.textContent = teaser.join(" ");

    // «Les mer» legges inline til slutt i teaser-avsnittet.
    var lesBtn = document.createElement("button");
    lesBtn.type = "button";
    lesBtn.className = "recipe-intro-toggle";
    lesBtn.textContent = "Les mer";
    anchor.appendChild(lesBtn);

    // Resten av introen i en skjult beholder rett etter teaser-avsnittet.
    var more = document.createElement("div");
    more.className = "recipe-intro-more";
    more.hidden = true;
    rest.forEach(function (t, i) {
      var p = document.createElement("p");
      p.className = "recipe-intro";
      p.textContent = t;
      // «Vis mindre» legges inline til slutt i det siste avsnittet.
      if (i === rest.length - 1) {
        var visBtn = document.createElement("button");
        visBtn.type = "button";
        visBtn.className = "recipe-intro-toggle";
        visBtn.textContent = "Vis mindre";
        visBtn.addEventListener("click", function () {
          more.hidden = true;
          lesBtn.hidden = false;
        });
        p.appendChild(visBtn);
      }
      more.appendChild(p);
    });

    anchor.parentNode.insertBefore(more, anchor.nextSibling);

    lesBtn.addEventListener("click", function () {
      more.hidden = false;
      lesBtn.hidden = true;
    });
  }

  function init() { initHub(); initCategoryNav(); initCategoryPage(); initRecipeIntro(); }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
