## Problem statement

Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be `98` (`3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20`).

You may assume that the number passed in is an integer greater than 1.

Examples:

```javascript
multisum(3); // 3
multisum(5); // 8
multisum(10); // 33
multisum(1000); // 234168
```

## Explicit Requirements

- Numbers to add to sum must be between 1 and given number
- Number to add must be a multiple of (divisible by) 3 or 5
- Must sum all numbers that meet the criteria and return the total

## Implicit Requirements

- Numbers below 3 won't be computed

## Edge Cases

- Number is below 3
- Number is <= 0
- Input is not number

## Data Structure

- Conditional checks that number is not below 3, if it is return 0
- A loop iterates over all numbers between 3 and input, adding each number to the total if it's divisible by 3 or 5
- Once loop reaches input, return total

## Algorithm

Step 1: If number is < 3 return 0
Step 2: Declare variable total at 0
Step 3: Start a loop counter at 3
Step 4: While counter is less than or equal to input
a. if counter is divisible by 3, add counter to total
b. if counter is divisible by 5, add counter to total
c. add 1 to counter
Step 5: Return total
