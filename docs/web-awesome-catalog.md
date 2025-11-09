# Web Awesome Component Library - Complete Catalog

**Version**: 1.0
**Source**: https://webawesome.com
**Architecture**: Web Components (Lit framework)
**License**: MIT

---

## Table of Contents

1. [Component Categories](#component-categories)
   - [Actions](#1-actions)
   - [Feedback & Status](#2-feedback--status)
   - [Form Controls](#3-form-controls)
   - [Imagery](#4-imagery)
   - [Navigation](#5-navigation)
   - [Organization](#6-organization)
   - [Utilities](#7-utilities)
2. [Layout Primitives](#layout-primitives)
3. [Style Utilities](#style-utilities)
4. [Patterns Library](#patterns-library)
5. [Design Tokens](#design-tokens)
6. [Organizational Philosophy](#organizational-philosophy)

---

## Component Categories

### 1. Actions

**Purpose**: Components that enable user interactions and trigger behaviors

#### 1.1 Button
**Web Component**: `<wa-button>`

**Purpose**: Primary interactive element for user actions

**Key Features**:
- Multiple variants (default, primary, success, neutral, warning, danger, text)
- Multiple sizes (small, medium, large)
- State support (loading, disabled)
- Icon support (prefix, suffix)
- Button groups
- Full-width option
- Pill shape option
- Outline variant

**Visual Patterns**:
- Solid backgrounds with hover/active states
- Focus rings for accessibility
- Smooth color transitions
- Icon and text alignment
- Loading spinner integration

**Interactions**:
- Click/tap
- Keyboard navigation (Enter, Space)
- Focus management
- Disabled state prevention

**Use Cases**:
- Form submissions
- Primary/secondary actions
- Destructive actions (delete, remove)
- Call-to-action buttons

---

#### 1.2 Button Group
**Web Component**: `<wa-button-group>`

**Purpose**: Group related buttons together with connected styling

**Key Features**:
- Horizontal/vertical orientation
- Connected borders (no gap between buttons)
- Maintains individual button variants
- Radio-style selection support

**Visual Patterns**:
- Merged borders between buttons
- Rounded corners only on ends
- Consistent spacing and alignment

**Interactions**:
- Individual button clicks
- Radio-style exclusive selection
- Keyboard navigation across group

**Use Cases**:
- Toolbar actions
- View switchers (list/grid)
- Pagination controls
- Filter toggles

---

#### 1.3 Copy Button
**Web Component**: `<wa-copy-button>`

**Purpose**: One-click copy text to clipboard with feedback

**Key Features**:
- Automatic clipboard API integration
- Visual feedback on copy success
- Customizable copy/success icons
- Customizable copy/success labels
- Tooltip support
- Value attribute or slot content

**Visual Patterns**:
- Icon-only or icon + label
- State change animation (copy → success)
- Checkmark feedback
- Optional tooltip

**Interactions**:
- Click to copy
- Visual confirmation
- Automatic reset after delay
- Keyboard accessible

**Use Cases**:
- Code snippet copying
- Share links
- Copy email/phone numbers
- API keys or tokens

---

#### 1.4 Dropdown
**Web Component**: `<wa-dropdown>`

**Purpose**: Container for dropdown menus with positioning

**Key Features**:
- Positioning (top, bottom, left, right)
- Auto-positioning (flips if no space)
- Trigger slot (any element can trigger)
- Panel slot (dropdown content)
- Open/close events
- Keyboard navigation
- Click-outside-to-close
- Focus management

**Visual Patterns**:
- Floating panel with shadow
- Smooth open/close animation
- Positioning arrow (optional)
- Z-index layering

**Interactions**:
- Click to open/close
- Escape to close
- Click outside to close
- Arrow keys to navigate items
- Tab to cycle focus

**Use Cases**:
- Action menus
- User account menus
- Navigation dropdowns
- Context menus

---

#### 1.5 Dropdown Item
**Web Component**: `<wa-dropdown-item>` (used within `<wa-dropdown>`)

**Purpose**: Individual item within dropdown menu

**Key Features**:
- Checkbox/checked state support
- Icon prefix support
- Disabled state
- Custom content via slots
- Keyboard navigation integration

**Visual Patterns**:
- Hover background highlight
- Checkmark indicator
- Icon alignment
- Text truncation

**Interactions**:
- Click to select
- Keyboard selection (Enter)
- Visual hover feedback
- Disabled state (no interaction)

**Use Cases**:
- Menu items
- Selection options
- Action lists
- Settings toggles

---

#### 1.6 QR Code
**Web Component**: `<wa-qr-code>`

**Purpose**: Generate QR codes from text/URLs

**Key Features**:
- Dynamic QR generation from value attribute
- Customizable size
- Error correction levels (L, M, Q, H)
- Foreground/background colors
- SVG output (scalable)
- Label/caption support

**Visual Patterns**:
- Black/white grid pattern
- Customizable colors
- Rounded or sharp corners
- Optional border/padding
- Optional label below

**Interactions**:
- Static display (no interaction)
- Scannable by QR readers
- Printable

**Use Cases**:
- Share URLs
- Payment codes
- Wi-Fi credentials
- Event tickets
- Contact information (vCard)

---

### 2. Feedback & Status

**Purpose**: Components that communicate system state and user feedback

#### 2.1 Badge
**Web Component**: `<wa-badge>`

**Purpose**: Small status indicator or notification counter

**Key Features**:
- Multiple variants (primary, success, neutral, warning, danger)
- Pill style (fully rounded)
- Pulse animation
- Positioning (overlay on parent)
- Icon support
- Number display

**Visual Patterns**:
- Small, compact design
- Solid background colors
- High contrast text
- Optional pulsing animation
- Absolute positioning for overlays

**Interactions**:
- Static display (no direct interaction)
- Can be clickable if wrapped

**Use Cases**:
- Notification counters
- Status indicators (online, offline)
- Tags/labels
- Feature badges ("New", "Beta")
- Message counts

---

#### 2.2 Callout
**Web Component**: `<wa-callout>`

**Purpose**: Highlighted message box for important information

**Key Features**:
- Multiple variants (neutral, primary, success, warning, danger)
- Icon support (prefix)
- Title support
- Closeable option
- Bordered or filled style

**Visual Patterns**:
- Colored left border (border variant)
- Full background color (filled variant)
- Icon alignment
- Bold title + body text
- Close button (×) in corner

**Interactions**:
- Dismiss/close button
- Can contain interactive content
- Links within content

**Use Cases**:
- Important notices
- Success messages
- Warning alerts
- Error notifications
- Informational tips

---

#### 2.3 Progress Bar
**Web Component**: `<wa-progress-bar>`

**Purpose**: Linear progress indicator

**Key Features**:
- Determinate (specific percentage)
- Indeterminate (loading animation)
- Multiple variants (primary, success, warning, danger)
- Label support (inside or outside)
- Striped pattern option
- Height customization

**Visual Patterns**:
- Horizontal bar with fill
- Rounded corners
- Animated fill transition
- Optional stripes with animation
- Background contrast

**Interactions**:
- Static display (updates via attribute)
- No direct user interaction

**Use Cases**:
- File upload progress
- Form completion
- Task progress
- Loading indicators
- Score/rating display

---

#### 2.4 Progress Ring
**Web Component**: `<wa-progress-ring>`

**Purpose**: Circular progress indicator

**Key Features**:
- Determinate (specific percentage)
- Indeterminate (spinning animation)
- Customizable size
- Customizable stroke width
- Label slot (center text)
- Multiple colors

**Visual Patterns**:
- Circular stroke path
- Clockwise fill animation
- Center content area
- Smooth transitions

**Interactions**:
- Static display (updates via attribute)
- No direct user interaction

**Use Cases**:
- Upload/download progress
- Timer visualization
- Score display (percentage)
- Loading spinners
- Countdown timers

---

#### 2.5 Skeleton
**Web Component**: `<wa-skeleton>`

**Purpose**: Placeholder for loading content (shimmer effect)

**Key Features**:
- Animated shimmer effect
- Multiple shapes (rectangle, circle)
- Customizable size
- Paragraph simulation (multiple lines)
- Pulse or shimmer animation

**Visual Patterns**:
- Gray placeholder shapes
- Subtle shimmer animation
- Matches content structure
- Fades out when content loads

**Interactions**:
- No user interaction
- Purely visual placeholder

**Use Cases**:
- Content loading placeholders
- Card skeletons
- List item skeletons
- Profile image placeholders
- Text content loading

---

#### 2.6 Spinner
**Web Component**: `<wa-spinner>`

**Purpose**: Animated loading indicator

**Key Features**:
- Circular spinning animation
- Multiple sizes
- Customizable colors
- Stroke width options
- Accessibility labels

**Visual Patterns**:
- Rotating circle segment
- Smooth continuous animation
- Centered display
- Transparent background

**Interactions**:
- No user interaction
- Pure loading indicator

**Use Cases**:
- Page loading
- Button loading states
- Content fetching
- Background processes
- Async operation feedback

---

#### 2.7 Tag
**Web Component**: `<wa-tag>`

**Purpose**: Removable label or category indicator

**Key Features**:
- Multiple variants (neutral, primary, success, warning, danger)
- Multiple sizes (small, medium, large)
- Removable (close button)
- Pill style
- Icon support

**Visual Patterns**:
- Pill shape (fully rounded)
- Solid or subtle background
- Close button (×) on hover
- Icon + text layout
- Compact padding

**Interactions**:
- Click to remove (fires event)
- Hover shows remove button
- Keyboard navigation

**Use Cases**:
- Removable filters
- Selected items
- Category tags
- Keyword labels
- Multi-select displays

---

#### 2.8 Tooltip
**Web Component**: `<wa-tooltip>`

**Purpose**: Contextual information on hover/focus

**Key Features**:
- Positioning (top, right, bottom, left)
- Auto-positioning (flips if no space)
- Trigger options (hover, focus, click)
- Delay customization
- Arrow indicator
- Rich content support (not just text)

**Visual Patterns**:
- Dark background (high contrast)
- Small arrow pointing to trigger
- Subtle shadow
- Fade in/out animation
- Max-width constraint

**Interactions**:
- Hover to show
- Focus to show (keyboard)
- Touch to show (mobile)
- Auto-hide on blur/leave
- Escape to dismiss

**Use Cases**:
- Icon explanations
- Disabled button reasons
- Abbreviated text expansion
- Help text
- Keyboard shortcut hints

---

### 3. Form Controls

**Purpose**: Input components for collecting user data

#### 3.1 Checkbox
**Web Component**: `<wa-checkbox>`

**Purpose**: Binary choice input (checked/unchecked)

**Key Features**:
- Checked, unchecked, indeterminate states
- Disabled state
- Required validation
- Invalid state
- Label association
- Custom icon support
- Value binding

**Visual Patterns**:
- Square box with checkmark
- Indeterminate state (dash)
- Focus ring
- Smooth check animation
- Color variants

**Interactions**:
- Click to toggle
- Space to toggle (keyboard)
- Label click toggles
- Form integration

**Use Cases**:
- Agree to terms
- Multi-select options
- Feature toggles
- List item selection
- Indeterminate parent checkboxes

---

#### 3.2 Color Picker
**Web Component**: `<wa-color-picker>`

**Purpose**: Select color with visual picker

**Key Features**:
- Hex, RGB, HSL input formats
- Visual color grid
- Hue slider
- Opacity slider
- Eye dropper tool (browser support)
- Preset swatches
- No alpha option
- Input field for manual entry

**Visual Patterns**:
- Color preview swatch
- Saturation/lightness grid
- Hue slider bar
- Opacity slider (when enabled)
- Recent colors display
- Dropdown panel

**Interactions**:
- Click to open picker
- Drag on grid to select
- Drag slider for hue
- Type hex/rgb values
- Click eye dropper
- Select from swatches

**Use Cases**:
- Theme customization
- Design tools
- Brand color selection
- UI personalization
- Graphics applications

---

#### 3.3 Input
**Web Component**: `<wa-input>`

**Purpose**: Single-line text input with enhancements

**Key Features**:
- All HTML input types (text, email, password, number, tel, url, date, etc.)
- Placeholder text
- Prefix/suffix icons or text
- Clear button
- Password toggle (show/hide)
- Size variants (small, medium, large)
- Disabled state
- Readonly state
- Required validation
- Pattern validation
- Min/max length
- Help text

**Visual Patterns**:
- Rounded border
- Focus border highlight
- Icon alignment (prefix/suffix)
- Clear button on right
- Password toggle eye icon
- Error state (red border)
- Help text below input

**Interactions**:
- Type to input
- Click to focus
- Clear button removes text
- Password toggle shows/hides
- Validation on blur/submit
- Enter key submits form

**Use Cases**:
- Text entry
- Email input
- Password fields
- Search boxes
- Number inputs
- Phone numbers
- URLs

---

#### 3.4 Option
**Web Component**: `<wa-option>` (used within `<wa-select>`)

**Purpose**: Individual option within select dropdown

**Key Features**:
- Value attribute
- Disabled state
- Selected state
- Custom content via slots
- Icon support

**Visual Patterns**:
- Text + optional icon
- Hover background
- Selected checkmark
- Disabled opacity

**Interactions**:
- Click to select
- Keyboard navigation
- Scroll into view when selected

**Use Cases**:
- Dropdown options
- Select choices
- Menu items

---

#### 3.5 Radio
**Web Component**: `<wa-radio>`

**Purpose**: Single choice within a group

**Key Features**:
- Checked/unchecked states
- Disabled state
- Required validation
- Label association
- Value binding
- Name grouping (mutually exclusive)

**Visual Patterns**:
- Circular button
- Filled dot when selected
- Focus ring
- Smooth selection animation

**Interactions**:
- Click to select
- Arrow keys to navigate group
- Space to select (keyboard)
- Form integration

**Use Cases**:
- Single choice questions
- Payment method selection
- Shipping option selection
- Settings with exclusive options

---

#### 3.6 Radio Group
**Web Component**: `<wa-radio-group>`

**Purpose**: Container for radio buttons with shared name

**Key Features**:
- Fieldset-like grouping
- Label/legend support
- Keyboard navigation (arrow keys)
- Validation support
- Required field
- Error messages
- Help text

**Visual Patterns**:
- Vertical or horizontal layout
- Group label (legend)
- Spacing between options
- Error state styling

**Interactions**:
- Arrow keys navigate and select
- Tab moves to next field
- Automatic mutual exclusivity

**Use Cases**:
- Single-choice questions
- Option selection forms
- Configuration choices

---

#### 3.7 Rating
**Web Component**: `<wa-rating>`

**Purpose**: Star rating input and display

**Key Features**:
- Max rating (default 5)
- Precision (full, half, decimal)
- Readonly display mode
- Custom icons (default stars)
- Label/value display
- Hover preview
- Clearable option

**Visual Patterns**:
- Row of star icons
- Filled/empty states
- Half-star support
- Hover highlighting
- Color variants (yellow default)

**Interactions**:
- Click to rate
- Hover to preview
- Keyboard arrows to change
- Readonly mode (display only)

**Use Cases**:
- Product ratings
- Review scores
- Satisfaction surveys
- Skill level indicators
- Content quality ratings

---

#### 3.8 Select
**Web Component**: `<wa-select>`

**Purpose**: Dropdown selection with enhanced features

**Key Features**:
- Single/multiple selection
- Searchable/filterable
- Placeholder text
- Prefix/suffix content
- Clear button
- Disabled state
- Required validation
- Size variants
- Max options displayed
- Label support
- Help text

**Visual Patterns**:
- Dropdown trigger button
- Chevron indicator
- Selected value display
- Multi-select chips/tags
- Dropdown panel with options
- Search input (if enabled)
- Clear button (×)

**Interactions**:
- Click to open dropdown
- Type to search/filter
- Arrow keys navigate
- Enter to select
- Escape to close
- Clear button removes selection
- Multiple: click items to toggle

**Use Cases**:
- Dropdown selections
- Country/region pickers
- Multi-select filters
- Autocomplete fields
- Category selection

---

#### 3.9 Slider (Range)
**Web Component**: `<wa-range>`

**Purpose**: Numeric input via draggable slider

**Key Features**:
- Min/max values
- Step increment
- Single or dual handles (range)
- Tooltip showing value
- Disabled state
- Custom formatting
- Tick marks

**Visual Patterns**:
- Horizontal track
- Filled track (before handle)
- Circular handle(s)
- Value tooltip on hover/drag
- Tick marks below track

**Interactions**:
- Drag handle to change
- Click track to jump
- Arrow keys to increment
- Page Up/Down for larger steps
- Home/End for min/max

**Use Cases**:
- Volume controls
- Price range filters
- Numeric settings
- Opacity/transparency
- Zoom level

---

#### 3.10 Switch (Toggle)
**Web Component**: `<wa-switch>`

**Purpose**: Binary on/off toggle

**Key Features**:
- Checked/unchecked states
- Disabled state
- Required validation
- Label association
- Size variants (small, medium, large)
- Custom on/off text

**Visual Patterns**:
- Pill-shaped track
- Circular handle that slides
- Color change (gray → primary)
- Smooth slide animation
- Optional labels (on/off)

**Interactions**:
- Click to toggle
- Space to toggle (keyboard)
- Label click toggles
- Drag handle (optional)

**Use Cases**:
- Feature toggles
- Settings on/off
- Notifications enable/disable
- Dark mode toggle
- Privacy settings

---

#### 3.11 Textarea
**Web Component**: `<wa-textarea>`

**Purpose**: Multi-line text input

**Key Features**:
- Auto-resize option
- Min/max rows
- Placeholder text
- Disabled state
- Readonly state
- Required validation
- Max length counter
- Resize handle (manual)
- Help text

**Visual Patterns**:
- Larger input box
- Rounded border
- Focus border highlight
- Character counter (bottom right)
- Resize handle (corner)
- Error state styling

**Interactions**:
- Type multi-line text
- Enter for new line
- Manual resize (drag corner)
- Auto-resize as typing
- Tab to indent (optional)

**Use Cases**:
- Comments
- Messages
- Descriptions
- Reviews
- Notes
- Long-form text entry

---

### 4. Imagery

**Purpose**: Components for displaying visual content

#### 4.1 Animated Image
**Web Component**: `<wa-animated-image>`

**Purpose**: Play/pause animated images (GIF, WebP, APNG)

**Key Features**:
- Play/pause control
- Play on hover/intersection
- Initial frame display
- Loading states
- Alt text support
- Fallback static image

**Visual Patterns**:
- Image display with overlay controls
- Play/pause button
- Loading indicator
- Static preview before load

**Interactions**:
- Click to play/pause
- Hover to play (optional)
- Automatic pause when out of view
- Lazy loading support

**Use Cases**:
- Animated illustrations
- Demo GIFs with user control
- Performance optimization
- Accessibility control
- Reduced motion support

---

#### 4.2 Avatar
**Web Component**: `<wa-avatar>`

**Purpose**: User profile image with fallback

**Key Features**:
- Image source
- Initials fallback
- Icon fallback
- Multiple shapes (circle, square, rounded-square)
- Multiple sizes
- Status badge support
- Group overlap support

**Visual Patterns**:
- Circular or square container
- Image fill/cover
- Initials centered
- Icon centered
- Status badge overlay (corner)
- Border/outline option

**Interactions**:
- Static display
- Clickable (optional)
- Hover effects (optional)

**Use Cases**:
- User profiles
- Comment authors
- Team members
- Contact lists
- User mentions
- Avatar groups/stacks

---

#### 4.3 Carousel
**Web Component**: `<wa-carousel>`

**Purpose**: Slideshow container with navigation

**Key Features**:
- Horizontal/vertical orientation
- Navigation buttons (prev/next)
- Pagination dots
- Autoplay with interval
- Loop option
- Slides per view
- Scroll snap behavior
- Touch/swipe support
- Keyboard navigation
- Transition effects

**Visual Patterns**:
- Overflow container
- Smooth scroll transitions
- Navigation arrows
- Pagination indicators
- Slide spacing (gap)

**Interactions**:
- Click arrows to navigate
- Click pagination dots
- Swipe on touch devices
- Arrow keys to navigate
- Autoplay pause on hover
- Touch drag

**Use Cases**:
- Image galleries
- Product showcases
- Testimonial sliders
- Featured content
- Onboarding flows
- Banner rotations

---

#### 4.4 Carousel Item
**Web Component**: `<wa-carousel-item>` (used within `<wa-carousel>`)

**Purpose**: Individual slide within carousel

**Key Features**:
- Any content (images, text, mixed)
- Lazy loading support
- Active state
- Snap alignment

**Visual Patterns**:
- Full slide container
- Centered content
- Aspect ratio maintenance
- Padding/spacing

**Interactions**:
- Scroll into view
- No direct interaction (carousel controls)

**Use Cases**:
- Image slides
- Content cards
- Testimonials
- Product images

---

#### 4.5 Comparison (Image Compare)
**Web Component**: `<wa-image-comparer>`

**Purpose**: Before/after image comparison with slider

**Key Features**:
- Two images (before/after)
- Draggable divider
- Initial position (default 50%)
- Vertical/horizontal orientation
- Handle customization
- Keyboard navigation

**Visual Patterns**:
- Overlaid images
- Vertical or horizontal divider
- Draggable handle/grip
- Before/after labels (optional)
- Smooth reveal animation

**Interactions**:
- Drag divider to compare
- Click to reposition
- Arrow keys to move
- Touch drag support

**Use Cases**:
- Photo editing comparisons
- Design revisions
- Product improvements
- Treatment results
- Map overlays
- Historical comparisons

---

#### 4.6 Icon
**Web Component**: `<wa-icon>`

**Purpose**: Display icons from icon library

**Key Features**:
- Icon library integration (Font Awesome, Bootstrap Icons, etc.)
- Name-based selection
- Size customization
- Color customization (CSS)
- Label/aria-label support
- Flip/rotate options

**Visual Patterns**:
- SVG icon display
- Scalable sizing
- Inline alignment
- Color inheritance

**Interactions**:
- Static display
- Clickable (when wrapped)

**Use Cases**:
- Button icons
- Status indicators
- Navigation icons
- List markers
- Decorative elements
- Semantic indicators

---

#### 4.7 Zoomable Frame (Image Zoom)
**Web Component**: `<wa-image-zoom>` or similar

**Purpose**: Image with zoom/pan capabilities

**Key Features**:
- Click to zoom in/out
- Pinch to zoom (touch)
- Pan when zoomed
- Double-click to toggle
- Reset button
- Max zoom level
- Smooth animations

**Visual Patterns**:
- Image container
- Zoom controls overlay
- Cursor change (zoom in/out)
- Smooth scale transitions

**Interactions**:
- Click to zoom
- Drag to pan
- Scroll wheel to zoom
- Pinch gesture (mobile)
- Double-click toggle
- Reset button

**Use Cases**:
- Product detail images
- Artwork viewing
- Map exploration
- Technical diagrams
- Photo galleries
- Document previews

---

### 5. Navigation

**Purpose**: Components for site/app navigation

#### 5.1 Breadcrumb
**Web Component**: `<wa-breadcrumb>`

**Purpose**: Hierarchical navigation path display

**Key Features**:
- Separator customization
- Truncation support
- Clickable path items
- Current page indicator
- Icon support
- Collapse long paths

**Visual Patterns**:
- Horizontal list
- Separator between items (/, >, etc.)
- Link styling for ancestors
- Plain text for current
- Compact sizing

**Interactions**:
- Click to navigate to level
- Hover highlights links
- Keyboard navigation

**Use Cases**:
- Website hierarchies
- File system paths
- Multi-step processes
- Category navigation
- Location in app

---

#### 5.2 Breadcrumb Item
**Web Component**: `<wa-breadcrumb-item>` (used within `<wa-breadcrumb>`)

**Purpose**: Individual item in breadcrumb trail

**Key Features**:
- Link or text content
- Icon prefix support
- Current/active indicator
- Custom separator

**Visual Patterns**:
- Inline display
- Link underline on hover
- Separator after (except last)
- Current page emphasis

**Interactions**:
- Click to navigate (if link)
- No interaction if current

**Use Cases**:
- Path segments
- Category levels
- Step indicators

---

#### 5.3 Tab
**Web Component**: `<wa-tab>` (used within `<wa-tab-group>`)

**Purpose**: Individual tab button for content switching

**Key Features**:
- Active/inactive states
- Disabled state
- Icon support
- Badge/count support
- Closeable option (×)
- Custom content via slots

**Visual Patterns**:
- Button-like appearance
- Active indicator (border, background)
- Icon + label layout
- Close button on hover
- Badge overlay

**Interactions**:
- Click to activate
- Keyboard navigation (arrows)
- Close button (if enabled)
- Focus management

**Use Cases**:
- Content sections
- Settings panels
- Document tabs
- View modes

---

#### 5.4 Tab Group
**Web Component**: `<wa-tab-group>`

**Purpose**: Container for tabs with associated panels

**Key Features**:
- Horizontal/vertical orientation
- Placement (top, bottom, start, end)
- Scroll behavior (long tab lists)
- Activation mode (auto/manual)
- Keyboard navigation
- Panel lazy loading

**Visual Patterns**:
- Tab bar with tabs
- Active tab indicator (line, background)
- Content panel below/beside
- Smooth panel transitions
- Scroll arrows (if needed)

**Interactions**:
- Click tabs to switch
- Arrow keys navigate tabs
- Tab key moves to panel
- Swipe panels (mobile)
- Scroll tab bar if overflow

**Use Cases**:
- Multi-section interfaces
- Settings categories
- Data views
- Documentation sections
- Dashboard panels

---

#### 5.5 Tab Panel
**Web Component**: `<wa-tab-panel>` (used within `<wa-tab-group>`)

**Purpose**: Content panel associated with a tab

**Key Features**:
- Active/inactive states
- Lazy content loading
- Custom content via slots
- Animations (fade, slide)

**Visual Patterns**:
- Full-width content area
- Fade in/out transition
- Padding for content
- Hidden when inactive

**Interactions**:
- No direct interaction
- Displayed when tab active

**Use Cases**:
- Tab content containers
- Section content

---

#### 5.6 Tree
**Web Component**: `<wa-tree>`

**Purpose**: Hierarchical tree view with expandable nodes

**Key Features**:
- Nested items
- Expand/collapse
- Selection support
- Lazy loading
- Checkbox support (multi-select)
- Custom expand/collapse icons
- Indentation levels
- Keyboard navigation

**Visual Patterns**:
- Indented hierarchy
- Expand/collapse icons (▶ ▼)
- Connection lines (optional)
- Selected item highlight
- Hover backgrounds

**Interactions**:
- Click to expand/collapse
- Click item to select
- Arrow keys navigate
- Enter to toggle expand
- Space to select
- Checkboxes for multi-select

**Use Cases**:
- File explorers
- Organization charts
- Category hierarchies
- Nested menus
- Site maps
- Folder structures

---

#### 5.7 Tree Item
**Web Component**: `<wa-tree-item>` (used within `<wa-tree>`)

**Purpose**: Individual node in tree view

**Key Features**:
- Expandable/collapsible
- Selected state
- Disabled state
- Lazy loading children
- Icon support
- Checkbox support
- Custom content

**Visual Patterns**:
- Indentation for depth
- Expand icon if has children
- Icon + label layout
- Selection highlight
- Checkbox (if enabled)

**Interactions**:
- Click to select
- Click expand icon to toggle
- Keyboard navigation
- Checkbox toggle

**Use Cases**:
- Tree nodes
- Folder items
- Hierarchy entries

---

### 6. Organization

**Purpose**: Components for structuring and organizing content

#### 6.1 Card
**Web Component**: `<wa-card>`

**Purpose**: Contained content container with optional sections

**Key Features**:
- Header slot
- Body slot (main content)
- Footer slot
- Image slot
- Bordered/shadow styles
- Hover effects
- Clickable card support

**Visual Patterns**:
- Rounded corners
- Border or shadow
- Sectioned layout (header/body/footer)
- Image at top (common pattern)
- Padding for content
- Hover elevation

**Interactions**:
- Entire card clickable (optional)
- Internal interactive elements
- Hover effects

**Use Cases**:
- Product cards
- User profiles
- Article previews
- Dashboard widgets
- Content blocks
- Feature highlights

---

#### 6.2 Details (Disclosure)
**Web Component**: `<wa-details>`

**Purpose**: Expandable content section (enhanced `<details>`)

**Key Features**:
- Summary/header slot
- Expandable content
- Open/closed states
- Smooth animation
- Icon customization (expand/collapse)
- Disabled state
- Events (open, close)

**Visual Patterns**:
- Summary row with expand icon
- Chevron/arrow indicator
- Content revealed below
- Slide down/up animation
- Border/divider options

**Interactions**:
- Click summary to toggle
- Enter/Space to toggle
- Smooth expand animation
- Auto-scroll into view

**Use Cases**:
- Accordions
- FAQ sections
- Collapsible panels
- Settings sections
- Content disclosures
- Progressive disclosure

---

#### 6.3 Dialog (Modal)
**Web Component**: `<wa-dialog>`

**Purpose**: Modal dialog overlay

**Key Features**:
- Modal (blocks background) or non-modal
- Backdrop/overlay
- Close button
- Header slot
- Body slot
- Footer slot
- Escape to close
- Click-outside to close (optional)
- Focus trapping
- Return focus on close
- Size variants (small, medium, large, full)
- Animations

**Visual Patterns**:
- Centered overlay
- Dark backdrop
- White/card background
- Shadow/elevation
- Close button (×) in corner
- Header with title
- Footer with actions
- Scrollable body

**Interactions**:
- Open programmatically
- Escape to close
- Close button click
- Click backdrop (optional)
- Focus trap (tab cycles)
- Action buttons (close, confirm)

**Use Cases**:
- Confirmation dialogs
- Forms in overlay
- Image lightboxes
- Alert messages
- Content modals
- Multi-step wizards

---

#### 6.4 Divider
**Web Component**: `<wa-divider>`

**Purpose**: Visual separator between content

**Key Features**:
- Horizontal/vertical orientation
- Solid/dashed/dotted styles
- Custom thickness
- Spacing customization
- Label/text support (divides line)
- Icon support

**Visual Patterns**:
- Thin line (1px default)
- Full-width (horizontal) or full-height (vertical)
- Gray color (subtle)
- Label breaks line with padding
- Centered text/icon

**Interactions**:
- No interaction (purely visual)

**Use Cases**:
- Section separation
- List item dividers
- Vertical toolbar separators
- Content breaks
- "OR" separators in forms
- Visual organization

---

#### 6.5 Drawer (Side Panel)
**Web Component**: `<wa-drawer>`

**Purpose**: Slide-in panel from screen edge

**Key Features**:
- Placement (left, right, top, bottom)
- Overlay (blocks background) or inline
- Size customization
- Close button
- Header/body/footer slots
- Escape to close
- Click-outside to close (optional)
- Focus trapping
- Animations (slide in/out)

**Visual Patterns**:
- Slides from edge
- Full-height (left/right) or full-width (top/bottom)
- Dark backdrop (if modal)
- Shadow for elevation
- Close button (×)
- Smooth slide animation

**Interactions**:
- Open programmatically or via trigger
- Escape to close
- Close button
- Click backdrop (optional)
- Swipe to close (mobile)
- Focus trap

**Use Cases**:
- Navigation menus
- Filters panel
- Settings panel
- Shopping cart
- Notifications panel
- Secondary content

---

#### 6.6 Page
**Web Component**: `<wa-page>` (not in original list but common pattern)

**Purpose**: Full application layout wrapper

**Key Features**:
- Header slot (top)
- Sidebar slot (left/right)
- Main content slot
- Footer slot
- Responsive layout
- Sticky header/footer
- Collapsible sidebar

**Visual Patterns**:
- Grid or flex layout
- Full viewport height
- Responsive breakpoints
- Scroll management
- Z-index layering

**Interactions**:
- Sidebar toggle
- Scroll behavior
- Responsive collapse

**Use Cases**:
- Application shells
- Dashboard layouts
- Admin panels
- Documentation sites

---

#### 6.7 Scroller (Scrollable Area)
**Web Component**: `<wa-scroller>` (implied from docs)

**Purpose**: Custom scrollable container with enhanced features

**Key Features**:
- Horizontal/vertical/both scrolling
- Scroll shadows (indicate more content)
- Scroll indicators/arrows
- Snap points
- Smooth scrolling
- Programmatic scroll control

**Visual Patterns**:
- Container with overflow
- Scrollbars (native or custom)
- Shadow gradients at edges
- Scroll indicator arrows

**Interactions**:
- Mouse wheel scroll
- Touch drag scroll
- Scrollbar drag
- Arrow button clicks
- Keyboard navigation

**Use Cases**:
- Long content areas
- Horizontal galleries
- Data tables
- Code blocks
- Chat messages
- Timeline scrolling

---

#### 6.8 Split Panel
**Web Component**: `<wa-split-panel>`

**Purpose**: Resizable two-panel layout with draggable divider

**Key Features**:
- Horizontal/vertical split
- Draggable divider
- Min/max sizes for panels
- Initial position
- Snap points
- Disabled resize
- Keyboard resize support

**Visual Patterns**:
- Two panels side-by-side or stacked
- Divider bar between
- Grab handle indicator
- Cursor change on hover
- Smooth resize

**Interactions**:
- Drag divider to resize
- Double-click divider to reset
- Keyboard arrows to resize
- Touch drag support

**Use Cases**:
- Code editor + preview
- Sidebar + main content
- Master/detail views
- File explorer + content
- Settings + preview
- Compare views

---

### 7. Utilities

**Purpose**: Helper components for formatting and functionality

#### 7.1 Animation
**Web Component**: `<wa-animation>`

**Purpose**: Declarative animations via Web Animations API

**Key Features**:
- Keyframe definitions
- Duration/delay control
- Easing functions
- Iteration count
- Direction (normal, reverse, alternate)
- Play/pause/cancel control
- Events (finish, cancel)

**Visual Patterns**:
- Wraps animated content
- No visual component itself
- Smooth transitions

**Interactions**:
- Programmatic control
- Event-driven triggers

**Use Cases**:
- Attention-grabbing effects
- Loading animations
- Transitions
- Interactive feedback
- Micro-interactions

---

#### 7.2 Format Bytes
**Web Component**: `<wa-format-bytes>`

**Purpose**: Display byte values in human-readable format

**Key Features**:
- Auto-unit selection (B, KB, MB, GB, TB)
- Decimal precision control
- Locale formatting
- Value input (bytes)

**Visual Patterns**:
- Inline text display
- Formatted number + unit
- Comma separators

**Interactions**:
- Static display (updates via attribute)

**Use Cases**:
- File sizes
- Storage usage
- Download sizes
- Memory usage
- Data transfer amounts

---

#### 7.3 Format Date
**Web Component**: `<wa-format-date>`

**Purpose**: Display dates in various formats with i18n

**Key Features**:
- Multiple format styles (short, medium, long, full)
- Locale support
- Time zone handling
- Relative formatting
- Custom format strings
- Calendar system support

**Visual Patterns**:
- Inline text display
- Locale-appropriate formatting
- Date/time components

**Interactions**:
- Static display (updates via attribute)
- Hover for full date (optional)

**Use Cases**:
- Post timestamps
- Event dates
- Deadlines
- Activity logs
- Schedules
- Birthdays

---

#### 7.4 Format Number
**Web Component**: `<wa-format-number>`

**Purpose**: Display numbers with locale-aware formatting

**Key Features**:
- Locale formatting
- Decimal precision
- Thousands separators
- Currency formatting
- Percent formatting
- Unit formatting (km, kg, etc.)
- Sign display (positive/negative)

**Visual Patterns**:
- Inline text display
- Locale-appropriate separators
- Currency symbols
- Unit labels

**Interactions**:
- Static display (updates via attribute)

**Use Cases**:
- Prices
- Statistics
- Scores
- Quantities
- Percentages
- Measurements

---

#### 7.5 Include (HTML Include)
**Web Component**: `<wa-include>`

**Purpose**: Load and display external HTML content

**Key Features**:
- Fetch HTML from URL
- Inline content replacement
- Loading state
- Error handling
- Mode (replace, append, prepend)

**Visual Patterns**:
- Invisible wrapper
- Shows loading state
- Renders fetched content

**Interactions**:
- Automatic fetch on mount
- Manual trigger option
- Reload capability

**Use Cases**:
- Content fragments
- Partial templates
- Reusable sections
- Dynamic content loading
- Component composition

---

#### 7.6 Mutation Observer
**Web Component**: `<wa-mutation-observer>`

**Purpose**: Declarative DOM mutation observation

**Key Features**:
- Watch for DOM changes
- Attribute changes
- Child list changes
- Subtree monitoring
- Events on mutations

**Visual Patterns**:
- Invisible wrapper
- No visual component

**Interactions**:
- Passive observation
- Event emission

**Use Cases**:
- DOM change detection
- Content monitoring
- Dynamic updates
- Accessibility features
- Analytics tracking

---

#### 7.7 Popover
**Web Component**: `<wa-popover>`

**Purpose**: Popover API wrapper with enhancements

**Key Features**:
- Anchor to trigger element
- Positioning (all sides)
- Auto-positioning (flip)
- Arrow indicator
- Click outside to close
- Trigger behaviors (click, hover, focus)
- Accessibility support

**Visual Patterns**:
- Floating panel
- Arrow pointing to anchor
- Shadow/border
- Z-index layering

**Interactions**:
- Open via trigger
- Close via outside click
- Escape to close
- Focus management

**Use Cases**:
- Action menus
- Help popovers
- Rich tooltips
- Context menus
- Form helpers

---

#### 7.8 Popup
**Web Component**: `<wa-popup>`

**Purpose**: Low-level popup positioning utility

**Key Features**:
- Anchor-based positioning
- All positioning strategies
- Auto-flip/shift
- Arrow support
- Offset control
- Boundary detection
- Middleware support

**Visual Patterns**:
- Positioned container
- No default styling
- Arrow element

**Interactions**:
- Programmatic control
- Position updates

**Use Cases**:
- Building block for tooltips
- Building block for dropdowns
- Building block for menus
- Custom positioned elements

---

#### 7.9 Relative Time
**Web Component**: `<wa-relative-time>`

**Purpose**: Display time relative to now ("2 hours ago")

**Key Features**:
- Auto-updating (live)
- Locale support
- Sync interval control
- Format styles (narrow, short, long)
- Numeric option (always, auto)
- Hover shows absolute time

**Visual Patterns**:
- Inline text display
- Updates automatically
- Tooltip with full date

**Interactions**:
- Static display (auto-updates)
- Hover for full timestamp

**Use Cases**:
- Post timestamps
- Activity feeds
- Comment times
- Last updated indicators
- Time-sensitive content

---

#### 7.10 Resize Observer
**Web Component**: `<wa-resize-observer>`

**Purpose**: Declarative element resize observation

**Key Features**:
- Watch element size changes
- Border box / content box observation
- Events with size data
- Debouncing support

**Visual Patterns**:
- Invisible wrapper
- No visual component

**Interactions**:
- Passive observation
- Event emission

**Use Cases**:
- Responsive components
- Layout adjustments
- Chart resizing
- Adaptive interfaces
- Performance monitoring

---

## Layout Primitives

**Purpose**: Composable CSS layout utilities (not Web Components)

### 8.1 Stack
**CSS Class**: `.wa-stack` or custom

**Purpose**: Vertical spacing between children (lobotomized owl selector)

**Key Features**:
- Automatic margin-top spacing
- First child excluded
- Configurable gap size
- Responsive variants
- Nesting support

**Visual Patterns**:
- Vertical spacing
- Consistent rhythm
- Collapsible (margin-top, not padding)

**CSS Pattern**:
```css
.stack > * + * {
  margin-top: var(--space, 1rem);
}
```

**Use Cases**:
- Content flow
- Form fields
- Article sections
- Card content
- List of elements

---

### 8.2 Cluster
**CSS Class**: `.wa-cluster` or custom

**Purpose**: Horizontal grouping with wrapping

**Key Features**:
- Flexbox wrapping
- Gap spacing
- Horizontal/vertical alignment
- Justification options

**Visual Patterns**:
- Horizontal flow
- Wraps to next line
- Even spacing
- Tag clouds pattern

**CSS Pattern**:
```css
.cluster {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap, 1rem);
}
```

**Use Cases**:
- Tag lists
- Button groups
- Badges
- Toolbar items
- Navigation items

---

### 8.3 Grid
**CSS Class**: `.wa-grid` or custom

**Purpose**: Responsive grid layouts

**Key Features**:
- Auto-fit / auto-fill columns
- Min/max column width
- Gap spacing
- Responsive breakpoints

**Visual Patterns**:
- Equal-width columns
- Auto-wrapping rows
- Consistent spacing
- Card grids

**CSS Pattern**:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--gap, 1rem);
}
```

**Use Cases**:
- Card grids
- Image galleries
- Product listings
- Dashboard layouts
- Masonry-style layouts

---

### 8.4 Frame
**CSS Class**: `.wa-frame` or custom

**Purpose**: Aspect ratio containers

**Key Features**:
- Fixed aspect ratios (16:9, 4:3, 1:1, etc.)
- Centered content
- Object-fit control
- Responsive

**Visual Patterns**:
- Maintains aspect ratio
- Centers content
- No content overflow

**CSS Pattern**:
```css
.frame {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Use Cases**:
- Video containers
- Image containers
- Avatar shapes
- Card images
- Thumbnails

---

### 8.5 Split
**CSS Class**: `.wa-split` or custom

**Purpose**: Split content between start and end

**Key Features**:
- Flexbox layout
- Start/end alignment
- Gap spacing
- Vertical centering

**Visual Patterns**:
- Space between items
- Start aligned on left
- End aligned on right
- Vertically centered

**CSS Pattern**:
```css
.split {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap, 1rem);
}
```

**Use Cases**:
- Header (logo + nav)
- Card header (title + actions)
- List items (content + badge)
- Toolbar (actions left/right)

---

### 8.6 Flank
**CSS Class**: `.wa-flank` or custom

**Purpose**: Push items to edges with center spacer

**Key Features**:
- Three-section layout
- Start/center/end
- Center takes remaining space
- Alignment options

**Visual Patterns**:
- Items on edges
- Center section expands
- Balanced layout

**CSS Pattern**:
```css
.flank {
  display: flex;
  align-items: center;
}
.flank > :nth-child(2) {
  flex-grow: 1;
}
```

**Use Cases**:
- Toolbars
- Media objects
- Navigation bars
- Action bars

---

### 8.7 Align Items
**CSS Class**: `.wa-align-*`

**Purpose**: Flexbox/grid alignment utilities

**Key Features**:
- Start, center, end, baseline, stretch
- Horizontal and vertical
- Self-alignment overrides

**Visual Patterns**:
- Various alignment options
- Responsive variants

**Use Cases**:
- Fine-tuning layouts
- Vertical centering
- Baseline alignment

---

### 8.8 Gap
**CSS Class**: `.wa-gap-*`

**Purpose**: Spacing utilities for flex/grid

**Key Features**:
- Multiple size options
- Row and column gaps
- Responsive variants

**Visual Patterns**:
- Consistent spacing
- No margins needed

**Use Cases**:
- Grid spacing
- Flex spacing
- Layout composition

---

## Style Utilities

**Purpose**: Preset CSS classes for customization

### 9.1 Native Element Styles
**CSS Classes**: Applied to HTML elements

**Purpose**: Enhanced styling for native HTML

**Key Features**:
- Typography (headings, paragraphs)
- Links
- Lists (ul, ol, dl)
- Code/pre
- Tables
- Forms
- Blockquotes

**Use Cases**:
- Markdown content
- Blog posts
- Documentation
- Rich text areas

---

### 9.2 Color Utilities
**CSS Classes**: `.wa-color-*`, `.wa-bg-*`

**Purpose**: Color application classes

**Key Features**:
- Text colors
- Background colors
- Border colors
- Semantic colors (primary, success, warning, danger)
- Neutral grays

**Use Cases**:
- Quick styling
- State indication
- Theming

---

### 9.3 FOUCE Prevention
**CSS Classes**: `.wa-fouce-prevent`

**Purpose**: Flash of Unstyled Content prevention

**Key Features**:
- Hide until defined
- Custom element registration detection
- Progressive enhancement

**Use Cases**:
- Web component loading
- Prevent layout shift
- Smooth loading

---

### 9.4 Rounding Utilities
**CSS Classes**: `.wa-rounded-*`

**Purpose**: Border radius utilities

**Key Features**:
- Multiple sizes (none, sm, md, lg, full)
- Individual corners
- Responsive variants

**Use Cases**:
- Button styling
- Card corners
- Image shapes
- Container styling

---

### 9.5 Text Utilities
**CSS Classes**: `.wa-text-*`

**Purpose**: Typography utilities

**Key Features**:
- Font sizes
- Font weights
- Text alignment
- Text transforms
- Line heights
- Letter spacing

**Use Cases**:
- Quick typography
- Responsive text
- Emphasis

---

### 9.6 Visually Hidden
**CSS Class**: `.wa-visually-hidden`

**Purpose**: Hide content visually but keep for screen readers

**Key Features**:
- Accessible hiding
- Screen reader visible
- Focus visible (optional)

**Use Cases**:
- Skip links
- Icon labels
- Form labels
- Accessibility content

---

## Patterns Library

**Purpose**: Pre-built compositions for common scenarios

### 10.1 Blog & News Patterns

#### Banners
- Hero banners with background images
- Announcement banners
- Feature banners
- Call-to-action overlays

#### Call to Action
- CTA sections with buttons
- Newsletter signups
- Trial/demo CTAs
- Action-focused layouts

#### Category List
- Blog category navigation
- Tag clouds
- Topic filters
- Archive navigation

#### Contact Forms
- Contact information display
- Contact forms
- Map integration
- Social links

#### Featured Post
- Large post highlighting
- Image + text layouts
- Card-based features
- Hero post sections

#### Footer
- Multi-column footers
- Newsletter signups
- Social links
- Copyright/legal

#### Grid Section
- Post grid layouts
- Card grid patterns
- Responsive grids
- Masonry patterns

#### Header
- Site headers with navigation
- Logo + menu layouts
- Sticky headers
- Mobile navigation

#### Newsletter
- Newsletter signup forms
- Email capture
- Subscription boxes
- Exit intent patterns

#### Paywall
- Content gating
- Subscription prompts
- Preview + subscribe
- Membership CTAs

#### Post Footer
- Author information
- Share buttons
- Tags/categories
- Related posts
- Comments section

#### Post Header
- Title + metadata
- Author + date
- Featured image
- Breadcrumbs

#### Post List
- Article listings
- Archive pages
- Category pages
- Search results

#### Sign Up & Login
- Registration forms
- Login forms
- Social auth buttons
- Forgot password

#### Numbers/Stats
- Statistic displays
- Counter animations
- Achievement highlights
- Metric dashboards

#### Social Share
- Share button groups
- Social icons
- Share counts
- Native share API integration

#### Teams
- Team member grids
- Staff profiles
- Bio layouts
- Organization charts

#### Testimonials
- Customer quotes
- Review displays
- Rating integrations
- Carousel testimonials

---

### 10.2 Ecommerce Patterns

#### Category Filter
- Sidebar filters
- Faceted search
- Price ranges
- Attribute filters

#### Category Preview
- Category cards
- Collection showcases
- Shop by category
- Featured categories

#### Checkout Form
- Multi-step checkout
- Payment forms
- Shipping information
- Order review

#### Incentives
- Free shipping banners
- Discount badges
- Promotional sections
- Limited-time offers

#### Order History
- Past order lists
- Order details
- Reorder functionality
- Tracking information

#### Order Summary
- Cart summaries
- Price breakdowns
- Shipping costs
- Tax calculations

#### Product Lists
- Grid/list views
- Quick view
- Sorting/filtering
- Pagination

#### Product Overview
- Product details
- Image galleries
- Specifications
- Add to cart

#### Product Preview
- Product cards
- Quick info
- Pricing display
- Wishlist integration

#### Product Reviews
- Review listings
- Rating display
- Write review form
- Review filtering

#### Shopping Cart
- Cart items
- Quantity controls
- Remove items
- Cart totals
- Promo codes

---

### 10.3 Application Patterns

#### Comments
- Comment threads
- Reply functionality
- User avatars
- Timestamps

#### Data Display
- Tables
- Lists
- Cards
- Charts integration

#### Description List
- Key-value pairs
- Definition lists
- Property displays
- Metadata layouts

---

## Design Tokens

**Purpose**: Themeable CSS custom properties

### 11.1 Borders
- Border widths
- Border colors
- Border radius values

### 11.2 Color
- Primary palette
- Secondary palette
- Neutral grays
- Semantic colors (success, warning, danger, info)
- State colors (hover, active, focus)

### 11.3 Component Groups
- Token sets for specific component categories
- Consistent styling across related components

### 11.4 Focus
- Focus ring colors
- Focus ring widths
- Focus ring offsets
- Focus ring styles

### 11.5 Shadows
- Elevation levels (1-5)
- Shadow colors
- Shadow blur/spread values

### 11.6 Space
- Spacing scale (0-12)
- Gap sizes
- Padding/margin values

### 11.7 Transitions
- Duration values (fast, base, slow)
- Easing functions
- Animation timing

### 11.8 Typography
- Font families (primary, monospace)
- Font sizes (xs-5xl)
- Font weights (light, normal, medium, semibold, bold)
- Line heights
- Letter spacing

---

## Organizational Philosophy

### Semantic Categorization
- Components grouped by **purpose/function**
- Clear, descriptive category names
- Flat structure (no deep nesting)

### Composition Over Configuration
- Small, focused components
- Composable patterns
- Utility-first approach
- Build complex from simple

### Progressive Enhancement
- Core functionality works everywhere
- Enhanced features in modern browsers
- Accessibility first (a11y)
- Semantic HTML foundation

### Framework Agnostic
- Web Components (Lit)
- Works with any framework
- Vanilla JS usage
- CDN, npm, or self-hosted

### Theming & Customization
- Design tokens foundation
- CSS custom properties
- Multiple themes
- Dark mode support
- Full customizability

### Developer Experience
- Clear documentation
- Searchable component library
- Visual previews
- Copy-paste patterns
- Comprehensive examples

---

## Summary Statistics

**Component Categories**: 8
**Total Components**: 50+
**Layout Primitives**: 8
**Style Utilities**: 6
**Pattern Categories**: 3 (Blog, Ecommerce, Application)
**Pattern Types**: 30+
**Design Token Categories**: 8

**Organizational Approach**: Purpose-based categorization with composable primitives and pre-built patterns for common use cases.

**Key Differentiator**: 100% component-based approach using Web Components, contrasted with SUAI's CSS-first philosophy with progressive enhancement via semantic tags.
