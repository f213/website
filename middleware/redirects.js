const routes = [
  { from: "/tags/favorites/", to: "/featured/" },
  { from: "/rss/index.xml", to: "/rss/" },
  { from: "/tough-dev-school-lms/", to: "/tough-dev-lms/" },
  { from: "/tdd-landing/", to: "https://tough-dev.school/python-testing" },
  { from: "/async-architecture/", to: "https://tough-dev.school/architecture" },
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
