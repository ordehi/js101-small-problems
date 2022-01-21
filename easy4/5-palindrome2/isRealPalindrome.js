const isRealPalindrome = (string) => {
  let cleanString = string.toLowerCase().replace(/\W/g, '');

  return cleanString === cleanString.split('').reverse().join('');
};
