import createContainer from './createContainer.js';
import createColumn from './createColumn.js';
import createDropTextFileLabel from './createDropTextFileLabel.js';
import createDropTextFileButton from './createDropTextFileButton.js';
import createBottomLabel from './createBottomLabel.js';
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from './icons.js';

function createTriggerFillHoursFromTextFile() {
  const column = createColumn();
  const container = createContainer();
  const dropTextFileButton = createDropTextFileButton();
  const dropTextFileLabel = createDropTextFileLabel();
  const bottomLabel = createBottomLabel();

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

export default createTriggerFillHoursFromTextFile;