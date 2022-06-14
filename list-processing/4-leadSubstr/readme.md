# Leading Substrings

## Problem Statement

Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

## Understanding

### Mental Model

Given a string, return an array where each element is a possible substring of the input string building from the first character to the last, until the last element in the array if the full input string.

## Examples and Test Cases

```js
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
```

## Data Structure

Split the string, then map the resulting array to return a new one where each element 

START = 0
END = START + 1

START += 1