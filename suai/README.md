# SUAI CSS - Semantic Utility Adaptive Interface

**Version:** 2.0.0 (Unified Architecture)
**Size:** 68 KB (1,831 lines)
**Themes:** 3 design systems × 2 modes = 6 combinations

## Quick Start

### 1. Basic HTML (No JavaScript)

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="light">
<head>
  <link rel="stylesheet" href="path/to/suai/suai.css">
</head>
<body>
  <h1>Hello World</h1>
  <p>SUAI CSS works without JavaScript!</p>
</body>
</html>
```

### 2. With Theme Switching (Optional)

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="light">
<head>
  <link rel="stylesheet" href="suai.css">
  <script src="suai-minimal.js"></script>
</head>
<body>
  <button onclick="suaiSet('pla', 'dark')">PLA Dark</button>
  <button onclick="suaiSet('nok', 'light')">NOK Light</button>
  <button onclick="suaiSet('maa', 'dark')">MAA Dark</button>
</body>
</html>
```

## Available Themes

| Code | Name | Design System | Font | Style |
|------|------|---------------|------|-------|
| `pla` | Fish (ปลา) | Material Design 3 | Roboto Flex | Modern, elevated surfaces |
| `nok` | Bird (นก) | Bootstrap 5.3 | System fonts | Clean, professional |
| `maa` | Horse (ม้า) | iOS/Apple HIG | Thai Sans Neue | Sleek, minimalist, bilingual Thai/EN |

## Available Modes

- `light` - Light mode
- `dark` - Dark mode
- Auto-detect via `prefers-color-scheme` if no mode specified

## JavaScript API

```javascript
// Set theme and mode
suaiSet('pla', 'dark');      // Material Design 3, dark mode
suaiSet('nok', 'light');     // Bootstrap 5.3, light mode
suaiSet('maa', 'dark');      // iOS/Apple HIG, dark mode

// Get current theme
const {theme, mode} = suaiGet();
console.log(theme);  // 'pla'
console.log(mode);   // 'dark'
```

## File Structure

```
/suai/
├── suai.css             # Unified CSS (68 KB) - USE THIS
├── suai-minimal.js      # Optional theme switcher
└── themes/              # DEPRECATED - Don't use
    ├── pla/
    │   ├── pla-light.css
    │   └── pla-dark.css
    └── nok/
        ├── nok-light.css
        └── nok-dark.css
```

⚠️ **Important:** Use `suai.css` only. The `themes/` directory contains old separate files and will be deleted.

## Features

✅ **Zero JavaScript Required** - Works with just HTML + CSS
✅ **3 Complete Design Systems** - Material Design 3, Bootstrap 5.3, iOS/Apple HIG
✅ **Auto Dark Mode** - Respects OS `prefers-color-scheme`
✅ **57% Smaller** - Reduced from 4,307 lines to 1,831 lines
✅ **Instant Theme Switch** - No CSS reload needed
✅ **Mobile-First** - Responsive layouts built-in
✅ **Complete Coverage** - All HTML elements styled

## Component Coverage

- **Typography**: h1-h6, p, strong, em, code, blockquote, mark, del, ins
- **Lists**: ul, ol, dl, li, dt, dd
- **Tables**: table, thead, tbody, tfoot, tr, th, td, caption
- **Forms**: button, input, textarea, select
- **Code**: code, pre, kbd, samp, var
- **Sections**: article, section, aside, header, footer, main, nav, hr

## Layout System (PLA Theme)

Six responsive patterns:
1. Basic (Header + Main + Footer)
2. Side Navigation (Mobile drawer → Desktop sidebar)
3. With Aside (Stacked → Sidebar)
4. Bottom Toolbar (Mobile bottom → Desktop top)
5. Articles Grid (1 column → 2 columns)
6. Sections (Vertical sections)

Breakpoints: Mobile-first, Tablet (768px+), Desktop (1024px+)

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Custom properties, attribute selectors, @media queries
- **Auto Dark Mode**: Chrome 76+, Firefox 67+, Safari 12.1+

## Examples

See `/suai-basic/assets/demo-html-css/` for 5 complete demo pages:
1. Text Elements
2. Display Elements
3. Form Controls
4. Media Elements
5. Layout Patterns

## Documentation

- **Complete Guide**: `/docs/suai-unified-architecture-v2.md`
- **Component Reference**: Demo HTML files in `/suai-basic/assets/demo-html-css/`
- **Accessibility**: `/docs/suai-accessibility-manifesto.md`

## Migration from V1

**Before:**
```html
<link rel="stylesheet" href="suai/themes/pla/pla-light.css">
```

**After:**
```html
<html data-theme="pla" data-mode="light">
<link rel="stylesheet" href="suai/suai.css">
```

## Performance

| Metric | V1 (Old) | V2 (New) | Improvement |
|--------|----------|----------|-------------|
| Files | 4 | 1 | 75% fewer |
| Lines | 4,307 | 1,831 | 57% fewer |
| Size | 98 KB | 68 KB | 31% smaller |
| Themes | 2 | 3 | 50% more |

## License

MIT License - Same as SUAI framework

## Support

- Issues: GitHub Issues
- Docs: `/docs/suai-unified-architecture-v2.md`
- Demos: `/suai-basic/assets/demo-html-css/`

---

**Made with ❤️ for semantic HTML and clean CSS**
