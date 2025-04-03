import { Hono } from "hono";

import {
  getEventType,
  getEventByAnimal,
  filterOutThings,
} from "./dbActions/localData";
import {
  isInProperFormat,
  formatToday,
  calculateTheDateFrom,
} from "../../modules/dateCals";

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

livestockEvent.get(":animal/:eventType/date", (c) => {
  const urlAnimal = c.req.param("animal");
  const urlEventType = c.req.param("eventType");
  const eventSelectAnimal = filterOutThings({
    species: urlAnimal,
    type: urlEventType,
  });
  const queryDate = c.req.query("setDate") ?? formatToday();
  const results = calculateTheDateFrom(queryDate, eventSelectAnimal);

  return c.json(results);
});

export { livestockEvent };
