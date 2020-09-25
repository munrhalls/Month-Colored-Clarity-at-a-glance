import appendNumberToSingleHour from '../../createHourElement/appendNumberToSingleHour.js';
import createHourElement from '../../createHourElement/createHourElement.js';

function appendSingleHourToDay(numberOfTheHour, day) {
  const hour = createHourElement();
  appendNumberToSingleHour(numberOfTheHour, hour);
  day.appendChild(hour);
}

export default appendSingleHourToDay;