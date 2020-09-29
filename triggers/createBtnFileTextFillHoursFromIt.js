import textFileFillHours from '../functionality/textFileFillHours.js';
import { VALUES_CSS } from '../script.js';

function createBtnFillHoursFromTextFile() {
  // CONTAINER - BOX with graphics, styling, descriptor around the btn
  function createBottomLabel() {
    const bottomLabel = document.createElement('div');
    bottomLabel.innerText = 'TO FILL HOURS DATA';
    bottomLabel.style.width = '100%';
    bottomLabel.style.position = 'absolute';
    bottomLabel.style.bottom = '0.6rem';

    bottomLabel.style.fontSize = '0.6rem';
    bottomLabel.style.fontWeight = 'lighter';
    bottomLabel.style.letterSpacing = '0.1rem';
    bottomLabel.style.textAlign = 'center';
    return bottomLabel;
  }
  function createColumn() {
    const column = document.createElement('div');
    column.style.position = 'relative';
    column.style.height = '100%';
    return column;
  }
  function createContainer() {
    const container = document.createElement('div');
    container.style.height = "100%";
    container.style.width = "18rem";
    container.style.position = 'relative';

    container.style.color = "#fff";
    container.style.borderRight = '1px solid grey';
    container.style.fontWeight = "bold";
    return container;
  }
  // BUTTON - DROP TEXT FILE
  function createDropTextFileLabel() {
    const dropTextFileLabel = document.createElement('label');
    dropTextFileLabel.setAttribute('for', 'dropTextFileInput');
    dropTextFileLabel.innerText = 'DROP \nTEXT FILE';

    dropTextFileLabel.style.padding = '0.3rem 1rem';
    dropTextFileLabel.style.border = '2px solid #fff';
    dropTextFileLabel.style.textAlign = 'center';
    dropTextFileLabel.style.position = 'absolute';
    dropTextFileLabel.style.left = '1.5rem';
    dropTextFileLabel.style.fontWeight = 'bold';
    dropTextFileLabel.style.fontSize = '0.9rem';
    dropTextFileLabel.style.top = VALUES_CSS['space_TopTo1stElement'];
    return dropTextFileLabel
  }
  function createDropTextFileBtn() {
    const dropTextFileButton = document.createElement('input');
    dropTextFileButton.setAttribute('type', 'file');
    dropTextFileButton.setAttribute('accept', 'text/plain');
    dropTextFileButton.id = 'dropTextFileButton';
    dropTextFileButton.name = 'dropTextFileButton';

    dropTextFileButton.style.width = '0.1px';
    dropTextFileButton.style.height = '0.1px';
    dropTextFileButton.style.opacity = '0';
    dropTextFileButton.style.overflow = 'hidden';
    dropTextFileButton.style.position = 'absolute';
    dropTextFileButton.onchange = (function () {
      fillHoursFromTextFile.call(this);
    });
    return dropTextFileButton;
  }
  function assemble() {
    const column = createColumn();
    const container = createContainer();
    const dropTextFileButton = createDropTextFileBtn();
    const dropTextFileLabel = createDropTextFileLabel();
    const bottomLabel = createBottomLabel();
    arrowGraphic.style.bottom = '1.5rem';
    arrowGraphic.style.left = '9rem';

    chartIcon.style.fill = '#fff';
    chartIcon.style.position = 'absolute';
    chartIcon.style.top = '0.75rem';
    chartIcon.style.right = '1.5rem';
    chartIcon.style.height = '6rem';
    chartIcon.style.width = '6rem';

    fillIcon.style.position = 'absolute';
    fillIcon.style.top = '4.46rem';
    fillIcon.style.left = '6.1rem';
    fillIcon.style.fill = '#fff';
    fillIcon.style.height = '2.75rem';
    fillIcon.style.width = '2.75rem';
    fillIcon.style.transform = 'scale(-1,1) rotate(-12deg)';

    column.appendChild(dropTextFileButton);
    column.appendChild(dropTextFileLabel);
    column.appendChild(fillIcon)
    column.appendChild(bottomLabel);
    column.appendChild(underLineGraphic);

    container.appendChild(column);
    container.appendChild(arrowGraphic);
    container.appendChild(chartIcon);

    return container;
  }
  const btnFillHoursFromTextFile = assemble();
  return btnFillHoursFromTextFile;
}

export default createBtnFillHoursFromTextFile;