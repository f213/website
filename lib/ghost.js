const axios = require("axios");
const NodeCache = require("node-cache");

const target = process.env.BACKEND_URL || "https://borshev.com";
const ghostAPIKey = process.env.GHOST_API_KEY || "d625ca2d60e5eaf0b1a6f861e8";

const ghost = axios.create({
  baseURL: `${target}/ghost/`,
});

const ghostCache = new NodeCache({ stdTTL: 300 });

// ghost frontend auth
ghost.interceptors.request.use((request) => {
  if (!("params" in request) || [null, undefined].includes(request.params)) {
    request.params = {};
  }
  request.params.key = ghostAPIKey;
  return request;
});

module.exports = {
  async get({ url, req, cache }) {
    if (cache) {
      const cached = ghostCache.get(url);
      if (cached) {
        return cached;
      }
    }

    const res = await ghost.get(url, {
      headers: {
        "X-Forwarded-For": req.ip,
      },
    });

    if (res.status !== 200) {
      throw new Error("http");
    }
    if (cache) {
      ghostCache.set(url, res.data);
    }

    return res.data;
  },
};
