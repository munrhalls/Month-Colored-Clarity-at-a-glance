import createTextFile from './createTextFile.js';
import getStrOfHoursPerDayNums from './getStrOfHoursPerDayNums.js';

function saveToTextFile() {
  // the only data it needs = hour ticks numbers 
  const hourNumsStr = getStrOfHoursPerDayNums();
  console.log('Debouncer, add. Reminder.');
  createTextFile('Metrics: Deep work hours. Per day, week, month.', hourNumsStr);
}

export default saveToTextFile;