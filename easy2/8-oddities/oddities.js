const oddities = (array) => array.filter((el, idx) => (idx + 1) % 2 !== 0);

const evens = (array) => {
  let evenElements = [];
  for (let idx = 1; idx < array.length; idx += 2) {
    evenElements.push(array[idx]);
  }

  return evenElements;
};
