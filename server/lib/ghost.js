const jwt = require('jsonwebtoken');
const axios = require('axios');

function getToken() {
  const key = process.env.ADMIN_API_KEY;
  const [id, secret] = key.split(':');

  // https://ghost.org/docs/api/v2/admin/#token-authentication
  return jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid: id,
    algorithm: 'HS256',
    expiresIn: '5m',
    audience: '/v2/admin/',
  });
}

module.exports = {
  async fetchPostAsAdmin({ uuid }) {
    const backendURL = process.env.BACKEND_URL || 'https://borshev.com';
    const url = `${backendURL}/ghost/api/v2/admin/posts/`;

    const response = await axios.get(url, {
      params: {
        filter: `uuid:${uuid}`,
        formats: 'html',
      },
      headers: {
        Authorization: `Ghost ${getToken()}`,
      },
    });
    return response.data.posts[0];
  },
};
