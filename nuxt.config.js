/* eslint-disable object-curly-newline */
const BACKEND_URL = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:8000';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ru',
    },
    titleTemplate: '%s — Федор Борщев',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Федор Борщев' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=Edge' },
      { property: 'og:site_name', content: 'Блог Федора Борщева' },
      { property: 'fb:admins', content: '100006565443356' },
      { property: 'article:author', content: 'https://facebook.com/Fedor213' },
      { property: 'fb:profile_id', content: '100006565443356' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },

      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700&amp;subset=cyrillic" rel="stylesheet' },
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      { innerHTML: '(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter25756085 = new Ya.Metrika2({ id:25756085, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, ecommerce:"dataLayer" }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2");' },
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
    '~/assets/books.css',
    'node_modules/ilyabirman-likely/release/likely.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/ghost-auth.js',
    '~/plugins/ya-metrika.js',
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
    '/ghost': BACKEND_URL,
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
    copyrightYears: '2014–2018',
    email: 'fedor@borshev.com',
    yaMetrikaCounterId: '25756085',
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
