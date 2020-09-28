import { createContainer } from './../../script.js';
import { createColumn } from './../../script.js';
import { createDropTextFileLabel } from './../../script.js';
import { createTriggerDropTextFileButton } from './../../script.js';
import { createBottomLabel } from './../../script.js';
import { arrowGraphic, chartIcon, fillIcon, underLineGraphic } from './../../script.js';

function createTriggerFillHoursFromTextFile() {
  const column = createColumn();
  const container = createContainer();
  const createTriggerDropTextFileButton = createTriggerDropTextFileButton();
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

  column.appendChild(createTriggerDropTextFileButton);
  column.appendChild(dropTextFileLabel);
  column.appendChild(fillIcon)
  column.appendChild(bottomLabel);
  column.appendChild(underLineGraphic);

  container.appendChild(column);
  container.appendChild(arrowGraphic);
  container.appendChild(chartIcon);

  return container;
}

export { createTriggerFillHoursFromTextFile };