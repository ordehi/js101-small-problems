/* 
Counting Up

Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.

Examples:

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

*/

function sequence1(number) {
  let result = [];
  let count = 1;

  while (true) {
    result.push(count++);
    if (count === number + 1) break;
  }

  return result;
}

function sequence(number) {
  return number < 10000
    ? Array(number)
        .fill(1)
        .map((el, idx) => el + idx)
    : number;
}

const sequence = (number) =>
  number < 10000
    ? Array(number)
        .fill(1)
        .map((el, idx) => el + idx)
    : number;
