import createGraphic from './../graphics/createGraphic.js';

function createHour() {
  function createHourEl() {
    var hour = document.createElement('div');
    hour.className = "hour";
    hour.style.backgroundColor = "#000071";
    hour.style.padding = "7px 0";
    hour.style.border = "1px solid darkblue";
    hour.style.position = 'relative';
    return hour;
  };
  
  const circledTick = createGraphic('circledTick');
  const hour = createHourEl();
  hour.appendChild(circledTick);
  return hour;
};

export default createHour;