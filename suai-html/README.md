# SUAI HTML - Stage 1: Semantic HTML + CSS

**สวย (SUAI)** = Beautiful in Thai

Beautiful semantic HTML styling with zero JavaScript requirements. This is Stage 1 of the SUAI framework - the foundation for all other stages.

---

## What Is SUAI HTML?

SUAI HTML (Stage 1) is a **no-JS, semantic-first CSS framework** that makes standard HTML elements beautiful by default. No classes required, no build tools needed, just semantic HTML that looks great.

```html
<!DOCTYPE html>
<html data-theme="pla" data-mode="light">
<head>
  <link rel="stylesheet" href="suai-html/suai.css">
</head>
<body>
  <article>
    <h1>It Just Works</h1>
    <p>Write semantic HTML. Get beautiful results.</p>
    <button>Primary Action</button>
  </article>
</body>
</html>
```

That's it. No `className="..."`, no `import`, no JavaScript. Just HTML.

---

## Features

✅ **Zero JavaScript** - Pure CSS, works everywhere
✅ **Semantic HTML** - Official HTML5 tags only
✅ **3 Beautiful Themes** - Material Design 3, Bootstrap 5.3, Apple HIG inspired
✅ **Light & Dark Modes** - Built-in theme switching
✅ **Mobile-First** - Responsive by default
✅ **~50KB Bundle** - Small, fast, efficient
✅ **No Build Tools** - Drop in and use
✅ **Email Compatible** - Works in email templates
✅ **SSR Perfect** - Server-side rendering friendly
✅ **Accessibility First** - Semantic HTML is accessible HTML

---

## Quick Start

### Option 1: CDN (Coming Soon)

```html
<link rel="stylesheet" href="https://cdn.suai.dev/suai-html/suai.css">
<html data-theme="pla" data-mode="light">
```

### Option 2: Download

1. Download `suai.css` and `suai-lai/` folder
2. Link in your HTML:

```html
<link rel="stylesheet" href="path/to/suai.css">
<html data-theme="pla" data-mode="light">
```

### Option 3: npm (Coming Soon)

```bash
npm install @suai/html
```

```html
<link rel="stylesheet" href="node_modules/@suai/html/suai.css">
```

---

## Theme System

SUAI HTML includes 3 themes, each with light and dark modes:

### PLA (ปลา - Fish)
Material Design 3 inspired. Smooth, rounded, elevated.

```html
<html data-theme="pla" data-mode="light">  <!-- Light mode -->
<html data-theme="pla" data-mode="dark">   <!-- Dark mode -->
```

### NOK (นก - Bird)
Bootstrap 5.3 inspired. Clean, professional, accessible.

```html
<html data-theme="nok" data-mode="light">
<html data-theme="nok" data-mode="dark">
```

### MAA (ม้า - Horse)
iOS/Apple HIG inspired. Minimal, precise, elegant.

```html
<html data-theme="maa" data-mode="light">
<html data-theme="maa" data-mode="dark">
```

**Switching themes**: Just change the `data-theme` and `data-mode` attributes. No page reload needed. No JavaScript required (set server-side or statically).

---

## What's Styled?

All official HTML5 elements:

### Text Elements
`<h1>`-`<h6>`, `<p>`, `<strong>`, `<em>`, `<mark>`, `<code>`, `<kbd>`, `<a>`, `<abbr>`, `<cite>`, `<q>`, `<time>`, `<small>`, etc.

### Display Elements
`<table>`, `<ul>`, `<ol>`, `<dl>`, `<blockquote>`, `<hr>`, `<progress>`, `<meter>`, `<details>`, `<summary>`, `<dialog>`, etc.

### Form Controls
`<input>` (all types), `<textarea>`, `<select>`, `<button>`, `<form>`, `<fieldset>`, `<label>`, etc.

### Media Elements
`<img>`, `<figure>`, `<figcaption>`, `<video>`, `<audio>`, `<picture>`, etc.

### Layout Elements
`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, etc.

**See `/demos/` for live examples of every element.**

---

## Documentation

- **Overview**: `/docs/0-OVERVIEW/00-suai-roadmap.md`
- **Stage 1 Docs**: `/docs/2-STAGE-1-HTML/`
- **Component Catalog**: `/docs/2-STAGE-1-HTML/html-components-catalog.md`
- **Live Demos**: `/demos/` (1-6.html files)

---

## Demos

Explore the demos to see every element styled:

1. **1.text.html** - Text Elements (inline, block, software)
2. **2.display.html** - Tables, Lists, Progress, Dialogs
3. **3.form.html** - All Form Controls
4. **4.media.html** - Images, Video, Audio
5. **5.layout.html** - Semantic Layout
6. **6.theme.html** - Theme Reference & CSS Variables

Open `/demos/index.html` to start exploring.

---

## Usage Examples

### Basic Page

```html
<!DOCTYPE html>
<html lang="en" data-theme="pla" data-mode="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <link rel="stylesheet" href="suai-html/suai.css">
</head>
<body>
  <header>
    <h1>Site Title</h1>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Article Title</h2>
      <p>Article content goes here.</p>
      <button>Read More</button>
    </article>
  </main>

  <footer>
    <p>&copy; 2025 My Site</p>
  </footer>
