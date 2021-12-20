## Problem Statement

Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

Examples:

```
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
```

```
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
```

## Expected Input and Output

### Input:

5
s

### Output:

15

### Input:

6
p

### Output:

720

## Explicit Requirements

- Needs to ask for input twice; once for the integer, another for the operation
- When operation input is s compute the sum of all numbers between 1 and number input
- When operation input is p compute the product of all numbers between 1 and number input
- The entered integer inclusive means that if input is 1 we will return 2 for sum and 1 for product

## Implicit Requirements

Need a conditional to carry out the proper operation based on input
A reducer adds or multiplies each value down to 1
Intermediate values are held in a separate variable

## Edge Cases

input is >= 0 // return a range error
input is so large that it might create performance issues. How large should it be for this to occur? // research
input is over MAX_SAFE_INTEGER or close enough that the computation will return a number higher than MAX_SAFE_INTEGER // how large can it be without running into this case?

## Data Structure

readline-sync asks for number input, it is coerced to a number and held in variable targetInteger
readline-sync asks for operation input as "s" for sum or "p" for product, held in variable operation
conditional checks value of operation
a variable to hold accumulated values, accumulator starts at 1
use a loop or reducer function starting the loop counter at 1 and add 1 to it until it reaches targetInteger
at each iteration, add counter to accumulator if operation is sum, multiply it if operation is product

## Algorithm

1. targetInteger variable holds user integer input where integer > 0
2. operation variable holds user operation input, where operation is "s" for sum, "p" for product
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

## Further Exploration

What if the input was an array of integers instead of just a single integer? How would your computeSum and computeProduct functions change? Given that the input is an array, how might you make use of the `Array.prototype.reduce()` method?

### Restate the problem

If the input is an array of integers, the functions can compute the sum or product of all integers in the array.
To use `Array.prototype.reduce()` we pass the input array to it and at each iteration add the current integer to the accumulator, having the accumulator start at 0 for sum and 1 for product.
