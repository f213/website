/*
 * Axios interceptor to add ghost backend "public" authentication
 */
export default ({ app, env }) => {
  app.$axios.interceptors.request.use((request) => {
    if (!('params' in request)) {
      request.params = {};
    }
    request.params.client_id = env.ghostClientId;
    request.params.client_secret = env.ghostClientSecret;
    return request;
  });
};
