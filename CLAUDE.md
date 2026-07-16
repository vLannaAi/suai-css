# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

SUAI (สวย = "beautiful" in Thai) is a progressive-enhancement CSS framework built in 4 stages, each a top-level directory:

- **`suai-html/`** — Stage 1, implemented. Zero-JS semantic HTML styling: `suai.css` (theme-agnostic base) + `suai-lai/` themes (pla = Material 3, nok = Bootstrap 5.3, maa = Apple HIG), each with base/light-vars/dark-vars/fonts files. Uses **legacy `--suai-*` variables** scoped by `data-theme` + `data-mode` on `<html>`.
- **`suai-css/`** — Stage 2, **the active work**. Home of the canonical **`--su-*` token contract** (`tokens.css`), the UnoCSS authoring config (`uno.config.ts`), and themes (`themes/speed.css`). Ignore the stale README claiming this stage is "planned" — `tokens.css` and `SYNC.md` are the source of truth here.
- **`suai-js/`, `suai-vue/`** — Stages 3–4, placeholder READMEs only.
- **`docs/`** — numbered by stage (`0-OVERVIEW` roadmap/philosophy, `1-FOUNDATION` architecture, `2-STAGE-1-HTML`, `5-STAGE-4-VUE` component specs).

## Commands

```bash
pnpm demo          # static server for all demos at http://localhost:8877 (scripts/serve.mjs [port])
pnpm demo:build    # compile suai-css/demo/speed-demo.html utilities → demo/demo.css (UnoCSS CLI)
```

No tests or linters exist. Verify CSS changes visually via the demo server (`/suai-html/demos/` for Stage 1, `/suai-css/demo/speed-demo.html` for Stage 2). Re-run `pnpm demo:build` after changing `uno.config.ts` or utility classes in `speed-demo.html` — `demo.css` is a committed build artifact.

## The two token systems (don't mix them)

| | Stage 1 (suai-html) | Stage 2 (suai-css) |
|---|---|---|
| Variables | `--suai-*` (legacy names) | `--su-*` (canonical contract) |
| Scoping attrs | `data-theme` + `data-mode` | `data-su-theme` + `data-su-mode` |
| Themes | pla / nok / maa in `suai-lai/` | `themes/speed.css` (first canonical theme) |

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

This private repo works in parallel with the public `vLannaAi/noy-db-ui` repo. `SYNC.md` is the canonical sync map — read it before touching `tokens.css` or planning component work. Key rules:

- **Token names are unstable while SP-1 (token contract freeze) is open** — renames land in `tokens.css` first, never invented downstream.
- Issues live in `vLannaAi/suai-css` (full detail OK) and `vLannaAi/noy-db-ui` (public — keep lean, no strategy/client names, reference the private tracker instead).
- When a sync point changes state, update both `SYNC.md` here and `noy-db-ui/SYNC.local.md`, and comment on held issues.
