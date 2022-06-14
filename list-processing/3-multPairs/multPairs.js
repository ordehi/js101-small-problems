function multiplyAllPairs(numbers1, numbers2) {
  let products = [];
  numbers1.forEach(num => numbers2.forEach(mult => products.push(num * mult)));

  return products.sort((a, b) => a - b);
}