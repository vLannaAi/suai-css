# SUAI CSS - Unified Architecture V2.0

**Last Updated:** November 2025
**Status:** Production Ready
**Version:** 2.0.0

## Overview

SUAI CSS V2.0 represents a complete architectural refactor from separate theme files to a unified, scalable CSS architecture. The framework now supports **3 complete design systems** (PLA, NOK, MAA) with **light and dark modes** for each, all within a single CSS file.

### Key Achievements

- **57% code reduction**: From 4,307 lines (4 files) to 1,831 lines (1 file)
- **31% file size reduction**: From 98 KB to 68 KB
- **3 design systems**: Material Design 3, Bootstrap 5.3, iOS/Apple HIG
- **6 theme combinations**: PLA Light/Dark, NOK Light/Dark, MAA Light/Dark
- **Zero JavaScript required**: Pure CSS theming via data attributes
- **Auto dark mode**: Respects `prefers-color-scheme` media query
- **Single source of truth**: One file for all themes and modes

---

## Architecture Overview

### File Structure

```
/suai/
├── suai.css (1,831 lines, 68 KB)          # Unified theme file
├── suai-minimal.js (194 lines)            # Optional theme switcher
└── themes/                                 # DEPRECATED - to be deleted
    ├── pla/
    │   ├── pla-light.css (2,018 lines)    # OLD - replaced by suai.css
    │   └── pla-dark.css (1,233 lines)     # OLD - replaced by suai.css
    └── nok/
        ├── nok-light.css (528 lines)      # OLD - replaced by suai.css
        └── nok-dark.css (528 lines)       # OLD - replaced by suai.css
```

### How It Works

The unified architecture uses **data attributes** on the `<html>` element to switch themes:

```html
<!-- Material Design 3 - Light Mode -->
<html data-theme="pla" data-mode="light">

<!-- Bootstrap 5.3 - Dark Mode -->
<html data-theme="nok" data-mode="dark">

<!-- iOS/Apple HIG - Light Mode -->
<html data-theme="maa" data-mode="light">
```

CSS automatically applies the correct theme using attribute selectors:

```css
/* PLA theme variables */
html[data-theme="pla"] {
  --pla-primary: #3b82f6;
  --pla-surface: #ffffff;
  /* ... */
}

/* PLA dark mode overrides */
html[data-theme="pla"][data-mode="dark"] {
  --pla-primary: #93c5fd;
  --pla-surface: #1f2937;
  /* ... */
}

/* PLA component styles */
html[data-theme="pla"] body {
  background-color: var(--pla-surface);
  color: var(--pla-text);
  font-family: var(--pla-font-family);
}
```

---

## Theme Specifications

### PLA Theme (Fish / ปลา)
**Design System:** Google Material Design 3
**Font:** Roboto Flex (variable font)
**Aesthetic:** Modern, elevated surfaces, MD3 elevation system

**Color Palette:**
- Primary: `#3b82f6` (light) / `#93c5fd` (dark)
- Surface: `#ffffff` (light) / `#1f2937` (dark)
- Elevation: 4 levels of shadows (enabled in both modes)

**Key Features:**
- Material Design 3 color system with tonal palettes
- Complete surface elevation system (shadows)
- Rounded corners with MD3 specifications
- Bottom-border inputs (Material style)
- Mobile-first responsive layout system (6 patterns)

**Fixed Issues:**
- ✅ Shadows now enabled in light mode (was disabled)
- ✅ Layout system now available in dark mode (was missing)

### NOK Theme (Bird / นก)
**Design System:** Bootstrap 5.3
**Font:** System font stack (matches Bootstrap)
**Aesthetic:** Clean, professional, enterprise-ready

**Color Palette:**
- Primary: `#0d6efd` (light) / `#6ea8fe` (dark)
- Gray scale: 9 levels matching Bootstrap
- Semantic colors: success, info, warning, danger

**Key Features:**
- Bootstrap 5.3 color values exactly matched
- System font stack for cross-platform consistency
- Full-border inputs (Bootstrap style)
- Compact spacing and sharp corners
- Comprehensive table styling

### MAA Theme (Horse / ม้า)
**Design System:** iOS/Apple Human Interface Guidelines
**Font:** Thai Sans Neue (consistent bilingual Thai/English support across all platforms)
**Aesthetic:** Sleek, minimalist, iOS-native feel

