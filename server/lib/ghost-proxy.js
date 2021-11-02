const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware');

const hostRewriteInterceptor = responseInterceptor(async (responseBuffer) => {
  const response = responseBuffer.toString('utf8');
  return response.replaceAll(process.env.BACKEND_URL, process.env.ABSOLUTE_HOST);
});

module.exports = ({ target, rewriteHost = false }) => {
  const options = {
    target,
    changeOrigin: true,
  };

  if (rewriteHost) {
    options.selfHandleResponse = true;
    options.onProxyRes = hostRewriteInterceptor;
  }

  return createProxyMiddleware(options);
};
