export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: 'index.html'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce-esf',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  vuetify: {
    defaultAssets: {
      font: true,
      icons: 'mdi'
    },
    icons: {
      iconfont: 'mdi',
    }
  },
  env: {
    apiKey: process.env.API_KEY,
    encryptionKey: process.env.ENCRYPTION_KEY,
  },
  css: [
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/tailwindcss',
  ],
  modules: [
  ],
  build: {
  }
}
