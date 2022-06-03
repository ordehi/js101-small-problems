const MIDNIGHT = 0;
const MINUTES_IN_DAY = 1440;
const MINUTES_IN_HOUR = 60;
const DECIMAL = 1;

function padZero(time) {
  return String(time).padStart(2, '0');
}

function formatTime(hours, minutes) {
  return `${padZero(hours)}:${padZero(minutes)}`;
}

function timeOfDay(minutesAM) {
  if (minutesAM < MIDNIGHT) {
    minutesAM = (minutesAM % MINUTES_IN_DAY) + MINUTES_IN_DAY;
  } else {
    minutesAM = minutesAM % MINUTES_IN_DAY;
  }

  let hours = Math.floor(minutesAM / MINUTES_IN_HOUR);
  let minutes = minutesAM % MINUTES_IN_HOUR;

  return formatTime(hours, minutes);
}

/* 

How would you approach this problem if you were allowed to use JavaScript's Date class? Suppose you also needed to consider the day of week? (Assume that deltaMinutes is the number of minutes before or after midnight between Saturday and Sunday; in such a method, a deltaMinutes value of -4231 would need to produce a return value of Thursday 01:29.)

*/
