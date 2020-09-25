import { VALUES_dayNames } from "../../VALUES/VALUES.js";

function getCSVDayNamesRow() {
  function getCSVDay(day) { return day + ','; }

  let days = '';
  VALUES_dayNames.forEach(function (day) {
    days += getCSVDay(day);
  });
  return days;
}

export default getCSVDayNamesRow