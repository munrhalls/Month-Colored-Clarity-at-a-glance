import { saveToTextFile } from './../../script.js';
import { container } from './../../script.js';
import { saveTextToFileBtn } from './../../script.js';

import { bottomText } from './../../script.js';
import { styleSaveIcon } from './../../script.js';
import { underLineGraphic } from './../../script.js';

import { arrowGraphic } from './../../script.js';

import { saveIcon } from './../../script.js';


const saveToTextFileTrigger = container;
styleSaveIcon(saveIcon);
saveToTextFileTrigger.appendChild(saveIcon);
saveToTextFileTrigger.appendChild(bottomText);
saveToTextFileTrigger.appendChild(underLineGraphic);
saveToTextFileTrigger.appendChild(arrowGraphic);
saveToTextFileTrigger.appendChild(saveTextToFileBtn);
saveToTextFileTrigger.onclick = saveToTextFile;

export { saveToTextFileTrigger }
