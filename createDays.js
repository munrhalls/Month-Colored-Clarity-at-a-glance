import { VALUES_dayNames } from './script.js';
import { appendTriggersAddAndSubstractHour } from './script.js';

function createDays(week) {
  function appendBtn() {
      //closure - count day's hours
  var hourNum = 0;

  const addHourTrigger = createTriggerAddHour();
  addHourTrigger.onclick =  hourAdd(hourNum);


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

  //create: container divs -> corresponding divs: 1) day's title divs, 2) day's deep work hour ticks
  VALUES_dayNames.forEach(function (el) {
    //day's column to add deep work hour ticks into
    var day = document.createElement('div');
    day.innerText = el;
    //style
    day.style.width = "142px";
    day.style.textAlign = "center";
    day.style.border = '1px solid gray'; day.style.padding = '3px 30px';
    var dayContainer = document.createElement('div');
    dayContainer.classList.add('day');
    dayContainer.classList.add(el);
    dayContainer.appendChild(day);
    dayContainer.style.display = 'inline-block';
    week.appendChild(dayContainer);


    append(dayContainer);


  });
}

export { createDays };