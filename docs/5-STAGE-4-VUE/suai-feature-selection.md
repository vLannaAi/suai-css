# SUAI Feature Selection & Implementation Matrix

**Version**: 1.0
**Status**: In Progress
**Date**: 2025-10-30

---

## Legend

**Priority Levels:**
- 🔴 **High** - Core feature, implement first
- 🟡 **Medium** - Important but can wait
- 🟢 **Low** - Nice to have
- ⚪ **Skip** - Not needed for SUAI

**Implementation Types:**
- ✅ CSS-only (no JavaScript)
- 🔧 JS required
- 🎨 Hybrid (CSS base + optional JS enhancement)

**Implementation Tiers** (when JS is required):
- **No-JS**: Pure HTML/CSS (when technically possible)
- **JS (Vanilla)**: Minimal vanilla JavaScript library, framework-agnostic, works in any browser
- **Vue-JS**: Full Vue component with framework features (e.g., `<su-*>` components)

---

## 1. Actions Category

### 1.1 Button ✅ REVIEWED
**Priority**: 🔴 High
**Implementation**: 🎨 Hybrid

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<button>` |
| **SUAI Custom Tag** | `<button>` (keep native) |
| **CSS-Only Version** | ✅ Yes - Full styling with variants, states, sizes |
| **JS Component** | `<su-button>` - Analytics, loading state, async actions, debouncing |

**CSS Features:**
- Variants: primary, secondary, danger, warning, success, outline, text
- Sizes: small, medium, large
- States: hover, active, focus, disabled, loading (CSS animation)
- Icon support (prefix/suffix via slots or pseudo-elements)
- Full-width, pill shape options

**JS Enhancements:**
- Click analytics tracking
- Loading state management with API integration
- Debounce/throttle functionality
- Confirmation dialogs
- Async action feedback
- Keyboard shortcuts registration

---

### 1.2 Button Group ✅ REVIEWED
**Priority**: ⚪ Skip
**Implementation**: N/A

**Rationale**: Without JS, this is just a layout container (flexbox with gaps and borders). The orchestration logic would need to be generalized for other categories (tabs, links, etc.) and requires JS for structured component behavior. Better to defer until we have a general grouping pattern.

**Alternative**: Use layout utilities (`.l-cluster`, flexbox utilities) for visual grouping when needed.

---

### 1.3 Copy Button ✅ REVIEWED
**Priority**: 🟢 Low
**Implementation**: 🔧 JS required (3-tier approach)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<button type="copy" for="elementId">` |
| **SUAI Custom Tag** | `<button type="copy">` (semantic type extension) |
| **CSS-Only Version** | ❌ No - Requires JavaScript for Clipboard API |
| **JS Tier 1 (Vanilla)** | Minimal vanilla JS library for browser compatibility |
| **JS Tier 2 (Vue)** | `<su-copy-button>` with full framework features |

**Implementation Tiers**:
1. **No-JS**: Not possible (clipboard access requires JS)
2. **JS (Vanilla)**: Minimal library that works in any browser
   - Listens for `button[type="copy"]` clicks
   - Copies from `for="id"` target element
   - If no `for` attribute: copies from immediately preceding element (excluding buttons)
   - Adds `.is-copied` class for CSS feedback animation
   - Auto-removes class after timeout
3. **Vue-JS**: `<su-copy-button>` component with enhanced features
   - All vanilla JS features
   - Vue reactivity and events
   - Analytics integration
   - Advanced configuration

**HTML Pattern**:
```html
<!-- Copy from specific element -->
<input id="api-key" value="abc123xyz">
<button type="copy" for="api-key">Copy</button>

<!-- Copy from preceding element (implicit) -->
<input value="email@example.com">
<button type="copy">Copy</button>
<button type="cut">Cut</button>
```

**Extensible Type Pattern**:
This pattern extends to other common actions:
- `type="copy"` - Copy to clipboard
- `type="cut"` - Cut to clipboard
- `type="paste"` - Paste from clipboard
- `type="select-all"` - Select all text in target
- `type="translate"` - Translate content
- `type="speak"` - Text-to-speech

**CSS Features**:
- Button styling (inherits from base button styles)
- `.is-copied` state for success feedback
- Icon animation on success
- Tooltip ("Copy" → "Copied!")

**JS Features (Vanilla)**:
- Clipboard API (navigator.clipboard.writeText)
- Target resolution (for attribute or previous sibling)
- Success/error handling
- CSS class toggle for feedback
- Fallback for older browsers

**JS Features (Vue Component)**:
- All vanilla features
- Custom copy source (props, slots)
- Event emission (copy-success, copy-error)
- Analytics tracking
- Custom timeout configuration
- Advanced error handling

---

### 1.4 Dropdown ✅ REVIEWED
**Priority**: 🟡 Medium
**Implementation**: 🎨 Hybrid (CSS base + JS enhancement)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<details class="dropdown">` + `<summary>` + Popover API |
| **SUAI Custom Tag** | `<dropdown title="Summary Text">` + popover attribute |
| **CSS-Only Version** | ✅ Yes - Using `<details>` + Popover API (2023+ browsers) |
| **JS Tier 1 (Vanilla)** | Enhanced positioning, keyboard nav, outside-click handling |
| **JS Tier 2 (Vue)** | `<su-dropdown>` with full features |

**HTML Pattern**:
```html
<!-- Native HTML with Popover API -->
<details class="dropdown">
  <summary popovertarget="menu-1">Menu</summary>
  <div id="menu-1" popover class="dropdown-panel">
    <a href="#">Item 1</a>
    <a href="#">Item 2</a>
    <a href="#">Item 3</a>
  </div>
</details>

<!-- SUAI Custom Tag -->
<dropdown title="Menu">
  <a href="#">Item 1</a>
  <a href="#">Item 2</a>
  <a href="#">Item 3</a>
</dropdown>
```

**Browser Support**:
- Popover API: Chrome 114+, Safari 17+, Firefox 125+ (2023+)
- Acceptable requirement for modern web apps
- Fallback: Progressive enhancement for older browsers

**CSS Features**:
- Dropdown trigger styling (button-like summary)
- Panel positioning via Popover API (automatic layering)
- Animations (slide down, fade in)
- Hover/focus states
- Variants: placement (bottom, top, left, right)
- Max height with scroll
- Arrow/chevron indicators

**Popover API Benefits**:
- ✅ Automatic top-layer rendering (no z-index issues)
- ✅ Auto-close on outside click (built-in)
- ✅ Escape key handling (built-in)
- ✅ Focus management (built-in)
- ✅ Accessible by default

**JS Features (Vanilla)**:
- Auto-positioning and flip logic (when near viewport edge)
- Keyboard navigation (arrow keys through items)
- Enhanced keyboard shortcuts
- Positioning calculations
- Polyfill for older browsers (optional)

**JS Features (Vue Component)**:
- All vanilla features
- Dynamic content support
- Event emission (open, close, select)
- v-model binding
- Nested dropdown support
- Analytics tracking
- Custom positioning strategies

---

### 1.5 Dropdown Item ✅ REVIEWED
**Priority**: ⚪ Skip
**Implementation**: N/A

**Rationale**: Not a separate component. Dropdown items are just regular `<a>` or `<button>` elements inside `<dropdown>`. Style them with CSS classes (`.dropdown-item`, hover states, disabled states, etc.). No need for custom element.

---

### 1.6 QR Code ✅ REVIEWED
**Priority**: 🔴 High (part of larger `<sign>` system)
**Implementation**: 🎨 Hybrid (CSS base + JS for generation)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<img class="code-qr" src="...">` (for pre-generated QR) |
| **SUAI Custom Tag** | `<sign type="qr" value="https://lanna.ai">` |
| **CSS-Only Version** | ✅ Yes - Using background-image for pre-rendered QR codes |
| **JS Tier 1 (Vanilla)** | QR generation library + canvas rendering |
| **JS Tier 2 (Vue)** | `<su-sign>` with dynamic generation |

**🚀 REVOLUTIONARY CONCEPT: `<sign>` Element**

A `<sign>` is a **symbolic code** that semantically plays a major role in communication - not an icon, not a picture, but a **meaningful symbol** with semantic weight.

**HTML Pattern**:
```html
<!-- Machine-readable codes -->
<sign type="qr" value="https://lanna.ai"></sign>
<sign type="barcode" value="1234567890"></sign>

<!-- Ratings & Evaluations -->
<sign type="stars" value="4.5" max="5"></sign>
<sign type="hearts" value="3" max="5"></sign>

<!-- Efficiency & Grades -->
<sign type="energy" value="A++"></sign>
<sign type="class" value="premium"></sign>

<!-- Certifications -->
<sign type="ce"></sign>
<sign type="iso" value="9001"></sign>
<sign type="eco"></sign>

<!-- Status indicators -->
<sign type="online"></sign>
<sign type="verified"></sign>
<sign type="secure"></sign>
```

**CSS Implementation Strategy**:
- Attribute-only (no content, self-closing)
- CSS with `background-image`, SVG, and `mask-image` modifiers
- Dynamic fills using `mask-image` for ratings/meters
- Color scales via CSS custom properties
- Animated gradients for "rating intensity"
- `<canvas>` fallback for generated versions (QR, barcodes)

**Sign Categories** (See separate document: `docs/sign-system.md`):

| Category | Sign Types | Visual Base | Implementation |
|----------|-----------|-------------|----------------|
| **Machine-readable** | qr, barcode, datamatrix, nfc, rfid | SVG mask or sprite | `<canvas>` for generated |
| **Evaluative/Rating** | stars, hearts, score, thumbs, level, meter | mask-image for fill | animated gradient |
| **Efficiency/Grade** | energy, class, rank, tier | color scale + label | dynamic gradient |
| **Certification** | ce, iso, ul, rohs, fcc, recycle, eco | static background-image | trust signifiers |
| **Status/State** | online, offline, secure, verified, alert, warning, info, success | color-coded circles/shields | CSS mask + var(--sign-color) |
| **Currency/Value** | currency, coin, token, price | symbol mask + overlay | dynamic number |
| **Access/Restriction** | lock, unlock, key, noentry, restricted | standard icons | permission logic |
| **Navigation/Process** | step, stage, checkpoint, goal, done, pending | stateful icons | animated fill for progress |
| **Environment** | eco, carbon, water, recycle, leaf, renewable | color-coded badges | dashboard/product footprints |
| **Connectivity/Signal** | wifi, 5g, bluetooth, signal, battery | dynamic bar masks | mobile/IoT signals |
| **Identity/Verification** | verified, auth, badge, seal, brand | mask-image (check, shield) | trust indicators |
| **Misc Data-Driven** | temp, humidity, speed, charge, strength | variable fill masks | numeric overlay + unit |

**Implementation Notes**:
1. Create separate document: `docs/sign-system.md` with full taxonomy
2. CSS-first approach: most signs work with pure CSS
3. JS enhancement: dynamic generation (QR codes), animations, real-time updates
4. Semantic HTML: `<sign>` carries meaning, not just decoration
5. Accessibility: ARIA labels, semantic roles, screen reader support

**Why This Is Revolutionary**:
- **Semantic clarity**: `<sign type="qr">` is clearer than `<img class="qr-code">`
- **Unified system**: One element for all symbolic communication
- **CSS-powered**: Most signs work without JavaScript
- **Extensible**: Easy to add new sign types
- **AI-friendly**: Clear semantic structure for AI agents
- **Human-friendly**: Intuitive for developers

**Next Steps**:
1. Create comprehensive sign taxonomy document
2. Define CSS architecture for sign system
3. Implement base sign styles
4. Add JS libraries for generated signs (QR, barcodes)
5. Create Vue components for complex signs

---

## 2. Feedback & Status Category

### 2.1 Badge ✅ REVIEWED
**Priority**: 🔴 High (integrated into `<sign>` system)
**Implementation**: ✅ CSS-only

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<span class="badge">` |
| **SUAI Custom Tag** | `<sign type="badge">` or specific badge types |
| **CSS-Only Version** | ✅ Yes - Full CSS implementation |
| **JS Component** | Not needed (CSS-only sufficient) |

**Integration with `<sign>` System**:
Badges are symbolic indicators and fit naturally into the sign taxonomy.

**HTML Pattern**:
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

**Sign Types for Badges**:
- `type="badge"` - Generic label badge (with value attribute)
- `type="count"` - Notification counter (with value attribute)
- `type="verified"` - Verified/checkmark badge
- `type="new"` - New feature indicator
- `type="beta"` - Beta/preview badge
- `type="pro"` - Pro/premium badge
- `type="hot"` - Trending/hot indicator
- `type="sale"` - Sale/discount badge
- Plus all status signs from sign system (online, offline, etc.)

**CSS Features**:
- Pill shape (fully rounded)
- Color variants via `variant` attribute or CSS custom properties
- Sizes via CSS (small, medium, large)
- Positioned variants (absolute positioning with `position` attribute)
- Pulse animation for attention
- Number display support
- Icon integration
- Minimal/outline variants

**CSS Implementation**:
```css
sign[type="badge"],
sign[type="count"] {
  display: inline-flex;
  padding: 0.25em 0.5em;
  border-radius: 999px;
  background: var(--sign-bg, var(--color-primary));
  color: var(--sign-color, white);
  font-size: 0.75rem;
  font-weight: 600;
}

sign[type="count"][position="top-right"] {
  position: absolute;
  top: -0.5em;
  right: -0.5em;
}

