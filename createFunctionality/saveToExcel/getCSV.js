import { VALUES_monthNames, VALUES_dayNames} from "../../VALUES/VALUES.js";
import getCSVRow from './getCSVRow.js';
import getCSVDayNamesRow from "./getCSVDayNamesRow.js";
import getCSVMonthHours from "./getCSVMonthHours.js";

function getCSV() {
  var CSV = 'sep=,' + '\r\n\n';
  const months = document.getElementsByClassName('month');
  const monthNames = VALUES_monthNames;
  for (let i = 0; i < months.length & i < 12; i++) {
    CSV += monthNames[i];
    CSV += getCSVRow();
    CSV += ',' + getCSVDayNamesRow();
    CSV += getCSVRow();
    CSV += getCSVMonthHours(months[i]);
  }
  return CSV;
}
function getCSVWeekLabel(num) {
  return 'Week ' + num + ',';
}
function getCSVWeekHours(week) {
  var hours = '';
  hours += getCSVWeekLabel(week.classList[1]); 

  const days = week.getElementsByClassName('day');
  for (let i = 0; i < days.length; i++) {
    hours += getDayHours(days[i]);
  }
  return hours;
}
function getDayHours(day) {
  return day.getElementsByClassName('hour').length + ',';
}

function getCsvRow() {
  return '\r\n';
}

function getCSVWeekHours(week) {
  var hours = '';
  hours += getCSVWeekLabel(week.classList[1]); 

  const days = week.getElementsByClassName('day');
  for (let i = 0; i < days.length; i++) {
    hours += getDayHours(days[i]);
  }
  return hours;
}

function getCSVMonthHours(month) {
  const weeks = month.getElementsByClassName('week');
  var monthHours = '';
  for (let i = 0; i < weeks.length; i++) {
    var weekHours = getCSVWeekHours(weeks[i]);
    monthHours += weekHours;
    monthHours += getCsvRow();
  }
  return monthHours;
}

function getCSVDayNamesRow() {
  const dayNames = VALUES_dayNames;
  let days = '';
  dayNames.forEach(function (day) {
    days += getCSVDay(day);
  });
  return days;
}
function getCSVDay(day) {
  return day + ',';
 }



 function getCSVDayNamesRow() {
  const dayNames = VALUES_dayNames;
  let days = '';
  dayNames.forEach(function (day) {
    days += getCSVDay(day);
  });
  return days;
}



export default getCSV;