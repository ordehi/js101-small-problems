function leadingSubstrings(word) {
  return word.split('').reduce((acc, curr, idx) => {
    acc.push(acc[idx - 1] ? acc[idx - 1] + curr : curr);
    return acc;
  }, [])
}
