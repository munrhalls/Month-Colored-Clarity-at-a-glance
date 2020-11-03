// navigational principle - everything required in a code block is lexically *before* the code block
import createMenu from './createMenu.js';
import createMonth from './createMonth.js';

function dominoAssembleCodeBlocks() {
  const menu = createMenu();
  const month = createMonth();

  const DOMRoot = document.getElementById('root');
  DOMRoot.appendChild(menu);
  // DOMRoot.appendChild(month);
}

export default dominoAssembleCodeBlocks;

