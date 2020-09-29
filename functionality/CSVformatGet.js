function CSVformatGet() {
  function CSVGetRow() { return '\r\n'; }

  function CSVGetDayNamesRow() {
    function CSVGetDay(day) { return day + ','; }

    let days = '';
    VALUES_dayNames.forEach(function (day) {
      days += CSVGetDay(day);
    });
    return days;
  }

  function CSVGetMonthHours(month) {
    const weeks = month.getElementsByClassName('week');
    let monthHours = '';
    for (let i = 0; i < weeks.length; i++) {
      let weekHours = CSVGetWeekHours(weeks[i]);
      monthHours += weekHours;
      monthHours += CSVGetRow();
    }
    return monthHours;
  }

  function CSVGetWeekHours(week) {
    function getDayHours(day) { return day.getElementsByClassName('hour').length + ','; }
    function CSVGetWeekLabel(num) { return 'Week ' + num + ','; }

    let hours = '';
    hours += CSVGetWeekLabel(week.classList[1]);

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
      CSV += CSVGetRow();
      CSV += ',' + CSVGetDayNamesRow();
      CSV += CSVGetRow();
      CSV += CSVGetMonthHours(months[i]);
      CSV += CSVGetRow();
    }
    return CSV;
  }

  getFullCSV();
}

export default CSVformatGet;
