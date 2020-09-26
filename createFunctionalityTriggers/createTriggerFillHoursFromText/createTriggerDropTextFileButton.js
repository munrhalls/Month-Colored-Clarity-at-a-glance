import fillHoursFromTextFile from './script.js';

function createTriggerDropTextFileButton() {
  const dropTextFileButton = document.createElement('input');
  dropTextFileButton.setAttribute('type', 'file');
  dropTextFileButton.setAttribute('accept', 'text/plain');
  dropTextFileButton.id = 'dropTextFileButton';
  dropTextFileButton.name = 'dropTextFileButton';

  dropTextFileButton.style.width = '0.1px';
  dropTextFileButton.style.height = '0.1px';
  dropTextFileButton.style.opacity = '0';
  dropTextFileButton.style.overflow = 'hidden';
  dropTextFileButton.style.position = 'absolute';
  dropTextFileButton.onchange = (function () {
    fillHoursFromTextFile.call(this);
  });
  return dropTextFileButton;
}

export default createTriggerDropTextFileButton;