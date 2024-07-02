const express = require("express");
const { format } = require("timeago.js");
const ghost = require("../lib/ghost");

const router = express.Router();

router.get("/:slug", async (req, res, next) => {
  const url = `/api/v2/content/posts/slug/${req.params.slug}/?include=tags`;
  const data = await ghost.get({ url, req });

  const post = data.posts[0];
  post.time_ago = format(post.created_at, "ru");

  res.status(200).render("page", { post });
});

module.exports = router;
