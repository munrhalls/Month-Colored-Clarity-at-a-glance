import { createTriggerAddHour } from './../../script.js';
import { createTriggerSubstractHour } from './../../script.js';

function appendTriggersAddAndSubstractHour(container) {
  //closure - count day's hours
  var hourNum = 0;

  const addHourTrigger = createTriggerAddHour();
  addHourTrigger.onclick = function addHour() {
    hourNum++;
    const hour = createHourTick();
    appendNumToHour(hourNum, hour);
    const parent = addHourTrigger.parentNode;
    parent.appendChild(hour);
  };

  const substractHourTrigger = createTriggerSubstractHour();
  substractHourTrigger.onclick = function substractHour() {
    if (hourNum > 0) {
      hourNum--;
    }
    const day = substractHourTrigger.parentNode;
    deleteHourEl(day);
  };
  container.appendChild(addHourTrigger);
  container.appendChild(substractHourTrigger);
  console.log(container);
}

export { appendTriggersAddAndSubstractHour };