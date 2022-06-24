# After Midnight (Part 2)

## Problem Statement

As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight. If the number of minutes is positive, the time is after midnight. If the number of minutes is negative, the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively. Both functions should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Examples:

```js
console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
console.log(afterMidnight('24:00') === 0);
console.log(beforeMidnight('24:00') === 0);
```

The tests above should log true.

Disregard Daylight Savings and Standard Time and other irregularities.

/\*
|---- I/O ----|

-> Input
String representing a 24 hour time in the format "00:00"

Examples:

"00:00"
"12:23"
"23:12"

<- Output

An integer in the range 0..1439 representing the minutes before or after midnight computed from the input time string.

|--- Requirements ---|

-! Explicit

- Must not use JavaScript's built-in Date methods
- Must return a number in the range 0..1439
- The computation of before and after midnight minutes must be done in separate functions
- Disregard DST and other irregularities

-? Implicit

- Will always get a string that is four digits with a colon in the middle
- "00:00" and "24:00" are equivalent and return the same number on both functions, that is 0
- A day has 1440 minutes, an hour has 60 minutes, a day has 24 hours, so for the afterMidnight function the computation is as simple as multiplying hours by 60 and adding the minutes to the product.
- The return value of the beforeMidnight function represents the number of minutes left before we reach midnight.
- beforeMidnight = before reaching midnight. Which is the result of the formula `the absolute value of ((hours * minutes in an hour + minutes) - minutes in a day)`
- afterMidnight = minutes passed after midnight. Which is the result of the formula `hours * minutes in an hour + minutes`

|--- Questions ---|

|--- Mental Model ---|

Given a string that is four digits with a colon in the middle, and represents a 24 hour format time.

Return an integer that represents the minutes before or after midnight computed from the input string.

The first two digits of the input string represent hours, the colon can be used to split hours from minutes.

|--- Examples ---|

-= Tests

```js
console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
console.log(afterMidnight('24:00') === 0);
console.log(beforeMidnight('24:00') === 0);
```

-\* Edges Cases

- nothing is passed
- is not a string
- is not a string with the correct format
- is missing digits

|--- DS/Algo ---|

- beforeMidnight = before reaching midnight. Which is the result of the formula `the absolute value of ((hours * minutes in an hour + minutes) - minutes in a day)`
- afterMidnight = minutes passed after midnight. Which is the result of the formula `hours * minutes in an hour + minutes`

Constants
Minutes in an hour equals 60
Minutes in a day equals 1440

SUBROUTINE getAsNumbers
Transformation:

- Initialize an array called splitTime to the return value of splitting the input string using colon ':' as a separator
- Return a mapping of splitTime where each element is coerced to a number type
  SUBROUTINE calculateMinutes
  Given an array of two integers
- Initialize a variable totalMinutes to the return value of reducing the input array

\*/
