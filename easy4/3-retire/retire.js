const readline = require('readline-sync');
const display = (message) => console.log(message);

display('What is your age?');
let age = readline.prompt();

display('At what age would you like to retire?');
let retirementAge = readline.prompt();

let workYearsLeft = retirementAge - age;
let currentYear = new Date().getFullYear();
let retirementYear = currentYear + workYearsLeft;

display(`It's ${currentYear}. You will retire in ${retirementYear}.`);
display(`You only have ${workYearsLeft} years of work to go!`);
