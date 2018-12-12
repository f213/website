const express = require('express');
const consola = require('consola');
const proxy = require('http-proxy-middleware');
const { Nuxt, Builder } = require('nuxt');

const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;

app.set('port', port);

const BACKEND_URL = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost:8000';

consola.info('Setting backend proxy to', BACKEND_URL);
app.use([
  '/content',
  '/sitemap*.xml$',
  '/ghost',
  '^/rss/$',
], proxy({ target: BACKEND_URL }));

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');

config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true,
  });
}
start();
