import createMenu from './createMenu.js';

function assembleCodeBlocks() {
  const menu = createMenu();
  for (var i = 0; i < 12; i++) {
    // createMonth(i);
  }
  // createCopyrightNote();
  // createCopyrightNote2();
  const DOMRoot = document.getElementById('root');
  DOMRoot.appendChild(menu);
}

export default assembleCodeBlocks;

