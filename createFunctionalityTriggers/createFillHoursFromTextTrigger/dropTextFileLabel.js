import VALUES_CSS from '../../VALUES/VALUES_CSS.js';

const dropTextFileLabel = document.createElement('label');
  dropTextFileLabel.setAttribute('for', 'dropTextFileInput');
  dropTextFileLabel.innerText = 'DROP \nTEXT FILE';
  dropTextFileLabel.style.padding = '0.3rem 1rem';
  dropTextFileLabel.style.border = '2px solid #fff';
  dropTextFileLabel.style.textAlign = 'center';
  dropTextFileLabel.style.position = 'absolute';
  dropTextFileLabel.style.left = '1.5rem';
  dropTextFileLabel.style.fontWeight = 'bold';
  dropTextFileLabel.style.fontSize = '0.9rem';
  dropTextFileLabel.style.top = VALUES_CSS['space_TopTo1stElement'];

export default dropTextFileLabel;