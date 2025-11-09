<template>
  <section class="layout-demo">
    <div>
      <h1>Page Layout Mockup</h1>
      <p>This demonstrates a complete page layout using CSS Grid with named areas. Each area shows its grid-area name and purpose.</p>

      <div class="demo-container">
        <!-- Header -->
        <header data-area="header">
          <span>header</span>
          <h2>Website Header</h2>
          <p>Primary navigation and site identity</p>
        </header>

        <!-- Navigation -->
        <nav data-area="nav">
          <span>nav</span>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <!-- Sidebar -->
        <aside data-area="sidebar">
          <span>sidebar</span>
          <h3>Navigation</h3>
          <ul>
            <li><a href="#">Link 1</a></li>
            <li><a href="#">Link 2</a></li>
            <li><a href="#">Link 3</a></li>
            <li><a href="#">Link 4</a></li>
          </ul>
        </aside>

        <!-- Main Content -->
        <main data-area="main">
          <span>main</span>

          <!-- Section 1 -->
          <section>
            <h2>Section One</h2>

            <!-- Article -->
            <article>
              <h3>Article Title</h3>
              <p>This is article content within a section. Articles represent independent, self-contained pieces of content.</p>
            </article>
          </section>

          <!-- Section 2 -->
          <section>
            <h2>Section Two</h2>

            <!-- Multiple Articles -->
            <div>
              <article>
                <h3>Article A</h3>
                <p>Content for article A</p>
              </article>

              <article>
                <h3>Article B</h3>
                <p>Content for article B</p>
              </article>
            </div>
          </section>
        </main>

        <!-- Footer -->
        <footer data-area="footer">
          <span>footer</span>
          <p>&copy; 2025 Website. All rights reserved.</p>
        </footer>
      </div>

      <!-- CSS Grid Structure Explanation -->
      <aside class="code-info">
        <h2>Grid Structure</h2>
        <pre><code class="language-css">grid-template-areas:
  "header header"
  "nav    nav"
  "sidebar main"
  "footer footer";

grid-template-columns: 250px 1fr;
grid-template-rows: auto auto 1fr auto;</code></pre>
      </aside>

      <!-- Named Areas Legend -->
      <aside class="area-legend">
        <h2>Named Grid Areas</h2>
        <dl>
          <dt data-color="header">header</dt>
          <dd>Top page header with site title</dd>

          <dt data-color="nav">nav</dt>
          <dd>Main horizontal navigation menu</dd>

          <dt data-color="sidebar">sidebar</dt>
          <dd>Secondary navigation and widgets</dd>

          <dt data-color="main">main</dt>
          <dd>Primary content area with sections</dd>

          <dt data-color="footer">footer</dt>
          <dd>Bottom page footer with copyright</dd>
        </dl>
      </aside>
    </div>
  </section>
</template>

<style scoped>
/* All layout-demo styles are in assets/styles/modules/layout-demo.css */
</style>
