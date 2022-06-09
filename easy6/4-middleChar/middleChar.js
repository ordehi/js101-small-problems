function centerOf(sentence) {
  let leftHalf = Math.ceil(sentence.length / 2) - 1;
  let rightHalf = sentence.length / 2 + 1;

  return sentence.substring(leftHalf, rightHalf);
}
