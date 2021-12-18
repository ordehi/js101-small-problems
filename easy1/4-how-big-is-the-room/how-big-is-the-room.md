## Problem statement

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the `readlineSync.prompt` method to collect user input.

### Example:

```
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
```

## Expected Input and Output

### Input:

length in meters
width in meters

### Output:

area in square meters
area in square feet

## Explicit Requirements

Must calculate area which is width \* length
Must convert square meters to square feet 1 square meter == 10.7639 square feet

## Implicit Requirements

Need to install node
Need to install and require readlineSync
Need to parseFloat on square meters within two decimal places
Need to limit decimal places of square feet to two decimal places

## Mental Model

the function takes width and length of a room in meters, calculates the area by multiplying those values, then also multiplies the resulting area by 10.7639 to get the area in square feet.

## Validate Examples/Test Cases

### Validation

#### Input

width = 10, height = 20

#### Output

area in square meters = 200
area in square feet = 2,152.78

## Edge Cases

## Data Structure

A variable to hold the area in square meters
A variable to hold the area in square feet
Log them to the console using string interpolation

## Algorithm

1. variable areaSqMeters holds the result of width \* length

   a. apply two decimal places to areaSqMeters

2. variable areaSqFeet holds the result of areaSqMeters \* 10.7639

   a. Fix areaSqFeet to two decimal places

3. log "The area of the room is " + areaSqMeters + " square meters (" + areaSqFeet + " square feet)."

## Further Exploration

Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

## Understanding

- Need a variable to hold the type of data meters or feet
- Conditional checks the type variable and operates accordingly
- If we get meters, compute as meters then multiply result by 10.7639 to get square footage
- If we get feet, compute as feet then divide result by 10.7639 to get square meters

## Data Structure

A variable inputType holds "meters" or "feet"
User gets question that asks them to choose 1 for meters, 2 for feet
