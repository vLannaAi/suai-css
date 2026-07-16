# SUAI Intake Backlog — from noy-db-ui

**Status:** Draft backlog, 2026-07-16 (rev. 2: three-fork model + `--su-` prefix).
**Context:** noy-db-ui becomes one shared engine + three rendering forks with **no parity obligation** (identical data capability, different visual tier):
- `@noy-db/ui` — shared headless engine (never forks: DSL, schema, composables).
- `ui-vanilla` — vanilla JS+CSS binding.
- `ui-nuxt` — regressed/simplified rebuild on Nuxt UI (decent UX, nothing special).
- `ui-suai` — flagship; seeded from the *current* ui-nuxt implementation, progressively swapping bespoke visuals for SUAI components as SUAI catches up.

Everything that is *advanced UI but not a data-store interface* becomes SUAI's prerogative. noy-db-ui consumes SUAI components as opaque, self-styled units (no utility-engine leakage across the seam). Wave 1 extractions generalize from the living `ui-suai` code.

**The split criterion (apply to every future case):**
> A component or token belongs to SUAI if it is **schema-blind** — it can be fully driven by plain props/slots/CSS variables and never needs to know about `collection.describe()`, the search AST, or noy-db records. Anything that reads schema, query state, or record semantics stays in noy-db-ui.

**Working rule:** *extraction before invention* — when something already exists in noy-db-ui, move and generalize it rather than re-speccing it; SUAI development is demand-driven by noy-db-ui requests first, catalog ambitions second.

---

## Wave 0 — Joint integration surface (do first, small, unblocks everything)

- [x] **Token contract v1 — DRAFTED** → `suai-css/tokens.css` (canonical file: full token set with neutral defaults, dark block, migration map from `--suai-*`/showcase names, consumer-bridge examples; scoping via `data-su-theme` × `data-su-mode`). Review pending. Original scope: settle SUAI token naming once: **`--su-*`** (decided 2026-07-16; retire both the `--bg-*/--text-*` doc variants and the longer `--suai-*` form). Unify the whole grammar on `su`: `--su-*` tokens, `<su-*>` custom elements, `SU*` Vue components, `.su-*`/`data-su-*` where needed; npm scope stays `@suai/*`. Include a one-time docs sweep to remove `suai-`/`su-` inconsistencies. Absorb the categories proven in the noy-db-ui showcase:
  - Color roles (from `--nui-*`): `accent`, `accent-fg`, `fg`, `muted`, `subtle`, `border`, `bg`, `bg-accent`, `danger` + `success`, `warning`, `info` (from showcase badge tokens).
  - Second data-accent: `--accent-2` (showcase "two-kingdoms" split: chrome accent vs data accent).
  - Typography: `--font-display / -body / -mono / -brand`, `--display-transform / -spacing / -weight`.
  - Shape: `--radius`, `--radius-control`, `--border-w`.
  - Elevation: `--shadow-card` (+ sm/lg ramp).
  - Rhythm: `--space-row`, `--shell-gap` (seed of a spacing scale).
