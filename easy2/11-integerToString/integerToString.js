const integerToString = (integer) => {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let stringInteger = '';

  do {
    let digit = integer % 10;
    stringInteger = DIGITS[digit] + stringInteger;
    integer -= digit;
    integer /= 10;
  } while (integer > 0);

  return stringInteger;
};

/* 
  I wanted to use as few methods as I could for this solution
  hence I didn't use any Math object methods
*/

/* START

# Given a number called integer

SET DIGITS = a collection of 0-9 as strings

SET stringInteger = ''

WHILE integer > 0 with an initial iteration regardless of integer's value

- SET digit = integer % 10
- SET stringInteger = DIGITS[digit] + stringInteger
- SET integer = integer - digit
- SET integer = integer / 10
  PRINT stringInteger

END */
