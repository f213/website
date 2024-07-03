const nunjucks = require("nunjucks");

nunjucks.configure({
  watch: process.env.NODE_ENV === "development",
  noCache: process.env.NODE_ENV === "development",
});

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader("views"), {
  throwOnUndefined: false,
  trimBlocks: true,
  lstripBlocks: true,
});

module.exports = env;