**Color Palette:**
- System Blue: `#007AFF` (light) / `#0A84FF` (dark)
- System Grays: 6 levels matching iOS
- Semantic colors: Green, Orange, Red, Cyan

**Key Features:**
- iOS system colors with proper light/dark variants
- Thai Sans Neue font for consistent bilingual support across all platforms (Thai/English)
- Rounded corners (10px default, iOS style)
- Filled background inputs (iOS style)
- Minimum touch target: 44px (Apple HIG compliance)
- Subtle shadows (iOS aesthetic)
- Label color hierarchy (primary, secondary, tertiary, quaternary)

---

## Component Coverage

All three themes include complete styling for:

### Typography
- Headings: `h1` through `h6`
- Paragraphs: `p`, `small`
- Inline: `strong`, `em`, `code`, `mark`, `del`, `ins`
- Quotes: `blockquote`, `q`, `cite`

### Lists
- Unordered: `ul`, `li`
- Ordered: `ol`, `li`
- Definition: `dl`, `dt`, `dd`

### Tables
- Structure: `table`, `thead`, `tbody`, `tfoot`, `tr`, `th`, `td`
- Semantic: `caption`, `col`, `colgroup`

### Forms
- Buttons: `button`, `input[type="button/submit/reset"]`
- Text inputs: `input[type="text/email/password/number/tel/url/search"]`
- Date/time: `input[type="date/time/datetime-local"]`
- Textarea: `textarea`
- Select: `select`

### Code
- Inline: `code`
- Blocks: `pre`, `pre code`
- Keyboard: `kbd`
- Sample: `samp`
- Variable: `var`

### Sections
- Structure: `article`, `section`, `aside`, `header`, `footer`, `main`, `nav`
- Metadata: `address`, `figure`, `figcaption`
- Separator: `hr`

### Layout System (PLA Theme Only)
Six responsive layout patterns:
1. **Basic**: Header + Main + Footer
2. **Side Navigation**: Mobile drawer → Desktop fixed sidebar
3. **With Aside**: Stacked mobile → Sidebar desktop
4. **Bottom Toolbar**: Mobile bottom → Desktop top
5. **Articles Grid**: Single column → Two columns
6. **Sections**: Vertical sections with headers

Breakpoints:
- Mobile-first (default)
- Tablet: `768px` and up
- Desktop: `1024px` and up

---

## Usage Guide

### Basic Setup (No JavaScript)

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <link rel="stylesheet" href="path/to/suai/suai.css">
</head>
<body>
  <h1>Hello World</h1>
  <p>SUAI CSS works without JavaScript!</p>
</body>
</html>
```

### With Theme Switching (Optional JavaScript)

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="light">
<head>
  <link rel="stylesheet" href="path/to/suai/suai.css">
  <script src="path/to/suai/suai-minimal.js"></script>
</head>
<body>
  <button onclick="suaiSet('pla', 'dark')">PLA Dark</button>
  <button onclick="suaiSet('nok', 'light')">NOK Light</button>
  <button onclick="suaiSet('maa', 'dark')">MAA Dark</button>
</body>
</html>
```

### JavaScript API

```javascript
// Set theme and mode
suaiSet('pla', 'dark');    // Material Design 3, dark mode
suaiSet('nok', 'light');   // Bootstrap 5.3, light mode
suaiSet('maa', 'dark');    // iOS/Apple HIG, dark mode
suaiSet('none', 'light');  // Remove all CSS (pure HTML)

// Get current theme
const current = suaiGet();
// Returns: {theme: 'pla', mode: 'light'}
```

### Auto Dark Mode

The framework automatically detects OS dark mode preference:

```css
/* CSS automatically applies dark mode if user prefers it */
@media (prefers-color-scheme: dark) {
  html[data-theme="pla"]:not([data-mode="light"]):not([data-mode="dark"]) {
    /* Apply dark mode variables */
  }
}
```

Users without explicit mode selection get their OS preference. JavaScript also checks `window.matchMedia('(prefers-color-scheme: dark)')` on initialization.

---

## Migration Guide

### From Old Architecture (V1)