sign[type="verified"]::before {
  content: '';
  mask-image: url('icons/checkmark.svg');
  /* verified checkmark styling */
}
```

**Benefits of Sign Integration**:
- Semantic clarity: `<sign type="verified">` vs `<span class="badge-verified">`
- Unified styling system across all symbolic indicators
- Easy theming via CSS custom properties
- Consistent API with other signs
- Better for AI/developer understanding

**See Also**: `docs/sign-system.md` for complete sign taxonomy

---

### 2.2 Callout/Alert ✅ REVIEWED
**Priority**: 🔴 High
**Implementation**: 🎨 Hybrid (CSS base + JS enhancement)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<div role="alert">` for urgent alerts |
| **SUAI Custom Tag** | `<alert>` - Focus-acquiring notifications |
| **CSS-Only Version** | ✅ Yes - Dismissal with Popover API, styling variants |
| **JS Tier 1 (Vanilla)** | Basic interactions, animations, auto-dismiss |
| **JS Tier 2 (Vue)** | `<su-alert>` with advanced features |

**Three Distinct Patterns**:

#### 1. **`<alert>` - Focus-Acquiring Notifications**
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

**CSS Features**:
- Colored border/background
- Icon integration (via `<sign>`)
- Title + body layout
- Close button styling
- Dismissal with Popover API
- Slide-in animations
- Stack positioning (for multiple alerts)

**JS Features (Vanilla)**:
- Auto-dismiss after timeout
- Smooth animations
- Stack management
- Basic event emission

**JS Features (Vue)**:
- Persist dismissal state
- Queue management
- Custom positioning
- Rich content support
- Event system

---

#### 2. **`<dialog>` - User Interaction Required**
For interactions requiring explicit user response (ok, cancel, or more actions).
*See Dialog component (#6.3) for full details.*

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

#### 3. **`hint` Attribute - Lightweight Help System**
For non-intrusive help text, instructions, and tooltips.

**HTML Pattern**:
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

**CSS Implementation**:
```css
/* Base hint styling */
[hint] {
  position: relative;
  cursor: help;
}

[hint]::before {
  content: attr(hint);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5em 0.75em;
  background: var(--hint-bg, rgba(0, 0, 0, 0.9));
  color: var(--hint-color, white);
  font-size: 0.875rem;
  border-radius: 0.25rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
  z-index: 1000;
}

[hint]::after {
  /* Arrow indicator */
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  border: 0.25rem solid transparent;
  border-top-color: var(--hint-bg, rgba(0, 0, 0, 0.9));
  opacity: 0;
  transition: opacity 0.2s;
}

[hint]:hover::before,
[hint]:hover::after,
[hint]:focus::before,
[hint]:focus::after {
  opacity: 1;
}

/* Context-aware positioning */
.hint-below [hint]::before {
  bottom: auto;
  top: 100%;
}

.hint-right [hint]::before {
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.hint-left [hint]::before {
  right: 100%;
  left: auto;
  top: 50%;
  transform: translateY(-50%);
}
```

**Features**:
- Pure CSS (::before/::after + :hover)
- Automatic positioning
- Context-aware (inherited from parent class)
- Lightweight (no JS, no DOM elements)
- Accessible (content available to screen readers via attribute)
- Supports keyboard focus (:focus trigger)

**Context Classes**:
- `.hint-above` - Show hint above element (default)
- `.hint-below` - Show hint below element
- `.hint-left` - Show hint on left
- `.hint-right` - Show hint on right

**Benefits of `hint` Attribute**:
- ✅ Zero JavaScript
- ✅ No extra DOM elements
- ✅ Works on any element
- ✅ Automatically positioned
- ✅ Keyboard accessible
- ✅ Screen reader accessible
- ✅ Theme-able via CSS custom properties

---

**Summary - Three Patterns**:

| Pattern | Use Case | Interaction | Implementation |
|---------|----------|-------------|----------------|
| `<alert>` | Urgent notifications | Optional dismissal | CSS + optional JS |
| `<dialog>` | User action required | Must respond (ok/cancel) | Native `<dialog>` + CSS |
| `hint="..."` | Inline help/tooltips | Hover/focus only | Pure CSS (::before/::after) |

---

### 2.3 Progress Bar ✅ REVIEWED
**Priority**: 🟡 Medium
**Implementation**: 🎨 Hybrid (CSS base + JS for time-based animation)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<progress value="70" max="100">` |
| **SUAI Custom Tag** | `<progress>` (keep native, semantic for numeric values) |
| **CSS-Only Version** | ✅ Yes - Full styling, variants, animations |
| **JS Tier 1 (Vanilla)** | Time-based progress animation (fixed duration countdown) |
| **JS Tier 2 (Vue)** | `<su-progress>` with advanced features |

**Key Architectural Distinction**:
- **`<progress>`**: NUMERIC representation (percentages, numbers, countable progress)
- **`<sign>`**: SYMBOLIC encoding (visual symbols, status indicators, NOT numeric)

**HTML Pattern**:
```html
<!-- Determinate progress (known value) -->
<progress value="70" max="100">70%</progress>

<!-- With label -->
<div class="progress-container">
  <label>Upload Progress</label>
  <progress value="45" max="100"></progress>
  <span class="progress-label">45%</span>
</div>

<!-- Variants -->
<progress value="80" max="100" class="progress-success"></progress>
<progress value="30" max="100" class="progress-warning"></progress>
<progress value="10" max="100" class="progress-danger"></progress>

<!-- Indeterminate (loading, unknown duration) -->
<progress class="progress-indeterminate"></progress>

<!-- Striped animation -->
<progress value="60" max="100" class="progress-striped progress-animated"></progress>
```

**CSS Features**:
- Style native `<progress>` element
- Color variants (primary, success, warning, danger)
- Size variants (small, medium, large)
- Striped pattern (linear-gradient)
- Animated stripes (moving pattern)
- Indeterminate state (infinite animation)
- Label positioning (inside or outside)
- Rounded or square ends
- Height customization
- Shadow/elevation options

**CSS Implementation**:
```css
progress {
  /* Reset default styles */
  appearance: none;
  width: 100%;
  height: 1rem;
  border: none;
  border-radius: 0.5rem;
  background: var(--progress-bg, #e0e0e0);
  overflow: hidden;
}

/* WebKit/Blink */
progress::-webkit-progress-bar {
  background: var(--progress-bg, #e0e0e0);
  border-radius: 0.5rem;
}

progress::-webkit-progress-value {
  background: var(--progress-color, var(--color-primary));
  border-radius: 0.5rem;
  transition: width 0.3s ease;
}

/* Firefox */
progress::-moz-progress-bar {
  background: var(--progress-color, var(--color-primary));
  border-radius: 0.5rem;
  transition: width 0.3s ease;
}

/* Variants */
progress.progress-success {
  --progress-color: var(--color-success);
}

progress.progress-warning {
  --progress-color: var(--color-warning);
}

progress.progress-danger {
  --progress-color: var(--color-danger);
}

/* Striped pattern */
progress.progress-striped::-webkit-progress-value {
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-size: 1rem 1rem;
}

/* Animated stripes */
progress.progress-animated.progress-striped::-webkit-progress-value {
  animation: progress-stripes 1s linear infinite;
}

@keyframes progress-stripes {
  from { background-position: 0 0; }
  to { background-position: 1rem 0; }
}

/* Indeterminate */
progress.progress-indeterminate::-webkit-progress-value {
  animation: progress-indeterminate 1.5s ease-in-out infinite;
}

@keyframes progress-indeterminate {
  0% { width: 0; margin-left: 0; }
  50% { width: 50%; margin-left: 25%; }
  100% { width: 0; margin-left: 100%; }
}
```

**JS Features (Vanilla) - Time-Based Progress**:
Fixed-duration animation (countdown timer visualization).

```javascript
// Animate progress to 100% over specified duration
// Use case: holding period, cooldown timer, countdown
function animateProgress(progressElement, duration) {
  const startTime = Date.now();
  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min((elapsed / duration) * 100, 100);
    progressElement.value = progress;

    if (progress < 100) {
      requestAnimationFrame(animate);
    } else {
      // Completion callback
      progressElement.dispatchEvent(new Event('complete'));
    }
  };
  requestAnimationFrame(animate);
}

// Usage
const progress = document.querySelector('progress[data-duration]');
const duration = parseInt(progress.dataset.duration); // milliseconds
animateProgress(progress, duration);
```

**HTML with time-based animation**:
```html
<!-- Animate to 100% in 5 seconds -->
<progress data-duration="5000" max="100">0%</progress>

<!-- Countdown timer (30 seconds) -->
<progress data-duration="30000" max="100" class="progress-timer">0%</progress>
```

**Use Cases for Time-Based Progress**:
- Cooldown timers (ability cooldown, action delay)
- Hold actions (press and hold confirmation)
- Timed challenges (complete task in X seconds)
- Session timeouts (countdown before logout)
- Ad skipping timers (skip in 5 seconds)
- Auto-advance timers (next slide in 10 seconds)

**JS Features (Vue Component)**:
- All vanilla features
- Real-time value binding (v-model)
- Completion events and callbacks
- Estimated time remaining calculations
- Pause/resume functionality
- Speed control (fast-forward, slow-down)
- Multiple progress tracking
- Progress history/logs

**Progress vs. Sign**:
| Aspect | `<progress>` | `<sign>` |
|--------|-------------|----------|
| **Nature** | Numeric, quantifiable | Symbolic, qualitative |
| **Value** | 0-100%, numbers | Status, state, symbol |
| **Purpose** | Show completion percentage | Communicate meaning |
| **Examples** | Upload: 45%, Loading: 80% | Online, Verified, A++ |
| **Representation** | Bar fill, numbers | Icons, badges, symbols |

---

### 2.4 Progress Ring (+ Unified Progress System) ✅ REVIEWED
**Priority**: 🟡 Medium
**Implementation**: 🎨 Hybrid (CSS base + JS for time-based animation)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<svg>` + `<circle>` for circular rendering |
| **SUAI Custom Tag** | `<progress type="ring">` - Unified progress with type variants |
| **CSS-Only Version** | ✅ Yes - Conic-gradient, masks, SVG, CSS animations |
| **JS Tier 1 (Vanilla)** | Time-based animation (same as progress bar) |
| **JS Tier 2 (Vue)** | `<su-progress>` with all type support |

**🎯 UNIFIED PROGRESS SYSTEM**

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

---

#### Progress Types

##### 1. **`type="bar"`** (Default - Linear Bar)
See Progress Bar (#2.3) for full details.

```html
<progress type="bar" value="60" max="100"></progress>
```

---

##### 2. **`type="ring"`** (Circular Progress)

**HTML Pattern**:
```html
<!-- Circular progress ring -->
<progress type="ring" value="75" max="100">75%</progress>

<!-- With custom size -->
<progress type="ring" value="80" max="100" style="--ring-size: 120px;">80%</progress>

<!-- Indeterminate (spinning) -->
<progress type="ring" class="progress-indeterminate"></progress>
```

**CSS Implementation - Conic Gradient Approach**:
```css
progress[type="ring"] {
  --ring-size: 80px;
  --ring-thickness: 8px;
  --progress-value: calc(var(--value, 0) / var(--max, 100));
  --progress-deg: calc(var(--progress-value) * 360deg);

  width: var(--ring-size);
  height: var(--ring-size);
  border-radius: 50%;
  background: conic-gradient(
    var(--progress-color, var(--color-primary)) var(--progress-deg),
    var(--progress-bg, #e0e0e0) var(--progress-deg)
  );
  mask-image: radial-gradient(
    circle,
    transparent calc(50% - var(--ring-thickness)),
    black calc(50% - var(--ring-thickness))
  );
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Center label */
progress[type="ring"]::after {
  content: attr(value) '%';
  position: absolute;
  font-size: calc(var(--ring-size) * 0.25);
  font-weight: 600;
  color: var(--text-color);
}

/* Indeterminate spinning */
progress[type="ring"].progress-indeterminate {
  background: conic-gradient(
    transparent 270deg,
    var(--progress-color) 360deg
  );
  animation: ring-spin 1s linear infinite;
}

@keyframes ring-spin {
  to { transform: rotate(360deg); }
}
```

**Alternative - SVG Approach**:
```css
progress[type="ring"] {
  --ring-size: 80px;
  --ring-thickness: 8px;
  --circumference: 251.2; /* 2 * PI * 40 */
  --progress-value: calc(var(--value, 0) / var(--max, 100));
  --dash-offset: calc(var(--circumference) * (1 - var(--progress-value)));

  width: var(--ring-size);
  height: var(--ring-size);
}

/* Render as SVG via background-image or pseudo-element */
progress[type="ring"]::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  /* SVG with circle using stroke-dashoffset */
}
```

---

##### 3. **`type="steps"`** (Step-by-Step Progress)

**HTML Pattern**:
```html
<progress type="steps" value="3" max="5">Step 3 of 5</progress>

<!-- With labels -->
<progress type="steps" value="2" max="4" data-labels="Start,Profile,Payment,Complete">
  Step 2 of 4
</progress>
```

**CSS Implementation**:
```css
progress[type="steps"] {
  --steps: var(--max, 5);
  --current: var(--value, 0);

  display: flex;
  gap: 0.5rem;
  width: 100%;
}

progress[type="steps"]::before {
  content: '';
  display: flex;
  gap: 0.5rem;
  counter-reset: step;
}

/* Generate step circles */
progress[type="steps"]::after {
  content: '';
  /* Use CSS counters and generated content for steps */
  /* Or use JS to generate step elements */
}

/* Step styling */
.step {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: var(--step-bg, #e0e0e0);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.step.is-complete {
  background: var(--progress-color, var(--color-primary));
  color: white;
}

.step.is-current {
  border: 2px solid var(--progress-color);
  background: white;
}

/* Connector lines */
.step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 100%;
  width: 2rem;
  height: 2px;
  background: var(--step-bg);
}

.step.is-complete:not(:last-child)::after {
  background: var(--progress-color);
}
```

---

##### 4. **`type="gauge"`** (Gauge/Meter Style)

**HTML Pattern**:
```html
<progress type="gauge" value="85" max="100">85%</progress>

<!-- With threshold colors -->
<progress type="gauge" value="95" max="100"
  data-thresholds="0:success,70:warning,90:danger">
  95%
</progress>
```

**CSS Implementation**:
```css
progress[type="gauge"] {
  --gauge-size: 120px;
  --gauge-start: -135deg;
  --gauge-end: 135deg;
  --gauge-range: 270deg;
  --progress-value: calc(var(--value, 0) / var(--max, 100));
  --progress-angle: calc(var(--gauge-start) + (var(--progress-value) * var(--gauge-range)));

  width: var(--gauge-size);
  height: calc(var(--gauge-size) * 0.6);
  border-radius: var(--gauge-size) var(--gauge-size) 0 0;
  background: conic-gradient(
    from var(--gauge-start),
    var(--color-success) 0deg,
    var(--color-warning) 70%,
    var(--color-danger) 90%,
    var(--progress-bg) var(--gauge-range)
  );
  mask-image: radial-gradient(
    circle at 50% 100%,
    transparent 60%,
    black 60%
  );
  position: relative;
  overflow: hidden;
}

/* Needle indicator */
progress[type="gauge"]::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 3px;
  height: 45%;
  background: var(--text-color);
  transform-origin: bottom center;
  transform: translateX(-50%) rotate(var(--progress-angle));
  transition: transform 0.5s ease;
}

/* Center value display */
progress[type="gauge"]::before {
  content: attr(value);
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  font-weight: 600;
}
```

---

##### 5. **`type="skeleton"`** (Skeleton Loading)

**HTML Pattern**:
```html
<!-- Shimmer loading effect -->
<progress type="skeleton"></progress>

<!-- Custom width/height -->
<progress type="skeleton" style="--skeleton-width: 200px; --skeleton-height: 20px;"></progress>

<!-- Multiple lines -->
<progress type="skeleton" data-lines="3"></progress>
```

**CSS Implementation**:
```css
progress[type="skeleton"] {
  --skeleton-width: 100%;
  --skeleton-height: 1rem;
  --skeleton-bg: #e0e0e0;
  --skeleton-highlight: #f0f0f0;

  width: var(--skeleton-width);
  height: var(--skeleton-height);
  border-radius: 0.25rem;
  background: linear-gradient(
    90deg,
    var(--skeleton-bg) 0%,
    var(--skeleton-highlight) 50%,
    var(--skeleton-bg) 100%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Pulse alternative */
progress[type="skeleton"].skeleton-pulse {
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

---

##### 6. **`type="percent"`** (Percentage Display Only)

**HTML Pattern**:
```html
<!-- Simple percentage -->
<progress type="percent" value="42" max="100">42%</progress>

<!-- With label -->
<progress type="percent" value="87" max="100" data-label="Complete">87%</progress>
```

**CSS Implementation**:
```css
progress[type="percent"] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--progress-color, var(--text-color));
}

progress[type="percent"]::before {
  content: attr(value) '%';
}

progress[type="percent"][data-label]::after {
  content: attr(data-label);
  font-size: 0.875rem;
  font-weight: normal;
  opacity: 0.7;
}
```

---

**Common Features Across All Types**:
- Indeterminate state (undefined value, CSS animation)
- Color variants (success, warning, danger)
- Size variants
- Dark mode support
- Time-based animation (via Vanilla JS)
- Smooth value transitions

**Indeterminate State** (all types):
```html
<!-- No value = indeterminate -->
<progress type="bar" class="progress-indeterminate"></progress>
<progress type="ring" class="progress-indeterminate"></progress>
<progress type="skeleton"></progress>
```

**JS Implementation** (unified across all types):
```javascript
// Time-based progress for any type
function animateProgress(progressElement, duration) {
  const startTime = Date.now();
  const max = parseInt(progressElement.getAttribute('max')) || 100;

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min((elapsed / duration) * max, max);

    progressElement.setAttribute('value', progress.toFixed(0));
    progressElement.style.setProperty('--value', progress);
    progressElement.style.setProperty('--max', max);

    if (progress < max) {
      requestAnimationFrame(animate);
    } else {
      progressElement.dispatchEvent(new Event('complete'));
    }
  };
  requestAnimationFrame(animate);
}
```

**Usage**:
```html
<!-- Any type works with time-based animation -->
<progress type="ring" data-duration="5000" max="100"></progress>
<progress type="gauge" data-duration="3000" max="100"></progress>
<progress type="steps" data-duration="10000" max="5"></progress>
```

---

### 2.5 Skeleton ✅ REVIEWED
**Priority**: 🟡 Medium (covered by unified progress system)
**Implementation**: ✅ CSS-only

**See**: `<progress type="skeleton">` in Progress Ring (#2.4)

Skeleton loading is implemented as `<progress type="skeleton">` with shimmer/pulse animations. See unified progress system for full details.

---

### 2.6 Spinner ✅ REVIEWED
**Priority**: 🔴 High
**Implementation**: ✅ CSS-only (pure animation)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<div>` with CSS animation |
| **SUAI Custom Tag** | `<spinner>` - Distinct from progress (loading indicator, not progress) |
| **CSS-Only Version** | ✅ Yes - Pure CSS @keyframes animations |
| **JS Component** | Not needed (CSS-only sufficient) |

