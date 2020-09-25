import VALUES_CSS from '../../VALUES/VALUES_CSS.js'

const saveToTextFileButton = document.createElement('input');
  saveToTextFileButton.style.position = 'absolute';
  saveToTextFileButton.style.top = VALUES_CSS['space_TopTo1stElement'];
  saveToTextFileButton.style.width = '6rem';
  saveToTextFileButton.style.left = '50%';
  saveToTextFileButton.style.marginLeft = 'calc(-25% - 0.75rem)';
  saveToTextFileButton.style.padding = '0.3rem 1rem';
  saveToTextFileButton.style.fontWeight = 'bold';
  saveToTextFileButton.style.fontSize = '0.9rem';
  saveToTextFileButton.style.border = '2px solid #fff';
  saveToTextFileButton.setAttribute('type', 'button');
  saveToTextFileButton.setAttribute('value', 'SAVE \nTEXT FILE');

  export default saveToTextFileButton;