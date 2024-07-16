const express = require("express");
const ghost = require("../lib/ghost");

const { format } = require("../lib/posts");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  const url = `/api/v2/content/posts/slug/${req.params.slug}/?include=tags&formats=html,plaintext`;
  const post = (await ghost.get({ url, req })).posts[0];
  const similar = (
    await ghost.get({
      url: `/api/v2/content/posts/?tag=${post.primary_tag.slug}&limit=10`,
      req,
      cache: true,
    })
  ).posts;

  res.append("Last-Modified", new Date(post.updated_at).toUTCString());
  res.status(200).render("page", {
    route: "blog",
    post: format(post),
    similar,
  });
});

module.exports = router;
