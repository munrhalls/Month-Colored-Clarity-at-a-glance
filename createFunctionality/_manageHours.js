function manageHours() {
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

  function clearAllHoursFromDay(day) {
    for (let r = day.getElementsByClassName('hour').length - 1; r >= 0; r--) {
      day.getElementsByClassName('hour')[r].remove();
    }
  }
}

export default manageHours;

