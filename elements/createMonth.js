import createBtnHourAdd from './../triggers/createBtnHourAdd.js';
import createBtnHourSubstract from './../triggers/createBtnHourSubstract.js';

function createMonth() {
  // 01 [mon, tue, wen..]
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
  function createWeeksRow() {
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
    console.log(weeks)
  }
  function styleDayCol(dayCol) {
    dayCol.style.display = 'inline-block';
    dayCol.style.border = '1px solid #000000';
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
  function assemble() {
    var weeksRow = createWeeksRow();
    return weeksRow;
  }
  const month = assemble();
  return month;
}

export default createMonth;