const assert = require("node:assert/strict");
const { describe, it } = require("node:test");
const request = require("supertest");

const app = require("../app");

describe("Ghost proxy", async () => {
  it("Proxies ghost admin page", async () => {
    const response = await request(app).get("/ghost/");
    assert.equal(response.status, 200);
    assert.match(response.headers["content-type"], /text\/html/);
  });
  it("Proxies ghost admin API", async () => {
    const response = await request(app).get("/ghost/api/admin/users/me/?include=roles");
    assert.equal(response.status, 403);
  });
});
