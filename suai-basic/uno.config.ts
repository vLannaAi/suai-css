import { defineConfig } from 'unocss'
import presetWind3 from '@unocss/preset-wind3'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  presets: [
    presetWind3({
      dark: 'class',
      /* Disable preflight - we manage our own reset in base/reset.css */
      preflights: false,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        heroicons: () => import('@iconify-json/heroicons').then(i => i.icons),
      },
    }),
  ],

  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],


  theme: {
    colors: {
      primary: {
        DEFAULT: '#3b82f6',
        light: '#60a5fa',
        dark: '#1d4ed8',
      },
      success: {
        DEFAULT: '#10b981',
        light: '#34d399',
        dark: '#059669',
      },
      danger: {
        DEFAULT: '#ef4444',
        light: '#f87171',
        dark: '#dc2626',
      },
      warning: {
        DEFAULT: '#f59e0b',
        light: '#fbbf24',
        dark: '#d97706',
      },
      info: {
        DEFAULT: '#06b6d4',
        light: '#22d3ee',
        dark: '#0891b2',
      },
      secondary: '#6b7280',
    }
  },

  safelist: [
    // Footer icon
    'i-heroicons-shield-check',
  ],

  content: {
    filesystem: [
      './app.vue',
      './components/**/*.vue',
      './pages/**/*.vue',
      './assets/**/*.css',
      './assets/**/*.vue',
    ],
  },

})
