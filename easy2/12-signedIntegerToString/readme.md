## Problem statement

In the previous exercise, you developed a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as `String()` and `Number.prototype.toString()`. You may, however, use `integerToString()` from the previous exercise.

You might also want to check the `Math.sign()` function.

## Algorithm

START

// Given a signed integer called number

IF number === 0

- RETURN '0'
  SET sign = number > 0

SET stringNumber = integerToString(Math.abs(number))

IF sign is true

- SET stringNumber = '+' + stringNumber

ELSE

- SET stringNumber = '-' + stringNumber

END

## Observations

While exploring this I ran into a bug with JS. Numbers with leading zeros such as 0123 are interpreted as octal rather than decimal.

The reason for this comes from historical decision dating from JS' introduction by Netscape and first editions of ECMAScript.

https://stackoverflow.com/questions/6505033/number-with-leading-zero-in-javascript

A solution to this would be to pass the number as a string and use parseInt with 10 as radix to convert the string to a decimal integer. Example: `parseInt('0123', 10)`
