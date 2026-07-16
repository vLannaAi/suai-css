# SUAI Components - Imagery

**Category 4: Imagery**

Components for displaying images, media, avatars, galleries, and icons.

---

## SUAI Core Innovations (Imagery-Related)

### 1. Unified Media Element
`<media type="*">` replaces `<img>`, `<video>`, `<picture>`, `<svg>`:
```html
<media type="image" src="photo.jpg" alt="Description"></media>
<media type="animation" src="loader.gif"></media>
<media type="svg" src="icon.svg"></media>
<media type="video" src="clip.mp4" controls></media>
```

### 2. Semantic vs Decorative Icons
- **Semantic icons** (icon IS the content) → Use `<icon>` tag
- **Decorative icons** (icon enhances content) → Use CSS classes

**Decorative Icons via CSS:**
```html
<button class="icon-right:heroicons:arrow-right">Continue</button>
<button class="icon-left:mdi:download">Download</button>
<input type="search" class="icon-left:heroicons:magnifying-glass" placeholder="Search...">
```

### 3. Gallery Type System
Unified carousel, grid, masonry, lightbox, and comparison:
```html
<gallery type="carousel|grid|masonry|lightbox|compare">
  <!-- Any direct children -->
</gallery>
```

---

## 4.1 Media (replaces Animated Image) ✅
**Priority**: 🔴 High (for `type="image"`), 🟡 Medium (other types)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<img>`, `<video>`, `<picture>`, `<svg>` |
| **SUAI Tag** | `<media type="...">` (unified media element) |
| **CSS-Only** | ✅ Yes - Basic styling |
| **JS Vanilla** | Optional - Controls, lazy loading |
| **JS Component** | Optional |

**Media Types:**
```html
<!-- Static image (HIGH PRIORITY - replaces <img>) -->
<media type="image" src="photo.jpg" alt="Description"></media>

<!-- Animated image (GIF, APNG, animated WebP) -->
<media type="animation" src="loader.gif" controls></media>

<!-- SVG graphics -->
<media type="svg" src="icon.svg"></media>

<!-- Video -->
<media type="video" src="clip.mp4" controls></media>
```

**Attributes:**
- `type` - Media type: image, animation, svg, video
- `src` - Source URL
- `alt` - Alternative text (accessibility)
- `controls` - Show play/pause controls
- `preview` - Preview/poster image URL
- `thumbnail` - Thumbnail image URL
- `theme` - Theme variant support (dark/light)
- `copyright` - Copyright information
- `watermark` - Digital watermark data
- `description` - Long description
- `synopsis` - Brief summary (for video)
- `genre` - Content genre
- `cast` - Cast information (for video)
- `lazy` - Lazy loading (on/off)

**Children Elements:**
```html
<media type="video" src="movie.mp4">
  <source src="movie.webm" type="video/webm">
  <source src="movie.mp4" type="video/mp4">
  <thumbnail src="poster.jpg"></thumbnail>
  <caption track="en" src="subtitles-en.vtt"></caption>
  <copyright>© 2025 Company Name</copyright>
</media>
```

**Priority Implementation:**
1. **Phase 1 (High)**: `<media type="image">` - Replace `<img>`
2. **Phase 2 (Medium)**: `type="animation"`, `type="svg"`, `type="video"`
3. **Phase 3 (Low)**: Advanced attributes (watermark, cast, genre, etc.)

---

## 4.2 Avatar ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<figure>` + `<figcaption>` |
| **SUAI Tag** | `<avatar>` |
| **CSS-Only** | ✅ Yes - Initials as CSS content |
| **JS Vanilla** | Minimal - Extract initials from name |
| **JS Component** | Optional |

**Example:**
```html
<!-- With image -->
<avatar src="user.jpg" alt="John Doe"></avatar>

<!-- Fallback to initials (CSS/JS generates "JD") -->
<avatar name="John Doe"></avatar>

<!-- With status indicator -->
<avatar src="user.jpg" name="Jane Smith" status="online"></avatar>

<!-- Size variants -->
<avatar src="user.jpg" size="sm"></avatar>
<avatar src="user.jpg" size="lg"></avatar>

<!-- Shape variants -->
<avatar src="user.jpg" shape="square"></avatar>
<avatar src="user.jpg" shape="rounded"></avatar>
```

