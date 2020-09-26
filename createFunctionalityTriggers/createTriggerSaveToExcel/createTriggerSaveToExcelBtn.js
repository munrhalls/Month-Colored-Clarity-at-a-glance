import { saveToExcelFile } from './../../script.js';

// Feature - fill EXCEL file from work hours data
const saveToExcelTrigger = document.createElement('input');
saveToExcelTrigger.style.marginLeft = "auto";
saveToExcelTrigger.style.backgroundColor = "#000";
saveToExcelTrigger.style.color = "#fff";
saveToExcelTrigger.style.border = "none";
saveToExcelTrigger.style.fontWeight = "bold";
saveToExcelTrigger.style.height = "30px";
saveToExcelTrigger.setAttribute('type', 'button');
saveToExcelTrigger.setAttribute('value', 'Save to Excel');
saveToExcelTrigger.onclick = function () {
  saveToExcelFile('Metrics Deep Work Hours per Day/Week/Month');
}

export { saveToExcelTrigger };