import fileTextSaveTo from './../functionality/fileTextSaveTo.js';
import createGraphic from './../graphics/createGraphic.js';
import createIcon from './../graphics/createIcon.js';
import values_CSS from './../values/values.js';


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
  function createBtnFileTextSaveTo() {
    const btnFileTextSaveTo = document.createElement('input');
    btnFileTextSaveTo.style.position = 'absolute';
    btnFileTextSaveTo.style.top = values_CSS['space_TopTo1stElement'];
    btnFileTextSaveTo.style.width = '6rem';
    btnFileTextSaveTo.style.left = '50%';
    btnFileTextSaveTo.style.marginLeft = 'calc(-25% - 0.75rem)';
    btnFileTextSaveTo.style.padding = '0.3rem 1rem';
    btnFileTextSaveTo.style.fontWeight = 'bold';
    btnFileTextSaveTo.style.fontSize = '0.9rem';
    btnFileTextSaveTo.style.border = '2px solid #fff';
    btnFileTextSaveTo.setAttribute('type', 'button');
    btnFileTextSaveTo.setAttribute('value', 'SAVE \nTEXT FILE');
    return btnFileTextSaveTo;
  }
  function createIconSave() {
    const iconSave = createIcon();
    iconSave.style.position = 'absolute';
    iconSave.style.bottom = '1.66rem';
    iconSave.style.left = '50%';
    iconSave.style.marginLeft = 'calc(-12.5% + 6px)'
    iconSave.style.fill = '#fff';
    return iconSave;
  }
  function assemble() {
    const container = createContainer();
    const bottomText = createBottomText();
    const underLineGraphic = createGraphic();
    const arrowGraphic = createGraphic();
    const btnFileTextSaveTo = createBtnFileTextSaveTo();
    createIconSave();

    container.appendChild(iconSave);
    container.appendChild(bottomText);
    container.appendChild(underLineGraphic);
    container.appendChild(arrowGraphic);
    container.appendChild(btnFileTextSaveTo);
    container.onclick = fileTextSaveTo;
  }
  const btnFileTextSaveTo = assemble();
  return btnFileTextSaveTo;
}

export default createBtnFileTextSaveTo;