**Attributes:**
- `src` - Image URL
- `name` - User name (for initials fallback)
- `alt` - Alternative text (accessibility)
- `status` - Status indicator: online, offline, away, busy
- `size` - Size variant: xs, sm, md (default), lg, xl
- `shape` - Shape variant: circle (default), rounded, square

**Note:** Avatar group (`<avatar-group>`) is TBD - implementation approach to be determined.

---

## 4.3 Gallery (replaces Carousel) ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<ul>` + `<li>` |
| **SUAI Tag** | `<gallery type="...">` |
| **CSS-Only** | Partial - Layout and styling yes, navigation needs JS |
| **JS Vanilla** | Required - Navigation, autoplay, interactions |
| **JS Component** | Optional |

**Gallery Types:**
```html
<!-- Carousel mode (rotating slideshow) -->
<gallery type="carousel" autoplay interval="3000">
  <media type="image" src="slide1.jpg"></media>
  <media type="image" src="slide2.jpg"></media>
  <media type="video" src="promo.mp4"></media>
</gallery>

<!-- Grid mode (image gallery) -->
<gallery type="grid" columns="3">
  <media type="image" src="photo1.jpg"></media>
  <media type="image" src="photo2.jpg"></media>
  <media type="image" src="photo3.jpg"></media>
</gallery>

<!-- Masonry mode (Pinterest-style) -->
<gallery type="masonry">
  <media type="image" src="tall.jpg"></media>
  <media type="image" src="wide.jpg"></media>
  <media type="image" src="square.jpg"></media>
</gallery>

<!-- Lightbox mode (clickable with overlay) -->
<gallery type="lightbox">
  <media type="image" src="thumb1.jpg" full="full1.jpg"></media>
  <media type="image" src="thumb2.jpg" full="full2.jpg"></media>
</gallery>

<!-- Compare mode (slider comparison) - See #4.5 -->
<gallery type="compare">
  <media type="image" src="before.jpg" label="Before"></media>
  <media type="image" src="after.jpg" label="After"></media>
</gallery>
```

**Attributes:**
- `type` - Display mode: carousel, grid, masonry, lightbox, compare
- `autoplay` - Auto-play (for carousel)
- `interval` - Auto-play interval in ms (for carousel)
- `columns` - Number of columns (for grid)
- `gap` - Spacing between items
- `controls` - Show navigation controls (arrows, dots)
- `orientation` - Slider direction: vertical, horizontal (for compare)

**Content:**
- **Any direct children** - Not limited to `<media>`, can contain any elements

