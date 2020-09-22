import {resourceCreateArrowGraphic,
  resourceCreateChartIcon,
  resourceCreateFillIcon,
  resourceCreateSaveIcon, 
  resourceCreateUnderLineGraphic} from './createResourceFunctions.js';
import VALUES_CSS from './VALUES/VALUES_CSS.js';
import createSaveToExcelBtn from './createButtons/createSaveToExcelBtn.js';
import createSaveTextFileBtn from './createButtons/createSaveTextFileBtn.js';
import createFillDataBtn from './createButtons/createFillHoursBtn.js';

function createMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');  
  menu.style.position = 'relative';
  const title = document.createElement('div');
    menu.style.color = '#fff';
    menu.style.height = VALUES_CSS['height_menuWhole'],
    menu.style.borderBottom = '1px solid gray';
    menu.style.backgroundColor = '#000';
    menu.style.display = 'flex';

    title.innerText = 'Metrics - Deep Work hours';
    title.textAlign = 'center';
    title.style.display = 'flex';
    title.style.alignItems = 'center';
    title.style.padding = '0 3rem';
    title.style.fontWeight = 'bold';
    title.style.fontSize = '1.5rem'
    title.style.fontFamily = 'consolas';
    title.style.letterSpacing = '0.1rem';
  const saveToExcelBtn = createSaveToExcelBtn();
  menu.appendChild(title);  
  document.getElementById('root').appendChild(menu);
  createSaveTextFileBtn();
  createFillDataBtn();
  menu.appendChild(saveToExcelBtn);
}
// feature - fill work hours per day from TEXT FILE // feature - fill work hours per day from text file // 
function fillHoursData(textFile) {
  const days = document.getElementsByClassName('day');
  let hoursArr = textFile.split(',');
  
  for (let i = 0; i < days.length; i++) {
    // clear & append on each day -> saves the need to otherwise loop all days 2nd time
    clearHoursFromTheDay(days[i]);
    appendHoursToDay(hoursArr[i], days[i]);
  }
}
function clearHoursFromTheDay(day) {
  for (let r = day.getElementsByClassName('hour').length - 1; r >= 0; r--) {
    day.getElementsByClassName('hour')[r].remove();
  }
}
function appendHoursToDay(hoursNum, day) {
  for (let j = 1; j <= hoursNum; j++) {
    appendHour(j, day);
  }
}
function appendHour(hoursNum, day) {
  const hour = createHourTick();
  appendNumToHour(hoursNum, hour);
  day.appendChild(hour);
}
export default createMenu;