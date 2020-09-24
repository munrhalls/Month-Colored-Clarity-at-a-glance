function manageHours_appendHour(individualHourNum, day) {
  const hour = createHourTick();
  appendNumToHour(individualHourNum, hour);
  day.appendChild(hour);
}

export default manageHours_appendHour;