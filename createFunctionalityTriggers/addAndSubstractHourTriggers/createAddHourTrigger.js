function createAddHourTrigger() {
const addHourTrigger = document.createElement('input');
  addHourTrigger.style.marginLeft = "auto";
  addHourTrigger.style.backgroundColor = "#000";
  addHourTrigger.style.color = "#000071";
  addHourTrigger.style.border = "none";
  addHourTrigger.style.fontWeight = "bold";
  addHourTrigger.style.display = "inline-block";
  addHourTrigger.style.height = "30px";
  addHourTrigger.style.width = "100%";
  addHourTrigger.style.maxWidth = "50%";
  addHourTrigger.setAttribute('type', 'button');
  addHourTrigger.setAttribute('value', '+');
  return addHourTrigger;
}


export default createAddHourTrigger;