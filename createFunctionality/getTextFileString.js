function getTextFileString() {
  let file = this.files[0];
  console.log(this.files);
  let reader = new FileReader();
  reader.readAsText(file);

  reader.onload = function () {
    console.log(reader.result)
    return reader.result;
  };
};

export default getTextFileString;