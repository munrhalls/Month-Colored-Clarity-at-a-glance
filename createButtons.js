// feature - fill EXCEL file from work hours data
function exportSaveToExcelBtn() {
  function createSaveToExcelBtn() {
    var saveToExcelBtn = document.createElement('input');
      saveToExcelBtn.style.marginLeft = "auto";
      saveToExcelBtn.style.backgroundColor = "#000";
      saveToExcelBtn.style.color = "#fff";
      saveToExcelBtn.style.border = "none";
      saveToExcelBtn.style.fontWeight = "bold";
      saveToExcelBtn.style.height = "30px";
      saveToExcelBtn.setAttribute('type', 'button');
      saveToExcelBtn.setAttribute('value', 'Save to Excel');
      saveToExcelBtn.onclick = function() {
        saveToExcelFile('Metrics Deep Work Hours per Day/Week/Month');
      }
      return saveToExcelBtn;
  }
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
  function getCSV() {
    var CSV = 'sep=,' + '\r\n\n';
    const months = document.getElementsByClassName('month');
    const monthNames = getMonthNames();
    for (let i = 0; i < months.length & i < 12; i++) {
      CSV += monthNames[i];
      CSV += getCsvRow();
      CSV += ',' + getCSVDayNamesRow();
      CSV += getCsvRow();
      CSV += getCSVMonthHours(months[i]);
    }
    return CSV;
  }
  function getCSVMonthHours(month) {
    const weeks = month.getElementsByClassName('week');
    var monthHours = '';
    for (let i = 0; i < weeks.length; i++) {
      var weekHours = getCSVWeekHours(weeks[i]);
      monthHours += weekHours;
      monthHours += getCsvRow();
    }
    return monthHours;
  }
  function getCSVDayNamesRow() {
    const daysDATA = dataGetDays();
    let days = '';
    daysDATA.forEach(function(day) {
      days += getCSVDay(day);
    });
    return days;
  }
  function getCSVDay(day) {
   return day + ',';
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
  function getCsvRow() {
    return '\r\n';
  }
  const saveToExcelBtn = createSaveToExcelBtn();
  return saveToExcelBtn;
}
export default exportSaveToExcelBtn;