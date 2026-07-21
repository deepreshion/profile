const appBaseURL = process.env.GITHUB_ACTIONS ? '/profile/' : '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  buildDir: '.nuxt',
  devtools: { enabled: false },
  modules: ['@vueuse/motion/nuxt', '@nuxtjs/i18n', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'ru', language: 'ru-RU', name: 'Русский' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'portfolio-locale',
      redirectOn: 'root',
      fallbackLocale: 'en'
    }
  },
  nitro: {
    prerender: {
      routes: ['/cv', '/ru', '/ru/cv']
    }
  },
  app: {
    baseURL: appBaseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ruslan Vorontsov - Senior Frontend Engineer',
      meta: [
        { name: 'description', content: 'Senior Frontend Engineer specializing in Vue, Nuxt, TypeScript, scalable architecture and high-performance web applications.' },
        { name: 'theme-color', content: '#111111' },
        { property: 'og:title', content: 'Ruslan Vorontsov - Senior Frontend Engineer' },
        { property: 'og:description', content: 'Building thoughtful, scalable web applications.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${appBaseURL}images/my-portrait.png` }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${appBaseURL}rv-logo.svg` }
      ]
    }
  }
})
