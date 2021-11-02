/*
 *
 * Custom ghost helpers which are not covered by the stock API
 * */

const jwt = require('jsonwebtoken');
const axios = require('axios');

axios.defaults.headers.common['X-Forwarded-Proto'] = 'https'; // to fix ghost redirect

const backendURL = process.env.BACKEND_URL || 'https://borshev.com';

function getToken() {
  const key = process.env.GHOST_ADMIN_API_KEY;
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

  async fetchAMPPost(slug) {
    const url = `${backendURL}/${slug}/amp/`;
    const response = await axios.get(url);

    return response.data;
  },
};
