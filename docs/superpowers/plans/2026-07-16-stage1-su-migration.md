# Stage 1 `--su-*` Migration & No-JS Theming — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the four Stage-1 skins (pla/nok/maa/kob) render fully with zero JavaScript by migrating `suai-html` onto the `--su-*` token contract, with an optional progressive-enhancement switcher.

**Architecture:** One canonical token layer (`suai-css/tokens.css`) + four attribute-scoped skin files + a rewritten element-base layer, concatenated by a zero-dependency Node script into a committed `suai-html/suai.bundle.css`. Pages set `data-su-theme`/`data-su-mode` on `<html>`; the cascade styles everything with no JS. A ~15-line switcher only flips those attributes.

**Tech Stack:** Plain CSS (custom properties, `color-mix`, `@font-face`), zero-dependency Node ESM scripts (like `scripts/serve.mjs`), Playwright MCP for verification. No framework, no build dependency for consumers.

## Global Constraints

- **Tokens:** only `--su-*`. Final check `grep -rE '\-\-suai-' suai-html/` MUST be empty. Token names change ONLY in `suai-css/tokens.css`.
- **Scoping:** palette axis `data-su-theme="pla|nok|maa|kob"`; mode axis `data-su-mode="light|dark"`. Both cascade from any element. Dark flips ONLY color tokens; shape/type/spacing are mode-invariant.
- **No decorative emoji.** Final check `grep -rlP '[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}\x{2B00}-\x{2BFF}]' suai-html/` MUST be empty. Use text labels.
- **Preserve current visual identities** — re-express in `--su-*`, do not restyle.
- **No AI/Claude attribution** in commits.
- **No consumer build step:** `suai.bundle.css` is committed; only maintainers run the concat script.
- **Verify with JS disabled** as the primary success gate.

### Authoritative substitution table (used by Tasks 1–6)

Direct renames (value-preserving):

| legacy `--suai-*` | canonical `--su-*` |
|---|---|
| `primary` | `accent` |
| `text-on-primary` | `accent-fg` |
| `surface` | `bg` |
| `surface-variant`, `surface-container` | `bg-accent` |
| `text` | `fg` |
| `text-muted` | `muted` |
| `text-subtle` | `subtle` |
| `border` | `border` |
| `border-subtle` | `border-subtle` |
| `font-family` | `font-body` |
| `font-monospace` | `font-mono` |
| `font-size-base` | `font-size` |
| `font-size-sm` / `-lg` | `font-size-sm` / `-lg` |
| `line-height-base` | `leading` |
| `spacing-1..5` | `space-1..5` |
| `border-width` | `border-w` |
| `border-radius` / `-sm` / `-lg` / `-full` | `radius` / `-sm` / `-lg` / `-full` |
| `shadow-sm` / `shadow` / `shadow-lg` | `shadow-sm` / `shadow` / `shadow-lg` |
| `transition` / `-fast` | `transition` / `-fast` |
| `success` / `-container` | `success` / `success-bg` |
| `danger` / `-container` | `danger` / `danger-bg` |
| `warning` / `-container` | `warning` / `warning-bg` |
| `info` / `-container` | `info` / `info-bg` |

Dropped tokens → substitution (base uses literals; a skin file overrides only where its identity differs from the base default):

| legacy | substitution |
|---|---|
| `--suai-h1..h6` | literals `2.5rem / 2rem / 1.75rem / 1.5rem / 1.25rem / 1rem` (base default; skins override, e.g. maa: `2.125 / 1.75 / 1.375 / 1.25 / 1.0625 / 1rem`) |
| `--suai-font-size-md` | `1rem` |
| `--suai-line-height-sm` / `-lg` | `1.4` / `1.75` (literals at point of use) |
| `--suai-font-weight-normal/medium/semibold/bold` | `400 / 500 / 600 / 700` |
| `--suai-gray-100` | `var(--su-bg-accent)` |
| `--suai-gray-800` | `var(--su-muted)` |
| `--suai-layout-max-width / -sidebar-width / -aside-width-desktop` | literals `1200px / 280px / 350px` |
| `--suai-primary-hover` | `color-mix(in srgb, var(--su-accent) 85%, black)` |
| `--suai-primary-active` | `color-mix(in srgb, var(--su-accent) 70%, black)` |
| `--suai-primary-container` | `color-mix(in srgb, var(--su-accent) 12%, var(--su-bg))` |
| `--suai-surface-hover` | `color-mix(in srgb, var(--su-fg) 6%, var(--su-bg))` |

**Per-theme base-rule scoping rule:** every selector in a legacy `{pla,nok,maa}-base.css` is unscoped (e.g. `h1 { … }`) because only one theme loaded at a time. When folding into a skin file, prefix EVERY selector with `[data-su-theme="<name>"]` (e.g. `[data-su-theme="pla"] h1 { … }`) and apply the substitution table to its var references.

---

### Task 1: Reconcile tokens & add provisional contract tokens

