function wordSizes(sentence) {
  let wordCount = {};
  let trimmed = typeof sentence === 'string' ? sentence.trim() : '';

  if (trimmed.length) {
    let splitWords = trimmed.split(' ');

    splitWords.forEach(word => {
      let onlyLetters = removeNonLetters(word);
      if (onlyLetters.length) wordCount[onlyLetters.length] = ++wordCount[onlyLetters.length] || 1;
    })
  }

  return wordCount;
}

function removeNonLetters(word) {
  return word.replace(/\W/g, '');
}