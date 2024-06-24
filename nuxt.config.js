module.exports = {
  telemetry: false,

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    titleTemplate: '%s — Фёдор Борщёв',
    meta: [
      { charset: 'utf8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Фёдор Борщёв' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
      { property: 'og:site_name', content: 'Блог Фёдора Борщёва' },
      { property: 'fb:admins', content: '100006565443356' },
      { property: 'article:author', content: 'https://facebook.com/Fedor213' },
      { property: 'fb:profile_id', content: '100006565443356' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },

      {
        rel: 'stylesheet prefetch',
        as: 'style',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/1.0.1/css/bulma.min.css',
        type: 'text/css',
        crossorigin: 'anonymoous',
      },
      {
        rel: 'stylesheet prefetch',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700&amp;subset=cyrillic" rel="stylesheet',
        type: 'text/css',
        crossorigin: 'anonymoous',
      },
      {
        rel: 'stylesheet prefetch',
        as: 'style',
        type: 'text/css',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css',
        crossorigin: 'anonymoous',
      },
      {
        rel: 'stylesheet prefetch',
        as: 'style',
        type: 'text/css',
        href: '/css/legacy.css',
      },
    ],
  },

  loading: {
    color: '#363636',
    failedColor: '#363636',
    height: '1px',
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/vars.css', '~/assets/content.css', '~/assets/lists.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/ghost-auth.js', '~/plugins/jsonld'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/redirect-module', '@nuxtjs/sentry'],
  buildModules: ['@nuxtjs/ackee'],
  ackee: {
    server: 'https://a.tough-dev.school',
    domainId: 'eb04fcd4-aa2c-48e9-9b6e-c86a69c74148',
    detailed: true,
  },
  serverMiddleware: [
    '~/middleware/redirect-to-trailing-slash',
    '~/middleware/redirect-to-borshev-com',
  ],
  redirect: [
    { from: '/tags/favorites/', to: '/featured/', statusCode: 301 },
    { from: '/rss/index.xml', to: '/rss/', statusCode: 301 },
    { from: '/tough-dev-school-lms/', to: '/tough-dev-lms/', statusCode: 301 },
  ],
  sentry: {
    dsn: 'https://563a1267525f4438bc73cccebd671a15@sentry.io/1865868',
  },
  /*
   ** Axios module configuration
   */
  axios: {
    prefix: '/api/v2/content',
    proxy: true,
  },
  router: {
    extendRoutes(routes) {
      routes = routes.map((route) =>
        route.path.endsWith('/') ? route : { ...route, path: `${route.path}/` },
      );
      routes = routes.map((route) => ({
        ...route,
        pathToRegexpOptions: { endsWith: '/', strict: true },
      }));
      return routes;
    },
  },
  env: {
    ghostAPIKey: process.env.GHOST_API_KEY || 'd625ca2d60e5eaf0b1a6f861e8',
    perPage: 5,
    absoluteHost: process.env.ABSOLUTE_HOST || 'https://borshev.com',
    backendUrl: process.env.BACKEND_URL || 'https://borshev.com',
    copyrightYears: '2014–2023',
    email: 'fedor@borshev.com',
  },

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        stage: 1,
        features: {
          'custom-properties': true,
        },
      },
      postcssOptions: {
        plugins: {
          'postcss-nested': {},
        },
      },
    },
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool = 'source-map';
      }
    },
  },
};
