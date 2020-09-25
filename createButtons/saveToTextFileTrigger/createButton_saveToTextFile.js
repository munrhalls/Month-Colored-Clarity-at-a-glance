import saveToTextFile from '../../createFunctionality/saveToTextFile/saveToTextFile.js';
import container from './container.js'
import saveTextToFileBtn from './saveToTextFileInput.js'
import bottomText from './bottomText.js'
import styleSaveIcon from './styleSaveIcon.js'
import { underLineGraphic, arrowGraphic, saveIcon } from '../../createResources/resources.js';

function saveToTextFileBtn() {
  styleSaveIcon(saveIcon);
  container.appendChild(saveIcon);
  container.appendChild(bottomText);
  container.appendChild(underLineGraphic);
  container.appendChild(arrowGraphic);

  container.appendChild(saveTextToFileBtn);
  document.getElementById('menu').appendChild(container);
  container.onclick = saveToTextFile;
}

export default saveToTextFileBtn;
