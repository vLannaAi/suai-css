# SUAI Components - Navigation

**Category 5: Navigation**

Components for site navigation, sequential paths, tabs, and hierarchical structures.

---

## SUAI Core Innovations (Navigation-Related)

### 1. Universal Sequential Navigation
`<path><point>` pattern works across ANY dimension:

**Abstract Dimensions:**
- `<path type="sitemap">` - Breadcrumb navigation
- `<path type="history">` - Navigation trail
- `<path type="memory">` - Wizard/stepper state
- `<path type="roadmap">` - Product roadmap
- `<path type="workflow">` - Process steps
- `<path type="decision">` - Decision tree path

**Physical Dimensions:**
- `<path type="itinerary">` - Spatial journey (coordinates)
- `<path type="timeline">` - Temporal journey (events)

**Media Dimensions:**
- `<path type="playlist">` - Media sequence

### 2. Tab System with Grouping
`<select type="tabs">` with `<optgroup>` support for organized tab interfaces.

### 3. Tree with Selection Modes
`<tree><node>` with configurable selection (single/multiple/leaf/branch).

---

## 5.1 Breadcrumb / Path ✅
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

## 5.2 Breadcrumb Item
**Priority**: N/A (obsolete - use `<point>` within `<path>`)

---

## 5.3 Tabs (covers #5.3, #5.4, #5.5) ✅
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

## 5.4 Tab Group
**Priority**: N/A (covered by #5.3)

---

## 5.5 Tab Panel
**Priority**: N/A (covered by #5.3)

---

## 5.6 Tree (covers #5.6, #5.7) ✅
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

## 5.7 Tree Item
**Priority**: N/A (covered by #5.6)

---

## Summary

✅ **Completed: 7 components**
- 5.1 Path (universal `<path><point>` system) - 🔴 High
- 5.2 Breadcrumb Item - Obsolete (use `<point>`)
- 5.3 Tabs (`<select type="tabs">` with `<optgroup>`) - 🔴 High
- 5.4 Tab Group - Covered by #5.3
- 5.5 Tab Panel - Covered by #5.3
- 5.6 Tree (`<tree><node>`) - 🟡 Medium
- 5.7 Tree Item - Covered by #5.6

**Priority Breakdown:**
- 🔴 High: 2 components (Path-basic, Tabs)
- 🟡 Medium: 2 components (Path-full, Tree)
- 🟢 Low: 1 component (Path-Vue component)

---

**Document Version**: 2025-10-31
**Status**: Complete
