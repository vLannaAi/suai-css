# SUAI Components - Actions

**Category 1: Actions**

Components for user interactions, buttons, menus, and action triggers.

---

## SUAI Core Innovations (Actions-Related)

### 1. Extensible Button Type Pattern
Extend `<button type="*">` for semantic action buttons:
- `type="copy"` - Copy to clipboard
- `type="cut"` - Cut to clipboard
- `type="paste"` - Paste from clipboard
- `type="select-all"` - Select all text
- `type="translate"` - Translate content
- `type="speak"` - Text-to-speech

### 2. Revolutionary `<sign>` System
A unified element for symbolic codes with semantic weight:
- Machine-readable: QR codes, barcodes, NFC
- Evaluative: Stars, ratings, scores
- Certification: CE, ISO, eco badges
- Status: online, verified, secure
- And 10+ more categories

### 3. Dropdown with Popover API
Native `<details>` + Popover API for modern dropdowns (no z-index issues).

---

## 1.1 Button ✅
**Priority**: 🔴 High

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<button>` |
| **SUAI Tag** | `<button>` (keep native) |
| **CSS-Only** | ✅ Yes - Full styling with variants, states, sizes |
| **JS Vanilla** | Optional - Analytics, loading state, async actions, debouncing |
| **JS Component** | `<su-button>` - Advanced features |

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

## 1.2 Button Group
**Priority**: ⚫ Skip

**Rationale**: Without JS, this is just a layout container (flexbox with gaps and borders). The orchestration logic would need to be generalized for other categories (tabs, links, etc.) and requires JS for structured component behavior. Better to defer until we have a general grouping pattern.

**Alternative**: Use layout utilities (`.l-cluster`, flexbox utilities) for visual grouping when needed.

---

## 1.3 Copy Button ✅
**Priority**: 🟢 Low

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<button type="copy" for="elementId">` |
| **SUAI Tag** | `<button type="copy">` (semantic type extension) |
| **CSS-Only** | ❌ No - Requires JavaScript for Clipboard API |
| **JS Vanilla** | Minimal vanilla JS library for browser compatibility |
| **JS Component** | `<su-copy-button>` - Vue component with full features |

**Extensible Type Pattern:**
This pattern extends to other common actions:
- `type="copy"` - Copy to clipboard
- `type="cut"` - Cut to clipboard
- `type="paste"` - Paste from clipboard
- `type="select-all"` - Select all text in target
- `type="translate"` - Translate content
- `type="speak"` - Text-to-speech

**HTML Pattern:**
```html
<!-- Copy from specific element -->
<input id="api-key" value="abc123xyz">
<button type="copy" for="api-key">Copy</button>

<!-- Copy from preceding element (implicit) -->
<input value="email@example.com">
<button type="copy">Copy</button>
```

**CSS Features:**
- Button styling (inherits from base button styles)
- `.is-copied` state for success feedback
- Icon animation on success
- Tooltip ("Copy" → "Copied!")

**JS Features (Vanilla):**
- Clipboard API (navigator.clipboard.writeText)
- Target resolution (for attribute or previous sibling)
- Success/error handling
- CSS class toggle for feedback
- Fallback for older browsers

---

## 1.4 Dropdown ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<details class="dropdown">` + `<summary>` + Popover API |
| **SUAI Tag** | `<dropdown title="Summary Text">` + popover attribute |
| **CSS-Only** | ✅ Yes - Using `<details>` + Popover API (2023+ browsers) |
| **JS Vanilla** | Optional - Enhanced positioning, keyboard nav, outside-click handling |
| **JS Component** | `<su-dropdown>` - Vue component with full features |

**HTML Pattern:**
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

**Browser Support:**
- Popover API: Chrome 114+, Safari 17+, Firefox 125+ (2023+)
- Acceptable requirement for modern web apps
- Fallback: Progressive enhancement for older browsers

**Popover API Benefits:**
- ✅ Automatic top-layer rendering (no z-index issues)
- ✅ Auto-close on outside click (built-in)
- ✅ Escape key handling (built-in)
- ✅ Focus management (built-in)
- ✅ Accessible by default

**CSS Features:**
- Dropdown trigger styling (button-like summary)
- Panel positioning via Popover API (automatic layering)
- Animations (slide down, fade in)
- Hover/focus states
- Variants: placement (bottom, top, left, right)
- Max height with scroll
- Arrow/chevron indicators

**JS Features (Vanilla):**
- Auto-positioning and flip logic (when near viewport edge)
- Keyboard navigation (arrow keys through items)
- Enhanced keyboard shortcuts
- Positioning calculations
- Polyfill for older browsers (optional)

---

## 1.5 Dropdown Item
**Priority**: ⚫ Skip

**Rationale**: Not a separate component. Dropdown items are just regular `<a>` or `<button>` elements inside `<dropdown>`. Style them with CSS classes (`.dropdown-item`, hover states, disabled states, etc.). No need for custom element.

---

## 1.6 QR Code / Sign System ✅
**Priority**: 🔴 High (revolutionary concept)

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<img class="code-qr" src="...">` (for pre-generated QR) |
| **SUAI Tag** | `<sign type="qr" value="https://lanna.ai">` |
| **CSS-Only** | ✅ Yes - Using background-image for pre-rendered codes |
| **JS Vanilla** | Optional - QR generation library + canvas rendering |
| **JS Component** | `<su-sign>` - Vue component with dynamic generation |

## 🚀 REVOLUTIONARY CONCEPT: `<sign>` Element

A `<sign>` is a **symbolic code** that semantically plays a major role in communication - not an icon, not a picture, but a **meaningful symbol** with semantic weight.

**HTML Pattern:**
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

**Sign Categories:**

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

**CSS Implementation Strategy:**
- Attribute-only (no content, self-closing)
- CSS with `background-image`, SVG, and `mask-image` modifiers
- Dynamic fills using `mask-image` for ratings/meters
- Color scales via CSS custom properties
- Animated gradients for "rating intensity"
- `<canvas>` fallback for generated versions (QR, barcodes)

**Why This Is Revolutionary:**
- **Semantic clarity**: `<sign type="qr">` is clearer than `<img class="qr-code">`
- **Unified system**: One element for all symbolic communication
- **CSS-powered**: Most signs work without JavaScript
- **Extensible**: Easy to add new sign types
- **AI-friendly**: Clear semantic structure for AI agents
- **Human-friendly**: Intuitive for developers

---

## Summary

✅ **Completed: 6 components**
- 1.1 Button - 🔴 High
- 1.2 Button Group - ⚫ Skip
- 1.3 Copy Button - 🟢 Low
- 1.4 Dropdown - 🟡 Medium
- 1.5 Dropdown Item - ⚫ Skip
- 1.6 QR Code / Sign System - 🔴 High (revolutionary concept)

**Priority Breakdown:**
- 🔴 High: 2 components (Button, Sign System)
- 🟡 Medium: 1 component (Dropdown)
- 🟢 Low: 1 component (Copy Button)
- ⚫ Skip: 2 components (Button Group, Dropdown Item)

**Key Innovation:** The `<sign>` element system - a unified, semantic approach to symbolic communication with 12+ categories of meaningful symbols.

---

**Document Version**: 2025-10-31
**Status**: Complete
