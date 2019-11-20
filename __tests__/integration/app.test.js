const req = require("supertest");

const app = require("../../src/app");

describe("App", () => {
  it("should return status 200", async () => {
    const res = await req(app).get("/");
    expect(res.status).toBe(200);
  });
});
