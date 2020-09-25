import VALUES_dayNames from './VALUES/VALUES_dayNames.js'; imp appendAddAndSubstractHourTriggers from './createFunctionalityTriggers/createTriggersAddAndSubstractHour/appendTriggersAddAndSubstractHour.js';
import createDays from './createDays.js';
import createMenu from './createMenu/createMenu.js'; import { VALUES_dayNames, VALUES_monthNames } from './VALUES/VALUES.;import createMonthContainers from './createMonthContainers.;import appendSingleHourToDay from './appendSingleHourToDay.js';
import appendSingleHourToDay from './appendSingleHourToDay.js';
import appendNumberToSingleHour from '../../createHourElement/appendNumberToSingleHour.;import createHourElement from '../../createHourElement / createHourElement.js';
import clearAllHoursFromDay from '../appendAndClearHours/clearAllHoursFromDay.;import appendManyHoursToDay from '../appendAndClearHours/appendManyHoursToDay.js';
import fillHoursFromString from './fillHoursFromString.js';
import { VALUES_dayNames } from "../../VALUES/VALUES.js";
import getCSVWeekHours from './getCSVWeekHours.;
import getCsvRow from './getCsvRow.js';
import { VALUES_monthNames } from "../../VALUES/VALUES.;
import getCSVMonthHours from './getCSVMonthHours.;
import getCSVDayNamesRow from './getCSVDayNamesRow.;
import getCsvRow from './getCsvRow.js';
import getFullCSV from "./getFullCSV.js";
import createTextFile from './createTextFile.;
import getStrOfHoursPerDayNums from './getStrOfHoursPerDayNums.js';
import VALUES_CSS from '../../VALUES/VALUES_CSS.js';
import createContainer from './createContainer.
import createColumn from './createColumn.
import createDropTextFileLabel from './createDropTextFileLabel.
import createDropTextFileButton from './createDropTextFileButton.
import createBottomLabel from './createBottomLabel.js';
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from './icons.js';
import fillHoursFromTextFile from '../../createFunctionality/fillHoursFromTextFile/fillHoursFromTextFile.js'
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from '../../createResources/resources.js';
import createAddHourTrigger from './createTriggerAddHour.js';
import createSubstractHourTrigger from './createTriggerSubstractHour.js';
import saveToExcelFile from "../../createFunctionality/saveToExcel/saveToExcelFile.js";
import VALUES_CSS from '../../VALUES/VALUES_CSS.js'
import VALUES_CSS from '../../VALUES/VALUES_CSS.js'
import saveToTextFile from '../../createFunctionality/saveToText/saveToTextFile.
import container from './createContainer
import saveTextToFileBtn from './createSaveToTextFileButton
import bottomText from './createBottomText
import styleSaveIcon from './styleSaveIcon.js'
import { underLineGraphic, arrowGraphic, saveIcon } from '../../createResources/resources.js';
import createTickGraphic from './createTickGraphic.js';
import createTitle from './createTitle.js';
import VALUES_CSS from '../VALUES/VALUES_CSS.js';
import saveToExcelBtn from '../createFunctionalityTriggers/createTriggerSaveToExcel/createTriggerSaveToExcelBtn.js';
import saveToTextFileTrigger from '../createFunctionalityTriggers/createTriggerSaveToTextFile/createTriggerSaveToTextFile.js';
import createFillHoursFromTextFileTrigger from '../createFunctionalityTriggers/createTriggerFillHoursFromText/createTriggerFillHoursFromTextFile.js';
import arrowGraphic from './arrowGraphic.js';
import chartIcon from './chartIcon.js';
import fillIcon from './fillIcon.js';
import saveIcon from './saveIcon.js';
import underLineGraphic from './underLineGraphic.js';
import VALUES_CSS from '../VALUES/VALUES_CSS.js';
import VALUES_CSS from './VALUES_CSS.js';
import VALUES_dayNames from './VALUES_dayNames.js';
import VALUES_monthNames from './VALUES_monthNames.js';



