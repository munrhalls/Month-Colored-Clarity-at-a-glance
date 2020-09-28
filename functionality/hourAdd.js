function addHour(hourNum) {
  hourNum++;
  const hour = createHourTick();
  appendNumToHour(hourNum, hour);
  const parent = addHourTrigger.parentNode;
  parent.appendChild(hour);
};

export default addHour;