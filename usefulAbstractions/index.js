index();
function index() {
  const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);
  const projectBarCopy = clone(projectBar);
  indexDOM(projectBarCopy, index);
  function indexDOM(arr, index) {
    for (let i = 0; i < arr.length; i++) {
      let entry = arr[i];
      if (typeof entry === 'object') {
        indexDOM(entry, index);
      } else {
        modifyDATA();
        function modifyDATA() {
          const accessIndex = arr.indexOf(entry);
          arr[accessIndex] = entry + ' ' + index;
        }
      }
    }
  }