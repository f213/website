const express = require("express");
const ghost = require("../lib/ghost");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  const url = `/api/v2/content/posts/slug/${req.params.slug}/`;
  const data = await ghost.get({ url, req });

  res.status(200).render("page", { post: data.posts[0] });
});

module.exports = router;
