import VALUES_dayNames from './VALUES/VALUES_dayNames.js';
import appendAddAndSubstractHourTriggers from './createFunctionalityTriggers/createTriggersAddAndSubstractHour/appendTriggersAddAndSubstractHour.js';

function createDays(week) {
  //create: container divs -> corresponding divs: 1) day's title divs, 2) day's deep work hour ticks
  VALUES_dayNames.forEach(function(el){
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
      appendAddAndSubstractHourTriggers(dayContainer);
  });
}

export default createDays;