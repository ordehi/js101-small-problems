## Problem statement

Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Examples:

```js
isPalindrome('madam'); // true
isPalindrome('Madam'); // false (case matters)
isPalindrome("madam i'm adam"); // false (all characters matter)
isPalindrome('356653'); // true
```

## Data Structure

- split string into array and reverse the array
- compare if the string of the reversed array is the same as input

## Algorithm

```
START

# Given a string called string

SET reversed = string.split('').reverse().join('')
RETURN string === reversed

END
```
