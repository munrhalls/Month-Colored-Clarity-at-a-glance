import saveToExcelFile from "../../functionality/saveToExcel/saveToExcelFile.js";

// Feature - fill EXCEL file from work hours data
const saveToExcelBtn = document.createElement('input');
  saveToExcelBtn.style.marginLeft = "auto";
  saveToExcelBtn.style.backgroundColor = "#000";
  saveToExcelBtn.style.color = "#fff";
  saveToExcelBtn.style.border = "none";
  saveToExcelBtn.style.fontWeight = "bold";
  saveToExcelBtn.style.height = "30px";
  saveToExcelBtn.setAttribute('type', 'button');
  saveToExcelBtn.setAttribute('value', 'Save to Excel');
  saveToExcelBtn.onclick = function () {
    saveToExcelFile('Metrics Deep Work Hours per Day/Week/Month');
  }

export default saveToExcelBtn;