const express = require("express");
const ghost = require("../lib/ghost");

async function getPosts(req) {
  const url = "/api/v2/content/posts/?limit=99999";
  const { posts } = await ghost.get({ url, req, cache: true });

  return posts.map((post) => {
    const lastmod = new Date(post.updated_at ? post.updated_at : post.created_at);
    return {
      slug: post.slug,
      lastmod: lastmod.toISOString().replace(/T.+$/, ""),
    };
  });
}

async function getTags(req) {
  const url = "/api/v2/content/tags/?limit=99999";
  const { tags } = await ghost.get({ url, req, cache: true });

  return tags.map((tag) => {
    const lastmod = new Date();
    lastmod.setDate(lastmod.getDate() - 7);
    return {
      slug: tag.slug,
      lastmod: lastmod.toISOString().replace(/T.+$/, ""),
    };
  });
}

module.exports = async (req, res) => {
  const [posts, tags] = await Promise.all([getPosts(req), getTags(req)]);
  res.setHeader("content-type", "application/xml");
  return res.render("sitemap.xml", {
    posts,
    tags,
    today: new Date().toISOString().replace(/T.+$/, ""),
  });
};
