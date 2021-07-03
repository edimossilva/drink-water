import i18n from './config/i18n'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'drink-water',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'en',
         locales: [
          {
             code: 'en',
             name: 'English'
          },
          {
             code: 'pt',
             name: 'Português'
          }
        ],
        vueI18n: i18n,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          onlyOnRoot: true,  // recommended
        }
      }
     ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-i18n',
  ],

  // i18n: {
  //   locales: ['en', 'pt'],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {
  //       en: {
  //         welcome: 'NAni'
  //       },
  //       pt: {
  //         welcome: 'Bem vindo :)'
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
