const { fetchPostAsAdmin } = require('../../lib/ghost');

module.exports = async (req, res) => {
  const { uuid } = req.params;
  const { backendURL } = req.app.locals;

  let post;

  try {
    post = await fetchPostAsAdmin({ backendURL, uuid });
  } catch (_) {
    res.status(502).send({ error: 'Post fetching error' });
  }

  if (!post) {
    res.status(404).send({ error: 'Post not found' });
  }
  res.send(post);
};
