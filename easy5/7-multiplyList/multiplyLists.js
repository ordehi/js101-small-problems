function multiplyLists(list1, list2) {
  return list1.reduce((acc, curr, idx) => {
    acc.push(curr * list2[idx]);
    return acc;
  }, []);
}
