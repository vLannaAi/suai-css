# SUAI Stage Comparison: Choosing the Right Stage

This guide helps you choose which SUAI stage best fits your project needs.

---

## Quick Decision Tree

```
Are you building with Vue 3?
├─ YES → Stage 4 (suai-vue) - Full component library
└─ NO ↓

Do you need interactive components?
├─ YES → Stage 3 (suai-js) - Web Components
└─ NO ↓

Do you need utility classes or build optimization?
├─ YES → Stage 2 (suai-css) - Utilities + suai-type
└─ NO ↓

→ Stage 1 (suai-html) - Pure semantic HTML + CSS
```

---

## Stage 1: suai-html

### ✅ Perfect For

- **Static sites & blogs** (Hugo, Jekyll, 11ty)
- **Server-rendered apps** (Rails, Laravel, Django, Express + templates)
- **Email templates** (zero JS requirement)
- **Documentation sites**
- **Landing pages**
- **Progressive web apps** (as fallback layer)
- **Prototypes** (no build setup needed)
- **Accessibility-first** projects

### ❌ Not Ideal For

- Projects requiring complex utility compositions
- Apps needing heavy customization per component
- Interactive SPAs (though it can be the base layer)

### Code Example

```html
<!DOCTYPE html>
<html data-theme="pla" data-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.css">
</head>
<body>
  <article>
    <header>
      <h1>Article Title</h1>
      <p><time datetime="2025-01-15">January 15, 2025</time></p>
    </header>
    <p>Just write semantic HTML. It's beautiful.</p>
    <footer>
      <button>Read More</button>
    </footer>
  </article>
</body>
</html>
```

### Pros

- ✅ Zero build process
- ✅ Zero JavaScript
- ✅ ~50KB total bundle
- ✅ Works everywhere (email, RSS, print)
- ✅ Maximum accessibility
- ✅ SEO perfect
- ✅ Fast time-to-interactive
- ✅ Easy to learn

### Cons

- ❌ Limited styling flexibility
- ❌ No utility classes
- ❌ Harder to customize per-component
- ❌ No dynamic themes without reloading

---

## Stage 2: suai-css

**Status**: ⏳ Planned (Q2 2025)

### ✅ Perfect For

- **Utility-first developers** familiar with Tailwind/UnoCSS
- **Design systems** needing consistency + flexibility
- **Marketing sites** with varied layouts
- **Component libraries** without JavaScript
- **Rapid prototyping** with utilities
- **Customization-heavy** projects

### ❌ Not Ideal For

