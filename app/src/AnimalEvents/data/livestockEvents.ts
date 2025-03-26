const livestockEvents = [
  { species: "sheep", event: "Added Ram", days: 0, type: "gestation" },
  { species: "sheep", event: "Removed Ram", days: 60, type: "gestation" },
  { species: "sheep", event: "Gestation Period", days: 146, type: "gestation" },
  {
    species: "sheep",
    event: "start lambing",
    days: 0 + 146,
    type: "gestation",
  },
  { species: "sheep", event: "end lambing", days: 60 + 146, type: "gestation" },
  { species: "cow", event: "end", days: 60 + 146, type: "gestation" },
  { species: "sheep", event: "birth of lamb", days: 0, type: "newborn" },
  { species: "sheep", event: "start on creep feed", days: 11, type: "newborn" },
  { species: "sheep", event: "wean lambs", days: 53, type: "newborn" },
  { species: "sheep", event: "sell culls", days: 69, type: "newborn" },
  { species: "sheep", event: "sheer lambs", days: 90, type: "newborn" },
];

export { livestockEvents };
