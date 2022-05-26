/* 
START

Given a collection of integers called numbers

SET result to an empty collection
SET size to the length of numbers
IF size <= 100
  SET count to 0
  SET currentTotal to 0
  WHILE count < size
    SET currentNumber to the element at current index of numbers
    SET currentTotal to currentTotal + currentNumber
    SET element at index count of result to currentTotal
    SET count to count + 1
RETURN result

END
*/

function runningTotalImperative(numbers) {
  let result = [];
  let size = numbers.length;

  if (size <= 100) {
    let count = 0;
    let currentTotal = 0;

    while (count < size) {
      let currentNumber = numbers[count];
      currentTotal += currentNumber;
      result.push(currentTotal);
      count += 1;
    }
  }

  return result;
}

function runningTotal(numbers) {
  return numbers.reduce((acc, curr, idx) => acc.concat((acc[idx - 1] || 0) + curr), [])
}