**Key Distinction**:
- **`<spinner>`**: Loading indicator (unknown duration, indeterminate)
- **`<progress>` without value**: Also indeterminate, but for trackable processes
- Spinners are for "waiting" states, progress is for "completion" states

**HTML Pattern**:
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

**CSS Implementation - Multiple Styles**:

##### Style 1: Circular Spinner (Default)
```css
spinner,
spinner[style="circular"] {
  --spinner-size: 40px;
  --spinner-thickness: 4px;
  --spinner-color: var(--color-primary);

  width: var(--spinner-size);
  height: var(--spinner-size);
  border: var(--spinner-thickness) solid transparent;
  border-top-color: var(--spinner-color);
  border-radius: 50%;
  animation: spinner-rotate 0.8s linear infinite;
}

@keyframes spinner-rotate {
  to { transform: rotate(360deg); }
}

/* Size variants */
spinner[size="small"] {
  --spinner-size: 20px;
  --spinner-thickness: 2px;
}

spinner[size="large"] {
  --spinner-size: 60px;
  --spinner-thickness: 6px;
}
```

##### Style 2: Dots Spinner
```css
spinner[style="dots"] {
  display: inline-flex;
  gap: 0.5rem;
}

spinner[style="dots"]::before,
spinner[style="dots"]::after {
  content: '';
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--spinner-color);
  animation: spinner-dots 1.4s ease-in-out infinite;
}

spinner[style="dots"]::before {
  animation-delay: -0.32s;
}

spinner[style="dots"]::after {
  animation-delay: 0s;
}

@keyframes spinner-dots {
  0%, 80%, 100% { opacity: 0; transform: scale(0); }
  40% { opacity: 1; transform: scale(1); }
}
```

##### Style 3: Bars Spinner
```css
spinner[style="bars"] {
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
  height: 2rem;
}

spinner[style="bars"]::before,
spinner[style="bars"]::after {
  content: '';
  width: 0.25rem;
  height: 100%;
  background: var(--spinner-color);
  animation: spinner-bars 1.2s ease-in-out infinite;
}

spinner[style="bars"]::before {
  animation-delay: -0.24s;
}

@keyframes spinner-bars {
  0%, 40%, 100% { transform: scaleY(0.4); }
  20% { transform: scaleY(1); }
}
```

##### Style 4: Pulse Spinner
```css
spinner[style="pulse"] {
  width: var(--spinner-size, 40px);
  height: var(--spinner-size, 40px);
  border-radius: 50%;
  background: var(--spinner-color);
  animation: spinner-pulse 1.5s ease-in-out infinite;
}

@keyframes spinner-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.8); }
}
```

**Color Variants**:
```css
spinner[variant="primary"] { --spinner-color: var(--color-primary); }
spinner[variant="success"] { --spinner-color: var(--color-success); }
spinner[variant="warning"] { --spinner-color: var(--color-warning); }
spinner[variant="danger"] { --spinner-color: var(--color-danger); }
spinner[variant="light"] { --spinner-color: white; }
spinner[variant="dark"] { --spinner-color: var(--color-gray-900); }
```

**Usage Examples**:
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

---

**Important Update to Progress System**:

Based on clarification, updating progress behavior:

**Progress Indeterminate State** (automatic):
```html
<!-- Progress WITHOUT value = automatically indeterminate -->
<progress type="ring"></progress>  <!-- spinning, no value -->
<progress type="bar"></progress>   <!-- animated, no value -->

<!-- Progress WITH value = determinate -->
<progress type="ring" value="75" max="100"></progress>  <!-- shows 75% -->
```

**Time-Based Animation with Loop Attribute**:
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

**Updated JS Implementation**:
```javascript
function animateProgress(progressElement, duration) {
  const loop = parseInt(progressElement.getAttribute('loop')) || 1;
  const max = parseInt(progressElement.getAttribute('max')) || 100;
  let iteration = 0;

  const animate = () => {
    const startTime = Date.now();
    const animateIteration = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min((elapsed / duration) * max, max);

      progressElement.setAttribute('value', progress.toFixed(0));
      progressElement.style.setProperty('--value', progress);

      if (progress < max) {
        requestAnimationFrame(animateIteration);
      } else {
        iteration++;

        // Check if should continue looping
        if (loop === 0 || iteration < loop) {
          // Reset and continue
          setTimeout(animate, 0);
        } else {
          // Complete
          progressElement.dispatchEvent(new Event('complete'));
        }
      }
    };
    requestAnimationFrame(animateIteration);
  };

  animate();
}
```

**Semantic Distinction**:

| Element | Purpose | Value | Duration |
|---------|---------|-------|----------|
| `<spinner>` | Unknown wait | N/A | Unknown |
| `<progress>` (no value) | Indeterminate progress | None | Unknown |
| `<progress value="50">` | Determinate progress | 0-100 | Variable |
| `<progress data-duration loop>` | Time-based countdown | Animated | Fixed |

---

### 2.7 Tag ✅ REVIEWED
**Priority**: 🟡 Medium
**Implementation**: 🎨 Hybrid (CSS base + JS for interactions)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<span class="tag">` |
| **SUAI Custom Tag** | `<tag>` - Interactive, removable labels |
| **CSS-Only Version** | ✅ Yes - Styling only (no removal functionality) |
| **JS Tier 1 (Vanilla)** | Removal, adding, sorting functionality |
| **JS Tier 2 (Vue)** | `<su-tag>` with full features |

**Key Distinction**:
- **`<sign>`**: Static indicator (status, badge, symbol)
- **`<tag>`**: Interactive label (removable, selectable, manageable)

Tags are for managing collections: filters, keywords, selections, categories.

**HTML Pattern**:
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

**CSS Implementation**:
```css
tag {
  --tag-padding: 0.25rem 0.75rem;
  --tag-bg: var(--color-gray-100);
  --tag-color: var(--color-gray-900);
  --tag-border-color: var(--color-gray-300);

  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: var(--tag-padding);
  border-radius: 999px;
  background: var(--tag-bg);
  color: var(--tag-color);
  border: 1px solid var(--tag-border-color);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  transition: all 0.2s ease;
}

/* Remove button */
.tag-remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  padding: 0;
  margin-left: 0.25rem;
  border: none;
  background: transparent;
  color: currentColor;
  font-size: 1.25rem;
  line-height: 1;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.7;
  transition: all 0.2s ease;
}

.tag-remove:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}

/* Clickable tags */
tag.is-clickable {
  cursor: pointer;
}

tag.is-clickable:hover {
  background: var(--color-gray-200);
  border-color: var(--color-gray-400);
}

tag.is-clickable:active {
  transform: scale(0.97);
}

/* Selected state */
tag.is-selected {
  --tag-bg: var(--color-primary);
  --tag-color: white;
  --tag-border-color: var(--color-primary);
}

/* Disabled state */
tag.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* Variants */
tag[variant="primary"] {
  --tag-bg: var(--color-primary);
  --tag-color: white;
  --tag-border-color: var(--color-primary);
}

tag[variant="success"] {
  --tag-bg: var(--color-success);
  --tag-color: white;
  --tag-border-color: var(--color-success);
}

tag[variant="warning"] {
  --tag-bg: var(--color-warning);
  --tag-color: var(--color-gray-900);
  --tag-border-color: var(--color-warning);
}

tag[variant="danger"] {
  --tag-bg: var(--color-danger);
  --tag-color: white;
  --tag-border-color: var(--color-danger);
}

tag[variant="outline"] {
  --tag-bg: transparent;
  --tag-color: var(--color-gray-700);
  border-width: 1px;
}

