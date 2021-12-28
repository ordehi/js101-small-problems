## Problem Statement

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Examples:

```javascript
integerToString(4321); // "4321"
integerToString(0); // "0"
integerToString(5000); // "5000"
integerToString(1234567890); // "1234567890"
```

## Algorithm

// Given a number called integer

- Set an object DIGITS to hold the string representation of the digits 0-9
- Set an empty string called stringInteger
- Iterate through each digit of integer while integer > 0
  - Set digit to the remainder of dividing integer / 10
  - Compare digit to DIGITS and add the value at digit property to the beginning of stringInteger
  - Set integer to integer - digit
  - Set integer to integer / 10
- Display stringInteger

START

// Given a number called integer

SET DIGITS = a collection of 0-9 as property-value pairs

SET stringInteger = ''

WHILE integer > 0 with an initial iteration regardless of integer's value

- SET digit = integer % 10
- SET stringInteger = DIGITS[digit] + stringInteger
- SET integer = integer - digit
- SET integer = integer / 10
  PRINT stringInteger

END
