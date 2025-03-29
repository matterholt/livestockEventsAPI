import {
  env,
  createExecutionContext,
  waitOnExecutionContext,
} from "cloudflare:test";
import { describe, it, expect } from "vitest";

import app from "./index";

describe("Example", () => {
  it("GET /test", async () => {
    const res = await app.request("/test");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Many posts");
  });
  it("POST /test", async () => {
    const res = await app.request("/test", {
      method: "POST",
      body: JSON.stringify({ message: "hello hono" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    expect(res.status).toBe(201);
    expect(res.headers.get("X-Custom")).toBe("Thank you");
    expect(await res.json()).toEqual({
      message: "Created",
    });
  });
});
