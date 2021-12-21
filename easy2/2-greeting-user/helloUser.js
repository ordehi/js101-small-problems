const readlineSync = require('readline-sync');

const helloUser = (username) => {
  let greeting = `Hello ${username}`;
  console.log(
    user.indexOf('!') !== -1
      ? greeting.toUpperCase() + ' WHY ARE WE SCREAMING?'
      : greeting + '.'
  );
};

let user = readlineSync.question('What is your name? ');

helloUser(user);
