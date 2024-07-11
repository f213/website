const routes = [
  { from: "/tags/favorites/", to: "/featured/" },
  { from: "/rss/index.xml", to: "/rss/" },
  { from: "/tough-dev-school-lms/", to: "/tough-dev-lms/" },
];

module.exports = (req, res, next) => {
  for (const route of routes) {
    if (req.originalUrl.toLowerCase() == route.from) {
      res.redirect(301, route.to);
      return res.end();
    }
  }
  next();
};
