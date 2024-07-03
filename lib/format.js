const { format: timeago, register: registerLocale } = require("timeago.js");

registerLocale("ru", require("timeago.js/lib/lang/ru").default);

module.exports = (post) => {
  post.time_ago = timeago(post.created_at, "ru");
  return post;
};
