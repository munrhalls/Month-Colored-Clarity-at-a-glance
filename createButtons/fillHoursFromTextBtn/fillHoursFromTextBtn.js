import container from './container.js';
import dropTextFileLabel from './dropTextFileLabel.js';
import dropTextFileBtn from './dropTextFileBtn.js';
import bottomText from './bottomText.js';
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from './icons.js';

function fillHoursFromTextBtn() {
  const column = document.createElement('div');
    column.style.position = 'relative';
    column.style.height = '100%';
    column.appendChild(dropTextFileBtn);
    column.appendChild(dropTextFileLabel);
    column.appendChild(fillIcon)
    column.appendChild(bottomText);
    column.appendChild(underLineGraphic);
    container.appendChild(column);
    container.appendChild(arrowGraphic);
    container.appendChild(chartIcon);
  document.getElementById('menu').appendChild(container);
}

export default fillHoursFromTextBtn;