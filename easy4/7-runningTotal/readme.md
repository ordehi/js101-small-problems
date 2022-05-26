## Problem statement

Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Examples:

```js
runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
```

## Understand the Problem

### Clarifying Questions

**What is a running total?**

A running total is the cumulative sum of a value and all previous values in a collection.

### Mental Model

Given a collection of integers, return a collection of the same size, where each element is the sum of all the elements that precede it. The first element has no precedent, so it will always be copied as is.

For example, if given the collection `[1, 2, 3]`

Our function would return `[1, 3, 6]`

That is:

- Copy `1` to first index
- Add the sum of `1 + 2` to the second index (`3`)
- Add the sum of `3 + 3` to the third index (`6`) 

### Edge Cases

**One element array?**

Return the array as is

**Empty array**

Return the array as is

**If any of the elements in the array is not an integer**

Try coercing it to an integer or 0 if `Not a Number`

**Array size limit to compute**

Only run for arrays of 100 or fewer elements. (to test)

**Not an array**

Return an empty array

## Data Structure

We make a shallow copy of the array with `Array.prototype.slice` and work on the copy.

We iterate through each element in the array, keeping a variable that refers to the previous element in the new array and one that refers to the current element in the passed array.

## Algorithm

```
START

Given a collection of integers called numbers

SET result to an empty collection
SET size to the length of numbers
IF size <= 100
  SET count to 0
  SET currentTotal to 0
  WHILE count < size
    SET currentNumber to the element at current index of numbers
    SET currentTotal to currentTotal + currentNumber
    SET element at index count of result to currentTotal
    SET count to count + 1
RETURN result

END
```