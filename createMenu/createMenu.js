import { VALUES_dayNames } from './script.js';
import { createTitle } from './script.js';
import { VALUES_CSS } from './script.js';
import { saveToExcelBtn } from './script.js';
import { saveToTextFileTrigger } from './script.js';
import { createTriggerSaveToTextFileContainer } from './script.js';

function createMenu() {
  console.log(VALUES_dayNames)
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  menu.style.position = 'relative';
  menu.style.color = '#fff';
  menu.style.height = VALUES_CSS['height_menuWhole'],
    menu.style.borderBottom = '1px solid gray';
  menu.style.backgroundColor = '#000';
  menu.style.display = 'flex';
  const title = createTitle();

  const fillHoursFromTextTrigger = createTriggerSaveToTextFileContainer();
  menu.appendChild(title);
  document.getElementById('root').appendChild(menu);
  menu.appendChild(saveToTextFileTrigger);
  menu.appendChild(fillHoursFromTextTrigger);
  menu.appendChild(saveToExcelBtn);
}
export { createMenu };