const axios = require("axios");
const jwt = require("jsonwebtoken");
const NodeCache = require("node-cache");

const target = process.env.BACKEND_URL || "https://borshev.com";
const ghostAPIKey = process.env.GHOST_API_KEY || "d625ca2d60e5eaf0b1a6f861e8";

const backend = axios.create({
  baseURL: `${target}/ghost/`,
});

function getToken() {
  if (!process.env.GHOST_ADMIN_API_KEY) {
    throw new Error("Please set GHOST_ADMIN_API_KEY env variable");
  }

  const key = process.env.GHOST_ADMIN_API_KEY;
  const [id, secret] = key.split(":");

  // https://ghost.org/docs/api/v2/admin/#token-authentication
  return jwt.sign({}, Buffer.from(secret, "hex"), {
    keyid: id,
    algorithm: "HS256",
    expiresIn: "5m",
    audience: "/v2/admin/",
  });
}

const CACHE = new NodeCache({ stdTTL: 300 });

// ghost auth
backend.interceptors.request.use((request) => {
  if (request.url.includes("/v2/content/")) {
    // Content API auth, add ?key=<FRONTEND TOKEN> to every request
    if (!("params" in request) || [null, undefined].includes(request.params)) {
      request.params = {};
    }
    request.params.key = ghostAPIKey;
    return request;
  }

  if (request.url.includes("/v2/admin/")) {
    // Admin API auth
    request.headers["Authorization"] = `Ghost ${getToken()}`;

    return request;
  }
});

module.exports = {
  async get({ url, req, cache }) {
    if (cache) {
      const cached = CACHE.get(url);
      if (cached) {
        return cached;
      }
    }

    const res = await backend.get(url, {
      headers: {
        "X-Forwarded-For": req.ip,
      },
    });

    if (res.status !== 200) {
      throw new Error("http");
    }
    if (cache) {
      CACHE.set(url, res.data);
    }

    return res.data;
  },
};
