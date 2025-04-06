import { livestockEvents } from "../../data/livestockEvents";

export function getEventType(theEvent: string) {
  return livestockEvents.filter((x) => x.type === theEvent);
}
export function getEventByAnimal(animal: string, theEvent: string) {
  const filteredEvent = getEventType(theEvent);
  return filteredEvent.filter((x) => x.species === animal);
}

type LivestockEvent = {
  type: string;
  species: string;
};

export function filterOutThings(keyValues: Partial<LivestockEvent>) {
  const keysOnly = Object.keys(keyValues) as (keyof LivestockEvent)[];
  const results = new Set<LivestockEvent>();

  for (const event of livestockEvents) {
    const evaluation = [];
    for (const key of keysOnly) {
      if (keyValues[key] === event[key]) {
        evaluation.push(true);
      }
    }
    if (evaluation.length === keysOnly.length) {
      results.add(event);
    }
  }

  return [...results];
}
