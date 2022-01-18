## Problem statement

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

```js
cleanUp("---what's my +*& line?"); // " what s my line "
```

## Explicit Requirements

- replace any non-alphabetic characters with a space, there shouldn't be any consecutive spaces, so two non-alphabetic characters become one space.

## Implicit Requirements

- a way to check for non-alphabetic characters
- a way to replace non-alphabetic characters with spaces
- a way to make sure only one space is inserted where multiple non-alphabetic characters appear in succession

## Mental Model

Given a string, return a string where any non-alphabetic character in the given string is replaced by a space, the result should have no consecutive spaces.

## Edge Cases

- not a string

## Data Structure

- regEx to check for non-abc characters = `/[a-z]+/gi`
- replace with global regEx

## Algorithm

```
START

Given a string called str

RETURN str where any `/[^a-z]+/gi` is replaced by ' '

END
```
