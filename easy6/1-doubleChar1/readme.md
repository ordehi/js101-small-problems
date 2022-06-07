# Double Char (Part 1)

## Problem Statement

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.

Examples:

```js
repeater('Hello'); // "HHeelllloo"
repeater('Good job!'); // "GGoooodd  jjoobb!!"
repeater(''); // ""
```

## Mental Model

Given a string, return a new string where every character is doubled.

## Algo

- Split string
- In the resulting collection, go through each character and add it twice to a new string
