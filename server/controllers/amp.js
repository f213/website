const { fetchAMPPost } = require('../lib/ghost-admin');

module.exports = async (request, res) => {
  let html;

  try {
    html = await fetchAMPPost(request.params.slug);
  } catch {
    res.status(404).send({ error: 'Post not found' });
  }

  res.send(html);
};
