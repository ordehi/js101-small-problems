const FIRST = 0;
const SECOND = 1;
const FINAL = 2;
const EMPTY = 0;
const SWAP = 1;

function interleave(firstList, secondList) {
  let copy = [firstList.slice(), secondList.slice(), []];
  let which = SWAP;

  while (copy[FIRST].length + copy[SECOND].length > EMPTY) {
    copy[FINAL].push(
      copy[(which ^= SWAP)].shift() || copy[(which ^= SWAP)].shift()
    );
  }

  return copy[FINAL];
}

function interleave1_1(firstList, secondList) {
  let copy = [firstList.slice(), secondList.slice(), []];
  let which = SWAP;

  while (copy[FIRST].length + copy[SECOND].length > EMPTY) {
    copy[FINAL].push(
      copy[(which ^= SWAP)].shift(),
      copy[(which ^= SWAP)].shift()
    );
  }

  return copy[FINAL];
}

function interleave2(firstList, secondList) {
  let copy = [...firstList.slice(), ...secondList.slice().reverse()];
  let interleaved = [];

  while (copy.length > 0) {
    interleaved.push(copy.shift(), copy.pop());
  }

  return interleaved;
}

function interleave3(firstList, secondList) {
  let interleaved = [];

  for (let index = 0; index <= firstList.length; index += 1) {
    interleaved.push(firstList[index], secondList[index]);
  }

  return interleaved;
}
