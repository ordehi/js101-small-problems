/* 
Write a function that takes a string argument containing one or more words and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.

Examples:

Copy Code
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
*/

function reverseWord(word) {
  return word.split('').reverse().join('');
}

function reverseWordsOver5(words) {
  return words
    .split(' ')
    .map((word) => (word.length >= 5 ? reverseWord(word) : word))
    .join(' ');
}
