import VALUES_CSS from '../VALUES/VALUES_CSS.js'
import { resourceCreateUnderLineGraphic, resourceCreateArrowGraphic, resourceCreateSaveIcon } from '../createResourceFunctions.js';
import saveToTextFile from './../createFunctionality/saveToTextFile.js';

function createContainer() {
  const container = document.createElement('div');
  // aesthethics
  container.style.border = "none";
  container.style.borderLeft = '1px solid grey';
  container.style.borderRight = '1px solid grey';
  container.style.fontWeight = "bold";
  container.style.textAlign = 'left';
  container.style.color = "#fff";
  // display
  container.style.position = 'relative';
  container.style.width = VALUES_CSS['width_menuSmallerBlock'];
  return container;
}
function createBtnRENAME() {
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
  return SaveTextFileBtn;
}
function createSaveHoursText() {
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
  return saveHoursText;
}
function styleSaveIcon(saveIcon) {
  saveIcon.style.position = 'absolute';
  saveIcon.style.bottom = '1.66rem';
  saveIcon.style.left = '50%';
  saveIcon.style.marginLeft = 'calc(-12.5% + 6px)'
  saveIcon.style.fill = '#fff';
  return saveIcon;
}
function createButton_saveToTextFile() {
    const container = createContainer();
    const SaveTextFileBtn = createBtnRENAME();
    const underLineGraphic = resourceCreateUnderLineGraphic();
    const arrowGraphic = resourceCreateArrowGraphic();
    const saveHoursText = createSaveHoursText();
    const saveIcon = resourceCreateSaveIcon();
    styleSaveIcon(saveIcon);
    container.appendChild(SaveTextFileBtn);
    container.appendChild(saveIcon);
    container.appendChild(saveHoursText);
    container.appendChild(underLineGraphic);
    container.appendChild(arrowGraphic);
    document.getElementById('menu').appendChild(container);
    container.onclick = saveToTextFile;
  }

  export default createButton_saveToTextFile;
