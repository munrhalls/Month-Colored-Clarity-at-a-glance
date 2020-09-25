import fillHoursFromTextFile from '../../functionality/fillHoursFromTextFile/fillHoursFromTextFile.js'

const dropTextFileBtn = document.createElement('input');
  dropTextFileBtn.setAttribute('type', 'file');
  dropTextFileBtn.setAttribute('accept', 'text/plain');
  dropTextFileBtn.id = 'dropTextFileBtn';
  dropTextFileBtn.name = 'dropTextFileBtn';
  // style
  dropTextFileBtn.style.width = '0.1px';
  dropTextFileBtn.style.height = '0.1px';
  dropTextFileBtn.style.opacity = '0';
  dropTextFileBtn.style.overflow = 'hidden';
  dropTextFileBtn.style.position = 'absolute';
// append functionality
dropTextFileBtn.onchange = (function () {
  // manageHours
  fillHoursFromTextFile.call(this);
});
export default dropTextFileBtn;