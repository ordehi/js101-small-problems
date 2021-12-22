const multiply = (num1, num2) => num1 * num2;

/* Step 1: If input is > 94906265, throw RangeError
Step 2: return the result of passing the argument to multiply twice */

const square = (num) => {
  if (num > 94906265)
    throw RangeError('Number is too high. Max supported number is 94906265');

  return multiply(num, num);
};

// exponentiation variation

/* multiplier = numberInput
total = numberInput
[Start loop]
while counter <= exponent
a. total += multiply(total, multiplier)
b. counter += 1
[End loop]
return total */

const exponentiate = (num, exp) => {
  let multiplier = num;
  let total = num;
  let counter = 1;

  while (counter < exp) {
    total = multiply(total, multiplier);
    counter += 1;
  }

  return total;
};
