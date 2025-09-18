
import { main } from "../../src/handler/hello.js";

test("hello returns 200 and message", async () => {
  const res = await main();
  expect(res.statusCode).toBe(200);
  const body = JSON.parse(res.body);
  expect(body.message).toMatch(/Hello from Serverless Boilerplate Extended/);
});
