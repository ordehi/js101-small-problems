/* 
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Examples:

Copy Code
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

The tests above should log true.

Note that balanced pairs must each start with a (, not a ).
*/

function isBalanced(string) {
  let parens = string.match(/(\(|\))/g);
  if (parens && parens.length % 2 === 1) return false;
  let open = 0;

  if (parens) {
    for (let paren of parens) {
      paren === '(' ? (open += 1) : (open -= 1);
      if (open < 0) return false;
    }
  }

  return !open;
}
