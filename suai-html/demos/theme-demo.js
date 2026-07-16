/**
 * SUAI Theme Demo Switcher (V3.0 Modular Architecture)
 * IMPORTANT: This is for DEMOS ONLY. suai-html is a no-JS package.
 * In production, link theme CSS files directly in HTML.
 *
 * Usage: <a onclick="suaiSet('pla','dark')">Switch to PLA Dark</a>
 */
(function() {
  'use strict';

  const THEMES = ['pla', 'nok', 'maa'];
  const BASE_PATH = '../suai-lai';

  /**
   * Load theme CSS files dynamically
   * @param {string} theme - 'pla', 'nok', or 'maa'
   * @param {string} mode - 'light' or 'dark'
   */
  function loadThemeCSS(theme, mode) {
    // Remove old theme CSS links
    document.querySelectorAll('link[data-suai-theme]').forEach(link => link.remove());

    if (theme === 'none') return;

    // Load fonts
    const fontsLink = document.createElement('link');
    fontsLink.rel = 'stylesheet';
    fontsLink.href = `${BASE_PATH}/${theme}/fonts/${theme}-fonts.css`;
    fontsLink.setAttribute('data-suai-theme', 'fonts');
    document.head.appendChild(fontsLink);

    // Load base styles
    const baseLink = document.createElement('link');
    baseLink.rel = 'stylesheet';
    baseLink.href = `${BASE_PATH}/${theme}/${theme}-base.css`;
    baseLink.setAttribute('data-suai-theme', 'base');
    document.head.appendChild(baseLink);

    // Load mode-specific variables
    const varsLink = document.createElement('link');
    varsLink.rel = 'stylesheet';
    varsLink.href = `${BASE_PATH}/${theme}/${theme}-${mode}-vars.css`;
    varsLink.setAttribute('data-suai-theme', 'vars');
    document.head.appendChild(varsLink);
  }

  /**
   * Set theme and mode
   * @param {string} theme - 'pla', 'nok', 'maa', or 'none'
   * @param {string} mode - 'light' or 'dark'
   */
  function suaiSet(theme, mode) {
    const html = document.documentElement;
    const body = document.body;

    // Update data attributes
    html.setAttribute('data-theme', theme);
    html.setAttribute('data-mode', mode);

    // Update body classes for UI highlighting
    body.classList.remove('suai-theme-pla', 'suai-theme-nok', 'suai-theme-maa', 'suai-theme-none');
    body.classList.remove('suai-mode-light', 'suai-mode-dark');
    body.classList.add(`suai-theme-${theme}`, `suai-mode-${mode}`);

    // Load theme CSS
    loadThemeCSS(theme, mode);
  }

  /**
   * Initialize on page load
   */
  function init() {
    const html = document.documentElement;
    const theme = html.getAttribute('data-theme') || 'pla';
    const mode = html.getAttribute('data-mode') || 'light';
    suaiSet(theme, mode);
  }

  // Expose API
  window.suaiSet = suaiSet;

  // Auto-initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
