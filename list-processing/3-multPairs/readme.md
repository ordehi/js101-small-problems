# Multiply All Pairs

## Problem Statment

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

## Understanding

### Mental Model

Given two arrays of integers, return a new array where the elements are the product of multiplying each pair from each of the input arrays. The returned array must be sorted in ascending order.

## Examples and Test Cases

```js
multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
```

## Data Structure

The first function takes in both arrays, it calls a function for each element in the first array that multiplies that element by each element on the second array.

## Algorithm

START FUNCTION multiplyAllPairs

-- given two arrays of integers called, numbers1 and numbers2

SET products = empty collection
WHILE there are unprocessed elements in numbers1
  - WHILE there are unprocessed elements in numbers2
    - ADD the product of the current element in numbers1 and the current element in numbers2 to products

SET sortedProducts = products sorted in ascending numerical order
    

DISPLAY sortedProducts

END