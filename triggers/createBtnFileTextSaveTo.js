import fileTextSaveTo from './../functionality/fileTextSaveTo.js';
import createGraphic from './../graphics/createGraphic.js';
import createIcon from './../graphics/createIcon.js';
import { values_CSS } from './../values/values.js';

function createBtnFileTextSaveTo() {
  function createBottomText() {
    const bottomText = document.createElement('div');
    bottomText.innerText = 'TO KEEP HOURS DATA';
    bottomText.style.width = '100%';
    bottomText.style.position = 'absolute';
    bottomText.style.bottom = '0.6rem';
    //text
    bottomText.style.fontSize = '0.6rem';
    bottomText.style.fontWeight = 'lighter';
    bottomText.style.letterSpacing = '0.1rem';
    bottomText.style.textAlign = 'center';
    return bottomText;
  }
  function createContainer() {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = values_CSS['width_menuSmallerBlock'];

    container.style.border = "none";
    container.style.borderLeft = '1px solid grey';
    container.style.borderRight = '1px solid grey';
    container.style.fontWeight = "bold";
    container.style.textAlign = 'left';
    container.style.color = "#fff";
    return container;
  }
  function createBtn() {
    const button = document.createElement('input');
    button.style.position = 'absolute';
    button.style.top = values_CSS['space_TopTo1stElement'];
    button.style.width = '6rem';
    button.style.left = '50%';
    button.style.marginLeft = 'calc(-25% - 0.75rem)';
    button.style.padding = '0.3rem 1rem';
    button.style.fontWeight = 'bold';
    button.style.fontSize = '0.9rem';
    button.style.border = '2px solid #fff';
    button.setAttribute('type', 'button');
    button.setAttribute('value', 'SAVE \nTEXT FILE');
    return button;
  }
  function createIconSave() {
    const iconSave = createIcon('save');
    iconSave.style.position = 'absolute';
    iconSave.style.bottom = '1.66rem';
    iconSave.style.left = '50%';
    iconSave.style.marginLeft = 'calc(-12.5% + 6px)'
    iconSave.style.fill = '#fff';
    return iconSave;
  }
  function assemble() {
    const bottomText = createBottomText();
    const underline = createGraphic('underline');
    const arrow = createGraphic('arrow');
    const button = createBtn();
    const iconSave = createIconSave();
    const container = createContainer();

    container.appendChild(iconSave);
    container.appendChild(bottomText);
    container.appendChild(underline);
    container.appendChild(arrow);
    container.appendChild(button);
    container.onclick = fileTextSaveTo;
    return container;
  }
  const btnFileTextSaveTo = assemble();
  return btnFileTextSaveTo;
}

export default createBtnFileTextSaveTo;