const express = require('express');
const proxy = require('../lib/proxy');

const router = express.Router();

const target = process.env.BACKEND_URL;

if (process.env.GHOST_RSS_PRIVATE_KEY) {
  router.use('^/rss/$', proxy({ target: `${target}/${process.env.GHOST_RSS_PRIVATE_KEY}/`, rewriteHost: true }));
  router.use(`/${process.env.GHOST_RSS_PRIVATE_KEY}/rss/`, proxy({ target, rewriteHost: true }));
}

module.exports = router;
