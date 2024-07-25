const express = require("express");
const ghost = require("../lib/ghost");
const { fetch: getPosts, format, latestDate } = require("../lib/posts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { posts, meta } = await getPosts({ req });

  res.append("Last-Modified", latestDate(posts).toUTCString());
  res.status(200).render("home_page", {
    route: "blog",
    posts: posts.map(format),
    ...meta,
  });
});

module.exports = router;