window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  createMenu();
  for (var i = 0; i < 12; i++) {
    createMonthContainers(i);
  }
  createCopyrightNote();
  createCopyrightNote2();
});
function appendHour(hoursNum, day) {
  const hour = createHourTick();
  appendNumToHour(hoursNum, hour);
  day.appendChild(hour);
}
function createHourTick() {
  var hour = document.createElement('div');
  hour.className = "hour";
  hour.style.backgroundColor = "#000071";
  hour.style.padding = "7px 0";
  hour.style.border = "1px solid darkblue";
  hour.style.position = 'relative';
  // deep work hour count - visual representer
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "28");
  svg.setAttribute("width", "28");
  svg.setAttribute('display', 'block');
  svg.style.margin = "auto";
  var tick = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  tick.setAttributeNS(null, 'd', 'M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z   M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685  c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971  l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969  C156.146,65.765,156.146,74.362,150.862,79.646z');
  tick.style.scale = "0.14";
  tick.style.x = "50%";
  svg.appendChild(tick);
  hour.appendChild(svg);
  return hour;
};
function appendNumToHour(num, hour) {
  var numEl = document.createElement('div');
  numEl.style.color = '#000';
  numEl.style.fontWeight = "bold";
  numEl.style.fontSize = '1.6rem';
  numEl.style.position = 'absolute';
  numEl.style.left = '15px';
  numEl.style.top = '0.1rem';
  numEl.innerText = num;
  hour.appendChild(numEl);
}
function deleteHourEl(day) {
  if (day.getElementsByClassName('hour').length) {
    day.removeChild(day.getElementsByClassName('hour')[day.getElementsByClassName('hour').length - 1]);
  }
}
function createCopyrightNote() {
  const copyrightNote = document.createElement('div');
  copyrightNote.classList.add('copyright');
  copyrightNote.style.letterSpacing = '0.25rem';
  copyrightNote.style.padding = '0.15rem';
  copyrightNote.innerText = 'Icons made by ';
  const link = document.createElement('a');
  link.href = 'https://icon54.com/';
  link.title = 'Pixel perfect';
  link.innerText = 'Pixel perfect';
  copyrightNote.appendChild(link);
  const betweenLinksText = document.createElement('span');
  betweenLinksText.innerText = ' from ';
  copyrightNote.appendChild(betweenLinksText);
  const linkTwo = document.createElement('a');
  linkTwo.href = 'https://www.flaticon.com/';
  linkTwo.title = 'Flaticon';
  linkTwo.innerText = 'www.flaticon.com';
  copyrightNote.appendChild(linkTwo);
  const dot = document.createElement('span');
  dot.innerText = '.';
  dot.style.color = 'blue';
  copyrightNote.appendChild(dot);
  copyrightNote.style.backgroundColor = '#000';
  copyrightNote.style.color = '#fff';
  copyrightNote.style.fontSize = '10px'
  copyrightNote.style.textAlign = 'center';
  document.getElementById('root').appendChild(copyrightNote);
}
function createCopyrightNote2() {
  const copyrightNote2 = document.createElement('div');
  copyrightNote2.classList.add('copyright');
  copyrightNote2.style.letterSpacing = '0.25rem';
  copyrightNote2.style.padding = '0.15rem';
  const link = document.createElement('a');
  link.href = 'https://www.iconbros.com/icons/ib-o-f-analysis/';
  link.title = 'IconBros';
  link.innerText = 'Analysis';
  link.target = '_blank';
  copyrightNote2.appendChild(link);
  const betweenLinksText = document.createElement('span');
  betweenLinksText.innerText = ' icon by ';
  copyrightNote2.appendChild(betweenLinksText);
  const linkTwo = document.createElement('a');
  linkTwo.href = 'https://iconbros.com';
  linkTwo.title = 'IconBros';
  linkTwo.innerText = 'IconBros';
  linkTwo.target = '_blank';
  copyrightNote2.appendChild(linkTwo);
  const dot = document.createElement('span');
  dot.innerText = '.';
  dot.style.color = 'blue';
  copyrightNote2.appendChild(dot);
  copyrightNote2.style.backgroundColor = '#000';
  copyrightNote2.style.color = '#fff';
  copyrightNote2.style.fontSize = '10px'
  copyrightNote2.style.textAlign = 'center';
  document.getElementById('root').appendChild(copyrightNote2);
}
