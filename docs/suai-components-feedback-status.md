# SUAI Components - Feedback & Status

**Category 2: Feedback & Status**

Components for displaying notifications, alerts, loading states, and user feedback.

---

## SUAI Core Innovations (Feedback & Status-Related)

### 1. Three-Pattern Notification System
Clear separation of notification types:
- `<alert>` - Focus-acquiring notifications (urgent messages)
- `<dialog>` - User action required (must respond)
- `hint="..."` - Lightweight help/tooltips (pure CSS)

### 2. Unified Progress System
`<progress type="*">` with multiple visual representations:
- `type="bar"` - Linear progress bar (default)
- `type="ring"` - Circular/ring progress
- `type="steps"` - Step-by-step progress
- `type="gauge"` - Gauge/meter style
- `type="skeleton"` - Skeleton loading
- `type="percent"` - Percentage display only

### 3. Sign Integration
Badges, status indicators, and ratings integrated into the `<sign>` system.

### 4. `hint` Attribute System
Pure CSS tooltips/hints using attribute + ::before/::after pseudo-elements.

---

## 2.1 Badge ✅
**Priority**: 🔴 High (integrated into `<sign>` system)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<span class="badge">` |
| **SUAI Tag** | `<sign type="badge">` or specific badge types |
| **CSS-Only** | ✅ Yes - Full CSS implementation |
| **JS Component** | Not needed (CSS-only sufficient) |

**Integration with `<sign>` System:**
Badges are symbolic indicators and fit naturally into the sign taxonomy.

**HTML Pattern:**
```html
<!-- Generic badges -->
<sign type="badge" value="New">New</sign>
<sign type="badge" value="12" variant="primary">12</sign>

<!-- Semantic status badges -->
<sign type="verified"></sign>
<sign type="beta"></sign>
<sign type="premium"></sign>
<sign type="pro"></sign>

<!-- Notification badges (overlaid) -->
<button>
  Notifications
  <sign type="count" value="5" position="top-right"></sign>
</button>

<!-- Status badges -->
<sign type="online"></sign>
<sign type="offline"></sign>
<sign type="away"></sign>
```

**Sign Types for Badges:**
- `type="badge"` - Generic label badge (with value attribute)
- `type="count"` - Notification counter (with value attribute)
- `type="verified"` - Verified/checkmark badge
- `type="new"` - New feature indicator
- `type="beta"` - Beta/preview badge
- `type="pro"` - Pro/premium badge
- `type="hot"` - Trending/hot indicator
- `type="sale"` - Sale/discount badge
- Plus all status signs from sign system (online, offline, etc.)

**CSS Features:**
- Pill shape (fully rounded)
- Color variants via `variant` attribute or CSS custom properties
- Sizes via CSS (small, medium, large)
- Positioned variants (absolute positioning with `position` attribute)
- Pulse animation for attention
- Number display support
- Icon integration
- Minimal/outline variants

---

## 2.2 Callout/Alert ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<div role="alert">` for urgent alerts |
| **SUAI Tag** | `<alert>` - Focus-acquiring notifications |
| **CSS-Only** | ✅ Yes - Dismissal with Popover API, styling variants |
| **JS Vanilla** | Basic interactions, animations, auto-dismiss |
| **JS Component** | `<su-alert>` - Vue component with advanced features |

**Three Distinct Patterns:**

### Pattern 1: `<alert>` - Focus-Acquiring Notifications
For urgent messages that need user attention (but not necessarily action).

```html
<!-- Simple alert -->
<alert variant="warning">
  <strong>Warning:</strong> Your session will expire in 5 minutes.
</alert>

<!-- Dismissible alert (CSS-only with popover) -->
<alert variant="danger" dismissible>
  <strong>Error:</strong> Failed to save changes.
  <button popovertarget="alert-1">×</button>
</alert>

<!-- With icon -->
<alert variant="success">
  <sign type="success"></sign>
  <strong>Success:</strong> Your changes have been saved.
</alert>
```

**Variants**: info, success, warning, danger, neutral

**CSS Features:**
- Colored border/background
- Icon integration (via `<sign>`)
- Title + body layout
- Close button styling
- Dismissal with Popover API
- Slide-in animations
- Stack positioning (for multiple alerts)

---

### Pattern 2: `<dialog>` - User Interaction Required
For interactions requiring explicit user response (ok, cancel, or more actions).

```html
<!-- Dialog with actions -->
<dialog>
  <h2>Confirm Delete</h2>
  <p>Are you sure you want to delete this item?</p>
  <button type="submit">Delete</button>
  <button type="cancel">Cancel</button>
</dialog>
```

---

