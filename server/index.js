const express = require('express');
const consola = require('consola');

const proxy = require('./proxy');
const nuxt = require('./nuxt');


const redirectToTheMainHost = require('./middleware/redirect-to-the-main-host');

const app = express();


app.use(redirectToTheMainHost);

/* Proxy to the ghost backend */
proxy({
  app,
  target: process.env.BACKEND_URL ? process.env.BACKEND_URL : 'https://borshev.com',
});

/* Non-nuxt views */
app.get('/tdd-landing/', (req, res) => res.redirect(302, 'https://tdd.timepad.ru/event/1074439/'));


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
