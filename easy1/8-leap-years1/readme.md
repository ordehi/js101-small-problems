## Problem statement

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.

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
isLeapYear(1700); // false
isLeapYear(1); // false
isLeapYear(100); // false
isLeapYear(400); // true
```

## Expected Input and Output

### Input:

2016

### Output:

true

## Explicit Requirements

- Year must be evenly divisible by 4
- Year must not be evenly divisible by 100, unless year is evenly divisible by 400
- Return true for leap years, false otherwise

## Implicit Requirements

- Must compare that year is evenly divisible by 4

## Edge Cases

- Input is <= 0
- Input is not number

## Data Structure

- Check if input is divisible by 4
- Check if input is divisible by 400
- Check input is not divisible by 100
- A conditional checks for division by 4 and another for 400
- If 4 passes, but not 400, check division by 100 doesn't pass, if it doesn't return true
- If 400 passes, return true

## Algorithm

Step 1: Check division by 400, return true if evenly divisible
Step 2: Check division by 4
Step 3: Check division by 100, return true if not evenly divisible
