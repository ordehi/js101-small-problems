/*
Step 1: If string.length is 0, return 0
Step 2: Declare counter variable to the value of string.length
Step 3: Declare total to 0;
Step 4: While counter isn't 0
a. add the value of string.charCodeAt(counter)
b. decrement counter by 1
Step 5: return total
*/

const utf16Value = (stringInput) => {
  if (stringInput.length === 0) return 0;

  let counter = stringInput.length;
  let total = 0;

  while ((counter -= 1) >= 0) {
    total += stringInput.charCodeAt(counter);
  }

  return total;
};
