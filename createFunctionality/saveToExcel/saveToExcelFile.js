import getCSV from "../../createFunctionality/saveToExcel/getCSV.js";

  function saveToExcelFile(fileName) {
    const CSV = getCSV();
    //Initialize file format: csv or xls
    const uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
    const link = document.createElement("a");    
    link.href = uri;
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  export default saveToExcelFile;