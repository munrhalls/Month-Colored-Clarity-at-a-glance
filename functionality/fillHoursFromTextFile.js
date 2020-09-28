function fillHoursFromTextFile() {
  function fillHoursFromString(string) {
    const days = document.getElementsByClassName('day');
    let hoursArr = string.split(',');
  
    for (let i = 0; i < days.length; i++) {
      clearAllHoursFromDay(days[i]);
      appendManyHoursToDay(hoursArr[i], days[i]);
    }
  }
  
  const file = this.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    const text = reader.result;
    fillHoursFromString(text);
  };
}

export default fillHoursFromTextFile;