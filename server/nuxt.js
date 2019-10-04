const { Nuxt, Builder } = require('nuxt');
const config = require('../nuxt.config.js');

module.exports = async ({ app }) => {
  config.dev = !(process.env.NODE_ENV === 'production');

  // Init Nuxt.js
  const nuxt = new Nuxt(config);
  await nuxt.ready();

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);
};
