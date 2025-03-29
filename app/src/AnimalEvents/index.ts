import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import {
  getEventType,
  getEventByAnimal,
  filterOutThings,
} from "./dbActions/localData";
import {
  isInProperFormat,
  formatToday,
  calculateTheDateFrom,
} from "../modules/dateCals";

const livestockEvent = new Hono();

livestockEvent.get(":animal", (c) => {
  const urlAnimal = c.req.param("animal");
  const eventSelectAnimal = filterOutThings({ species: urlAnimal });
  return c.json(eventSelectAnimal);
});

livestockEvent.get(":animal/:eventType", (c) => {
  const urlAnimal = c.req.param("animal");
  const urlEventType = c.req.param("eventType");
  const eventSelectAnimal = filterOutThings({
    species: urlAnimal,
    type: urlEventType,
  });
  return c.json(eventSelectAnimal);
});

export { livestockEvent };
