# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

SUAI (สวย = "beautiful" in Thai) is a progressive-enhancement CSS framework built in 4 stages, each a top-level directory:

- **`suai-html/`** — Stage 1, implemented and migrated to the `--su-*` contract. Zero-JS semantic HTML styling: a single generated `suai.bundle.css` (concatenation of `suai-css/tokens.css` + `suai-css/themes/fonts/fonts.css` + `suai-css/themes/{pla,nok,maa,kob}.css` + `suai-html/suai.css`), covering 4 skins (pla = Material 3, nok = Bootstrap 5.3, maa = Apple HIG, kob = crimson) scoped by `data-su-theme` + `data-su-mode` on `<html>` — the same attribute contract as Stage 2. `suai.bundle.css` is a **committed build artifact**: run `pnpm build:html` after editing `suai-css/tokens.css`, `suai-css/themes/*`, or `suai-html/suai.css`.
- **`suai-css/`** — Stage 2, **the active work**. Home of the canonical **`--su-*` token contract** (`tokens.css`), the UnoCSS authoring config (`uno.config.ts`), and themes (`themes/kob.css`). Ignore the stale README claiming this stage is "planned" — `tokens.css` and `SYNC.md` are the source of truth here.
- **`suai-js/`, `suai-vue/`** — Stages 3–4, placeholder READMEs only.
- **`docs/`** — numbered by stage (`0-OVERVIEW` roadmap/philosophy, `1-FOUNDATION` architecture, `2-STAGE-1-HTML`, `5-STAGE-4-VUE` component specs).

## Commands

```bash
pnpm demo          # static server for all demos at http://localhost:8877 (scripts/serve.mjs [port])
pnpm demo:build    # compile suai-css/demo/kob-demo.html utilities → demo/demo.css (UnoCSS CLI)
```

No tests or linters exist. Verify CSS changes visually via the demo server (`/suai-html/demos/` for Stage 1, `/suai-css/demo/kob-demo.html` for Stage 2). Re-run `pnpm demo:build` after changing `uno.config.ts` or utility classes in `kob-demo.html` — `demo.css` is a committed build artifact. Likewise, re-run `pnpm build:html` after editing `suai-css/tokens.css`, `suai-css/themes/*`, or `suai-html/suai.css` — `suai-html/suai.bundle.css` is a committed build artifact.

## One shared token contract, two consumption models

Both stages are migrated onto the same `--su-*` token contract and `data-su-theme` + `data-su-mode` scoping attributes — `--suai-*` (the pre-migration Stage 1 name) is fully retired, do not reintroduce it.

| | Stage 1 (suai-html) | Stage 2 (suai-css) |
|---|---|---|
| Variables | `--su-*` (canonical contract) | `--su-*` (canonical contract) |
| Scoping attrs | `data-su-theme` + `data-su-mode` | `data-su-theme` + `data-su-mode` |
| Consumption | Single generated `suai.bundle.css`, plain CSS, no build tools to consume | UnoCSS utility classes compiling to `var(--su-*)` |
| Themes | pla / nok / maa / kob, all bundled together | `themes/kob.css` (first canonical theme) |

The `--su-*` attributes are deliberately su-namespaced so a host app's own `data-theme` (e.g. Nuxt UI) never collides. New work uses `--su-*`; an old-name migration map lives at the bottom of `tokens.css`.

## Stage 2 architecture rules (from tokens.css / uno.config.ts headers)

- **Utilities READ tokens; themes WRITE them.** Every color/shape/font/shadow utility in `uno.config.ts` compiles to `var(--su-*)`, so compiled component CSS re-skins at runtime. Structural utilities (`flex`, `gap-2`, `p-6`) are engine-internal, never part of the published contract.
- **Consumers never need UnoCSS** — they receive compiled CSS reading only `--su-*` variables (the "opaque seam"). Themes and consumer apps override tokens with plain CSS: no rebuild, no `!important`.
- **No `dark:` color variants in components.** Mode is handled once by the theme layer (`[data-su-mode="dark"]` flips the variables). `dark:` is reserved for rare structural tweaks.
- **Lean rule for themes**: a theme file sets only the tokens that differ from the contract defaults.
- **Token naming**: `--su-<role>[-<variant>]`, semantic roles only (accent not "primary", bg/fg not "surface/text"); `-fg` suffix = foreground placed on top of its base token; `--su-accent-2` is the data accent, distinct from chrome accent ("two-kingdoms rule").
- Preset is **wind4** (Tailwind-4-compatible); older docs saying wind3 are superseded.

## Working protocol

- **Session start**: read `SYNC.md`; before starting work run `gh issue list --label hold` to see what this repo is blocked on. The sync-point table in SYNC.md is the coordination protocol with the noy-db-ui session — everything not in that table is free parallel work.
- **Prefix grammar is unified on `su`**: `--su-*` CSS tokens, `<su-*>` custom elements, `SU*` Vue components, npm scope `@suai/*`. Never reintroduce `--suai-*`.
- **Extraction before invention**: Wave 1 items generalize code moved from noy-db-ui's `ui-suai` fork — don't re-spec what exists.
- **Token names change only in `suai-css/tokens.css`**, never invented downstream.
- **No `dark:` COLOUR variants in components** — mode is the theme layer's job (`[data-su-mode="dark"]` flips variables).
- **Demos**: `pnpm demo` (root, `node scripts/serve.mjs` → localhost:8877); `pnpm demo:build` (recompiles `suai-css/demo/demo.css` via `uno.config.ts`).
- **Never add AI/Claude attribution** to commits, PRs, or issues.

## Coordination with noy-db-ui (read SYNC.md first)

This repo works in parallel with `vLannaAi/noy-db-ui` — **both repos are public**. `SYNC.md` is the canonical sync map — read it before touching `tokens.css` or planning component work. Key rules:

- **Token names are unstable while SP-1 (token contract freeze) is open** — renames land in `tokens.css` first, never invented downstream.
- Issue detail is public in both trackers — write full technical detail wherever the work lives. Client names, product names, and strategy narrative never enter issues, commits, or committed files in either repo; they live only in local gitignored files (pattern: `noy-db-ui/SYNC.local.md`).
- When a sync point changes state, update both `SYNC.md` here and `noy-db-ui/SYNC.local.md`, and comment on held issues.
