var count = 0;
function setup_findElementUp(elem, name) {
  return (elem.parentElement.className == name && count < 12) ?
    (function () {
      count = 0;
      return elem.parentElement;
    })() :
    (function () {
      count++;
      return setup_findElementUp(elem.parentElement, name);
    })();
}

