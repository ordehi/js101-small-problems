/* START

-# Given a positive integer called target

SET counter = 0
SET resultString = ''
WHILE counter < target

- IF counter % 2 === 0
  - SET resultString += '1'
- ELSE
  - SET resultString += '0'
- SET counter += 1

RETURN resultString

END */

const stringy = (target) => {
  let resultString = '';

  for (let counter = 0; counter < target; counter += 1) {
    if (counter % 2 === 0) {
      resultString += '1';
    } else {
      resultString += '0';
    }
  }

  return resultString;
};

// Launch's solution

function stringyLaunch(size) {
  let result = '';
  for (let idx = 0; idx < size; idx++) {
    let number = idx % 2 === 0 ? 1 : 0;
    result += number;
  }
  return result;
}

// Note that they used the name size, makes more sense than target.
// They used a ternary to assign a number, then assigned the number to result
// I thought of using a ternary, but my idea was to do the computation and assignment to result in the same ternary.
