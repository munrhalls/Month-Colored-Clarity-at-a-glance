import saveToTextFile from '../../createFunctionality/saveToTextFile/saveToTextFile.js';
import container from './container.js'
import saveTextToFileBtn from './saveToTextFileButton.js'
import bottomText from './bottomText.js'
import styleSaveIcon from './styleSaveIcon.js'
import { underLineGraphic, arrowGraphic, saveIcon } from '../../createResources/resources.js';

const saveToTextFileTrigger = container;
  styleSaveIcon(saveIcon);
  saveToTextFileTrigger.appendChild(saveIcon);
  saveToTextFileTrigger.appendChild(bottomText);
  saveToTextFileTrigger.appendChild(underLineGraphic);
  saveToTextFileTrigger.appendChild(arrowGraphic);
  saveToTextFileTrigger.appendChild(saveTextToFileBtn);
  saveToTextFileTrigger.onclick = saveToTextFile;

export default saveToTextFileTrigger;
