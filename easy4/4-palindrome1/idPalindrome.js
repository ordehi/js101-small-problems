/* 
START

# Given a string called string

SET reversed = string.split('').reverse().join('')
RETURN string === reversed

END
*/

const isPalindrome = (string) => string === string.split('').reverse().join('');
