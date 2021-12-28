const stringToInteger = (string) => {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  let arrayOfDigits = string.split('').map((char) => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = 10 * value + digit));
  return value;
};

const stringToSignedInteger = (string) => {
  let number = isNaN(Number(string[0]))
    ? stringToInteger(string.substring(1))
    : stringToInteger(string);
  let signed = string.includes('-') ? (number = number - number * 2) : number;
  return signed;
};

/* Launch's solution is pretty idiomatic and simple
 For some reason I assumed I couldn't use the unary operator to solve this
 which is why I went with the hacky one I used */

function stringToSignedIntegerLaunch(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    case '+':
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}
