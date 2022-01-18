## Problem statement

What Century is That?
Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

```js
century(2000); // "20th"
century(2001); // "21st"
century(1965); // "20th"
century(256); // "3rd"
century(5); // "1st"
century(10103); // "102nd"
century(1052); // "11th"
century(1127); // "12th"
century(11201); // "113th"
```

## Explicit Requirements

## Implicit Requirements

## Clarifying Questions

## Mental Model

## Validate Examples/Test Cases

## Edge Cases

## Data Structure

### End of ordinal:

- 1 = st
- 2 = nd
- 3 = rd
- 4-10 = th

- Determine the century with `Math.floor(year 100) + 1`

## Algorithm

```
START

Given a positive integer called year

SET centuryStr = a string from round-up(year / 100)

SET lastChar = centuryStr.charAt(centuryStr.length - 1)

IF lastChar === 1
  - SET centuryStr += 'st'
ELSE IF lastChar === 2
  - SET centuryStr += 'nd'
ELSE IF centuryStr === 3
  - SET centuryStr += 'rd'
ELSE
  - SET centuryStr += 'th'

RETURN centuryStr

END
```
