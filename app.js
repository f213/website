const express = require("express");
const compression = require("compression");
const path = require("path");
const morgan = require("morgan");

const nunjucks = require("./lib/nunjucks");

if (process.env.NODE_ENV == "development") {
  require("dotenv").config();
}

const app = express();

// logging
app.set("trust proxy", true);
app.disable("x-powered-by");
app.use(morgan("combined"));

// view engine setup
app.set("view engine", "html");
nunjucks.express(app); // init nunjucks, https://mozilla.github.io/nunjucks/api.html#express

app.use(compression());
app.use(express.static(path.join(__dirname, "public")));
app.use("/bulma-bundled.css", (req, res) =>
  res.sendFile(__dirname + "/node_modules/bulma/css/versions/bulma-no-dark-mode.min.css"),
);
app.use(require("./middleware/fancy_urls"));
app.use(require("./middleware/redirects"));

app.use("/featured", require("./routes/featured"));
app.use("/blog", require("./routes/blog"));
app.use("/tags", require("./routes/tags"));
app.use(require("./routes/ghost"));
app.use(require("./routes/page"));
app.use("/", (req, res) => res.render("home_page"));

// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//next(createError(404));
//});

// error handler
//app.use(function (err, req, res, next) {
//// set locals, only providing error in development
//res.locals.message = err.message;
//res.locals.error = req.app.get("env") === "development" ? err : {};

//// render the error page
//res.status(err.status || 500);
//res.render("error");
//});

module.exports = app;
