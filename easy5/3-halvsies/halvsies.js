function getBreakpointsFor(array) {
  let fromStart = 0;
  let toMid = Math.ceil(array.length / 2)
  let fromMid = toMid;
  let toEnd = array.length;

  return { fromStart, toMid, fromMid, toEnd };
}

function getSectionOf(array, start, end) {
  return array.slice(start, end);
}

function halvsies(collection) {
  const { fromStart, toMid, fromMid, toEnd } = getBreakpointsFor(collection);

  let firstHalf = getSectionOf(collection, fromStart, toMid);
  let secondHalf = getSectionOf(collection, fromMid, toEnd);

  return [firstHalf, secondHalf];
}