function carouselify(HTMLCollection, arrDistanceTop, arrDistanceLeft, arrSize) {
  let length = HTMLCollection.length;
  console.log(length);
  for (let i = 0; i < length; i++) {
    let childEl = HTMLCollection[i];
    console.log(childEl);
    childEl.style.position = 'relative';
    childEl.style.display = 'none';
    // add event sensors
    let sensorsContainer = document.createElement('div');
    sensorsContainer.style.position = 'absolute';
    sensorsContainer.style.top = arrDistanceTop;
    sensorsContainer.style.left = arrDistanceLeft;
    sensorsContainer.style.display = 'flex';
    // created an arrow of its own! (can re-use later);
    let arrowLength = arrSize;
    let borderBottom = (arrowLength / 1.25) / arrowLength;
    let borderTop = (arrowLength / 1.25) / arrowLength;
    let arrowLengthToRem = arrowLength + 'rem';
    let borderBottomToRem = borderBottom + 'rem';
    let borderTopToRem = borderTop + 'rem';
    let sensorsContainerWidth = arrowLength * 2.5;
    let sensorsContainerWidthToRem = sensorsContainerWidth + 'rem';
    sensorsContainer.style.width = sensorsContainerWidthToRem;
    sensorsContainer.style.justifyContent = 'space-between';
    if (i !== 0) {
      let arrowSensorL = document.createElement('div');
      arrowSensorL.style.height = '5px';
      arrowSensorL.style.width = '5px';
      arrowSensorL.style.border = arrowLengthToRem + ' solid black';
      arrowSensorL.style.borderLeft = '0 solid black';
      arrowSensorL.style.borderBottom = borderBottomToRem + ' solid white';
      // 4/12 0,3333
      arrowSensorL.style.borderTop = borderTopToRem + ' solid white';
      // 1/12 0,0833
      arrowSensorL.onclick = function (e) {
        childEl.style.display = 'none';
        let index = i - 1;
        let prevEl = HTMLCollection[index];
        prevEl.style.display = 'block';
        console.log(prevEl);
      }
      sensorsContainer.appendChild(arrowSensorL);
    }

    let arrowSensorR = document.createElement('div');
    arrowSensorR.style.height = '5px';
    arrowSensorR.style.width = '5px';
    arrowSensorR.style.border = arrowLengthToRem + ' solid black';
    arrowSensorR.style.borderRight = '0 solid black';
    arrowSensorR.style.borderBottom = borderBottomToRem + ' solid white';
    // 4/12 0,3333
    arrowSensorR.style.borderTop = borderTopToRem + ' solid white';
    if (i + 1 < length) {
      arrowSensorR.onclick = function (e) {
        childEl.style.display = 'none';
        let index = i + 1;
        let nextEl = HTMLCollection[index];
        nextEl.style.display = 'block';
        console.log(nextEl);
      }
    } else {
      arrowSensorR.style.display = 'none';
    }
    sensorsContainer.appendChild(arrowSensorR);
    childEl.appendChild(sensorsContainer);

    // on left n - 1`
    // on right n + 1
    // set current to hidden
    // set new to visible
  }
  HTMLCollection[0].style.display = 'block';
}
// carouselify(hourLog.children, '0.5rem', '7rem', 3);