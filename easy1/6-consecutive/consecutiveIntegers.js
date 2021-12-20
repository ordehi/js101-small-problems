const readlineSync = require('readline-sync');

// Refactor with functions

const computeSum = (targetInteger) => {
  let total = 0;
  for (let counter = 1; counter <= targetInteger; counter += 1) {
    total += counter;
  }

  return total;
};

const computeProduct = (targetInteger) => {
  let total = 1;
  for (let counter = 1; counter <= targetInteger; counter += 1) {
    total *= counter;
  }

  return total;
};

let targetInteger = parseInt(
  readlineSync.question('Please enter an integer between 1 and 18: ')
);
let operation = readlineSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
);

while (!['s', 'p'].includes(operation.toLowerCase()[0])) {
  operation = readlineSync.question(
    `You entered ${operation}. Please enter "s" to compute the sum, or "p" to compute the product: `
  );
}

if (operation === 's') {
  computeSum(targetInteger);
} else if (operation === 'p') {
  computeProduct(targetInteger);
}

console.log(
  `The sum of the integers between 1 and ${targetInteger} is ${accumulator}.`
);

// Further Exploration
/*
What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the Array.prototype.reduce() method?
 */

const computeArraySum = (arrayOfIntegers) => {
  return arrayOfIntegers.reduce((total, currentValue) => {
    return (total += currentValue);
  }, 0);
};

const computeArrayProduct = (arrayOfIntegers) => {
  return arrayOfIntegers.reduce((total, currentValue) => {
    return (total *= currentValue);
  }, 1);
};
