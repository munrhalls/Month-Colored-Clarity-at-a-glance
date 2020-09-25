import VALUES_CSS from '../../VALUES/VALUES_CSS.js'

const saveToTextFile = document.createElement('input');
  saveToTextFile.style.position = 'absolute';
  saveToTextFile.style.top = VALUES_CSS['space_TopTo1stElement'];
  saveToTextFile.style.width = '6rem';
  saveToTextFile.style.left = '50%';
  saveToTextFile.style.marginLeft = 'calc(-25% - 0.75rem)';
  saveToTextFile.style.padding = '0.3rem 1rem';
  saveToTextFile.style.fontWeight = 'bold';
  saveToTextFile.style.fontSize = '0.9rem';
  saveToTextFile.style.border = '2px solid #fff';
  saveToTextFile.setAttribute('type', 'button');
  saveToTextFile.setAttribute('value', 'SAVE \nTEXT FILE');

  export default saveToTextFile;