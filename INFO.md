# SUAI CSS Framework - Comprehensive Codebase Analysis

## 1. PROJECT OVERVIEW

**Project Type:** CSS Framework Showcase & Reference Implementation

**Purpose:** SUAI (Semantic, Utility-first, Adaptive Interface) is a hybrid CSS methodology that combines:
- Semantic HTML structure
- SMACSS (Scalable and Modular Architecture for CSS) organization
- Utility-first CSS via UnoCSS/Tailwind
- Dual-theme system (Thai/Sintony fonts)
- AI-optimized coding patterns

This is a **display-only reference implementation** built with Nuxt.js that demonstrates how to structure CSS and HTML for modern web applications while optimizing for AI code generation and human maintainability.

---

## 2. TECHNOLOGY STACK

### Core Framework
- **Nuxt 4.1.3** - Vue.js meta-framework (SPA mode, SSR disabled)
- **Vue 3.5.22** - UI composition
- **Vue Router 4.5.1** - Client-side routing

### CSS Tooling
- **UnoCSS 66.5.4** - Atomic CSS engine (Tailwind CSS v3 preset)
  - `@unocss/preset-wind3` - Tailwind v3 compatibility
  - `@unocss/preset-attributify` - Attribute-based utilities
  - `@unocss/preset-icons` - Icon system (@iconify-json/heroicons)
  - `@unocss/transformer-directives` - `@apply` support
  - `@unocss/transformer-variant-group` - Variant grouping
- **PostCSS Nested 7.0.2** - CSS nesting support

### Additional Tools
- **Shiki 3.13.0** - Syntax highlighting engine (configured but not actively used)
- **Google Fonts** - Noto Sans Thai & Sintony webfonts

### Build Configuration
- Static site generation (Nitro preset: 'static')
- No SSR (SPA mode)
- Prerendering enabled for all routes

---

## 3. ARCHITECTURE PATTERNS

### Primary Pattern: SUAI Hybrid Architecture

The framework implements a unique 7-component architecture:

1. **Semantic HTML Foundation** - Native elements with minimal wrappers
2. **SMACSS Layer Organization** - 5-layer separation (Base, Layout, Module, State, Theme)
3. **Single Root Class Pattern** - One component = one CSS class
4. **Utility-First Composition** - Tailwind/UnoCSS `@apply` directives
5. **Multi-Line Utility Grouping** - 3-group pattern (Layout → Appearance → Dark/State)
6. **Advanced CSS Selectors** - Combinators (`>`, `+`, `~`), pseudo-elements, `:not()`
7. **State Management via Classes** - `.is-*` prefix for dynamic states

### Key Architectural Decisions

**No Scoped Styles:**
```vue
<!-- ENFORCED PATTERN -->
<style scoped>
/* All component styles are in assets/styles/modules/component.css */
</style>
```
All CSS lives in external files under SMACSS organization - never in `<style scoped>` blocks.

**Single Root Class Pattern:**
```html
<article class="card">
  <header><!-- No class --></header>
  <section><!-- No class --></section>
</article>
```

```css
.card {
  > header { /* Styled via selector */ }
  > section { /* Styled via selector */ }
}
```

---

## 4. DIRECTORY STRUCTURE

