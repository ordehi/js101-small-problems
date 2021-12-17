// Minimum requirements
const isOdd = (integer) => integer % 2 !== 0;

// Handling non-number edge cases

const isOddNumber = (integer) => {
  if (typeof integer === 'number') {
    return integer % 2 !== 0;
  } else {
    throw new TypeError('input must be a number');
  }
};
