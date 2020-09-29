import './../functionality/hourAdd.js';

function createBtnHourAdd() {
  const btnHourAdd = document.createElement('input');
  btnHourAdd.style.marginLeft = "auto";
  btnHourAdd.style.backgroundColor = "#000";
  btnHourAdd.style.color = "#000071";
  btnHourAdd.style.border = "none";
  btnHourAdd.style.fontWeight = "bold";
  btnHourAdd.style.display = "inline-block";
  btnHourAdd.style.height = "30px";
  btnHourAdd.style.width = "100%";
  btnHourAdd.style.maxWidth = "50%";
  btnHourAdd.setAttribute('type', 'button');
  btnHourAdd.setAttribute('value', '+');
  return btnHourAdd;
}


export default createBtnHourAdd;