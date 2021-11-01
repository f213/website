const { responseInterceptor } = require('http-proxy-middleware');

module.exports = responseInterceptor(async (responseBuffer) => {
  const response = responseBuffer.toString('utf8');
  return response.replaceAll(process.env.BACKEND_URL, process.env.ABSOLUTE_HOST);
});
