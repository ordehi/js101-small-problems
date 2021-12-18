/* 
3. accumulator variable starts with value 1
4. conditional checks value of operation
   a. if "s" go to sum loop
   b. if "p" go to product loop
   SUM loop:

- counter starts at 1
- if counter is less than or equal to targetInteger, set accumulator to the sum of accumulator + counter
- else break
  PRODUCT loop:
- counter starts at 1
- if counter is less than or equal to targetInteger, set accumulator to the product of accumulator \* counter
- else break

5. Return the value of accumulator

*/

const readlineSync = require('readline-sync');

let targetInteger = parseInt(
  readlineSync.question('Please enter an integer greater than 0: ')
);
let operation = readlineSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
);
let accumulator = 1;

if (operation === 's') {
  for (let counter = 1; counter <= targetInteger; counter += 1) {
    accumulator += counter;
  }
} else if (operation === 'p') {
  for (let counter = 1; counter <= targetInteger; counter += 1) {
    accumulator *= counter;
  }
}

console.log(
  `The sum of the integers between 1 and ${targetInteger} is ${accumulator}.`
);