**Before (4 separate files):**
```html
<!-- Had to load specific theme file -->
<link rel="stylesheet" href="suai/themes/pla/pla-light.css">
<script>
  // Switching required loading different CSS file
  function switchTheme() {
    document.querySelector('link').href = 'suai/themes/pla/pla-dark.css';
  }
</script>
```

**After (1 unified file):**
```html
<!-- Load once -->
<html data-theme="pla" data-mode="light">
<link rel="stylesheet" href="suai/suai.css">
<script src="suai/suai-minimal.js"></script>
<script>
  // Instant switching via data attributes
  suaiSet('pla', 'dark');
</script>
```

**Benefits:**
- ✅ No CSS file reloading (instant theme switch)
- ✅ One HTTP request instead of multiple
- ✅ Smaller total file size (68 KB vs 98 KB)
- ✅ Consistent variable names across themes
- ✅ Auto dark mode support built-in

### Breaking Changes

1. **CSS File Path Changed**
   - Old: `suai/themes/pla/pla-light.css`
   - New: `suai/suai.css`

2. **Data Attributes Required**
   - Must add `data-theme` and `data-mode` to `<html>` tag
   - No default theme (you must specify)

3. **JavaScript API Changed**
   - Old: Theme-specific scripts per file
   - New: Single `suaiSet(theme, mode)` function

4. **CSS Variable Prefixes**
   - PLA variables: `--pla-*`
   - NOK variables: `--nok-*`
   - MAA variables: `--maa-*` (new!)

---

## Technical Implementation

### CSS Architecture

