function listDigits(numbers) {
  return numbers
    .toString()
    .split('')
    .map((n) => n * 1);
}
