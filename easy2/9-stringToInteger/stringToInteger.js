const stringToInteger = (string) => string * 1;

// Launch's solution

function stringToIntegerLaunch(string) {
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
}

const hexadecimalToInteger = (hexString) => {
  const HEX_DIGITS = {
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
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  let arrayOfDigits = hexString
    .split('')
    .map((char) => HEX_DIGITS[char.toUpperCase()]);
  let value = 0;
  arrayOfDigits.forEach((digit) => (value = 16 * value + digit));
  return value;
};
