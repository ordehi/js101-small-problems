const INIT_COUNT = 1;

function printOccurrences(occurrences) {
  for (const item in occurrences) {
    console.log(`${item} => ${occurrences[item]}`);
  }
}

function countOccurrences(collection) {
  const occurrences = {};

  collection.forEach(
    (el) => (occurrences[el] = ++occurrences[el] || INIT_COUNT)
  );

  printOccurrences(occurrences);
}

// Try to solve the problem when words are case insensitive, e.g. "suv" and "SUV" represent the same vehicle type.

function countOccurrencesCase(collection) {
  const occurrences = {};

  collection.forEach(
    (el) =>
      (occurrences[el.toLowerCase()] =
        ++occurrences[el.toLowerCase()] || INIT_COUNT)
  );

  printOccurrences(occurrences);
}
