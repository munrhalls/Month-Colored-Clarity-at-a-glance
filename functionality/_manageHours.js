import createHour from './../elements/createHour.js';
function manageHours_(funcName) {
  function hourAdd() {
    const hour = createHour();
  }
  function hourSubstract(hourNum) {
    if (hourNum > 0) {
      hourNum--;
    }
    const day = btnHourSubstract.parentNode;
    deleteElementHour(day);
  }
  function deleteElementHour(day) {
    if (day.getElementsByClassName('hour').length) {
      day.removeChild(day.getElementsByClassName('hour')[day.getElementsByClassName('hour').length - 1]);
    }
  }
  function appendManyHoursToDay(numberOfHours, day) {
    for (let j = 1; j <= numberOfHours; j++) {
      appendSingleHourToDay(j, day);
    }
  }
  function clearAllHoursFromDay(day) {
    for (let r = day.getElementsByClassName('hour').length - 1; r >= 0; r--) {
      day.getElementsByClassName('hour')[r].remove();
    }
  }
  const functions = {
    hourAdd: hourAdd,
    hourSubstract: hourSubstract,
    deleteElementHour: deleteElementHour,
    appendManyHoursToDay: appendManyHoursToDay,
    clearAllHoursFromDay: clearAllHoursFromDay
  }
  var func = functions[funcName]();
  return func;
}

export default manageHours_;

