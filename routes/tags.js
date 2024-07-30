const express = require("express");
const ghost = require("../lib/ghost");
const format = require("../lib/format");
const { getPosts } = require("../lib/posts");

const router = express.Router();

async function getTag(req) {
  const { slug } = req.params;
  const url = `/api/v2/content/tags/slug/${slug}/?limit=5`;

  const tag = (await ghost.get({ url, req, cache: true })).tags[0];

  return tag;
}

router.get("/:slug", async (req, res, next) => {
  const tag = await getTag(req);

  if (!tag) {
    return res.status(404);
  }

  const { posts, meta } = await getPosts({ req, filter: `tag:${tag.slug}` });

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

router.get("/:slug/page/1", (req, res) => res.redirect(301, `/tags/${req.params.slug}/`));

router.get("/:slug/page/:page", async (req, res, next) => {
  const page = parseInt(req.params.page, 10);
  if (!page) {
    return res.status(404);
  }

  const tag = await getTag(req);

  if (!tag) {
    return res.status(404);
  }

  const { posts, meta } = await getPosts({ req, page, filter: `tag:${tag.slug}` });
  if (!posts.length) {
    return res.send(404);
  }

  res.status(200).render("tag", {
    route: "blog",
    tag,
    page,
    posts: posts.map(format),
    ...meta,
  });
});

module.exports = router;
