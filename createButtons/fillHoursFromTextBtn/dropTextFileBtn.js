import fillHoursFromText from './../../createFunctionality/manageHours/fillHoursFromText.js'
import getTextFileString from './../../createFunctionality/getTextFileString.js'

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
// 
dropTextFileBtn.onchange = (function () {
  const hoursTextFile = getTextFileString();
  fillHoursFromText(hoursTextFile)
});
export default dropTextFileBtn;