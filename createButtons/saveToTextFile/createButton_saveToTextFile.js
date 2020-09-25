import saveToTextFile from '../../functionality/saveToTextFile/saveToTextFile.js';
import { underLineGraphic, arrowGraphic, saveIcon } from '../../createResources/resources.js';
import container from './container.js'
import saveTextFileBtn from './saveToTextFileBtn.js'
import bottomText from './bottomText.js'
import styleSaveIcon from './styleSaveIcon.js'

function createButton_saveToTextFile() {
  styleSaveIcon(saveIcon);
  container.appendChild(saveTextFileBtn);
  container.appendChild(saveIcon);
  container.appendChild(bottomText);
  container.appendChild(underLineGraphic);
  container.appendChild(arrowGraphic);
  document.getElementById('menu').appendChild(container);
  container.onclick = saveToTextFile;
}

export default createButton_saveToTextFile;
