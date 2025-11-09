// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  // SPA Mode (no SSR)
  ssr: false,

  // UnoCSS Integration
  modules: [
    '@unocss/nuxt'
  ],

  // CSS & Styles
  css: [
    '~/assets/styles/main.css',
  ],

  // App configuration
  app: {
    head: {
      title: 'SUAI Framework - Semantic Utility Adaptive Interface',
      meta: [
        {
          name: 'description',
          content: 'Discover how SUAI combines semantic HTML, SMACSS organization, and utility-first CSS for modern web development.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  // Nitro configuration - Static prerendering
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    }
  },

  // Route rules for complete static generation
  routeRules: {
    '/**': { prerender: true }
  },

  // Auto-import configuration
  imports: {
    dirs: ['./composables/**']
  }
})