/* Sizes */
tag[size="small"] {
  --tag-padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
}

tag[size="large"] {
  --tag-padding: 0.5rem 1rem;
  font-size: 1rem;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  tag {
    --tag-bg: var(--color-gray-800);
    --tag-color: var(--color-gray-100);
    --tag-border-color: var(--color-gray-700);
  }

  tag.is-clickable:hover {
    background: var(--color-gray-700);
  }
}
```

**JavaScript Features (Vanilla)**:

##### 1. Tag Removal
```javascript
// Remove tag on close button click
document.addEventListener('click', (e) => {
  if (e.target.matches('.tag-remove')) {
    const tag = e.target.closest('tag');
    if (tag) {
      // Fade out animation
      tag.style.opacity = '0';
      tag.style.transform = 'scale(0.8)';

      setTimeout(() => {
        tag.dispatchEvent(new CustomEvent('tag-remove', {
          detail: { value: tag.textContent.trim() },
          bubbles: true
        }));
        tag.remove();
      }, 200);
    }
  }
});
```

##### 2. Tag Adding
```javascript
// Add new tag to a tag container
function addTag(container, value, options = {}) {
  const tag = document.createElement('tag');
  tag.textContent = value;

  // Add variant if specified
  if (options.variant) {
    tag.setAttribute('variant', options.variant);
  }

  // Add remove button if removable
  if (options.removable !== false) {
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'tag-remove';
    removeBtn.setAttribute('aria-label', 'Remove');
    removeBtn.textContent = '×';
    tag.appendChild(removeBtn);
  }

  // Add to container with animation
  tag.style.opacity = '0';
  tag.style.transform = 'scale(0.8)';
  container.appendChild(tag);

  // Animate in
  requestAnimationFrame(() => {
    tag.style.transition = 'all 0.2s ease';
    tag.style.opacity = '1';
    tag.style.transform = 'scale(1)';
  });

  // Dispatch event
  container.dispatchEvent(new CustomEvent('tag-add', {
    detail: { value, element: tag },
    bubbles: true
  }));

  return tag;
}

// Usage
const tagContainer = document.querySelector('.tag-container');
addTag(tagContainer, 'New Tag', { variant: 'primary', removable: true });
```

##### 3. Tag Sorting
```javascript
// Sort tags alphabetically
function sortTags(container, options = {}) {
  const tags = Array.from(container.querySelectorAll('tag'));
  const direction = options.direction || 'asc'; // 'asc' or 'desc'

  tags.sort((a, b) => {
    const textA = a.textContent.trim().toLowerCase();
    const textB = b.textContent.trim().toLowerCase();

    if (direction === 'asc') {
      return textA.localeCompare(textB);
    } else {
      return textB.localeCompare(textA);
    }
  });

  // Re-append in sorted order
  tags.forEach(tag => container.appendChild(tag));

  container.dispatchEvent(new CustomEvent('tags-sorted', {
    detail: { direction },
    bubbles: true
  }));
}

// Usage
sortTags(tagContainer, { direction: 'asc' });
```

##### 4. Tag Input (Create tags from input)
```javascript
// Create tag input component
function initTagInput(input, container) {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      e.preventDefault();

      const value = input.value.trim();
      addTag(container, value);
      input.value = '';
    }
  });
}

// Usage
const input = document.querySelector('#tag-input');
const container = document.querySelector('.tag-container');
initTagInput(input, container);
```

**HTML Pattern - Tag Management**:
```html
<!-- Tag input container -->
<div class="tag-manager">
  <!-- Tag input -->
  <input
    type="text"
    id="tag-input"
    placeholder="Add tag and press Enter"
    aria-label="Add tag"
  >

  <!-- Tag container -->
  <div class="tag-container">
    <tag>
      JavaScript
      <button type="button" class="tag-remove">×</button>
    </tag>
    <tag>
      CSS
      <button type="button" class="tag-remove">×</button>
    </tag>
    <tag>
      HTML
      <button type="button" class="tag-remove">×</button>
    </tag>
  </div>

  <!-- Actions -->
  <button type="button" onclick="sortTags(document.querySelector('.tag-container'))">
    Sort A-Z
  </button>
</div>
```

**Use Cases**:
- Keyword tags (blog posts, articles)
- Filter chips (active filters in search)
- Selected items (multi-select UI)
- Categories/labels
- Skills/technologies
- Hashtags
- To-do tags
- Email recipients

**JS Features (Vue Component)**:
- All vanilla features
- v-model binding for tag list
- Autocomplete suggestions
- Duplicate prevention
- Max tags limit
- Custom validation
- Drag-and-drop reordering
- Bulk operations (select all, remove all)
- Tag templates
- Event handlers (add, remove, click, change)

---

### 2.8 Tooltip ✅ REVIEWED
**Priority**: 🔴 High (covered by `hint` attribute system)
**Implementation**: 🎨 Hybrid (CSS base + optional JS for markdown)

**See Also**: Callout/Alert (#2.2) for base `hint` attribute implementation.

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `hint` attribute on any element |
| **SUAI Custom Tag** | N/A - Attribute-based system |
| **CSS-Only Version** | ✅ Yes - Pure CSS tooltips with `hint` attribute |
| **JS Tier 1 (Vanilla)** | Simplified markdown rendering in hints |
| **JS Tier 2 (Vue)** | Not needed (attribute system sufficient) |

**Base System Recap** (from #2.2):
```html
<!-- Hover-triggered hints (default) -->
<button hint="Click here to submit">Submit</button>
<input hint="Enter your email" type="email">

<!-- Context-aware positioning -->
<form class="hint-below">
  <input hint="Required field" required>
