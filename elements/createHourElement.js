function createHourElement() {
  function appendNumberToSingleHour(num, hour) {
    let numEl = document.createElement('div');
    numEl.style.color = '#000';
    numEl.style.fontWeight = "bold";
    numEl.style.fontSize = '1.6rem';
    numEl.style.position = 'absolute';
    numEl.style.left = '15px';
    numEl.style.top = '0.1rem';
    numEl.innerText = num;
    hour.appendChild(numEl);
  }
  const tickGraphic = createTickGraphic();
  const hour = document.createElement('div');
  hour.className = "hour";
  hour.style.backgroundColor = "#000071";
  hour.style.padding = "7px 0";
  hour.style.border = "1px solid darkblue";
  hour.style.position = 'relative';
  hour.appendChild(tickGraphic);
  appendNumberToSingleHour();
  return hour;
};

export default createHourElement;