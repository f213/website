const express = require('express');
const consola = require('consola');

require('dotenv').config();

const apiController = require('./controllers/api');
const ampController = require('./controllers/amp');
const ghostController = require('./controllers/ghost');
const nuxtController = require('./controllers/nuxt');

const app = express();

/* Ghost proxy */
app.use('/', ghostController);

/* Fetching AMP from the ghost installation */
app.use('/amp/:slug', ampController);

/* V8 is our custom API, not to mess with ghost api, available (proxied) at /api/v2 */
app.use('/api/v8', apiController);

/* nuxt.js app */
app.use('/', nuxtController);

/* Run express */
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, host);

consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true,
});
