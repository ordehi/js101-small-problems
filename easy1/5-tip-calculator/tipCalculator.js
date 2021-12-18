// 1. question for bill, hold in variable billAmount

const rlSync = require('readline-sync');
let billAmount = parseFloat(rlSync.question('What is the bill? '));
// 2. question for tip rate, hold in variable tipRate
let tipRate = parseFloat(rlSync.question('What is the tip percentage? '));

// 3. variable tipAmount holds the result of billAmount \* tipRate / 100
let tipAmount = (billAmount * tipRate) / 100;

// 4. variable total holds sum of tipAmount + billAmount
let total = billAmount + tipAmount;

// 5. console.log uses string interpolation to print values in separate lines
console.log(
  `The tip is $${tipAmount.toFixed(2)}\nThe total is $${total.toFixed(2)}`
);

// interesting find, toFixed() returns a string.
