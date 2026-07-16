# SUAI Vue - Stage 4: Full Vue 3 Component Library

**Status**: ⏳ **PLANNED** (Q2 2026)

---

## What Will SUAI Vue Be?

SUAI Vue (Stage 4) will be a complete Vue 3 component library with sophisticated abstractions and unified patterns. This is the **full framework experience** for Vue developers, built on the foundation of Stages 1-3.

---

## Planned Features

- ✅ Full SPA component library
- ✅ **Unified `<SUSelect type="*">` pattern**
  - `type="single"` - single selection
  - `type="multi"` - multi-selection
  - `type="search"` - searchable
  - `type="tags"` - tag input
- ✅ **`<SUMedia type="*">` unified media element**
  - `type="image"` - image viewer
  - `type="video"` - video player
  - `type="audio"` - audio player
  - `type="gallery"` - image gallery
  - `type="carousel"` - carousel
- ✅ Advanced components: `<SUComposer>`, `<SUPath>`, `<SUSign>`
- ✅ Vue 3 Composition API
- ✅ TypeScript support with full type inference
- ✅ Full IDE integration with component props autocomplete
- ✅ Nuxt 3 module

---

## Example Usage (Planned)

```vue
<template>
  <SUCard variant="elevated" theme="pla">
    <template #header>
      <h2>Vue Component Example</h2>
    </template>

    <!-- Unified Select Pattern -->
    <SUSelect
      v-model="selected"
      type="multi"
      :options="options"
      searchable
      placeholder="Select options..."
      @change="handleChange"
    />

    <!-- Unified Media Pattern -->
    <SUMedia
      type="gallery"
      :items="images"
      :cols="{ xs: 1, sm: 2, md: 3 }"
      lightbox
    />

    <template #actions>
      <SUButton @click="save" :loading="saving">
        Save Changes
      </SUButton>
      <SUButton variant="text">Cancel</SUButton>
    </template>
  </SUCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SUCard, SUSelect, SUMedia, SUButton } from '@suai/vue'

const selected = ref<string[]>([])
const saving = ref(false)

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' }
]

const images = [
  { src: '/img1.jpg', alt: 'Image 1' },
  { src: '/img2.jpg', alt: 'Image 2' }
]

async function handleChange(value: string[]) {
  console.log('Selected:', value)
}

async function save() {
  saving.value = true
  // Save logic
  await new Promise(resolve => setTimeout(resolve, 1000))
  saving.value = false
}
</script>
```

---

## Planned Component Catalog

### Actions
- `<SUButton>` - Button with variants, loading states
- `<SUButtonGroup>` - Button grouping
- `<SUFAB>` - Floating action button
- `<SUIconButton>` - Icon-only button

### Navigation
- `<SUMenu>` - Menu and dropdowns
- `<SUTabs>` - Tab panels
- `<SUBreadcrumb>` - Breadcrumb navigation
- `<SUPagination>` - Pagination controls
- `<SUStepper>` - Step-by-step navigation
- `<SUSidebar>` - Sidebar navigation

### Forms
- `<SUInput>` - All input types with validation
- `<SUSelect>` - Unified selection component (`type="*"`)
- `<SUCheckbox>` - Checkbox with indeterminate state
- `<SURadio>` - Radio button groups
- `<SUSwitch>` - Toggle switch
- `<SUSlider>` - Range slider
- `<SUDatepicker>` - Date selection
- `<SUTimepicker>` - Time selection
- `<SUFileUpload>` - File upload with preview
- `<SUCombobox>` - Searchable select

### Feedback & Status
- `<SUAlert>` - Alert messages
- `<SUToast>` - Toast notifications
- `<SUSnackbar>` - Snackbar messages
- `<SUDialog>` - Modal dialogs
- `<SUTooltip>` - Tooltips
- `<SUProgress>` - Progress indicators
- `<SUSpinner>` - Loading spinners
- `<SUSkeleton>` - Skeleton screens
- `<SUBadge>` - Badges and indicators

### Data Display
- `<SUTable>` - Data tables with sorting, filtering
- `<SUDataGrid>` - Advanced data grid
- `<SUList>` - Lists with virtualization
- `<SUTree>` - Tree view
- `<SUTimeline>` - Timeline component
- `<SUStats>` - Statistics cards

### Media
- `<SUMedia>` - Unified media component (`type="*"`)
- `<SUImage>` - Image with lazy loading
- `<SUVideo>` - Video player
- `<SUAudio>` - Audio player
- `<SUGallery>` - Image gallery
- `<SUCarousel>` - Carousel/slider
- `<SULightbox>` - Lightbox viewer

