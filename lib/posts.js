const { format: timeago, register: registerLocale } = require("timeago.js");
registerLocale("ru", require("timeago.js/lib/lang/ru").default);

const ghost = require("./ghost");

module.exports = {
  format: (post) => {
    post.time_ago = timeago(post.created_at, "ru");
    return post;
  },

  fetch: async ({ req, filter, page, cache }) => {
    let url;
    page = page ? page : 1;

    if (filter) {
      url = `/api/v2/content/posts/?filter=${filter}&page=${page}&include=tags&limit=5`;
    } else {
      url = `/api/v2/content/posts/?page=${page}&include=tags&limit=5`;
    }

    const { posts, meta } = await ghost.get({ url, req, cache });

    return { posts, meta };
  },
};
