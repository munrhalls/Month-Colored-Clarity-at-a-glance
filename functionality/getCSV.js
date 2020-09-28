function getCSV() {
  function getCsvRow() { return '\r\n'; }

  function getCSVDayNamesRow() {
    function getCSVDay(day) { return day + ','; }

    let days = '';
    VALUES_dayNames.forEach(function (day) {
      days += getCSVDay(day);
    });
    return days;
  }

  function getCSVMonthHours(month) {
    const weeks = month.getElementsByClassName('week');
    let monthHours = '';
    for (let i = 0; i < weeks.length; i++) {
      let weekHours = getCSVWeekHours(weeks[i]);
      monthHours += weekHours;
      monthHours += getCsvRow();
    }
    return monthHours;
  }

  function getCSVWeekHours(week) {
    function getDayHours(day) { return day.getElementsByClassName('hour').length + ','; }
    function getCSVWeekLabel(num) { return 'Week ' + num + ','; }

    let hours = '';
    hours += getCSVWeekLabel(week.classList[1]);

    const days = week.getElementsByClassName('day');
    for (let i = 0; i < days.length; i++) {
      hours += getDayHours(days[i]);
    }
    return hours;
  }

  function getFullCSV() {
    var CSV = 'sep=,' + '\r\n\n';
    const months = document.getElementsByClassName('month');
    const monthNames = VALUES_monthNames;
    for (let i = 0; i < months.length & i < 12; i++) {
      CSV += monthNames[i];
      CSV += getCsvRow();
      CSV += ',' + getCSVDayNamesRow();
      CSV += getCsvRow();
      CSV += getCSVMonthHours(months[i]);
      CSV += getCsvRow();
    }
    return CSV;
  }

  getFullCSV();
}

export default getCSV;
