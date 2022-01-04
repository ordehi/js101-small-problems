# Stringy

## Problem Statement

Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Examples:

```javascript
stringy(6); // "101010"
stringy(9); // "101010101"
stringy(4); // "1010"
stringy(7); // "1010101"
```

## Mental Model

Function takes in a positive integer, returns a string of alternating '1's and '0's that starts with '1' and goes on until its length is the same as the given integer.

## Data Structure

Loop to integer starting at 0
Add 1 to string if loop counter is even
Add 0 to string if loop counter is odd

## Algorithm

START

-# Given a positive integer called target

SET counter = 0
SET resultString = ''
WHILE counter < target

- IF counter % 2 === 0
  - SET resultString += '1'
- ELSE
  - SET resultString += '0'
- SET counter += 1

RETURN resultString

END
