# Find the Duplicate

## Problem Statement

Given an unordered array and the information that exactly one value in the array occurs twice (every other value occurs exactly once), determine which value occurs twice. Write a function that will find and return the duplicate value that is in the array.

## Understand the Problem

### Mental Model

Given an unordered array where exactly one element appears twice, find the element that appears twice.

## Examples and Test Cases

```js
findDup([1, 5, 3, 1]); // 1
findDup([
  18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11, 88, 67, 5, 58,
]); // 73
```

## Data Structure

- I need to iterate over the array checking each elemennt to see if it appears more than once.
- If I sort the array in ascending order, it will be easier to compare if the next element is the same as the current element.
- Slice the given array first, then sort, so as not to mutate the original.

## Algorithm

```
START

# Given a collection of integers called numbers

SET sortedNumbers = a shallow copy of numbers sorted in ascending order

SET dupe = undefined;
WHILE dupe is undefined
  IF element at current index equals the element at the next index
    SET dupe = element at current index

RETURN dupe

END
```
