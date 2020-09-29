import { VALUES_dayNames } from '../script.js';
import { createBtnHourAdd } from '../triggers/createBtnHourAdd.js';
import { createBtnHourSubstract } from '../triggers/createBtnHourSubstract.js';
import { hourAdd } from './functionality/hourAdd.js';
import { hourSubstract } from './functionality/hourSubstract.js';
import createBtnHourAdd from './triggers/createTriggersAddAndSubstractHour/createBtnHourAdd.js';

function createDays() {
  var hourNum = 0;
  let daysVariable = document.createElement('div');
  VALUES_dayNames.forEach(function (el) {
    function assemble() {
      const container = createContainer();
      const day = createDay();
      const btnHourAdd = createBtnHourAdd();
      const btnHourSubstract = createBtnHourSubstract();
      container.appendChild(day);
      container.appendChild(btnHourAdd);
      container.appendChild(btnHourSubstract);
      daysVariable.appendChild(container);
    }
    function createBtnHourAdd() {
      const btnHourAdd = createBtnHourAdd();
      btnHourAdd.onclick = hourAdd(hourNum);
    }
    function createBtnHourSubstract() {
      const btnHourSubstract = createBtnHourSubstract();
      btnHourSubstract.onclick = hourSubstract(hourNum);
    }
    function createContainer() {
      const container = document.createElement('div');
      container.classList.add('day');
      container.style.display = 'inline-block';
      container.classList.add(el);
      return container;
    }
    function createDay() {
      const day = document.createElement('div');
      day.innerText = el;
      day.style.width = "142px";
      day.style.textAlign = "center";
      day.style.border = '1px solid gray';
      day.style.padding = '3px 30px';
      return day;
    }
    assemble();
  });
  const days = daysVariable;
  return days;
}

export default createDays;