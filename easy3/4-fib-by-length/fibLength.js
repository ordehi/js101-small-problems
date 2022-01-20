const findFibIndexByLength = (length) => {
  let prev = 1n;
  let curr = 1n;
  let next;
  let index = 1n;

  while (BigInt(prev.toString().length) !== length) {
    next = prev + curr;
    prev = curr;
    curr = next;
    index += 1n;
  }

  return index;
};
