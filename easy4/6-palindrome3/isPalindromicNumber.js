const isPalindrome = (string) => string === string.split('').reverse().join('');

const isPalindromicNumber = (integer) => isPalindrome(String(integer));
