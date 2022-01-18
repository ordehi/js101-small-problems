## Problem statement

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

Examples:

```js
getGrade(95, 90, 93); // "A"
getGrade(50, 50, 95); // "D"
```

## Explicit Requirements

- must compute mean (average)
- must compare that average against possible scores
- must return the appropriate score

## Mental Model

Given three numbers, compute their average and return a grade based on where that average lands on a scale from A-F

## Edge Cases

- no need to handle them for this one
- number out of range
- not a number

## Data Structure

- a switch statement to determine the grade

## Algorithm

START

Given three numbers; n1, n2, n3

SET sum = n1 + n2 + n3
SET score = sum / 3 rounded down to the nearest integer

IF 90 <= score <= 100

- SET grade = 'A'

IF 80 <= score < 90

- SET grade = 'B'

IF 70 <= score < 80

- SET grade = 'C'

IF 60 <= score < 70

- SET grade = 'D'

IF 0 <= score < 60

- SET grade = 'F'

RETURN grade

END
