# SUAI Components - Decisions Summary

**Document Purpose:** Clean reference of HTML vs SUAI tag decisions, priorities, and implementation approaches.

---

## SUAI Core Innovations

### 1. Unified Selection Pattern
All selection interactions use `<select type="*">`:
- `<select type="radio">` - Single choice
- `<select type="checkbox" multiple>` - Multiple choice
- `<select type="toggle">` - Binary on/off
- `<select type="switch">` - Visual switch between values
- `<select type="rating">` - Star/heart ratings
- `<select type="swatch">` - Color/pattern swatches
- `<select type="dropdown">` - Traditional dropdown (default)
- `<select type="list">` - Always-visible list
- `<select type="slider">` - Range slider
- `<select type="tabs">` - Tab navigation
- `<select type="menu">` - Menu navigation
- `<select type="matrix">` - Grid picker

### 2. Unified Labeling System
Replace `<label>` and `<legend>` elements with `label` and `hint` attributes:
```html
<!-- Traditional HTML -->
<label for="email">Email</label>
<input type="email" id="email">

<!-- SUAI -->
<input type="email" name="email" label="Email" hint="We'll never share your email">
```

Works on: `<input>`, `<select>`, `<textarea>`, `<composer>`, `<fieldset>`, `<form>`, `<option>`

### 3. Unified Media Element
`<media type="*">` replaces `<img>`, `<video>`, `<picture>`, `<svg>`:
```html
<media type="image" src="photo.jpg" alt="Description"></media>
<media type="animation" src="loader.gif"></media>
<media type="svg" src="icon.svg"></media>
<media type="video" src="clip.mp4" controls></media>
```

### 4. Content Creation Ecosystem
- `<composer type="*">` - Universal content editor (replaces `<textarea>`)
- `<preview>` - Live preview of composed content
- `<version>` - Content versioning and translations
- `<diff>` - Visual comparison between versions

---

## Category 3: Form Controls

### 3.1 Checkbox ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="checkbox">` |
| **SUAI Tag** | `<select type="checkbox" multiple>` |
| **CSS-Only** | ✅ Yes |
| **JS Vanilla** | Optional - Indeterminate, group operations |
| **JS Component** | Optional |

**Example:**
```html
<select type="checkbox" name="features" multiple label="Select Features">
  <option value="code">Code Generation</option>
  <option value="refactor">Refactoring</option>
  <option value="docs">Documentation</option>
</select>
```

---

### 3.2 Color Picker ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="color">` |
| **SUAI Tag** | `<input type="color">` + `<input type="palette">` (custom) |
| **CSS-Only** | ✅ Yes |
| **JS Vanilla** | Optional - Swatches, format conversion |
| **JS Component** | Optional |

**Example:**
```html
<!-- Native color picker -->
<input type="color" name="theme" label="Theme Color">

<!-- Palette picker (custom swatches) -->
<input type="palette" name="brand-colors" value="#3b82f6,#ef4444,#10b981">
```

---

### 3.3 Input ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="*">` (20+ native types) |
| **SUAI Tag** | Keep native + `label`/`hint` attributes |
| **CSS-Only** | ✅ Yes - Use `:user-valid`, `:user-invalid` pseudo-classes |
| **JS Vanilla** | Optional - Alphabet filtering (Thai, Arabic, etc.), clear button, password toggle |
| **JS Component** | Optional |

**Special Features:**
- Alphabet filtering for specific character sets
- Client-side validation with HTML5 attributes
- Modern CSS pseudo-classes: `:user-valid`, `:user-invalid`, `:in-range`, `:out-of-range`, `:placeholder-shown`

**Example:**
```html
<!-- Email with validation -->
<input type="email" name="email" label="Email Address" hint="We'll never share your email" required>

<!-- Thai alphabet filter -->
<input type="text" name="thai-name" label="ชื่อ (Thai Name)" data-alphabet="thai">

<!-- Password with toggle (JS) -->
<input type="password" name="pwd" label="Password" minlength="8" required>
```

