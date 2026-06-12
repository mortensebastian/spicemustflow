# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A small saffron/spice web shop built with **plain HTML, CSS and JavaScript — no
framework, no build step, no package manager, no tests**. Open the `.html` files
directly in a browser to run it. There is nothing to compile or install.

Comments and user-facing text are in **Norwegian**; variable/function names are
in **English**.

## Product direction (decided June 2026)

This is a **recipe-led saffron site**. The lussekatter recipe (and, later, other
saffron dishes like paella/risotto to reduce seasonality) is free content that
pulls in search traffic; **selling saffron is the intended primary revenue**, and
the recipe is the main sales tool for it (internal links recipe → product). Ads
are at best a *later bonus* (needs large, steady traffic), and an AI cooking-chat
feature is a *cost, not revenue* — defer both until traffic is proven. Don't build
the business around ads or AI chat. See `plan.md` for the full strategy and roadmap.

**Target architecture (being built toward):** one domain with a **recipe hub** and
**one subpage per recipe** (`/paella`, `/risotto`, …) — NOT one domain per recipe
(splits SEO authority). Vanity domains, if bought, should 301-redirect to the
subpage. Each recipe page reuses `recipe.js` and links to the shop. Note
`recipe.js` currently hardcodes `BASE_COUNT = 24` (lussekatter buns); this must
become configurable (e.g. a `data-base-yield` attribute) before other recipes can
reuse the scaler. The recipe markup in `lussekatter.html` is the template to
generalize. See `plan.md` → "Utviklingsplan for oppskriftssidene".

## The single most important concept: two storefronts, one engine

The shop presents **two fronts that share one codebase**:

- **SpiceFlow** (`spiceflow.html`, `data-storefront="hverdag"`) — everyday shop, light theme.
- **Lussekatter** (`lussekatter.html`, `data-storefront="lussekatter"`) — Christmas shop, premium green/gold theme, and it also hosts a scalable recipe.

`index.html` is a landing page that just links to the two fronts.

How a front knows which products to show: `<body data-storefront="...">` is read
by `shop.js`. A product appears on a front if its `storefront` field matches, or
is `"begge"` (both). All product data lives in **one place**: `products.js`.

## The on/off switch (read this before changing front behavior)

`config.js` has `orderingEnabled`:

- `false` (current state) → products and cart are **hidden**; `waitlist.js` shows
  an email signup form instead (submitted to Web3Forms). The shop runs "in the
  background", intentionally not yet shoppable.
- `true` → normal shop: `shop.js` renders products, cart is active.

Every page's startup code checks this flag and branches. When changing how a
front behaves, account for **both** states. `waitlistAccessKey` in `config.js` is
still a placeholder — the waitlist will not deliver until a real key is added.

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
