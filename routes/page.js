const express = require("express");
const format = require("../lib/format");
const ghost = require("../lib/ghost");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  const url = `/api/v2/content/posts/slug/${req.params.slug}/?include=tags`;
  const data = await ghost.get({ url, req });

  res.status(200).render("page", {
    route: "blog",
    post: format(data.posts[0]),
  });
});

module.exports = router;
