## Problem statement

Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

Examples:

```javascript
shortLongShort('abc', 'defgh'); // "abcdefghabc"
shortLongShort('abcde', 'fgh'); // "fghabcdefgh"
shortLongShort('', 'xyz'); // "xyz"
```

## Expected Input and Output

### Input:

abc
defgh

### Output:

abcdefghabc

## Explicit Requirements

- Must compare the length of two strings
- Must concatenate strings in this order: short + long + short
-

## Implicit Requirements

## Mental Model

The function takes in two strings, compares their length and returns the concatenation of "short string" + "long string" + "short string"

## Edge Cases

- Both strings are of the same length
- Input is not a string
- Empty string

## Data Structure

- Compare string1.length > string2.length and decide how to concatenate given the result
- Can use += increment assignment or `String.prototype.concat()` to concatenate the strings
- `concat()` is able to take however many arguments to concatenate, we can do `short.concat(long, short)`
- If a variable holds short, another variable holds long, then our `concat()` can always just be like above
- Assign the short string to shortString, assign the long string to longString
- We can use a ternary operator to do the assignment

## Algorithm

Step 1: Compare length of strings and assign them to descriptive variables
If string1.length <> string2.length
shortString = string1 and longString = string2
Else
shortString = string2 and longString = string1

Step 2: return the value of concatenating shortString + longString + shortString
