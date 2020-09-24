import manageHours from './manageHours/manageHours.js';
// manageHours('function')(args) instead of direct imports, what for? 
// more extensible - if there were 1000 hour funcs & imports, no change required

// feature - fill work hours per day from TEXT FILE // feature - fill work hours per day from text file // 
function fillHoursFromText(textFile) {
  const days = document.getElementsByClassName('day');
  let hoursArr = textFile.split(',');

  for (let i = 0; i < days.length; i++) {
    const clearAllHoursFromDay = manageHours('manageHours_clearAllHoursFromDay');
    const appendManyHoursToDay = manageHours('manageHours_appendManyHoursToDay');
    clearAllHoursFromDay(days[i]);
    appendManyHoursToDay(hoursArr[i], days[i]);
  }
  // clear & append on each day, what for? saves the need to otherwise loop all days 2nd time
}

export { fillHoursFromText }