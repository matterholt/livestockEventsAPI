import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import { getEventType, getEventByAnimal } from "./dbActions/localData";
import {
  isInProperFormat,
  formatToday,
  calculateTheDateFrom,
} from "../modules/dateCals";

const livestockEvent = new Hono();

// since this is all going to be the similar eventType,
// wonder should cache or store data global so
// would have to check thou
livestockEvent.get("/:eventType", (c) => {
  const selectEvent = c.req.param("eventType");
  const queryEvent = getEventType(selectEvent);

  if (queryEvent.length === 0) {
    throw new HTTPException(400, {
      message: `no event of ${selectEvent} defined`,
    });
  }

  return c.json(queryEvent);
});

livestockEvent.get("/:eventType/:animal", (c) => {
  const { eventType, animal } = c.req.param();
  const eventsByAnimal = getEventByAnimal(animal, eventType);

  if (eventsByAnimal.length === 0) {
    throw new HTTPException(400, {
      message: `no animal of ${animal} defined`,
    });
  }

  const dateToSet = c.req.query("setDate");
  if (dateToSet === undefined) {
    return c.json(eventsByAnimal);
  }
  const properDate = isInProperFormat(dateToSet);

  if (properDate == "error") {
    throw new HTTPException(400, {
      message: `wrong format provided ${dateToSet} => YYYY-MM-DD`,
    });
  }
  const datesWithEvents = calculateTheDateFrom(properDate.data, eventsByAnimal);

  return c.json(datesWithEvents);
});

export { livestockEvent };
