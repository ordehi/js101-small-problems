## Problem Statement

Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

Copy Code
logInBox('To boldly go where no one has gone before.');
will log on the console:

```javascript
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
```

```javascript
logInBox('');
+--+
|  |
|  |
|  |
+--+
```

You may assume that the output will always fit in your browser window.

## Mental Model

Given a string, print that string to the console surrounded by a box made up of; + for corners, - for top and bottom sides, | for left and right sides.

The empty box looks like this:

```
+--+
|  |
|  |
|  |
+--+
```

## Explicit Requirements

- The string must be contained in the box

- The string must be printed to the console

- The box should adjust to the size of the string

## Implicit Requirements

- Must insert newline characters at the end of each line

- Must print the same number of dashes in the top and bottom as the length of the string + 2, that is, the string will have one whitespace on each side

## Data Structure

- Must loop through the length of the string + 2 for the dashes

- Must keep track of which line we're at so that we either print dashes, spaces, or the string.\

- To avoid unnecessary looping, save the first and second lines in separate variables once they're built, and starting on line 4 just add those lines to the string instead of building them again from scratch

## Algorithm

START

-# Given a string called words

SET boxLength = words.length + 2

SET dashLine = '+' + '-'.repeat(boxLength) + '+'

SET spaceLine = '\n|' + ' '.repeat(boxLength) + '|\n'

SET stringLine = '| ' + words + ' |'

PRINT dashLine + spaceLine + stringLine + spaceLine + dashLine

END

## Further Exploration

Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.

## Refactoring
