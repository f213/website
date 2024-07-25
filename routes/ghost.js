const express = require("express");
const consola = require("consola");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

const target = process.env.BACKEND_URL || "https://borshev.com";

consola.info("Setting ghost proxy to", target);
["/content/images", "/ghost", "/rss"].forEach((path) =>
  router.use(
    path,
    createProxyMiddleware({
      target: `${target}${path}`,
      changeOrigin: true,
      xfwd: true,
    }),
  ),
);

module.exports = router;
