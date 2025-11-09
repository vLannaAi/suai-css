# SUAI Components - Form Controls

**Category 3: Form Controls**

Components for user input, selection, and content creation.

---

## SUAI Core Innovations (Form-Related)

### 1. Unified Selection Pattern
All selection interactions use `<select type="*">`:
- `<select type="radio">` - Single choice (replaces radio group)
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

### 3. Content Creation Ecosystem
- `<composer type="*">` - Universal content editor (replaces `<textarea>`)
- `<preview>` - Live preview of composed content
- `<version>` - Content versioning and translations
- `<diff>` - Visual comparison between versions

---

## 3.1 Checkbox ✅
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

## 3.2 Color Picker ✅
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

## 3.3 Input ✅
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

## 3.4 Radio ✅
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

## 3.5 Radio Group ✅
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

## 3.6 Rating ✅
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

## 3.7 Select ✅
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

## 3.8 Slider (Range) ✅
**Priority**: 🟡 Medium

| Aspect | Decision |
|--------|----------|
| **HTML Tag** | `<input type="range">` |
| **SUAI Tag** | `<select type="slider">` or keep `<input type="range">` |
| **CSS-Only** | ✅ Yes - Custom track/thumb styling |
| **JS Vanilla** | Minimal - Value display, dual handles |
| **JS Component** | Optional |

---

## 3.9 Switch (Toggle) ✅
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

## 3.10 Textarea / Composer ✅
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

## Summary

✅ **Completed: 10 components**
- 3.1 Checkbox → `<select type="checkbox" multiple>`
- 3.2 Color Picker → `<input type="color">` + `<input type="palette">`
- 3.3 Input → Native + enhancements
- 3.4 Radio → `<select type="radio"><option>`
- 3.5 Radio Group → `<select type="radio">`
- 3.6 Rating → `<select type="rating">`
- 3.7 Select → `<select type="list">` / `<select type="dropdown">`
- 3.8 Slider → `<select type="slider">` / `<input type="range">`
- 3.9 Switch/Toggle → `<select type="toggle">` / `<select type="switch">`
- 3.10 Composer → `<composer type="*">`

**Priority Breakdown:**
- 🔴 High: 7 components (Checkbox, Input, Radio, Select, Switch/Toggle, Composer)
- 🟡 Medium: 2 components (Color Picker, Rating, Slider)
- 🟢 Low: 1 component (Version, Diff)

---

**Document Version**: 2025-10-31
**Status**: Complete
