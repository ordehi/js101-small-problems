## Problem Statement

Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.

Examples:

```
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
```

## Mental Model

Take in a string and return the next to last word. Assume the given string will always contain at least two words.

## Data Structure

- Split the string and return the item at length - 2

## Algorithm

inputString split into array of strings
return the string at array length - 2

## Further Exploration

Our solution ignored a couple of edge cases because we explicitly stated that you didn't have to handle them: strings that contain just one word, and strings that contain no words.

Suppose we need a function that retrieves the middle word of a phrase/sentence. What edge cases need to be considered? How would you handle those edge cases without ignoring them? Write a function that returns the middle word of a phrase or sentence. It should handle all of the edge cases you thought of.

## Mental Model

Return the middle word of a phrase or sentence.

## Edge Cases

- Not a string (throw TypeError)
- Single word (return the word)
- Even number of words (return words / 2 - 1)
- Empty string (throw TypeError - MDN says it's okay)
- String with only spaces (same as above, TypeError)
- String with multiple spaces would return empty strings in an array if split by spaces (use filter to only store words in array)

## Algorithm

- if typeof words is not a string, throw TypeError
- if words is empty string, or just spaces, throw TypeError (words must not be empty and can't contain only spaces)
- if words doesn't contain a space, return words
- words split into array filtered to non-empty strings only
- if wordArray.length is even, return (wordArray.length / 2) - 1
- else return Math.floor(wordArray.length / 2) + 1