**Note:** Carousel Item (#4.4) is obsolete - items are direct children of `<gallery>`.

---

## 4.4 Carousel Item
**Priority**: N/A (obsolete - covered by #4.3)

Items are direct children of `<gallery>`, can be any element type.

---

## 4.5 Image Comparison ✅
**Priority**: 🔴 High (for SUAI showcase/documentation)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | Container (typically `<div>`) |
| **SUAI Tag** | `<gallery type="compare">` |
| **CSS-Only** | Partial - Layout yes, slider interaction needs JS |
| **JS Vanilla** | Required - Draggable slider |
| **JS Component** | Optional |

**Example:**
```html
<!-- Image before/after comparison -->
<gallery type="compare">
  <media type="image" src="before.jpg" label="Before"></media>
  <media type="image" src="after.jpg" label="After"></media>
</gallery>

<!-- Code vs Preview comparison (SUAI showcase) -->
<gallery type="compare" label="SUAI Gallery Component" hint="Drag slider to compare">
  <code type="html">
    <gallery type="grid" columns="3">
      <media type="image" src="photo1.jpg"></media>
      <media type="image" src="photo2.jpg"></media>
      <media type="image" src="photo3.jpg"></media>
    </gallery>
  </code>
  <preview></preview>
</gallery>
```

**Attributes:**
- `type="compare"` - Comparison mode with slider
- `label` - Label for the gallery (on gallery element)
- `hint` - Hint text (on gallery element)
- `label` - Label for each child (on children elements)
- `orientation` - Slider direction: vertical (default) or horizontal

**Use Cases:**
- Before/after image comparisons
- Design mockup vs implementation
- **SUAI documentation: Rendered interface vs code**
- Product variations
- Image editing showcases

**Note:** Children can use `label` and `hint` attributes for individual panels.

---

## 4.6 Icon ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<svg>` (inline), `<img>` (external) |
| **SUAI Tag** | `<icon>` (UnoCSS library), `<svg>` (inline), `<media type="svg">` (external) |
| **CSS-Only** | ✅ Yes - Via UnoCSS icon classes |
| **JS Vanilla** | Not needed |
| **JS Component** | Optional |

**Three Icon Approaches:**

**1. Icon Library (UnoCSS/Iconify) - Semantic Icon:**
```html
<!-- Standalone icon from UnoCSS library -->
<icon name="heroicons:arrow-right"></icon>
<icon name="mdi:settings" size="lg"></icon>
<icon name="ph:user" color="blue"></icon>
```

**2. Inline SVG:**
```html
<!-- Custom inline SVG -->
<svg viewBox="0 0 24 24" width="24" height="24">
  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
</svg>
```

**3. External SVG File:**
```html
<!-- External SVG file -->
<media type="svg" src="logo.svg" alt="Company Logo"></media>
```

**Decorative Icons (via CSS classes):**

Icons that are purely decorative (not semantic) should use UnoCSS classes:

```html
<!-- Icon as decoration (right position) -->
<button class="icon-right:heroicons:arrow-right">
  Continue
</button>

<!-- Icon as decoration (left position) -->
<button class="icon-left:mdi:download">
  Download
</button>

<!-- Icon prefix/suffix on input -->
<input type="search" class="icon-left:heroicons:magnifying-glass" placeholder="Search...">
```

**UnoCSS Enhancement:**

Extend UnoCSS to handle icon positioning via classes:
- `icon-left:{icon-name}` - Icon positioned left (::before)
- `icon-right:{icon-name}` - Icon positioned right (::after)
- `icon-prefix:{icon-name}` - Alias for left
- `icon-suffix:{icon-name}` - Alias for right

**Philosophy:**
- **Semantic icons** (icon IS the content) → Use `<icon>` tag
- **Decorative icons** (icon enhances content) → Use CSS classes
- This keeps decorative elements out of HTML markup

**Attributes (for `<icon>` tag):**
- `name` - Icon identifier from UnoCSS/Iconify library (e.g., "heroicons:arrow-right")
- `size` - Size variant: xs, sm, md, lg, xl
- `color` - Icon color
- `rotate` - Rotation angle: 90, 180, 270
- `flip` - Flip direction: horizontal, vertical

**UnoCSS Integration:**
Use existing UnoCSS icon collections (Iconify):
- Heroicons: `heroicons:arrow-right`
- Material Design: `mdi:settings`
- Phosphor: `ph:user`
- Font Awesome: `fa:home`
- And 150+ other icon sets

---

## 4.7 Zoomable Frame
**Priority**: ⚫ Skipped (Low priority - specialized use case)

Not implementing at this time. Can be added later if needed.

---

## Summary

✅ **Completed: 7 components**
- 4.1 Media (unified media element) - 🔴 High
- 4.2 Avatar - 🔴 High
- 4.3 Gallery (carousel, grid, masonry, lightbox, compare) - 🟡 Medium
- 4.4 Carousel Item - Obsolete (items are gallery children)
- 4.5 Image Comparison (`<gallery type="compare">`) - 🔴 High (for SUAI showcase)
- 4.6 Icon (three approaches + decorative) - 🔴 High
- 4.7 Zoomable Frame - ⚫ Skipped

**Priority Breakdown:**
- 🔴 High: 4 components (Media-image, Avatar, Image Comparison, Icon)
- 🟡 Medium: 2 components (Media-other types, Gallery)
- ⚫ Skipped: 1 component (Zoomable Frame)

---

**Document Version**: 2025-10-31
**Status**: Complete
