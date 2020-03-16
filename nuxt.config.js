// Configuring .env variables doc here: https://codecourse.com/watch/using-env-files-with-nuxt
const env = require('dotenv').config()

export default {
  mode: 'universal',
  env: env.parsed,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Speak To Us' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** PWA options
   */
  // pwa: {
  //   icon: {
  //     /* icon options */
  //     iconSrc: './static/favicon.ico'
  //   }
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#74B757' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vuelidate' },
    { src: '~/plugins/ga', mode: 'client' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
