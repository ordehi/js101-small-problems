/* 
1. variable areaSqMeters holds the result of width \* length
2. variable areaSqFeet holds the result of areaSqMeters \* 10.7639
3. log "The area of the room is " + areaSqMeters + " square meters (" + areaSqFeet + " square feet)."
*/

const rlSync = require('readline-sync');

const logRoomArea = () => {
  let roomLength = rlSync.question('Enter the length of the room in meters:\n');
  let roomWidth = rlSync.question('Enter the width of the room in meters:\n');
  let areaSqMeters = parseFloat(roomLength * roomWidth).toFixed(2);
  let areaSqFeet = (areaSqMeters * 10.7639).toFixed(2);

  console.log(
    `The area of the room is ${areaSqMeters} square meters (${areaSqFeet} square feet).`
  );
};

// logRoomArea();

/* 
Further Exploration
Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.
*/

const logRoomAreaWithType = () => {
  let inputType = rlSync.question(
    'Will you input meters or feet?\n1. meters\n2. feet\n'
  );

  let roomLength = rlSync.question('Enter the length of the room:\n');
  let roomWidth = rlSync.question('Enter the width of the room:\n');

  let areaSqMeters;
  let areaSqFeet;

  if (inputType === '1') {
    areaSqMeters = (roomLength * roomWidth).toFixed(2);
    areaSqFeet = (areaSqMeters * 10.7639).toFixed(2);
    console.log(
      `The area of the room is ${areaSqMeters} square meters (${areaSqFeet} square feet).`
    );
  } else if (inputType === '2') {
    areaSqFeet = (roomLength * roomWidth).toFixed(2);
    areaSqMeters = (areaSqFeet / 10.7639).toFixed(2);
    console.log(
      `The area of the room is ${areaSqFeet} square feet (${areaSqMeters} square meters).`
    );
  }
};

logRoomAreaWithType();
