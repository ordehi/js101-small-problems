# Alphabetical Numbers

## Problem Statement

Write a function that takes an array of integers between 0 and 19 and returns an array of those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

## Understanding

### Mental Model

Given an array of integers between 0 to 19, return the array sorted by the string representation of the English names for each integer, zero to nineteen.

## Examples and Test Cases

```js
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
```

## Data Structure

I need an object the properties of which are the numbers from 0-19 and the values are that number's name as a string. An array works for this since its 0 indexed.

I need to sort the number array by the string representation of the number names, for this, I can use sort with `String.prototype.localeCompare`

## Algorithm

START FUNCTION alphabeticNumberSort

-- Given an array of integers called numbers

SET numberNames = an object the properties of which are the integers 0-19, the value of each property is a string representing that integer's name in English

SET sortedNumbers = a shallow copy of numbers

SET sortedNumbers = a sorted version of itself where each number is sorted according to the alphabetical order of its name's string representation

DISPLAY sortedNumbers

END