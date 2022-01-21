## Problem statement

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

```
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
```

## Explicit Requirements

- compute the date of retirement
- compute the year of retirement

## Implicit Requirements

- subtract age from year of retirement and add the result to current year

## Edge Cases

- non-numbers

## Data Structure

- use the `new Date()` constructor and `getFullYear()`

## Algorithm

```
START

GET age
GET retirementAge

SET workYearsLeft = retirementAge - age
SET currentYear = new Date().getFullYear()
SET retirementYear = currentYear + workYearsLeft

PRINT It's {currentYear}. You will retire in {retirementYear}.\n
You have only {workYearsLeft} years of work to go!

END
```
