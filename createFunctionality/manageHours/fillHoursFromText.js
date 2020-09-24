import clearAllHoursFromDay from './clearAllHoursFromDay.js';
import appendManyHoursToDay from './appendManyHoursToDay.js';

// feature - fill work hours per day from TEXT FILE // feature - fill work hours per day from text file // 
function fillHoursFromText(textFile) {
  const days = document.getElementsByClassName('day');
  let hoursArr = textFile.split(',');

  for (let i = 0; i < days.length; i++) {
    clearAllHoursFromDay(days[i]);
    appendManyHoursToDay(hoursArr[i], days[i]);
  }
  // clear & append on each day, what for? saves the need to otherwise loop all days 2nd time
}

export default fillHoursFromText;