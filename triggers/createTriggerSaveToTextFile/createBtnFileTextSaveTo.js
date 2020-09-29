function createBottomText() {
  const bottomText = document.createElement('div');
  bottomText.innerText = 'TO KEEP HOURS DATA';
  bottomText.style.width = '100%';
  bottomText.style.position = 'absolute';
  bottomText.style.bottom = '0.6rem';
  //text
  bottomText.style.fontSize = '0.6rem';
  bottomText.style.fontWeight = 'lighter';
  bottomText.style.letterSpacing = '0.1rem';
  bottomText.style.textAlign = 'center';
  return bottomText;
}
function createContainer() {
  const container = document.createElement('div');
  container.style.position = 'relative';
  container.style.width = VALUES_CSS['width_menuSmallerBlock'];
  
  container.style.border = "none";
  container.style.borderLeft = '1px solid grey';
  container.style.borderRight = '1px solid grey';
  container.style.fontWeight = "bold";
  container.style.textAlign = 'left';
  container.style.color = "#fff";
  return container;
}
function createBtnFileTextSaveTo() {
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
  return createBtnFileTextSaveTo;
}
function createIconSave(iconSave) {
  iconSave.style.position = 'absolute';
  iconSave.style.bottom = '1.66rem';
  iconSave.style.left = '50%';
  iconSave.style.marginLeft = 'calc(-12.5% + 6px)'
  iconSave.style.fill = '#fff';
  return iconSave;
}
function assemble() {
  const saveToTextFileTrigger = container;
  createIconSave(iconSave);
  saveToTextFileTrigger.appendChild(iconSave);
  saveToTextFileTrigger.appendChild(bottomText);
  saveToTextFileTrigger.appendChild(underLineGraphic);
  saveToTextFileTrigger.appendChild(arrowGraphic);
  saveToTextFileTrigger.appendChild(saveTextToFileBtn);
  saveToTextFileTrigger.onclick = saveToTextFile;
}
