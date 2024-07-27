const assert = require("node:assert/strict");
const { describe, it } = require("node:test");
const request = require("supertest");

const app = require("../app");

describe("Static file routing", async () => {
  it("Serves bulma from node_modules", async () => {
    const response = await request(app).get("/bulma-bundled.css");
    assert.equal(response.status, 200);
    assert.match(response.headers["content-type"], /text\/css/);
  });
  it("Serves ackee tracker js", async () => {
    const response = await request(app).get("/a.js");
    assert.equal(response.status, 200);
    assert.match(response.headers["content-type"], /application\/javascript/);
  });
  it("Serves static files", async () => {
    const response = await request(app).get("/css/style.css");
    assert.equal(response.status, 200);
    assert.match(response.headers["content-type"], /text\/css/);
  });
});

describe("Redirects", async () => {
  it("Redirects /tags/favorites/ -> featured", async () => {
    const response = await request(app).get("/tags/favorites/");
    assert.equal(response.status, 301);
    assert.equal(response.headers["location"], "/featured/");
  });
  it("Redirects urls without slashses", async () => {
    const response = await request(app).get("/tags/favorites");
    assert.equal(response.status, 301);
    assert.equal(response.headers["location"], "/tags/favorites/");
  });
  it("Redirects old AMP urls", async () => {
    const response = await request(app).get("/amp/any-post/");
    assert.equal(response.status, 301);
    assert.equal(response.headers["location"], "/any-post/");
  });
});
