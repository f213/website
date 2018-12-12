function redirectUrl(req) {
  const url = (req.originalUrl || req.url);
  const { hostname } = req;

  if (!hostname.includes('borshev.com')) {
    return `https://borshev.com${url}`;
  }
}

module.exports = (req, res, next) => {
  const redirectTo = redirectUrl(req);

  if (process.env.NODE_ENV === 'production' && redirectTo) {
    res.writeHead(301, { location: redirectTo });
    res.end();
  } else {
    next();
  }
};
