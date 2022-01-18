const getCenturyNumber = (year) => Math.ceil(year / 100);

const century = (year) => {
  let centuryStr = getCenturyNumber(year).toString();
  let length = centuryStr.length;

  let lastInt = Number(centuryStr.charAt(length - 1));
  let penultInt = Number(centuryStr.charAt(length - 2));

  if (penultInt === 1 || lastInt === 0 || (penultInt !== 1 && lastInt > 3)) {
    centuryStr += 'th';
  } else if (lastInt === 1) {
    centuryStr += 'st';
  } else if (lastInt === 2) {
    centuryStr += 'nd';
  } else {
    centuryStr += 'rd';
  }

  return centuryStr;
};

// Launch's solution

function centuryLaunch(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}
