const express = require("express");
const ghost = require("../lib/ghost");

const format = require("../lib/format");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  let post, url;

  try {
    url = `/api/v2/content/posts/slug/${req.params.slug}/?include=tags&formats=html,plaintext`;
    post = (await ghost.get({ url, req })).posts[0];
    post.is_page = false;
  } catch {
    url = `/api/v2/content/pages/slug/${req.params.slug}/?formats=html,plaintext`;
    post = (await ghost.get({ url, req })).pages[0];
    post.is_page = true;
  }

  const similar = post.primary_tag
    ? (
        await ghost.get({
          url: `/api/v2/content/posts/?tag=${post.primary_tag.slug}&limit=11`,
          req,
          cache: true,
        })
      ).posts
    : [];

  res.append("Last-Modified", new Date(post.updated_at).toUTCString());
  res.status(200).render("page", {
    route: post.is_page ? "page" : "blog",
    post: format(post),
    similar: similar.filter((similarPost) => similarPost.slug !== req.params.slug),
  });
});

module.exports = router;
