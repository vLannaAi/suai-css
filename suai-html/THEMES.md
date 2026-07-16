# SUAI HTML Theme System

## Single-Bundle Architecture

SUAI HTML ships one generated CSS file, `suai.bundle.css`, that contains the token contract, fonts, and all 4 skins in both light and dark mode. There is nothing else to link — no per-theme files, no base/vars split.

```
suai-html/
├── suai.css              # Theme-agnostic base styles (source layer)
├── suai.bundle.css       # GENERATED — tokens + fonts + pla/nok/maa/speed + suai.css
├── suai-theme.js          # Optional client-side switcher (progressive enhancement only)
└── fonts/                 # Variable-font files used by the skins
```

`suai.bundle.css` is built by concatenating, in order: `suai-css/tokens.css` (the `--su-*` contract), `suai-css/themes/fonts/fonts.css`, `suai-css/themes/{pla,nok,maa,speed}.css`, and `suai-html/suai.css`. It is a **committed build artifact** — run `pnpm build:html` from the repo root after editing any of those source files.

---

## Production Usage (No JavaScript)

For production sites, link the single bundle and set two attributes on `<html>`:

### PLA Light Theme

```html
<!DOCTYPE html>
<html lang="en" data-su-theme="pla" data-su-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.bundle.css">
</head>
<body>
  <!-- Your semantic HTML here -->
</body>
</html>
```

### PLA Dark Theme

```html
<!DOCTYPE html>
<html lang="en" data-su-theme="pla" data-su-mode="dark">
<head>
  <link rel="stylesheet" href="suai-html/suai.bundle.css">
</head>
```

### NOK Light Theme

```html
<!DOCTYPE html>
<html lang="en" data-su-theme="nok" data-su-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.bundle.css">
</head>
```

### MAA Light Theme

```html
<!DOCTYPE html>
<html lang="en" data-su-theme="maa" data-su-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.bundle.css">
</head>
```

### Speed Light Theme

```html
<!DOCTYPE html>
<html lang="en" data-su-theme="speed" data-su-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.bundle.css">
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

**Best for**: Modern web apps, consumer products, friendly interfaces

---

### NOK (นก - Bird)
**Inspired by**: Bootstrap 5.3

**Characteristics**:
- Traditional web design patterns
- Clean, professional appearance
- Medium shadows and borders
- Business-appropriate styling

**Best for**: Business applications, documentation, professional sites

---

### MAA (ม้า - Horse)
**Inspired by**: iOS/Apple Human Interface Guidelines

**Characteristics**:
- Minimalist and precise
- Subtle shadows and blurs
- Clean, spacious layouts
- Apple-like refinement

**Best for**: Premium products, minimalist design, Apple-style applications

---

### Speed
**Characteristics**:
- Crimson, high-contrast palette
- Sharp, no-nonsense styling

**Best for**: Bold, attention-grabbing interfaces

---

## Server-Side Theme Switching

Set attributes based on user preferences stored on the server:

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
<html data-su-theme="<%= theme %>" data-su-mode="<%= mode %>">
<head>
  <link rel="stylesheet" href="/suai-html/suai.bundle.css">
</head>
```

### PHP Example

```php
<?php
$theme = $_SESSION['theme'] ?? 'pla';
$mode = $_SESSION['mode'] ?? 'light';
?>
<!DOCTYPE html>
<html data-su-theme="<?= $theme ?>" data-su-mode="<?= $mode ?>">
<head>
  <link rel="stylesheet" href="/suai-html/suai.bundle.css">
</head>
```

---

## Client-Side Theme Switching (Optional)

For demos or apps needing interactive theme switching, `suai-theme.js` is a small progressive-enhancement helper. It flips `data-su-theme`/`data-su-mode` on `<html>` and persists the choice in `localStorage` — it injects no CSS, and the page is fully styled without it.

```html
<link rel="stylesheet" href="suai.bundle.css">
<script src="suai-theme.js" defer></script>

<fieldset aria-label="Theme controls">
  <legend>Skin</legend>
  <button type="button" data-su-set-theme="pla">PLA</button>
  <button type="button" data-su-set-theme="nok">NOK</button>
  <button type="button" data-su-set-theme="maa">MAA</button>
  <button type="button" data-su-set-theme="speed">Speed</button>
  <span>Mode</span>
  <button type="button" data-su-set-mode="light">Light</button>
  <button type="button" data-su-set-mode="dark">Dark</button>
</fieldset>
```

Any element with `data-su-set-theme="<skin>"` or `data-su-set-mode="<mode>"` becomes a switcher button once clicked; no other markup or initialization is required.

**Note**: `suai-theme.js` is optional. Production sites should set themes server-side or statically unless client-side switching is actually needed.

---

## CSS Variables (the `--su-*` contract)

All skins read the same token contract, defined in `suai-css/tokens.css` and documented in `/demos/6.theme.html`. Customize by overriding tokens in your own stylesheet, loaded after the bundle:

```css
:root {
  --su-accent: #your-brand-color;
  --su-font-body: 'Your Font', sans-serif;
}
```

Key token groups: surfaces (`--su-bg`, `--su-bg-accent`), text (`--su-fg`, `--su-muted`, `--su-subtle`), borders (`--su-border`, `--su-border-subtle`), accents (`--su-accent`, `--su-accent-fg`, `--su-accent-2`), status colors (`--su-danger`/`-bg`/`-fg`, and the same for `success`/`warning`/`info`), typography (`--su-font-body`, `--su-font-mono`, `--su-font-size*`, `--su-leading`), shape (`--su-radius*`, `--su-border-w`), elevation (`--su-shadow*`), spacing (`--su-space-*`), and motion (`--su-transition*`).

See `suai-css/tokens.css` for the full contract and its authoring rules.

---

## Benefits of the Single-Bundle Architecture

- **One `<link>` tag** - No per-theme file wiring
- **All skins available at once** - Switch `data-su-theme`/`data-su-mode` with zero extra requests
- **Production-ready** - No build tools required to consume the bundle
- **Easy customization** - Override `--su-*` tokens in your own stylesheet loaded after the bundle

---

## Demo Files

See `/demos/` for complete examples:
- `1.text.html` - Text elements with theme switching
- `2.display.html` - Display elements
- `3.form.html` - Form controls
- `4.media.html` - Media elements
- `5.layout.html` - Layout examples
- `6.theme.html` - Theme reference and CSS variable viewer

All demos include an interactive theme switcher (via `suai-theme.js`) for easy comparison, and render correctly with JavaScript disabled.

---

## Questions?

- **Documentation**: `/docs/2-STAGE-1-HTML/`
- **README**: `/README.md`
- **Issues**: [GitHub Issues](https://github.com/suai/suai-style/issues)
