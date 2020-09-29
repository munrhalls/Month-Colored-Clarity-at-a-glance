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
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  menu.style.position = 'relative';
  menu.style.color = '#fff';
  menu.style.height = values_CSS['height_menuWhole'],
    menu.style.borderBottom = '1px solid gray';
  menu.style.backgroundColor = '#000';
  menu.style.display = 'flex';

  const title = createTitle();
  const btnFileTextFillHoursFromIt = createBtnFileTextFillHoursFromIt();
  const btnFileTextSaveTo = createBtnFileTextSaveTo();
  const btnFileExcelSaveTo = createBtnFileExcelSaveTo();

  menu.appendChild(title);
  document.getElementById('root').appendChild(menu);
  menu.appendChild(btnFileTextSaveTo);
  menu.appendChild(btnFileExcelSaveTo);
  menu.appendChild(btnFileTextFillHoursFromIt);
}
export default createMenu;