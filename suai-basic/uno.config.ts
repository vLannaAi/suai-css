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
      suai: {
        accent: '#3b82f6',
      }
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
