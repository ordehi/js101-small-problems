const DEGREE_SYMBOLS = {
  degrees: `°`,
  minutes: `'`,
  seconds: `"`,
};

const DEG_TO_MIN_SEC = 60;

function extractDegValue(value) {
  return (getDecimal(value) % 1) * DEG_TO_MIN_SEC;
}

function getDecimal(float) {
  return float % 1;
}

function padSingles(number) {
  let string = String(number);
  return string.length === 1 ? string.padStart(2, '0') : string;
}

function prettifyValue(value, name) {
  return name === 'degrees' ? Math.floor(value) : padSingles(Math.floor(value));
}

function buildString(degreeValues) {
  let resultString = '';

  for (const prop in degreeValues) {
    resultString += prettifyValue(degreeValues[prop]) + DEGREE_SYMBOLS[prop];
  }

  return resultString;
}

function calculateDegrees(degrees) {
  let minutes = extractDegValue(degrees);
  let seconds = extractDegValue(minutes);
  return {
    degrees,
    minutes,
    seconds,
  };
}

function dms(degrees) {
  let degreeValues = calculateDegrees(degrees);

  let degreeString = buildString(degreeValues);

  return degreeString;
}

// Launch's solution

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dmsLaunch(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - minutes / MINUTES_PER_DEGREE) *
      SECONDS_PER_DEGREE
  );

  return (
    String(degreesInt) +
    DEGREE +
    padZeroes(minutes) +
    "'" +
    padZeroes(seconds) +
    '"'
  );
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? '0' + numString : numString;
}
