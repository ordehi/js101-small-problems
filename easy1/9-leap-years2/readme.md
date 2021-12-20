## Problem statement

This is a continuation of the previous exercise.

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

Examples:

```javascript
isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // true
isLeapYear(1); // false
isLeapYear(100); // true
isLeapYear(400); // true
```

## Explicit Requirements

- This time you must keep track of whether the year is before 1752
- If the year is before 1752, you return true for any year evenly divisible by 4
- Otherwise, if year is 1752 or after, the same rules as before apply
  - That is, year must be divisible by 4 and not 100, or divisible by 400

## Algorithm

Step 1: Check if year is lower than 1752
a. If lower, return true if year is divisible by 4, return false otherwise
b. If equal or greater, go to step 2
Step 2: Return true if year is divisible by 400
Step 3: Return true if year is divisible by 4 and not 100, return false otherwise
