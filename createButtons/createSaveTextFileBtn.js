import VALUES_CSS from './../VALUES/VALUES_CSS.js'
import {resourceCreateUnderLineGraphic, resourceCreateArrowGraphic, resourceCreateSaveIcon} from './../createResourceFunctions.js';

function createSaveTextFileBtn(){
  function createSaveTextFileBtn() {
    // components
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
  const saveTextFileBtn = createSaveTextFileBtn();
  return saveTextFileBtn;
}

export default createSaveTextFileBtn;
