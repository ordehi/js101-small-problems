# Double Char (Part 2)

## Problem Statement

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:

```js
doubleConsonants('String'); // "SSttrrinngg"
doubleConsonants('Hello-World!'); // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th'); // "JJullyy 4tthh"
doubleConsonants(''); // ""
```

## Mental Model

Given a string, return a new string where only each consonant in the given string is doubled.

## Algo

- Split string
- In reference collection, loop and double any character that is a consonant
- Keep track of consonants with an exclusion: 'aeiou .:,;-!?'