- [x] **Theme mechanism v1 — DRAFTED**: `data-su-theme` (palette) × `data-su-mode` (light|dark), namespaced to avoid host collisions, multi-level cascade. First canonical theme: **`speed`** → `suai-css/themes/speed.css`, ported from showcase's Speed palette (first consumer: **i3speedex**). Decision: rebuild in SUAI rather than adapt PLA/NOK/MAA (nothing shared; a theme is ~40 lines of overrides). PLA/NOK/MAA stay legacy demos until migrated. Still open: the tiny JS helper (`useSuTheme`) for system-mode resolution.
- [ ] **Nuxt UI bridge map.** One documented mapping table: Nuxt UI theme CSS variables ↔ `--suai-*` tokens, so SUAI components visually blend inside a Nuxt-UI-based noy-db-ui page. This is the *only* coupling contract between the two styling worlds.
- [ ] **Opaque packaging rule.** SUAI components ship self-contained compiled CSS (themeable only via `--su-*`); no UnoCSS/Tailwind requirement leaks to consumers. (Resolves the preset-wind vs wind4 vs Tailwind-v4 conflict permanently.)
- [x] **Proof demo — VERIFIED** → `suai-css/demo/speed-demo.html` + compiled `demo/demo.css` (`pnpm demo:build`; needs `@unocss/cli`, not just `unocss`). Renders and was browser-verified in three states: speed light, speed dark (page toggle), scoped dark island (subtree `data-su-mode="dark"`, no JS), and whitelabel fallback (attribute removed → contract defaults, same compiled CSS).
- [x] **Authoring config — DRAFTED** → `suai-css/uno.config.ts` (wind4; theme maps `su-*` colors/radius/font/shadow to `var(--su-*)` so nested-composition authoring is late-bound to the token contract; `su-btn`/`su-field`/`su-panel`/`su-card` shortcuts; dark rule: no `dark:` colour variants in components — mode is the theme layer's job). Supersedes the docs' wind3 stance (add to docs sweep).
- [ ] Verify current Nuxt UI major (v4 line: Reka UI + Tailwind v4, MIT) before the rebase plan is finalized.

## Wave 1 — Extractions (exist in noy-db-ui today, schema-blind, move & generalize)

- [ ] **Adaptive text / auto-fit label** — `packages/ui/src/adaptive-text.ts` + `packages/ui-nuxt/src/runtime/internal/ellipsis-title.ts` → SUAI auto-font / auto-size / auto-truncate label. (The user-requested component; logic already headless.)
- [ ] **Gallery / lightbox** — `AttachmentGallery` + the lightbox (prev/next nav, filename+metadata caption, crop/EXIF helpers `crop.ts`, `exif.ts`) → SUAI `<gallery type="grid|lightbox|carousel|masonry|compare">` (matches the existing Stage-4 spec).
- [ ] **Chips** — `FilterChips` shell + `nui-chip` shortcut → generic chip / chip-group (schema-driven filter semantics stay in noy-db-ui).
- [ ] **Popover** — `internal/Popover.vue` → SUAI popover, CSS-first (native `popover` attribute where possible, per SUAI doctrine).
- [ ] **Skeleton / empty state / stat card shells** — `insight/LoadingSkeleton`, `EmptyState`, `StatCard` (presentational shells only; `summaryCards` data feeding stays).
- [ ] **Responsive column mechanism** — `responsive-columns.ts` + `column-width.ts` *mechanism* (container-width → visible-column-set, priority-based progressive display) → SUAI. The *policy* (which schema fields matter) stays in noy-db-ui.

## Wave 2 — New builds (SUAI-native, demanded by noy-db-ui)

- [ ] **Bi-language input & textarea** — dual-script entry (e.g. Thai/English), paired fields or inline toggle, per-script font handling (pairs with `--font-*` tokens and Thai font work in suai-lai themes).
- [ ] **Bi-language multi-segment Thai address composer** — structured segments (บ้านเลขที่/หมู่/ซอย/ถนน/ตำบล/อำเภอ/จังหวัด/รหัสไปรษณีย์) with dual-language output; schema-blind: emits a plain value object.
- [ ] **Presentational table shell** (decide after Wave 1): sortable headers, sticky header (`--suai-thead-*` tokens), column resize/reorder as a dumb config-driven grid. Boundary case — see below.
- [ ] **Progress / status family** as needed (`<progress type="bar|ring|steps|skeleton">` from the spec) — only when noy-db-ui requests one.

## Explicitly NOT SUAI (stays in noy-db-ui — schema-aware)

`CollectionList`, `SearchBox`, `SavedSearchMenu`, `RecentSearchMenu`, `NlSearchButton`, `ColumnChooser`, `GroupByControl`, `SearchModeGroup`, `RecordDetail`, `RecordForm`, `TraverseBar`, `TraverseScrubber` (traverse semantics), `ItemPath`, `RecordHistory`, `RelatedList`, `FieldControl`, `HeaderFilter*` cells, the whole search DSL / `useCollectionList` / `describe()` layer, voice/LLM/i18n core.

## Boundary cases (decide per the criterion, not upfront)

- **Customizable column table**: the rendering shell could be SUAI; everything that makes it *useful* in noy-db (schema → columns, filters-in-headers, prefs persistence) is noy-db-ui. Risk of a leaky abstraction — default to keeping the table in noy-db-ui until a second SUAI consumer needs it.
- **`ColumnHeader` / `HeaderFilterDate`**: generic sort-header and date-range-picker cores could extract later; low priority.
- **`NuiText`**: depends on what it renders — audit before assigning.

## Accessibility posture (agreed 2026-07-16)

**ARIA is not a priority. Core = zero-ARIA streamlined semantic HTML + innovative AI universal access. ARIA is preserved as an opt-in compliance extension.**

- SUAI core: **no hand-authored ARIA**; semantics via native elements (`details`, `dialog`, `popover`, real form controls).
- Design rule that keeps the extension cheap: every `su-` component keeps **native interactive elements inside** (real `<button>`/`<input>`/`<dialog>`), so keyboard/focus behavior comes from the browser and the compliance extension only ever adds attributes — never behavior.
- The compliance extension is **derivable, not hand-written**: SUAI's deterministic grammar (single root class + fixed semantic children + `is-` states) lets a module walk the DOM and emit correct ARIA mechanically, at build time or runtime. Ship it only to consumers who need compliance. It is an extension/module, not a theme (attributes ≠ CSS).
- `ui-nuxt` fork: composite widgets come from Nuxt UI/Reka with built-in ARIA — do not strip, do not hand-author beyond it.
- Alternative sensorial UI (voice search, narrate, AI assist) is additive product surface, developed in noy-db-ui.
