## Problem statement

Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Examples:

```
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in 25,15,20,17,23.

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in 25,15,20,17,23.
```

## Mental Model

Given 6 numbers, print whether the six number is present in the first 5.

## Edge Cases

- input is not a number
- input is float

## Data Structure

- use readline-sync
- a function to prompt
- a function should validate user input as number
- input should be stored in an array, pushing each new number
- check if the sixth number is an index of the input array

## Algorithm

```
START

SET arrayOfNumbers = []

WHILE length of arrayOfNumbers < 5
  - GET number
  - SET arrayOfNumbers.push(number)

GET numberToMatch

PRINT The number {numberToMatch} {arrayOfNumbers.includes(numberToMatch) ? appears : does not appear} in {arrayOfNumbers.join()}.

END
```
