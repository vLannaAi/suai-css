import { defineConfig, presetWind4, presetIcons, transformerVariantGroup, transformerDirectives } from 'unocss'

// SUAI component-authoring config (Wave 0 artifact #3, draft 2026-07-16).
//
// ROLE: this is the AUTHORING-side bridge onto the --su- token contract
// (see tokens.css). Components are written in SUAI's nested-composition style
// (single root class, semantic child selectors, multi-line utility groups via
// @apply); every colour/shape/font/shadow utility below is LATE-BOUND — it
// compiles to var(--su-*), so the pre-compiled component CSS re-skins at
// runtime when a theme (themes/speed.css) or consumer rewrites the variables.
// Utilities READ tokens; themes WRITE them. Consumers never need this config —
// they receive compiled CSS (the opaque seam).
//
// PRESET: wind4 (Tailwind-4-compatible), superseding the older docs' wind3
// stance — aligned with ui-suai/showcase so authoring is identical across
// repos. Structural utilities (flex, gap-2, p-6) are engine-internal and
// never part of the published contract.
//
// DARK RULE: no `dark:` COLOUR variants in components — mode is handled once
// by the theme layer ([data-su-mode="dark"] flips the variables). `dark:` (or
// a data-su-mode variant, if added later) is reserved for rare structural
// tweaks only.
export default defineConfig({
  presets: [
    // Library build keeps the reset ON and ships it once inside the compiled
    // style.css; an app that ALSO runs Uno must mirror this config with
    // presetWind4({ preflights: { reset: false } }) to avoid a double reset
    // (same pattern as the noy-db-ui showcase).
    presetWind4(),
    presetIcons({ scale: 1.1, warn: true }),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    // Colour utilities: text-su-fg, bg-su-bg-accent, border-su-border,
    // text-su-accent-2, bg-su-danger-bg, text-su-danger-fg, …
    colors: {
      'su-bg': 'var(--su-bg)',
      'su-bg-accent': 'var(--su-bg-accent)',
      'su-fg': 'var(--su-fg)',
      'su-muted': 'var(--su-muted)',
      'su-subtle': 'var(--su-subtle)',
      'su-border': 'var(--su-border)',
      'su-border-subtle': 'var(--su-border-subtle)',
      'su-accent': 'var(--su-accent)',
      'su-accent-fg': 'var(--su-accent-fg)',
      'su-accent-2': 'var(--su-accent-2)',
      'su-danger': 'var(--su-danger)',
      'su-danger-bg': 'var(--su-danger-bg)',
      'su-danger-fg': 'var(--su-danger-fg)',
      'su-success': 'var(--su-success)',
      'su-success-bg': 'var(--su-success-bg)',
      'su-success-fg': 'var(--su-success-fg)',
      'su-warning': 'var(--su-warning)',
      'su-warning-bg': 'var(--su-warning-bg)',
      'su-warning-fg': 'var(--su-warning-fg)',
      'su-info': 'var(--su-info)',
      'su-info-bg': 'var(--su-info-bg)',
      'su-info-fg': 'var(--su-info-fg)',
    },
    // rounded-su (cards/panels), rounded-su-control (inputs/buttons), …
    radius: {
      'su': 'var(--su-radius)',
      'su-sm': 'var(--su-radius-sm)',
      'su-lg': 'var(--su-radius-lg)',
      'su-full': 'var(--su-radius-full)',
      'su-control': 'var(--su-radius-control)',
    },
    // font-su-body, font-su-display, font-su-brand, font-su-mono
    font: {
      'su-body': 'var(--su-font-body)',
      'su-display': 'var(--su-font-display)',
      'su-brand': 'var(--su-font-brand)',
      'su-mono': 'var(--su-font-mono)',
    },
    // shadow-su-sm, shadow-su, shadow-su-lg, shadow-su-card
    shadow: {
      'su-sm': 'var(--su-shadow-sm)',
      'su': 'var(--su-shadow)',
      'su-lg': 'var(--su-shadow-lg)',
      'su-card': 'var(--su-shadow-card)',
    },
  },
  shortcuts: {
    // Composable building blocks — token-bound siblings of the proven
    // nui-* set. The display voice belongs in component CSS via
    // font-su-display + arbitrary values on --su-display-* where needed.
    'su-chip': 'inline-flex items-center gap-1 rounded-su-control px-2 py-0.5 text-xs',
    'su-btn': 'inline-flex items-center gap-1 rounded-su-control px-2 py-1 text-xs transition-colors disabled:(opacity-40 pointer-events-none)',
    'su-btn-ghost': 'su-btn text-su-muted hover:bg-su-bg-accent',
    'su-btn-soft': 'su-btn bg-su-bg-accent text-su-muted hover:opacity-80',
    'su-btn-primary': 'su-btn bg-su-accent text-su-accent-fg hover:opacity-90',
    'su-icon-btn': 'inline-flex items-center justify-center rounded-su-control hover:bg-su-bg-accent',
    'su-field': 'border border-su-border rounded-su-control px-2 py-1 text-sm bg-su-bg w-full',
    'su-panel': 'rounded-su border border-su-border bg-su-bg text-su-fg shadow-su-lg',
    'su-card': 'rounded-su border border-su-border-subtle bg-su-bg text-su-fg shadow-su-card',
  },
})
