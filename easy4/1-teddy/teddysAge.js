/* 
START getRandomIntFromRange

-# Given two integers min and max

RETURN rounded down ((random from 0 to 0.99) * (max - min + 1) + min)

END


START printTeddysAge

SET teddysAge = getRandomIntFromRange(20, 120)

PRINT `Teddy is {teddysAge} years old!

END

*/

const getRandomIntFromRange = (min, max) => {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const printTeddysAge = () =>
  console.log(`Teddy is ${getRandomIntFromRange(20, 120)} years old!`);
