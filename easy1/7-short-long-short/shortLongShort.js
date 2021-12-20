const shortLongShort = (string1, string2) => {
  let shortString;
  let longString;

  string1 < string2
    ? ((shortString = string1), (longString = string2))
    : ((shortString = string2), (longString = string1));

  return shortString.concat(longString, shortString);
};
