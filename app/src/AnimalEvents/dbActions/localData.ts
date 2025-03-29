import { livestockEvent } from "..";
import { livestockEvents } from "../data/livestockEvents";

export function getEventType(theEvent: string) {
  return livestockEvents.filter((x) => x.type === theEvent);
}
export function getEventByAnimal(animal: string, theEvent: string) {
  const filteredEvent = getEventType(theEvent);
  return filteredEvent.filter((x) => x.species === animal);
}
/*
keyValues ={
type: "gestation"
species:"sheep"
}
*/

export function filterOutThings(keyValues) {
  const keysOnly = Object.keys(keyValues);
  const results = new Set();
  // const results = livestockEvents.filter((x) => {
  //   for (let key of keysOnly) {
  //     console.log("GETTKEY", key);
  //     console.log("GETTIT", `${x[key]} === ${keyValues[key]}`);
  //     return x[key] === keyValues[key];
  //   }
  // });
  //
  for (const event of livestockEvents) {
    for (const key of keysOnly) {
      console.log("key", key);
      console.log("incomin", keyValues[key]);
      console.log("store", event[key]);
    }
  }

  return results;
}
