const nunjucks = require("nunjucks");

nunjucks.configure({
  watch: process.env.NODE_ENV === "development",
  noCache: process.env.NODE_ENV === "development",
});

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader("views"), {
  throwOnUndefined: true,
  trimBlocks: true,
  lstripBlocks: true,
});

const appWideTemplateContext = {
  origin: process.env.ORIGIN ? process.env.ORIGIN : "https://borshev.com",
};

module.exports = (filePath, opts, callback) => {
  const rendered = env.render(filePath, { ...opts, ...appWideTemplateContext }, callback);
};
