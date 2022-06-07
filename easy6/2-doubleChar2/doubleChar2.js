function doubleConsonants(text) {
  let consonants = /[bcdfghjklmnpqrstvwxys]/gi;

  return text
    .split('')
    .map((char) => (char.match(consonants) ? char + char : char))
    .join('');
}