</body>
</html>
```

### Form Example

```html
<form>
  <fieldset>
    <legend>Contact Form</legend>

    <label>
      Name
      <input type="text" name="name" required>
    </label>

    <label>
      Email
      <input type="email" name="email" required>
    </label>

    <label>
      Message
      <textarea name="message" rows="5" required></textarea>
    </label>

    <button type="submit">Send Message</button>
  </fieldset>
</form>
```

### Table Example

```html
<table>
  <caption>Monthly Sales</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Revenue</th>
      <th>Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$45,000</td>
      <td>+12%</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$52,000</td>
      <td>+15%</td>
    </tr>
  </tbody>
</table>
```

---

## CSS Variables

All themes use unified CSS variables. You can customize by overriding:

```css
:root {
  --suai-primary: #your-color;
  --suai-text: #your-text-color;
  --suai-surface: #your-background;
  /* ... and more */
}
```

See `/demos/6.theme.html` for complete variable reference.

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

Essentially: all modern browsers with CSS variables support.

---

## When to Use SUAI HTML (Stage 1)

✅ **Perfect For**:
- Static sites & blogs
- Server-rendered apps (Rails, Laravel, Django)
- Email templates
- Documentation sites
- Landing pages
- Prototypes
- Accessibility-first projects

❌ **Not Ideal For**:
- Heavy customization per component (use Stage 2)
- Interactive SPAs (use Stage 3 or 4)
- Utility-first workflow (use Stage 2)

See `/docs/0-OVERVIEW/01-stage-comparison.md` for detailed comparison of all stages.

---

## Upgrading to Higher Stages

SUAI is designed for **progressive enhancement**. You can upgrade to higher stages as needs grow:

- **Stage 2 (suai-css)**: Add UnoCSS utilities + `suai-type` attributes
- **Stage 3 (suai-js)**: Add Web Components for interactivity
- **Stage 4 (suai-vue)**: Full Vue 3 component library

All stages build upon Stage 1, so this CSS remains the foundation.

See `/docs/0-OVERVIEW/02-migration-guide.md` for upgrade instructions.

---

## Philosophy

SUAI HTML embraces:

- **Semantic HTML First** - Use the right tags for the right content
- **Zero Class Styling** - Let elements be styled by tag name
- **Progressive Enhancement** - Works everywhere, enhances gracefully
- **Visual Excellence** - Beautiful by default, no compromises
- **AI-Optimized** - Deterministic patterns for AI code generation

Read the full philosophy: `/docs/0-OVERVIEW/03-philosophy.md`

---

## Project Structure

```
suai-html/
├── README.md (this file)
├── suai.css (main CSS file)
├── suai-lai/ (theme system)
│   ├── pla/ (Material Design 3 theme)
│   │   ├── pla-base.css
│   │   ├── pla-light-vars.css
│   │   ├── pla-dark-vars.css
│   │   └── fonts/
│   ├── nok/ (Bootstrap 5.3 theme)
│   └── maa/ (Apple HIG theme)
└── demos/ (live demonstrations)
    ├── index.html
    ├── 1.text.html
    ├── 2.display.html
    ├── 3.form.html
    ├── 4.media.html
    ├── 5.layout.html
    ├── 6.theme.html
    └── theme-demo.js (demo only, not required)
```

---

## FAQ

### Do I need JavaScript?

**No.** SUAI HTML is 100% CSS. The `theme-demo.js` in `/demos/` is only for the demo page theme switcher. Your production site doesn't need it.

### How do I switch themes in production?

Set `data-theme` and `data-mode` attributes on the `<html>` element. This can be done:
- Server-side (recommended)
- Statically in your HTML
- With minimal JS if you want client-side switching

### Can I customize colors/fonts?

Yes! Override CSS variables in your own stylesheet:

```html
<link rel="stylesheet" href="suai-html/suai.css">
<link rel="stylesheet" href="my-custom.css">
```

### Does it work with [framework]?

Yes! SUAI HTML is framework-agnostic. Use it with:
- Static site generators (Hugo, Jekyll, 11ty)
- Server-side frameworks (Rails, Laravel, Django, Express)
- JavaScript frameworks (React, Vue, Svelte) - though consider Stage 3/4 for those
- No framework at all

### What about accessibility?

Semantic HTML is accessible HTML. By using proper tags (`<button>`, `<nav>`, `<article>`, etc.), you get built-in accessibility. No ARIA needed for most cases.

See `/docs/0-OVERVIEW/03-philosophy.md` for SUAI's approach to accessibility.

---

## Contributing

SUAI is open source (MIT License). Contributions welcome!

- Report bugs: [GitHub Issues](https://github.com/suai/suai-style/issues)
- Suggest features: [GitHub Discussions](https://github.com/suai/suai-style/discussions)
- Submit PRs: Follow contribution guidelines

---

## License

MIT License - see LICENSE file

---

## Links

- **Documentation**: `/docs/`
- **Roadmap**: `/docs/0-OVERVIEW/00-suai-roadmap.md`
- **GitHub**: github.com/suai/suai-style
- **Website**: (coming soon)

---

**สวย (Beautiful) by Design, Simple by Nature**

Start with semantic HTML. Get beautiful results. No complexity required.
