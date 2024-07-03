const express = require("express");
const format = require("../lib/format");
const ghost = require("../lib/ghost");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  const url = `/api/v2/content/posts/slug/${req.params.slug}/?include=tags`;
  const post = (await ghost.get({ url, req })).posts[0];
  const similar = (
    await ghost.get({
      url: `/api/v2/content/posts/?tag=${post.primary_tag.slug}&limit=10`,
      req,
    })
  ).posts;

  res.status(200).render("page", {
    route: "blog",
    post: format(post),
    similar,
  });
});

module.exports = router;
