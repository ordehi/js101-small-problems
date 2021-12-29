const crunch = (string) => {
  if (string.length === 0) return;
  let crunched = '';

  for (let current = 0; current < string.length; current += 1) {
    if (string[current] !== crunched[crunched.length - 1]) {
      crunched += string[current];
    }
  }

  return crunched;
};

/* 
It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions. Can you think of any other solutions that don't use regular expressions?
*/
