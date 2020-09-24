function getTextFileString() {
  let file = this.files[0];
  console.log(this.files);
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    return reader.result;
    // manageHours
    // fillHoursFromText(hoursTextFile)
  };
};

export default getTextFileString;