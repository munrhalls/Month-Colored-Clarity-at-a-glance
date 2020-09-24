function manageHours_appendSingleHourToDay(numberOfTheHour, day) {
  const hour = createHourTick();
  appendNumToHour(numberOfTheHour, hour);
  day.appendChild(hour);
}

export default manageHours_appendSingleHourToDay;