# SUAI — Semantic Structure, Adaptive Utility

## Short Definition
**SUAI** (*Semantic Utility Adaptive Interface*) is a hybrid CSS methodology designed to unify semantic HTML, SMACSS modularity, and utility-first responsiveness. It brings innovation through a hybrid approach built on state-of-the-art frontend technologies like UnoCSS and Tailwind. SUAI is engineered for next-generation AI coding agent composition and style optimization.

---

## Summary

### Hybrid Style Pattern: Semantic + SMACSS + Utility-first + Dark + Responsive + Pseudo-elements

1. **Semantic HTML**
   - Use native HTML elements (`article`, `header`, `footer`, `nav`, `section`, `ul`, `li`, `a`) for structure.
   - Avoid unnecessary wrapper classes — minimal root class per component (`.card`, `.sidebar`).
   - HTML readability and accessibility are improved.

2. **SMACSS Organization**
   - **Base:** normalize semantic tags, typography defaults.
   - **Layout:** page-level structure (`.l-dashboard`, `main`, `aside`).
   - **Module:** component styles (`.card`, `.sidebar`, `.navbar`).
   - **State:** dynamic flags (`.is-active`, `.is-hidden`, `.is-collapsed`).
   - **Theme:** light/dark or brand-specific themes (`.theme-dark`, `.theme-light`).

3. **Utility-first via Tailwind / UnoCSS**
   - Use `@apply` (Tailwind) or inline atomic classes (UnoCSS).
   - Group utilities by function:
     1. Layout/flow: flex/grid, spacing, sizing, positioning (`p-6 md:p-8 flex items-center`).
     2. Appearance: color, background, shadow, border, rounded (`bg-white shadow-md rounded-xl`).
     3. Dark/state: dark variants and pseudo-class/hover (`dark:bg-gray-900 hover:shadow-lg`).
   - Multi-line `@apply` or grouping improves maintainability.

4. **Dark Mode**
   - Prefer `dark:` variants (Tailwind or UnoCSS preset-wind3).
   - Toggle via `class="dark"` on root or page.
   - Themes scoped to component via root class `.card` → children inherit.

5. **Responsive Variants**
   - Use `sm:`, `md:`, `lg:`, `xl:` modifiers in utilities.
   - Maintain consistent multi-line organization for responsive adjustments.

6. **Nested / Combinator Selectors**
   - Use PostCSS nesting (`& > header h3`) for semantic child targeting.
   - Combinators:
     - `>` direct child
     - `+` next sibling
     - `~` general sibling
     - `:not()` negation

7. **Pseudo-elements**
   - Support `::before`, `::after` for decorations (gradients, hover effects, underlines).
   - Combine with variants (`dark:`, `hover:`) for adaptive styling.

8. **Benefits**
   - Clean, minimal HTML markup.
   - Modular, scalable CSS structure (SMACSS).
   - Fully responsive, theme-aware, maintainable.
   - Reusable components with semantic structure.
   - Works with Tailwind and UnoCSS (preset-wind3) with minor adjustments.

**In short:**
> One root class per component, semantic tags inside, multi-line utility grouping (layout → appearance → dark/state), responsive modifiers, pseudo-elements for visuals, SMACSS file layering, and `dark:` variants for theme — all organized for maximum readability, scalability, and maintainability.

---

## Card Component (SUAI Example)

```css
@layer components {
  .card {
    relative overflow-hidden p-6 md:p-8
    rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg
    bg-white dark:bg-gray-900;

    &::before {
      content:"";
      absolute inset-0 opacity-0 transition-opacity duration-300
      [background:linear-gradient(135deg,theme('colors.blue.100'),theme('colors.blue.50'))]
      dark:opacity-30;
    }

    &:hover::before {
      opacity-40 dark:opacity-30;
    }

    > header {
      flex items-baseline justify-between mb-3;
    }

    > header h3 {
      text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100;
    }

    > header time {
      text-xs text-gray-500 dark:text-gray-400;
    }

    > section {
      text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300;
    }

    > footer {
      mt-4 flex justify-end;
    }

    > footer a {
      relative font-medium text-blue-600 dark:text-blue-400;
    }

    > footer a::after {
      content:"";
      absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 dark:bg-blue-400;
    }

    > footer a:hover::after {
      w-full;
    }
  }
}
```

---

## Matching HTML

```html
<article class="card">
  <header>
    <h3>Adaptive Interface Design</h3>
    <time datetime="2025-10-19">Oct 19, 2025</time>
  </header>

  <section>
    <p>SUAI showcases a hybrid approach where semantic structure, utility-first flow, and adaptive themes meet to form a clean, maintainable frontend system.</p>
  </section>

  <footer>
    <a href="#">Read More</a>
  </footer>
</article>
```

