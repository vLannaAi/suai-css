# Stage 1 → `--su-*` migration & no-JS attribute-driven theming

**Date:** 2026-07-16
**Status:** Design — awaiting review
**Scope owner:** suai-css (this repo)
**Relates to:** SP-1 token freeze ([suai#1](https://github.com/vLannaAi/suai-css/issues/1)), docs sweep ([suai#3](https://github.com/vLannaAi/suai-css/issues/3))

## 1. Problem (observed, not assumed)

The Stage 1 (`suai-html`) demos are visibly broken and, more seriously, the framework's headline claims are false in the current build. Evidence captured with Playwright against the live demo server (`http://localhost:8877`):

- **Theming is 100% JavaScript-dependent.** On `3.form.html`, the three theme stylesheets (`pla-fonts.css`, `pla-base.css`, `pla-light-vars.css`) are **injected at runtime by `theme-demo.js`** (they carry the `data-suai-theme` marker attribute). Removing those injected `<link>`s — simulating a no-JS visitor, an email client, or SSR before hydration — leaves **every `--suai-*` variable undefined** (`--suai-primary`, `--suai-text`, `--suai-surface` all resolve to empty), `body` background transparent, text default black.
  - `assets/baseline-02-form-withJS.png` — fully styled (JS ran).
  - `assets/baseline-03-form-noJS-collapse.png` — same page, JS-injected links removed: total collapse to unstyled black-on-white.
- **No theme switcher exists on 5 of 6 pages.** Only `2.display.html` calls `suaiSet()`. Every page loads `theme-demo.js` (exposing `window.suaiSet()`, auto-initialising to `pla`/`light`) but renders **zero switcher controls** (`querySelectorAll('[onclick*="suaiSet"]').length === 0`). "No theme change" is literal: there is no control.
- **Dead nav markers.** Each page's own nav entry is a bare `<a>…</a>` with no `href` — a "you are here" marker that reads as a broken link.

This directly contradicts the README's "Zero JavaScript / SSR Perfect / Email Compatible" claims. Stage 1 cannot currently prove the one thing it exists to prove.

Two token systems are also live and incompatible: Stage 1 uses legacy `--suai-*` (scoped by `data-theme`/`data-mode`); Stage 2 (`suai-css/`) uses the canonical `--su-*` contract (scoped by `data-su-theme`/`data-su-mode`). The Speed skin exists only in `--su-*`.

## 2. Goal & success criteria

Migrate Stage 1 onto the `--su-*` contract, unify all four skins (pla / nok / maa / speed) under one attribute-driven mechanism, and rebuild the demos so they are **fully styled with zero JavaScript** and switch skin+mode via a progressive-enhancement toggle.

**Done when:**
1. With JavaScript disabled, every demo page renders fully styled in the default skin (`pla`/`light`); hand-editing `data-su-theme` / `data-su-mode` in devtools reskins live with no JS.
2. With JavaScript enabled, the switcher reskins all **4 skins × 2 modes** (8 states); reload preserves the choice.
3. `grep -rE '\-\-suai-' suai-html/` returns **zero** variable references.
4. All four skins are visually distinct across all six element pages, screenshot-verified.
5. No console errors on any page (favicon 404 excepted or fixed).

**Explicitly out of scope:** redesigning how pla/nok/maa *look* (re-express current identities in `--su-*`, do not restyle); the Nuxt "matrix showcase" harness (deferred — this migration is the foundation it will sit on); Stage 3/4.

## 3. Architecture — four layers, one source of truth

A skin is defined **once** and consumed by both stages.

| Layer | File(s) | Responsibility |
|---|---|---|
| **Tokens** | `suai-css/tokens.css` *(canonical, mostly unchanged; grows only via §6 gaps)* | `--su-*` defaults on `:root`. The SP-1 contract. Never duplicated. |
| **Skins** | `suai-css/themes/{pla,nok,maa,speed}.css` | Each skin = `--su-*` overrides scoped `[data-su-theme="x"]`, with a nested `[data-su-mode="dark"]` block. `speed.css` exists; migration **adds** `pla`/`nok`/`maa` here, ported from the retired `--suai-*` vars files. |
| **Fonts** | `suai-css/themes/fonts/*` | Per-skin `@font-face`, reusing existing woff2 (roboto-flex, noto-sans-thai, CMU) **plus newly-bundled Speed fonts (DM Sans, Saira)**. |
| **Element base** | `suai-html/suai.css` | The element-styling layer (~835 lines) rewritten to consume `--su-*`. This is Stage 1's "beautiful raw HTML" core. |

Retired: `suai-html/suai-lai/{pla,nok,maa}/*-vars.css` and `*-base.css`. Per-theme element tweaks in the old `-base.css` files fold into either the base layer (if universal) or the skin file (if skin-specific), decided per rule during migration. The `suai-lai/` font woff2 files move under `suai-css/themes/fonts/`.

### Theming mechanism (the no-JS proof)

A page sets `<html data-su-theme="nok" data-su-mode="dark">`. The cascade does everything: tokens supply defaults → the matching skin block overrides them → the base layer paints elements from those variables. **No JavaScript.** Switching = changing two attributes. This is identical to the mechanism `tokens.css` and the Speed demo already use, so Stage 1 and Stage 2 converge on one model.

## 4. Distribution — modular sources, one committed bundle

Sources stay modular (DRY, one source of truth per skin). A small concat script emits a **committed** `suai-html/suai.bundle.css` = `tokens.css` + four skin files + fonts + base, in cascade order. Demos and consumers link that single file → zero-build for consumers, mirroring how `suai-css/demo/demo.css` is already a committed build artifact.

- Script: `scripts/build-suai-bundle.mjs` (zero-dependency Node, like `scripts/serve.mjs`). Wire as `pnpm build:html`.
- The bundle is regenerated and committed whenever a source layer changes; a comment header marks it generated.

## 5. Switcher — progressive enhancement only

`suai-html/suai-theme.js` (~15 lines): its ONLY job is to flip `data-su-theme` / `data-su-mode` on `<html>` and persist the choice to `localStorage`. It **injects no CSS** (that was the original defect). The page is fully styled before it runs; the script only changes which already-loaded skin block wins.

The control is real HTML rendered in each page — a `<fieldset>` with a 4-way skin selector and a light/dark toggle, built from native `<button>`/`<input>` (zero ARIA, per posture). Server-rendered apps set the attributes server-side and omit the script entirely.

## 6. Token reconciliation → feeds SP-1

The load-bearing step. Method:

1. **Extract** the unique `--suai-*` names actually referenced: **49** in `suai-html/suai.css` (plus the three legacy vars files).
2. **Map** each against `tokens.css` (**52** `--su-*` tokens). Three outcomes:
   - **Direct/near hit (~30):** `--suai-primary`→`--su-accent`, `--suai-text`→`--su-fg`, `--suai-surface`→`--su-bg`, `--suai-surface-variant`→`--su-bg-accent`, `--suai-border`→`--su-border`, `--suai-border-radius`→`--su-radius`, `--suai-spacing-1..5`→`--su-space-1..5`, `--suai-transition`→`--su-transition`, `--suai-shadow-*`→`--su-shadow-*`, status `-container`→`-bg`, etc. Use/extend the migration map already stubbed at the bottom of `tokens.css`.
   - **Gap (~15–19) → SP-1 decisions:** these have no `--su-*` equivalent and must be resolved as contract additions or policy calls on [suai#1](https://github.com/vLannaAi/suai-css/issues/1):
     - Heading scale `--suai-h1..h6` — add a `--su-h1..h6` (or `--su-text-*`) scale, or derive from font-size steps.
     - `--suai-font-size-md`, `--suai-font-weight-{normal,medium,semibold,bold}` — extend the size/weight scale.
     - Raw `--suai-gray-100/800` — contract **bans raw grays** (semantic-only); remap to semantic tokens or drop.
     - Layout dims `--suai-layout-max-width`, `--suai-layout-sidebar-width`, `--suai-layout-aside-width-desktop` — add a layout scale or keep Stage-1-local (decision).
     - Accent/surface **state** variants `--suai-primary-{hover,active,container}`, `--suai-surface-{hover,container}` — decide token-per-state vs `color-mix`/opacity convention.
   - **Drop:** decorative/unused names → delete.
3. **Rewrite** `suai.css` against the reconciled set; author the four skin files.

**Output = SP-1 progress.** The gap list is the concrete agenda for the token-freeze review. This "demo fix" measurably advances the milestone the repo is blocked on.

## 7. Demo pages

Six element pages (text / display / form / media / layout / theme) + `index.html`, all fixed identically:
1. Link `suai.bundle.css` (one `<link>`); set default `data-su-theme="pla" data-su-mode="light"` on `<html>`.
2. Render the shared switcher markup (same on every page, including `index.html`).
3. Replace bare `<a>` current-page markers with `<a aria-current="page">` styled as inactive.
4. `theme-demo.js` is deleted; `6.theme.html` becomes a live `--su-*` variable reference reading computed values.

## 8. Verification plan

Playwright, scripted, across all pages:
- **No-JS:** load with JavaScript disabled → assert every page styled (non-transparent `body` bg, resolved `--su-*` vars) in `pla`/`light`; programmatically set each of the 8 `data-su-theme`×`data-su-mode` combinations → assert distinct computed colors, screenshot each.
- **With-JS:** click switcher through all 8 states → assert attributes + computed styles change; reload → assert persisted choice.
- **Regression grep:** CI-style `grep -rE '\-\-suai-' suai-html/` must be empty.
- Before/after screenshots retained in `assets/` as the proof artifact.

## 9. Risks & mitigations

- **Gap decisions block the migration.** Mitigation: for each gap, migration may use a *provisional* `--su-*` token with a `/* SP-1 provisional */` marker so Stage 1 ships; SP-1 review ratifies or renames. Names stay changeable only in `tokens.css` (working rule).
- **Visual drift** from re-expressing skins. Mitigation: scope is re-expression, not restyle; verify against pre-migration screenshots per skin.
- **Bundle staleness.** Mitigation: generated-header comment + a `pnpm build:html` step; document in CLAUDE.md that the bundle is a build artifact.
- **Font weight.** Bundling Speed's DM Sans + Saira adds woff2 payload. Acceptable — Stage 1 self-containment is the goal; subset later if needed.

## 10. Build order (for the plan)

1. Reconcile vars → produce the map + gap list; add provisional tokens to `tokens.css`.
2. Author `themes/{pla,nok,maa}.css` + fonts (incl. Speed fonts).
3. Rewrite `suai-html/suai.css` to `--su-*`.
4. Concat script + committed `suai.bundle.css` + `pnpm build:html`.
5. Switcher JS + shared switcher markup.
6. Fix the 7 demo pages; delete `theme-demo.js`.
7. Playwright verification; screenshot all 8 states.
8. Update CLAUDE.md / docs sweep touchpoints; comment SP-1 gap agenda on suai#1.
