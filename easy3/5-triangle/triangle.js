/* 
START

# Given a positive integer size

SET result = ''
SET place = 1
WHILE place <= size
- SET currentLine = '*'.repeat(place)
- SET currentLine = currentLine.padStart(size, ' ');
- SET currentLine += '\n';
- SET result += currentLine;
- place += 1

PRINT result

END */

const triangle = (size, character = '*') => {
  let result = '';
  for (let place = 1; place <= size; place += 1) {
    let currentLine = character.repeat(place).padStart(size, ' ');
    currentLine += '\n';
    result += currentLine;
  }
  console.log(result);
};

// Launch's solution

function triangleLaunch(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}
