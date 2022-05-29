## Problem Statement

Write a function that takes a string consisting of zero or more space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

## Understand the Problem

### Mental Model

Given a string consisting of characters and whitespace, return an object where each property name is a number and their values are the number of words in the passed string that contain that number of letters.

That is to say, return an object that lists word lengths and the number of words that have that length.

### Clarifying Questions

**What is a word in this context?**

Words consist of any sequence of non-space characters. This includes single characters, and punctuation counts as a character in a word.

## Examples and Test Cases

```js
wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(''); // {}
```

### Edge Cases

**What should happen if an empty string is passed?**

Return an empty object

**What happens if a string with only spaces is passed?**

Return an empty object

**What should happen if something other than a string is passed?**

Return an empty object


## Data Structure

I get a string
I return an object

I need to extract each word in the string, `String.prototype.split(' ')` can do this.

In the resulting array, I iterate over each element and count its length after trimming it with `String.prototype.trim()` to make sure there are no leftover spaces.

I can iterate through the elements of the array using `Array.prototype.forEach` since I won't return another array but an object.

I can hold the resulting object in an object literal called `result`

## Algorithm

### High Level

- Create a variable to hold the resulting object
- If input is not a string, or is an empty, or only space string, return an empty object
- Split the given string into an array holding each discrete word
- Iterate over the array, counting the length of each trimmed string
- At each iteration, if the length of the current string is a property in the resulting object, add 1 to that property's value
- If the length of the current string doesn't exist as a property in the resulting object, create it and set its value to 1
- Return the resulting object

## Pseudocode

```
START

# Given a collection of characters called sentence

SET result = {}
IF sentence is a string that is not empty or has only spaces
  SET splitWords = sentence.split(' ')
  WHILE there are elements in splitWords that haven't been checked, iterate over each element in splitWords from start to end
    SET currentElement = current word of splitWords trimmed
    SET currLength = length of currentElement
    SET result[currLength] = ++result[[currLength] || 1
RETURN result

END
```