```
/Users/vicio/_github/suai-css/
├── docs/                                    # Framework documentation
│   ├── 0A. suai_style_framework.md         # Core methodology
│   ├── 0B. suai_features.md                # 27 feature specifications
│   ├── 1. suai_core_architecture_features.md
│   ├── 2. suai_utility_first_system_features.md
│   ├── 3. suai_theme_adaptation_features.md
│   ├── 4. suai_developer_control_features.md
│   ├── 5. suai_ai_optimization_features.md
│   ├── 6. tailwind_vs_unocss_suai.md
│   └── 7. suai-display-html-tags.md
│
└── suai-basic/                              # Main application
    ├── .claude.md                           # AI development guidelines (698 lines!)
    ├── package.json                         # Dependencies
    ├── nuxt.config.ts                       # Nuxt configuration
    ├── uno.config.ts                        # UnoCSS configuration
    ├── tsconfig.json                        # TypeScript config
    │
    ├── app.vue                              # Root layout component
    ├── pages/
    │   ├── index.vue                        # Main showcase page
    │   └── layout-demo.vue                  # Grid layout demonstration
    │
    ├── plugins/
    │   └── router.ts                        # Custom scroll behavior
    │
    ├── assets/styles/                       # SMACSS-organized CSS
    │   ├── main.css                         # Import manifest
    │   │
    │   ├── base/                            # @layer base - HTML defaults
    │   │   ├── reset.css                    # CSS reset
    │   │   ├── variables-thai.css           # Thai theme variables
    │   │   ├── variables-sintony.css        # Sintony theme variables
    │   │   └── styles.css                   # Semantic element styles
    │   │
    │   ├── layout/                          # @layer components - Page structure
    │   │   ├── page-structure.css           # Header/footer/main grid
    │   │   ├── containers.css               # Section/article layouts
    │   │   └── sidebar.css                  # Navigation sidebar
    │   │
    │   ├── modules/                         # @layer components - UI components
    │   │   ├── media.css                    # Figure, image, caption
    │   │   ├── lists.css                    # ul, ol, dl
    │   │   ├── code-display.css             # Code blocks
    │   │   ├── showcase.css                 # Showcase page components
    │   │   └── layout-demo.css              # Layout demo styles
    │   │
    │   └── state/                           # @layer state - Interactive states
    │       ├── theme.css                    # Dark/light mode, theme toggle
    │       └── interactions.css             # Hover, active, focus states
    │
    └── public/
        ├── favicon.ico
        └── robots.txt
```

---

## 5. KEY FEATURES

### 5.1 Dual Theme System

**Thai Theme** (`data-theme="thai"`)
- Font: Noto Sans Thai (300, 400, 500, 600, 700)
- Aesthetic: Warm, rounded corners, generous spacing
- File: `suai-basic/assets/styles/base/variables-thai.css`

**Sintony Theme** (`data-theme="sintony"`)
- Font: Sintony (400, 700)
- Aesthetic: Clean, sharp, compact spacing
- File: `suai-basic/assets/styles/base/variables-sintony.css`

Both themes support **4 combinations**: Thai Light, Thai Dark, Sintony Light, Sintony Dark

### 5.2 Dark Mode System

Implemented via data attributes:
- `data-mode="light"` - Light mode
- `data-mode="dark"` - Dark mode

Persisted in localStorage and applied via:
```javascript
// suai-basic/app.vue:105-110
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  const mode = isDarkMode.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-mode', mode);
  localStorage.setItem('suai-mode', mode);
};
```

### 5.3 Complete HTML Tag Showcase

The index page demonstrates styling for:
- **Headings:** h1-h6 with responsive fluid typography
- **Text:** p, strong, em, code (inline), blockquote, mark
- **Links:** a with hover/visited/focus states
- **Lists:** ul, ol, dl with nested support
- **Media:** figure, figcaption, img
- **Code:** pre, code blocks with syntax highlighting
- **Structural:** article, section, hr

### 5.4 Responsive Design

Mobile-first breakpoints:
```typescript
// suai-basic/uno.config.ts:10-14
presetWind3({
  dark: 'class',
  preflights: false, // Custom reset in base/reset.css
})
```

Breakpoints inherited from Tailwind v3: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### 5.5 SMACSS Layer System

Explicit cascade control via `@layer` directives:
```css
/* Example from suai-basic/assets/styles/layout/page-structure.css:4 */
@layer components {
  .suai-page { /* ... */ }
}
```

Layer order (low to high specificity):
1. `@layer base` - Element defaults
2. `@layer layout` - Page structure (also uses `@layer components`)
3. `@layer components` - Modules
4. `@layer state` - Interactive states

---

## 6. STYLING APPROACH

### 6.1 CSS Methodology: SUAI Hybrid

**Three-Group Utility Pattern:**
```css
/* From suai-basic/.claude.md:148-167 */
.component {
  /* Group 1: Layout & Flow */
  @apply flex items-center justify-between;
  @apply w-full h-auto;
  @apply p-6 md:p-8;

  /* Group 2: Appearance */
  @apply bg-white rounded-xl;
  @apply border-2 border-gray-200;
  @apply shadow-md;

  /* Group 3: Dark Mode & States */
  @apply dark:bg-gray-900 dark:border-gray-700;
  @apply hover:shadow-lg;
  @apply transition-all duration-300;
}
```

