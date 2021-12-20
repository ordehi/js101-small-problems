/* Step 1: Check if year is lower than 1752
a. If lower, return true if year is divisible by 4, return false otherwise
b. If equal or greater, go to step 2
Step 2: Return true if year is divisible by 400
Step 3: Return true if year is divisible by 4 and not 100, return false otherwise */

const isLeapYearGregorian = (year) => {
  if (year < 1752 && year % 4 === 0) return true;

  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};
