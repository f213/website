const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express');
const consola = require('consola');

const router = express.Router();

const target = process.env.BACKEND_URL;

consola.info('Setting ghost proxy to', target);
router.use('/i/', createProxyMiddleware({ target: `${target}/content/images/`, changeOrigin: true }));
router.use(['/api/v2/', '/api/v3'], createProxyMiddleware({ target: `${target}/ghost/`, changeOrigin: true }));

router.use([
  '/content/images',
  '/sitemap*.xml$',
  '/ghost',
], createProxyMiddleware({ target, changeOrigin: true }));

module.exports = router;