### 6.2 Naming Conventions

**Prefix System:**
| Prefix | Purpose | Example |
|--------|---------|---------|
| None | Component | `.card`, `.button` |
| `.l-` | Layout | `.l-grid`, `.l-sidebar` |
| `.is-` | State | `.is-active`, `.is-loading` |
| `.theme-` | Theme | `.theme-dark` |
| `--` | Modifier | `.card--featured` |

### 6.3 Advanced Selectors

Heavy use of combinators and pseudo-elements:
```css
/* From suai-basic/assets/styles/layout/sidebar.css:82-94 */
> li > a {
  @apply block px-4 py-3 text-sm font-medium;

  &[data-layer="base"] {
    @apply border-l-blue-500;
  }

  &[data-layer="layout"] {
    @apply border-l-cyan-500;
  }
}
```

### 6.4 CSS Variable System

Theme switching via CSS custom properties:
```css
/* From suai-basic/assets/styles/base/variables-thai.css:6-9 */
:root[data-theme="thai"],
:root:not([data-theme]) {
  --font-sans: "Noto Sans Thai", -apple-system, "Segoe UI", system-ui, sans-serif;
  /* ... 80+ variables */
}
```

---

## 7. CONFIGURATION FILES

### 7.1 nuxt.config.ts
**Location:** `suai-basic/nuxt.config.ts`

**Key Configuration:**
```typescript
export default defineNuxtConfig({
  ssr: false,                    // SPA mode only
  modules: ['@unocss/nuxt'],     // UnoCSS integration
  css: ['~/assets/styles/main.css'],

  nitro: {
    preset: 'static',            // Static site generation
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  routeRules: {
    '/**': { prerender: true }   // Prerender all routes
  }
})
```

### 7.2 uno.config.ts
**Location:** `suai-basic/uno.config.ts`

**Key Features:**
```typescript
export default defineConfig({
  presets: [
    presetWind3({
      dark: 'class',
      preflights: false  // Use custom reset
    }),
    presetAttributify(),
    presetIcons({
      collections: {
        heroicons: () => import('@iconify-json/heroicons')
      }
    })
  ],

  theme: {
    colors: {
      primary: { DEFAULT: '#3b82f6', light: '#60a5fa', dark: '#1d4ed8' },
      success: { DEFAULT: '#10b981', light: '#34d399', dark: '#059669' },
      danger: { DEFAULT: '#ef4444', light: '#f87171', dark: '#dc2626' },
      warning: { DEFAULT: '#f59e0b', light: '#fbbf24', dark: '#d97706' },
      info: { DEFAULT: '#06b6d4', light: '#22d3ee', dark: '#0891b2' }
    }
  },

  safelist: ['i-heroicons-shield-check']
})
```

### 7.3 package.json
**Location:** `suai-basic/package.json`

**Scripts:**
- `dev` - Development server (localhost:3000)
- `build` - Static site build
- `generate` - Static site generation
- `preview` - Preview production build

---

## 8. DEPENDENCIES

### Production Dependencies
- **nuxt@^4.1.3** - Meta-framework
- **vue@^3.5.22** - Reactive UI library
- **vue-router@^4.5.1** - SPA routing

### Development Dependencies

**UnoCSS Ecosystem:**
- `@unocss/nuxt@^66.5.4` - Nuxt integration
- `@unocss/preset-attributify@^66.5.4` - Attribute mode
- `@unocss/preset-icons@^66.5.4` - Icon system
- `@unocss/preset-wind3@^66.5.4` - Tailwind v3 preset
- `@unocss/transformer-directives@^66.5.4` - @apply support
- `@unocss/transformer-variant-group@^66.5.4` - Variant groups
- `unocss@^66.5.4` - Core engine

**Additional:**
- `@iconify-json/heroicons@^1.1.5` - Heroicons icon set
- `postcss-nested@^7.0.2` - CSS nesting support
- `shiki@^3.13.0` - Syntax highlighter

---

