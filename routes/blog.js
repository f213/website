const express = require("express");
const ghost = require("../lib/ghost");
const format = require("../lib/format");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const url = `/api/v2/content/posts/?include=tags&limit=5`;
  const { posts, meta } = await ghost.get({ url, req });

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

  const url = `/api/v2/content/posts/?include=tags&page=${page}&limit=5`;
  const { posts, meta } = await ghost.get({ url, req });

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
