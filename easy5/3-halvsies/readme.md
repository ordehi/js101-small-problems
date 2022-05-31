# Halvsies

## Problem Statement

Write a function that takes an array as an argument and returns an array that contains two elements, each of which is an array. Put the first half of the original array elements in the first element of the return value, and put the second half in the second element. If the original array contains an odd number of elements, place the middle element in the first half array.

## Understand the Problem

### Mental Model

Given an array, split it into two arrays so that both halves of its elements are contained in each of the returned arrays. If the array has an odd length, add the odd element to the first returned array.

## Examples and Test Cases

```js
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
```

## Data Structure

- Two arrays to contain each half of the input array.
- Split the input array using slice from first index to `Math.ceil(array.length / 2)` for the first array, and from `Math.ceil(array.length / 2) + 1` to `array.length` for the second array

## Algorithm

```
START

# Given an array called 'collection' containing n elements

SET fromStart = 0
SET toMid = Math.ceil(collection.length / 2)
SET fromMid = midpoint + 1
SET toEnd = collection.length
SET firstHalf = collection.slice(fromStart, toMid)
SET secondHalf = collection.slice(fromMid, toEnd)

RETURN [firstHalf, secondHalf]

END
```

