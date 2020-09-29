function _manageHours() {
  function hourAdd(hourNum) {
    hourNum++;
    const hour = createHourTick();
    appendNumToHour(hourNum, hour);
    const parent = btnHourAdd.parentNode;
    parent.appendChild(hour);
  };
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

  function clearAllHoursFromDay(day) {
    for (let r = day.getElementsByClassName('hour').length - 1; r >= 0; r--) {
      day.getElementsByClassName('hour')[r].remove();
    }
  }
}

export default _manageHours;

