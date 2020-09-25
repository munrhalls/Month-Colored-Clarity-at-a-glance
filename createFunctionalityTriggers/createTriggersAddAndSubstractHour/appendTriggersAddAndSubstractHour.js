import createAddHourTrigger from './createTriggerAddHour.js';
import createSubstractHourTrigger from './createTriggerSubstractHour.js';

function appendAddAndSubstractHourTriggers(container) {
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
  container.appendChild(addHourTrigger);
  container.appendChild(substractHourTrigger);
  console.log(container);
}

export default appendAddAndSubstractHourTriggers;