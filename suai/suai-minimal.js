/**
 * SUAI Minimal Theme Switcher
 * Version: 2.0 (Unified Architecture)
 *
 * IMPORTANT: This file is ONLY necessary for dynamic theme switching.
 * SUAI CSS works perfectly without JavaScript - just link to suai.css and set data attributes:
 * <link rel="stylesheet" href="suai/suai.css">
 * <html data-theme="pla" data-mode="light">
 *
 * This minimal switcher provides:
 * - Theme switching: 'pla' (Material Design 3), 'nok' (Bootstrap 5.3), 'maa' (iOS/Apple), or 'none' (no CSS)
 * - Mode switching: 'light' or 'dark'
 * - Auto dark mode detection via prefers-color-scheme
 * - localStorage persistence
 * - Zero dependencies, vanilla JavaScript
 *
 * Usage:
 *   suaiSet('pla', 'dark')  // Switch to PLA theme, dark mode
 *   suaiSet('nok', 'light') // Switch to NOK theme, light mode
 *   suaiSet('maa', 'dark')  // Switch to MAA theme, dark mode
 *   suaiSet('none', 'light') // Remove all CSS (pure HTML)
 *
 *   const current = suaiGet() // Returns {theme: 'pla', mode: 'light'}
 */

(function() {
  'use strict';

  // Valid options
  const VALID_THEMES = ['pla', 'nok', 'maa', 'none'];
  const VALID_MODES = ['light', 'dark'];

  // localStorage keys
  const STORAGE_THEME = 'suai-theme';
  const STORAGE_MODE = 'suai-mode';

  // CSS link element ID (for unified suai.css)
  const LINK_ID = 'suai-theme-css';

  /**
   * Get current theme from localStorage or default
   * @returns {string} Current theme
   */
  function getTheme() {
    return localStorage.getItem(STORAGE_THEME) || 'pla';
  }

  /**
   * Detect user's preferred color scheme from OS/browser
   * @returns {string} 'dark' if user prefers dark mode, 'light' otherwise
   */
  function getPreferredMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  /**
   * Get current mode from localStorage, or auto-detect from OS preference
   * @returns {string} Current mode
   */
  function getMode() {
    const storedMode = localStorage.getItem(STORAGE_MODE);

    // If no mode is stored, auto-detect from OS preference
    if (!storedMode) {
      return getPreferredMode();
    }

    return storedMode;
  }

  /**
   * Update body classes to reflect current theme and mode
   * Used by theme switcher UI to highlight active theme
   * @param {string} theme - Theme name ('pla', 'nok', 'maa', or 'none')
   * @param {string} mode - Mode ('light' or 'dark')
   */
  function updateBodyClasses(theme, mode) {
    // Remove all existing theme/mode classes
    VALID_THEMES.forEach(t => {
      document.body.classList.remove(`suai-theme-${t}`);
    });
    VALID_MODES.forEach(m => {
      document.body.classList.remove(`suai-mode-${m}`);
    });

    // Add current theme and mode classes
    document.body.classList.add(`suai-theme-${theme}`);
    document.body.classList.add(`suai-mode-${mode}`);
  }

  /**
   * Apply theme by setting data attributes on HTML element
   * NEW UNIFIED ARCHITECTURE: Uses single suai.css with data-theme and data-mode attributes
   * @param {string} theme - Theme name ('pla', 'nok', 'maa', or 'none')
   * @param {string} mode - Mode ('light' or 'dark')
   */
  function applyTheme(theme, mode) {
    const html = document.documentElement;
    let link = document.getElementById(LINK_ID);

    // Update body classes for theme switcher UI styling
    updateBodyClasses(theme, mode);

    if (theme === 'none') {
      // Remove CSS completely for pure HTML view
      if (link) {
        link.remove();
      }
      // Remove data attributes
      html.removeAttribute('data-theme');
      html.removeAttribute('data-mode');
      return;
    }

    // Set data attributes on <html> element for unified CSS theming
    html.setAttribute('data-theme', theme);
    html.setAttribute('data-mode', mode);

    // Ensure unified suai.css is loaded
    if (!link) {
      // Create link element for unified CSS
      link = document.createElement('link');
      link.id = LINK_ID;
      link.rel = 'stylesheet';
      link.href = '../../../suai/suai.css';
      document.head.appendChild(link);
    }
  }

  /**
   * Set theme and mode, persist to localStorage, and apply changes
   * @param {string} theme - Theme name ('pla', 'nok', or 'none')
   * @param {string} mode - Mode ('light' or 'dark')
   */
  function suaiSet(theme, mode) {
    // Validate theme
    if (!VALID_THEMES.includes(theme)) {
      console.error(`[SUAI] Invalid theme '${theme}'. Valid themes: ${VALID_THEMES.join(', ')}`);
      return;
    }

    // Validate mode
    if (!VALID_MODES.includes(mode)) {
      console.error(`[SUAI] Invalid mode '${mode}'. Valid modes: ${VALID_MODES.join(', ')}`);
      return;
    }

    // Save to localStorage
    localStorage.setItem(STORAGE_THEME, theme);
    localStorage.setItem(STORAGE_MODE, mode);

    // Apply CSS
    applyTheme(theme, mode);

    // Log for debugging
    console.log(`[SUAI] Theme set to: ${theme}-${mode}`);
  }

  /**
   * Get current theme and mode
   * @returns {{theme: string, mode: string}} Current theme and mode
   */
  function suaiGet() {
    return {
      theme: getTheme(),
      mode: getMode()
    };
  }

  /**
   * Initialize theme on page load
   */
  function init() {
    const theme = getTheme();
    const mode = getMode();
    applyTheme(theme, mode);
    console.log(`[SUAI] Initialized with theme: ${theme}-${mode}`);
  }

  // Expose public API to window
  window.suaiSet = suaiSet;
  window.suaiGet = suaiGet;

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
