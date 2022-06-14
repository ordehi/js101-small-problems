# Sum of Digits

## Problem Statement

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

## Understanding the Problem

### Mental Model

Given a positive integer, return the sum of its digits. Use method calls, not loop constructs.

## Examples and Test Cases

```js
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
```

## Data Structure

Convert integer to a string and split the string using empty string as separator. Reduce the resulting array by adding the number representation of each element to an accumulator.

## Algorithm

```
START FUNCTION sum

-- Given a positive integer called integer

SET strOfNum = string representation of integer
SET arrOfStrNums = a collection where each element is one character of strOfNum
SET sumOfDigits = the sum of the number representation of all elements in arrOfStrNums

DISPLAY sumOfDigits

END sum
```

```
START FUNCTION addArray

-- Given an array of integers or the string representation of integers called numbers

SET sum = 0
WHILE there are elements in numbers
  - add the number value of current element to sum

DISPLAY sum

END addArray
```