- Simple blogs (Stage 1 is easier)
- Email templates (utilities don't work in email)
- Teams unfamiliar with utility-first CSS

### Code Example

```html
<div suai-type="card" class="
  max-w-md mx-auto
  p-6 rounded-xl
  shadow-lg hover:shadow-2xl
  transition-shadow duration-300
">
  <h2 class="text-2xl font-bold mb-4">Enhanced Card</h2>
  <p class="text-gray-600 mb-6">
    Mix semantic suai-type with utility classes
  </p>
  <button class="
    px-6 py-3
    bg-primary text-white
    rounded-lg
    hover:bg-primary-dark
    transition-colors
  ">
    Call to Action
  </button>
</div>
```

### Pros

- ✅ All of Stage 1 benefits
- ✅ Utility-first flexibility
- ✅ `suai-type` semantic attributes
- ✅ Still no JavaScript
- ✅ Better customization
- ✅ Faster iteration

### Cons

- ❌ Requires build tools (Vite/Webpack)
- ❌ Larger bundle (~100KB+ depending on usage)
- ❌ Steeper learning curve
- ❌ Utility class noise in HTML

---

## Stage 3: suai-js

**Status**: ⏳ Planned (Q4 2025)

### ✅ Perfect For

- **Interactive web apps** (not full SPAs)
- **Framework-agnostic** projects
- **Progressive enhancement** advocates
- **Hybrid SSR + client-side** apps
- **Multi-framework** environments
- **Projects transitioning** from static to interactive

### ❌ Not Ideal For

- Simple static content (Stage 1/2 is better)
- Pure SPAs (Stage 4 might be better if using Vue)
- Email templates (no JS support)

### Code Example

```html
<suai-tabs>
  <!-- Progressive enhancement fallback -->
  <div role="tablist">
    <button role="tab" aria-selected="true">Tab 1</button>
    <button role="tab">Tab 2</button>
  </div>

  <div role="tabpanel">
    <p>Content 1 - works even without JavaScript!</p>
  </div>

  <div role="tabpanel" hidden>
    <p>Content 2</p>
  </div>
</suai-tabs>

<suai-select searchable multi>
  <!-- Falls back to native select -->
  <select name="options" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</suai-select>
```

### Pros

- ✅ All of Stage 1 + 2 benefits
- ✅ Interactive components
- ✅ Framework-agnostic (Web Components)
- ✅ Progressive enhancement
- ✅ Works with React, Vue, Svelte, etc.
- ✅ Fallback to Stage 1/2 when JS fails

### Cons

- ❌ Requires JavaScript
- ❌ Larger bundle (~150KB)
- ❌ Browser compatibility considerations
- ❌ Learning Web Components API

---

## Stage 4: suai-vue

**Status**: ⏳ Planned (Q2 2026)

### ✅ Perfect For

- **Vue 3 SPAs**
- **Complex interactive applications**
- **Full-stack Vue** (Nuxt, Vite + Vue)
- **Teams already using Vue**
- **Component-heavy** applications
- **Type-safe development** (TypeScript)

### ❌ Not Ideal For

- Non-Vue projects (use Stage 3 instead)
- Static content (use Stage 1)
- Framework-agnostic needs
- Simple marketing sites

### Code Example

```vue
<template>
  <SUCard theme="pla" variant="elevated">
    <template #header>
      <h2>Vue Component</h2>
    </template>

    <SUSelect
      v-model="selected"
      type="multi"
      :options="options"
      searchable
      placeholder="Select options..."
      @change="handleChange"
    />

    <SUButton @click="save" :loading="saving">
      Save Changes
    </SUButton>
  </SUCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SUCard, SUSelect, SUButton } from '@suai/vue'

const selected = ref<string[]>([])
const saving = ref(false)

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' }
]

async function handleChange(value: string[]) {
  console.log('Selected:', value)
}

async function save() {
  saving.value = true
  // Save logic
  saving.value = false
}
</script>
```

### Pros

- ✅ Full component ecosystem
- ✅ Best developer experience
- ✅ TypeScript support
- ✅ Vue 3 Composition API
- ✅ IDE autocomplete
- ✅ Unified patterns (`<SUSelect type="*">`)
- ✅ Maximum productivity

### Cons

- ❌ Vue 3 only (not framework-agnostic)
- ❌ Largest bundle (~300KB)
- ❌ Steepest learning curve
- ❌ Framework lock-in

---

## Feature Comparison Matrix

| Feature | Stage 1 | Stage 2 | Stage 3 | Stage 4 |
|---------|---------|---------|---------|---------|
| **Setup Complexity** | None | Medium | Medium | High |
| **Learning Curve** | Easy | Medium | Medium | Hard |
| **Bundle Size** | ~50KB | ~100KB | ~150KB | ~300KB |
| **Build Tools** | ❌ | ✅ Required | ✅ Required | ✅ Required |
| **JavaScript** | ❌ | ❌ | ✅ Optional¹ | ✅ Required |
| **Framework Lock-in** | None | None | None | Vue 3 |
| **SSR Support** | ✅ Perfect | ✅ Perfect | ✅ Good | ✅ Good² |
| **Email Compatible** | ✅ Yes | ❌ No | ❌ No | ❌ No |
| **Accessibility** | ✅ Perfect | ✅ Perfect | ✅ Good | ✅ Good |
| **SEO** | ✅ Perfect | ✅ Perfect | ✅ Perfect | ✅ Good³ |
| **Theming** | ✅ 3 themes | ✅ 3 themes | ✅ 3 themes | ✅ Dynamic |
| **Customization** | ⚠️ Limited | ✅ High | ✅ High | ✅ Maximum |
| **Interactive** | ❌ | ❌ | ✅ Yes | ✅ Yes |
| **TypeScript** | N/A | N/A | ✅ Yes | ✅ Full |

**Notes**:
1. Stage 3 uses progressive enhancement - works without JS
2. Stage 4 requires hydration in SSR
3. Stage 4 SEO depends on SSR setup

---

## Project Type Recommendations

### Content Sites

| Project Type | Recommended Stage | Why |
|-------------|------------------|-----|
| Blog | **Stage 1** | No build needed, perfect SEO |
| Documentation | **Stage 1** | Semantic, accessible, fast |
| Marketing Site | **Stage 2** | Flexibility for varied layouts |
| Portfolio | **Stage 1 or 2** | Depends on customization needs |
| News Site | **Stage 1** | Fast, SEO-first |

### Web Applications

| Project Type | Recommended Stage | Why |
|-------------|------------------|-----|
| Admin Dashboard (Vue) | **Stage 4** | Full component library |
| Admin Dashboard (other) | **Stage 3** | Framework-agnostic |
| E-commerce | **Stage 2 or 3** | Static + interactive hybrid |
| SaaS Product (Vue) | **Stage 4** | Maximum productivity |
| SaaS Product (other) | **Stage 3** | Web Components |
| Internal Tool | **Stage 1 or 2** | Simple, fast development |

### Hybrid Projects

| Project Type | Recommended Stage | Why |
|-------------|------------------|-----|
| SSR + Client | **Stage 3** | Progressive enhancement |
| Multi-page App | **Stage 1 or 2** | Per-page JS sparingly |
| PWA | **Stage 3** | Offline + fallbacks |
| Hybrid Mobile | **Stage 3 or 4** | Depends on framework choice |

---

## When to Mix Stages

You can (and should) mix stages in large projects:

### Example 1: Marketing Site + App

```
Marketing pages (/) → Stage 1 (fast, SEO)
Dashboard (/app) → Stage 4 (Vue SPA)
Docs (/docs) → Stage 1 (simple, semantic)
```

### Example 2: Progressive Enhancement

```
Base styling → Stage 1 (works everywhere)
Utility helpers → Stage 2 (where needed)
Interactive widgets → Stage 3 (progressive)
```

### Example 3: Gradual Migration

```
Legacy pages → Stage 1 (drop-in CSS)
New pages → Stage 2 (utility-first)
Future components → Stage 3/4 (as needed)
```

---

## Performance Considerations

### Initial Load Time

```
Stage 1: ~50KB CSS
Stage 2: ~100KB CSS + utilities
Stage 3: ~150KB CSS + JS
Stage 4: ~300KB full bundle
```

### Time to Interactive (TTI)

- **Stage 1**: Instant (no JS)
- **Stage 2**: Instant (no JS)
- **Stage 3**: ~100-200ms (Web Component registration)
- **Stage 4**: ~300-500ms (Vue hydration)

### Caching Strategy

All stages benefit from:
- CSS caching (long-lived)
- Theme switching via data attributes (no reload)
- CDN distribution

---

## Cost-Benefit Analysis

### Development Time

| Stage | Setup Time | Learning Curve | Development Speed |
|-------|-----------|----------------|-------------------|
| 1 | 5 min | 1 day | Fast for simple |
| 2 | 30 min | 1 week | Fast for complex |
| 3 | 1 hour | 2 weeks | Medium |
| 4 | 2 hours | 1 month | Fast (mature tools) |

### Maintenance Burden

| Stage | Updates | Complexity | Team Size |
|-------|---------|------------|-----------|
| 1 | Low | Low | 1-2 devs |
| 2 | Medium | Medium | 2-4 devs |
| 3 | Medium | Medium | 2-4 devs |
| 4 | High | High | 4+ devs |

---

## Decision Checklist

Use this checklist to determine your stage:

### Stage 1 Checklist

- [ ] Content-first site (blog, docs, news)
- [ ] No JavaScript needed
- [ ] Semantic HTML sufficient
- [ ] Email template use case
- [ ] Maximum accessibility required
- [ ] Fastest time-to-market needed

**3+ checked?** → Stage 1

### Stage 2 Checklist

- [ ] Need utility-first workflow
- [ ] Varied component styling
- [ ] Build tools acceptable
- [ ] Team familiar with Tailwind/UnoCSS
- [ ] Customization per-component needed
- [ ] Still no JavaScript requirement

**3+ checked?** → Stage 2

### Stage 3 Checklist

- [ ] Interactive components needed
- [ ] Framework-agnostic requirement
- [ ] Progressive enhancement important
- [ ] Using multiple frameworks
- [ ] JavaScript acceptable
- [ ] Not committed to Vue

**3+ checked?** → Stage 3

### Stage 4 Checklist

- [ ] Building with Vue 3
- [ ] Full SPA experience
- [ ] Complex interactive app
- [ ] TypeScript + IDE support wanted
- [ ] Maximum developer productivity
- [ ] Team experienced with Vue

**3+ checked?** → Stage 4

---

## Still Unsure?

**Default recommendation**: Start with **Stage 1**.

Why?
- ✅ No lock-in (can upgrade later)
- ✅ Immediate productivity
- ✅ Learn SUAI principles
- ✅ Zero setup friction
- ✅ Works everywhere

You can always add Stage 2/3/4 later as needs grow.

---

## Questions to Ask

1. **"Does my project need JavaScript?"**
   - No → Stage 1 or 2
   - Yes → Stage 3 or 4

2. **"Am I building with Vue 3?"**
   - Yes → Stage 4
   - No → Stage 1, 2, or 3

3. **"Do I need utility classes?"**
   - Yes → Stage 2 or higher
   - No → Stage 1

4. **"Is this a content site or web app?"**
   - Content → Stage 1
   - Web app → Stage 3 or 4

5. **"What's my team's experience level?"**
   - Beginner → Stage 1
   - Intermediate → Stage 2
   - Advanced → Stage 3 or 4

---

## Summary Table

| Your Need | Recommended Stage |
|-----------|------------------|
| Static blog | **Stage 1** |
| Marketing site | **Stage 1** or **Stage 2** |
| Web app (Vue) | **Stage 4** |
| Web app (other) | **Stage 3** |
| Email template | **Stage 1** |
| Documentation | **Stage 1** |
| Admin dashboard | **Stage 3** or **Stage 4** |
| E-commerce | **Stage 2** or **Stage 3** |
| Portfolio | **Stage 1** or **Stage 2** |
| SaaS product | **Stage 3** or **Stage 4** |

---

**When in doubt, start simple. You can always enhance later.**
