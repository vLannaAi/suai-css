<template>
  <div class="showcase-container">
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <h1>SUAI CSS Framework</h1>
      <p>Semantic, Utility-first, Adaptive Interface</p>
      <p>Explore pure HTML + CSS with SMACSS organization. No components, no JavaScript—just semantic HTML and carefully organized CSS layers.</p>
    </section>

    <!-- Demo Links Section -->
    <section id="demos">
      <h2>Integration Demos</h2>
      <p>Explore different SUAI integration levels:</p>
      <div class="demo-links">
        <article class="demo-link-card">
          <h3>Text Elements</h3>
          <p>Re-introducing HTML with semantic focus. Comprehensive guide to inline, block, and software text elements.</p>
          <a href="/assets/text.html" target="_blank">Explore Text Elements →</a>
        </article>
        <article class="demo-link-card">
          <h3>suai-css Demo</h3>
          <p>Pure CSS integration - no JavaScript required. Single theme, single mode, tag-based styling.</p>
          <a href="/assets/suai-css.html" target="_blank">View suai-css Demo →</a>
        </article>
        <article class="demo-link-card">
          <h3>suai-js Demo</h3>
          <p>Enhanced with vanilla JavaScript - dynamic theme/mode switching, localStorage persistence.</p>
          <a href="/assets/suai-js.html" target="_blank">View suai-js Demo →</a>
        </article>
      </div>
    </section>

    <!-- Base Layer -->
    <section id="base">
      <h2>Base Layer</h2>
      <p>Semantic HTML elements with consistent, responsive styling.</p>

      <!-- Headings -->
      <h3>Headings (h1-h6)</h3>
      <div class="example">
        <h1>This is an h1 heading</h1>
        <h2>This is an h2 heading</h2>
        <h3>This is an h3 heading</h3>
        <h4>This is an h4 heading</h4>
        <h5>This is an h5 heading</h5>
        <h6>This is an h6 heading</h6>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">h1, h2, h3, h4, h5, h6 {
  @apply m-0 leading-tight text-primary;
}
h1 { @apply text-5xl font-black; }
h2 { @apply text-4xl font-bold; }
h3 { @apply text-2xl font-bold; }
h4 { @apply text-xl font-semibold; }
h5 { @apply text-lg font-semibold; }
h6 { @apply text-base font-medium; }</code></pre>
      </figure>

      <!-- Paragraphs -->
      <h3>Paragraph (p)</h3>
      <div class="example">
        <p>This is a standard paragraph with semantic HTML. It demonstrates how body text flows and is styled with the SUAI framework.</p>
        <p>Multiple paragraphs maintain consistent spacing through margin utilities, creating a rhythm that's easy to read.</p>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">p {
  @apply m-0 mb-4 text-secondary transition-colors duration-300;
}</code></pre>
      </figure>

      <!-- Links -->
      <h3>Links (a)</h3>
      <div class="example">
        <p>This is a <a href="#">regular link</a> with hover effects. <a href="#base">Try hovering over links</a> to see the transition.</p>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">a {
  @apply text-primary no-underline cursor-pointer transition-colors duration-200;
  &:hover {
    @apply underline text-primary-dark;
  }
}</code></pre>
      </figure>

      <!-- Emphasis -->
      <h3>Emphasis (strong, em)</h3>
      <div class="example">
        <p>You can use <strong>strong</strong> for bold text or <em>emphasis</em> for italic text. <strong>Bold and <em>italic</em> can be</strong> combined.</p>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">strong, b { @apply font-bold; }
