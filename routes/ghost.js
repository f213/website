const express = require("express");
const consola = require("consola");
const { createProxyMiddleware } = require("http-proxy-middleware");

const router = express.Router();

const target = process.env.BACKEND_URL || "https://borshev.com";

consola.info("Setting ghost proxy to", target);
const prefixes = ["/content/images", "/ghost", "/rss"];

router.use(
  createProxyMiddleware({
    target,
    pathFilter: (path) => prefixes.some((prefix) => path === prefix || path.startsWith(`${prefix}/`)),
    changeOrigin: true,
    xfwd: true,
  }),
);

module.exports = router;
