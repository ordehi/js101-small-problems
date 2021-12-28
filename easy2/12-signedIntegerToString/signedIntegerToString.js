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

const signedIntegerToString = (number) => {
  if (number === 0) return '0'; // I don't want to send a zero in for computation

  let sign = number > 0;
  let stringNumber = integerToString(Math.abs(number));

  return sign
    ? (stringNumber = '+' + stringNumber)
    : (stringNumber = '-' + stringNumber);
};

/* START

# Given a signed integer called number

IF number === 0

- RETURN '0'

SET sign = number > 0
SET stringNumber = integerToString(Math.abs(number))

IF sign is true

- SET stringNumber = '+' + stringNumber

ELSE

- SET stringNumber = '-' + stringNumber

END */
