# SUAI JS - Stage 3: HTML + CSS + Web Components

**Status**: ⏳ **PLANNED** (Q4 2025)

---

## What Will SUAI JS Be?

SUAI JS (Stage 3) will add custom elements with progressive enhancement. Web Components for advanced interactions, while **maintaining fallbacks** to Stage 1/2 when JavaScript is unavailable.

---

## Planned Features

- ✅ All of Stage 1 + 2
- ✅ Web Components for advanced interactions
- ✅ Custom elements: `<suai-select>`, `<suai-dialog>`, `<suai-tabs>`, etc.
- ✅ Progressive enhancement (works without JS using Stage 1/2 fallbacks)
- ✅ Framework-agnostic (works with any framework or no framework)
- ✅ TypeScript support
- ✅ Minimal JavaScript (only for interaction, not rendering)

---

## Example Usage (Planned)

```html
<!-- Web Component with fallback -->
<suai-tabs>
  <!-- Stage 1/2 fallback: works even without JS -->
  <div role="tablist">
    <button role="tab" aria-selected="true">Tab 1</button>
    <button role="tab">Tab 2</button>
  </div>

  <div role="tabpanel">
    <p>Content 1 - works with or without JavaScript!</p>
  </div>

  <div role="tabpanel" hidden>
    <p>Content 2</p>
  </div>
</suai-tabs>

<!-- Enhanced select with search -->
<suai-select searchable multi>
  <!-- Falls back to native <select> -->
  <select name="options" multiple>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</suai-select>

<!-- Dialog with native fallback -->
<suai-dialog>
  <dialog>
    <h2>Dialog Title</h2>
    <p>Content works with or without JavaScript</p>
    <form method="dialog">
      <button value="close">Close</button>
    </form>
  </dialog>
</suai-dialog>
```

---

## Planned Components

- `<suai-select>` - Enhanced select with search, multi-select
- `<suai-dialog>` - Modal dialogs with animations
- `<suai-tabs>` - Tab panels with keyboard navigation
- `<suai-accordion>` - Collapsible sections
- `<suai-carousel>` - Image/content carousel
- `<suai-tooltip>` - Rich tooltips
- `<suai-menu>` - Context menus and dropdowns
- `<suai-datepicker>` - Date selection
- `<suai-combobox>` - Searchable dropdown
- `<suai-tree>` - Tree view component

---

## When to Use (Planned)

✅ **Perfect For**:
- Interactive web apps (not full SPAs)
- Framework-agnostic projects
- Progressive enhancement advocates
- Hybrid SSR + client-side apps
- Multi-framework environments
- Projects transitioning from static to interactive

---

## Progressive Enhancement Philosophy

All Stage 3 components will follow this pattern:

1. **Base**: Stage 1/2 semantic HTML works without JS
2. **Enhanced**: JavaScript adds interactivity when available
3. **Resilient**: Degrades gracefully when JS fails/disabled

This ensures:
- ✅ Accessibility (works for everyone)
- ✅ Performance (HTML renders first)
- ✅ Reliability (no JS = no breakage)
- ✅ SEO (crawlers see real content)

---

## Current Status

This stage is in **design phase**. We're planning:

- Web Component architecture
- Progressive enhancement patterns
- Framework integration guides (React, Vue, Svelte)
- TypeScript API design
- Browser compatibility strategy

---

## Want to Help?

We're seeking feedback on Stage 3:

- Which components are priorities?
- What progressive enhancement patterns work best?
- How should framework integration work?
- What's your experience with Web Components?

Join the discussion: [GitHub Discussions](https://github.com/suai/suai-style/discussions)

---

## Meanwhile: Use Stage 1

While Stage 3 is in development, **Stage 1 (suai-html) is production-ready** and **Stage 2 (suai-css) is in active development**:

```bash
# Use Stage 1 today
cd ../suai-html

# Follow Stage 2 development
cd ../suai-css
```

---

## Roadmap

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Design Phase | Q2 2025 | 📋 Planned |
| Component Prototypes | Q3 2025 | 📋 Planned |
| Alpha Release | Q4 2025 | 📋 Planned |
| Beta Release | Q1 2026 | 📋 Planned |
| Stable Release | Q2 2026 | 📋 Planned |

---

## Documentation

- **Roadmap**: `/docs/0-OVERVIEW/00-suai-roadmap.md`
- **Stage Comparison**: `/docs/0-OVERVIEW/01-stage-comparison.md`
- **Migration Guide**: `/docs/0-OVERVIEW/02-migration-guide.md`
- **Stage 3 Docs** (planned): `/docs/4-STAGE-3-JS/`

---

## Technical Preview

Interested in early access or contributing to Stage 3 development?

- 👀 Watch this repository
- 💬 Join GitHub Discussions
- 📧 Contact: (coming soon)

---

**Coming 2025: Interactive Components with Progressive Enhancement**
