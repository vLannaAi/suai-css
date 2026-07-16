# SUAI Framework: 4-Stage Development Roadmap

**สวย (SUAI)** = Beautiful in Thai

The SUAI framework is a progressive enhancement CSS system designed for visual-first experiences, with a unique 4-stage architecture that lets developers choose the right level of complexity for their needs.

---

## Overview: The 4-Stage Philosophy

SUAI embraces **progressive enhancement** through four distinct implementation stages. Each stage builds upon the previous, adding capabilities while maintaining backward compatibility.

```
Stage 1: suai-html    → Semantic HTML + CSS only (no-JS)
Stage 2: suai-css     → + UnoCSS utilities + suai-type attributes
Stage 3: suai-js      → + Web Components + custom elements
Stage 4: suai-vue     → + Full Vue 3 component library
```

### Key Principle: Developer Choice

Unlike monolithic frameworks, SUAI lets you **stop at any stage**. Use Stage 1 for server-rendered content, Stage 2 for utility-first development, Stage 3 for framework-agnostic components, or Stage 4 for full Vue applications.

---

## Stage 1: suai-html (Semantic HTML + CSS)

**Status**: ✅ **IMPLEMENTED**
**Location**: `/suai-html/`
**Repository**: Current implementation

### What It Is

Pure semantic HTML5 styling with theme-aware CSS. Zero JavaScript requirements (except optional theme switcher for demos). This is the foundation of SUAI.

### Key Features

- **Official HTML5 tags only**: `<article>`, `<header>`, `<table>`, `<form>`, `<button>`, `<input>`, etc.
- **CSS-only styling** with CSS variables
- **Theme system**: `suai-lai/` with 3 themes
  - **PLA** (ปลา - Fish): Material Design 3 inspired
  - **NOK** (นก - Bird): Bootstrap 5.3 inspired
  - **MAA** (ม้า - Horse): iOS/Apple HIG inspired
- **No custom elements or attributes**
- **No JavaScript dependencies**
- **No build tools required**

### When to Use

- ✅ Server-side rendered content (Rails, Laravel, Django, etc.)
- ✅ Static sites and blogs
- ✅ SEO-critical pages
- ✅ Maximum accessibility
- ✅ Email templates
- ✅ Progressive web apps (fallback layer)
- ✅ When you want beautiful HTML without complexity

### Usage Example

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.css">
</head>
<body>
  <header>
    <h1>Beautiful Semantic HTML</h1>
  </header>
  <main>
    <article>
      <h2>Just Works</h2>
      <p>No classes, no JavaScript, just semantic HTML.</p>
      <button>Primary Action</button>
    </article>
  </main>
</body>
</html>
```

### Theme Switching

```html
<!-- Set theme via data attributes -->
<html data-theme="pla" data-mode="dark">

<!-- Or switch themes -->
<html data-theme="nok" data-mode="light">
<html data-theme="maa" data-mode="dark">
```

**No JavaScript required.** Just change the data attributes (server-side or static).

### Documentation

- **Implementation**: `/suai-html/`
- **Demos**: `/suai-html/demos/` (1-6.html)
- **Docs**: `/docs/2-STAGE-1-HTML/`

---

## Stage 2: suai-css (HTML + Utility CSS)

**Status**: ⏳ **PLANNED** (Q2 2025)
**Location**: `/suai-css/` (placeholder)

### What It Is

Extends Stage 1 with UnoCSS utility patterns and enhanced styling via `suai-type=""` custom attributes. Still **no JavaScript required**, but adds build-time optimization.

### Key Features

- **All of Stage 1** (semantic HTML styling)
- **UnoCSS/Tailwind utility classes** integration
- **`suai-type=""` custom attributes** for enhanced components
  - `<div suai-type="card">` = card component
  - `<div suai-type="badge">` = badge component
  - `<section suai-type="hero">` = hero section
- **@apply patterns** for component extraction
- **Nested utility groups** (SUAI's multi-line style)
- **Still no JavaScript requirements**

### When to Use

- ✅ Need rapid prototyping with utilities
- ✅ Want SUAI patterns + utility-first benefits
- ✅ Build tools available (Vite, Webpack)
- ✅ Component-based styling without JavaScript
- ✅ Design system implementation
- ✅ When you need more than HTML but not full components

### Usage Example

```html
<div suai-type="card" class="p-6 rounded-xl shadow-lg hover:shadow-2xl">
  <h3 class="text-2xl font-bold mb-4">Enhanced Card</h3>
  <p>Combines semantic styling with utility classes</p>
  <button class="px-6 py-3 bg-primary text-white rounded-lg">
    Action
  </button>
