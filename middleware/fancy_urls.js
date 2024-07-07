const redirectableMethods = new Set(["GET", "HEAD"]);

function redirectUrl(req) {
  if (!["GET", "HEAD"].includes(req.method)) {
    return;
  }
  const url = req.originalUrl;

  if (url.endsWith("/?")) {
    return url.slice(0, -1);
  }

  if (url !== "/" && !url.endsWith("/") && !url.includes("?") && !url.includes(".")) {
    return `${url}/`;
  }
}

module.exports = (req, res, next) => {
  const redirectTo = redirectUrl(req);

  if (redirectTo) {
    res.redirect(301, redirectTo);
    return res.end();
  }
  next();
};
