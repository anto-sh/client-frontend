import Aura from '@primeuix/themes/aura'
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-29',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils/module',
  ],

  alias: {
    // FSD-слои
    '@app': path.resolve(__dirname, 'app'),
    '@pages': path.resolve(__dirname, 'pages'),
    '@widgets': path.resolve(__dirname, 'widgets'),
    '@features': path.resolve(__dirname, 'features'),
    '@entities': path.resolve(__dirname, 'entities'),
    '@shared': path.resolve(__dirname, 'shared'),
  },

  /* ───────────────────────── PrimeVue ───────────────────────── */
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        },
      },
      ripple: true,
    },
    autoImport: false,
    components: {
      include: ['Button'],
      exclude: ['Form', 'FormField', 'Editor', 'Chart'],
    },
  },

  /* ──────────────────────── Nuxt Image ──────────────────────── */
  image: {
    domains: ['images.primefaces.org'],
  },

  /* ──────────────────────── CSS / SCSS ──────────────────────── */
  css: ['primeicons/primeicons.css'],
  vite: {
    build: {},
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/shared/css/_variables.scss" as *;
          @use "~/shared/css/_mixins.scss" as *;
          `,
        },
      },
    },
  },

  /* ──────────────────────── TypeScript ──────────────────────── */
  typescript: {
    strict: true,
    typeCheck: true,
  },

  /* ──────────────────────────── SSR ─────────────────────────── */
  ssr: true,
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  /* ──────────────────────── ROUTE RULES ─────────────────────── */
  routeRules: {
    // Все запросы к /api/** проксируются на :4410
    '/api/**': {
      proxy:
        process.env.NODE_ENV === 'production'
          ? 'https://site-name.ru:4410/api/**' // продакшен
          : 'http://localhost:4410/api/**', // разработка
    },
  },

  /* ──────────────────────────── ENV ─────────────────────────── */
  runtimeConfig: {
    // Приватные переменные (только на сервере)
    // e.g. NUXT_VAR_FOO in .env / varFoo: '' here

    public: {
      // Публичные переменные (доступны на клиенте и сервере)
      // e.g. NUXT_PUBLIC_VAR_FOO in .env / varFoo: '' here
      apiUrl: '',
      apiImageUploadEndpoint: '',
      apiVideoUploadEndpoint: '',
    },
  },

  /* ──────────────────────────── DIR ─────────────────────────── */
  dir: {
    layouts: 'app/layouts',
  },

  /* ────────────────────────── ROUTES ────────────────────────── */
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'home',
        path: '',
        file: '~/pages/home/index.vue',
      })
    },
  },
})
