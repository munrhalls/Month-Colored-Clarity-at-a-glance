import manageHours_createTickGraphic from './manageHours_createTickGraphic.js';
import manageHours_appendNumberToSingleHour from './manageHours_appendNumberToSingleHour.js';
import manageHours_createHourElement from './manageHours_createHourElement.js';

function manageHours_appendSingleHourToDay(numberOfTheHour, day) {
  const hour = manageHours_createHourElement();
  manageHours_appendNumberToSingleHour(numberOfTheHour, hour);
  day.appendChild(hour);
}

export default manageHours_appendSingleHourToDay;