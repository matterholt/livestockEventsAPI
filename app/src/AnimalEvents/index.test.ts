import { describe, it, expect } from "vitest";

import { livestockEvent } from "./index";

interface EventTypeItem {
  type: string;
}

describe("tests the livestock event path", () => {
  it("GET /:eventType", async () => {
    const res = await livestockEvent.request("/gestation");
    const results = (await res.json()) as EventTypeItem[];
    expect(res.status).toBe(200);

    results.forEach((item) => {
      expect(item.type).toBe("gestation");
    });
  });

  it("GET /:eventType", async () => {
    const res = await livestockEvent.request("/newborn");
    const results = (await res.json()) as EventTypeItem[];
    expect(res.status).toBe(200);

    results.forEach((item) => {
      expect(item.type).toBe("newborn");
    });
  });
});
