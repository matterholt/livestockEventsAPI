import { describe, it, expect } from "vitest";

import { livestockEvent } from "./index";

interface EventTypeItem {
  type: string;
  species: string;
  days: number;
}

export interface DataWithDate extends EventTypeItem {
  date: string;
}

const mostCurrentDate = () => {
  const today = new Date();
  const formatter = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formatter.format(today).replace(/\//g, "-");
};

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

describe("takes the data structure and adds dates", () => {
  it("GETS /:animals/:eventType/date", async () => {
    const res = await livestockEvent.request("/sheep/gestation/date");
    const results = (await res.json()) as DataWithDate[];

    expect(res.status).toBe(200);

    results.forEach(({ species }) => {
      expect(species).toBe("sheep");
    });

    results.forEach(({ type }) => {
      expect(type).toBe("gestation");
    });

    const todayFormated = mostCurrentDate();

    const zeroDate = results.filter((x) => x.days === 0);

    zeroDate.forEach(({ date }) => {
      expect(date).toBe(todayFormated);
    });
  });

  it("GETS /:animals/:eventType/date?with setdate query", async () => {
    const res = await livestockEvent.request(
      "/sheep/gestation/date?setDate=2025-01-02",
    );
    const results = (await res.json()) as DataWithDate[];

    expect(res.status).toBe(200);

    results.forEach(({ species }) => {
      expect(species).toBe("sheep");
    });

    results.forEach(({ type }) => {
      expect(type).toBe("gestation");
    });

    const zeroDate = results.filter((x) => x.days === 0);

    zeroDate.forEach(({ date }) => {
      expect(date).toBe("2025-01-02");
    });
  });
});
