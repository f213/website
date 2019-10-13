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

module.exports = async ({ uuid, host }) => {
  const url = `${host}/api/v2/admin/posts/`;
  const headers = { Authorization: `Ghost ${getToken()}` };
  const params = {
    filter: `uuid:${uuid}`,
    formats: 'html',
  };

  const response = await axios.get(url, { headers, params });
  const { posts } = response.data;

  if (!posts.length) {
    throw new Error('No posts found');
  }

  return posts[0];
};
