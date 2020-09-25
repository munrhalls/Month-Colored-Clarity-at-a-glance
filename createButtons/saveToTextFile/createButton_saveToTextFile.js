import saveToTextFile from '../../functionality/saveToTextFile/saveToTextFile.js';
import container from './container.js'
import saveTextToFileBtn from './saveToTextFileBtn.js'
import bottomText from './bottomText.js'
import styleSaveIcon from './styleSaveIcon.js'
import { underLineGraphic, arrowGraphic, saveIcon } from '../../createResources/resources.js';

function createButton_saveToTextFile() {
  styleSaveIcon(saveIcon);
  container.appendChild(saveIcon);
  container.appendChild(bottomText);
  container.appendChild(underLineGraphic);
  container.appendChild(arrowGraphic);

  container.appendChild(saveTextToFileBtn);
  document.getElementById('menu').appendChild(container);
  container.onclick = saveToTextFile;
}

export default createButton_saveToTextFile;
