const appBaseURL = process.env.GITHUB_ACTIONS ? '/profile/' : '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@vueuse/motion/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: appBaseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Ruslan Vorontsov — Senior Frontend Engineer',
      meta: [
        { name: 'description', content: 'Senior Frontend Engineer specializing in Vue, Nuxt, TypeScript, scalable architecture and high-performance web applications.' },
        { name: 'theme-color', content: '#111111' },
        { property: 'og:title', content: 'Ruslan Vorontsov — Senior Frontend Engineer' },
        { property: 'og:description', content: 'Building thoughtful, scalable web applications.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${appBaseURL}images/ruslan-portrait.png` }
      ]
    }
  }
})
