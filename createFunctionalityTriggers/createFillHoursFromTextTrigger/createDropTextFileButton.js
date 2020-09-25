import fillHoursFromTextFile from '../../createFunctionality/fillHoursFromTextFile/fillHoursFromTextFile.js'

function createDropTextFileButton() {
  const dropTextFileButton = document.createElement('input');
  dropTextFileButton.setAttribute('type', 'file');
  dropTextFileButton.setAttribute('accept', 'text/plain');
  dropTextFileButton.id = 'dropTextFileButton';
  dropTextFileButton.name = 'dropTextFileButton';
  // style
  dropTextFileButton.style.width = '0.1px';
  dropTextFileButton.style.height = '0.1px';
  dropTextFileButton.style.opacity = '0';
  dropTextFileButton.style.overflow = 'hidden';
  dropTextFileButton.style.position = 'absolute';
// append functionality
dropTextFileButton.onchange = (function () {
  // manageHours
  fillHoursFromTextFile.call(this);
});
  return dropTextFileButton;
}

export default createDropTextFileButton;