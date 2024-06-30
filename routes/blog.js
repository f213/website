const express = require("express");
const ghost = require("../lib/ghost");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const url = `/api/v2/content/posts/?include=tags&limit=5`;
  const posts = await ghost.get({ url, req, next });

  res.status(200).send(posts);
});

router.get("/page/:page", async (req, res, next) => {
  const page = parseInt(req.params.page, 10);

  if (!page) {
    return await next();
  }

  const url = `/api/v2/content/posts/?include=tags&page=${page}&limit=5`;
  const posts = await ghost.get({ url, req, next });

  if (!posts.posts.length) {
    return await next();
  }

  res.status(200).send(posts);
});

module.exports = router;
