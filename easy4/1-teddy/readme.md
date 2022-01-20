## Problem statement

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

Example Output:

```
Teddy is 69 years old!
```

## Explicit Requirements

- age must be between 20 and 120

## Implicit Requirements

- must compute age using a random function that constrains results to the range 20-120

## Data Structure

`Math.floor(Math.random() * (max - min + 1) + min);`

## Algorithm

```
START getRandomIntFromRange

-# Given two integers min and max

RETURN rounded down ((random from 0 to 0.99) * (max - min + 1) + min)

END


START printTeddysAge

SET teddysAge = getRandomIntFromRange(20, 120)

PRINT `Teddy is {teddysAge} years old!

END
```
