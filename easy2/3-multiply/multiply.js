/*
Step 1: if either argument is not a number, throw a type error
Step 2: return the product of multiplying both arguments
 */

const multiply = (num1, num2) => num1 * num2;

const multiplyOnlyNumbers = (num1, num2) =>
  +num1 !== +num1 || +num2 !== +num2
    ? TypeError('Input must be of number type')
    : num1 * num2;

// At the end of the day, you shouldn't be passing in invalid types anyway.
