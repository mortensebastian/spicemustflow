# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A small saffron/spice web shop built with **plain HTML, CSS and JavaScript — no
framework, no build step, no package manager, no tests**. Open the `.html` files
directly in a browser to run it. There is nothing to compile or install.

Comments and user-facing text are in **Norwegian**; variable/function names are
in **English**.

## Product direction (updated June 2026)

This is a **recipe site with ad revenue**. The goal is to build a library of
high-quality Norwegian recipes, drive organic search traffic, and monetise via
display advertising. Saffron sales have been dropped as a focus. AI chat is a
cost, not revenue — defer until traffic is proven. See `plan.md` for the roadmap.

**Target architecture:** one domain (TBD) with a **recipe hub** (`index.html`)
and **one subpage per recipe** (`/paella`, `/risotto`, …) — NOT one domain per
recipe (splits SEO authority). `index.html` is the recipe hub. Vanity domains, if
bought, should 301-redirect to the subpage. SpiceFlow/handlekurv exist in the
repo but are not linked from `index.html` and are not part of the active product.

## The recipe engine (the main active product)

The active product is the recipe hub (`index.html`) and individual recipe pages.
Each recipe page uses the shared engine:

- `recipe.js` — unit conversion and scaling (window.RecipeUnits)
- `recipe-balance.js` — taste balance engine (window.RecipeBalance)
- `recipe-adapter.js` — reads `window.RECIPE` config from a per-recipe data file
  and renders complexity selector, portioning, swap/remove controls, allergen
  filter, precision toggle, saved variants, and notes.
- `<rett>-data.js` — pure data file per recipe, exports `window.RECIPE`

SpiceFlow (`spiceflow.html`) and the cart/checkout infrastructure remain in the
repo but are **inactive and not linked** from the recipe hub.

## localStorage (user data, no backend)

Recipe pages persist user data in localStorage — no login, no server:

- `savedRecipes` — JSON array of saved recipe variants (all recipes combined).
  Each entry: `{ id, recipeId, recipeName, label, complexity, portions, swaps,
  removed, allergens, savedAt }`. Managed by `recipe-adapter.js`.
- `recipeNotes:<recipeId>` — freetext notes per recipe (e.g. `recipeNotes:paella`).
  Auto-saved on input (500 ms debounce). Managed by `recipe-adapter.js`.

`index.html` reads `savedRecipes` via an inline `<script>` and renders a
"Mine varianter" section if any entries exist.

## Script load order matters

Pages load scripts in this order, and later files depend on earlier ones:
`config.js` → `products.js` → `cart.js` → `shop.js` → `waitlist.js` → `recipe.js`.
These are plain `<script>` tags sharing global scope (no modules/imports), so a
function or `const` defined in one file is available to the next. Preserve this
order when editing HTML.

## The shared cart

`cart.js` is the cart engine used by both fronts and the checkout page. It
persists to `localStorage` under key `saffronCart`, storing only `{id, quantity}`
— product details (name, price) are looked up from `products.js` by id at render
time. All pages that show a cart count expect an element `id="cart-count"`.

## The checkout page chooses its theme from the URL

`handlekurv.html` is **one shared page** for both fronts. The link to it carries a
marker, e.g. `handlekurv.html?butikk=lussekatter`. `handlekurv.js` reads
`?butikk=` and injects the correct theme CSS (`style-lussekatter.css` or
`style-spiceflow.css`) into `<head>` at runtime, then sets the store name and
back-link. Default/fallback is the `hverdag` (SpiceFlow) theme.

## CSS layering

`style-felles.css` holds shared structure/layout (loaded by every page). Each
front then loads its theme file (`style-spiceflow.css` / `style-lussekatter.css`)
which mostly sets colors and fonts via CSS variables. `style-lussekatter.css` also
styles the recipe.

## The recipe scaler (lussekatter only)

`recipe.js` powers the ingredient scaler on `lussekatter.html`. Each ingredient
`<li>` carries `data-amount`/`data-unit` (values for the base batch of **24**
buns) and optional `data-density` (g per ml) to convert between volume (dl/ss/ts)
and weight (g). Changing the count or an ingredient's unit dropdown recomputes
from the 24-bun base. If you add/edit ingredients, keep these data attributes
consistent or scaling breaks.

## Planning & roadmap docs

- `README.md` — overview, how to add a product, and a roadmap (payment, waitlist
  vs. database, repo structure, SEO basics).
- `plan.md` — the SEO strategy and phased implementation checklist.

Keep both single repo for now: the whole point is that the two fronts *share*
`cart.js`/`products.js`. Don't split into separate repos until they stop sharing
the engine (see README → "Struktur og repoer").
