import container from './container.js';
import dropTextFileLabel from './dropTextFileLabel.js';
import dropTextFileInput from './dropTextFileInput.js';
import bottomText from './bottomText.js';
import column from './column.js';
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from './icons.js';

function fillHoursFromTextBtn() {
    column.appendChild(dropTextFileInput);
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