import createTitle from './createTitle.js';
import VALUES_CSS from '../VALUES/VALUES_CSS.js';
import saveToExcelBtn from '../createFunctionalityTriggers/createTriggerSaveToExcel/createTriggerSaveToExcelBtn.js';
import saveToTextFileTrigger from '../createFunctionalityTriggers/createTriggerSaveToTextFile/createTriggerSaveToTextFile.js';
import createFillHoursFromTextFileTrigger from '../createFunctionalityTriggers/createTriggerFillHoursFromText/createTriggerFillHoursFromTextFile.js';

function createMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');  
  menu.style.position = 'relative';
  menu.style.color = '#fff';
  menu.style.height = VALUES_CSS['height_menuWhole'],
  menu.style.borderBottom = '1px solid gray';
  menu.style.backgroundColor = '#000';
  menu.style.display = 'flex';
  const title = createTitle();

  const fillHoursFromTextTrigger = createFillHoursFromTextFileTrigger();
  menu.appendChild(title);  
  document.getElementById('root').appendChild(menu);
  menu.appendChild(saveToTextFileTrigger);
  menu.appendChild(fillHoursFromTextTrigger);
  menu.appendChild(saveToExcelBtn);
}
export default createMenu;