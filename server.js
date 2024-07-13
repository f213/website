const consola = require("consola");
const app = require("./app");

/* Run express */
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.set("port", port);
app.listen(port, host);

consola.ready({
  message: `Server listening on http://${host}:${port}`,
  badge: true,
});
