const { fetchAMPPost } = require('../lib/ghost-admin');

module.exports = async (req, res) => {
  let html;

  try {
    html = await fetchAMPPost(req.params.slug);
  } catch (_) {
    res.status(404).send({ error: 'Post not found' });
  }

  res.send(html);
};
