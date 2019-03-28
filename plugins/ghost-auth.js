/*
 * Axios interceptor to add ghost backend "public" authentication
 */
export default ({ app, env }) => {
  app.$axios.interceptors.request.use((request) => {
    if (!('params' in request) || [null, undefined].includes(request.params)) {
      request.params = {};
    }
    request.params.key = env.ghostAPIKey;
    return request;
  });
};
