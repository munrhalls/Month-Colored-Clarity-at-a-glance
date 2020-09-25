function saveToTextFile() {
  // the only data it needs = hour ticks numbers 
  const hourNumsStr = getHoursPerDayNumsStr();
  console.log('Debouncer, add. Reminder.');
  createTextFile('Metrics: Deep work hours. Per day, week, month.', hourNumsStr);
}
function createTextFile(filename, data) {
  var blob = new Blob([data], { type: 'text' });
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveBlob(blob, filename);
  }
  else {
    var elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename + '.txt';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  }
}
function getHoursPerDayNumsStr() {
  const days = document.getElementsByClassName('day');
  const hourNums = [];
  for (let i = 0; i < days.length; i++) {
    hourNums.push(days[i].getElementsByClassName('hour').length);
  }
  const hourNumsStr = hourNums.join(',');
  return hourNumsStr;
}

export { saveToTextFile, createTextFile, getHoursPerDayNumsStr }