**Files:**
- Modify: `suai-css/tokens.css` (add any provisional tokens; the migration map already exists at the file's end)
- Create: `docs/superpowers/specs/assets/token-map.md` (the frozen substitution table above, as the SP-1 review artifact)

**Interfaces:**
- Produces: the complete `--suai-* → --su-*` substitution table (above) that Tasks 2–6 consume.

- [ ] **Step 1: Confirm the contract already covers the direct renames.** Run:
```bash
grep -oE '\-\-su-[a-z0-9-]+' suai-css/tokens.css | sort -u > /tmp/su-tokens.txt
grep -c 'su-accent\|su-bg\|su-fg\|su-muted\|su-subtle\|su-border\|su-space\|su-radius\|su-shadow\|su-leading\|su-font-size' /tmp/su-tokens.txt
```
Expected: non-zero; the direct-rename targets all exist.

- [ ] **Step 2: Decide provisional additions.** Per the dropped-token table, NO new tokens are required — dropped tokens become literals/`color-mix` in base/skin CSS (contract stance, tokens.css lines 144–169). Confirm by checking nothing in the substitution table maps to a nonexistent `--su-*`. If a later task finds a genuinely missing token, add it to `tokens.css` `:root` with a `/* SP-1 provisional */` comment and note it here.

- [ ] **Step 3: Write the SP-1 artifact.** Create `docs/superpowers/specs/assets/token-map.md` containing the substitution table verbatim, headed "SP-1 token reconciliation — Stage 1 migration outcome".

- [ ] **Step 4: Commit.**
```bash
git add suai-css/tokens.css docs/superpowers/specs/assets/token-map.md
git commit -m "tokens: confirm Stage 1 substitution map; record SP-1 reconciliation artifact"
```

---

### Task 2: Migrate PLA skin (reference implementation)

**Files:**
- Create: `suai-css/themes/pla.css`
- Read (source): `suai-html/suai-lai/pla/pla-light-vars.css`, `pla-dark-vars.css`, `pla-base.css`

**Interfaces:**
- Produces: `[data-su-theme="pla"]` variable block (light) + nested `[data-su-mode="dark"]` color overrides + scoped base rules. This file is the exact template Tasks 3–4 follow.

- [ ] **Step 1: Write the light variable block.** Map `pla-light-vars.css` per the substitution table into a scoped block. Drop the raw gray ramp and any token that became a literal. Result:
```css
/* PLA (ปลา) — Material Design 3. Ported to --su-* contract. */
[data-su-theme="pla"] {
  --su-accent: #3b82f6;
  --su-accent-fg: #ffffff;
  --su-accent-2: #0288d1;            /* info hue as data accent */
  --su-bg: #ffffff;
  --su-bg-accent: #f5f5f5;
  --su-fg: #212121;
  --su-muted: #616161;
  --su-subtle: #757575;
  --su-border: #bdbdbd;
  --su-border-subtle: #e0e0e0;
  --su-success: #2e7d32; --su-success-bg: #e8f5e9; --su-success-fg: #1b5e20;
  --su-danger:  #c62828; --su-danger-bg:  #ffebee; --su-danger-fg:  #b71c1c;
  --su-warning: #f57c00; --su-warning-bg: #fff3e0; --su-warning-fg: #e65100;
  --su-info:    #0288d1; --su-info-bg:    #e1f5fe; --su-info-fg:    #01579b;
  --su-font-body: 'Roboto Flex','Roboto','Noto Sans',system-ui,sans-serif;
  --su-font-display: var(--su-font-body);
  --su-font-brand: var(--su-font-body);
  --su-font-mono: 'Roboto Mono',SFMono-Regular,Menlo,Consolas,monospace;
  --su-radius: 0.75rem; --su-radius-sm: 0.5rem; --su-radius-lg: 1rem; --su-radius-control: 0.5rem;
  --su-shadow-sm: 0px 1px 2px 0px rgba(0,0,0,.3), 0px 1px 3px 1px rgba(0,0,0,.15);
  --su-shadow:    0px 1px 2px 0px rgba(0,0,0,.3), 0px 2px 6px 2px rgba(0,0,0,.15);
  --su-shadow-lg: 0px 2px 3px 0px rgba(0,0,0,.3), 0px 6px 10px 4px rgba(0,0,0,.15);
  --su-transition: all .3s cubic-bezier(.4,0,.2,1);
  --su-transition-fast: all .15s cubic-bezier(.4,0,.2,1);
}
```

- [ ] **Step 2: Add the nested dark block** (from `pla-dark-vars.css`, colors only):
```css
[data-su-theme="pla"][data-su-mode="dark"] {
  --su-accent: #93c5fd; --su-accent-fg: #371e73;
  --su-bg: #1c1b1f; --su-bg-accent: #2b2930;
  --su-fg: #e6e1e5; --su-muted: #cac4d0; --su-subtle: #aea9b4;
  --su-border: #79747e; --su-border-subtle: #49454f;
  --su-success:#81c784; --su-success-bg:#1b5e20;
  --su-danger:#e57373;  --su-danger-bg:#b71c1c;
  --su-warning:#ffb74d; --su-warning-bg:#e65100;
  --su-info:#4fc3f7;    --su-info-bg:#01579b;
  --su-shadow-sm: 0px 1px 3px 1px rgba(0,0,0,.45), 0px 1px 2px 0px rgba(0,0,0,.3);
  --su-shadow:    0px 2px 6px 2px rgba(0,0,0,.45), 0px 1px 2px 0px rgba(0,0,0,.3);
  --su-shadow-lg: 0px 6px 10px 4px rgba(0,0,0,.45), 0px 2px 3px 0px rgba(0,0,0,.3);
}
```

- [ ] **Step 3: Fold `pla-base.css` element rules, scoped + mapped.** Prefix every selector with `[data-su-theme="pla"]`, apply the substitution table (`--suai-primary`→`--su-accent`, `--suai-font-weight-semibold`→`600`, `--suai-surface-variant`→`--su-bg-accent`, `--suai-surface-hover`→its color-mix, etc.). Example (heading hierarchy + striped tables + emphasis):
```css
[data-su-theme="pla"] h1 { color: var(--su-accent); }
[data-su-theme="pla"] h2 { color: color-mix(in srgb, var(--su-accent) 80%, var(--su-fg) 20%); }
[data-su-theme="pla"] h3 { color: color-mix(in srgb, var(--su-accent) 60%, var(--su-fg) 40%); }
[data-su-theme="pla"] h4 { color: color-mix(in srgb, var(--su-accent) 40%, var(--su-fg) 60%); }
[data-su-theme="pla"] h5 { color: color-mix(in srgb, var(--su-accent) 20%, var(--su-fg) 80%); }
[data-su-theme="pla"] strong { text-transform: uppercase; letter-spacing: .05em; font-size: 1.05em; }
[data-su-theme="pla"] em { font-weight: 600; font-style: normal; font-variation-settings: 'slnt' -10; color: var(--su-accent); }
[data-su-theme="pla"] cite { font-variation-settings: 'slnt' -10; color: var(--su-info); transition: var(--su-transition-fast); }
[data-su-theme="pla"] cite:hover { color: var(--su-accent); }
[data-su-theme="pla"] tbody tr:nth-child(even) { background-color: var(--su-bg-accent); }
[data-su-theme="pla"] tbody tr:nth-child(even):hover { background-color: color-mix(in srgb, var(--su-fg) 6%, var(--su-bg)); }
[data-su-theme="pla"] button, [data-su-theme="pla"] input[type="submit"] { box-shadow: var(--su-shadow-sm); }
[data-su-theme="pla"] button:hover, [data-su-theme="pla"] input[type="submit"]:hover { box-shadow: var(--su-shadow); }
[data-su-theme="pla"] input[type="text"], [data-su-theme="pla"] textarea, [data-su-theme="pla"] select {
  border-top:none; border-left:none; border-right:none; border-bottom:2px solid var(--su-border); border-radius:0; background:transparent; }
[data-su-theme="pla"] input:focus, [data-su-theme="pla"] textarea:focus { border-bottom-color: var(--su-accent); box-shadow:none; }
[data-su-theme="pla"] article { background: var(--su-bg); border-radius: var(--su-radius); padding: var(--su-space-4); box-shadow: var(--su-shadow-sm); transition: var(--su-transition); }
[data-su-theme="pla"] article:hover { box-shadow: var(--su-shadow); }
```
(Fold the remaining `pla-base.css` rules — `i`, `q`, `blockquote`, `input[type="reset"]`, `pre`, `details`, `form` — the same way. Reproduce every selector; none omitted.)

- [ ] **Step 4: Verify PLA resolves with no JS.** Create a scratch file `/tmp/pla-check.html` linking `../tokens.css` then `pla.css` (relative), `<html data-su-theme="pla" data-su-mode="light">`, one `<h1>` + `<article>`. Serve via `pnpm demo`, load in Playwright, assert:
```js
getComputedStyle(document.querySelector('h1')).color // -> rgb(59,130,246)
getComputedStyle(document.querySelector('article')).backgroundColor // non-transparent
```
Expected: accent-blue h1, white article bg. Delete scratch file after.

- [ ] **Step 5: Commit.**
```bash
git add suai-css/themes/pla.css
git commit -m "themes: port PLA skin to --su-* (attribute-scoped, light+dark, base rules folded)"
```

---

### Task 3: Migrate NOK skin

**Files:**
- Create: `suai-css/themes/nok.css`
- Read: `suai-html/suai-lai/nok/nok-light-vars.css`, `nok-dark-vars.css`, `nok-base.css`

**Interfaces:**
- Consumes: substitution table (Task 1), file template (Task 2 `pla.css`).
- Produces: `[data-su-theme="nok"]` block + dark + scoped base rules.

- [ ] **Step 1: Write `nok.css`** following Task 2's structure exactly, with NOK's Bootstrap palette. Light values from `nok-light-vars.css`: `--su-accent:#0d6efd; --su-accent-fg:#ffffff; --su-bg:#ffffff; --su-bg-accent:#f8f9fa; --su-fg:#212529; --su-muted:#6c757d; --su-subtle:#adb5bd; --su-border:#dee2e6; --su-border-subtle:#e9ecef;` status: `success #198754/#d1e7dd`, `danger #dc3545/#f8d7da`, `warning #ffc107/#fff3cd`, `info #0dcaf0/#cff4fc`; `--su-font-body:"Noto Sans Thai",system-ui,sans-serif;` `--su-radius:.375rem; --su-radius-sm:.25rem; --su-radius-lg:.5rem;` shadows per `nok-light-vars.css`; `--su-transition:all .2s ease-in-out;`.

- [ ] **Step 2: Add dark block** from `nok-dark-vars.css` (read it; map colors only, same pattern as Task 2 Step 2).

- [ ] **Step 3: Fold `nok-base.css`** scoped under `[data-su-theme="nok"]`, applying the substitution table. Read the file and transform every rule.

- [ ] **Step 4: Verify** with a scratch page (as Task 2 Step 4) using `data-su-theme="nok"`; assert accent resolves to `rgb(13,110,253)`. Delete scratch.

- [ ] **Step 5: Commit.**
```bash
git add suai-css/themes/nok.css
git commit -m "themes: port NOK skin to --su-* (attribute-scoped, light+dark, base rules folded)"
```

---

### Task 4: Migrate MAA skin

**Files:**
- Create: `suai-css/themes/maa.css`
- Read: `suai-html/suai-lai/maa/maa-light-vars.css`, `maa-dark-vars.css`, `maa-base.css`

**Interfaces:**
- Consumes: substitution table, Task 2 template.
- Produces: `[data-su-theme="maa"]` block + dark + scoped base rules.

- [ ] **Step 1: Write `maa.css`** following Task 2's structure with MAA's iOS palette. Light values: `--su-accent:#007aff; --su-accent-fg:#ffffff; --su-bg:#ffffff; --su-bg-accent:#f2f2f7; --su-fg:rgba(0,0,0,.85); --su-muted:rgba(60,60,67,.6); --su-subtle:rgba(60,60,67,.3); --su-border:#c6c6c8; --su-border-subtle:rgba(60,60,67,.29);` status: `success #34c759/#e8f8ec`, `danger #ff3b30/#ffe5e3`, `warning #ff9500/#fff3e0`, `info #5ac8fa/#e5f6fd`; `--su-font-body:"CMU",sans-serif;` `--su-border-w:0.5px; --su-radius:10px; --su-radius-sm:8px; --su-radius-lg:12px;`. Drop all `--maa-*` extra tokens (unused by base). **MAA overrides base heading sizes** — add: `[data-su-theme="maa"] h1{font-size:2.125rem} h2{1.75rem} h3{1.375rem} h4{1.25rem} h5{1.0625rem}` (scoped).

- [ ] **Step 2: Add dark block** from `maa-dark-vars.css` (read; colors only).

- [ ] **Step 3: Fold `maa-base.css`** scoped under `[data-su-theme="maa"]`.

- [ ] **Step 4: Verify** scratch page `data-su-theme="maa"`; assert accent `rgb(0,122,255)`, `border-width` 0.5px on an input. Delete scratch.

- [ ] **Step 5: Commit.**
```bash
git add suai-css/themes/maa.css
git commit -m "themes: port MAA skin to --su-* (attribute-scoped, light+dark, base rules folded)"
```

---

### Task 5: Bundle KOB fonts + font `@font-face` layer

**Files:**
- Create: `suai-css/themes/fonts/fonts.css` (all skins' `@font-face`)
- Create: `suai-html/fonts/` (woff2 files copied here so the committed bundle is self-contained)
- Modify: `suai-css/themes/kob.css` (no font changes needed; it already references DM Sans/Saira by name)
- Move: existing woff2 from `suai-html/suai-lai/*/fonts/*.woff2`

**Interfaces:**
- Produces: `fonts.css` with `@font-face` for Roboto Flex, Noto Sans Thai, CMU, **DM Sans, Saira**, all `url('../../suai-html/fonts/NAME.woff2')`-relative to the bundle output (see Task 6 for final path rewrite).

- [ ] **Step 1: Obtain KOB fonts.** Download variable woff2 for **DM Sans** and **Saira** (both SIL OFL) into `suai-html/fonts/`:
```bash
mkdir -p suai-html/fonts
# From Google Fonts (OFL). Verify licence file noted in fonts/README.txt.
curl -sL "https://raw.githubusercontent.com/googlefonts/dm-fonts/main/Sans/fonts/variable/DMSans%5Bopsz%2Cwght%5D.ttf" -o /tmp/dmsans.ttf
curl -sL "https://raw.githubusercontent.com/google/fonts/main/ofl/saira/Saira%5Bwdth%2Cwght%5D.ttf" -o /tmp/saira.ttf
```
Convert to woff2 if `woff2_compress` is available, else keep ttf and reference accordingly. Record licence in `suai-html/fonts/README.txt`.

- [ ] **Step 2: Move existing woff2** into `suai-html/fonts/`:
```bash
git mv suai-html/suai-lai/pla/fonts/roboto-flex-full.woff2 suai-html/fonts/
git mv suai-html/suai-lai/nok/fonts/noto-sans-thai-flex.woff2 suai-html/fonts/
git mv suai-html/suai-lai/maa/fonts/CMU-flex.woff2 suai-html/fonts/
```

- [ ] **Step 3: Write `fonts.css`** with one `@font-face` per family, `src: url('./fonts/NAME.woff2') format('woff2')` (paths relative to the eventual bundle at `suai-html/suai.bundle.css`). Include `font-family` names matching each skin's `--su-font-body` (`'Roboto Flex'`, `'Noto Sans Thai'`, `'CMU'`, `'DM Sans'`, `'Saira'`).

- [ ] **Step 4: Verify** a scratch page setting `font-family:'DM Sans'` renders with the loaded face (Playwright: `document.fonts.check("16px 'DM Sans'")` → true after `document.fonts.ready`). Delete scratch.

- [ ] **Step 5: Commit.**
```bash
git add suai-css/themes/fonts suai-html/fonts && git rm -r suai-html/suai-lai/*/fonts
git commit -m "fonts: consolidate skin fonts + bundle KOB (DM Sans, Saira) under suai-html/fonts"
```

---

### Task 6: Rewrite element-base layer to `--su-*`

**Files:**
- Modify: `suai-html/suai.css` (835 lines; global var rename per substitution table)

**Interfaces:**
- Consumes: substitution table (Task 1).
- Produces: theme-agnostic element styling reading ONLY `--su-*` + literals for dropped tokens.

- [ ] **Step 1: Apply the direct renames** across `suai.css`. These are safe global substitutions (order matters — do longer names first to avoid partial overlaps like `surface-variant` before `surface`):
```bash
cd suai-html
sed -i '' \
 -e 's/--suai-surface-variant/--su-bg-accent/g' -e 's/--suai-surface-container/--su-bg-accent/g' \
 -e 's/--suai-surface/--su-bg/g' \
 -e 's/--suai-text-on-primary/--su-accent-fg/g' -e 's/--suai-text-muted/--su-muted/g' \
 -e 's/--suai-text-subtle/--su-subtle/g' -e 's/--suai-text/--su-fg/g' \
 -e 's/--suai-primary/--su-accent/g' \
 -e 's/--suai-border-subtle/--su-border-subtle/g' -e 's/--suai-border-radius-sm/--su-radius-sm/g' \
 -e 's/--suai-border-radius-lg/--su-radius-lg/g' -e 's/--suai-border-radius-full/--su-radius-full/g' \
 -e 's/--suai-border-radius/--su-radius/g' -e 's/--suai-border-width/--su-border-w/g' -e 's/--suai-border/--su-border/g' \
 -e 's/--suai-font-family/--su-font-body/g' -e 's/--suai-font-monospace/--su-font-mono/g' \
 -e 's/--suai-font-size-base/--su-font-size/g' -e 's/--suai-line-height-base/--su-leading/g' \
 -e 's/--suai-spacing-/--su-space-/g' -e 's/--suai-transition/--su-transition/g' \
 -e 's/--suai-shadow-sm/--su-shadow-sm/g' -e 's/--suai-shadow-lg/--su-shadow-lg/g' -e 's/--suai-shadow/--su-shadow/g' \
 suai.css
```

- [ ] **Step 2: Hand-fix the dropped tokens.** Grep for survivors and replace per the dropped-token table:
```bash
grep -nE '\-\-suai-(h[1-6]|font-weight|gray|line-height-(sm|lg)|layout|primary-(hover|active|container)|surface-hover|success-container|danger-container|warning-container|info-container|font-size-md)' suai.css
```
Replace each: `--suai-h1`→`2.5rem` (etc.), `--suai-font-weight-semibold`→`600`, `--suai-gray-100`→`var(--su-bg-accent)`, `--suai-gray-800`→`var(--su-muted)`, `--suai-*-container`→`var(--su-*-bg)`, `--suai-primary-hover`→`color-mix(in srgb,var(--su-accent) 85%,black)`, etc.

- [ ] **Step 3: Verify zero legacy refs.**
```bash
grep -cE '\-\-suai-' suai-html/suai.css
```
Expected: `0`.

- [ ] **Step 4: Sanity-check no undefined vars.** Every `var(--su-…)` in `suai.css` must exist in `tokens.css` or a skin file. Run:
```bash
comm -23 <(grep -oE 'var\(--su-[a-z0-9-]+' suai-html/suai.css | sed 's/var(//' | sort -u) \
         <(grep -oE '\-\-su-[a-z0-9-]+' suai-css/tokens.css suai-css/themes/*.css | grep -oE '\-\-su-[a-z0-9-]+' | sort -u)
```
Expected: empty (no unresolved token). Any output → add the token to `tokens.css` (`/* SP-1 provisional */`) or fix the reference.

- [ ] **Step 5: Commit.**
```bash
git add suai-html/suai.css && git commit -m "suai-html: migrate element base styling to --su-* contract"
```

---

### Task 7: Concat build script + committed bundle

**Files:**
- Create: `scripts/build-suai-bundle.mjs`
- Create (generated): `suai-html/suai.bundle.css`
- Modify: `package.json` (add `build:html` script)

**Interfaces:**
- Consumes: `tokens.css`, `themes/{pla,nok,maa,kob}.css`, `themes/fonts/fonts.css`, `suai-html/suai.css`.
- Produces: `suai-html/suai.bundle.css` (single committed stylesheet), `pnpm build:html`.

- [ ] **Step 1: Write the script.**
```js
// scripts/build-suai-bundle.mjs — zero-dep concat of the Stage-1 CSS layers.
import { readFile, writeFile } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const LAYERS = [
  'suai-css/tokens.css',
  'suai-css/themes/fonts/fonts.css',
  'suai-css/themes/pla.css', 'suai-css/themes/nok.css',
  'suai-css/themes/maa.css', 'suai-css/themes/kob.css',
  'suai-html/suai.css',
]
const parts = []
for (const rel of LAYERS) parts.push(`/* === ${rel} === */\n` + await readFile(join(ROOT, rel), 'utf8'))
const header = `/* GENERATED by scripts/build-suai-bundle.mjs — do not edit. Run: pnpm build:html */\n`
await writeFile(join(ROOT, 'suai-html/suai.bundle.css'), header + parts.join('\n\n'))
console.log('wrote suai-html/suai.bundle.css')
```

- [ ] **Step 2: Add package script.** In `package.json` `scripts`, add:
```json
"build:html": "node scripts/build-suai-bundle.mjs"
```

- [ ] **Step 3: Run it.**
```bash
pnpm build:html
```
Expected: `wrote suai-html/suai.bundle.css`.

- [ ] **Step 4: Verify font paths resolve from the bundle.** The `@font-face` `url('./fonts/…')` in `fonts.css` must resolve relative to `suai-html/suai.bundle.css`. Confirm `suai-html/fonts/*.woff2` exist:
```bash
ls suai-html/fonts/*.woff2 2>/dev/null || ls suai-html/fonts/
```

- [ ] **Step 5: Commit.**
```bash
git add scripts/build-suai-bundle.mjs suai-html/suai.bundle.css package.json
git commit -m "build: add zero-dep Stage-1 bundle script + committed suai.bundle.css"
```

---

### Task 8: Switcher JS + shared switcher markup

**Files:**
- Create: `suai-html/suai-theme.js`
- Create: `suai-html/demos/_switcher.html` (canonical markup snippet, pasted into each page)

**Interfaces:**
- Produces: a script that flips `data-su-theme`/`data-su-mode` on `<html>` + persists to `localStorage`; injects NO CSS. Switcher markup using `data-su-set-theme` / `data-su-set-mode` buttons.

- [ ] **Step 1: Write `suai-theme.js`.**
```js
/* SUAI theme switcher — progressive enhancement ONLY.
   Flips data-su-theme / data-su-mode on <html>; injects no CSS.
   The page is fully styled without this file. */
(() => {
  const root = document.documentElement;
  const K = 'su-theme', M = 'su-mode';
  const t = localStorage.getItem(K), m = localStorage.getItem(M);
  if (t) root.setAttribute('data-su-theme', t);
  if (m) root.setAttribute('data-su-mode', m);
  document.addEventListener('click', (e) => {
    const th = e.target.closest('[data-su-set-theme]');
    const md = e.target.closest('[data-su-set-mode]');
    if (th) { const v = th.dataset.suSetTheme; root.setAttribute('data-su-theme', v); localStorage.setItem(K, v); }
    if (md) { const v = md.dataset.suSetMode;  root.setAttribute('data-su-mode', v);  localStorage.setItem(M, v); }
  });
})();
```

- [ ] **Step 2: Write `_switcher.html`** (no emoji, native controls):
```html
<fieldset class="su-switcher" aria-label="Theme controls">
  <legend>Skin</legend>
  <button type="button" data-su-set-theme="pla">PLA</button>
  <button type="button" data-su-set-theme="nok">NOK</button>
  <button type="button" data-su-set-theme="maa">MAA</button>
  <button type="button" data-su-set-theme="kob">KOB</button>
  <span>Mode</span>
  <button type="button" data-su-set-mode="light">Light</button>
  <button type="button" data-su-set-mode="dark">Dark</button>
</fieldset>
```

- [ ] **Step 3: Verify no-CSS-injection.** Playwright on any page with the script: `document.querySelectorAll('link[data-suai-theme]').length` → `0`; after clicking `[data-su-set-theme="nok"]`, `root.getAttribute('data-su-theme')` → `"nok"` and no new `<link>` appeared.

- [ ] **Step 4: Commit.**
```bash
git add suai-html/suai-theme.js suai-html/demos/_switcher.html
git commit -m "switcher: add PE-only theme toggle (flips attributes, injects no CSS)"
```

---

### Task 9: Retrofit index + pages 1–2

**Files:**
- Modify: `suai-html/demos/index.html`, `1.text.html`, `2.display.html`
- Delete: `suai-html/demos/theme-demo.js`

**Interfaces:**
- Consumes: `suai.bundle.css` (Task 7), `suai-theme.js` + `_switcher.html` (Task 8).

- [ ] **Step 1: Rewire `<head>`** on all three: replace `<link href="../suai.css">` + `<script src="theme-demo.js">` with:
```html
<link rel="stylesheet" href="../suai.bundle.css">
<script src="../suai-theme.js" defer></script>
```
and set `<html lang="en" data-su-theme="pla" data-su-mode="light">`.

- [ ] **Step 2: Insert the switcher** (paste `_switcher.html`) at the top of `<body>` on each page.

- [ ] **Step 3: Fix dead nav markers.** Replace each bare `<a>N. Name</a>` with `<a aria-current="page">N. Name</a>` (add a base rule in `suai.css` if needed: `nav a[aria-current="page"]{font-weight:600;opacity:.6;pointer-events:none}` — add to Task 6 output or here in a follow-up commit).

- [ ] **Step 4: Strip emoji in `2.display.html`.** Run `grep -nP '[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}\x{2B00}-\x{2BFF}]' 2.display.html`; replace each with a text label.

- [ ] **Step 5: Delete `theme-demo.js`.** `git rm suai-html/demos/theme-demo.js`.

- [ ] **Step 6: Verify no-JS.** Playwright with JavaScript disabled → load `1.text.html`; assert `getComputedStyle(document.body).backgroundColor` non-transparent and an `--su-fg`-colored heading. Screenshot.

- [ ] **Step 7: Commit.**
```bash
git add suai-html/demos/index.html suai-html/demos/1.text.html suai-html/demos/2.display.html
git rm suai-html/demos/theme-demo.js
git commit -m "demos: retrofit index/text/display to bundle + PE switcher; drop theme-demo.js"
```

---

### Task 10: Retrofit pages 3–5 (heavy emoji strip)

**Files:**
- Modify: `suai-html/demos/3.form.html`, `4.media.html`, `5.layout.html`

- [ ] **Step 1: Rewire `<head>` + `<html>` attrs + insert switcher** on all three (identical to Task 9 Steps 1–2).

- [ ] **Step 2: Fix dead nav markers** (Task 9 Step 3) on all three.

- [ ] **Step 3: Strip emoji in `5.layout.html`.** Replace nav-toggle `☰`/`✕` with text `Menu`/`Close`; replace bottom-nav icons `🏠🔍➕❤👤` with text labels `Home / Search / Add / Like / Profile`. Verify: `grep -cP '[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}\x{2B00}-\x{2BFF}]' 5.layout.html` → `0`.

- [ ] **Step 4: Verify** each page no-JS styled (Playwright, JS disabled), screenshot `5.layout.html`.

- [ ] **Step 5: Commit.**
```bash
git add suai-html/demos/3.form.html suai-html/demos/4.media.html suai-html/demos/5.layout.html
git commit -m "demos: retrofit form/media/layout to bundle + switcher; strip emoji"
```

---

### Task 11: Rebuild 6.theme as live `--su-*` reference

**Files:**
- Modify: `suai-html/demos/6.theme.html`

- [ ] **Step 1: Rewire head/attrs/switcher** (Task 9 Steps 1–2).

- [ ] **Step 2: Strip all emoji** (`🎨✍📏🔲✨🧩📋` …) → text section headings.

- [ ] **Step 3: Make it a live reference.** Replace the static var list with a small inline script that reads computed `--su-*` values and renders swatches:
```html
<div id="su-vars"></div>
<script>
  const names = ['--su-bg','--su-bg-accent','--su-fg','--su-muted','--su-subtle','--su-border','--su-accent','--su-accent-fg','--su-accent-2','--su-danger','--su-success','--su-warning','--su-info'];
  const cs = getComputedStyle(document.documentElement);
  document.getElementById('su-vars').innerHTML = names.map(n =>
    `<div><span style="display:inline-block;width:1.5rem;height:1.5rem;border:1px solid var(--su-border);background:var(${n})"></span> <code>${n}</code>: ${cs.getPropertyValue(n).trim()}</div>`
  ).join('');
</script>
```
(This inline script is demo-only reflection, not required for styling — the page is fully styled without it.)

- [ ] **Step 4: Verify** the swatches re-read after switching skins (click `[data-su-set-theme="kob"]`, re-run/reload → values change). Screenshot.

- [ ] **Step 5: Commit.**
```bash
git add suai-html/demos/6.theme.html
git commit -m "demos: rebuild 6.theme as live --su-* reference; strip emoji"
```

---

### Task 12: Playwright verification suite + evidence

**Files:**
- Create: `scripts/verify-demos.mjs` (drives Playwright MCP steps manually OR a documented checklist)
- Create: `docs/superpowers/specs/assets/after-*.png` (the 8-state proof)

- [ ] **Step 1: No-JS gate.** With JavaScript disabled, for each of the 6 pages: assert `body` background non-transparent and `--su-fg` resolves. Record pass/fail.

- [ ] **Step 2: 8-state screenshots.** With JS enabled, for `1.text.html`, click through all `theme × mode` combinations (pla/nok/maa/kob × light/dark) and screenshot each into `assets/after-<theme>-<mode>.png`. Assert `--su-accent` differs across the four skins.

- [ ] **Step 3: Persistence.** Click `kob`+`dark`, reload, assert attributes still `kob`/`dark`.

- [ ] **Step 4: Regression greps (MUST be empty):**
```bash
grep -rE '\-\-suai-' suai-html/ | grep -v suai.bundle.css   # bundle re-check separately
grep -rlP '[\x{1F000}-\x{1FAFF}\x{2600}-\x{27BF}\x{2B00}-\x{2BFF}]' suai-html/
```
Both empty. (The bundle is generated from migrated sources, so it too must be clean — include it: `grep -cE '\-\-suai-' suai-html/suai.bundle.css` → `0`.)

- [ ] **Step 5: Commit evidence.**
```bash
git add docs/superpowers/specs/assets/after-*.png scripts/verify-demos.mjs
git commit -m "verify: no-JS + 8-state Playwright evidence for Stage-1 migration"
```

---

### Task 13: Docs, cleanup, SP-1 handoff

**Files:**
- Modify: `CLAUDE.md` (note the bundle is a build artifact; `pnpm build:html`)
- Modify: `suai-html/README.md`, `suai-html/THEMES.md` (attribute-driven `--su-*` model; retire `--suai-*`/`data-theme` instructions)
- Delete: `suai-html/suai-lai/` (emptied legacy theme tree, if fully migrated)

- [ ] **Step 1: Update `CLAUDE.md`** demo section: add "`suai.bundle.css` is generated — run `pnpm build:html` after editing `tokens.css`, `themes/*`, or `suai-html/suai.css`."

- [ ] **Step 2: Update `README.md` / `THEMES.md`** to the `data-su-theme`/`data-su-mode` model and single `suai.bundle.css` link; remove the multi-file `suai-lai` link instructions and `theme-demo.js` mentions.

- [ ] **Step 3: Remove the legacy tree** once nothing references it:
```bash
grep -rl 'suai-lai' suai-html/ docs/ || git rm -r suai-html/suai-lai
```

- [ ] **Step 4: SP-1 handoff.** Post the Task 1 token-map artifact as a comment on `vLannaAi/suai-css#1` (gap decisions were all resolved as literals per contract; no new tokens beyond any `/* SP-1 provisional */` flagged). Per SYNC.md rule 5, note the migration is done.

- [ ] **Step 5: Commit.**
```bash
git add CLAUDE.md suai-html/README.md suai-html/THEMES.md
git commit -m "docs: Stage-1 --su-* attribute-driven theming; retire suai-lai + theme-demo.js"
```

---

## Self-Review

**Spec coverage:** §1 problem → Tasks 9–12 (switcher, no-JS, emoji, dead nav). §2 goal/criteria → Task 12 gates. §3 four layers → Tasks 1(tokens),2–4(skins),5(fonts),6(base). §4 bundle → Task 7. §5 switcher → Task 8. §6 reconciliation → Task 1 + substitution table. §7 demo pages → Tasks 9–11. §8 verification → Task 12. Emoji constraint → Tasks 9–12. Docs → Task 13. All covered.

**Placeholder scan:** No TBD/TODO. Mechanical CSS transforms are specified as (a) the complete substitution table, (b) a fully-worked PLA reference (Task 2), (c) exact per-skin palette values (Tasks 3–4), (d) exact `sed` for the base rename (Task 6). NOK/MAA base-rule folding instructs reading the source file + applying the documented scope+map transform — the transform is complete; the source exists in-repo.

**Type/name consistency:** `data-su-set-theme`/`data-su-set-mode` (Task 8 markup ↔ JS) match. `suai.bundle.css` path consistent across Tasks 7, 9–12. `pnpm build:html` consistent Tasks 7, 13. Font family names in `fonts.css` (Task 5) match each skin's `--su-font-body` (Tasks 2–4).

**Known risk flagged in-plan:** KOB font acquisition (Task 5 Step 1) depends on network/`woff2_compress`; fallback to system fonts documented if unavailable.
