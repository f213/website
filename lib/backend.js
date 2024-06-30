const axios = require("axios");

const target = process.env.BACKEND_URL || "https://borshev.com";
const ghostAPIKey = process.env.GHOST_API_KEY || "d625ca2d60e5eaf0b1a6f861e8";

const ghost = axios.create({
  baseURL: `${target}/ghost/`,
});

// ghost frontend auth
ghost.interceptors.request.use((request) => {
  if (!("params" in request) || [null, undefined].includes(request.params)) {
    request.params = {};
  }
  request.params.key = ghostAPIKey;
  return request;
});

module.exports = ghost;
