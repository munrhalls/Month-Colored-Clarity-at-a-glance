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
  function createWeeksRow() {
    var weeks = getWeeks();
    var weeksRow = document.createElement('div');
    weeksRow.style.display = 'flex';
    weeks.forEach(function (week) {
      var weekRow = document.createElement('div');
      week.forEach(function (day) {
        var dayCol = createDayCol(day);
        weekRow.appendChild(dayCol);
      });
      weekRow.style.display = 'flex';
      weekRow.style.border = '1px solid #000000';
      weeksRow.appendChild(weekRow);
    });
    return weeksRow;
  }
  function createDayCol(day) {
    var dayCol = document.createElement('div');
    dayCol.style.display = 'flex';
    dayCol.style.flexDirection = 'column';

    var dayTitle = document.createElement('div');
    var dayHours = document.createElement('div');
    dayHours.style.flex = '10';
    dayTitle.innerText = day;

    var btnHourAdd = createBtnHourAdd();
    btnHourAdd.style.display = 'block';
    btnHourAdd.style.align = 'flex-end';

    btnHourAdd.style.width = '100%';
    btnHourAdd.style.maxWidth = '100%';
    btnHourAdd.style.padding = '0';
    btnHourAdd.style.marginTop = 'auto';
    var btnHourSubstract = createBtnHourSubstract();
    btnHourSubstract.style.display = 'block';
    btnHourSubstract.style.maxWidth = '100%';
    btnHourSubstract.style.padding = '0';
    btnHourSubstract.style.margin = '0';
    
    dayCol.style.border = '1px solid #000000';
    dayCol.appendChild(dayTitle);
    dayCol.appendChild(dayHours);
    dayCol.appendChild(btnHourAdd);
    dayCol.appendChild(btnHourSubstract);
    return dayCol;
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