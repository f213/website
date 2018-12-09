const BACKEND_URL = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:8000';

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
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700&amp;subset=cyrillic" rel="stylesheet' },
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
    'node_modules/ilyabirman-likely/release/likely.css',
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
    '~/middleware/redirect-to-trailing-slash',
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
    '/api': `${BACKEND_URL}/ghost/`,
    '/i': `${BACKEND_URL}/content/images/`,
    '/content': BACKEND_URL,
    '/sitemap*.xml': BACKEND_URL,
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
    perPage: 10,
    absoluteHost: 'https://borshev.com',
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
