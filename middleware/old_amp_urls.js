module.exports = (req, res, next) => {
  if (req.originalUrl.toLowerCase().startsWith("/amp/")) {
    res.redirect(301, req.originalUrl.toLowerCase().replace("/amp/", "/"));
    return res.end();
  }
  next();
};
