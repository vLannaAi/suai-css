# SUAI Components - Index

**Semantic Utility Adaptive Interface - Component Documentation**

This is the main index for SUAI component documentation, organized by category.

---

## Document Structure

Each category has its own dedicated file:

### ✅ Completed Categories

1. **[Actions](./suai-components-actions.md)** - Category 1
   - Buttons, dropdowns, copy buttons, and the revolutionary `<sign>` system
   - 6 components (2 High, 1 Medium, 1 Low, 2 Skipped)
   - Status: Complete

2. **[Feedback & Status](./suai-components-feedback-status.md)** - Category 2
   - Notifications, alerts, progress indicators, loading states, and tooltips
   - 8 components (4 High, 4 Medium)
   - Status: Complete

3. **[Form Controls](./suai-components-form-controls.md)** - Category 3
   - User input, selection, and content creation
   - 10 components (7 High, 2 Medium, 1 Low priority)
   - Status: Complete

4. **[Imagery](./suai-components-imagery.md)** - Category 4
   - Images, media, avatars, galleries, and icons
   - 7 components (4 High, 2 Medium, 1 Skipped)
   - Status: Complete

5. **[Navigation](./suai-components-navigation.md)** - Category 5
   - Site navigation, paths, tabs, and trees
   - 7 components (2 High, 2 Medium, 1 Low priority)
   - Status: Complete

---

## SUAI Core Innovations

### 1. Unified Selection Pattern
All selection interactions use `<select type="*">`:
- radio, checkbox, toggle, switch, rating, slider, tabs, menu, etc.

### 2. Unified Labeling System
`label` and `hint` attributes replace `<label>` and `<legend>` elements:
```html
<input type="email" name="email" label="Email" hint="We'll never share">
```

### 3. Unified Media Element
`<media type="*">` replaces `<img>`, `<video>`, `<picture>`, `<svg>`:
```html
<media type="image" src="photo.jpg"></media>
```

### 4. Content Creation Ecosystem
- `<composer type="*">` - Universal editor (markdown, html, rich, code, etc.)
- `<preview>` - Live rendering
- `<version>` - Versioning/translations
- `<diff>` - Visual comparison

### 5. Universal Sequential Navigation
`<path><point>` for ANY dimension:
- Abstract: sitemap, history, memory, roadmap, workflow
- Spatial: itinerary (coordinates)
- Temporal: timeline (events)
- Media: playlist (tracks)

### 6. Semantic vs Decorative Icons
- **Semantic**: `<icon name="heroicons:arrow">` when icon IS the content
- **Decorative**: CSS classes like `icon-left:`, `icon-right:` when icon enhances content

### 7. Gallery Type System
`<gallery type="*">` for carousel, grid, masonry, lightbox, compare modes

---

## Component Summary

### Actions (6)
- Button, Button Group (skip), Copy Button, Dropdown, Dropdown Item (skip), Sign System (QR codes + 12 categories)

### Feedback & Status (8)
- Badge, Alert (3 patterns), Progress Bar, Progress Ring (Unified System), Skeleton, Spinner, Tag, Tooltip

### Form Controls (10)
- Checkbox, Color Picker, Input, Radio, Radio Group, Rating, Select, Slider, Switch/Toggle, Composer

### Imagery (7)
- Media, Avatar, Gallery, Carousel Item (obsolete), Image Comparison, Icon, Zoomable Frame (skipped)

### Navigation (7)
- Path, Breadcrumb Item (obsolete), Tabs, Tab Group (covered), Tab Panel (covered), Tree, Tree Item (covered)

---

## Priority Distribution (All Completed Categories)

**🔴 High Priority: 19 components**
- Actions: Button, Sign System
- Feedback: Badge/Sign, Alert, Spinner, Tooltip/Hint
- Form: Checkbox, Input, Radio, Select, Switch/Toggle, Composer
- Imagery: Media (image), Avatar, Image Comparison, Icon
- Navigation: Path (basic), Tabs

**🟡 Medium Priority: 12 components**
- Actions: Dropdown
- Feedback: Progress Bar, Progress Ring/System, Skeleton, Tag
- Form: Color Picker, Rating, Slider
- Imagery: Media (other types), Gallery
- Navigation: Path (full), Tree

**🟢 Low Priority: 3 components**
- Actions: Copy Button
- Form: Version, Diff
- Navigation: Path (Vue component)

**Obsolete/Covered: 7 components**
- Radio Group, Carousel Item, Breadcrumb Item, Tab Group, Tab Panel, Tree Item

**⚫ Skipped: 3 components**
- Button Group, Dropdown Item, Zoomable Frame

---

## Benefits of SUAI Unified Pattern

1. **Consistent API** - Same attributes (`label`, `hint`) across all form elements
2. **AI-Friendly** - Clear, predictable structure for code generation
3. **Less Markup** - No wrapper `<label>` or `<legend>` elements needed
4. **Semantic Clarity** - `<select type="*">` clearly indicates selection behavior
5. **Progressive Enhancement** - Works with/without JavaScript
6. **Accessibility** - Automatic ARIA handling via JS
7. **Form Integration** - Native form serialization
8. **Extensibility** - Easy to add new types and variants

---

## Quick Reference

### Replacing HTML with SUAI

| HTML Pattern | SUAI Replacement |
|--------------|------------------|
| `<img>` | `<media type="image">` |
| `<input type="radio">` + group | `<select type="radio">` |
| `<input type="checkbox">` + group | `<select type="checkbox" multiple>` |
| `<textarea>` | `<composer type="plain">` |
| `<label for="">` | `label="..."` attribute |
| `<legend>` | `label="..."` attribute |
| Breadcrumb nav | `<path type="sitemap"><point>` |
| Tabs | `<select type="tabs">` |
| Image carousel | `<gallery type="carousel">` |

---

## Revolutionary Innovations

### 1. `<sign>` System (Category 1: Actions)
A unified element for symbolic codes with semantic weight across 12+ categories:
- Machine-readable (QR, barcodes)
- Evaluative/Rating (stars, hearts)
- Certification (CE, ISO, eco)
- Status indicators
- And 9 more categories

### 2. Unified Progress System (Category 2: Feedback)
Six visual representations under one element:
- `<progress type="bar|ring|steps|gauge|skeleton|percent">`

### 3. Three-Pattern Notification (Category 2: Feedback)
Clear separation: `<alert>` (urgent), `<dialog>` (action required), `hint="..."` (help)

### 4. Pure CSS Tooltips (Category 2: Feedback)
`hint` attribute with ::before/::after - zero JavaScript, no extra DOM elements

### 5. Universal Sequential Navigation (Category 5: Navigation)
`<path><point>` for ANY dimension (sitemap, timeline, roadmap, playlist, etc.)

### 6. Unified Selection Pattern (Category 3: Forms)
`<select type="*">` for all selection interactions (radio, checkbox, tabs, rating, etc.)

---

**Document Version**: 2025-10-31
**Last Updated**: All 5 categories completed and organized into separate files
**Total Components**: 38 (19 High, 12 Medium, 3 Low, 7 Obsolete/Covered, 3 Skipped)
