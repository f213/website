const redirectableMethods = ['GET', 'HEAD'];

function redirectUrl(req) {
  if (!redirectableMethods.includes(req.method)) return;

  const url = (req.originalUrl || req.url);

  if (url.includes('/page/1/')) {
    return url.replace('/page/1/', '/');
  }

  if (url.endsWith('/?')) {
    return url.slice(0, -1);
  }

  if (url !== '/' && !url.endsWith('/') && !url.includes('?') && !url.includes('.')) {
    return `${url}/`;
  }
}

export default (req, res, next) => {
  const redirectTo = redirectUrl(req);

  if (redirectTo) {
    res.writeHead(301, { location: redirectTo });
    res.end();
  } else {
    next();
  }
};