### Pattern 3: `hint` Attribute - Lightweight Help System
For non-intrusive help text, instructions, and tooltips (see #2.8 Tooltip for full details).

```html
<!-- Simple hint -->
<button hint="Click here to submit the page">Submit</button>

<!-- Input hint -->
<input hint="Enter your email address" type="email">

<!-- Context-aware hints -->
<form class="hint-below">
  <input hint="Required field" required>
</form>
```

**Summary - Three Patterns:**

| Pattern | Use Case | Interaction | Implementation |
|---------|----------|-------------|----------------|
| `<alert>` | Urgent notifications | Optional dismissal | CSS + optional JS |
| `<dialog>` | User action required | Must respond (ok/cancel) | Native `<dialog>` + CSS |
| `hint="..."` | Inline help/tooltips | Hover/focus only | Pure CSS (::before/::after) |

---

## 2.3 Progress Bar ✅
**Priority**: 🟡 Medium (part of unified progress system)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<progress value="70" max="100">` |
| **SUAI Tag** | `<progress type="bar">` (default, semantic for numeric values) |
| **CSS-Only** | ✅ Yes |
| **JS Vanilla** | Optional - Time-based animation |
| **JS Component** | Not needed |

**See**: Unified Progress System in #2.4 for full details.

**HTML Pattern:**
```html
<!-- Simple progress bar -->
<progress type="bar" value="70" max="100">70%</progress>

<!-- Indeterminate (no value) -->
<progress type="bar"></progress>

<!-- Time-based animation -->
<progress type="bar" data-duration="5000" loop="1"></progress>
```

---

## 2.4 Progress Ring (+ Unified Progress System) ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<svg>` + `<circle>` for circular rendering |
| **SUAI Tag** | `<progress type="ring">` - Unified progress with type variants |
| **CSS-Only** | ✅ Yes - Conic-gradient, masks, SVG, CSS animations |
| **JS Vanilla** | Time-based animation (same as progress bar) |
| **JS Component** | `<su-progress>` - Vue component with all type support |

## 🎯 UNIFIED PROGRESS SYSTEM

SUAI extends `<progress>` with `type` attribute for different visual representations:

```html
<!-- Linear progress bar (default) -->
<progress type="bar" value="70" max="100">70%</progress>

<!-- Circular/ring progress -->
<progress type="ring" value="75" max="100">75%</progress>

<!-- Step-by-step progress -->
<progress type="steps" value="3" max="5">Step 3 of 5</progress>

<!-- Gauge/meter style -->
<progress type="gauge" value="85" max="100">85%</progress>

<!-- Skeleton loading -->
<progress type="skeleton"></progress>

<!-- Percentage display only -->
<progress type="percent" value="42" max="100">42%</progress>
```

### Progress Types

#### 1. `type="bar"` (Default - Linear Bar)
Standard horizontal progress bar with determinate/indeterminate states.

#### 2. `type="ring"` (Circular Progress)
```html
<!-- Circular progress ring -->
<progress type="ring" value="75" max="100">75%</progress>

<!-- With custom size -->
<progress type="ring" value="80" max="100" style="--ring-size: 120px;">80%</progress>

<!-- Indeterminate (spinning) -->
<progress type="ring" class="progress-indeterminate"></progress>
```

**CSS Implementation:**
- Conic-gradient approach for modern browsers
- SVG fallback for older browsers
- Center label showing percentage
- Customizable size and thickness via CSS custom properties

#### 3. `type="steps"` (Step-by-Step Progress)
```html
<progress type="steps" value="3" max="5">Step 3 of 5</progress>

<!-- With labels -->
<progress type="steps" value="2" max="4" data-labels="Start,Profile,Payment,Complete">
  Step 2 of 4
</progress>
```

#### 4. `type="gauge"` (Gauge/Meter Style)
```html
<progress type="gauge" value="85" max="100">85%</progress>

<!-- With threshold colors -->
<progress type="gauge" value="95" max="100"
  data-thresholds="0:success,70:warning,90:danger">
  95%
</progress>
```

#### 5. `type="skeleton"` (Skeleton Loading)
```html
<!-- Shimmer loading effect -->
<progress type="skeleton"></progress>

<!-- Custom width/height -->
<progress type="skeleton" style="--skeleton-width: 200px; --skeleton-height: 20px;"></progress>

<!-- Multiple lines -->
<progress type="skeleton" data-lines="3"></progress>
```

#### 6. `type="percent"` (Percentage Display Only)
```html
<!-- Simple percentage -->
<progress type="percent" value="42" max="100">42%</progress>

<!-- With label -->
<progress type="percent" value="87" max="100" data-label="Complete">87%</progress>
```

### Common Features Across All Types

**Indeterminate State** (automatic):
```html
<!-- Progress WITHOUT value = automatically indeterminate -->
<progress type="ring"></progress>  <!-- spinning, no value -->
<progress type="bar"></progress>   <!-- animated, no value -->

<!-- Progress WITH value = determinate -->
<progress type="ring" value="75" max="100"></progress>  <!-- shows 75% -->
```

**Time-Based Animation with Loop Attribute:**
```html
<!-- Complete once (default) -->
<progress type="ring" data-duration="5000" loop="1"></progress>

<!-- Infinite loop -->
<progress type="ring" data-duration="3000" loop="0"></progress>

<!-- Specific number of loops -->
<progress type="ring" data-duration="2000" loop="3"></progress>
```

**Loop Attribute Behavior** (inspired by GIF loop attribute):
- `loop="0"` - Infinite loop (forever)
- `loop="1"` - Default, complete once in the specified time
- `loop="n"` - Complete n times, then stop at 100%

---

## 2.5 Skeleton ✅
**Priority**: 🟡 Medium (covered by unified progress system)

**See**: `<progress type="skeleton">` in Progress Ring (#2.4)

Skeleton loading is implemented as `<progress type="skeleton">` with shimmer/pulse animations. See unified progress system for full details.

---

## 2.6 Spinner ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<div>` with CSS animation |
| **SUAI Tag** | `<spinner>` - Distinct from progress (loading indicator, not progress) |
| **CSS-Only** | ✅ Yes - Pure CSS @keyframes animations |
| **JS Component** | Not needed (CSS-only sufficient) |

**Key Distinction:**
- **`<spinner>`**: Loading indicator (unknown duration, indeterminate)
- **`<progress>` without value**: Also indeterminate, but for trackable processes
- Spinners are for "waiting" states, progress is for "completion" states

**HTML Pattern:**
```html
<!-- Simple spinner -->
<spinner></spinner>

<!-- With size variants -->
<spinner size="small"></spinner>
<spinner size="large"></spinner>

<!-- With color variants -->
<spinner variant="primary"></spinner>
<spinner variant="light"></spinner>

<!-- Different spinner styles -->
<spinner style="circular"></spinner>
<spinner style="dots"></spinner>
<spinner style="bars"></spinner>
<spinner style="pulse"></spinner>
```

**Spinner Styles:**
1. **Circular Spinner** (Default) - Rotating border
2. **Dots Spinner** - Pulsing dots
3. **Bars Spinner** - Animated bars
4. **Pulse Spinner** - Pulsing circle

**Usage Examples:**
```html
<!-- Button with loading spinner -->
<button disabled>
  <spinner size="small"></spinner>
  Loading...
</button>

<!-- Centered page loader -->
<div class="page-loader">
  <spinner size="large"></spinner>
  <p>Please wait...</p>
</div>

<!-- Inline spinner -->
<p>Saving <spinner size="small" variant="primary"></spinner></p>
```

**Semantic Distinction:**

| Element | Purpose | Value | Duration |
|---------|---------|-------|----------|
| `<spinner>` | Unknown wait | N/A | Unknown |
| `<progress>` (no value) | Indeterminate progress | None | Unknown |
| `<progress value="50">` | Determinate progress | 0-100 | Variable |
| `<progress data-duration loop>` | Time-based countdown | Animated | Fixed |

---

## 2.7 Tag ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<span class="tag">` |
| **SUAI Tag** | `<tag>` - Interactive, removable labels |
| **CSS-Only** | ✅ Yes - Styling only (no removal functionality) |
| **JS Vanilla** | Removal, adding, sorting functionality |
| **JS Component** | `<su-tag>` - Vue component with full features |

**Key Distinction:**
- **`<sign>`**: Static indicator (status, badge, symbol)
- **`<tag>`**: Interactive label (removable, selectable, manageable)

Tags are for managing collections: filters, keywords, selections, categories.

**HTML Pattern:**
```html
<!-- Simple tag -->
<tag>JavaScript</tag>

<!-- Tag with remove button -->
<tag>
  React
  <button type="button" class="tag-remove" aria-label="Remove">×</button>
</tag>

<!-- Tag variants -->
<tag variant="primary">Featured</tag>
<tag variant="success">Approved</tag>
<tag variant="outline">Draft</tag>

<!-- Tag sizes -->
<tag size="small">Small</tag>
<tag size="large">Large</tag>

<!-- Tag with icon -->
<tag>
  <sign type="icon" name="star"></sign>
  Favorite
  <button type="button" class="tag-remove">×</button>
</tag>

<!-- Clickable tag (filter toggle) -->
<tag role="button" tabindex="0" class="is-clickable">
  Category
</tag>

<!-- Selected state -->
<tag class="is-selected">Active Filter</tag>

<!-- Disabled state -->
<tag class="is-disabled">Locked</tag>
```

**CSS Features:**
- Pill shape (fully rounded)
- Color variants
- Sizes (small, medium, large)
- States (clickable, selected, disabled)
- Icon integration
- Remove button styling
- Hover/focus effects
- Dark mode support

**JavaScript Features (Vanilla):**
1. **Tag Removal** - Remove tag on close button click
2. **Tag Adding** - Add new tags with animation
3. **Tag Sorting** - Sort tags alphabetically
4. **Tag Input** - Create tags from input field (Enter key)

**Use Cases:**
- Keyword tags (blog posts, articles)
- Filter chips (active filters in search)
- Selected items (multi-select UI)
- Categories/labels
- Skills/technologies
- Hashtags
- To-do tags
- Email recipients

---

## 2.8 Tooltip ✅
**Priority**: 🔴 High (covered by `hint` attribute system)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `hint` attribute on any element |
| **SUAI Tag** | N/A - Attribute-based system |
| **CSS-Only** | ✅ Yes - Pure CSS tooltips with `hint` attribute |
| **JS Vanilla** | Optional - Simplified markdown rendering in hints |
| **JS Component** | Not needed (attribute system sufficient) |

**Base System:**
```html
<!-- Hover-triggered hints (default) -->
<button hint="Click here to submit">Submit</button>
<input hint="Enter your email" type="email">

<!-- Context-aware positioning -->
<form class="hint-below">
  <input hint="Required field" required>
</form>
```

**CSS Implementation:**
Pure CSS using `::before` and `::after` pseudo-elements:
- `[hint]::before` - Hint content (using `attr(hint)`)
- `[hint]::after` - Arrow indicator
- Triggered by `:hover` and `:focus`
- No JavaScript required
- No extra DOM elements

**Context Classes:**
- `.hint-above` - Show hint above element (default)
- `.hint-below` - Show hint below element
- `.hint-left` - Show hint on left
- `.hint-right` - Show hint on right

**Extension 1: Always-Visible Hints**
```html
<!-- Always visible hint -->
<input hint="Password must be 8+ characters" class="hint-visible">

<!-- Container with all hints visible -->
<form class="hints-visible">
  <input hint="First name" type="text">
  <input hint="Last name" type="text">
  <input hint="Valid email address" type="email">
</form>

<!-- Body-level: all hints visible globally -->
<body class="hints-visible">
  <!-- All hints on page are visible -->
</body>
```

**Use Cases:**
- Form field labels/instructions
- Inline help that's always visible
- Tutorial/onboarding mode (body.hints-visible)
- Debug mode showing all hints
- Accessibility mode (always show guidance)

**Benefits of `hint` Attribute:**
- ✅ Zero JavaScript
- ✅ No extra DOM elements
- ✅ Works on any element
- ✅ Automatically positioned
- ✅ Keyboard accessible
- ✅ Screen reader accessible
- ✅ Theme-able via CSS custom properties

**Extension 2: Simplified Markdown in Hints (Optional JS)**
- `**bold**` → **bold**
- `*italic*` → *italic*
- \`code\` → `code`
- Safe rendering without HTML injection

---

## Summary

✅ **Completed: 8 components**
- 2.1 Badge (`<sign>` system) - 🔴 High
- 2.2 Callout/Alert (3 patterns) - 🔴 High
- 2.3 Progress Bar - 🟡 Medium
- 2.4 Progress Ring (Unified Progress System) - 🟡 Medium
- 2.5 Skeleton (`<progress type="skeleton">`) - 🟡 Medium
- 2.6 Spinner - 🔴 High
- 2.7 Tag - 🟡 Medium
- 2.8 Tooltip (`hint` attribute) - 🔴 High

**Priority Breakdown:**
- 🔴 High: 4 components (Badge/Sign, Alert, Spinner, Tooltip/Hint)
- 🟡 Medium: 4 components (Progress Bar, Progress Ring/System, Skeleton, Tag)

**Key Innovations:**
1. **Three-Pattern Notification System** - `<alert>`, `<dialog>`, `hint` attribute
2. **Unified Progress System** - 6 types under `<progress type="*">`
3. **Sign Integration** - Badges, status, ratings in `<sign>` taxonomy
4. **Pure CSS Tooltips** - `hint` attribute with ::before/::after
5. **Semantic Distinction** - Clear separation: spinner vs progress vs skeleton

---

**Document Version**: 2025-10-31
**Status**: Complete
