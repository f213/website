const express = require("express");
const ghost = require("../lib/ghost");

const { format } = require("../lib/posts");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  const url = `/api/v2/admin/posts/?filter=uuid:${req.params.slug}&formats=html,plaintext`;
  const post = (await ghost.get({ url, req })).posts[0];
  post.is_page = false;

  res.status(200).render("page", {
    route: "blog",
    post: format(post),
    similar: [],
  });
});

module.exports = router;
