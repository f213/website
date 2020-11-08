const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const consola = require('consola');

const router = express.Router();

const target = process.env.BACKEND_URL || 'https://borshev.com';

const changeOrigin = Boolean(target.includes('https'));

consola.info('Setting backend proxy to', target);
router.use('/i/', createProxyMiddleware({ target: `${target}/content/images/`, changeOrigin }));
router.use('/api/v2/', createProxyMiddleware({ target: `${target}/ghost/`, changeOrigin }));

router.use([
  '/content/images',
  '/sitemap*.xml$',
  '/ghost',
  '^/rss/$',
], createProxyMiddleware({ target, changeOrigin }));

module.exports = router;
