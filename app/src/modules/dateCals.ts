// used for any date related actions
import { Temporal, Intl, toTemporalInstant } from "@js-temporal/polyfill";
// Date.prototype.toTemporalInstant = toTemporalInstant;
//
//

export interface sampleData {
  event: string;
  days: number;
  species: string;
  type: string;
}

export interface dataWithDate extends sampleData {
  date: string;
}

function formatToday() {
  return Temporal.Now.plainDateISO().toString();
}

function calculateTheDateFrom(definedDate: string, data: sampleData[]) {
  const theDate = Temporal.PlainDate.from(definedDate);

  const results = data.map((i) => {
    return {
      ...i,
      date: theDate.add({ days: i.days }),
    };
  });

  return results;
}

export { calculateTheDateFrom, formatToday };
