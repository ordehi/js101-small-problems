## Problem Statement

The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Examples

```javascript
console.log(stringToInteger('4321') === 4321); // logs true
console.log(stringToInteger('570') === 570); // logs true
```

## Mental Model

Return an integer by calculating the value of each character in a given string

## Research

JavaScript type coercion for String to Number:

> When an operation like subtraction (-), multiplication (\*), division (/) or modulus (%) is performed, all the values that are not number are converted into the number data type, as these operations can be performed between numbers only. Some examples of this are shown below.

This means that string \* 1, where string contains only number characters, will return a number type value of string.

## Data Structure

## Algorithm

return inputString \* 1

## Further Exploration

Write a hexadecimalToInteger() function that converts a string representing a hexadecimal number to its integer value. Note that hexadecimal numbers use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase equivalents) correspond to decimal values of 10-15.

Example:

```javascript
hexadecimalToInteger('4D9f') === 19871;
```
