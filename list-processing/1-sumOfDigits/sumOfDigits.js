function sum(integer) {
  return integer.toString().split('').reduce((sum, curr) => sum + Number(curr), 0);
}