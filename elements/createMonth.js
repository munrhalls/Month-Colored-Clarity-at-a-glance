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
  function styleDayCol(dayCol) {
    dayCol.classList.add('dayCol');
    dayCol.style.display = 'block';
    dayCol.style.flex = '1';
    dayCol.style.flexDirection = 'column';
    dayCol.style.height = '60vh';
    dayCol.style.border = '1px solid #000000';
  }
  function styleBtnHourAdd(btnHourAdd){
    btnHourAdd.style.display = 'block';
    btnHourAdd.style.align = 'flex-end';
    btnHourAdd.style.width = '100%';
    btnHourAdd.style.maxWidth = '100%';
    btnHourAdd.style.padding = '0';
    btnHourAdd.style.marginTop = 'auto';
  }
  function styleBtnHourSubstract(btnHourSubstract){
    btnHourSubstract.style.display = 'block';
    btnHourSubstract.style.align = 'flex-end';
    btnHourSubstract.style.width = '100%';
    btnHourSubstract.style.maxWidth = '100%';
    btnHourSubstract.style.padding = '0';
    btnHourSubstract.style.marginTop = 'auto';
  }
  function createDayCol(day, dayNum) {
    var dayCol = document.createElement('div');
    styleDayCol(dayCol);

    var dayTitle = document.createElement('div');
    dayTitle.innerText = day;

    var nthDay = document.createElement('div');
    nthDay.innerText = dayNum;

    var dayHours = document.createElement('div');
    dayHours.classList.add('hours');
    dayHours.style.flex = '10';

    var btnHourAdd = createBtnHourAdd();
    styleBtnHourAdd(btnHourAdd);
    var btnHourSubstract = createBtnHourSubstract();
    styleBtnHourSubstract(btnHourSubstract);

    dayCol.appendChild(dayTitle);
    dayCol.appendChild(nthDay);
    dayCol.appendChild(dayHours);
    dayCol.appendChild(btnHourAdd);
    dayCol.appendChild(btnHourSubstract);
    return dayCol;
  }
  function styleNthWeek(nthWeek) {
    nthWeek.style.display = 'block';
    nthWeek.style.border = '1px solid #000000';
    nthWeek.classList.add('week');
    nthWeek.style.maxWidth = '40%';
  }
  function createNthWeek(week) {
    var nthWeek = document.createElement('div');

    var dayNum = 1;
    week.forEach(function (day) {
      var dayCol = createDayCol(day, dayNum);
      nthWeek.appendChild(dayCol);
      dayNum++;
    });
    styleNthWeek(nthWeek);
    return nthWeek;
  }
  function createWeeksRow() {
    var weeks = getWeeks();
    var weeksRow = document.createElement('div');
    weeks.forEach(function (week) {
      var weekRow = createNthWeek(week);
      weeksRow.appendChild(weekRow);
    });
    return weeksRow;
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