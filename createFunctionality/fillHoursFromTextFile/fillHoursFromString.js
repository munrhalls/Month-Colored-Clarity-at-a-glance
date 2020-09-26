import { clearAllHoursFromDay } from './script.js';
import { appendManyHoursToDay } from './script.js';

// feature - fill work hours per day from TEXT FILE // feature - fill work hours per day from text file // 
function fillHoursFromText(string) {

  const days = document.getElementsByClassName('day');
  let hoursArr = string.split(',');

  for (let i = 0; i < days.length; i++) {
    clearAllHoursFromDay(days[i]);
    appendManyHoursToDay(hoursArr[i], days[i]);
  }
  // clear & append on each day, what for? saves the need to otherwise loop all days 2nd time
}

export { fillHoursFromText };