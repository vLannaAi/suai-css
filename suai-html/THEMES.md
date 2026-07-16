# SUAI HTML Theme System

## V3.0 Modular Architecture

SUAI HTML uses a modular CSS architecture where themes are split into separate files:

```
suai-html/
├── suai.css                        # Common styles (theme-agnostic)
└── suai-lai/                       # Theme system (สวยลาย = beautiful pattern)
    ├── pla/                        # PLA theme (ปลา - Fish, Material Design 3)
    │   ├── fonts/
    │   │   ├── roboto-flex-full.woff2
    │   │   └── pla-fonts.css
    │   ├── pla-base.css            # Theme-specific base styles
    │   ├── pla-light-vars.css      # Light mode CSS variables
    │   └── pla-dark-vars.css       # Dark mode CSS variables
    ├── nok/                        # NOK theme (นก - Bird, Bootstrap 5.3)
    │   ├── fonts/
    │   ├── nok-base.css
    │   ├── nok-light-vars.css
    │   └── nok-dark-vars.css
    └── maa/                        # MAA theme (ม้า - Horse, Apple HIG)
        ├── fonts/
        ├── maa-base.css
        ├── maa-light-vars.css
        └── maa-dark-vars.css
```

---

## Production Usage (No JavaScript)

For production sites, link all required CSS files directly in your HTML:

### PLA Light Theme

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="light">
<head>
  <!-- Common styles (required) -->
  <link rel="stylesheet" href="suai-html/suai.css">

  <!-- PLA theme files -->
  <link rel="stylesheet" href="suai-html/suai-lai/pla/fonts/pla-fonts.css">
  <link rel="stylesheet" href="suai-html/suai-lai/pla/pla-base.css">
  <link rel="stylesheet" href="suai-html/suai-lai/pla/pla-light-vars.css">
</head>
<body>
  <!-- Your semantic HTML here -->
</body>
</html>
```

### PLA Dark Theme

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="dark">
<head>
  <link rel="stylesheet" href="suai-html/suai.css">
  <link rel="stylesheet" href="suai-html/suai-lai/pla/fonts/pla-fonts.css">
  <link rel="stylesheet" href="suai-html/suai-lai/pla/pla-base.css">
  <link rel="stylesheet" href="suai-html/suai-lai/pla/pla-dark-vars.css">
  <!-- ↑ Note: dark-vars instead of light-vars -->
</head>
```

### NOK Light Theme

```html
<!DOCTYPE html>
<html lang="en" data-theme="nok" data-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.css">
  <link rel="stylesheet" href="suai-html/suai-lai/nok/fonts/nok-fonts.css">
  <link rel="stylesheet" href="suai-html/suai-lai/nok/nok-base.css">
  <link rel="stylesheet" href="suai-html/suai-lai/nok/nok-light-vars.css">
</head>
```

### MAA Light Theme

```html
<!DOCTYPE html>
<html lang="en" data-theme="maa" data-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.css">
  <link rel="stylesheet" href="suai-html/suai-lai/maa/fonts/maa-fonts.css">
  <link rel="stylesheet" href="suai-html/suai-lai/maa/maa-base.css">
  <link rel="stylesheet" href="suai-html/suai-lai/maa/maa-light-vars.css">
</head>
```

---

## Theme Descriptions

### PLA (ปลา - Fish)
**Inspired by**: Material Design 3

**Characteristics**:
- Rounded corners and smooth curves
- Elevated surfaces with prominent shadows
- Smooth transitions and animations
- Modern, friendly, approachable
- Font: Roboto Flex (variable font with slant axis)

**Best for**: Modern web apps, consumer products, friendly interfaces

---

### NOK (นก - Bird)
**Inspired by**: Bootstrap 5.3

**Characteristics**:
- Traditional web design patterns
- Clean, professional appearance
- Medium shadows and borders
- Business-appropriate styling
- Font: Noto Sans Thai Flex

**Best for**: Business applications, documentation, professional sites

---

### MAA (ม้า - Horse)
**Inspired by**: iOS/Apple Human Interface Guidelines

**Characteristics**:
- Minimalist and precise
- Subtle shadows and blurs
- Clean, spacious layouts
- Apple-like refinement
- Font: CMU Flex

**Best for**: Premium products, minimalist design, Apple-style applications

---

## Server-Side Theme Switching

Set themes based on user preferences stored on the server:

### Express.js Example

```javascript
app.get('/', (req, res) => {
  const theme = req.session.theme || 'pla';
  const mode = req.session.mode || 'light';

  res.render('index', { theme, mode });
});
```

```ejs
<!DOCTYPE html>
<html data-theme="<%= theme %>" data-mode="<%= mode %>">
<head>
  <link rel="stylesheet" href="/suai-html/suai.css">
  <link rel="stylesheet" href="/suai-html/suai-lai/<%= theme %>/fonts/<%= theme %>-fonts.css">
  <link rel="stylesheet" href="/suai-html/suai-lai/<%= theme %>/<%= theme %>-base.css">
  <link rel="stylesheet" href="/suai-html/suai-lai/<%= theme %>/<%= theme %>-<%= mode %>-vars.css">
</head>
```

