function substractHour(hourNum) {
  if (hourNum > 0) {
    hourNum--;
  }
  const day = btnHourSubstract.parentNode;
  deleteHourEl(day);
}

export default substractHour;;