export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { 
      enabled: true
  },

  plugins: [
      '~/plugins/sweetalert.client.js',
  ],

  css: [
      '~/assets/styles.css',
  ],

  app: {
      head: {
          link: [
              {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
              }
          ],
          script: [
              {
                  src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
                  defer: true, 
              },
          ],
      },
  },

  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'pt', name: 'Português', file: 'pt.json' }
    ]
  }
})