const isDoubleNumber = (n) => {
  let strFromN = n.toString();
  let center = Math.floor(strFromN.length / 2);
  let leftNumber = strFromN.substring(0, center);
  let rightNumber = strFromN.substring(center);

  return leftNumber === rightNumber;
};

const twice = (n) => {
  if (Number(n) !== Number(n)) return NaN;

  if (isDoubleNumber(n)) {
    return n;
  } else {
    return n * 2;
  }
};

// Launch's solution separates isDoubleNumber from twice, my solution did both in the same function. I need to look out and try pureness more.

// my solution before seeing Launch's was this:

const twiceMine = (n) => {
  if (Number(n) !== Number(n)) return NaN;

  let strFromN = n.toString();
  let length = strFromN.length;

  if (length % 2 === 0) {
    if (strFromN.substring(0, length / 2) === strFromN.substring(length / 2)) {
      return n;
    }
  }

  return n * 2;
};
