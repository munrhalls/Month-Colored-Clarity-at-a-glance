import {resourceCreateArrowGraphic,
  resourceCreateChartIcon,
  resourceCreateFillIcon,
  resourceCreateSaveIcon, 
  resourceCreateUnderLineGraphic} from './createResourceFunctions.js';
import VALUES_CSS from './VALUES_CSS.js';
import createSaveToExcelBtn from './createButtons/createSaveToExcelBtn.js';
import createSaveTextFileBtn from './createButtons/createSaveTextFileBtn.js';

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
function createFillDataBtn() {
  const fillDataBtnContainer = (function createFillDataContainer() {
    const fillDataBtnContainer = document.createElement('div');
      // aesthethics
      fillDataBtnContainer.style.color = "#fff";
      // fillDataBtnContainer.style.textAlign = 'left';
      fillDataBtnContainer.style.borderRight = '1px solid grey';
      fillDataBtnContainer.style.fontWeight = "bold";
      // display
      fillDataBtnContainer.style.height = "100%";
      fillDataBtnContainer.style.width = "18rem";
      fillDataBtnContainer.style.position = 'relative';
    return fillDataBtnContainer;
  })();

const dropTextFileBtn = document.createElement('input');
  dropTextFileBtn.setAttribute('type', 'file');
  dropTextFileBtn.setAttribute('accept', 'text/plain');
  dropTextFileBtn.id = 'dropTextFileBtn';
  dropTextFileBtn.name = 'dropTextFileBtn';
  
  dropTextFileBtn.onchange = (function() {
    let file = this.files[0];
    console.log(this.files);
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
      const hoursTextFile = reader.result;
      fillHoursData(hoursTextFile)
    };
  });

  dropTextFileBtn.style.width = '0.1px';
	dropTextFileBtn.style.height = '0.1px';
	dropTextFileBtn.style.opacity = '0';
	dropTextFileBtn.style.overflow = 'hidden';
  dropTextFileBtn.style.position = 'absolute';

const labelDropTextFileBtn = document.createElement('label');
  labelDropTextFileBtn.setAttribute('for', 'dropTextFileBtn');
  labelDropTextFileBtn.innerText = 'DROP \nTEXT FILE';
  labelDropTextFileBtn.style.padding = '0.3rem 1rem'; 
  labelDropTextFileBtn.style.border = '2px solid #fff';
  labelDropTextFileBtn.style.textAlign = 'center';
  labelDropTextFileBtn.style.position = 'absolute';
  labelDropTextFileBtn.style.left = '1.5rem';
  labelDropTextFileBtn.style.fontWeight = 'bold';
  labelDropTextFileBtn.style.fontSize = '0.9rem';
  labelDropTextFileBtn.style.top = VALUES_CSS['space_TopTo1stElement'];

const fillHoursText = document.createElement('div');
    //display
    fillHoursText.innerText = 'TO FILL HOURS DATA';
    fillHoursText.style.width = '100%';   
    fillHoursText.style.position = 'absolute';
    fillHoursText.style.bottom = '0.6rem';
    //text
    fillHoursText.style.fontSize = '0.6rem';   
    fillHoursText.style.fontWeight = 'lighter';
    fillHoursText.style.letterSpacing = '0.1rem';
    fillHoursText.style.textAlign = 'center';
const arrowGraphic = resourceCreateArrowGraphic();
  arrowGraphic.style.bottom = '1.5rem';
  arrowGraphic.style.left = '9rem';
const chartIcon = resourceCreateChartIcon();
  chartIcon.style.fill = '#fff';
  chartIcon.style.position = 'absolute';
  chartIcon.style.top = '0.75rem';
  chartIcon.style.right = '1.5rem';
  chartIcon.style.height = '6rem';
  chartIcon.style.width = '6rem';
const fillIcon = resourceCreateFillIcon();
  fillIcon.style.position = 'absolute';
  fillIcon.style.top = '4.46rem';
  fillIcon.style.left = '6.1rem';
  fillIcon.style.fill = '#fff';
  fillIcon.style.height = '2.75rem';
  fillIcon.style.width = '2.75rem';
  fillIcon.style.transform = 'scale(-1,1) rotate(-12deg)';

const underLineGraphic = resourceCreateUnderLineGraphic();
const column1 = document.createElement('div');
  column1.style.position = 'relative';
  column1.style.height = '100%';

column1.appendChild(dropTextFileBtn);
column1.appendChild(labelDropTextFileBtn);
column1.appendChild(fillIcon)
column1.appendChild(fillHoursText);
column1.appendChild(underLineGraphic);

fillDataBtnContainer.appendChild(column1);
fillDataBtnContainer.appendChild(arrowGraphic);
fillDataBtnContainer.appendChild(chartIcon);
document.getElementById('menu').appendChild(fillDataBtnContainer);
} 
export default createMenu;