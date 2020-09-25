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
  function getCSVWeekLabel(num) {
    return 'Week ' + num + ',';
  }
  function getCSVWeekHours(week) {
    var hours = '';
    hours += getCSVWeekLabel(week.classList[1]); 
  
    const days = week.getElementsByClassName('day');
    for (let i = 0; i < days.length; i++) {
      hours += getDayHours(days[i]);
    }
    return hours;
  }
  function getDayHours(day) {
    return day.getElementsByClassName('hour').length + ',';
  }

  export default saveToExcelFile;