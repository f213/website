const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const rewriteHost = require('../lib/rewriteHost');

const router = express.Router();

const target = process.env.BACKEND_URL;

if (process.env.GHOST_RSS_PRIVATE_KEY) {
  router.use(
    '^/rss/$', createProxyMiddleware({
      target: `${target}/${process.env.GHOST_RSS_PRIVATE_KEY}/`,
      changeOrigin: true,
      selfHandleResponse: true,
      onProxyRes: rewriteHost,
    }),
  );
  router.use(
    `/${process.env.GHOST_RSS_PRIVATE_KEY}/rss/`,
    createProxyMiddleware({
      target,
      changeOrigin: true,
      selfHandleResponse: true,
      onProxyRes: rewriteHost,
    }),
  );
}

module.exports = router;
