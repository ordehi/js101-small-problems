/* 
- Split string
- In the resulting collection, go through each character and add it twice to a new string

*/

function repeater(text) {
  let splitText = text.split('');
  let doubled = '';
  splitText.forEach((char) => (doubled += char + char));
  return doubled;
}
