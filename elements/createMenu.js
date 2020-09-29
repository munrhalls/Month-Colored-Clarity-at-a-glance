import { values_CSS } from './../values/values.js';
import createBtnFileTextFillHoursFromIt from './../triggers/createBtnFileTextFillHoursFromIt.js';
import createBtnFileTextSaveTo from './../triggers/createBtnFileTextSaveTo.js';
import createBtnFileExcelSaveTo from './../triggers/createBtnFileExcelSaveTo.js';

function createMenu() {
  function createTitle() {
    const title = document.createElement('div');
    title.innerText = 'Metrics - Deep Work hours';
    title.textAlign = 'center';
    title.style.display = 'flex';
    title.style.alignItems = 'center';
    title.style.padding = '0 3rem';
    title.style.fontWeight = 'bold';
    title.style.fontSize = '1.5rem'
    title.style.fontFamily = 'consolas';
    title.style.letterSpacing = '0.1rem';
    return title;
  }
  function createContainer() {
    const container = document.createElement('div');
    container.setAttribute('id', 'menu');
    container.style.position = 'relative';
    container.style.color = '#fff';
    container.style.height = values_CSS['height_menuWhole'],
    container.style.borderBottom = '1px solid gray';
    container.style.backgroundColor = '#000';
    container.style.display = 'flex';
    return container;
  }
  function assemble() {
    const title = createTitle();
    const btnFileTextFillHoursFromIt = createBtnFileTextFillHoursFromIt();
    const btnFileTextSaveTo = createBtnFileTextSaveTo();
    const btnFileExcelSaveTo = createBtnFileExcelSaveTo();
    const menu = createContainer();
  
    menu.appendChild(title);
    // 1) save to text file btn -> 2) drop text file btn -> 3) save to excel
    menu.appendChild(btnFileTextSaveTo);
    menu.appendChild(btnFileTextFillHoursFromIt);
    menu.appendChild(btnFileExcelSaveTo);
    return menu;
  }
  const menu = assemble();
  return menu;
}

export default createMenu;