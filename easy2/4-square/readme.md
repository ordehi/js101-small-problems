## Problem statement

Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

Example:

```
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
```

## Explicit Requirements

- Must use multiply() to compute the square, pass the argument of square() to multiply twice

## Edge Cases

- input is not a number
- calculation goes above MAX_SAFE_INTEGER, reject input above 94906265

## Algorithm

Step 1: If input is > 94906265, throw RangeError
Step 2: return the result of passing the argument to multiply twice

## Further Exploration

What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?

## Explicit requirements

- function must be able to compute any "power to the n" input and still use multiply

## Implicit requirements

- Needs an exponent argument
- Must call multiply as many times as the exponent argument

## Algorithm

multiplier = numberInput
total = numberInput
[Start loop]
while counter <= exponent
a. total += multiply(total, multiplier)
b. counter += 1
[End loop]
return total
