function wordSizes(sentence) {
  let wordCount = {};
  let trimmed = typeof sentence === 'string' ? sentence.trim() : '';

  if (trimmed.length) {
    let splitWords = trimmed.split(' ');
    splitWords.forEach(word => {
      wordCount[word.length] = ++wordCount[word.length] || 1;
    })
  }

  return wordCount;
}