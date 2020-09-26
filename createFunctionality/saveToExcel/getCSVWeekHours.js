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

export { getCSVWeekHours };