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

/* const TOP_BOTTOM = '-';
const CORNER = '+';
const SIDE = '|';

const wrapToFixedWidthLines = (message, lineWidth) => {
  let linesToWrap = Math.ceil(message.length / lineWidth);
  let lineStart = 0;
  let wrappedMsg = [];

  for (let line = 0; line < linesToWrap; line += 1) {
    wrappedMsg.push(message.substring(lineStart, lineStart + lineWidth));
    lineStart += lineWidth;
  }

  let lastLineLength = wrappedMsg.at(-1).length;
  if (lastLineLength < lineWidth) {
    wrappedMsg.at(-1).padEnd(lineWidth - lastLineLength, ' ');
  }

  return wrappedMsg;
};

const logInBox = (message, boxWidth = message.length) => {
  let boxedMsg = [];
  let msgLength = message.length;
  let topAndBottomLine = CORNER + TOP_BOTTOM.repeat(boxWidth + 2) + CORNER;
  let beforeAndAfterMsgLine = SIDE + ' '.repeat(boxWidth + 2) + SIDE;

  boxedMsg.push(topAndBottomLine);
  boxedMsg.push(beforeAndAfterMsgLine);

  if (boxWidth < msgLength) {
    boxedMsg.push(
      wrapToFixedWidthLines(message, boxWidth).map((line) => {
        SIDE + ' ' + line + ' ' + SIDE;
      })
    );
  } else {
    let paddedMsg =
      SIDE + ' ' + message.padEnd(boxWidth - msgLength, ' ') + ' ' + SIDE;
    boxedMsg.push(paddedMsg);
  }

  boxedMsg.push(beforeAndAfterMsgLine);
  boxedMsg.push(topAndBottomLine);

  let strMsg = boxedMsg.join('\n');

  return strMsg;
}; */

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
    let lineStart = 0;
    for (let line = 0; line < wrapLines; line += 1) {
      wrappedMsg.push(message.substring(lineStart, lineStart + boxWidth));
      lineStart += boxWidth;
    }

    let lastLineLength = wrappedMsg[wrappedMsg.length - 1].length;
    if (wrappedMsg[0] !== '' && lastLineLength < boxWidth) {
      wrappedMsg[wrappedMsg.length - 1] += ' '.repeat(boxWidth - lastLineLength);
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
