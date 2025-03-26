import { livestockEvents } from "../data/livestockEvents";

export function getEventType(theEvent: string) {
  return livestockEvents.filter((x) => x.type === theEvent);
}
export function getEventByAnimal(animal: string, theEvent: string) {
  const filteredEvent = getEventType(theEvent);
  return filteredEvent.filter((x) => x.species === animal);
}
