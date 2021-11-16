const { fetchPostAsAdmin } = require('../../lib/ghost-admin');

module.exports = async (request, res) => {
  const { uuid } = request.params;
  const { backendURL } = request.app.locals;

  let post;

  try {
    post = await fetchPostAsAdmin({ backendURL, uuid });
  } catch {
    res.status(502).send({ error: 'Post fetching error' });
  }

  if (!post) {
    res.status(404).send({ error: 'Post not found' });
  }
  res.send(post);
};
