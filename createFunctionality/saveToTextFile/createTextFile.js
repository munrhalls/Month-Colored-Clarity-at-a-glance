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

export { createTextFile };