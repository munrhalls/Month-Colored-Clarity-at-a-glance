import createBtnHourAdd from './../triggers/createBtnHourAdd.js';
import createBtnHourSubstract from './../triggers/createBtnHourSubstract.js';

function createMonth() {
  // 01 [mon, tue, wen..]
  //data blocks
  function getMonthNum() {
    var date = new Date();
    return (date.getMonth())
  }
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).toLocaleString('en-GB', { weekday: 'short' }));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  function getWeeks() {
    var days = getDaysInMonth(getMonthNum(), 2020);
    var weeks = [];
    var week = [];
    days.forEach(function (day) {
      week.push(day);
      if (day === 'Sun') { 
        weeks.push(week);
        week = [];
      }
    });
    return weeks;
  }
  //element blocks
  function createWeeksRow() {
    var weeks = getWeeks();
    var weeksRow = document.createElement('div');
    weeks.forEach(function(week){
      var weekRow = document.createElement('div');
      week.forEach(function(day) {
        var dayCol = createDayCol(day);
        weekRow.appendChild(dayCol);
      });
      styleWeekRow(weekRow)
      weeksRow.appendChild(weekRow);
    });
    return weeksRow;
  }
  function createDayCol(day) {
    var dayCol = document.createElement('dayCol');
    dayCol.innerText = day;
    styleDayCol(dayCol);
    var btnHourAdd = createBtnHourAdd();
    var btnHourSubstract = createBtnHourSubstract();
    dayCol.appendChild(btnHourAdd);
    dayCol.appendChild(btnHourSubstract);
    return dayCol;
  }
  //style blocks
  function styleDayCol(dayCol) {
    dayCol.style.display = 'inline-block';
    dayCol.style.border = '1px solid #000000';
  }
  function styleWeekRow(weekRow) {
    weekRow.style.display = 'inline-block';
    weekRow.style.border = '1px solid #000000';
  }
  function assemble() {
    var weeksRow = createWeeksRow();
    console.log(weeksRow)
    return weeksRow;
  }
  const month = assemble();
  return month;
}

export default createMonth;