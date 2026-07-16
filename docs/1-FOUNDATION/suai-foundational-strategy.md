# SUAI Framework: Foundational Strategy

## Context and Scope

SUAI operates exclusively in client-side SPA environments. The framework does not address search engine indexing, does not provide meta information for crawlers, and does not implement WAI-ARIA compliance. These concerns are delegated to sister frameworks like PHRAW for alternative user experiences.

SUAI focuses on visual user experience optimization. Semantic structure serves developer experience and code organization, not assistive technology compatibility.


## 200% Semantic Strategy

### Standard HTML Foundation

SUAI preserves standard HTML5 semantic tags as the baseline structure. Elements like article, section, header, footer, nav, aside, and main provide meaningful document hierarchy for developer comprehension.

### Extended Semantic Vocabulary

SUAI extends HTML with unofficial semantic tags that clarify intent and improve code readability. These tags follow existing adoption patterns in the development community.

Aliases for clarity:
- text as alias for p
- button-link for a elements styled as buttons
- card for article in component contexts
- panel for aside in layout contexts

### Custom Semantic Elements

SUAI introduces su-prefixed elements for JavaScript-enhanced versions of standard tags. These elements maintain visual parity with their non-JavaScript counterparts while providing additional capabilities.

Pattern:
- p and text render identical styles
- su-text extends with JavaScript features like API translation, dynamic content loading, or real-time updates
- Developer chooses based on capability requirements

The visual output remains consistent. The semantic tag indicates capability level.


## 200% Visual Strategy

### CSS-First Architecture

SUAI achieves visual results through CSS and utility classes whenever possible. JavaScript components are reserved for capabilities that CSS cannot provide.

Non-component solutions:
- Toggle states using hidden checkbox inputs and CSS :checked selectors
- Popover interactions using native HTML popover attribute
- Form validation using native input type attributes and CSS :valid/:invalid
- Accordion patterns using details and summary elements
- Modal states using dialog element with CSS

### Zero Bloatware Policy

SUAI removes markup that serves assistive technology but provides no visual function. No aria attributes. No alt text unless the image is content rather than decoration. No role attributes. No tabindex manipulation for visual purposes.

Visual interfaces optimize for visual interaction. Screen readers, keyboard navigation, and alternative input methods are PHRAW's domain, not SUAI's concern.

The result is lean markup. Smaller bundle sizes. Faster rendering. Simplified maintenance.


## 200% Intelligent Strategy

### Human Intelligence Layer

SUAI's organizational patterns optimize for developer cognitive load. Sophisticated conventions reduce decision complexity.

Single root class per component. Semantic child selectors eliminate class proliferation. Utility grouping follows visual scan patterns: Layout properties, then Appearance properties, then State modifiers.

File organization mirrors mental models. Components in modules directory. Layouts in layouts directory. States in states directory. Themes in themes directory. The file system becomes navigation.

Naming conventions are explicit and consistent. Variants use double-dash notation. States use is- prefix. Layout utilities use l- prefix. The pattern repeats universally.

### AI Intelligence Layer

SUAI's structured organization enables AI code generation. Clear conventions mean AI tools generate consistent, predictable code without ambiguity.

Semantic HTML provides context hierarchy. Single root classes provide component boundaries. Utility patterns provide styling vocabulary. State prefixes provide interaction signals.

AI reads the structure and understands relationships. Component contains children. Children have semantic meaning. Layout utilities define spatial arrangement. Appearance utilities define visual properties. State utilities define conditional presentation.

The organization is machine-readable without being machine-centric. It serves human developers first. AI capability emerges as consequence, not requirement.

### Visual Experience Orchestration

The structural organization creates a side effect: visual experiences that AI can orchestrate intelligently. The semantic hierarchy maps to visual hierarchy. The component boundaries map to interaction boundaries. The utility patterns map to style variations.

AI tools can understand layout intention from semantic structure. They can modify visual presentation by adjusting utility classes. They can manage state by toggling state classes. They can create variations by applying variant modifiers.

This enables AI-assisted development where the assistant understands visual intent from code structure. Generate a card component. The AI knows article with header, section, footer. Adjust spacing. The AI knows layout utilities. Make it responsive. The AI knows breakpoint prefixes.

The intelligence is distributed. Humans provide intent. Structure provides context. AI provides execution.


## Implementation Principles

### Progressive Enhancement Path

Standard HTML tags provide baseline functionality without JavaScript. su- prefixed versions add capabilities progressively. Developers choose based on requirements.

Example progression:
- p for static text
- text for readable alias
- su-text for dynamic content updates, translations, or real-time data binding

Visual consistency maintains across the progression. User experience remains identical until JavaScript features activate.

### Component Avoidance When Possible

Create components only when CSS cannot achieve the result. Exhaust native HTML capabilities first. Leverage hidden inputs, popover attributes, dialog elements, and CSS selectors before building JavaScript.

Decision tree:
- Can native HTML element provide this functionality? Use it.
- Can CSS selectors handle this interaction? Use them.
- Can HTML attributes control this behavior? Use them.
- Only then: build su- component with JavaScript.

This minimizes JavaScript bundle size and reduces maintenance complexity.

### Semantic Extensions Are Opt-In

Developers may use standard HTML exclusively. Extended semantic tags and su- components are available when beneficial but never required.

A valid SUAI application can use only standard HTML5 tags. The framework provides enhanced options without mandating their use.


## Strategy Outcomes

### For Developers

Reduced cognitive overhead through consistent patterns. Faster development through clear conventions. Easier maintenance through explicit organization. Better AI assistance through structured information.

### For Applications

Smaller bundle sizes through component avoidance. Faster rendering through lean markup. Better performance through CSS-first approach. Cleaner code through zero bloatware policy.

### For Users

Optimized visual experiences without compromise. Fast loading times on constrained connections. Smooth interactions through efficient rendering. Consistent presentation across contexts.


## Relationship with PHRAW

SUAI handles visual experience. PHRAW handles audio experience. Neither attempts to serve both modalities through compromise.

Shared backend services provide feature parity. Separate presentation layers provide optimization. Users choose their preferred interaction modality.

This division enables excellence in each domain. Visual interfaces optimize for visual interaction without accessibility constraints. Audio interfaces optimize for conversational interaction without visual dependencies.


---

**SUAI Framework**  
Semantic Utility Adaptive Interface  
สวย - Beautiful

200% Semantic. 200% Visual. 200% Intelligent.
