import createMenu from './createMenu.js';
import createMonths from './createMonths.js';

function dominoAssembleCodeBlocks() {
  const menu = createMenu();
  createMonths();



  const DOMRoot = document.getElementById('root');
  DOMRoot.appendChild(menu);
  // DOMRoot.appendChild(month);
}

export default dominoAssembleCodeBlocks;

