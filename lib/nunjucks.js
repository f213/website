const nunjucks = require("nunjucks");

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader("views"), {
  throwOnUndefined: true,
  watch: process.env.NODE_ENV === "development",
  noCache: process.env.NODE_ENV === "development",
});

module.exports = env;
