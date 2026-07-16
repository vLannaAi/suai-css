# SUAI Framework - Display Components Catalog

**Read-Only & Display Components for Nuxt 4/Vue**

Components that **display information** without returning user input values. Organized by function with maximum 15 components per category.


---

## Category DA: Typography & Text Display

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DA01 | Heading | Typography Heading | `<h1>` to `<h6>` | Semantic heading component (h1-h6) with responsive sizing and theming |
| DA02 | Text | Paragraph Text | `<p>` | Body text component with size variants, weights, and color theming |
| DA03 | Label | Text Label | `<label>` | Descriptive text label with variants for form fields, sections, or inline content |
| DA04 | Link | Hyperlink Component | `<a>` | Styled anchor element with hover states and external link indicators |
| DA05 | Code | Code Display | `<code>` | Monospace text display for code snippets with syntax highlighting support |
| DA06 | Kbd | Keyboard Key | `<kbd>` | Visual representation of keyboard keys with platform-aware styling |

---

## Category DB: Visual Elements & Media

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DB01 | Image | Responsive Image | `<img>` | Optimized image component with lazy loading, fallback, and srcset support |
| DB02 | Figure | Standalone Visual | `<figure>` | semantic container for self-contained content |
| DB03 | Caption | Content Caption | `<figcaption>` | Optimized image component with lazy loading, fallback, and srcset support |
| DB04 | Divider | Section Divider | `<hr>` | Horizontal or vertical line separator with optional label text |
| DB05 | Badge | Status Badge | `<button badge>` | Small labeled component for counts, status indicators, or categorical labels |
| DB06 | Tag | Display Tag | `<ul tags><li` | Non-interactive label component for categorization or metadata display |
| DB07 | Avatar | User Avatar | `<figure avatar><figcaption` | Circular or rounded image component for user representation with fallback initials |

---

## Category DC: Loading & Placeholder States

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DC01 | Progress | Progress Bar | `<progress>` | Visual indicator of completion percentage with variants and animation |
| DC02 | Spinner | Loading Spinner | `<progress spinner>` | Animated loading indicator with size variants and overlay support |
| DC03 | Skeleton | Skeleton Loader | `<progress skeleton>` | Placeholder component showing content structure during loading |

## Category DD: Notifications & Feedback

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DD01 | Alert | Alert Notification | `<dialog alert popover>` | Contextual feedback message with variants (info, success, warning, error) and dismiss action |
| DD02 | Toast | Toast Notification | `<dialog toast popover>` | Temporary notification message with auto-dismiss and queue management |
| DD03 | Help Tooltip | Hover Tooltip Help | `<dialog help>` | Contextual help text that appears on hover with positioning options |
| DD04 | Popover | Content Popover | `<dialog info popover>` | Floating content container triggered by hover/click with positioning and arrow |
| DD05 | Modal | Modal Dialog | `<dialog modal popover>` | Overlay dialog for focused content or actions with backdrop and close handling |

---

## Category DE: Data Visualization, Media Players & Galleries

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DE01 | Table | Data Table | `<table>` | Structured data display with rows, columns, sorting, and selection |
| DE02 | DataGrid | Advanced Data Grid | `<data grid>` | Feature-rich table with sorting, filtering, pagination, column reordering, and virtualization |
| DE03 | TreeView | Hierarchical Tree View | `<data tree>` | Expandable tree structure for nested data with selection and lazy loading |
| DE04 | Timeline | Event Timeline | `<time datetime>` | Chronological display of events with vertical/horizontal orientation |
| DF06 | Carousel | Content Carousel | `<ul carousel><li>` | Rotating content display with navigation arrows, indicators, and auto-play |
| DF06 | ImageGallery | Image Gallery Grid | `<ul gallery><li>` | Grid layout for images with lightbox, zoom, and thumbnail navigation |
| DF07 | VideoPlayer | Video Player | `<video>` | Custom video player with controls, captions, and playback settings |
| DF08 | AudioPlayer | Audio Player | `<audio>` | Custom audio player with waveform visualization and playlist support |

## Category DF: Navigation Display

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DF04 | MenuBar | Horizontal Menu Bar | `<nav><a>` | Horizontal menu component with dropdown submenus |
| DF02 | Sidebar | Side Navigation Panel | `<aside><ol><li><a>` | Vertical navigation panel with collapsible sections and active indicators |
| DF05 | Breadcrumb | Navigation Breadcrumb | `<nav breadcrumb><a>` | Hierarchical navigation trail showing user's location in site structure |
| DF06 | Pagination | Page Pagination | `<nav pager><a>` | Navigation control for multi-page content with page numbers and prev/next |
| DF07 | Tabs | Tabbed Navigation | `<nav tabs><a>` | Content organization with clickable tabs for switching between views |
| DF08 | Stepper | Step Navigation | `<nav steps><a>` | Sequential step indicator with clickable steps and progress display |

---

## Category DL: Lists

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DL01 | Description | Description List | `<dl>` | Semantic description list for term-definition pairs |
| DL02 | List | Ordered/Unordered List | `<ul>` or `<ol>` | Semantic list component with custom styling and interactive list items |
| DL03 | ListItem | List Item Component | `<li>` | Individual item in a list with hover states and selection support |
| DL04 | Accordion | Collapsible Accordion | `<details><summary><p>` | Multiple collapsible sections with expand/collapse functionality |
| DL05 | Collapse | Collapsible Container | `<detail><summary><p>` | Container that can be expanded/collapsed with animation |

---

## Category DS: Page Structure & Content Sections

| Code | Common Name | Extended Name | HTML5 Tag | Definition |
|------|-------------|---------------|-----------|------------|
| DS01 | Header | Page Header | `<header>` | Top page section with title, breadcrumbs, and actions |
| DS02 | Footer | Page Footer | `<footer>` | Bottom page section with links, copyright, and social media integration |
| DS03 | PageBody | Page Body Section | `<main>` | Main content area with consistent padding and max-width constraints |
| DS04 | Section | Page Section | `<section>` | Reusable section component with consistent spacing and backgrounds |
| DS05 | Article | Page Article | `<article>` | Independent, self-contained content (blog post, news item, product) |
| DS06 | Card | Content Card | `<article card>` | Versatile content container with header, body, footer, and hover effects |
| DS07 | Panel | Information Panel | `<article panel>` | Container with title bar, collapsible content, and optional actions |
| DS08 | Note | Elevated highlited Surface |  `<article note>` | Card-like container with elevation and shadow for material design |
| DS09 | Quote | Indented Surface |  `<blockquote>` |  Semantic element used to indicate a quoted section of text
| DS10 | EmptyState | Empty State Display | `<section empty>` | Informative display when no content is available with illustration and actions |

---
