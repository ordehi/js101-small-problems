const readline = require('readline-sync');
const display = (message) => console.log(message);
const ORDER = ['st', 'nd', 'rd'];

let arrayOfNumbers = [];
let place = 1;

while (place <= 5) {
  display(
    `Enter the ${place}${
      place < ORDER.length ? ORDER[place - 1] : 'th'
    } number:`
  );
  let number = readline.prompt();
  arrayOfNumbers.push(number);
  place += 1;
}

display(`Enter the last number:`);
let numberToMatch = readline.prompt();

display(
  `The number ${numberToMatch} ${
    arrayOfNumbers.includes(numberToMatch) ? 'appears' : 'does not appear'
  } in ${arrayOfNumbers.join(', ')}.`
);
