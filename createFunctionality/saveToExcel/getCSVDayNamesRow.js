import { VALUES_dayNames } from './script.js';

function getCSVDayNamesRow() {
  function getCSVDay(day) { return day + ','; }

  let days = '';
  VALUES_dayNames.forEach(function (day) {
    days += getCSVDay(day);
  });
  return days;
}

export { getCSVDayNamesRow };