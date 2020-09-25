import VALUES_CSS from './VALUES/VALUES_CSS.js';
import saveToExcelBtn from './createButtons/createSaveToExcelBtn/saveToExcelBtn.js';
import createButton_saveToTextFile from './createButtons/createButton_saveToTextFile.js';
import createButton_FillHoursFromText from './createButtons/fillHoursFromTextBtn/fillHoursFromTextBtn.js';

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
  menu.appendChild(title);  
  document.getElementById('root').appendChild(menu);
  createButton_saveToTextFile();
  createButton_FillHoursFromText();
  menu.appendChild(saveToExcelBtn);
}
export default createMenu;