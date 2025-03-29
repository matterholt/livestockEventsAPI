import { Hono } from "hono";
import { livestockEvent } from "./AnimalEvents";

const app = new Hono();

app.route("api/v1/", livestockEvent);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/test", (c) => {
  return c.text("Many posts");
});

app.post("/test", (c) => {
  return c.json(
    {
      message: "Created",
    },
    201,
    {
      "X-Custom": "Thank you",
    },
  );
});

export default app;
