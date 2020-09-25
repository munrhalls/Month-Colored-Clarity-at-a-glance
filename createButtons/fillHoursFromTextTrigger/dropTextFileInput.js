import fillHoursFromTextFile from '../../createFunctionality/fillHoursFromTextFile/fillHoursFromTextFile.js'

const dropTextFileInput = document.createElement('input');
  dropTextFileInput.setAttribute('type', 'file');
  dropTextFileInput.setAttribute('accept', 'text/plain');
  dropTextFileInput.id = 'dropTextFileInput';
  dropTextFileInput.name = 'dropTextFileInput';
  // style
  dropTextFileInput.style.width = '0.1px';
  dropTextFileInput.style.height = '0.1px';
  dropTextFileInput.style.opacity = '0';
  dropTextFileInput.style.overflow = 'hidden';
  dropTextFileInput.style.position = 'absolute';
// append functionality
dropTextFileInput.onchange = (function () {
  // manageHours
  fillHoursFromTextFile.call(this);
});
export default dropTextFileInput;