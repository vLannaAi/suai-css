# SUAI ⇄ noy-db-ui — parallel-work sync map

**Canonical copy.** A gitignored mirror lives at `noy-db-ui/SYNC.local.md`
for the session working in that repo. Update BOTH when a sync point changes state.
Full backlog: `docs/0-OVERVIEW/04-noydb-intake-backlog.md`.

## The two tracks

| | suai (this repo, PUBLIC) | noy-db-ui (PUBLIC) |
|---|---|---|
| Owns | `--su-` token contract, themes, schema-blind components, playground/docs | shared engine (`packages/ui`), forks (`ui-vanilla`/`ui-nuxt`/`ui-suai`), schema-aware workflow |
| Milestones | W0 #1 · W1 #2 · W2 #3 | same titles, same numbers |
| Publicity rule | both repos are public — full technical detail OK in both trackers; anything client- or strategy-sensitive lives ONLY in local gitignored files (pattern: `noy-db-ui/SYNC.local.md`) | same |

## Sync points (the only places the tracks touch)

| SP | What | Owner | State | Holds |
|---|---|---|---|---|
| **SP-1** | `--su-` token contract freeze (`suai-css/tokens.css`) | suai — [suai#1](https://github.com/vLannaAi/suai-css/issues/1) | 🟡 draft exists, review pending | noy-db-ui#7 (token bridge), final names in noy-db-ui#9 (SP-3 map), all suai component authoring |
| **SP-2** | `ui-suai` fork exists (seed = current ui-nuxt) | noy-db-ui — [noy#8](https://github.com/vLannaAi/noy-db-ui/issues/8) | 🔴 not started | suai#4 (adaptive label), suai#5 (gallery) — extractions pull from that living code |
| **SP-3** | Nuxt-UI-vars ↔ `--su-*` bridge map | noy-db-ui drafts, suai reviews — [noy#9](https://github.com/vLannaAi/noy-db-ui/issues/9) | 🔴 draftable now, final after SP-1 | SUAI components blending inside ui-nuxt pages |
| **SP-4** | Rolling component handoffs (suai ships → noy swaps) | per component — [noy#10](https://github.com/vLannaAi/noy-db-ui/issues/10) | 🔴 after SP-2 | each bespoke-visual deletion in ui-suai |

## Rules for the two parallel sessions

1. **Everything not in the SP table is free** — work independently, no coordination.
2. **Token names are suai's**: while SP-1 is open, both sessions treat `--su-*` names as
   unstable; renames land in `tokens.css` first, never invented downstream.
3. **Fork layout is noy-db-ui's**: suai never assumes package paths beyond the published seam.
4. **Extraction before invention**: suai W1 issues generalize code moved from ui-suai —
   don't re-spec what exists.
5. **State changes**: when an SP closes, tick it here, mirror to `SYNC.local.md`, and
   comment on the held issues so the other session's next `gh issue list` shows it.
6. **Publicity**: BOTH repos are public. Issue detail is public in both trackers —
   write full technical detail wherever the work lives. Client names, product names,
   and strategy narrative never enter issues, commits, or committed files in either
   repo; they live only in local gitignored files (pattern: `noy-db-ui/SYNC.local.md`).

## Quick status commands

```bash
gh issue list -R vLannaAi/suai-css   --milestone "W0 · Integration surface"
gh issue list -R vLannaAi/noy-db-ui  --label hold          # what this side waits on
gh issue list -R vLannaAi/suai-css   --label sync-point    # the freeze levers
```
