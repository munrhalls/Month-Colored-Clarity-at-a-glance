import container from './container.js';
import column from './column.js';
import dropTextFileLabel from './dropTextFileLabel.js';
import dropTextFileInput from './dropTextFileInput.js';
import bottomText from './bottomText.js';
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from './icons.js';

const fillHoursFromTextFileTrigger = container; 

column.appendChild(dropTextFileInput);
column.appendChild(dropTextFileLabel);
column.appendChild(fillIcon)
column.appendChild(bottomText);
column.appendChild(underLineGraphic);
fillHoursFromTextFileTrigger.appendChild(column);
fillHoursFromTextFileTrigger.appendChild(arrowGraphic);
fillHoursFromTextFileTrigger.appendChild(chartIcon);

export default fillHoursFromTextFileTrigger;