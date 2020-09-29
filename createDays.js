import { VALUES_dayNames } from './script.js';
import { createBtnHourAdd } from './triggers/createBtnHourAdd.js';
import { createBtnHourSubstract } from './triggers/createBtnHourSubstract.js';

import { hourAdd } from './functionality/hourAdd.js';
import { hourSubstract } from './functionality/hourSubstract.js';
import createBtnHourAdd from './triggers/createTriggersAddAndSubstractHour/createBtnHourAdd.js';

function createDays(week) {
  //closure - count day's hours
  var hourNum = 0;

  const btnHourAdd = createBtnHourAdd();
  btnHourAdd.onclick = hourAdd(hourNum);
  const btnHourSubstract = createBtnHourSubstract();
  btnHourSubstract.onclick = hourSubstract(hourNum);

  week.appendChild(btnHourAdd);
  week.appendChild(btnHourSubstract);

  VALUES_dayNames.forEach(function (el) {
    const day = document.createElement('div');
    day.innerText = el;
    //style
    day.style.width = "142px";
    day.style.textAlign = "center";
    day.style.border = '1px solid gray'; day.style.padding = '3px 30px';

    const dayContainer = document.createElement('div');
    dayContainer.classList.add('day');
    dayContainer.classList.add(el);
    dayContainer.appendChild(day);
    dayContainer.style.display = 'inline-block';

    week.appendChild(dayContainer);
  });
}

export default createDays;