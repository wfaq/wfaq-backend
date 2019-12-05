const req = require("supertest");

const app = require("../../src/app");

describe("Users", () => {
  it("should return status 200", async () => {
    const res = await req(app).get("/users");
    expect(res.status).toBe(200);
  });
});
