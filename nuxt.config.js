module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s — Федор Борщев',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/bulma.scss',
    '~/assets/legacy.css',
    '~/assets/vars.css',
    '~/assets/content.css',
    '~/assets/lists.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/ghost-auth.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/font-awesome',
    '@nuxtjs/redirect-module',
  ],
  serverMiddleware: [
    '~/middleware/redirect_to_trailing_slash',
  ],
  redirect: [
    { from: '/tags/favorites/', to: '/featured/', statusCode: 301 },
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    prefix: '/api/',
    proxy: true,
  },
  proxy: {
    '/api': 'http://localhost:8000/ghost/',
  },
  router: {
    extendRoutes(routes) {
      routes = routes.map(route => (route.path.endsWith('/') ? route : { ...route, path: `${route.path}/` }));
      routes = routes.map(route => ({ ...route, pathToRegexpOptions: { endsWith: '/', strict: true } }));
      return routes;
    },
  },
  env: {
    ghostClientId: process.env.GHOST_CLIENT_ID || 'ghost-frontend',
    ghostClientSecret: process.env.GHOST_CLIENT_SECRET || '822c1fe05f96',
    perPage: 5,
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        stage: 1,
        features: {
          customProperties: true,
        },
      },
      plugins: {
        'postcss-nested': {},
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
