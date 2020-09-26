import { createTickGraphic } from './script.js';

function createHourElement() {
  const tickGraphic = createTickGraphic();
  const hour = document.createElement('div');
  hour.className = "hour";
  hour.style.backgroundColor = "#000071";
  hour.style.padding = "7px 0";
  hour.style.border = "1px solid darkblue";
  hour.style.position = 'relative';
  hour.appendChild(tickGraphic);
  return hour;
};

export { createHourElement };