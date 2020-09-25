function createBottomLabel() {
  const bottomLabel = document.createElement('div');
  //display
  bottomLabel.innerText = 'TO FILL HOURS DATA';
  bottomLabel.style.width = '100%';
  bottomLabel.style.position = 'absolute';
  bottomLabel.style.bottom = '0.6rem';
  //style
  bottomLabel.style.fontSize = '0.6rem';
  bottomLabel.style.fontWeight = 'lighter';
  bottomLabel.style.letterSpacing = '0.1rem';
  bottomLabel.style.textAlign = 'center';
  return bottomLabel;
}

export default createBottomLabel;