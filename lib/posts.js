const ghost = require("./ghost");

module.exports = {
  getPosts: async ({ req, filter, page, cache }) => {
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

  latestDate: (postList) => {
    const posts = postList.toSorted((a, b) => {
      const first = new Date(a.updated_at);
      const second = new Date(b.updated_at);

      if (first > second) {
        return -1;
      }
      if (first == second) {
        return 0;
      }
      if (first < second) {
        return 1;
      }
    });
    return new Date(posts[0].updated_at);
  },
};
