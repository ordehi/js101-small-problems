## Problem Statement

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

```javascript
crunch('ddaaiillyy ddoouubbllee'); // "daily double"
crunch('4444abcabccba'); // "4abcabcba"
crunch('ggggggggggggggg'); // "g"
crunch('a'); // "a"
crunch('');
```

## Mental Model

Given a string, return the string where any consecutive duplicate characters have been reduced to one.

## Data Structure

- Found an interesting way to get uniques while researching this. It doesn't work for this problem as it would remove duplicates even if they're not consecutive. `[...new Set(string)].join('')`
- I could use array methods to do this quickly, but I want to try using a traditional loop first

## Algorithm

START

-# Given a string called string

SET crunched = ''
SET counter = 0
WHILE counter < string.length

- IF string[counter] === crunched[cruched.length - 1]
  - SET crunched = crunched + string[counter]

RETURN crunched

END

## Further Exploration

### Doing it with regEx

There's a pretty cool way to do it but it uses an apparently non-standard property: [RegExp.$1-$9](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)

[Legacy RegExp features in JavaScript](https://github.com/tc39/proposal-regexp-legacy-features/#additional-properties-of-the-regexp-constructor)

This is how it would be done:  
`str.replace(/(.)\1+/g, '$1')`
