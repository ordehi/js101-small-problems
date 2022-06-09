# Get The Middle Character

## Problem Statement

Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples:

```js
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School'); // " "
centerOf('Launch'); // "un"
centerOf('Launchschool'); // "hs"
centerOf('x'); // "x"
```

## Mental Model

Given a string, return the middle character in that string, if the string has an even number of characters, retrieve the middle two characters.
