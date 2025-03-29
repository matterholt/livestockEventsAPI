import { describe, it, expect } from "vitest";

import { livestockEvent } from "./index";

interface EventTypeItem {
  type: string;
  species: string;
}

describe("check only specific animal", () => {
  it("GETS /:animals", async () => {
    const res = await livestockEvent.request("/sheep");
    const results = (await res.json()) as EventTypeItem[];

    expect(res.status).toBe(200);

    results.forEach(({ species }) => {
      expect(species).toBe("sheep");
    });
  });
});

describe("selected animal along with events to target", () => {
  it("GETS /:animals/:eventType", async () => {
    const res = await livestockEvent.request("/sheep/gestation");
    const results = (await res.json()) as EventTypeItem[];

    expect(res.status).toBe(200);

    results.forEach(({ species }) => {
      expect(species).toBe("sheep");
    });

    results.forEach(({ type }) => {
      expect(type).toBe("gestation");
    });
  });
});
