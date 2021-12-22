const readlineSync = require('readline-sync');

const mathFunctions = {
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
  '%': (num1, num2) => num1 % num2,
  '**': (num1, num2) => num1 ** num2,
};

let num1 = parseInt(readlineSync.question('Enter the first number:\n'));
let num2 = parseInt(readlineSync.question('Enter the second number:\n'));

for (let operation in mathFunctions) {
  console.log(
    `${num1} ${operation} ${num2} = ${mathFunctions[operation](num1, num2)}`
  );
}
