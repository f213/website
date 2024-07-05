const express = require("express");
const ghost = require("../lib/ghost");
const format = require("../lib/format");

const router = express.Router();

async function getTag(req) {
  const { slug } = req.params;
  const url = `/api/v2/content/tags/slug/${slug}/?limit=5`;

  const tag = (await ghost.get({ url, req, cache: true })).tags[0];

  return tag;
}

async function getPosts({ req, tag, page }) {
  page = page ? page : 1;

  const url = `/api/v2/content/posts/?filter=tag:${tag.slug}&page=${page}&include=tags&limit=5`;

  const { posts, meta } = await ghost.get({ url, req, cache: true });

  return { posts, meta };
}

router.get("/:slug", async (req, res, next) => {
  const tag = await getTag(req);

  if (!tag) {
    return res.status(404);
  }

  const { posts, meta } = await getPosts({ req, tag });

  if (!posts.length) {
    return res.send(404);
  }

  res.status(200).render("tag", {
    route: "blog",
    tag,
    posts: posts.map(format),
    ...meta,
  });
});

router.get("/:slug/page/:page", async (req, res, next) => {
  const page = parseInt(req.params.page, 10);
  if (!page) {
    return res.status(404);
  }

  const tag = await getTag(req);

  if (!tag) {
    return res.status(404);
  }

  console.log(tag);

  const { posts, meta } = await getPosts({ req, tag, page });
  if (!posts.length) {
    return res.send(404);
  }

  res.status(200).render("tag", {
    route: "blog",
    tag,
    posts: posts.map(format),
    ...meta,
  });
});

module.exports = router;
