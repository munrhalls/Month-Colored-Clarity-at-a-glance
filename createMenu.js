import {resourceCreateArrowGraphic,
  resourceCreateChartIcon,
  resourceCreateFillIcon,
  resourceCreateSaveIcon, 
  resourceCreateUnderLineGraphic} from './createResourceFunctions.js';
import VALUES_CSS from './VALUES_CSS.js';
import createSaveToExcelBtn from './createButtons.js';

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
function createSaveTextFileBtn() {
  // components
    const SaveTextFileBtnContainer = (function createSaveTextFileBtnContainer() {
      const SaveTextFileBtnContainer = document.createElement('div');
        // aesthethics
        SaveTextFileBtnContainer.style.border = "none";
        SaveTextFileBtnContainer.style.borderLeft = '1px solid grey';
        SaveTextFileBtnContainer.style.borderRight = '1px solid grey';
        SaveTextFileBtnContainer.style.fontWeight = "bold";
        SaveTextFileBtnContainer.style.textAlign = 'left';
        SaveTextFileBtnContainer.style.color = "#fff";
        // display
        SaveTextFileBtnContainer.style.position = 'relative';
        SaveTextFileBtnContainer.style.width = VALUES_CSS['width_menuSmallerBlock'];

      return SaveTextFileBtnContainer;
    })();
  const SaveTextFileBtn = document.createElement('input');
    SaveTextFileBtn.style.position = 'absolute';
    SaveTextFileBtn.style.top = VALUES_CSS['space_TopTo1stElement'];
    SaveTextFileBtn.style.width = '6rem'; 
    SaveTextFileBtn.style.left = '50%';
    SaveTextFileBtn.style.marginLeft = 'calc(-25% - 0.75rem)';
    SaveTextFileBtn.style.padding = '0.3rem 1rem';
    SaveTextFileBtn.style.fontWeight = 'bold';
    SaveTextFileBtn.style.fontSize = '0.9rem';
    SaveTextFileBtn.style.border = '2px solid #fff';
    SaveTextFileBtn.setAttribute('type', 'button');
    SaveTextFileBtn.setAttribute('value', 'SAVE \nTEXT FILE');
  const underLineGraphic = resourceCreateUnderLineGraphic();
  const arrowGraphic = resourceCreateArrowGraphic();
  const saveHoursText = document.createElement('div');
    saveHoursText.innerText = 'TO KEEP HOURS DATA';
    saveHoursText.style.width = '100%';   
    saveHoursText.style.position = 'absolute';
    saveHoursText.style.bottom = '0.6rem';
    //text
    saveHoursText.style.fontSize = '0.6rem';   
    saveHoursText.style.fontWeight = 'lighter';
    saveHoursText.style.letterSpacing = '0.1rem';
    saveHoursText.style.textAlign = 'center';
  const saveIcon = resourceCreateSaveIcon();
    saveIcon.style.position = 'absolute';
    saveIcon.style.bottom = '1.66rem';
    saveIcon.style.left = '50%';
    saveIcon.style.marginLeft = 'calc(-12.5% + 6px)'
    saveIcon.style.fill = '#fff';
  //appends
  SaveTextFileBtnContainer.appendChild(SaveTextFileBtn);
  SaveTextFileBtnContainer.appendChild(saveIcon);
  SaveTextFileBtnContainer.appendChild(saveHoursText);
  SaveTextFileBtnContainer.appendChild(underLineGraphic);
  SaveTextFileBtnContainer.appendChild(arrowGraphic);
  document.getElementById('menu').appendChild(SaveTextFileBtnContainer);

  SaveTextFileBtnContainer.onclick = saveHoursAsTextFile;
}
function saveHoursAsTextFile() {
  // the only data it needs = hour ticks numbers 
  const hourNumsStr = getHoursPerDayNumsStr();
   console.log('REMEMBER TO ADD DEBOUNCER FUNC LATER');
   createTextFile('Metrics: Deep work hours. Per day, week, month.', hourNumsStr);
 }
function createTextFile(filename, data) {
  var blob = new Blob([data], {type: 'text'});
  if(window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
  }
  else {
      var elem = window.document.createElement('a');
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename + '.txt';        
      document.body.appendChild(elem);
      elem.click();        
      document.body.removeChild(elem);
  }
}
function getHoursPerDayNumsStr() {
  const days = document.getElementsByClassName('day');
  const hourNums = [];
  for (let i = 0; i < days.length; i++) {
    hourNums.push(days[i].getElementsByClassName('hour').length);
  }
  const hourNumsStr = hourNums.join(','); 
  return hourNumsStr;
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