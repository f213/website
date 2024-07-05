const express = require("express");
const ghost = require("../lib/ghost");
const { fetch: getPosts, format } = require("../lib/posts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const { posts, meta } = await getPosts({ req });

  res.status(200).render("blog", {
    route: "blog",
    posts: posts.map(format),
    ...meta,
  });
});

router.get("/page/:page", async (req, res, next) => {
  const page = parseInt(req.params.page, 10);

  if (!page) {
    return await next();
  }

  const { posts, meta } = await getPosts({ req, page });

  if (!posts.length) {
    return res.send(404);
  }

  res.status(200).render("blog", {
    route: "blog",
    posts: posts.map(format),
    ...meta,
  });
});

module.exports = router;
