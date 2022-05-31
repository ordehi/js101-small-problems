function union(array1, array2) {
  return Array.from(new Set(array1.concat(array2)));
}