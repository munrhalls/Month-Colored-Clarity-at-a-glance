function createBtnHourSubstract() {
  const btnHourSubstract = document.createElement('input');
  btnHourSubstract.style.marginLeft = "auto";
  btnHourSubstract.style.backgroundColor = "#000";
  btnHourSubstract.style.border = "none";
  btnHourSubstract.style.color = 'rgb(225, 116, 0)';
  btnHourSubstract.style.fontWeight = "bold";
  btnHourSubstract.style.display = "inline-block";
  btnHourSubstract.style.height = "30px";
  btnHourSubstract.style.width = "100%";
  btnHourSubstract.style.maxWidth = "50%";
  btnHourSubstract.setAttribute('type', 'button');
  btnHourSubstract.setAttribute('value', '-');
  return btnHourSubstract
}
export default createBtnHourSubstract;

