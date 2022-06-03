const DECIMAL_PLACES = 3;

function multiplyElements(array) {
  return array.reduce((acc, curr) => acc * curr);
}

function getAverage(numbers) {
  let total = multiplyElements(numbers);
  let size = numbers.length;

  return total / size;
}

function limitDecimals(number, places) {
  return number.toFixed(places);
}

function multiplicativeAverage(numbers) {
  let average = getAverage(numbers);
  let rounded = limitDecimals(average, DECIMAL_PLACES);

  return rounded;
}
