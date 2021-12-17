# Problem statement

Language: JavaScript

Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns `true` if the number's absolute value is odd. You may assume that the argument is a valid integer value.

## Expected Input and Output

### Input:

positive integer

negative integer

zero

### Output:

true if absolute value is odd

false if absolute value is even

## Input:

20

## Output:

false

## Explicit Requirements

Need to divide the number by 2, check if the remainder, if it's 0 the number is even and you must return false, if it's not 0 the number is odd and you must return true

You have to consider both positive and negative integers, convert negative to positive before dividing, or divide anyway if the result won't change.

Remember 0 === -0 so 12 % 2 and -12 % 2 will give the same result when comparing whether the remainder is 0.

0 is considered even.

## Implicit Requirements

Must do some sort of conversion or comparison to ensure negative integers give the correct result. Since dividing a negative integer by 2 will either give -0 or -1 and 0 === -0, you don't need to do any conversion, just compare as if the integer was positive.

## Mental Model

Take an integer and given its absolute value being odd, return true, return false otherwise.

## Validate Examples/Test Cases

```jsx
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
```

## Edge Cases

Getting a float instead of an integer. I can use `parseInt(number)` to convert it to an integer. Update: It turns out that if you get a float instead of an integer, JavaScript will still coerce the float to an integer when you do `number % 2`

Being passed any other data type other than a number.

I can try to coerce any other data type to a number, and if the result is NaN, the function errors out. I can check if the result is NaN by using `isNaN(convertedNumber)`

If I try to coerce an array to a number with `Number(array)` it will give me 0, this is undesirable behavior as an array is not a number.

Likewise, coercing null to a number will give 0.

Considering all this, it's better to error out if the input if not a number.

## Data Structure

N/A

## Algorithm

1. Check if the remainder of dividing the number by 2 is not 0
   1. if it is, return false
   2. if it isn't, return true

## Pseudo-Code

remainder of number / 2 is not 0 > true

remainder of number / 2 is 0 > false
