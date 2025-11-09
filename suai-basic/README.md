# SUAI Framework - Showcase & Reference

A pure HTML + CSS showcase of the SUAI (Semantic, Utility-first, Adaptive Interface) CSS framework. This is a **display-only** reference that demonstrates semantic HTML with SMACSS organization and dual-theme system.

## About SUAI

SUAI combines:
- **Semantic HTML**: Meaningful, accessible markup without custom components
- **Utility-first CSS**: Efficient class composition using UnoCSS (Tailwind preset)
- **SMACSS Organization**: Clear separation of concerns with Base, Layout, Modules, and State layers
- **Dual Theme System**: Switch between Thai (Noto Sans Thai) and Sintony themes with light/dark modes

### Key Features

✅ **Pure HTML Showcase** - No Vue components, no JavaScript logic
✅ **SMACSS Reference** - Clear folder organization for developers
✅ **Theme Switching** - Thai ↔ Sintony + Light ↔ Dark modes (4 combinations)
✅ **Responsive Design** - Fluid design that adapts to all screen sizes
✅ **Semantic HTML Tags** - Typography, lists, media, code, and structural elements
✅ **CSS Code Examples** - Every element shows its CSS with inheritance chain

## Folder Structure

```
assets/styles/
├── main.css                    # Import manifest
├── base/
│   ├── reset.css              # CSS reset and semantic defaults
│   ├── variables-thai.css     # Thai theme variables (Noto Sans Thai)
│   ├── variables-sintony.css  # Sintony theme variables
│   ├── typography.css         # Heading and text styles
│   └── elements.css           # Links, code, blockquote, hr, etc.
├── layout/
│   ├── containers.css         # Section and responsive containers
│   └── sidebar.css            # Navigation sidebar
├── modules/
│   ├── media.css             # Figure, image, caption styles
│   ├── lists.css             # ul, ol, dl styles
│   └── code-display.css      # Code block styling
└── state/
    └── theme.css             # Dark/light mode, theme toggles
```

## Theme System

### Thai Theme
- **Font**: Noto Sans Thai (weights: 300, 400, 500, 600, 700)
- **Aesthetic**: Warm, rounded corners, generous spacing
- **Ideal for**: Content-focused, friendly interfaces

### Sintony Theme
- **Font**: Sintony (weights: 400, 700)
- **Aesthetic**: Clean, sharp, compact spacing
- **Ideal for**: Technical, minimal interfaces

Both themes include:
- Semantic color palette (primary, success, danger, warning, info, grays)
- Light & Dark modes
- Responsive typography
- Consistent spacing system

## Setup

Install dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Visit the app to see all HTML tags and CSS examples with theme switching.

## Building for Production

Build the application for static deployment:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## CSS Customization

To modify colors or theme variables:

1. **Thai Theme**: Edit `assets/styles/base/variables-thai.css`
2. **Sintony Theme**: Edit `assets/styles/base/variables-sintony.css`
3. **Shared Colors**: Both theme files define semantic color variables

Example color system:
```css
--color-primary: #3b82f6;
--color-success: #10b981;
--color-danger: #ef4444;
--color-warning: #f59e0b;
--color-info: #06b6d4;
```

## Adding New Sections

To add more HTML tag examples:

1. Add a new `<section id="section-name">` to `pages/index.vue`
2. Add sidebar navigation link in `app.vue`
3. Follow the pattern: visual example → CSS code → cascade chain

## Dependencies

### Production
- `nuxt` - Framework
- `vue` - UI library
- `vue-router` - Routing

### Development
- `@unocss/*` - Utility CSS framework
- `postcss-nested` - CSS nesting support
- `shiki` - Syntax highlighting (configured)

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).
Responsive design supports mobile portrait through desktop.

## Learn More

- [Nuxt Documentation](https://nuxt.com/docs)
- [UnoCSS Documentation](https://unocss.dev)
- [SMACSS Methodology](https://smacss.com)

---

This is a reference implementation. Adapt the SMACSS structure and theme system to your project needs.
