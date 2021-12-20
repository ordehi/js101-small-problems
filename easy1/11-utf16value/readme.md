## Problem statement

Write a function that determines and returns the UTF-16 string value of a string passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values of every character in the string. (You may use `String.prototype.charCodeAt()` to determine the UTF-16 value of a character.)

Examples:

```javascript
utf16Value('Four score'); // 984
utf16Value('Launch School'); // 1251
utf16Value('a'); // 97
utf16Value(''); // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = '\u03A9'; // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA); // 937
utf16Value(OMEGA + OMEGA + OMEGA); // 2811
```

## Explicit Requirements

- Return the UTF-16 string value of given string
- Must sum UTF-16 values of each character in the string

## Implicit Requirements

- Must loop through each of the characters in the string adding each UTF-16 value to an accumulator at each iteration
- If input is empty string, must return 0

## Edge Cases

- Input is not a string

## Algorithm

Step 1: If string.length is 0, return 0
Step 2: Declare counter variable to the value of string.length
Step 3: Declare total to 0;
Step 4: While counter isn't 0
a. add the value of string.charCodeAt(counter)
b. decrement counter by 1
Step 5: return total