em, i { @apply italic; }
strong em, em strong { @apply font-bold italic; }</code></pre>
      </figure>

      <!-- Inline Code -->
      <h3>Inline Code (code)</h3>
      <div class="example">
        <p>Inline code like <code>const variable = value</code> or <code>function()</code> is styled with a monospace font and subtle background.</p>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">code {
  @apply font-mono text-sm bg-gray-100 text-gray-900
    px-2 py-1 rounded break-words;
}</code></pre>
      </figure>

      <!-- Blockquote -->
      <h3>Blockquote</h3>
      <div class="example">
        <blockquote>
          "The best way to predict the future is to invent it." This blockquote is indented with a left border and styled in italics for emphasis.
        </blockquote>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">blockquote {
  @apply my-4 ml-4 pl-4 border-l-4 border-primary text-secondary italic;
}</code></pre>
      </figure>

      <!-- Article -->
      <h3>Article Element</h3>
      <div class="example">
        <article>
          <h4>Article Title</h4>
          <p>Articles represent independent, self-contained content. They're ideal for blog posts, news items, or other standalone content pieces.</p>
        </article>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">article { @apply block; }</code></pre>
      </figure>

      <!-- Horizontal Rule -->
      <h3>Horizontal Rule (hr)</h3>
      <div class="example">
        <p>Text before the separator.</p>
        <hr />
        <p>Text after the separator.</p>
      </div>
      <figure>
        <figcaption>CSS - base/styles.css</figcaption>
        <pre><code class="language-css">hr {
  @apply my-8 border-none border-t border-gray-300 h-px;
}</code></pre>
      </figure>
    </section>

    <!-- Layout Layer -->
    <section id="layout">
      <h2>Layout Layer</h2>
      <p>Responsive page structure and containers.</p>

      <!-- Section Container -->
      <h3>Section Container</h3>
      <div class="example">
        <section class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <h4>Section Content</h4>
          <p>Sections have responsive padding that scales with the viewport. They provide consistent spacing and structure to page content.</p>
        </section>
      </div>
      <figure>
        <figcaption>CSS - layout/containers.css</figcaption>
        <pre><code class="language-css">section {
  @apply py-6 sm:py-9 md:py-12 lg:py-16 xl:py-20 px-6 sm:px-8 lg:px-12 relative;
}</code></pre>
      </figure>
    </section>

    <!-- Modules Layer -->
    <section id="modules">
      <h2>Modules</h2>
      <p>Reusable component styles.</p>

      <!-- Media -->
      <h3>Media (figure, figcaption)</h3>
      <div class="example">
        <figure>
          <svg class="w-full h-64 bg-gradient-to-br from-primary to-success rounded-lg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="none"/>
            <text x="200" y="150" text-anchor="middle" fill="white" font-size="24" font-weight="bold">Sample Image</text>
          </svg>
          <figcaption>This is a figure with a caption below it</figcaption>
        </figure>
      </div>
      <figure>
        <figcaption>CSS - modules/media.css</figcaption>
        <pre><code class="language-css">figure { @apply my-6 mx-0 block; }
figcaption { @apply mt-3 text-center text-sm text-secondary; }</code></pre>
      </figure>

      <!-- Unordered List -->
      <h3>Unordered List (ul)</h3>
      <div class="example">
        <ul>
          <li>First item in the list</li>
          <li>Second item with <strong>bold text</strong></li>
          <li>Third item with a nested list:
            <ul>
              <li>Nested item one</li>
              <li>Nested item two</li>
            </ul>
          </li>
        </ul>
      </div>
      <figure>
        <figcaption>CSS - modules/lists.css</figcaption>
        <pre><code class="language-css">ul {
  list-style-type: disc;
  @apply m-0 mb-4 pl-6 space-y-2;
}</code></pre>
      </figure>

      <!-- Ordered List -->
      <h3>Ordered List (ol)</h3>
      <div class="example">
        <ol>
          <li>Step one of the process</li>
          <li>Step two with important details</li>
          <li>Step three to complete</li>
        </ol>
      </div>
      <figure>
        <figcaption>CSS - modules/lists.css</figcaption>
        <pre><code class="language-css">ol {
  list-style-type: decimal;
  @apply m-0 mb-4 pl-6 space-y-2;
}</code></pre>
      </figure>

      <!-- Definition List -->
      <h3>Definition List (dl)</h3>
      <div class="example">
        <dl>
          <dt>HTML</dt>
          <dd>HyperText Markup Language is the standard markup language for creating web pages.</dd>
          <dt>CSS</dt>
          <dd>Cascading Style Sheets is used for styling and layout of web pages.</dd>
          <dt>JavaScript</dt>
          <dd>A programming language used to create interactive effects within web browsers.</dd>
        </dl>
      </div>
      <figure>
        <figcaption>CSS - modules/lists.css</figcaption>
        <pre><code class="language-css">dl { @apply m-0 mb-4; }
