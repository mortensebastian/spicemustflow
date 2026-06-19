# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A recipe website built with **plain HTML, CSS and JavaScript — no framework, no
build step, no package manager, no tests**. Open the `.html` files directly in a
browser to run it. There is nothing to compile or install.

Comments and user-facing text are in **Norwegian**; variable/function names are
in **English**.

## Product direction (updated June 2026)

This is a **recipe site with ad revenue**. The goal is to build a library of
high-quality Norwegian recipes, drive organic search traffic, and monetise via
display advertising. The site is called **Velkomponert** (domain: `velkomponert.no`,
TBD). The shop/saffron-sales infrastructure has been removed. AI chat is a cost,
not revenue — defer until traffic is proven. See `plan.md` for the roadmap.

**Target architecture:** one domain (`velkomponert.no`) with a **recipe hub**
(`index.html`) and **one subpage per recipe** (`paella.html`, `fiskesuppe.html`,
…) — NOT one domain per recipe (splits SEO authority). `index.html` is the recipe
hub. Vanity domains, if bought, should 301-redirect to the subpage.

## The recipe engine (the main active product)

The active product is the recipe hub (`index.html`) and individual recipe pages.
Each recipe page uses the shared engine:

- `recipe.js` — unit conversion and scaling (`window.RecipeUnits`)
- `recipe-balance.js` — taste balance engine (`window.RecipeBalance`)
- `recipe-adapter.js` — reads `window.RECIPE` config from a per-recipe data file
  and renders complexity selector, portioning, swap/remove controls, allergen
  filter, precision toggle, saved variants, and notes.
- `<rett>-data.js` — pure data file per recipe, exports `window.RECIPE`

`lussekatter.html` uses the older `recipe.js` scaler directly (static HTML
ingredients with `data-amount`/`data-unit` attributes) — it has not been migrated
to `recipe-adapter.js`.

## Script load order matters

Recipe pages (paella, fiskesuppe, etc.) load scripts in this order:
`<rett>-data.js` → `recipe.js` → `recipe-balance.js` → `recipe-adapter.js`.

These are plain `<script>` tags sharing global scope (no modules/imports), so a
function or `const` defined in one file is available to the next. Preserve this
order when editing HTML.

## localStorage (user data, no backend)

Recipe pages persist user data in localStorage — no login, no server:

- `savedRecipes` — JSON array of saved recipe variants (all recipes combined).
  Each entry: `{ id, recipeId, recipeName, label, complexity, portions, swaps,
  removed, allergens, savedAt }`. Managed by `recipe-adapter.js`.
- `recipeNotes:<recipeId>` — freetext notes per recipe (e.g. `recipeNotes:paella`).
  Auto-saved on input (500 ms debounce). Managed by `recipe-adapter.js`.

`index.html` reads `savedRecipes` via an inline `<script>` and renders a
"Mine varianter" section if any entries exist.

## CSS layering

`style-felles.css` holds shared structure/layout (loaded by every page).
`style-lussekatter.css` holds the lussekatter Christmas theme (green/gold) and is
only loaded by `lussekatter.html`.

## Planning & roadmap docs

- `plan.md` — strategy, recipe roadmap, and SEO checklist.
- `recipe-authoring.md` — how to author a new recipe data file (allergen tagging,
  scaling, taste balance, precision toggle).
