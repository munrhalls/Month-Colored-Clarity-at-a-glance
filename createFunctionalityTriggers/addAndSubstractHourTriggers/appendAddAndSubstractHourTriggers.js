import addHourTrigger from './addHourTrigger.js';
import substractHourTrigger from './addHourTrigger.js';

function appendAddAndSubstractHourTriggers(dayContainer) {
  //count day's hours - closure var
  var hourNum = 0;

  // (represent hours) - add btn click -> add hour element
  addHourTrigger.onclick = function addHour(){
    hourNum++;
    const hour = createHourTick();
    appendNumToHour(hourNum, hour);
    const parent = addHourTrigger.parentNode;
    parent.appendChild(hour);
  };  

  //(represent hours) - substract btn click -> substract hour element
  substractHourTrigger.onclick = function substractHour(){
    if (hourNum > 0) {
      hourNum--;
    }
    const day = substractHourTrigger.parentNode;
    deleteHourEl(day);
  };
  dayContainer.appendChild(addHourTrigger);
  dayContainer.appendChild(substractHourTrigger);
}

export default appendAddAndSubstractHourTriggers;