import createTextFile from './script.js';
import getStrOfHoursPerDayNums from './script.js';

function saveToTextFile() {
  // the only data it needs = hour ticks numbers 
  const hourNumsStr = getStrOfHoursPerDayNums();
  console.log('Debouncer, add. Reminder.');
  createTextFile('Metrics: Deep work hours. Per day, week, month.', hourNumsStr);
}

export default saveToTextFile;