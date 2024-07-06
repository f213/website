const express = require("express");
const ghost = require("../lib/ghost");
const { fetch: getPosts, format, latestDate } = require("../lib/posts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { posts, meta } = await getPosts({ req, filter: "featured:true", cache: true });

  res.append("Last-Modified", latestDate(posts).toUTCString());
  res.status(200).render("featured", {
    route: "featured",
    posts: posts.map(format),
    ...meta,
  });
});

router.get("/page/1", (req, res) => res.redirect(301, "/featured/"));

router.get("/page/:page", async (req, res, next) => {
  const page = parseInt(req.params.page, 10);

  if (!page) {
    return await next();
  }

  const { posts, meta } = await getPosts({ req, page, filter: "featured:true", cache: true });

  if (!posts.length) {
    return res.send(404);
  }

  res.append("Last-Modified", latestDate(posts).toUTCString());
  res.status(200).render("featured", {
    route: "featured",
    posts: posts.map(format),
    ...meta,
  });
});

module.exports = router;
