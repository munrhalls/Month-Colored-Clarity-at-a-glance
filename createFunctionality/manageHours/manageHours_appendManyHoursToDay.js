function manageHours_appendManyHoursToDay(numberOfHours, day) {
  for (let j = 1; j <= numberOfHours; j++) {
    appendHour(j, day);
  }
}

export default manageHours_appendManyHoursToDay;
