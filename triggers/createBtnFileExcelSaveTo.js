import { fileExcelSaveTo } from '../script.js';

// Feature - fill EXCEL file from work hours data
const btnFileExcelSaveTo = document.createElement('input');
btnFileExcelSaveTo.style.marginLeft = "auto";
btnFileExcelSaveTo.style.backgroundColor = "#000";
btnFileExcelSaveTo.style.color = "#fff";
btnFileExcelSaveTo.style.border = "none";
btnFileExcelSaveTo.style.fontWeight = "bold";
btnFileExcelSaveTo.style.height = "30px";
btnFileExcelSaveTo.setAttribute('type', 'button');
btnFileExcelSaveTo.setAttribute('value', 'Save to Excel');
btnFileExcelSaveTo.onclick = function () {
  fileExcelSaveTo('Metrics Deep Work Hours per Day/Week/Month');
}

export { btnFileExcelSaveTo };