</div>
```

### Relationship to Stage 1

Stage 2 **extends**, not replaces. You can mix:

```html
<!-- Stage 1: Pure semantic -->
<article>
  <h2>Standard Article</h2>
</article>

<!-- Stage 2: With utilities -->
<article class="max-w-prose mx-auto">
  <h2 class="text-3xl font-bold">Enhanced Article</h2>
</article>

<!-- Stage 2: With suai-type -->
<div suai-type="card">
  <h2>Card Component</h2>
</div>
```

### Documentation

- **Implementation**: `/suai-css/` (planned)
- **Docs**: `/docs/3-STAGE-2-CSS/` (roadmap only)

---

## Stage 3: suai-js (HTML + CSS + Web Components)

**Status**: ⏳ **PLANNED** (Q4 2025)
**Location**: `/suai-js/` (placeholder)

### What It Is

Adds custom elements with progressive enhancement. Web Components for advanced interactions, while **maintaining fallbacks** to Stage 1/2 when JavaScript is unavailable.

### Key Features

- **All of Stage 1 + 2**
- **Web Components** for advanced interactions
- **Custom elements**: `<suai-select>`, `<suai-dialog>`, `<suai-tabs>`, etc.
- **Progressive enhancement** (works without JS using Stage 1/2 fallbacks)
- **Framework-agnostic** (works with any framework or no framework)
- **TypeScript support**
- **Minimal JavaScript** (only for interaction, not rendering)

### When to Use

- ✅ Need interactive components
- ✅ Want framework-agnostic solution
- ✅ Progressive enhancement required
- ✅ Browser-native approach preferred
- ✅ SPAs without framework lock-in
- ✅ When you need behavior, not just appearance

### Usage Example

```html
<!-- Web Component with fallback -->
<suai-dialog>
  <!-- Stage 1 fallback: works as <dialog> even without JS -->
  <dialog>
    <h2>Dialog Title</h2>
    <p>Content works with or without JavaScript</p>
    <button onclick="this.closest('dialog').close()">Close</button>
  </dialog>
</suai-dialog>

<!-- Enhanced select -->
<suai-select value="option1">
  <!-- Fallback to native <select> -->
  <select name="choice">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
