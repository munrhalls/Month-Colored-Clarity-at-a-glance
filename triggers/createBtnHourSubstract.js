import './../functionality/_manageHours.js';

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

  btnHourSubstract.onclick = function(e) {
    var parentNode = e.target.parentNode;
    var hoursContainer = parentNode.getElementsByClassName('hours')[0]
    if (hoursContainer.getElementsByClassName('hour').length > 0) {
      var hour = hoursContainer.getElementsByClassName('hour')[hoursContainer.getElementsByClassName('hour').length - 1];
      hoursContainer.removeChild(hour);
    }
  }
  return btnHourSubstract
}
export default createBtnHourSubstract;

