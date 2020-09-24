import manageHours_appendSingleHourToDay from './manageHours_appendSingleHourToDay.js';

function manageHours_appendManyHoursToDay(numberOfHours, day) {
  for (let j = 1; j <= numberOfHours; j++) {
    manageHours_appendSingleHourToDay(j, day);
  }
}

export default manageHours_appendManyHoursToDay;
