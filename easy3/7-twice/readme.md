## Problem statement

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, `44`, `3333`, `103103`, and `7676` are all double numbers, whereas `444`, `334433`, and `107` are not.

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; otherwise, return the double number as-is.

Examples:

```js
twice(37); // 74
twice(44); // 44
twice(334433); // 668866
twice(444); // 888
twice(107); // 214
twice(103103); // 103103
twice(3333); // 3333
twice(7676); // 7676
```

## Implicit Requirements

- must convert the number to a string to compare whether its length is even and whether both ends are the same

## Mental Model

Given a number, return that number multiplied by two unless it's a double double, in which case return the number as is.

## Validate Examples/Test Cases

## Edge Cases

- negative integers
- floats
- non-integers

## Data Structure

- use `Number.prototype.toString()` to convert the input to a string
- check if the length of string is even
- if it's even, split the string into two equal parts, use `String.prototype.split()`
- actually, check within the string using a method that doesn't split it
- check if each part is

## Algorithm

START

-# Given a number called n

SET str = string of n
IF length of str is even

- IF str.substring(0, str.length / 2) === str.substring(str.length / 2)
  - RETURN n

RETURN n \* 2

END
