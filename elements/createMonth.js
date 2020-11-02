function createMonth() {
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
  function styledaysRow(daysRow) {
    daysRow.style.display = 'inline-block';
  }
  function styleDayCol(dayCol) {
    dayCol.style.display = 'inline-block';
    dayCol.style.border = '1px solid #000000';
  }
  function createdaysRow() {
    var days = getDays();
    var daysRow = document.createElement('div');
    styledaysRow(daysRow);
    days.forEach(function (day) {
      var dayCol = document.createElement('dayCol');
      dayCol.innerText = day;
      styleDayCol(dayCol);
      daysRow.appendChild(dayCol);
    });
    return daysRow;
  }
  function assemble() {
    var daysRow = createdaysRow();
    return daysRow;
  }
  const month = assemble();
  return month;
}

export default createMonth;