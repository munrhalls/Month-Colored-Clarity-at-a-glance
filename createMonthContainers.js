import {VALUES_dayNames, VALUES_monthNames} from './VALUES/VALUES.js';
import createSidewaysTitle from './createSidewaysTitle.js';
import createWeeksContainer from './createWeeksContainer.js';
import createWeek from './createWeek.js';


function createMonthContainers(monthNum) {
  var monthContainer = document.createElement('div');
  monthContainer.classList.add('month');
  monthContainer.classList.add('monthContainer');
  monthContainer.classList.add([VALUES_monthNames[monthNum]]);
  monthContainer.style.display = 'flex';
  document.getElementById('root').appendChild(monthContainer);
  createSidewaysTitle(VALUES_monthNames[monthNum], monthNum);
  createWeeksContainer(monthNum);
  createWeek(1, monthNum);
  createWeek(2, monthNum);
  createWeek(3, monthNum);
  createWeek(4, monthNum);
}

export default createMonthContainers;