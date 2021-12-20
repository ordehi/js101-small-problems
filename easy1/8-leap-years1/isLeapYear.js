/*
Step 1: Check division by 400, return true if evenly divisible
Step 2: Check division by 4
Step 3: Check division by 100, return true if not evenly divisible 
*/

const isLeapYear = (year) => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
};

// Launch's shorter solution greatly states how if... else if can often be reduced to an OR conditional check

function isLeapYearShorter(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
