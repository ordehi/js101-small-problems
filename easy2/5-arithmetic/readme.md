## Problem statement

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Example

```
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
```

## Expected Input and Output

### Input:

### Output:

## Explicit Requirements

- Take in two positive integers and return the results of their sum, subtraction, multiplication, division, remainder, and exponentiation.

## Data Structure

- instead of hard-coding each console.log, pass the operator between the two numbers in a loop

## Algorithm

num1 = prompt for first number
num2 = prompt for second number

```
const mathFunctions = {
  sum: (num1, num2) => num1 + num2,
  subt: (num1, num2) => num1 - num2,
  mult: (num1, num2) => num1 * num2,
  div: (num1, num2) => num1 / num2,
  rem: (num1, num2) => num1 % num2,
  exp: (num1, num2) => num1 ** num2
}

for (operation in mathFunctions) {
  console.log(`${mathFunctions[operation](2, 2)}`)
}
```

log(num1 + operator + num1 = result)
