# Fibonacci Number Location By Length

## Problem Statement

The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

Examples:

```javascript
findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
```

## Mental Model

Given a positive integer, return the index of the first Fibonacci number that contains the same number of digits indicated by the given integer. Consider Fibonacci to be 1-indexed, that is, the first number is index 1.

## Data Structure

First, I need to calculate Fibonacci, so my function should go through the sequence, checking if each number matches the given argument.

Given 2n, I return the Fib number 13 which is at index 7n of Fib, I check its index using a counter that starts at 1 and increases for each Fib iteration, when I get a number, I convert it to a string and get its length, if it matches the argument, I return its index.

I will have to use BigInt for this as Number.MAX_SAFE_INTEGER will prevent me from getting accurate values after it.

### Research

- BigInt supports `toString()`
- I can increase a counter by doing `counter += 1n`
- I can use the `BigInt()` constructor to turn the length of a string into a BigInt

## Algorithm

START

-# Given a positive integer of type BigInt called targetLength

SET index = 1n
SET currentLength
WHILE currentLength != targetLength

- READ fibNumber from fibonacci routine
- SET = currentLength = BigInt(fibNumber.toString().length)
- SET index += 1n

RETURN currentLength

END
