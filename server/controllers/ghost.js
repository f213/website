const express = require('express');
const consola = require('consola');

const proxy = require('../lib/proxy');

const router = express.Router();

const target = process.env.BACKEND_URL;

consola.info('Setting ghost proxy to', target);
router.use('/i/', proxy({ target: `${target}/content/images/` }));
router.use(['/api/v2/', '/api/v3'], proxy({ target: `${target}/ghost/` }));

router.use([
  '/content/images',
  '/sitemap*.xml$',
  '/ghost',
], proxy({ target }));

module.exports = router;
