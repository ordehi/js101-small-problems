/* 
START

-# Given a string called message

SET boxLength = message.length + 2

SET dashLine = '+' + '-'.repeat(boxLength) + '+'

SET spaceLine = '\n|' + ' '.repeat(boxLength) + '|\n'

SET messageLine = '| ' + message + ' |'

PRINT dashLine + spaceLine + messageLine + spaceLine + dashLine

END
*/

const logInBox = (message, boxWidth = message.length + 2) => {
  let wrappedMsg = [];
  if (boxWidth < message.length + 2) {
    let wrapLines = Math.ceil(message.length / (boxWidth - 2));
    let breakpoint = 0;
    for (let count = 0; count < wrapLines; count += 1) {
      wrappedMsg.push(message.substring(breakpoint, breakpoint + boxWidth - 2));
      breakpoint += boxWidth - 2;
    }

    let last = wrappedMsg[wrappedMsg.length - 1].length;
    if (last < wrappedMsg[0].length) {
      wrappedMsg[wrappedMsg.length - 1] += ' '.repeat(
        wrappedMsg[0].length - last
      );
    }
  } else {
    wrappedMsg.push(message);
  }

  let messageLine = '';

  wrappedMsg.forEach((line) => {
    messageLine += '| ' + line + ' |\n';
  });

  let dashLine = '+' + '-'.repeat(boxWidth) + '+';
  let spaceLine = '|' + ' '.repeat(boxWidth) + '|\n';

  console.log(dashLine + '\n' + spaceLine + messageLine + spaceLine + dashLine);
};

/* refactoring

const logInBox = (message, boxWidth = message.length) => {
  if (boxWidth < 2) {
    boxWidth = 2;
  }

  if (message !== '' && boxWidth < 3) {
    boxWidth = 3;
  }

  let messageLine = '';
  let wrappedMsg = [];
  if (message.length > 0 && boxWidth < message.length) {
    let wrapLines = Math.ceil(message.length / boxWidth);
    let breakpoint = 0;
    for (let count = 0; count < wrapLines; count += 1) {
      wrappedMsg.push(message.substring(breakpoint, breakpoint + boxWidth));
      breakpoint += boxWidth;
    }

    let last = wrappedMsg[wrappedMsg.length - 1].length;
    if (wrappedMsg[0] !== '' && last < boxWidth) {
      wrappedMsg[wrappedMsg.length - 1] += ' '.repeat(boxWidth - last);
    }

    wrappedMsg.forEach((line) => {
      messageLine += '| ' + line + ' |\n';
    });
  } else {
    messageLine +=
      '| ' + message + ' '.repeat(boxWidth - message.length - 1) + '|\n';
  }

  let dashLine = '+' + '-'.repeat(boxWidth) + '+';
  let spaceLine = '|' + ' '.repeat(boxWidth) + '|\n';

  let result = dashLine + '\n' + spaceLine + messageLine + spaceLine + dashLine;

  return result;
};
 */
