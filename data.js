// I N T E R A C T I V E S
const localStorage = window.localStorage;
var monthShown = "July";

// // DATA VALUES
const level2ZIndex = "1000";
const menuTitleSize = 1.25;
const menuTitleMargin = 3;
const _letterSpacing = 0.25;
const menuBgColor = "#000000";
const borderRadius = "5%";
const commonHeight = 8;
const commonWidth = 5;
const heightTopbar = "3.5rem";
const paddingTitle = "0.25rem";
const heightVisuals =
  "calc(100vh - " +
  (parseFloat(heightTopbar) / 2 + parseFloat(paddingTitle)) +
  "rem)";
const containerheightCalendar =
  "calc(50vh - " +
  (parseFloat(heightTopbar) / 2 + parseFloat(paddingTitle)) +
  "rem)";
const rightcommonWidth = "18rem";
const colors = [
  "#0006E1",
  "#31B303",
  "#CA008C",
  "#808080",
  "#FFA500",
  "#CCB726",
  "#790604",
];
const resultCardOpacity = "0.81";
const resultCardAddBtn = "8rem";
const heightCalendar = containerheightCalendar;
const calendarMonthChoiceFontSize = "1.5rem";
const calendarMonthChoiceHeight = "2.5rem";

const date = new Date();
const year = date.getFullYear();
const DATA_Calendar = [];
const months = [];
const weeks = [];
const days = [];

function setDATA_Calendar() {
  for (let i = 1; i <= 12; i++) {
    const month = new Date(year, i, 0);
    const monthDATA = new Array();
    const daysInMonth = month.getDate();
    monthDATA.code = month.toLocaleString("en-EN", { month: "long" });
    monthDATA.daysNum = daysInMonth;

    let strDaysByComma = "";
    let strDayNums = "";
    for (let j = 1; j <= daysInMonth; j++) {
      const day = new Date(year, i - 1, j);
      const dayNum = day.getDate();
      const dayName = day.toLocaleDateString("en-EN", { weekday: "long" });
      strDaysByComma += dayName === "Sunday" ? dayName + "," : dayName + " ";
      strDayNums += dayNum + " ";
    }
    const strWeeks = strDaysByComma.split(",");
    strWeeks.pop();
    let count = 1;
    strWeeks.forEach(function (strWeek) {
      const week = strWeek.split(" ");
      week.code = "Week " + count;
      monthDATA.push(week);
      count++;
    });
    DATA_Calendar.push(monthDATA);
  }
}
function setDATA_monthsWeeksDays() {
  for (let i = 0; i < DATA_Calendar.length; i++) {
    const month = DATA_Calendar[i];
    const name = month.code;
    months.push(name);
    for (let j = 0; j < month.length; j++) {
      const week = month[j];
      week.code = month.code + "-Week-" + (j + 1);
      weeks.push(week);
      for (let y = 0; y < week.length; y++) {
        const day = week[y];
        const dayObj = {};
        dayObj.code = week.code + " Day-" + (y + 1);
        dayObj.name = day;
        days.push(dayObj);
      }
    }
  }
}

setDATA_Calendar();
setDATA_monthsWeeksDays();
