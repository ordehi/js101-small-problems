## Problem statement

Write a function that takes a positive integer, `n`, as an argument and logs a right triangle whose sides each have `n` stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.

Examples:

```js
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
```

## Explicit Requirements

- Given an integer `n` must return a string of asterisks that represents a right triangle with `n` lines
- A variable to hold the resulting string
- A loop to build each line
- A loop counter starts at 1 and ends at `n`
- Log the resulting string to the console

## Implicit Requirements

- Must account for whitespace at the start of each line that isn't the last one

## Edge Cases

- Given a non-positive integer = reject
- Given a non-number = reject
- Given a number too high (> 100) = reject

## Data Structure

- Use `String.prototype.repeat()` to build each line of the string. Usage `string.repeat(number)`
- Use `String.prototype.padStart()` to add spaces to each line of the string that isn't the last. Usage `string.padStart(number, string)`

## Algorithm

START

-# Given a positive integer n

SET result = ''
SET line = 1
WHILE line <= n

- SET newLine = '\*'.repeat(line)
- SET newLine = newLine.padStart(n, ' ');
- SET newLine += '\n';
- SET result += newLine;
- SET line += 1

PRINT result

END
