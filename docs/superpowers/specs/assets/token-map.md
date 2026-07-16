# SP-1 token reconciliation — Stage 1 migration outcome

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

## Reconciliation outcome (SP-1)

- **Step 1 (direct-rename coverage):** `tokens.css` `:root` declares ~52 `--su-*` tokens; every direct-rename target in the table above (`su-accent`, `su-bg`, `su-fg`, `su-muted`, `su-subtle`, `su-border`, `su-space-*`, `su-radius*`, `su-shadow*`, `su-leading`, `su-font-size*`, status `-bg`/`-fg`, etc.) resolves to a real declaration — verified by name, not by count.
- **Step 2 (dropped-token substitutions):** every entry in the dropped-token table resolves to either a literal, a `color-mix()` expression, or an existing `--su-*` token (`--su-bg-accent`, `--su-muted`, `--su-accent`, `--su-fg` all confirmed present). **No provisional tokens were required.** Dropped tokens (headings, font-weights, grays, layout dims) become literals per the contract's "NOT IN THE CONTRACT" section (`suai-css/tokens.css` lines 144–169), not new tokens.
- **Provisional additions:** none. `tokens.css` was not modified by this task.
