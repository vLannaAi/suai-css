/**
 * SUAI Framework - JavaScript Enhancement
 * Semantic Utility Adaptive Interface
 *
 * Integration Level: suai-js
 * - CSS + vanilla JavaScript
 * - Dynamic theme/mode switching
 * - localStorage persistence
 * - System preference detection
 * - NO framework dependencies
 *
 * Usage:
 * <script src="path/to/suai.js"></script>
 * <script>
 *   SUAI.setTheme('nok'); // or 'pla'
 *   SUAI.setMode('dark'); // or 'light' or 'system'
 * </script>
 */

(function(window) {
  'use strict';

  const SUAI = {
    // Constants
    STORAGE_KEY_THEME: 'suai-theme',
    STORAGE_KEY_MODE: 'suai-mode',
    THEMES: ['nok', 'pla'],
    MODES: ['light', 'dark', 'system'],
    DEFAULT_THEME: 'nok',
    DEFAULT_MODE: 'light',

    // Current state
    currentTheme: null,
    currentMode: null,
    currentResolvedMode: null, // 'light' or 'dark' (resolved from 'system' if needed)
    styleElement: null,

    /**
     * Initialize SUAI
     * Called automatically on script load
     */
    init: function() {
      // Load saved preferences or defaults
      this.currentTheme = this.getStoredTheme() || this.DEFAULT_THEME;
      this.currentMode = this.getStoredMode() || this.DEFAULT_MODE;

      // Create style element for dynamic CSS loading
      this.styleElement = document.createElement('link');
      this.styleElement.rel = 'stylesheet';
      this.styleElement.id = 'suai-theme-css';
      document.head.appendChild(this.styleElement);

      // Listen for system theme changes
      if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeQuery.addEventListener('change', this.onSystemThemeChange.bind(this));
      }

      // Apply current theme and mode
      this.applyTheme(this.currentTheme, this.currentMode);

      // Add helper class to body
      document.documentElement.setAttribute('data-suai-theme', this.currentTheme);
      document.documentElement.setAttribute('data-suai-mode', this.currentMode);
      document.documentElement.setAttribute('data-suai-resolved-mode', this.resolveMode(this.currentMode));
    },

    /**
     * Set theme
     * @param {string} theme - 'nok' or 'pla'
     */
    setTheme: function(theme) {
      if (!this.THEMES.includes(theme)) {
        console.error(`[SUAI] Invalid theme: ${theme}. Valid themes: ${this.THEMES.join(', ')}`);
        return;
      }

      this.currentTheme = theme;
      this.storeTheme(theme);
      this.applyTheme(theme, this.currentMode);
      document.documentElement.setAttribute('data-suai-theme', theme);

      // Dispatch custom event
      this.dispatchEvent('themechange', { theme: theme });
    },

    /**
     * Set mode
     * @param {string} mode - 'light', 'dark', or 'system'
     */
    setMode: function(mode) {
      if (!this.MODES.includes(mode)) {
        console.error(`[SUAI] Invalid mode: ${mode}. Valid modes: ${this.MODES.join(', ')}`);
        return;
      }

      this.currentMode = mode;
      this.storeMode(mode);
      this.applyTheme(this.currentTheme, mode);

      const resolvedMode = this.resolveMode(mode);
      document.documentElement.setAttribute('data-suai-mode', mode);
      document.documentElement.setAttribute('data-suai-resolved-mode', resolvedMode);

      // Dispatch custom event
      this.dispatchEvent('modechange', { mode: mode, resolvedMode: resolvedMode });
    },

    /**
     * Get current theme
     * @returns {string} Current theme
     */
    getTheme: function() {
      return this.currentTheme;
    },

    /**
     * Get current mode
     * @returns {string} Current mode
     */
    getMode: function() {
      return this.currentMode;
    },

    /**
     * Get resolved mode (actual light/dark, not 'system')
     * @returns {string} Resolved mode ('light' or 'dark')
     */
    getResolvedMode: function() {
      return this.currentResolvedMode;
    },

    /**
     * Toggle between light and dark mode
     */
    toggleMode: function() {
      const resolvedMode = this.resolveMode(this.currentMode);
      const newMode = resolvedMode === 'light' ? 'dark' : 'light';
      this.setMode(newMode);
    },

    /**
     * Resolve mode to actual 'light' or 'dark'
     * @param {string} mode - Mode to resolve
     * @returns {string} Resolved mode
     */
    resolveMode: function(mode) {
      if (mode === 'system') {
        return this.getSystemPreference();
      }
      return mode;
    },

    /**
     * Get system color scheme preference
     * @returns {string} 'light' or 'dark'
     */
    getSystemPreference: function() {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    },

    /**
     * Apply theme and mode
     * @param {string} theme - Theme name
     * @param {string} mode - Mode name
     */
    applyTheme: function(theme, mode) {
      const resolvedMode = this.resolveMode(mode);
      this.currentResolvedMode = resolvedMode;

      // Construct CSS path
      const cssPath = this.getThemePath(theme, resolvedMode);

      // Load CSS
      this.styleElement.href = cssPath;
    },

    /**
     * Get theme CSS path
     * @param {string} theme - Theme name
     * @param {string} mode - Resolved mode ('light' or 'dark')
     * @returns {string} CSS file path
     */
    getThemePath: function(theme, mode) {
      // Get the base path of suai.js
      const scripts = document.querySelectorAll('script[src*="suai.js"]');
      let basePath = './';

      if (scripts.length > 0) {
        const scriptSrc = scripts[0].src;
        basePath = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);
      }

      return `${basePath}themes/${theme}/${theme}-${mode}.css`;
    },

    /**
     * Store theme in localStorage
     * @param {string} theme - Theme to store
     */
    storeTheme: function(theme) {
      try {
        localStorage.setItem(this.STORAGE_KEY_THEME, theme);
      } catch (e) {
        console.warn('[SUAI] Failed to store theme in localStorage:', e);
      }
    },

    /**
     * Store mode in localStorage
     * @param {string} mode - Mode to store
     */
    storeMode: function(mode) {
      try {
        localStorage.setItem(this.STORAGE_KEY_MODE, mode);
      } catch (e) {
        console.warn('[SUAI] Failed to store mode in localStorage:', e);
      }
    },

    /**
     * Get stored theme from localStorage
     * @returns {string|null} Stored theme or null
     */
    getStoredTheme: function() {
      try {
        return localStorage.getItem(this.STORAGE_KEY_THEME);
      } catch (e) {
        console.warn('[SUAI] Failed to read theme from localStorage:', e);
        return null;
      }
    },

    /**
     * Get stored mode from localStorage
     * @returns {string|null} Stored mode or null
     */
    getStoredMode: function() {
      try {
        return localStorage.getItem(this.STORAGE_KEY_MODE);
      } catch (e) {
        console.warn('[SUAI] Failed to read mode from localStorage:', e);
        return null;
      }
    },

    /**
     * Handle system theme change
     */
    onSystemThemeChange: function() {
      // Only react if current mode is 'system'
      if (this.currentMode === 'system') {
        const newResolvedMode = this.getSystemPreference();

        if (newResolvedMode !== this.currentResolvedMode) {
          this.applyTheme(this.currentTheme, this.currentMode);
          document.documentElement.setAttribute('data-suai-resolved-mode', newResolvedMode);

          // Dispatch custom event
          this.dispatchEvent('systemmodechange', {
            mode: this.currentMode,
            resolvedMode: newResolvedMode
          });
        }
      }
    },

    /**
     * Dispatch custom event
     * @param {string} eventName - Event name
     * @param {object} detail - Event detail
     */
    dispatchEvent: function(eventName, detail) {
      const event = new CustomEvent(`suai:${eventName}`, {
        detail: detail,
        bubbles: true,
        cancelable: true
      });
      document.dispatchEvent(event);
    }
  };

  // Auto-initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      SUAI.init();
    });
  } else {
    // DOM already loaded
    SUAI.init();
  }

  // Expose SUAI globally
  window.SUAI = SUAI;

})(window);

/**
 * EVENTS
 *
 * Listen to SUAI events:
 *
 * document.addEventListener('suai:themechange', function(e) {
 *   console.log('Theme changed to:', e.detail.theme);
 * });
 *
 * document.addEventListener('suai:modechange', function(e) {
 *   console.log('Mode changed to:', e.detail.mode);
 *   console.log('Resolved mode:', e.detail.resolvedMode);
 * });
 *
 * document.addEventListener('suai:systemmodechange', function(e) {
 *   console.log('System mode changed:', e.detail.resolvedMode);
 * });
 */

/**
 * HTML ATTRIBUTES
 *
 * SUAI automatically adds these attributes to <html>:
 *
 * data-suai-theme="nok|pla"
 * data-suai-mode="light|dark|system"
 * data-suai-resolved-mode="light|dark"
 *
 * Use these for CSS selectors if needed:
 *
 * html[data-suai-theme="pla"] { ... }
 * html[data-suai-resolved-mode="dark"] { ... }
 */
