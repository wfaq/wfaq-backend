const req = require("supertest");

const app = require("../../src/app");

describe("App", () => {
  it("should return status 200", async () => {
    const res = await req(app).get("/questions");
    expect(res.status).toBe(200);
  });
});
