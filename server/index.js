const express = require('express');
const consola = require('consola');

const proxy = require('./proxy');
const nuxt = require('./nuxt');
const getPreviewPost = require('./getPreviewPost');


const redirectToTheMainHost = require('./middleware/redirect-to-the-main-host');

const app = express();

const backendURL = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'https://borshev.com';

app.use(redirectToTheMainHost);

/* Non-nuxt views */
app.get('/tdd-landing/', (req, res) => res.redirect(302, 'https://tdd.timepad.ru/event/1074439/'));

app.get('/api/v8/preview-posts/:uuid', async (req, res) => {
  try {
    res.send(await getPreviewPost({ uuid: req.params.uuid, host: backendURL }));
  } catch (error) {
    res.status(404).send({ error: '404' });
  }
});

/* Proxy to the ghost backend */
proxy({
  app,
  target: backendURL,
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
