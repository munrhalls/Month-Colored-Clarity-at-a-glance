import { VALUES_dayNames } from "../../VALUES/VALUES.js";

function getCSVDayNamesRow() {
  function getCSVDay(day) { return day + ','; }

  const dayNames = VALUES_dayNames;
  let days = '';
  dayNames.forEach(function (day) {
    days += getCSVDay(day);
  });
  return days;
}

export default getCSVDayNamesRow