import { Hono } from "hono";
import { livestockEvent } from "./AnimalEvents";

import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";

const app = new Hono();

app.use(
  "api/v1/*",
  jwt({
    secret: "it-is-very-secret",
  }),
);
app.route("api/v1", livestockEvent);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