---

### 3.4 Radio ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="radio">` |
| **SUAI Tag** | `<select type="radio"><option>` - replaces `<input type="radio">` |
| **CSS-Only** | ✅ Yes |
| **JS Vanilla** | Minimal - Selection behavior |
| **JS Component** | Optional |

**What SUAI Replaces:**
- `<input type="radio">` → `<select type="radio"><option>`
- Individual radio button element

**Example:**
```html
<fieldset label="LLM Choice" hint="Select your favorite LLM">
  <select type="radio" name="llm">
    <option value="openai" label="OpenAI" hint="ChatGPT-4, ChatGPT-o1"></option>
    <option value="anthropic" label="Anthropic" hint="Claude 3.5 Sonnet"></option>
    <option value="google" label="Google" hint="Gemini Pro"></option>
  </select>
</fieldset>
```

---

### 3.5 Radio Group ✅
**Priority**: N/A (covered by #3.4)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<fieldset>` + `<legend>` + multiple `<input type="radio">` |
| **SUAI Tag** | `<select type="radio">` - replaces entire radio group |

**What SUAI Replaces:**
- `<fieldset>` + `<legend>` + multiple `<input type="radio">` → `<select type="radio">`
- The entire radio group pattern

**Note:** Use `<fieldset>` as optional container with SUAI `label` and `hint` attributes for additional grouping/styling.

---

### 3.6 Rating ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | None (no native rating input) |
| **SUAI Tag** | `<select type="rating"><option>` |
| **CSS-Only** | ✅ Yes - Star/heart visual rendering |
| **JS Vanilla** | Minimal - Click/hover interaction |
| **JS Component** | Optional |

**Example:**
```html
<select type="rating" name="rating" label="Rate this product">
  <option value="1">1 star</option>
  <option value="2">2 stars</option>
  <option value="3">3 stars</option>
  <option value="4">4 stars</option>
  <option value="5">5 stars</option>
</select>
```

---

### 3.7 Select ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<select><option>` (native dropdown) |
| **SUAI Tag** | `<select type="list"><option>` or `<select type="dropdown">` |
| **CSS-Only** | ✅ Yes |
| **JS Vanilla** | Minimal - Enhanced UX |
| **JS Component** | Optional - Search, multi-select |

**SUAI Select Types:**
- `<select type="dropdown">` - Traditional dropdown (default)
- `<select type="list">` - Always-visible list

---

### 3.8 Slider (Range) ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="range">` |
| **SUAI Tag** | `<select type="slider">` or keep `<input type="range">` |
| **CSS-Only** | ✅ Yes - Custom track/thumb styling |
| **JS Vanilla** | Minimal - Value display, dual handles |
| **JS Component** | Optional |

---

### 3.9 Switch (Toggle) ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="checkbox">` (for toggle) |
| **SUAI Tag** | `<select type="toggle">` (on/off) OR `<select type="switch">` (visual switch) |
| **CSS-Only** | ✅ Yes - Toggle animation |
| **JS Vanilla** | Minimal - State management |
| **JS Component** | Optional |

**Difference:**
- `<select type="toggle">` - Binary on/off (like checkbox)
- `<select type="switch">` - Visual "switch" animation between multiple values

---

### 3.10 Textarea / Composer ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<textarea>` or `<div contenteditable="true">` |
| **SUAI Tag** | `<composer>` (universal content creation) |
| **CSS-Only** | ✅ Yes - Basic styling |
| **JS Vanilla** | Required - Toolbox, formatting, preview sync |
| **JS Component** | Optional |

**Composer Types:**
```html
<!-- Plain text -->
<composer mode="plain" name="comment" label="Your Comment"></composer>

<!-- Markdown editor -->
<composer type="markdown" name="post" label="Blog Post"></composer>

<!-- HTML editor -->
<composer type="html" name="template" label="Email Template"></composer>

<!-- Rich text/WYSIWYG -->
<composer type="rich" name="description" label="Product Description"></composer>

<!-- Code editor -->
<composer type="code" lang="js" name="script" label="JavaScript Code"></composer>

<!-- Email composition -->
<composer type="email" name="message" label="Email Message"></composer>
```

**Preview Element:**
```html
<composer type="markdown" name="readme" id="readme-editor"></composer>
<preview for="readme-editor"></preview>

<!-- Or implicit reference to preceding composer -->
<composer type="markdown" name="post"></composer>
<preview></preview>
```

**Version & Diff Tags (Low Priority):**
```html
<!-- Content versioning -->
<version lang="en" rev="v3" time="2025-10-30T09:00Z" current>
  **HTML 6 proposal** - Exploring unified composer system.
</version>

<version lang="fr" auto="from:en model:gpt" time="2025-10-30T09:01Z">
  **Proposition HTML 6** - Exploration système composer unifié.
</version>

<!-- Version comparison -->
<diff from="v1" to="v2" for="policy"></diff>
```

**Features (Vanilla JS):**
- Toolbox/toolbar for formatting
- Input filtering based on type
- Auto-formatting (markdown, code, etc.)
- Live preview sync
- Character/word counter
- Auto-resize
- Auto-save to localStorage
- Emoji picker (for rich/email types)

---

## Category 4: Imagery

### 4.1 Media (replaces Animated Image) ✅
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

### 4.2 Avatar ✅
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

### 4.3 Gallery (replaces Carousel) ✅
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

### 4.4 Carousel Item
**Priority**: N/A (obsolete - covered by #4.3)

Items are direct children of `<gallery>`, can be any element type.

---

### 4.5 Image Comparison ✅
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

### 4.6 Icon ✅
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

### 4.7 Zoomable Frame
**Priority**: ⚫ Skipped (Low priority - specialized use case)

Not implementing at this time. Can be added later if needed.

---

## Category 4: Imagery - Summary

✅ **Completed:**
- 4.1 Media (unified media element) - 🔴 High
- 4.2 Avatar - 🔴 High
- 4.3 Gallery (carousel, grid, masonry, lightbox, compare) - 🟡 Medium
- 4.4 Carousel Item - Obsolete (items are gallery children)
- 4.5 Image Comparison (gallery type="compare") - 🔴 High (for SUAI showcase)
- 4.6 Icon (three approaches + decorative) - 🔴 High
- 4.7 Zoomable Frame - ⚫ Skipped

---

## Category 5: Navigation

### 5.1 Breadcrumb / Path ✅
**Priority**: 🔴 High (simple version), 🟡 Medium (full static map), 🟢 Low (Vue component)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<nav>` + `<ol>`/`<ul>` |
| **SUAI Tag** | `<path type="..."><point>` (universal sequence navigation) |
| **CSS-Only** | ✅ Yes - Separator, ellipsis, highlighting |
| **JS Vanilla** | Minimal - Match current path, wildcard transformation |
| **JS Component** | Optional - Dynamic mapping, transformations |

**SUAI Innovation: `<path>` + `<point>` System**

Universal pattern for **ordered sequences of points along ANY dimension**:

**Path Types:**

**Abstract/Semantic Dimensions:**
```html
<!-- Sitemap (breadcrumb) -->
<path type="sitemap" current="/products/laptops/macbook" separator=" > " ellipsis="middle">
  <point to="/" label="Home" />
  <point to="/products/">Our Product</point>
  <point path="/products/laptops/" to="/products/laptops" match>Laptop</point>
  <point path="/products/laptops/macbook/" to="/products/laptops/macbook" match>Macbook</point>
</path>

<!-- History (navigation trail) -->
<path type="history" current="/products/laptops/macbook">
  <point to="/home" label="Home" />
  <point to="/products" />
  <point to="/products/laptops" />
  <point to="/products/laptops/macbook" at="here" />
</path>

<!-- Memory (wizard/stepper state) -->
<path type="memory" current="cart-review">
  <point to="product-selection" label="Pick Products" />
  <point to="cart-review" at="here" />
  <point to="checkout" label="Next Step" />
</path>
```

**Physical Dimensions:**
```html
<!-- Itinerary (spatial journey) -->
<path type="itinerary" current="stop-2">
  <point to="start" coords="40.7128,-74.0060" label="New York" />
  <point to="stop-1" coords="41.8781,-87.6298" label="Chicago" />
  <point to="stop-2" coords="34.0522,-118.2437" label="Los Angeles" at="here" />
</path>

<!-- Timeline (temporal journey) -->
<path type="timeline" current="2025-06">
  <point to="2024-01" label="Project Kickoff" />
  <point to="2024-06" label="Alpha Release" />
  <point to="2025-01" label="Beta Release" />
  <point to="2025-06" label="Launch" at="here" />
</path>
```

**Process Dimensions:**
```html
<!-- Roadmap (product/project roadmap) -->
<path type="roadmap" current="v2">
  <point to="v1" label="MVP Launch" />
  <point to="v2" label="Feature Expansion" at="here" />
  <point to="v3" label="Enterprise" />
</path>

<!-- Decision (decision tree path) -->
<path type="decision" current="option-b">
  <point to="start" label="Initial Problem" />
  <point to="option-a" label="Approach A" />
  <point to="option-b" label="Approach B (chosen)" at="here" />
</path>

<!-- Workflow (process steps) -->
<path type="workflow" current="review">
  <point to="draft" label="Draft" />
  <point to="review" label="Under Review" at="here" />
  <point to="approved" label="Approved" />
  <point to="published" label="Published" />
</path>

<!-- Playlist (media sequence) -->
<path type="playlist" current="track-3">
  <point to="track-1" label="Song Title 1" />
  <point to="track-2" label="Song Title 2" />
  <point to="track-3" label="Song Title 3" at="here" />
</path>
```

**Attributes:**

**`<path>` attributes:**
- `type` - Dimension type: sitemap, history, memory, itinerary, timeline, roadmap, decision, workflow, playlist
- `current` - Current location/state identifier
- `separator` - Visual separator between points (default: " > ")
- `ellipsis` - Collapse position: start, middle, end

**`<point>` attributes:**
- `to` - Target destination (URL, ID, coordinate, timestamp)
- `path` - Path pattern for matching (sitemap)
- `label` - Display text (optional, can use text content)
- `match` - Boolean, indicates this point matches current path
- `at="here"` - Marks current position
- `coords` - Coordinates (for itinerary)

**Philosophy:**
All sequential navigation is fundamentally "ordered sequences of points along a dimension":
- **Abstract**: sitemap, history, memory, roadmap, decision, workflow
- **Spatial**: itinerary (coordinates, directions, stops)
- **Temporal**: timeline (events, dates, milestones)
- **Media**: playlist (tracks, videos, chapters)

Same structure, different semantic meaning via `type` attribute.

**CSS Projection:**
- Show only `[match]` points (for sitemap)
- Highlight `[at="here"]` or `[match][current]`
- Render separators visually (::after pseudo-element)
- Handle ellipsis collapse

**JS Features:**
- Auto-match current path against point patterns
- Wildcard transformation (capitalize-words, slugify, etc.)
- Dynamic label generation from path segments
- Dictionary mapping for wildcards

**Priority Implementation:**
1. **Phase 1 (High)**: CSS-only with 3 basic types (sitemap, history, memory)
2. **Phase 2 (Medium)**: Full static map, JS orchestration, all types
3. **Phase 3 (Low)**: Vue `<su-path>` component with dynamic features

---

### 5.2 Breadcrumb Item
**Priority**: N/A (obsolete - use `<point>` within `<path>`)

---

### 5.3 Tabs (covers #5.3, #5.4, #5.5) ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | Various (div containers, buttons) |
| **SUAI Tag** | `<select type="tabs">` + associated panels |
| **CSS-Only** | Partial - Tab styling yes, panel switching needs JS |
| **JS Vanilla** | Required - Panel switching |
| **JS Component** | Optional |

**Example:**
```html
<!-- Simple tab navigation -->
<select type="tabs" name="view" label="Account Settings">
  <option value="profile">Profile</option>
  <option value="settings">Settings</option>
  <option value="notifications">Notifications</option>
</select>

<!-- Tab navigation with optgroup (grouped tabs) -->
<select type="tabs" name="dashboard-view">
  <optgroup label="Account">
    <option value="profile">Profile</option>
    <option value="settings">Settings</option>
  </optgroup>
  <optgroup label="Notifications">
    <option value="email">Email</option>
    <option value="push">Push</option>
  </optgroup>
</select>

<!-- Associated tab panels -->
<div data-tab="profile">
  <h2>Profile</h2>
  <p>Profile content here...</p>
</div>

<div data-tab="settings" hidden>
  <h2>Settings</h2>
  <p>Settings content here...</p>
</div>

<div data-tab="email" hidden>
  <h2>Email Notifications</h2>
  <p>Email notification settings...</p>
</div>

<div data-tab="push" hidden>
  <h2>Push Notifications</h2>
  <p>Push notification settings...</p>
</div>
```

**Attributes:**
- `type="tabs"` - Renders as tab navigation
- `name` - Form field name
- `label` - Optional label for tab group
- `data-tab` - Associates panel with tab value (on panel elements)

**Grouping:**
- Supports `<optgroup label="...">` for organizing tabs into labeled groups
- Groups can be visually separated or styled differently

**Features (Vanilla JS):**
- Auto-hide/show panels based on selected tab
- Keyboard navigation (arrow keys)
- URL hash sync (optional)
- Lazy load panel content (optional)

**Note:** This covers:
- #5.3 Tab → `<option>` within `<select type="tabs">`
- #5.4 Tab Group → `<select type="tabs">` container
- #5.5 Tab Panel → Elements with `data-tab` attribute

---

### 5.4 Tab Group
**Priority**: N/A (covered by #5.3)

---

### 5.5 Tab Panel
**Priority**: N/A (covered by #5.3)

---

### 5.6 Tree (covers #5.6, #5.7) ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<ul>` + `<li>` nested |
| **SUAI Tag** | `<tree><node>` |
| **CSS-Only** | Partial - Styling yes, expand/collapse needs JS |
| **JS Vanilla** | Required - Expand/collapse, selection |
| **JS Component** | Optional |

**Example:**
```html
<!-- Basic tree -->
<tree>
  <node label="Documents" expanded>
    <node label="Work">
      <node label="Report.pdf"></node>
      <node label="Presentation.pptx"></node>
    </node>
    <node label="Personal">
      <node label="Resume.pdf"></node>
    </node>
  </node>
</tree>

<!-- Tree with selection -->
<tree selection="multiple">
  <node label="Root" expanded>
    <node label="Branch 1" selectable="branch">
      <node label="Leaf 1.1" selectable="leaf"></node>
      <node label="Leaf 1.2" selectable="leaf"></node>
    </node>
    <node label="Branch 2" selectable="branch">
      <node label="Leaf 2.1" selectable="leaf"></node>
    </node>
  </node>
</tree>

<!-- Tree with single selection (leaf only) -->
<tree selection="single" selectable="leaf">
  <node label="Folders">
    <node label="Documents" icon="folder">
      <node label="file1.pdf" icon="file"></node>
      <node label="file2.pdf" icon="file"></node>
    </node>
  </node>
</tree>
```

**Attributes:**

**`<tree>` attributes:**
- `selection` - Selection mode: none, single, multiple
- `selectable` - What can be selected: leaf, branch, all (default: all)

**`<node>` attributes:**
- `label` - Node display text
- `expanded` - Boolean, node is expanded
- `collapsed` - Boolean, node is collapsed
- `selectable` - Override tree-level: leaf, branch (optional)
- `icon` - Icon name (integrates with `<icon>`)
- `lazy` - Boolean, load children on expand

**Selection Modes:**
- `selection="none"` - No selection (display only)
- `selection="single"` - Single node selection
- `selection="multiple"` - Multiple node selection (checkboxes)

**Selectable Types:**
- `selectable="leaf"` - Only leaf nodes (no children) can be selected
- `selectable="branch"` - Only branch nodes (with children) can be selected
- `selectable="all"` - Any node can be selected (default)

**Features (Vanilla JS):**
- Expand/collapse nodes
- Selection management
- Keyboard navigation (arrow keys, Enter, Space)
- Lazy loading children
- Search/filter nodes

**Note:** This covers:
- #5.6 Tree → `<tree>` container
- #5.7 Tree Item → `<node>` element

---

### 5.7 Tree Item
**Priority**: N/A (covered by #5.6)

---

## Category 5: Navigation - Summary

✅ **Completed:**
- 5.1 Path (universal `<path><point>` system) - 🔴 High
- 5.2 Breadcrumb Item - Obsolete (use `<point>`)
- 5.3 Tabs (`<select type="tabs">`) - 🔴 High
- 5.4 Tab Group - Covered by #5.3
- 5.5 Tab Panel - Covered by #5.3
- 5.6 Tree (`<tree><node>`) - 🟡 Medium
- 5.7 Tree Item - Covered by #5.6

---

## Complete SUAI Form Example

```html
<form label="AI Insight" hint="Fill out this form to send insight about the AI developer">

  <!-- Radio selection -->
  <fieldset label="LLM Choice" hint="Select your favorite LLM">
    <select type="radio" name="llm">
      <option value="openai" label="OpenAI" hint="ChatGPT-4, ChatGPT-o1"></option>
      <option value="anthropic" label="Anthropic" hint="Claude 3.5 Sonnet"></option>
      <option value="google" label="Google" hint="Gemini Pro"></option>
    </select>
  </fieldset>

  <!-- Text input with label/hint -->
  <input type="text" name="name" label="Your Name" hint="First and last name" required>

  <!-- Email with label/hint -->
  <input type="email" name="email" label="Email Address" hint="We'll never share your email" required>

  <!-- Composer (textarea replacement) -->
  <composer type="markdown" name="feedback" label="Feedback" hint="Tell us what you think" rows="10"></composer>

  <!-- Checkbox selection (multiple) -->
  <fieldset label="Features" hint="Select features you use">
    <select type="checkbox" name="features" multiple>
      <option value="code" label="Code Generation"></option>
      <option value="refactor" label="Refactoring"></option>
      <option value="docs" label="Documentation"></option>
    </select>
  </fieldset>

  <!-- Toggle switch -->
  <select type="toggle" name="newsletter" label="Subscribe to Newsletter" hint="Get weekly updates"></select>

  <button type="submit">Submit</button>
</form>
```

---

## Benefits of SUAI Unified Pattern

1. **Consistent API**: Same attributes (`label`, `hint`) across all form elements
2. **AI-Friendly**: Clear, predictable structure for code generation
3. **Less Markup**: No wrapper `<label>` or `<legend>` elements needed
4. **Semantic Clarity**: `<select type="*">` clearly indicates selection behavior
5. **Progressive Enhancement**: Works with/without JavaScript
6. **Accessibility**: Automatic ARIA handling via JS
7. **Form Integration**: Native form serialization
8. **Extensibility**: Easy to add new types (JSON, YAML, SQL, etc.)

---

**Document Version**: 2025-10-30
**Status**: In Progress (Categories 3-4 documented)
