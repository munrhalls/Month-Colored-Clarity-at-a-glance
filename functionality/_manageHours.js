const manageHours_ = {
  hourAdd: function hourAdd(hourNum) {
    hourNum++;
    const hour = createHourTick();
    appendNumToHour(hourNum, hour);
    const parent = btnHourAdd.parentNode;
    parent.appendChild(hour);
  },
  hourSubstract: function hourSubstract(hourNum) {
    if (hourNum > 0) {
      hourNum--;
    }
    const day = btnHourSubstract.parentNode;
    deleteElementHour(day);
  },
  deleteElementHour: function deleteElementHour(day) {
    if (day.getElementsByClassName('hour').length) {
      day.removeChild(day.getElementsByClassName('hour')[day.getElementsByClassName('hour').length - 1]);
    }
  },
  appendManyHoursToDay: function appendManyHoursToDay(numberOfHours, day) {
    for (let j = 1; j <= numberOfHours; j++) {
      appendSingleHourToDay(j, day);
    }
  },
  clearAllHoursFromDay: function clearAllHoursFromDay(day) {
    for (let r = day.getElementsByClassName('hour').length - 1; r >= 0; r--) {
      day.getElementsByClassName('hour')[r].remove();
    }
  }
}

export default manageHours_;

