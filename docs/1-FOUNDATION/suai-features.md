# SUAI Framework Features: AI Composition & Human Control

## 1. Core Architecture

### 1.1 Pattern Structure

   1.1.1. **Semantic HTML Foundation**
          Native elements (`<article>`, `<header>`, `<nav>`) with minimal wrappers reduce AI complexity and improve accessibility

   1.1.2. **Single Root Class Pattern**
          One component = one class, simplifying AI generation and maintenance

   1.1.3. **SMACSS Organization**
          Five-layer separation (Base, Layout, Module, State, Theme) guides AI file structure

   1.1.4. **Multi-line Utility Groups**
          Organized by function (Layout → Appearance → State) for systematic composition

### 1.2 Naming Conventions

   1.2.1. **Prefix System**
          `.l-` (layout), `.is-` (state), `.theme-` (theme), `--modifier` (variants)

   1.2.2. **Advanced Selectors**
          Combinators (`>`, `+`, `~`), pseudo-elements (`::before`, `::after`), negation (`:not()`)

## 2. Utility-First System

### 2.1 Framework Integration

   2.1.1. **UnoCSS/Tailwind Compatibility**
          @apply directive and inline atomic classes for rapid development

   2.1.2. **Responsive Variants**
          Mobile-first breakpoints (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)

   2.1.3. **Dark Mode System**
          `dark:` prefix with class-based toggle and system preference detection

### 2.2 Performance Features

   2.2.1. **JIT Compilation**
          On-demand generation (5-200x faster with UnoCSS)

   2.2.2. **Automatic Optimization**
          PurgeCSS/tree shaking removes unused styles (85-95% reduction)

## 3. Theme & Adaptation

### 3.1 Theme Control

   3.1.1. **CSS Variable System**
          Runtime theme switching without rebuilds via custom properties

   3.1.2. **Multi-Level Scoping**
          Root-level or component-level theme application

### 3.2 Responsive Design

   3.2.1. **Progressive Enhancement**
          Mobile-first base with breakpoint-based desktop improvements

   3.2.2. **Modern Patterns**
          Container queries and unified breakpoint consistency

## 4. Developer Control

### 4.1 Override System

   4.1.1. **CSS Cascade Layers**
          Explicit hierarchy via `@layer` directive

   4.1.2. **External CSS Architecture**
          No scoped styles—full customization access

   4.1.3. **Multiple Override Methods**
          Layer precedence, utility modifiers, component variants, state classes

### 4.2 Maintenance Tools

   4.2.1. **Code Organization**
          Visual grouping, granular version control, IDE support

   4.2.2. **Centralized Styles**
          Single source of truth with semantic selector specificity management

## 5. AI Optimization

### 5.1 AI Composition Enablers

   5.1.1. **Deterministic Patterns**
          Clear rules and repeatable syntax reduce AI hallucination

   5.1.2. **Structured Context**
          SMACSS layers and semantic hierarchy guide AI decisions

   5.1.3. **Minimal Decision Points**
          Convention over configuration with single root class pattern

### 5.2 Human Authority

   5.2.1. **Full Override Capability**
          External CSS, layer precedence, utility escape hatches

   5.2.2. **Flexible Integration**
          Gradual adoption with existing systems, JavaScript state management

---

## Summary: The Balance

**AI Composes** → Predictable structure, consistent patterns, systematic organization  
**Human Controls** → Override layers, theme variables, utility modifiers, state management

SUAI creates a "guided freedom" architecture where AI agents generate maintainable CSS (~70%) while developers retain ultimate control through layered overrides and customization (~30%).

**Total Specification Points: 27** (reduced from 55 by eliminating redundancies)
