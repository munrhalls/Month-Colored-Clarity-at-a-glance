import title from './title.js';
import VALUES_CSS from '../VALUES/VALUES_CSS.js';
import saveToExcelBtn from '../createFunctionalityTriggers/createSaveToExcelTrigger/saveToExcelBtn.js';
import saveToTextFileTrigger from '../createFunctionalityTriggers/createSaveToTextFileTrigger/saveToTextFileTrigger.js';
import fillHoursFromTextTrigger from '../createFunctionalityTriggers/createFillHoursFromTextTrigger/fillHoursFromTextFileTrigger.js';

function createMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');  
  menu.style.position = 'relative';
  menu.style.color = '#fff';
  menu.style.height = VALUES_CSS['height_menuWhole'],
  menu.style.borderBottom = '1px solid gray';
  menu.style.backgroundColor = '#000';
  menu.style.display = 'flex';

  menu.appendChild(title);  
  document.getElementById('root').appendChild(menu);
  menu.appendChild(saveToTextFileTrigger);
  menu.appendChild(fillHoursFromTextTrigger);
  menu.appendChild(saveToExcelBtn);
}
export default createMenu;