dt { @apply font-bold text-primary mt-4; }
dd { @apply ml-6 mb-4 text-secondary; }</code></pre>
      </figure>

      <!-- Code Display -->
      <h3>Code Blocks (pre, code)</h3>
      <div class="example">
        <pre><code class="language-css">/* This is a code block */
h1, h2, h3 {
  @apply font-bold leading-tight;
}</code></pre>
      </div>
      <figure>
        <figcaption>CSS - modules/code-display.css</figcaption>
        <pre><code class="language-css">pre {
  @apply font-mono text-sm bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto;
}
pre > code {
  @apply bg-transparent text-inherit p-0 m-0;
}</code></pre>
      </figure>
    </section>

    <!-- Architecture Section -->
    <section id="architecture">
      <h2>CSS Architecture: SMACSS</h2>
      <p>The SUAI framework follows SMACSS principles with clear layer separation.</p>

      <!-- Folder Structure -->
      <h3>Folder Structure</h3>
      <pre class="folder-structure font-mono text-sm"><code>assets/styles/
├── main.css
├── base/
│   ├── reset.css
│   ├── variables-thai.css
│   ├── variables-sintony.css
│   └── styles.css
├── layout/
│   ├── page-structure.css
│   ├── containers.css
│   └── sidebar.css
├── modules/
│   ├── media.css
│   ├── lists.css
│   ├── code-display.css
│   └── showcase.css
└── state/
    ├── theme.css
    └── interactions.css</code></pre>

      <!-- Layer Cascade -->
      <h3>Layer Cascade</h3>
      <div class="folder-structure space-y-3">
        <div class="flex items-center">
          <span class="layer-badge base">base/</span>
          <span class="ml-4 text-secondary">Semantic HTML defaults, typography, colors</span>
        </div>
        <div class="flex items-center">
          <span class="layer-badge layout">layout/</span>
          <span class="ml-4 text-secondary">Page structure, containers, responsive grid</span>
        </div>
        <div class="flex items-center">
          <span class="layer-badge modules">modules/</span>
          <span class="ml-4 text-secondary">Reusable components, media, lists, code</span>
        </div>
        <div class="flex items-center">
          <span class="layer-badge state">state/</span>
          <span class="ml-4 text-secondary">Theme toggling, dark mode, interactive states</span>
        </div>
      </div>

      <!-- Theme System -->
      <h3>Theme System</h3>
      <div class="folder-structure theme-grid">
        <div>
          <h4 class="font-bold mb-2">Thai Theme</h4>
          <ul class="text-sm space-y-1 text-secondary">
            <li>• Font: Noto Sans Thai</li>
            <li>• Style: Warm, rounded</li>
            <li>• Border radius: Generous</li>
            <li>• Spacing: Expansive</li>
            <li>• Font weights: 300-700</li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-2">Sintony Theme</h4>
          <ul class="text-sm space-y-1 text-secondary">
            <li>• Font: Sintony</li>
            <li>• Style: Clean, sharp</li>
            <li>• Border radius: Minimal</li>
            <li>• Spacing: Compact</li>
            <li>• Font weights: 400, 700</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-gradient-to-r from-primary via-success to-info text-white">
      <h2>SUAI Key Features</h2>
      <div class="feature-grid mt-12">
        <div>
          <h3 class="font-bold mb-3">Pure HTML</h3>
          <p>No components, no JavaScript required. Just semantic HTML with carefully organized CSS.</p>
        </div>
        <div>
          <h3 class="font-bold mb-3">SMACSS Organization</h3>
          <p>Clear separation of concerns with Base, Layout, Modules, and State layers.</p>
        </div>
        <div>
          <h3 class="font-bold mb-3">Dual Theme System</h3>
          <p>Switch between Thai and Sintony themes with different aesthetics and typography.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* All showcase styles are in assets/styles/modules/showcase.css */
</style>
