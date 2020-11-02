function createMonths() {
  // 01 [mon, tue, wen..]
  function getDaysInMonth(month, year) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date).toLocaleString('en-GB', { weekday: 'short' }));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }
  function getMonthNum() {
    var date = new Date();
    return (date.getMonth())
  }
  function getDays() {
    return getDaysInMonth(getMonthNum(), 2020);
  }
  function styleDaysTable(daysTable) {
    daysTable.style.display = 'inline-block';
  }
  function styleDayCol(dayCol) {
    dayCol.style.display = 'inline-block';
  }
  function createDaysTable() {
    var days = getDays();
    var daysTable = document.createElement('div');
    styleDaysTable(daysTable);
    days.forEach(function (day) {
      var dayCol = document.createElement('dayCol');
      dayCol.innerText = day;
      styleDayCol(dayCol);
      daysTable.appendChild(dayCol);
    });
    return daysTable;
  }
  function assemble() {
    var daysTable = createDaysTable();
    return daysTable;
  }
  const month = assemble();
  return month;
}

export default createMonths;