/* inputString split into array of strings
return the string at array length - 2
 */

const penultimate = (string) => {
  let arrayFromString = string.split(' ');
  return arrayFromString[arrayFromString.length - 2];
};

/* - if typeof words is not a string, throw TypeError
- if words is empty string, or just spaces, throw TypeError (words must not be empty and can't contain only spaces)
- if words doesn't contain a space, return words
- words split into array filtered to non-empty strings only
- if wordArray.length is even, return (wordArray.length / 2) - 1
- else return Math.floor(wordArray.length / 2) + 1 */

const middleWord = (words) => {
  if (typeof words !== 'string')
    throw TypeError('input must be of string type');

  if (words.trim() === '')
    throw TypeError("input must not be empty and can't contain only spaces");

  let wordArray = words.split(' ').filter((word) => word !== '');

  if (wordArray.length === 1) return wordArray[0];

  return wordArray.length % 2 === 0
    ? wordArray[wordArray.length / 2 - 1]
    : wordArray[Math.floor(wordArray.length / 2)];
};
