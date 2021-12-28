## Problem statement

In the previous exercise, you developed a function that converts simple numeric strings to integers. In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. The string may have a leading + or - sign; if the first character is a +, your function should return a positive number; if it is a -, your function should return a negative number. If there is no sign, return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). You may, however, use the stringToInteger() function from the previous lesson.

Examples

```javascript
console.log(stringToSignedInteger('4321') === 4321); // logs true
console.log(stringToSignedInteger('-570') === -570); // logs true
console.log(stringToSignedInteger('+100') === 100); // logs true
```

## Explicit Requirements

- Given a string of digits
- Return the appropriate number as an integer, if it has a leading minus '-' sign, return a negative number
- If there is a leading '+' or no sign, return a positive number

## Mental Model

A function that takes in a string of digits and returned a signed integer representing the numerical value in that string.

## Edge Cases

- String is not composed of digits
- String has other characters besides digits and +/-
- Input is not a string

## Data Structure

## Algorithm

### Algo for stringToInteger

- Given a string of digits
- Set a variable "value" to store the resulting number
- Iterate through each digit
  - Compare digit against an object containing the digits 0-9, return the matching number from the object
  - Set value to value \* 10 + digit
- return value

### Algo for stringToSignedInteger

- Given a string of digits
- Set a variable "negative" initially to false
- If the string contains '-' set "negative" to true
- If the first character in the string is less than the string of '0'
  - Return the call to stringToInteger(string.substring(1))
  - Else, return the call of stringToInteger(string)

START

// Given a string of digits

SET negative = string.includes('-')

IF first character of string < '0' // trying to be clever here :smile:

- READ and RETURN stringToInteger(string.substring(1))

ELSE

- READ and RETURN stringToInteger(string)

END

### Redone algo

START

// Given a string of digits

IF the first character of string contains something other than a digit

- SET number = stringToInteger(string without the first character)

ELSE

- SET number = stringToInteger(string)

IF string includes '-'

- SET signed = (number = number - number \* 2)

ELSE

- SET signed = number

RETURN signed

END