</suai-select>
```

### Custom Elements Planned

- `<suai-select>` - Enhanced select with search, multi-select
- `<suai-dialog>` - Modal dialogs with animations
- `<suai-tabs>` - Tab panels with keyboard navigation
- `<suai-accordion>` - Collapsible sections
- `<suai-carousel>` - Image/content carousel
- `<suai-tooltip>` - Rich tooltips
- `<suai-menu>` - Context menus and dropdowns

### Documentation

- **Implementation**: `/suai-js/` (planned)
- **Docs**: `/docs/4-STAGE-3-JS/` (roadmap only)

---

## Stage 4: suai-vue (Full Vue 3 Components)

**Status**: ⏳ **PLANNED** (Q2 2026)
**Location**: `/suai-vue/` (placeholder)

### What It Is

Complete Vue 3 component library with sophisticated abstractions and unified patterns. This is the **full framework experience** for Vue developers.

### Key Features

- **Full SPA component library**
- **Unified `<SUSelect type="*">` pattern**
  - `type="single"` - single selection
  - `type="multi"` - multi-selection
  - `type="search"` - searchable
  - `type="tags"` - tag input
- **`<SUMedia type="*">` unified media element**
  - `type="image"` - image viewer
  - `type="video"` - video player
  - `type="audio"` - audio player
  - `type="gallery"` - image gallery
  - `type="carousel"` - carousel
- **Advanced components**: `<SUComposer>`, `<SUPath>`, `<SUSign>`
- **Vue 3 Composition API**
- **TypeScript support**
- **Full IDE integration** with component props autocomplete

### When to Use

- ✅ Building Vue 3 applications
- ✅ Need full component ecosystem
- ✅ SPA/PWA projects
- ✅ Maximum developer experience
- ✅ Complex interactive applications
- ✅ When you've chosen Vue as your framework

### Usage Example

```vue
<template>
  <SUCard variant="elevated" theme="pla">
    <template #header>
      <h2>Vue Component</h2>
    </template>

    <SUSelect
      v-model="selected"
      type="multi"
      :options="options"
      searchable
      @change="handleChange"
    />

    <SUMedia
      type="gallery"
      :items="images"
      :cols="{ xs: 1, sm: 2, md: 3 }"
    />

    <template #actions>
      <SUButton @click="save">Save</SUButton>
      <SUButton variant="text">Cancel</SUButton>
    </template>
  </SUCard>
</template>

<script setup lang="ts">
import { SUCard, SUSelect, SUMedia, SUButton } from '@suai/vue'

const selected = ref<string[]>([])
const options = [...]
const images = [...]

function handleChange(value: string[]) {
  console.log('Selected:', value)
}
</script>
```

### Component Catalog

See `/docs/5-STAGE-4-VUE/` for full component reference including:

- Actions: Button, ButtonGroup, FAB, IconButton
- Navigation: Menu, Tabs, Breadcrumb, Stepper, Sidebar
- Forms: All input types, Select, Checkbox, Radio, Switch
- Feedback: Alert, Toast, Snackbar, Dialog, Tooltip
- Data: Table, DataGrid, List, Tree, Timeline
- Media: Image, Video, Audio, Gallery, Carousel
- Layout: Grid, Stack, Container, Divider

### Documentation

- **Implementation**: `/suai-vue/` (planned)
- **Docs**: `/docs/5-STAGE-4-VUE/`

---

## Stage Comparison Matrix

| Feature | Stage 1 (HTML) | Stage 2 (CSS) | Stage 3 (JS) | Stage 4 (Vue) |
|---------|----------------|---------------|--------------|---------------|
| **Semantic HTML** | ✅ | ✅ | ✅ | ✅ |
| **CSS Variables** | ✅ | ✅ | ✅ | ✅ |
| **Theme System** | ✅ (3 themes) | ✅ | ✅ | ✅ |
| **Utility Classes** | ❌ | ✅ UnoCSS | ✅ | ✅ |
| **Custom Attributes** | ❌ | ✅ suai-type | ✅ | ✅ |
| **Web Components** | ❌ | ❌ | ✅ | ✅ |
| **Vue Components** | ❌ | ❌ | ❌ | ✅ |
| **JavaScript Required** | ❌ | ❌ | Optional¹ | ✅ |
| **Build Tools Required** | ❌ | ✅ | ✅ | ✅ |
| **Framework Agnostic** | ✅ | ✅ | ✅ | ❌ (Vue 3) |
| **SSR Compatible** | ✅ | ✅ | ✅ | ✅ |
| **Progressive Enhancement** | ✅ | ✅ | ✅ | Partial² |
| **Bundle Size** | ~50KB | ~100KB³ | ~150KB | ~300KB |

**Notes**:
1. Stage 3 uses progressive enhancement - works without JS using Stage 1/2 fallbacks
2. Stage 4 Vue components work in SSR but require hydration
3. Stage 2 size varies based on utility usage

---

## Migration Between Stages

### Stage 1 → Stage 2

**Seamless**: Add UnoCSS and start using utilities. No breaking changes.

```html
<!-- Stage 1: Still works -->
<article>
  <h2>Title</h2>