</form>
```

---

#### Extension 1: Always-Visible Hints

Hints can be always visible (not just on hover) via class modifiers.

**HTML Pattern**:
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

**CSS Implementation**:
```css
/* Default: hints only on hover/focus */
[hint]::before {
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

[hint]:hover::before,
[hint]:focus::before {
  opacity: 1;
}

/* Always visible hints */
.hint-visible[hint]::before,
.hints-visible [hint]::before,
body.hints-visible [hint]::before {
  opacity: 1;
  pointer-events: auto;
}

/* Position adjustment for always-visible hints */
.hint-visible[hint],
.hints-visible [hint] {
  margin-top: 2rem; /* Space for hint above */
}

.hint-visible.hint-below[hint],
.hints-visible.hint-below [hint] {
  margin-top: 0;
  margin-bottom: 2rem; /* Space for hint below */
}
```

**Use Cases**:
- Form field labels/instructions
- Inline help that's always visible
- Tutorial/onboarding mode (body.hints-visible)
- Debug mode showing all hints
- Accessibility mode (always show guidance)

---

#### Extension 2: Simplified Markdown in Hints

**Vanilla JS enhancement** to render basic markdown in hints without HTML injection.

**Supported Markdown Syntax** (limited, safe subset):
- `**bold**` → **bold**
- `*italic*` → *italic*
- `[link text](url)` → clickable link
- `- item` → bullet list (simple)
- `` `code` `` → inline code

**HTML Pattern**:
```html
<!-- Hint with markdown -->
<button hint="Click to **submit** the form">Submit</button>

<input hint="Enter email like *user@example.com*" type="email">

<button hint="See [documentation](https://example.com/docs) for help">Help</button>

<input hint="Format: `YYYY-MM-DD`">Date</input>

<!-- Multi-line hint with list -->
<button hint="Requirements:
- Must be 8+ characters
- Include **uppercase**
- Include *number*">
  Password Rules
</button>
```

**Vanilla JS Implementation**:
```javascript
// Simple markdown parser for hints (safe, limited)
function parseHintMarkdown(text) {
  if (!text) return text;

  // Escape HTML to prevent injection
  text = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Parse markdown (in order)
  text = text
    // Bold: **text** → <strong>text</strong>
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

    // Italic: *text* → <em>text</em>
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')

    // Links: [text](url) → <a href="url">text</a>
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')

    // Inline code: `code` → <code>code</code>
    .replace(/`([^`]+)`/g, '<code>$1</code>')

    // Simple lists: - item → • item (convert to bullet)
    .replace(/^- (.+)$/gm, '• $1')

    // Newlines → <br> (for multi-line hints)
    .replace(/\n/g, '<br>');

  return text;
}

// Apply markdown parsing to all hints
function initHintMarkdown() {
  document.querySelectorAll('[hint]').forEach(element => {
    const hintText = element.getAttribute('hint');
    if (!hintText) return;

    // Parse markdown
    const parsedHint = parseHintMarkdown(hintText);

    // Store parsed version in data attribute
    element.setAttribute('data-hint-parsed', parsedHint);

    // Update CSS to use data-hint-parsed if available
    element.style.setProperty('--hint-content', `"${parsedHint}"`);
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initHintMarkdown);

// Re-init for dynamically added elements
const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1 && node.hasAttribute('hint')) {
        const hintText = node.getAttribute('hint');
        const parsedHint = parseHintMarkdown(hintText);
        node.setAttribute('data-hint-parsed', parsedHint);
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });
```

**Updated CSS for Markdown Support**:
```css
[hint][data-hint-parsed]::before {
  content: attr(data-hint-parsed);
  /* Allow HTML rendering */
  white-space: normal;
  max-width: 20rem;
  text-align: left;
}

/* Style for links in hints */
[hint]::before a {
  color: inherit;
  text-decoration: underline;
}

/* Style for code in hints */
[hint]::before code {
  background: rgba(0, 0, 0, 0.2);
  padding: 0.125rem 0.25rem;
  border-radius: 0.125rem;
  font-family: monospace;
  font-size: 0.9em;
}

/* Style for bold/italic in hints */
[hint]::before strong {
  font-weight: 700;
}

[hint]::before em {
  font-style: italic;
}
```

**Security Considerations**:
- ✅ HTML is escaped before parsing
- ✅ Only safe markdown patterns allowed
- ✅ No arbitrary HTML injection
- ✅ Links automatically get `rel="noopener"` for security
- ✅ Limited to simple formatting (no scripts, no complex HTML)

**Simplified Markdown Benefits**:
- ✅ Readable in HTML source
- ✅ No HTML inside attributes
- ✅ User-friendly for developers
- ✅ Basic formatting without complexity
- ✅ Safe (no XSS risk)
- ✅ Enhances hints without breaking CSS-only version

**Example Usage**:
```html
<!-- Documentation hint -->
<button hint="Submit form. See [docs](https://example.com) for details">
  Submit
</button>

<!-- Validation hint -->
<input
  hint="Password must:
- Be **8+ characters**
- Include *uppercase* letter
- Include number"
  type="password"
>

<!-- Code example hint -->
<input hint="Format: `YYYY-MM-DD` (e.g., `2025-10-30`)" type="text">

<!-- Rich instruction hint -->
<select hint="Select **one** category. Click [help](/help) for more info">
  <option>Category 1</option>
</select>
```

**Progressive Enhancement**:
- Without JS: Plain text hints work fine (markdown visible as text)
- With JS: Markdown rendered with formatting
- Always readable, enhanced when possible

**Limitations** (intentional, for simplicity):
- No nested lists
- No headings
- No images
- No tables
- No blockquotes
- Only basic formatting

**For complex content**, use `<dialog>`, `<dropdown>`, or proper help pages instead of hints.

---

## 3. Form Controls Category

### 3.1 Checkbox ✅ REVIEWED
**Priority**: 🔴 High
**Implementation**: 🎨 Hybrid (CSS base + JS for advanced features)

| Aspect | Decision |
|--------|----------|
| **Native HTML** | `<input type="checkbox">` |
| **SUAI Custom Tag** | `<input type="checkbox">` (keep native) |
| **CSS-Only Version** | ✅ Yes - Full custom styling |
| **JS Tier 1 (Vanilla)** | Indeterminate state, group operations |
| **JS Tier 2 (Vue)** | `<su-checkbox>` with v-model support |

**HTML Pattern**:
```html
<!-- Simple checkbox -->
<label>
  <input type="checkbox" name="terms">
  <span>I accept the terms</span>
</label>

<!-- With value -->
<label>
  <input type="checkbox" name="newsletter" value="subscribe">
  <span>Subscribe to newsletter</span>
</label>

<!-- Checked by default -->
<label>
  <input type="checkbox" name="remember" checked>
  <span>Remember me</span>
</label>

<!-- Disabled -->
<label>
  <input type="checkbox" name="locked" disabled>
  <span>Locked option</span>
</label>

<!-- Indeterminate state (requires JS) -->
<label>
  <input type="checkbox" id="select-all" class="indeterminate">
  <span>Select all</span>
</label>

<!-- With hint -->
<label>
  <input type="checkbox" name="marketing" hint="Optional marketing emails">
  <span>Marketing emails</span>
</label>
```

**CSS Implementation**:
```css
/* Hide native checkbox */
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--checkbox-border, var(--color-gray-400));
  border-radius: 0.25rem;
  background: var(--checkbox-bg, white);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

/* Hover state */
input[type="checkbox"]:hover {
  border-color: var(--checkbox-hover-border, var(--color-primary));
}

/* Focus state */
input[type="checkbox"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--checkbox-focus-ring, rgba(59, 130, 246, 0.3));
}

/* Checked state */
input[type="checkbox"]:checked {
  background: var(--checkbox-checked-bg, var(--color-primary));
  border-color: var(--checkbox-checked-border, var(--color-primary));
}

/* Checkmark (using ::after) */
input[type="checkbox"]:checked::after {
  content: '';
  position: absolute;
  left: 0.3rem;
  top: 0.05rem;
  width: 0.4rem;
  height: 0.7rem;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 1;
}

/* Checkmark animation */
input[type="checkbox"]::after {
  content: '';
  position: absolute;
  opacity: 0;
  transform: rotate(45deg) scale(0);
  transition: all 0.2s ease;
}

input[type="checkbox"]:checked::after {
  opacity: 1;
  transform: rotate(45deg) scale(1);
}

/* Indeterminate state (dash instead of checkmark) */
input[type="checkbox"]:indeterminate {
  background: var(--checkbox-checked-bg, var(--color-primary));
  border-color: var(--checkbox-checked-border, var(--color-primary));
}

input[type="checkbox"]:indeterminate::after {
  content: '';
  left: 0.2rem;
  top: 50%;
  width: 0.7rem;
  height: 0;
  border: solid white;
  border-width: 0 0 2px 0;
  transform: translateY(-50%);
  opacity: 1;
}

/* Disabled state */
input[type="checkbox"]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--checkbox-disabled-bg, var(--color-gray-100));
}

/* Label styling */
label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

label:has(input[type="checkbox"]:disabled) {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Checkbox sizes */
input[type="checkbox"].checkbox-small {
  width: 1rem;
  height: 1rem;
}

input[type="checkbox"].checkbox-large {
  width: 1.5rem;
  height: 1.5rem;
}

/* Color variants */
input[type="checkbox"].checkbox-success:checked {
  background: var(--color-success);
  border-color: var(--color-success);
}

input[type="checkbox"].checkbox-warning:checked {
  background: var(--color-warning);
  border-color: var(--color-warning);
}

input[type="checkbox"].checkbox-danger:checked {
  background: var(--color-danger);
  border-color: var(--color-danger);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  input[type="checkbox"] {
    --checkbox-border: var(--color-gray-600);
    --checkbox-bg: var(--color-gray-800);
  }
}
```

**JavaScript Features (Vanilla)**:

##### 1. Indeterminate State
```javascript
// Set indeterminate state (checkbox with dash)
function setIndeterminate(checkbox, indeterminate = true) {
  checkbox.indeterminate = indeterminate;
}

// Example: "Select all" checkbox
const selectAll = document.getElementById('select-all');
const checkboxes = document.querySelectorAll('input[type="checkbox"][name="item"]');

// Update select-all state based on children
function updateSelectAllState() {
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;

  if (checkedCount === 0) {
    selectAll.checked = false;
    selectAll.indeterminate = false;
  } else if (checkedCount === checkboxes.length) {
    selectAll.checked = true;
    selectAll.indeterminate = false;
  } else {
    selectAll.checked = false;
    selectAll.indeterminate = true;
  }
}

// Toggle all checkboxes
selectAll.addEventListener('change', () => {
  checkboxes.forEach(cb => {
    cb.checked = selectAll.checked;
  });
});

// Update select-all when individual checkbox changes
checkboxes.forEach(cb => {
  cb.addEventListener('change', updateSelectAllState);
});

// Initialize
updateSelectAllState();
```

##### 2. Group Operations
```javascript
// Check all checkboxes in a group
function checkAll(groupName) {
  document.querySelectorAll(`input[type="checkbox"][name="${groupName}"]`)
    .forEach(cb => cb.checked = true);
}

// Uncheck all checkboxes in a group
function uncheckAll(groupName) {
  document.querySelectorAll(`input[type="checkbox"][name="${groupName}"]`)
    .forEach(cb => cb.checked = false);
}

// Toggle all checkboxes in a group
function toggleAll(groupName) {
  document.querySelectorAll(`input[type="checkbox"][name="${groupName}"]`)
    .forEach(cb => cb.checked = !cb.checked);
}

// Get checked values from a group
function getCheckedValues(groupName) {
  return Array.from(
    document.querySelectorAll(`input[type="checkbox"][name="${groupName}"]:checked`)
  ).map(cb => cb.value);
}

// Example usage
checkAll('permissions');
const selected = getCheckedValues('permissions');
console.log('Selected permissions:', selected);
```

##### 3. Validation
```javascript
// Require at least one checkbox to be checked
function validateCheckboxGroup(groupName, minRequired = 1) {
  const checked = document.querySelectorAll(
    `input[type="checkbox"][name="${groupName}"]:checked`
  ).length;

  return checked >= minRequired;
}

// Add validation to form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  if (!validateCheckboxGroup('interests', 1)) {
    e.preventDefault();
    alert('Please select at least one interest');
  }
});
```

##### 4. Change Tracking
```javascript
// Track checkbox changes
function trackCheckboxChanges(checkbox) {
  checkbox.addEventListener('change', (e) => {
    console.log('Checkbox changed:', {
      name: e.target.name,
      value: e.target.value,
      checked: e.target.checked,
      timestamp: new Date()
    });

    // Dispatch custom event
    e.target.dispatchEvent(new CustomEvent('checkbox-change', {
      detail: {
        name: e.target.name,
        value: e.target.value,
        checked: e.target.checked
      },
      bubbles: true
    }));
  });
}

// Initialize tracking for all checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(trackCheckboxChanges);
```

**HTML Pattern - Checkbox Group with Select All**:
```html
<div class="checkbox-group">
  <!-- Select all -->
  <label>
    <input type="checkbox" id="select-all-permissions">
    <strong>Select all permissions</strong>
  </label>

  <hr>

  <!-- Individual checkboxes -->
  <label>
    <input type="checkbox" name="permissions" value="read">
    <span>Read</span>
  </label>

  <label>
    <input type="checkbox" name="permissions" value="write">
    <span>Write</span>
  </label>

  <label>
    <input type="checkbox" name="permissions" value="delete">
    <span>Delete</span>
  </label>

  <label>
    <input type="checkbox" name="permissions" value="admin">
    <span>Admin</span>
  </label>
</div>
```

**Use Cases**:
- Form agreements (terms, privacy)
- Multi-select options
- Permission settings
- Filter selections
- To-do lists
- Feature toggles
- Settings panels
- Select all/none patterns

**JS Features (Vue Component)**:
- v-model binding with arrays
- Two-way data sync
- Computed indeterminate state
- Group validation
- Custom events
- Scoped styles
- Slot support for custom content

**Accessibility**:
- ✅ Native keyboard support (Space to toggle)
- ✅ Label association (clicking label toggles checkbox)
- ✅ Focus management
- ✅ Screen reader compatible
- ✅ `aria-checked` (automatic with native checkbox)
- ✅ `aria-label` or associated label required

---

### 3.2 Color Picker ✅ REVIEWED
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="color">` |
| **SUAI Tag** | `<input type="color">` (keep native) |
| **CSS-Only** | ✅ Yes - Style native input with custom appearance |
| **JS Vanilla** | Optional - Enhanced UX features |
| **JS Component** | Optional - Advanced palette management |

**Additional Custom Type:**
- **`<input type="palette">`** - Custom palette/swatch picker with vanilla JS for selecting from predefined colors or adding custom swatches

**Implementation Notes:**
- Native `<input type="color">` provides built-in browser picker
- CSS can style the input appearance (size, border, rounded corners)
- Vanilla JS optional for preset swatches, format conversion (hex/rgb/hsl)
- Custom `<input type="palette">` for swatch-based color selection
- Progressive enhancement: works without JS, better with JS

**Example:**
```html
<label>
  Theme Color
  <input type="color" name="theme" value="#3b82f6">
</label>
```

**Palette Picker (Custom):**
```html
<input type="palette" name="brand-colors" value="#3b82f6,#ef4444,#10b981">
<!-- Vanilla JS implementation for swatch grid UI -->

---

### 3.3 Input ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="*">` (20+ native types) |
| **SUAI Tag** | `<input>` (keep native) |
| **CSS-Only** | ✅ Yes - Full styling with validation pseudo-classes |
| **JS Vanilla** | Minimal library: clear button, password toggle, alphabet filter (latin, thai, etc.) |
| **JS Component** | Optional - v-model, advanced validation |

**Key Features:**
- **Native HTML5 Types**: text, email, password, number, tel, url, search, date, time, file, etc.
- **Client-side Validation**: Use HTML5 attributes (required, pattern, min, max, minlength, maxlength)
- **CSS Pseudo-classes**: `:valid`, `:invalid`, `:user-valid`, `:user-invalid`, `:in-range`, `:out-of-range`, `:placeholder-shown`
- **Alphabet Filtering**: JS library for specific character sets (Latin, Thai, Cyrillic, Arabic, etc.)

**Basic Usage:**
```html
<!-- Text input with validation -->
<label>
  Email
  <input type="email" name="email" required>
</label>

<!-- Password with toggle (JS) -->
<label>
  Password
  <input type="password" name="pwd" minlength="8" required>
</label>

<!-- Thai alphabet filter (JS) -->
<label>
  ชื่อ (Thai Name)
  <input type="text" name="thai-name" data-alphabet="thai">
</label>
```

**CSS with Modern Pseudo-classes:**
```css
input {
  /* Layout/Flow */
  @apply block w-full px-3 py-2;

  /* Appearance */
  @apply border border-gray-300 rounded-lg;
  @apply bg-white text-gray-900;

  /* Dark/State */
  @apply dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100;
  @apply transition-colors duration-200;
}

/* Modern validation pseudo-classes (no JS needed!) */
input:user-invalid {
  @apply border-red-500 focus:ring-red-200;
}

input:user-valid {
  @apply border-green-500 focus:ring-green-200;
}

/* Show error only after user interaction */
input:invalid {
  /* No styling until user has interacted */
}

input:valid {
  /* No styling until validated */
}

/* Placeholder-shown (check if empty) */
input:placeholder-shown {
  @apply text-gray-400;
}

/* Number input range validation */
input[type="number"]:in-range {
  @apply border-green-500;
}

input[type="number"]:out-of-range {
  @apply border-red-500;
}

.input-group:has(input:not(:placeholder-shown)) .input-clear {
  opacity: 1;
  pointer-events: auto;
}

.input-clear:hover {
  background: var(--color-gray-100);
  color: var(--color-gray-600);
}

/* Password toggle button */
.password-toggle {
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border: none;
  background: transparent;
  color: var(--color-gray-400);
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.password-toggle:hover {
  background: var(--color-gray-100);
  color: var(--color-gray-600);
}

.input-group:has(.password-toggle) input {
  padding-right: 2.5rem;
}

/* Character counter */
.input-counter {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-gray-500);
  text-align: right;
}

.input-counter .current {
  font-weight: 500;
}

/* Help text */
.input-help {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-gray-600);
}

/* Error message */
.input-error {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-danger);
}

/* Success message */
.input-success {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: var(--color-success);
}

/* Input wrapper */
.input-wrapper {
  margin-bottom: 1rem;
}

.input-wrapper label {
  display: block;
  margin-bottom: 0.25rem;
  font-weight: 500;
  color: var(--color-gray-700);
}

/* Error state wrapper */
.input-wrapper.has-error input {
  border-color: var(--color-danger);
}

.input-wrapper.has-error input:focus {
  box-shadow: 0 0 0 3px var(--color-danger-light);
}

/* Success state wrapper */
.input-wrapper.has-success input {
  border-color: var(--color-success);
}

.input-wrapper.has-success input:focus {
  box-shadow: 0 0 0 3px var(--color-success-light);
}

/* Number input - hide spinners (optional) */
input[type="number"].no-spinners::-webkit-inner-spin-button,
input[type="number"].no-spinners::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

input[type="number"].no-spinners {
  -moz-appearance: textfield;
}

/* Search input - custom clear button */
input[type="search"]::-webkit-search-cancel-button {
  appearance: none;
}

/* Date/time inputs */
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"],
input[type="week"] {
  cursor: pointer;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  input {
    --input-bg: var(--color-gray-800);
    --input-color: var(--color-gray-100);
    --input-border: 1px solid var(--color-gray-600);
  }

  input::placeholder {
    color: var(--color-gray-500);
  }

  input:disabled {
    background: var(--color-gray-900);
    color: var(--color-gray-600);
  }

  input:read-only {
    background: var(--color-gray-900);
    border-color: var(--color-gray-700);
  }

  .input-prefix,
  .input-suffix {
    background: var(--color-gray-700);
    border-color: var(--color-gray-600);
    color: var(--color-gray-300);
  }
}
```

**JavaScript Features (Vanilla)**:

##### 1. Clear Button
```javascript
// Initialize clear button functionality
function initClearButton() {
  document.addEventListener('click', (e) => {
    if (e.target.matches('.input-clear')) {
      const targetId = e.target.dataset.clear;
      const input = document.getElementById(targetId);

      if (input) {
        input.value = '';
        input.focus();
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  });
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', initClearButton);
```

##### 2. Password Toggle
```javascript
// Initialize password visibility toggle
function initPasswordToggle() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.password-toggle')) {
      const button = e.target.closest('.password-toggle');
      const targetId = button.dataset.toggle;
      const input = document.getElementById(targetId);

      if (input) {
        const isPassword = input.type === 'password';

        // Toggle type
        input.type = isPassword ? 'text' : 'password';

        // Update button state
        button.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
        button.classList.toggle('is-visible', isPassword);

        // Update icon (if using <sign>)
        const icon = button.querySelector('sign[type="icon"]');
        if (icon) {
          icon.setAttribute('name', isPassword ? 'eye-slash' : 'eye');
        }
      }
    }
  });
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', initPasswordToggle);
```

##### 3. Character Counter
```javascript
// Initialize character counter
function initCharacterCounter(input, counterElement) {
  const maxLength = input.getAttribute('maxlength');
  const currentSpan = counterElement.querySelector('.current');
  const maxSpan = counterElement.querySelector('.max');

  if (maxSpan && maxLength) {
    maxSpan.textContent = maxLength;
  }

  const updateCounter = () => {
    const length = input.value.length;

    if (currentSpan) {
      currentSpan.textContent = length;
    }

    // Warn when approaching limit
    if (maxLength && length > maxLength * 0.9) {
      counterElement.classList.add('is-warning');
    } else {
      counterElement.classList.remove('is-warning');
    }

    // Error when at limit
    if (maxLength && length >= maxLength) {
      counterElement.classList.add('is-danger');
    } else {
      counterElement.classList.remove('is-danger');
    }
  };

  input.addEventListener('input', updateCounter);
  updateCounter(); // Initialize
}

// Auto-initialize all character counters
function initAllCharacterCounters() {
  document.querySelectorAll('[maxlength]').forEach(input => {
    const wrapper = input.closest('.input-wrapper');
    const counter = wrapper?.querySelector('.input-counter');

    if (counter) {
      initCharacterCounter(input, counter);
    }
  });
}

document.addEventListener('DOMContentLoaded', initAllCharacterCounters);
```

##### 4. Real-time Validation
```javascript
// Real-time validation feedback
function initRealTimeValidation(input) {
  let hasInteracted = false;

  // Mark as interacted on first input
  input.addEventListener('input', () => {
    hasInteracted = true;
  });

  // Validate on blur (after interaction)
  input.addEventListener('blur', () => {
    if (!hasInteracted) return;

    const wrapper = input.closest('.input-wrapper');
    const isValid = input.checkValidity();

    // Remove previous states
    wrapper?.classList.remove('has-error', 'has-success');
    input.classList.remove('is-invalid', 'is-valid');

    // Add new state
    if (input.value) {
      if (isValid) {
        wrapper?.classList.add('has-success');
        input.classList.add('is-valid');
      } else {
        wrapper?.classList.add('has-error');
        input.classList.add('is-invalid');
      }
    }

    // Update error message
    const errorElement = wrapper?.querySelector('.input-error');
    if (errorElement) {
      errorElement.textContent = isValid ? '' : input.validationMessage;
    }
  });

  // Clear validation on focus
  input.addEventListener('focus', () => {
    const wrapper = input.closest('.input-wrapper');
    wrapper?.classList.remove('has-error', 'has-success');
  });
}

// Auto-initialize validation
function initAllValidation() {
  document.querySelectorAll('input[required], input[pattern], input[type="email"], input[type="url"]').forEach(input => {
    initRealTimeValidation(input);
  });
}

document.addEventListener('DOMContentLoaded', initAllValidation);
```

##### 5. Input Masking (Phone, Credit Card, etc.)
```javascript
// Simple input mask utility
function maskInput(input, mask) {
  input.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    let masked = '';
    let valueIndex = 0;

    for (let i = 0; i < mask.length && valueIndex < value.length; i++) {
      if (mask[i] === '0') {
        masked += value[valueIndex];
        valueIndex++;
      } else {
        masked += mask[i];
      }
    }

    e.target.value = masked;
  });
}

// Usage examples
const phoneInput = document.getElementById('phone');
maskInput(phoneInput, '(000) 000-0000');

const cardInput = document.getElementById('card');
maskInput(cardInput, '0000 0000 0000 0000');

const dateInput = document.getElementById('date');
maskInput(dateInput, '00/00/0000');
```

**Use Cases**:
- Form inputs (all types)
- Search bars
- Login/signup forms
- Contact forms
- Settings panels
- Data entry
- Filters
- Comment boxes
- User profiles
- Admin panels

**Accessibility**:
- ✅ Native keyboard navigation
- ✅ Screen reader support (use labels)
- ✅ ARIA attributes (aria-invalid, aria-describedby)
- ✅ Focus management
- ✅ Error announcements
- ✅ Native validation messages
- ✅ Mobile keyboard variants (email, tel, number, url)

**Mobile Optimization**:
- ✅ `type="email"` → Email keyboard
- ✅ `type="tel"` → Phone keyboard
- ✅ `type="number"` → Number pad
- ✅ `type="url"` → URL keyboard (with .com key)
- ✅ `type="search"` → Search keyboard (with search button)
- ✅ Native date/time pickers (better than custom)
- ✅ Touch-friendly sizing (min 44x44px tap target)

**Form Validation** (Native HTML5):
```html
<!-- Required field -->
<input type="text" required>

<!-- Email validation -->
<input type="email" required>

<!-- URL validation -->
<input type="url" required>

<!-- Pattern validation (regex) -->
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">

<!-- Length validation -->
<input type="text" minlength="3" maxlength="20">

<!-- Number range -->
<input type="number" min="0" max="100" step="5">

<!-- Multiple constraints -->
<input
  type="text"
  required
  minlength="8"
  maxlength="20"
  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$"
  title="Must contain uppercase, lowercase, and number"
>
```

**JS Features (Vue Component)**:
- All vanilla features
- v-model binding (two-way)
- Custom validation rules
- Async validation (API checks)
- Input masks (phone, credit card, SSN, etc.)
- Autocomplete integration
- Debounced input
- Format on blur (currency, phone, etc.)
- Custom error messages
- Field dependencies (enable/disable based on other fields)
- Event system (input, change, focus, blur, validate)

**Complete Example - Login Form**:
```html
<form class="login-form">
  <!-- Email input -->
  <div class="input-wrapper">
    <label for="email">Email</label>
    <div class="input-group">
      <sign type="icon" name="envelope" class="input-icon-prefix"></sign>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="you@example.com"
        aria-describedby="email-help"
      >
    </div>
    <small id="email-help" class="input-help">
      We'll never share your email
    </small>
    <small class="input-error"></small>
  </div>

  <!-- Password input with toggle -->
  <div class="input-wrapper">
    <label for="password">Password</label>
    <div class="input-group">
      <sign type="icon" name="lock" class="input-icon-prefix"></sign>
      <input
        type="password"
        id="password"
        name="password"
        required
        minlength="8"
        aria-describedby="password-help"
      >
      <button type="button" class="password-toggle" data-toggle="password" aria-label="Show password">
        <sign type="icon" name="eye"></sign>
      </button>
    </div>
    <small id="password-help" class="input-help">
      At least 8 characters
    </small>
    <small class="input-error"></small>
  </div>

  <!-- Submit button -->
  <button type="submit">Sign In</button>
</form>
```

**Vanilla JS - Alphabet Filter Library:**
```javascript
// Alphabet filter for specific character sets
const AlphabetFilter = {
  patterns: {
    latin: /[A-Za-z\s]/,
    thai: /[\u0E00-\u0E7F\s]/,
    arabic: /[\u0600-\u06FF\s]/,
    cyrillic: /[\u0400-\u04FF\s]/,
    numeric: /[0-9]/,
    alphanumeric: /[A-Za-z0-9\s]/
  },

  init(input) {
    const alphabet = input.dataset.alphabet;
    const pattern = this.patterns[alphabet];

    if (!pattern) return;

    input.addEventListener('input', (e) => {
      const filtered = e.target.value
        .split('')
        .filter(char => pattern.test(char))
        .join('');

      if (filtered !== e.target.value) {
        e.target.value = filtered;
      }
    });
  }
};

// Auto-init on page load
document.querySelectorAll('input[data-alphabet]').forEach(input => {
  AlphabetFilter.init(input);
});
```

---

### 3.4 Radio ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="radio">` (native fallback) |
| **SUAI Tag** | `<select type="radio"><option>` (unified selection) |
| **CSS-Only** | ✅ Yes - Custom styled radio buttons |
| **JS Vanilla** | Minimal - Enhances selection behavior |
| **JS Component** | Optional - Advanced features |

**SUAI Innovation: Unified Selection Pattern**

Instead of scattered input types, SUAI uses `<select type="*">` for **all selection interactions**:

```html
<!-- Traditional HTML (fragmented) -->
<input type="radio">
<input type="checkbox">
<select><option></select>

<!-- SUAI (unified) -->
<select type="radio"><option></select>
<select type="checkbox"><option></select>
<select type="dropdown"><option></select>
```

**SUAI Selection Types:**
- `<select type="radio">` - Radio buttons (single choice)
- `<select type="checkbox">` - Checkboxes (multiple choice)
- `<select type="toggle">` - Toggle switch (on/off)
- `<select type="swatch">` - Color swatches
- `<select type="dropdown">` - Traditional dropdown
- `<select type="list">` - List view selection
- `<select type="menu">` - Menu navigation
- `<select type="slider">` - Range slider
- `<select type="tabs">` - Tab selection
- `<select type="matrix">` - Grid/matrix picker

**SUAI Labeling System:**

Replace `<label>` and `<legend>` with uniform `label` and `hint` attributes:

```html
<!-- Traditional HTML -->
<fieldset>
  <legend>Payment Method</legend>
  <label>
    <input type="radio" name="payment" value="card">
    Credit Card
  </label>
</fieldset>

<!-- SUAI Unified -->
<fieldset label="Payment Method" hint="Choose how you want to pay">
  <select type="radio" name="payment">
    <option value="card" label="Credit Card" hint="Visa, Mastercard, Amex"></option>
    <option value="paypal" label="PayPal" hint="Pay with your PayPal account"></option>
  </select>
</fieldset>
```

**Complete SUAI Form:**
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

  <!-- Textarea with label/hint -->
  <textarea name="feedback" label="Feedback" hint="Tell us what you think" rows="4"></textarea>

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

**Why This Pattern?**

1. **Consistent API**: All interactive elements use `label` and `hint` attributes
2. **AI-Friendly**: Clear, predictable structure for code generation
3. **Less Markup**: No need for wrapper `<label>` or `<legend>` elements
4. **Semantic Clarity**: `<select type="*">` clearly indicates "choose from options"
5. **Progressive Enhancement**: Falls back to native behavior with JS enhancement

**Implementation Notes:**
<fieldset>
  <legend>Choose a plan</legend>

  <label>
    <input type="radio" name="plan" value="free" checked>
    <span>Free Plan</span>
  </label>

  <label>
    <input type="radio" name="plan" value="pro">
    <span>Pro Plan ($9/month)</span>
  </label>

  <label>
    <input type="radio" name="plan" value="enterprise">
    <span>Enterprise Plan ($29/month)</span>
  </label>
</fieldset>

<!-- With descriptions -->
<fieldset class="radio-group">
  <legend>Select shipping method</legend>

  <label class="radio-card">
    <input type="radio" name="shipping" value="standard" checked>
    <div class="radio-content">
      <strong>Standard Shipping</strong>
      <small>3-5 business days • Free</small>
    </div>
  </label>

  <label class="radio-card">
    <input type="radio" name="shipping" value="express">
    <div class="radio-content">
      <strong>Express Shipping</strong>
      <small>1-2 business days • $9.99</small>
    </div>
  </label>

  <label class="radio-card">
    <input type="radio" name="shipping" value="overnight">
    <div class="radio-content">
      <strong>Overnight Shipping</strong>
      <small>Next business day • $19.99</small>
    </div>
  </label>
</fieldset>

<!-- Disabled option -->
<label>
  <input type="radio" name="option" value="unavailable" disabled>
  <span>Unavailable Option</span>
</label>

<!-- Required group -->
<fieldset>
  <legend>Payment method <span class="required">*</span></legend>

  <label>
    <input type="radio" name="payment" value="card" required>
    <span>Credit Card</span>
  </label>

  <label>
    <input type="radio" name="payment" value="paypal" required>
    <span>PayPal</span>
  </label>

  <label>
    <input type="radio" name="payment" value="bank" required>
    <span>Bank Transfer</span>
  </label>
</fieldset>

<!-- With icons -->
<fieldset class="radio-group-icons">
  <legend>Select theme</legend>

  <label>
    <input type="radio" name="theme" value="light" checked>
    <sign type="icon" name="sun"></sign>
    <span>Light Mode</span>
  </label>

  <label>
    <input type="radio" name="theme" value="dark">
    <sign type="icon" name="moon"></sign>
    <span>Dark Mode</span>
  </label>

  <label>
    <input type="radio" name="theme" value="auto">
    <sign type="icon" name="circle-half-stroke"></sign>
    <span>Auto</span>
  </label>
</fieldset>

<!-- Button-style radios -->
<fieldset class="radio-group-buttons">
  <legend>View mode</legend>

  <label class="radio-button">
    <input type="radio" name="view" value="grid" checked>
    <span>Grid</span>
  </label>

  <label class="radio-button">
    <input type="radio" name="view" value="list">
    <span>List</span>
  </label>

  <label class="radio-button">
    <input type="radio" name="view" value="table">
    <span>Table</span>
  </label>
</fieldset>
```

**CSS Implementation**:
```css
/* Hide native radio button */
input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid var(--radio-border, var(--color-gray-400));
  border-radius: 50%;
  background: var(--radio-bg, white);
  cursor: pointer;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

/* Hover state */
input[type="radio"]:hover {
  border-color: var(--radio-hover-border, var(--color-primary));
}

/* Focus state */
input[type="radio"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--radio-focus-ring, rgba(59, 130, 246, 0.3));
}

