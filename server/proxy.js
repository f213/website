const proxy = require('http-proxy-middleware');
const consola = require('consola');

module.exports = ({ app, target }) => {
  const changeOrigin = Boolean(target.includes('https'));

  consola.info('Setting backend proxy to', target);
  app.use('/i/', proxy({ target: `${target}/content/images/`, changeOrigin }));
  app.use('/api/', proxy({ target: `${target}/ghost/`, changeOrigin }));
  app.use([
    '/content/images',
    '/sitemap*.xml$',
    '/ghost',
    '^/rss/$',
  ], proxy({ target, changeOrigin }));
};
