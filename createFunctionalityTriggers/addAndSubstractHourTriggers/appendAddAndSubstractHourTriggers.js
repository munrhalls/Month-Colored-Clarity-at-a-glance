import createAddHourTrigger from './createAddHourTrigger.js';
import createSubstractHourTrigger from './createSubstractHourTrigger.js';

function appendAddAndSubstractHourTriggers(dayContainer) {
  //closure - count day's hours
  var hourNum = 0;
  
  const addHourTrigger = createAddHourTrigger();
  addHourTrigger.onclick = function addHour(){
    hourNum++;
    const hour = createHourTick();
    appendNumToHour(hourNum, hour);
    const parent = addHourTrigger.parentNode;
    parent.appendChild(hour);
  };  

  const substractHourTrigger = createSubstractHourTrigger(); 
  substractHourTrigger.onclick = function substractHour(){
    if (hourNum > 0) {
      hourNum--;
    }
    const day = substractHourTrigger.parentNode;
    deleteHourEl(day);
  };
  dayContainer.appendChild(addHourTrigger);
  dayContainer.appendChild(substractHourTrigger);
  console.log(dayContainer);
}

export default appendAddAndSubstractHourTriggers;