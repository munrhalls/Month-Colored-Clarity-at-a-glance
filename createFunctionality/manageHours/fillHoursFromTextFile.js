import fillHoursFromText from './fillHoursFromString.js';

function fillHoursFromTextFile() {
  const file = this.files[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    const text = reader.result;
    fillHoursFromText(text);
  };
}

export default fillHoursFromTextFile;