function redirectUrl(request) {
  const url = request.originalUrl || request.url;
  const { hostname } = request;

  if (!hostname.includes('borshev.com')) {
    return `https://borshev.com${url}`;
  }
}

module.exports = (request, res, next) => {
  const redirectTo = redirectUrl(request);

  if (process.env.NODE_ENV === 'production' && redirectTo) {
    res.writeHead(301, { location: redirectTo });
    res.end();
  } else {
    next();
  }
};
