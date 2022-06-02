function shallowSort(array) {
  return array.slice().sort((a, b) => a - b);
}

function findDup(numbers) {
  let sortedNumbers = shallowSort(numbers);
  let dupe = null;

  sortedNumbers.every((number, index) => {
    if (number === sortedNumbers[index + 1]) {
      dupe = number;
      return false;
    }
    return true;
  });

  return dupe;
}

// Launch's solutions

function findDupWithFor(array) {
  let seen = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (seen[array[idx]]) {
      return array[idx];
    } else {
      seen[array[idx]] = true;
    }
  }

  return undefined;
}

function count(array, element) {
  let count = 0;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] === element) {
      count += 1;
    }
  }
  return count;
}

function findDupWithFind(array) {
  return array.find((element) => count(array, element) === 2);
}