## 9. RECENT CHANGES (Git Status Analysis)

### Modified Files
```
M suai-basic/README.md              # Documentation updates
M suai-basic/app.vue                # Layout component updates
M suai-basic/assets/styles/main.css # CSS import manifest
M suai-basic/nuxt.config.ts         # Configuration changes
M suai-basic/package.json           # Dependency updates
M suai-basic/package-lock.json      # Lock file updates
M suai-basic/pages/index.vue        # Showcase page updates
M suai-basic/uno.config.ts          # UnoCSS config updates
```

### Deleted Files
```
D suai-basic/assets/styles/layout/container.css  # Replaced by containers.css
```

### New Files (Untracked)
```
?? suai-basic/.claude.md                          # AI development guidelines (NEW!)
?? suai-basic/assets/styles/base/                 # New base layer structure
?? suai-basic/assets/styles/layout/containers.css # New container styles
?? suai-basic/assets/styles/layout/page-structure.css
?? suai-basic/assets/styles/layout/sidebar.css
?? suai-basic/assets/styles/modules/              # New modules directory
?? suai-basic/assets/styles/state/                # New state directory
?? suai-basic/pages/layout-demo.vue               # New demo page
?? suai-basic/plugins/router.ts                   # Router customization
```

### Analysis of Changes

**Major Refactor in Progress:**
The project is undergoing a significant reorganization from a less structured CSS approach to full SMACSS compliance:

1. **CSS Reorganization:** Moving from monolithic CSS to SMACSS layers (base, layout, modules, state)
2. **Component Modularization:** Breaking down large CSS files into focused modules
3. **Documentation Addition:** Comprehensive `.claude.md` guide for AI coding standards
4. **New Features:** Layout demo page for showcasing grid patterns

---

## 10. CODE PATTERNS & BEST PRACTICES

### 10.1 Component Pattern

**File:** `suai-basic/pages/index.vue`

```vue
<template>
  <div class="showcase-container">
    <!-- Single root class -->
    <section id="hero" class="hero-section">
      <!-- Semantic HTML, no child classes -->
      <h1>SUAI CSS Framework</h1>
      <p>Semantic, Utility-first, Adaptive Interface</p>
    </section>
  </div>
</template>

<style scoped>
/* All showcase styles are in assets/styles/modules/showcase.css */
</style>
```

### 10.2 CSS Component Structure

**File:** `suai-basic/assets/styles/modules/showcase.css:5-68`

```css
@layer components {
  /* Feature 1.1.2: Single Root Class */
  .showcase-container {
    @apply w-full bg-white dark:bg-gray-900 transition-colors duration-300;
  }

  .hero-section {
    /* Layout & Flow */
    @apply py-20 md:py-32 lg:py-40;
    @apply relative overflow-hidden;

    /* Appearance */
    @apply bg-gradient-to-br from-primary via-primary-dark to-[#1e3c8a];
    @apply text-white;

    /* Pseudo-element decoration */
    &::before {
      @apply content-[''] absolute inset-0 pointer-events-none;
      background-image: linear-gradient(/* grid pattern */);
      background-size: 50px 50px;
    }

    /* Child selectors */
    > h1 {
      @apply text-5xl md:text-6xl lg:text-7xl;
      @apply font-bold mb-6 relative z-10;
    }
  }
}
```

### 10.3 State Management Pattern

**File:** `suai-basic/assets/styles/state/interactions.css:5-46`

```css
@layer state {
  .is-active {
    @apply ring-2 ring-primary ring-opacity-50;
  }

  .is-disabled {
    @apply opacity-50 cursor-not-allowed pointer-events-none;
  }

  .is-loading {
    @apply opacity-60 pointer-events-none;
  }

  .is-error {
    @apply border-red-500 border-2
      bg-red-50 dark:bg-red-900/10;
  }
}
```

### 10.4 Theme Switching

**File:** `suai-basic/app.vue:93-143`

