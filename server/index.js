const express = require('express');
const consola = require('consola');

require('dotenv').config();

const apiController = require('./controllers/api');

const proxy = require('./proxy');
const nuxt = require('./nuxt');


const redirectToTheMainHost = require('./middleware/redirect-to-the-main-host');

const app = express();

app.use(redirectToTheMainHost);

/* V8 is our custom API, not to mess with ghost api, available (proxied) at /api/v2 */
app.use('/api/v8', apiController);

/* Non-nuxt views */
app.get('/courses/cto-growth/', (req, res) => res.redirect(302, 'https://pmdaily.ru/courses/cto-growth/'));


/* Proxy to the ghost backend */
proxy({
  app,
  target: process.env.BACKEND_URL || 'https://borshev.com',
});


/* nuxt init */
(async () => nuxt({ app }))();


/* Run express */
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, host);

consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true,
});
