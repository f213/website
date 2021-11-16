const redirectableMethods = new Set(['GET', 'HEAD']);

function redirectUrl(request) {
  if (!redirectableMethods.has(request.method)) return;

  const url = request.originalUrl || request.url;

  if (url.includes('/page/1/')) {
    return url.replace('/page/1/', '/');
  }

  if (url.endsWith('/?')) {
    return url.slice(0, -1);
  }

  if (
    url !== '/' &&
    !url.endsWith('/') &&
    !url.includes('?') &&
    !url.includes('.')
  ) {
    return `${url}/`;
  }
}

export default (request, res, next) => {
  const redirectTo = redirectUrl(request);

  if (redirectTo) {
    res.writeHead(301, { location: redirectTo });
    res.end();
  } else {
    next();
  }
};