```vue
<script setup lang="ts">
const currentTheme = ref<'thai' | 'sintony'>('thai');
const isDarkMode = ref(false);

const setTheme = () => {
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('suai-theme', currentTheme.value);
};

onMounted(() => {
  // Load saved preferences
  const savedTheme = localStorage.getItem('suai-theme') as 'thai' | 'sintony' | null;
  const savedMode = localStorage.getItem('suai-mode') || 'light';

  if (savedTheme) currentTheme.value = savedTheme;
  isDarkMode.value = savedMode === 'dark';

  document.documentElement.setAttribute('data-theme', currentTheme.value);
  document.documentElement.setAttribute('data-mode', savedMode);
});
</script>
```

### 10.5 Responsive Typography

**File:** `suai-basic/assets/styles/base/styles.css:15-27`

```css
h1 {
  @apply text-5xl font-black;
  font-size: clamp(2.25rem, 5vw, 3.75rem);  /* Fluid typography */
}

h2 {
  @apply text-4xl font-bold;
  font-size: clamp(1.875rem, 4vw, 2.25rem);
}

h3 {
  @apply text-2xl font-bold;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
}
```

### 10.6 Advanced Selector Usage

**File:** `suai-basic/assets/styles/layout/sidebar.css:82-129`

```css
aside nav ul > li > a {
  /* Layer color system via data attributes */
  &[data-layer="base"] {
    @apply border-l-blue-500;
  }

  &[data-layer="layout"] {
    @apply border-l-cyan-500;
  }

  &[data-layer="modules"] {
    @apply border-l-green-500;
  }

  &[data-layer="state"] {
    @apply border-l-amber-500;
  }

  /* State management */
  &.is-active,
  &:target {
    @apply bg-primary bg-opacity-15
      text-primary dark:text-primary-light
      font-bold pl-3;
  }
}
```

---

## 11. ESSENTIAL FILES FOR UNDERSTANDING

To fully understand SUAI framework, study these files in order:

1. **`suai-basic/.claude.md`** (698 lines)
   - Complete development guidelines
   - Mandatory rules and anti-patterns
   - Decision trees and workflows

2. **`docs/0A. suai_style_framework.md`**
   - Core methodology explanation
   - Philosophy and design principles
   - Complete card component example

3. **`docs/0B. suai_features.md`**
   - 27 feature specifications organized in 5 categories
   - AI composition enablers vs. human control features

4. **`suai-basic/assets/styles/modules/showcase.css`** (358 lines)
   - Best implementation example
   - All SUAI patterns demonstrated
   - Component variants and states

5. **`suai-basic/assets/styles/base/styles.css`** (295 lines)
   - Semantic HTML foundation
   - Element defaults with dark mode
   - Responsive typography patterns

6. **`suai-basic/assets/styles/state/theme.css`** (200 lines)
   - Theme switching implementation
   - CSS variables usage
   - Dark mode system

7. **`suai-basic/app.vue`** (145 lines)
   - Root layout component
   - Theme/mode state management
   - Sidebar navigation structure

8. **`suai-basic/pages/index.vue`** (351 lines)
   - Complete showcase implementation
   - Semantic HTML structure examples
   - All element types demonstrated

9. **`suai-basic/uno.config.ts`** (81 lines)
   - UnoCSS configuration
   - Theme color system
   - Preset configuration

10. **`suai-basic/nuxt.config.ts`** (56 lines)
    - Application configuration
    - SPA setup and static generation
    - Module integration

---

## 12. SUMMARY

The SUAI CSS Framework is an **innovative, AI-optimized CSS methodology** that combines the best aspects of semantic HTML, SMACSS organization, and utility-first CSS. It's designed as a reference implementation showcasing how to build maintainable, scalable, and theme-aware web applications.

### Unique Selling Points

1. **AI-Friendly:** Predictable patterns reduce AI hallucination (70% AI-composable)
2. **Human-Controlled:** Layer overrides and CSS variables (30% human customization)
3. **Zero Scoped Styles:** All CSS externalized for maximum reusability
4. **Single Root Class:** Minimal HTML clutter with semantic structure
5. **Dual Theme System:** Thai/Sintony fonts with 4 theme combinations
6. **Complete Documentation:** 698-line AI development guide (`.claude.md`)

### Current State

Active refactoring from initial implementation to full SMACSS compliance with comprehensive documentation for AI coding agents.

---

*Generated by code-explorer agent on 2025-10-30*
