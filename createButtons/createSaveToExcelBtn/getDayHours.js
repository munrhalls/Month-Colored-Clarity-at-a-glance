function getDayHours(day) {
  return day.getElementsByClassName('hour').length + ',';
}

export default getDayHours;