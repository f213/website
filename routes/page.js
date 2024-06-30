const express = require("express");
const ghost = require("../lib/ghost");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  const { slug } = req.params;
  let post;
  try {
    post = await ghost.get(`/api/v2/content/posts/slug/${slug}/`);
  } catch {
    return await next();
  }

  if (post.status != 200) {
    return await next();
  }
  res.status(200).send(post.data);
});

module.exports = router;
