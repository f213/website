const express = require("express");
const compression = require("compression");
const path = require("path");
const morgan = require("morgan");

const Sentry = require("@sentry/node");

if (process.env.NODE_ENV == "development") {
  require("dotenv").config();
}

const app = express();

// logging
app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(morgan("combined"));

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  });
}

// view engine setup
app.set("view engine", "html");
app.engine("html", require("./lib/nunjucks"));
app.engine("xml", require("./lib/nunjucks"));

app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.use("/bulma-bundled.css", (req, res) =>
  res.sendFile(__dirname + "/node_modules/bulma/css/versions/bulma-no-dark-mode.min.css"),
);
app.use("/a.js", (req, res) => res.sendFile(__dirname + "/node_modules/ackee-tracker/dist/ackee-tracker.min.js"));

app.use(require("./middleware/fancy_urls"));
app.use(require("./middleware/old_amp_urls"));
app.use(require("./middleware/redirects"));

app.use("/featured", require("./routes/featured"));
app.use("/blog", require("./routes/blog"));
app.use("/tags", require("./routes/tags"));
app.use("/p", require("./routes/preview"));
app.use("/sitemap.xml", require("./routes/sitemap"));
app.use(require("./routes/fake"));
app.use(require("./routes/ghost")); // ghost admin
app.use(require("./routes/page")); // blog page
app.use(require("./routes/home_page")); // home page

app.use(() => {
  // send 404 by default
  throw new Error("404");
});

if (process.env.NODE_ENV !== "development") {
  Sentry.setupExpressErrorHandler(app);
  app.use((err, req, res, next) => res.status(404).render("error", { path: req.path }));
}

module.exports = app;