/* Checked state */
input[type="radio"]:checked {
  border-color: var(--radio-checked-border, var(--color-primary));
  background: var(--radio-checked-bg, var(--color-primary));
}

/* Inner dot (using ::after) */
input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: white;
  opacity: 1;
}

/* Dot animation */
input[type="radio"]::after {
  content: '';
  position: absolute;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: all 0.2s ease;
}

input[type="radio"]:checked::after {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

/* Disabled state */
input[type="radio"]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: var(--radio-disabled-bg, var(--color-gray-100));
}

/* Label styling */
label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  padding: 0.25rem 0;
}

label:has(input[type="radio"]:disabled) {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Fieldset styling */
fieldset {
  border: 1px solid var(--color-gray-300);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

legend {
  font-weight: 600;
  color: var(--color-gray-700);
  padding: 0 0.5rem;
}

.required {
  color: var(--color-danger);
}

/* Radio group layout */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Radio card style (with descriptions) */
.radio-card {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid var(--color-gray-300);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.radio-card:hover {
  border-color: var(--color-primary);
  background: var(--color-gray-50);
}

.radio-card:has(input[type="radio"]:checked) {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.radio-card:has(input[type="radio"]:focus) {
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.radio-card input[type="radio"] {
  margin-top: 0.125rem;
}

.radio-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex: 1;
}

.radio-content strong {
  color: var(--color-gray-900);
  font-weight: 600;
}

.radio-content small {
  color: var(--color-gray-600);
  font-size: 0.875rem;
}

/* Button-style radios */
.radio-group-buttons {
  display: flex;
  gap: 0.5rem;
  border: none;
  padding: 0;
}

.radio-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-gray-300);
  border-radius: 0.375rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.radio-button input[type="radio"] {
  /* Visually hidden but accessible */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.radio-button:hover {
  border-color: var(--color-primary);
  background: var(--color-gray-50);
}

.radio-button:has(input[type="radio"]:checked) {
  border-color: var(--color-primary);
  background: var(--color-primary);
  color: white;
}

.radio-button:has(input[type="radio"]:focus) {
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

/* Icon radios */
.radio-group-icons {
  display: flex;
  gap: 1rem;
  border: none;
  padding: 0;
}

.radio-group-icons label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border: 2px solid var(--color-gray-300);
  border-radius: 0.5rem;
  min-width: 100px;
  transition: all 0.2s ease;
}

.radio-group-icons label:hover {
  border-color: var(--color-primary);
  background: var(--color-gray-50);
}

.radio-group-icons label:has(input[type="radio"]:checked) {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

/* Size variants */
input[type="radio"].radio-small {
  width: 1rem;
  height: 1rem;
}

input[type="radio"].radio-small:checked::after {
  width: 0.375rem;
  height: 0.375rem;
}

input[type="radio"].radio-large {
  width: 1.5rem;
  height: 1.5rem;
}

input[type="radio"].radio-large:checked::after {
  width: 0.625rem;
  height: 0.625rem;
}

/* Color variants */
input[type="radio"].radio-success:checked {
  border-color: var(--color-success);
  background: var(--color-success);
}

input[type="radio"].radio-warning:checked {
  border-color: var(--color-warning);
  background: var(--color-warning);
}

input[type="radio"].radio-danger:checked {
  border-color: var(--color-danger);
  background: var(--color-danger);
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  input[type="radio"] {
    --radio-border: var(--color-gray-600);
    --radio-bg: var(--color-gray-800);
  }

  fieldset {
    border-color: var(--color-gray-600);
  }

  legend {
    color: var(--color-gray-100);
  }

  .radio-card {
    border-color: var(--color-gray-600);
  }

  .radio-card:hover {
    background: var(--color-gray-800);
  }

  .radio-content strong {
    color: var(--color-gray-100);
  }

  .radio-content small {
    color: var(--color-gray-400);
  }

  .radio-button {
    border-color: var(--color-gray-600);
    background: var(--color-gray-800);
  }
}
```

**JavaScript Features (Vanilla)**:

##### 1. Enhanced Keyboard Navigation
```javascript
// Enhance keyboard navigation for radio groups
function initRadioKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    const radio = e.target;

    if (radio.type !== 'radio') return;

    const name = radio.name;
    const radios = Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`));
    const currentIndex = radios.indexOf(radio);

    let nextIndex = currentIndex;

    // Arrow key navigation
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % radios.length;
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + radios.length) % radios.length;
    } else {
      return;
    }

    // Check and focus next radio
    radios[nextIndex].checked = true;
    radios[nextIndex].focus();
    radios[nextIndex].dispatchEvent(new Event('change', { bubbles: true }));
  });
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', initRadioKeyboardNav);
```

##### 2. Group Operations
```javascript
// Get selected value from radio group
function getSelectedRadio(groupName) {
  const selected = document.querySelector(`input[type="radio"][name="${groupName}"]:checked`);
  return selected ? selected.value : null;
}

// Set selected radio in group
function setSelectedRadio(groupName, value) {
  const radio = document.querySelector(`input[type="radio"][name="${groupName}"][value="${value}"]`);
  if (radio) {
    radio.checked = true;
    radio.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

// Clear radio group selection
function clearRadioGroup(groupName) {
  const radios = document.querySelectorAll(`input[type="radio"][name="${groupName}"]`);
  radios.forEach(radio => {
    radio.checked = false;
  });
}

// Get all radios in a group
function getRadioGroup(groupName) {
  return Array.from(document.querySelectorAll(`input[type="radio"][name="${groupName}"]`));
}

// Example usage
const selectedPlan = getSelectedRadio('plan');
console.log('Selected plan:', selectedPlan);

setSelectedRadio('plan', 'pro');
```

##### 3. Change Tracking
```javascript
// Track radio group changes
function trackRadioChanges(groupName, callback) {
  const radios = document.querySelectorAll(`input[type="radio"][name="${groupName}"]`);

  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.checked) {
        callback({
          name: groupName,
          value: e.target.value,
          radio: e.target,
          timestamp: new Date()
        });
      }
    });
  });
}

// Usage
trackRadioChanges('plan', (data) => {
  console.log('Plan changed to:', data.value);

  // Update UI based on selection
  if (data.value === 'pro') {
    showProFeatures();
  }
});
```

##### 4. Conditional Display Based on Selection
```javascript
// Show/hide content based on radio selection
function initConditionalDisplay() {
  document.addEventListener('change', (e) => {
    if (e.target.type === 'radio') {
      const name = e.target.name;
      const value = e.target.value;

      // Hide all conditional content for this group
      document.querySelectorAll(`[data-show-when="${name}"]`).forEach(el => {
        el.hidden = true;
      });

      // Show content for selected value
      document.querySelectorAll(`[data-show-when="${name}:${value}"]`).forEach(el => {
        el.hidden = false;
      });
    }
  });
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', initConditionalDisplay);
```

**HTML Pattern - Conditional Display**:
```html
<fieldset>
  <legend>Select payment method</legend>

  <label>
    <input type="radio" name="payment" value="card" checked>
    <span>Credit Card</span>
  </label>

  <label>
    <input type="radio" name="payment" value="paypal">
    <span>PayPal</span>
  </label>

  <label>
    <input type="radio" name="payment" value="bank">
    <span>Bank Transfer</span>
  </label>
</fieldset>

<!-- Conditional content (shows based on selection) -->
<div data-show-when="payment:card">
  <!-- Credit card form -->
  <input type="text" name="card-number" placeholder="Card number">
  <input type="text" name="expiry" placeholder="MM/YY">
  <input type="text" name="cvv" placeholder="CVV">
</div>

<div data-show-when="payment:paypal" hidden>
  <!-- PayPal instructions -->
  <p>You will be redirected to PayPal to complete your payment.</p>
</div>

<div data-show-when="payment:bank" hidden>
  <!-- Bank transfer details -->
  <p>Transfer to account: 1234-5678-9012</p>
</div>
```

##### 5. Validation
```javascript
// Validate radio group (at least one selected)
function validateRadioGroup(groupName) {
  const selected = document.querySelector(`input[type="radio"][name="${groupName}"]:checked`);
  return selected !== null;
}

// Add validation to form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  if (!validateRadioGroup('plan')) {
    e.preventDefault();
    alert('Please select a plan');
  }
});
```

**Use Cases**:
- Single choice questions
- Settings options (theme, language, etc.)
- Payment method selection
- Shipping options
- Survey questions
- Filtering (single option)
- View mode toggles (grid/list)
- Agreement options (yes/no)
- Account type selection
- Difficulty level selection

**Accessibility**:
- ✅ Native keyboard support (Arrow keys navigate, Space selects)
- ✅ Label association (clicking label selects radio)
- ✅ Focus management
- ✅ Screen reader compatible
- ✅ `role="radio"` and `aria-checked` (automatic with native radio)
- ✅ Fieldset/legend for grouping
- ✅ Required attribute support

**Keyboard Navigation** (Native Behavior):
- **Arrow keys**: Navigate between radios in the same group
- **Space**: Select focused radio
- **Tab**: Move to next form field (not next radio)
- Native behavior: Arrow keys automatically check the focused radio

**Best Practices**:
1. **Always use `name` attribute** to group related radios
2. **Use `<fieldset>` and `<legend>`** for semantic grouping
3. **One radio should be checked by default** (use `checked` attribute)
4. **Provide clear labels** for each option
5. **Use `required` attribute** for mandatory selections
6. **Consider button-style or card-style** for better visual hierarchy
7. **Avoid too many options** (>7 options: consider `<select>` instead)

**JS Features (Vue Component)**:
- v-model binding with arrays
- Two-way data sync
- Group validation
- Custom events
- Scoped styles
- Slot support for custom content
- Dynamic option generation
- Disabled state management

**Complete Example - Settings Panel**:
```html
<form class="settings-panel">
  <!-- Theme selection -->
  <fieldset class="radio-group-icons">
    <legend>Theme Preference</legend>

    <label>
      <input type="radio" name="theme" value="light" checked>
      <sign type="icon" name="sun"></sign>
      <span>Light</span>
    </label>

    <label>
      <input type="radio" name="theme" value="dark">
      <sign type="icon" name="moon"></sign>
      <span>Dark</span>
    </label>

    <label>
      <input type="radio" name="theme" value="auto">
      <sign type="icon" name="circle-half-stroke"></sign>
      <span>Auto</span>
    </label>
  </fieldset>

  <!-- Language selection -->
  <fieldset>
    <legend>Language</legend>

    <div class="radio-group">
      <label class="radio-card">
        <input type="radio" name="language" value="en" checked>
        <div class="radio-content">
          <strong>English</strong>
          <small>Default language</small>
        </div>
      </label>

      <label class="radio-card">
        <input type="radio" name="language" value="es">
        <div class="radio-content">
          <strong>Español</strong>
          <small>Spanish language</small>
        </div>
      </label>

      <label class="radio-card">
        <input type="radio" name="language" value="fr">
        <div class="radio-content">
          <strong>Français</strong>
          <small>French language</small>
        </div>
      </label>
    </div>
  </fieldset>

  <button type="submit">Save Settings</button>
</form>
```

**Benefits of SUAI Unified Pattern:**

1. **Consistent API**: Same attributes across all form elements
2. **AI-Friendly**: Predictable structure for code generation
3. **Less Markup**: No wrapper elements needed
4. **Semantic Clarity**: `<select type="*">` clearly indicates selection behavior
5. **Progressive Enhancement**: Works with/without JavaScript
6. **Accessibility**: Automatic ARIA handling via JS
7. **Form Integration**: Native form serialization

---

### 3.5 Radio Group ✅ REVIEWED
**Priority**: N/A (covered by #3.4 Radio)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<fieldset>` + `<legend>` |
| **SUAI Tag** | Covered by `<select type="radio">` + `<fieldset label="...">` |

**Note:** Radio Group is simply a container. Use `<fieldset>` with SUAI `label` and `hint` attributes.

---

### 3.6 Rating ✅ REVIEWED
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | None (no native rating input) |
| **SUAI Tag** | `<select type="rating"><option>` |
| **CSS-Only** | ✅ Yes - Star/heart visual rendering |
| **JS Vanilla** | Minimal - Click/hover interaction |
| **JS Component** | Optional - Advanced features |

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

### 3.7 Select ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<select><option>` (native dropdown) |
| **SUAI Tag** | `<select type="list"><option>` (visual list) or `<select type="dropdown">` |
| **CSS-Only** | ✅ Yes - Custom styling |
| **JS Vanilla** | Minimal - Enhanced UX |
| **JS Component** | Optional - Search, multi-select |

**SUAI Select Types:**
- `<select type="dropdown">` - Traditional dropdown (default)
- `<select type="list">` - Always-visible list

---

### 3.8 Slider (Range) ✅ REVIEWED
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="range">` |
| **SUAI Tag** | `<select type="slider">` or keep `<input type="range">` |
| **CSS-Only** | ✅ Yes - Custom track/thumb styling |
| **JS Vanilla** | Minimal - Value display, dual handles |
| **JS Component** | Optional - Advanced features |

---

### 3.9 Switch (Toggle) ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="checkbox">` (for toggle) |
| **SUAI Tag** | `<select type="toggle">` (on/off) AND `<select type="switch">` (moves between values) |
| **CSS-Only** | ✅ Yes - Toggle animation |
| **JS Vanilla** | Minimal - State management |
| **JS Component** | Optional |

**Difference:**
- `<select type="toggle">` - Binary on/off (like checkbox)
- `<select type="switch">` - Visual "switch" animation between multiple values

---

### 3.10 Textarea ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<textarea>` or `<div contenteditable="true">` |
| **SUAI Tag** | `<composer>` (universal content creation) |
| **CSS-Only** | ✅ Yes - Styling, scrollbar, resize |
| **JS Vanilla** | Required - Toolbox, formatting, preview |
| **JS Component** | Optional - Advanced features |

**SUAI Innovation: `<composer>` Element**

Universal content creation element that replaces `<textarea>` with type-aware editing:

**Composer Types:**
```html
<!-- Plain text (basic textarea) -->
<composer mode="plain" name="comment" label="Your Comment" hint="Max 500 characters"></composer>

<!-- Markdown editor -->
<composer type="markdown" name="post" label="Blog Post" hint="Supports Markdown syntax"></composer>

<!-- HTML editor -->
<composer type="html" name="template" label="Email Template"></composer>

<!-- Rich text/WYSIWYG -->
<composer type="rich" name="description" label="Product Description"></composer>

<!-- Code editor with syntax highlighting -->
<composer type="code" lang="js" name="script" label="JavaScript Code"></composer>

<!-- Email composition -->
<composer type="email" name="message" label="Email Message"></composer>
```

**Preview Element:**
```html
<!-- Preview with explicit reference -->
<composer type="markdown" name="post" id="my-post"></composer>
<preview for="my-post"></preview>

<!-- Preview implicitly references preceding composer -->
<composer type="markdown" name="readme"></composer>
<preview></preview>
```

**Complete Example:**
```html
<fieldset label="Create Blog Post">
  <!-- Markdown composer with label/hint -->
  <composer
    type="markdown"
    name="content"
    label="Post Content"
    hint="Write your post using Markdown syntax"
    rows="10">
  </composer>

  <!-- Auto-linked preview (no 'for' needed) -->
  <preview label="Preview"></preview>
</fieldset>
```

**Composer Modes/Types:**
- `mode="plain"` - Plain text (textarea replacement)
- `type="markdown"` - Markdown editor with preview
- `type="html"` - HTML code editor
- `type="rich"` - WYSIWYG rich text editor
- `type="code"` - Code editor with syntax highlighting (requires `lang` attribute)
- `type="email"` - Email composition with formatting

**Features (Vanilla JS):**
- Toolbox/toolbar for formatting actions
- Input filtering based on type
- Auto-formatting (markdown, code, etc.)
- Live preview sync
- Character/word counter
- Auto-resize
- Auto-save to localStorage
- Emoji picker (for rich/email types)

**Why `<composer>` vs `<textarea>`?**
1. **Type-aware**: Different editing modes for different content
2. **Built-in preview**: `<preview>` element for rendered output
3. **Semantic clarity**: "composer" indicates content creation
4. **Unified API**: Uses `label`/`hint` like other SUAI elements
5. **Extensible**: Easy to add new types (JSON, YAML, SQL, etc.)

**Additional Tags (Low Priority):**

### `<version>` - Content Versioning & Translation

For managing revisions and alternate language versions:

```html
<!-- Current version in English -->
<version lang="en" rev="v3" time="2025-10-30T09:00Z" current>
  **HTML 6 proposal**
  Exploring a unified `<composer>` and `<preview>` system.
</version>

<!-- Auto-translated version -->
<version lang="fr" auto="from:en model:gpt" time="2025-10-30T09:01Z">
  **Proposition HTML 6**
  Exploration d'un système unifié `<composer>` et `<preview>`.
</version>

<!-- Previous version with authorship -->
<version lang="en" rev="v2" time="2025-10-28T12:00Z" author="bob" based-on="v1">
  Updated policy terms.
</version>

<!-- Early draft -->
<version lang="en" rev="v2" time="2025-10-29T10:00Z">
  Early draft — base model only.
</version>
```

**Attributes:**
- `lang` - Language code (en, fr, th, etc.)
- `rev` - Revision identifier (v1, v2, v3, etc.)
- `time` - ISO 8601 timestamp
- `current` - Boolean, marks the current active version
- `auto` - Auto-translation metadata (from:lang model:name)
- `author` - Author identifier
- `based-on` - Parent revision reference

### `<diff>` - Version Comparison

Shows differences between content versions:

```html
<!-- Show diff between two versions -->
<diff from="v1" to="v2" for="policy"></diff>

<!-- Implicit reference to preceding versions -->
<version rev="v1">Old content</version>
<version rev="v2">New content</version>
<diff from="v1" to="v2"></diff>
```

**Attributes:**
- `from` - Source version identifier
- `to` - Target version identifier
- `for` - Optional reference to named content/composer

**Use Cases:**
- Content versioning history
- Multi-language content management
- Collaborative editing with authorship tracking
- Auto-translation workflows
- Change tracking and review
- Revision comparison

---

## 4. Imagery Category

### 4.1 Animated Image / Media ✅ REVIEWED
**Priority**: 🔴 High (for `<media type="image">`), 🟡 Medium (for other types)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<img>`, `<video>` |
| **SUAI Tag** | `<media type="...">` (unified media element) |
| **CSS-Only** | ✅ Yes - Basic styling |
| **JS Vanilla** | Optional - Controls, lazy loading |
| **JS Component** | Optional - Advanced features |

**SUAI Innovation: `<media>` Element**

Universal media container replacing `<img>`, `<video>`, `<picture>`, `<svg>`:

**Media Types:**
```html
<!-- Static image (replaces <img>) - HIGH PRIORITY -->
<media type="image" src="photo.jpg" alt="Description"></media>

<!-- Animated image (GIF, APNG, animated WebP) -->
<media type="animation" src="loader.gif" controls></media>

<!-- SVG graphics -->
<media type="svg" src="icon.svg"></media>

<!-- Video -->
<media type="video" src="clip.mp4" controls></media>
```

**Attributes & Children:**
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
1. **Phase 1 (High Priority)**: `<media type="image">` - Replace `<img>`
2. **Phase 2 (Medium Priority)**: `type="animation"`, `type="svg"`, `type="video"`
3. **Phase 3 (Low Priority)**: Advanced attributes (watermark, cast, genre, etc.)

---

### 4.2 Avatar ✅ REVIEWED
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
<avatar src="user.jpg" alt="John Doe"></avatar>
<avatar name="John Doe"></avatar>
<avatar src="user.jpg" status="online"></avatar>
```

**Attributes:** `src`, `name`, `alt`, `status`, `size`, `shape`

**Note:** `<avatar-group>` is TBD.

---

### 4.3 Gallery (replaces Carousel) ✅ REVIEWED
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<ul>` + `<li>` |
| **SUAI Tag** | `<gallery type="...">` |
| **CSS-Only** | Partial - Layout yes, navigation needs JS |
| **JS Vanilla** | Required - Navigation, autoplay |
| **JS Component** | Optional |

**Gallery Types:** carousel, grid, masonry, lightbox

**Example:**
```html
<gallery type="carousel" autoplay interval="3000">
  <media type="image" src="slide1.jpg"></media>
  <media type="image" src="slide2.jpg"></media>
</gallery>
```

**Content:** Any direct children (not limited to `<media>`)

---

### 4.4 Carousel Item ✅ REVIEWED
**Priority**: N/A (obsolete)

Items are direct children of `<gallery>`.

---

### 4.5 Image Comparison ✅ REVIEWED
**Priority**: 🔴 High (for SUAI showcase/documentation)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | Container (`<div>`) |
| **SUAI Tag** | `<gallery type="compare">` |
| **CSS-Only** | Partial - Layout yes, slider needs JS |
| **JS Vanilla** | Required - Draggable slider |
| **JS Component** | Optional |

**Example:**
```html
<!-- Code vs Preview comparison (SUAI showcase) -->
<gallery type="compare" label="SUAI Gallery" hint="Drag to compare">
  <code type="html">
    <gallery type="grid" columns="3">...</gallery>
  </code>
  <preview></preview>
</gallery>
```

**Use Case:** Showcase SUAI with interface/code sliding comparison

---

### 4.6 Icon ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<svg>` (inline), `<img>` (external) |
| **SUAI Tag** | `<icon>` (UnoCSS library), `<svg>` (inline), `<media type="svg">` (external) |
| **CSS-Only** | ✅ Yes - Via UnoCSS classes |
| **JS Vanilla** | Not needed |
| **JS Component** | Optional |

**Three Approaches:**
```html
<!-- 1. UnoCSS library (semantic) -->
<icon name="heroicons:arrow-right"></icon>

<!-- 2. Inline SVG -->
<svg viewBox="0 0 24 24">...</svg>

<!-- 3. External SVG -->
<media type="svg" src="logo.svg"></media>
```

**Decorative Icons (CSS):**
```html
<button class="icon-right:heroicons:arrow-right">Continue</button>
<input class="icon-left:heroicons:magnifying-glass" placeholder="Search">
```

**Philosophy:** Semantic icons → `<icon>` tag, Decorative icons → CSS classes

**UnoCSS Enhancement:** `icon-left:{name}`, `icon-right:{name}`, `icon-prefix:{name}`, `icon-suffix:{name}`

---

### 4.7 Zoomable Frame
**Priority**: ⚫ Skipped (specialized use case)

---

## Category 4: Imagery - Complete ✅

All imagery components reviewed (4.1-4.7).

---

## 5. Navigation Category

### 5.1 Breadcrumb / Path ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<nav>` + `<ol>`/`<ul>` |
| **SUAI Tag** | `<path type="..."><point>` |
| **CSS-Only** | ✅ Yes |
| **JS Vanilla** | Minimal - Path matching |
| **JS Component** | Optional |

**SUAI Innovation:** Universal `<path>` + `<point>` for sequential navigation

**Example:**
```html
<path type="sitemap" current="/products/laptops" separator=" > ">
  <point to="/">Home</point>
  <point to="/products" match>Products</point>
  <point to="/products/laptops" match at="here">Laptops</point>
</path>
```

**Types:** sitemap, history, memory, itinerary, timeline, roadmap, decision, workflow, playlist

---

### 5.2 Breadcrumb Item ✅ REVIEWED
**Priority**: N/A (obsolete - use `<point>`)

---

### 5.3 Tabs (covers #5.3, #5.4, #5.5) ✅ REVIEWED
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | Various |
| **SUAI Tag** | `<select type="tabs">` + panels with `data-tab` |
| **CSS-Only** | Partial |
| **JS Vanilla** | Required - Panel switching |
| **JS Component** | Optional |

**Example:**
```html
<!-- Simple tabs -->
<select type="tabs" name="view">
  <option value="profile">Profile</option>
  <option value="settings">Settings</option>
</select>

<!-- Grouped tabs with optgroup -->
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

<div data-tab="profile">Profile content</div>
<div data-tab="settings" hidden>Settings content</div>
<div data-tab="email" hidden>Email settings</div>
<div data-tab="push" hidden>Push settings</div>
```

---

### 5.4 Tab Group ✅ REVIEWED
**Priority**: N/A (covered by #5.3)

---

### 5.5 Tab Panel ✅ REVIEWED
**Priority**: N/A (covered by #5.3)

---

### 5.6 Tree (covers #5.6, #5.7) ✅ REVIEWED
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<ul>` + `<li>` nested |
| **SUAI Tag** | `<tree><node>` |
| **CSS-Only** | Partial |
| **JS Vanilla** | Required - Expand/collapse, selection |
| **JS Component** | Optional |

**Example:**
```html
<tree selection="multiple" selectable="leaf">
  <node label="Documents" expanded>
    <node label="Work">
      <node label="Report.pdf"></node>
      <node label="Presentation.pptx"></node>
    </node>
  </node>
</tree>
```

**Selection:** none, single, multiple | **Selectable:** leaf, branch, all

---

### 5.7 Tree Item ✅ REVIEWED
**Priority**: N/A (covered by #5.6 - use `<node>`)

---

## Category 5: Navigation - Complete ✅

All navigation components reviewed (5.1-5.7).

---

## 6. Organization Category

### 6.1 Card
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 6.2 Details (Disclosure/Accordion)
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 6.3 Dialog (Modal)
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 6.4 Divider
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 6.5 Drawer (Side Panel)
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 6.6 Scroller
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 6.7 Split Panel
**Priority**: _Pending_
**Implementation**: _Pending_

---

## 7. Utilities Category

### 7.1 Animation
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.2 Format Bytes
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.3 Format Date
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.4 Format Number
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.5 Include (HTML Include)
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.6 Mutation Observer
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.7 Popover
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.8 Popup
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.9 Relative Time
**Priority**: _Pending_
**Implementation**: _Pending_

---

### 7.10 Resize Observer
**Priority**: _Pending_
**Implementation**: _Pending_

---

## Summary Statistics

**Total Components Reviewed**: 1 / 55
**High Priority**: 1
**Medium Priority**: 0
**Low Priority**: 0
**Skip**: 0

**Implementation Breakdown**:
- CSS-only: 0
- JS required: 0
- Hybrid: 1

---

## Notes

- SUAI prefers keeping native HTML tags when they are already semantic (`<button>`, `<nav>`, `<details>`)
- Custom tags are introduced when they improve semantics or developer experience
- CSS-first approach: implement as much as possible without JavaScript
- `<su-*>` components provide progressive enhancement with JS features
