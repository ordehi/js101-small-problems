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

logRoomArea();
