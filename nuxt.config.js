export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  /*
   ** Headers of the page
   ** Must have for every page: title, description, twitter:title, twitter:description, og:title, og:description, og:site_name, og:url
   */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      // Twitter meta tags
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'SpeakToUs',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.speaktous.online/thumbnail.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Speak To Us logo.',
      },
      // Other social media tags
      // OG i.e. Open Graph Protocol docs: https://ogp.me/
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'SpeakToUs',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.speaktous.online/thumbnail.jpg',
      },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: 'Speak To Us logo.',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'SpeakToUs',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.speaktous.online',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
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
    { src: '~/plugins/ga', mode: 'client' },
  ],
  /*
   ** Auto import components (https://go.nuxtjs.dev/config-components)
   */
  components: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
  ],
  /*
   ** PWA configuration
   ** Doc: https://pwa.nuxtjs.org/
   */
  pwa: {
    manifest: {
      name: 'SpeakToUs',
      short_name: 'STU',
      description: process.env.npm_package_description || '',
    },
    meta: {
      name: 'SpeakToUs',
      description: process.env.npm_package_description || '',
    },
  },
  /*
   ** Sitemap configuration
   ** Doc: https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    hostname: 'https://www.speaktous.online',
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
