const express = require('express');
const consola = require('consola');

const proxy = require('../lib/ghost-proxy');

const router = express.Router();

const target = process.env.BACKEND_URL || 'https://borshev.com';

consola.info('Setting ghost proxy to', target);
router.use(['/api/v2/', '/api/v3'], proxy({ target: `${target}/ghost/` }));
router.use(['/content/images', '/ghost', '^/rss/$'], proxy({ target }));

module.exports = router;