</article>

<!-- Stage 2: Enhanced -->
<article class="max-w-4xl mx-auto">
  <h2 class="text-3xl">Title</h2>
</article>
```

### Stage 2 → Stage 3

**Progressive**: Add Web Components alongside existing HTML.

```html
<!-- Stage 2: Still works -->
<div suai-type="tabs">...</div>

<!-- Stage 3: Enhanced -->
<suai-tabs>
  <!-- Falls back to Stage 2 if JS fails -->
  <div suai-type="tabs">...</div>
</suai-tabs>
```

### Stage 3 → Stage 4

**Framework adoption**: Replace Web Components with Vue components.

```html
<!-- Stage 3: Web Component -->
<suai-select :options="opts"></suai-select>

<!-- Stage 4: Vue Component -->
<SUSelect v-model="value" :options="opts" />
```

See `/docs/0-OVERVIEW/02-migration-guide.md` for detailed migration instructions.

---

## Why 4 Stages?

### 1. **Not Everyone Needs Everything**

Most projects don't need a full component library. Stage 1 might be perfect for your blog. Stage 2 might be enough for your marketing site. Stage 3 for your web app. Stage 4 only if you're building complex Vue applications.

### 2. **Progressive Complexity**

Learn SUAI incrementally. Master semantic HTML styling, then add utilities, then components, then Vue. Each stage teaches new concepts without overwhelming.

### 3. **Performance by Default**

Only load what you need. Stage 1 is ~50KB. Don't pay for features you don't use.

### 4. **Framework Diversity**

Stages 1-3 work with **any** framework (React, Svelte, Angular, etc.). Only Stage 4 is Vue-specific. SUAI doesn't force framework choice.

### 5. **Accessibility First**

Lower stages = better baseline accessibility. Stage 1 uses native HTML elements. Stage 2 enhances styling. Stage 3 adds behavior progressively. Stage 4 maintains accessibility through Vue.

---

## Roadmap Timeline

| Stage | Status | Release | Focus |
|-------|--------|---------|-------|
| **Stage 1** | ✅ Implemented | Q4 2024 | Production-ready, 3 themes |
| **Stage 2** | 🔧 Planning | Q2 2025 | UnoCSS integration, suai-type attributes |
| **Stage 3** | 📋 Design | Q4 2025 | Web Components, progressive enhancement |
| **Stage 4** | 💭 Concept | Q2 2026 | Full Vue 3 library |

---

## Getting Started

### For New Projects

**Start with Stage 1**. It's production-ready, zero dependencies, and covers 80% of styling needs.

```bash
# Install (coming soon to npm)
npm install @suai/html

# Or use CDN
<link rel="stylesheet" href="https://cdn.suai.dev/suai-html/suai.css">
```

### For Existing Projects

1. **SSR/Static sites**: Use Stage 1 (drop-in CSS)
2. **Utility-first projects**: Wait for Stage 2 (or use Stage 1 + your utilities)
3. **Component-based**: Wait for Stage 3/4 (or use Stage 1 as foundation)

---

## Philosophy: Visual-First, AI-Optimized

SUAI is designed for **visual-only experiences** with AI composition in mind:

- **200% Semantic**: Strong semantic HTML foundation
- **200% Visual**: Beautiful by default, no compromises
- **200% Intelligent**: Deterministic patterns for AI code generation

See `/docs/0-OVERVIEW/03-philosophy.md` for the complete manifesto.

---

## Community & Support

- **GitHub**: [github.com/suai/suai-style](https://github.com/suai/suai-style)
- **Documentation**: This repository
- **Demos**: `/suai-html/demos/`
- **Thai Market**: Designed for Thailand's cost-efficient development

---

## License

MIT License - see LICENSE file

---

**สวย (Beautiful) by Design, Progressive by Nature**
