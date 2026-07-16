# SUAI CSS - Stage 2: HTML + Utility CSS

**Status**: ⏳ **PLANNED** (Q2 2025)

---

## What Will SUAI CSS Be?

SUAI CSS (Stage 2) will extend Stage 1 (suai-html) with UnoCSS utility patterns and enhanced styling via `suai-type=""` custom attributes. Still **no JavaScript required**, but adds build-time optimization and utility-first flexibility.

---

## Planned Features

- ✅ All of Stage 1 (semantic HTML styling)
- ✅ UnoCSS/Tailwind utility classes integration
- ✅ `suai-type=""` custom attributes for enhanced components
- ✅ @apply patterns for component extraction
- ✅ Nested utility groups (SUAI's multi-line style)
- ✅ Still no JavaScript requirements

---

## Example Usage (Planned)

```html
<!-- Mix semantic styling with utilities -->
<div suai-type="card" class="p-6 rounded-xl shadow-lg hover:shadow-2xl">
  <h3 class="text-2xl font-bold mb-4">Enhanced Card</h3>
  <p>Combines semantic styling with utility classes</p>
  <button class="px-6 py-3 bg-primary text-white rounded-lg">
    Action
  </button>
</div>

<!-- Or use suai-type alone -->
<div suai-type="hero">
  <h1 suai-type="title1">One-line Title</h1>
  <p>Hero content with semantic attributes</p>
</div>
```

---

## When to Use (Planned)

✅ **Perfect For**:
- Utility-first developers familiar with Tailwind/UnoCSS
- Design systems needing consistency + flexibility
- Marketing sites with varied layouts
- Component libraries without JavaScript
- Rapid prototyping with utilities

---

## Current Status

This stage is in **planning phase**. We're designing:

- UnoCSS preset configuration
- `suai-type` attribute patterns
- Component extraction via @apply
- Migration path from Stage 1
- Documentation structure

---

## Want to Help?

We're looking for feedback on Stage 2 design:

- What utility patterns would you want?
- Which `suai-type` components are priorities?
- How should Stage 1 → Stage 2 migration work?

Join the discussion: [GitHub Discussions](https://github.com/suai/suai-style/discussions)

---

## Meanwhile: Use Stage 1

While Stage 2 is in development, **Stage 1 (suai-html) is production-ready**:

```bash
# Use Stage 1 today
cd ../suai-html
```

See `/suai-html/README.md` for details.

---

## Roadmap

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| Design Phase | Q4 2024 | ⏳ In Progress |
| Alpha Release | Q1 2025 | 📋 Planned |
| Beta Release | Q2 2025 | 📋 Planned |
| Stable Release | Q2 2025 | 📋 Planned |

---

## Documentation

- **Roadmap**: `/docs/0-OVERVIEW/00-suai-roadmap.md`
- **Stage Comparison**: `/docs/0-OVERVIEW/01-stage-comparison.md`
- **Migration Guide**: `/docs/0-OVERVIEW/02-migration-guide.md`
- **Stage 2 Docs** (planned): `/docs/3-STAGE-2-CSS/`

---

## Stay Updated

Watch this repository for Stage 2 updates:
- ⭐ Star the repo
- 👀 Watch for releases
- 💬 Join discussions

---

**Coming Soon: Utility-First + Semantic HTML = Best of Both Worlds**
