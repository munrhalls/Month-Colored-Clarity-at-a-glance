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
  function createDaysTable() {
    var days = getDays();
    var daysTable = document.createElement('div');
    days.forEach(function (day) {
      var div = document.createElement('div');
      div.innerText = day;
      daysTable.appendChild(div);
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