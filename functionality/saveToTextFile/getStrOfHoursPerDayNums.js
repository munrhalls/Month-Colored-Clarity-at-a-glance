function getStrOfHoursPerDayNums() {
  const days = document.getElementsByClassName('day');
  const hourNums = [];
  for (let i = 0; i < days.length; i++) {
    hourNums.push(days[i].getElementsByClassName('hour').length);
  }
  const hourNumsStr = hourNums.join(',');
  return hourNumsStr;
}

export default getStrOfHoursPerDayNums;