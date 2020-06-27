const proxy = require('http-proxy-middleware');
const express = require('express');
const consola = require('consola');

const router = express.Router();

const target = process.env.BACKEND_URL || 'https://borshev.com';

const changeOrigin = Boolean(target.includes('https'));

consola.info('Setting backend proxy to', target);
router.use('/i/', proxy({ target: `${target}/content/images/`, changeOrigin }));
router.use('/api/v2/', proxy({ target: `${target}/ghost/`, changeOrigin }));

router.use([
  '/content/images',
  '/sitemap*.xml$',
  '/ghost',
  '^/rss/$',
], proxy({ target, changeOrigin }));

module.exports = router;