### PHP Example

```php
<?php
$theme = $_SESSION['theme'] ?? 'pla';
$mode = $_SESSION['mode'] ?? 'light';
?>
<!DOCTYPE html>
<html data-theme="<?= $theme ?>" data-mode="<?= $mode ?>">
<head>
  <link rel="stylesheet" href="/suai-html/suai.css">
  <link rel="stylesheet" href="/suai-html/suai-lai/<?= $theme ?>/fonts/<?= $theme ?>-fonts.css">
  <link rel="stylesheet" href="/suai-html/suai-lai/<?= $theme ?>/<?= $theme ?>-base.css">
  <link rel="stylesheet" href="/suai-html/suai-lai/<?= $theme ?>/<?= $theme ?>-<?= $mode ?>-vars.css">
</head>
```

---

## Client-Side Theme Switching (Optional)

For demos or apps needing interactive theme switching, use JavaScript:

### Minimal Implementation

```html
<script>
function setTheme(theme, mode) {
  const head = document.head;

  // Remove old theme CSS
  document.querySelectorAll('link[data-suai-theme]').forEach(el => el.remove());

  // Load new theme CSS
  const files = [
    `suai-lai/${theme}/fonts/${theme}-fonts.css`,
    `suai-lai/${theme}/${theme}-base.css`,
    `suai-lai/${theme}/${theme}-${mode}-vars.css`
  ];

  files.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.setAttribute('data-suai-theme', 'true');
    head.appendChild(link);
  });

  // Update data attributes
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-mode', mode);
}
</script>

<button onclick="setTheme('pla', 'light')">PLA Light</button>
<button onclick="setTheme('pla', 'dark')">PLA Dark</button>
<button onclick="setTheme('nok', 'light')">NOK Light</button>
```

### Using Demo Switcher

The demos include `theme-demo.js` for interactive switching:

```html
<script src="theme-demo.js"></script>
<script>
  // Switch themes
  suaiSet('pla', 'dark');
  suaiSet('nok', 'light');
  suaiSet('maa', 'light');
</script>
```

**Note**: `theme-demo.js` is **only for demos**. Production sites should set themes server-side or use a minimal custom implementation.

---

## CSS Variables

All themes use unified `--suai-*` CSS variables:

### Colors
- `--suai-primary` - Primary brand color
- `--suai-secondary` - Secondary color
- `--suai-text` - Text color
- `--suai-text-secondary` - Secondary text
- `--suai-surface` - Background surface
- `--suai-surface-variant` - Alternate background
- `--suai-error` - Error color
- `--suai-success` - Success color
- `--suai-warning` - Warning color

### Typography
- `--suai-font-family` - Main font
- `--suai-font-family-monospace` - Monospace font
- `--suai-font-size-base` - Base font size
- `--suai-line-height-base` - Base line height

### Spacing
- `--suai-spacing-1` through `--suai-spacing-5`

### Borders & Shadows
- `--suai-border-radius` - Default border radius
- `--suai-border-width` - Default border width
- `--suai-shadow-sm`, `--suai-shadow`, `--suai-shadow-lg`

### Customization

Override variables in your own CSS:

```css
:root {
  --suai-primary: #your-brand-color;
  --suai-font-family: 'Your Font', sans-serif;
}
```

---

## Benefits of V3.0 Modular Architecture

✅ **Smaller initial bundle** - Load only what you need
✅ **Faster page loads** - Separate files can be cached independently
✅ **Easy customization** - Override just the files you need
✅ **Clear separation** - Fonts, base styles, and variables are separate
✅ **Production-ready** - No build tools required

---

## Migration from V2.0

If you were using the old unified CSS approach:

**Old (V2.0)**:
```html
<link rel="stylesheet" href="suai.css">
<html data-theme="pla" data-mode="light">
```

**New (V3.0)**:
```html
<link rel="stylesheet" href="suai.css">
<link rel="stylesheet" href="suai-lai/pla/fonts/pla-fonts.css">
<link rel="stylesheet" href="suai-lai/pla/pla-base.css">
<link rel="stylesheet" href="suai-lai/pla/pla-light-vars.css">
<html data-theme="pla" data-mode="light">
```

---

## Demo Files

See `/demos/` for complete examples:
- `1.text.html` - Text elements with theme switching
- `2.display.html` - Display elements
- `3.form.html` - Form controls
- `4.media.html` - Media elements
- `5.layout.html` - Layout examples
- `6.theme.html` - Theme reference and CSS variable viewer

All demos include interactive theme switching for easy comparison.

---

## Questions?

- **Documentation**: `/docs/2-STAGE-1-HTML/`
- **README**: `/README.md`
- **Issues**: [GitHub Issues](https://github.com/suai/suai-style/issues)
