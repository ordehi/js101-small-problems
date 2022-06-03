function addElements(array) {
  return array.reduce((acc, curr) => acc + curr);
}

function getAverage(numbers) {
  let total = addElements(numbers);
  let size = numbers.length;

  return parseInt(total / size);
}

/* 
Try to solve this problem using Array.prototype.forEach method. Did you manage to do it? Was it difficult? Now try to to solve it using Array.prototype.reduce method.
*/

function addElementsFE(array) {
  let total = 0;
  array.forEach((el) => (total += el));
  return total;
}
