# SP-1 handoff note (draft — for posting to vLannaAi/suai-css#1)

Stage 1 (`suai-html`) migration to the `--su-*` token contract is complete. All 6 demo pages (`suai-html/demos/*.html`) now link a single generated `suai.bundle.css` and render all 4 skins — pla (Material 3), nok (Bootstrap 5.3), maa (Apple HIG), kob (crimson) — across both light and dark mode, scoped by `data-su-theme` + `data-su-mode` on `<html>`, with zero JavaScript required. An optional `suai-theme.js` provides a progressive-enhancement switcher for the demos only.

Gap decisions from the reconciliation (dropped `--suai-*` tokens with no direct `--su-*` equivalent) were all resolved as literals or `color-mix()` expressions per the contract's "NOT IN THE CONTRACT" rule — no new tokens were needed and `tokens.css` required no provisional additions. Full mapping: `docs/superpowers/specs/assets/token-map.md`.

**Deferred consistency item** (not a blocker): status `-fg` triplets (`--su-danger-fg`, `--su-success-fg`, `--su-warning-fg`, `--su-info-fg`) are defined per-skin only in `suai-css/themes/pla.css`; `nok.css`, `maa.css`, and `kob.css` don't override them, so those three skins fall back to the contract defaults in `tokens.css`. This affects only Stage-2 utility classes that read the `-fg` variants directly — Stage-1 demo pages render correctly either way since the base default is a themable value, not a gap. Worth a follow-up pass to give nok/maa/kob their own status-`-fg` values for visual consistency, but out of scope for the Stage-1 migration.

## Follow-ups surfaced by the migration (for the contract owner)

- **Cascade trap (latent):** theme *light* blocks are emitted after tokens.css's
  `[data-su-mode="dark"]` block at equal specificity (0,1,0). A theme that sets a
  mode-varying token in its light block but omits it in dark will keep the *light*
  value in dark mode. Harmless in Stage 1 today (base CSS never reads the `-fg`
  tokens), but a real trap for future theme authors and Stage-2 utilities. Consider a
  one-line warning comment in tokens.css, or emit theme light blocks before the shared
  dark block.
- **Status `-fg` consistency:** PLA defines `--su-{danger,success,warning,info}-fg`;
  NOK/MAA omit them and fall back to contract defaults. Only affects Stage-2 utility
  classes. Decide whether to backfill NOK/MAA `-fg` (Bootstrap/iOS alert-text hues) for
  parity, or drop PLA's for symmetry.
