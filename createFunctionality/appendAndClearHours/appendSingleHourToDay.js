import { appendNumberToSingleHour } from '../../script.js';
import { createHourElement } from './../../script.js';

function appendSingleHourToDay(numberOfTheHour, day) {
  const hour = createHourElement();
  appendNumberToSingleHour(numberOfTheHour, hour);
  day.appendChild(hour);
}

export { appendSingleHourToDay };