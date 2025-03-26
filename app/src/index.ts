import { Hono } from "hono";
import { livestockEvent } from "./AnimalEvents";

const app = new Hono();

app.route("api/v1/", livestockEvent);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
