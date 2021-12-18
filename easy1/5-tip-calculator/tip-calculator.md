## Problem statement

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Example:

```
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
```

## Expected Input and Output

### Input:

tip % 15
bill 200

### Output:

tip is $30
total is $230

## Explicit Requirements

Takes in tip rate and bill amount, must compute tip amount and add to bill amount to get total, must log both tip and total to console.

## Implicit Requirements

Must calculate the tip rate by multiplying the bill amount by the tip rate as decimal places after 0, where 20 is 0.20
Can also calculate by multiplying bill by tip rate then dividing by 100 (this is probably the simplest approach as it doesn't require converting the tip rate to a decimal)

## Validate Examples/Test Cases

### Input:

bill 250
tip rate 20

### Output:

tip 50
total 300

## Edge Cases

No bill is provided
No tip rate is provided
A non-number value is provided
readline-sync returns a string from input, must coerce into a number

## Data Structure

- Two variables to hold bill and tip rate from readline-sync questions
- The computation can happen inside the console.log, but for extensibility it's better to have them happen as separate expressions held in their respective variables
- console.log prints each value with a line break after the first

## Algorithm

1. question for bill, hold in variable billAmount
2. question for tip rate, hold in variable tipRate
3. variable tipAmount holds the result of billAmount \* tipRate / 100
4. variable total holds sum of tipAmount + billAmount
5. console.log uses string interpolation to print values in separate lines
