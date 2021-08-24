const { Nuxt, Builder } = require('nuxt');
const express = require('express');

const router = express.Router();

const config = require('../../nuxt.config');

// Init Nuxt.js
const nuxt = new Nuxt(config);
nuxt.ready().then(() => {
  // Build nuxt if in dev mode
  if (nuxt.options.dev) {
    new Builder(nuxt).build();
  }
});

router.use(nuxt.render);

module.exports = router;
