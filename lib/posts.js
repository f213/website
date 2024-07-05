const { format: timeago, register: registerLocale } = require("timeago.js");
registerLocale("ru", require("timeago.js/lib/lang/ru").default);

const ghost = require("./ghost");

module.exports = {
  format: (post) => {
    post.time_ago = timeago(post.created_at, "ru");
    return post;
  },

  fetch: async ({ req, tag, page }) => {
    let url;
    page = page ? page : 1;

    if (tag) {
      url = `/api/v2/content/posts/?filter=tag:${tag.slug}&page=${page}&include=tags&limit=5`;
    } else {
      url = `/api/v2/content/posts/?page=${page}&include=tags&limit=5`;
    }

    const { posts, meta } = await ghost.get({ url, req, cache: true });

    return { posts, meta };
  },
};
