function swap(sentence) {
  if (isString(sentence)) {
    let swapped = sentence.split(' ').map(word => {
      let splitWord = word.split('');
      let firstLetter = splitWord.shift();
      let lastLetter = splitWord.pop();

      splitWord.unshift(lastLetter);
      splitWord.push(firstLetter);

      return splitWord.join('');
    });

    return swapped.join(' ');
  }

  return '';
}

function isString(value) {
  return typeof value === 'string';
}