### Layout
- `<SUGrid>` - Grid system
- `<SUStack>` - Stack layout
- `<SUContainer>` - Container with max-width
- `<SUDivider>` - Divider lines
- `<SUCard>` - Card component
- `<SUPanel>` - Panel component

### Advanced
- `<SUComposer>` - Rich text composer
- `<SUPath>` - Path/route visualization
- `<SUSign>` - Signature pad
- `<SUChart>` - Chart integration (planned)
- `<SUMap>` - Map integration (planned)

---

## When to Use (Planned)

✅ **Perfect For**:
- Building Vue 3 applications
- Need full component ecosystem
- SPA/PWA projects
- Maximum developer experience
- Complex interactive applications
- Teams already using Vue
- Type-safe development with TypeScript

---

## TypeScript Support

Full type safety with IDE autocomplete:

```ts
import type { SUSelectProps, SUButtonVariant } from '@suai/vue'

// Full type inference
const props = defineProps<{
  variant: SUButtonVariant // 'solid' | 'outline' | 'text' | 'link'
  size: 'sm' | 'md' | 'lg'
  loading: boolean
}>()

// Component props autocomplete
<SUButton
  variant="solid"  // ✅ Autocomplete + validation
  size="md"        // ✅ Autocomplete + validation
  :loading="true"  // ✅ Type-checked
/>
```

---

## Nuxt 3 Integration (Planned)

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@suai/nuxt'],
  suai: {
    theme: 'pla',
    mode: 'light',
    components: true, // Auto-import components
    composables: true // Auto-import composables
  }
})
```

```vue
<!-- Auto-imported, no need for explicit imports -->
<template>
  <SUButton @click="handleClick">
    Click Me
  </SUButton>
</template>

<script setup>
// Composables auto-imported
const { theme, toggleTheme } = useSuaiTheme()
</script>
```

---

## Current Status

This stage is in **conceptual phase**. We're envisioning:

- Component API design
- Unified patterns (`type="*"` attributes)
- TypeScript architecture
- Composition API patterns
- Nuxt 3 module design
- Design system tokens

---

## Want to Help?

We're seeking feedback on Stage 4 vision:

- Which components are most important?
- What API patterns work best?
- How should theming work in Vue?
- Integration with existing Vue ecosystems?

Join the discussion: [GitHub Discussions](https://github.com/suai/suai-style/discussions)

---

## Meanwhile: Use Earlier Stages

While Stage 4 is in planning:

- **Stage 1 (suai-html)** is production-ready
- **Stage 2 (suai-css)** is in active development
- **Stage 3 (suai-js)** is in design phase

You can use Stage 1-3 with Vue today:

```vue
<template>
  <!-- Stage 1: Semantic HTML, styled by SUAI -->
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>

  <!-- Stage 3 (future): Web Components work in Vue -->
  <suai-select>
    <select v-model="value">
      <option value="1">Option 1</option>
    </select>
  </suai-select>
</template>
```

---

## Roadmap

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Conceptual Design | Q3 2025 | 📋 Planned |
| Component Prototypes | Q4 2025 | 📋 Planned |
| API Finalization | Q1 2026 | 📋 Planned |
| Alpha Release | Q2 2026 | 📋 Planned |
| Beta Release | Q3 2026 | 📋 Planned |
| Stable Release | Q4 2026 | 📋 Planned |

---

## Documentation

- **Roadmap**: `/docs/0-OVERVIEW/00-suai-roadmap.md`
- **Stage Comparison**: `/docs/0-OVERVIEW/01-stage-comparison.md`
- **Migration Guide**: `/docs/0-OVERVIEW/02-migration-guide.md`
- **Stage 4 Docs**: `/docs/5-STAGE-4-VUE/` (component specs)

---

## Component Specifications

Component specifications are already documented in `/docs/5-STAGE-4-VUE/`:

- `suai-components-index.md` - Overview and patterns
- `suai-components-actions.md` - Buttons, FABs
- `suai-components-navigation.md` - Menus, tabs, breadcrumbs
- `suai-components-form-controls.md` - Inputs, selects, checkboxes
- `suai-components-feedback-status.md` - Alerts, toasts, dialogs
- `suai-components-imagery.md` - Images, galleries, media
- `suai-components-decisions.md` - Design decisions
- `suai-feature-selection.md` - Feature selection criteria

---

## Stay Updated

This is a long-term vision. Follow progress:

- ⭐ Star the repository
- 👀 Watch for releases
- 💬 Join discussions
- 📧 Newsletter: (coming soon)

---

**Coming 2026: The Complete Vue 3 Experience with SUAI Patterns**