```css
/* 1. Font Loading */
@font-face { /* Roboto Flex for PLA theme */ }

/* 2. Theme Variables - Light Mode */
html[data-theme="pla"] { /* PLA variables */ }
html[data-theme="nok"] { /* NOK variables */ }
html[data-theme="maa"] { /* MAA variables */ }

/* 3. Theme Variables - Dark Mode Overrides */
html[data-theme="pla"][data-mode="dark"] { /* PLA dark */ }
html[data-theme="nok"][data-mode="dark"] { /* NOK dark */ }
html[data-theme="maa"][data-mode="dark"] { /* MAA dark */ }

/* 4. Auto Dark Mode Detection */
@media (prefers-color-scheme: dark) {
  html[data-theme="pla"]:not([data-mode]) { /* Auto dark */ }
  /* ... for each theme ... */
}

/* 5. Component Styles */
html[data-theme="pla"] button { /* PLA button styles */ }
html[data-theme="nok"] button { /* NOK button styles */ }
html[data-theme="maa"] button { /* MAA button styles */ }

/* 6. Layout System (PLA only) */
html[data-theme="pla"] body > div[data-layout="side-nav"] { /* ... */ }

/* 7. Responsive Breakpoints */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

### JavaScript Architecture

```javascript
(function() {
  'use strict';

  // Valid options
  const VALID_THEMES = ['pla', 'nok', 'maa', 'none'];
  const VALID_MODES = ['light', 'dark'];

  // localStorage persistence
  const STORAGE_THEME = 'suai-theme';
  const STORAGE_MODE = 'suai-mode';

  // Detect OS preference
  function getPreferredMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark' : 'light';
  }

  // Apply theme via data attributes
  function applyTheme(theme, mode) {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-mode', mode);
    document.body.classList.add(`suai-theme-${theme}`);
    document.body.classList.add(`suai-mode-${mode}`);
  }

  // Public API
  window.suaiSet = function(theme, mode) { /* ... */ };
  window.suaiGet = function() { /* ... */ };

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

---

## Performance Metrics

### File Size Comparison

| Metric | V1 (Old) | V2 (New) | Reduction |
|--------|----------|----------|-----------|
| **Files** | 4 files | 1 file | 75% |
| **Total Lines** | 4,307 | 1,831 | 57% |
| **Total Size** | 98 KB | 68 KB | 31% |
| **Themes** | 2 (PLA, NOK) | 3 (PLA, NOK, MAA) | +50% |
| **Gzipped** | ~18 KB | ~12 KB | 33% |

### Load Time Impact

**Before (V1):**
- Initial load: 1 CSS file (~25 KB)
- Theme switch: Load new CSS file (~25 KB) + browser reparse
- Total for 2 switches: 75 KB transferred

**After (V2):**
- Initial load: 1 CSS file (68 KB)
- Theme switch: Change data attribute (0 KB) + instant repaint
- Total for 2 switches: 68 KB transferred

**Result:** 23% less data transfer for typical usage

---

## Browser Support

### Minimum Requirements

- **CSS Custom Properties**: All modern browsers (IE11+ with fallbacks)
- **CSS Attribute Selectors**: All browsers
- **@media prefers-color-scheme**: Chrome 76+, Firefox 67+, Safari 12.1+

### Fallback Strategy

```html
<!-- Fallback for browsers without data attribute support -->
<html lang="en" class="theme-pla mode-light" data-theme="pla" data-mode="light">
```

The framework uses data attributes as primary selectors, but you can add classes for older browser support if needed.

---

## Best Practices

### 1. Always Specify Both Attributes

```html
<!-- ✅ GOOD -->
<html data-theme="pla" data-mode="light">

<!-- ❌ BAD - Missing mode -->
<html data-theme="pla">

<!-- ❌ BAD - Missing theme -->
<html data-mode="light">
```

### 2. Use JavaScript for Persistence

```javascript
// ✅ GOOD - Persist user preference
localStorage.setItem('suai-theme', 'maa');
localStorage.setItem('suai-mode', 'dark');

// Load on next visit
const theme = localStorage.getItem('suai-theme') || 'pla';
const mode = localStorage.getItem('suai-mode') || 'light';
suaiSet(theme, mode);
```

### 3. Respect System Preferences

```javascript
// ✅ GOOD - Check system preference first
const mode = localStorage.getItem('suai-mode')
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
```

### 4. Test All Theme Combinations

Always test your content with all 6 combinations:
- PLA Light, PLA Dark
- NOK Light, NOK Dark
- MAA Light, MAA Dark

---

## Roadmap

### Completed ✅
- [x] Unified CSS architecture
- [x] PLA theme (Material Design 3)
- [x] NOK theme (Bootstrap 5.3)
- [x] MAA theme (iOS/Apple HIG)
- [x] Auto dark mode detection
- [x] Mobile-first layout system
- [x] Complete component coverage

### Planned 📋
- [ ] CSS-only theme switcher (no JavaScript)
- [ ] RTL (Right-to-Left) language support
- [ ] High contrast mode
- [ ] Reduced motion preferences
- [ ] Custom theme builder tool
- [ ] Figma design tokens export

---

## FAQ

**Q: Can I use SUAI CSS without JavaScript?**
A: Yes! Just set the data attributes on your `<html>` tag and link to `suai.css`. JavaScript is only needed for dynamic theme switching.

**Q: Which theme should I use?**
A:
- PLA: Modern web apps, SaaS products, content-heavy sites
- NOK: Enterprise software, admin dashboards, corporate websites
- MAA: Mobile-first apps, iOS web apps, minimalist designs

**Q: Can I mix themes on one page?**
A: No. One theme applies to the entire page. However, you can use different themes on different pages of your site.

**Q: How do I customize colors?**
A: Override CSS variables after loading suai.css:
```css
html[data-theme="pla"] {
  --pla-primary: #your-color;
}
```

**Q: Why is MAA theme named "horse"?**
A: SUAI uses romanized Thai words for theme names: PLA (fish/ปลา) for Material Design, NOK (bird/นก) for Bootstrap, MAA (horse/ม้า) for Apple.

**Q: Can I add a fourth theme?**
A: Yes! Follow the same pattern:
1. Add variables under `html[data-theme="your-theme"]`
2. Add dark mode under `html[data-theme="your-theme"][data-mode="dark"]`
3. Add component styles under `html[data-theme="your-theme"] element`
4. Update JavaScript VALID_THEMES array

---

## Credits

**Design Systems:**
- Google Material Design 3 (PLA theme)
- Bootstrap 5.3 (NOK theme)
- Apple Human Interface Guidelines (MAA theme)

**Fonts:**
- Roboto Flex: Google Fonts
- SF Pro: Apple (via system-ui)
- System fonts: Platform defaults

**License:** MIT (same as SUAI framework)

---

*Last updated: November 2025*
*Documentation Version: 2.0.0*
