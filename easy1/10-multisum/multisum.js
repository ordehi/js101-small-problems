/*
Step 1: If number is < 3 return 0
Step 2: Declare variable total at 0
Step 3: Start a loop counter at 3
Step 4: While counter is less than or equal to input
a. if counter is divisible by 3, add counter to total
b. if counter is divisible by 5, add counter to total
c. add 1 to counter
Step 5: Return total
 */

const multisum = (inputNumber) => {
  if (inputNumber < 3) return 0;

  let total = 0;

  for (let counter = 3; counter <= inputNumber; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      total += counter;
    }
  }

  return total;
};

multisum(1000);
