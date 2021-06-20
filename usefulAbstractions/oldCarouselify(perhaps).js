
    // function createCalendar() {
    //   let calendar = document.createElement('div');
    //   calendar.style.display = 'flex';
    //   calendar.style.flex = '1';
    //   calendar.style.height = '45vh';
    //   calendar.style.width = '100%';
    //   return calendar;
    // }
    // let calendar = createCalendar();
    // let et
    // let year = createContainerYear();
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
        arrowSensorR.style.cursor = 'pointer';
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
    carouselify(year.children, '0.5rem', '7rem', 3);
    let containeryear = document.createElement('div');
    containeryear.id = 'containeryear';
    containeryear.style.display = 'flex';
    containeryear.style.flex = '1';
    containeryear.appendChild(year);
    calendar.appendChild(containeryear);
    calendar.appendChild(calendar);
    ///// CONTAINER Calendar CONCLUDE


    timeVisuals.appendChild(containerResultblocks);
    timeVisuals.appendChild(calendar);
    // main.appendChild(timeVisuals);
    //// CONTAINER VISUALS CONCLUDE
    //// CONTAINER MENU
    let containerMenu = document.createElement('div');
    containerMenu.id = 'containerMenu';
    let menu = createMenu();
    containerMenu.appendChild(menu);
    // main.appendChild(containerMenu);
    return main;
    //// CONTAINER MENU CONCLUDE
  }
  /// CONTAINER BOTTOMBAR
  let bottomBar = document.createElement('div');
  let copyrightNote = createCopyrightNote();
  let copyrightNote2 = createCopyrightNote2();
  bottomBar.appendChild(copyrightNote);
  bottomBar.appendChild(copyrightNote2);
  root.appendChild(bottomBar);
  /// CONTAINER BOTTOMBAR CONCLUDE

  // select area with mouse drag
  // (idk what's the Big O of that, so it's prolly rly expensive)
  root.style.minHeight = '100vh';
  root.style.userSelect = 'none';
  root.markingHoursEvent = false;
  root.style.position = 'relative';
  root.addEventListener('mousedown', function (e) {
    root.markingHoursEvent = true;
    // console.log('create div');
    let markerEl = document.createElement('div');
    markerEl.id = 'markerEl';
    markerEl.onclick = function (e) {
      // console.log(e)
    }

    markerEl.style.height = '1px';
    markerEl.style.width = '1px';
    markerEl.style.border = '1px solid #000000';
    // markerEl.style.borderRadius = '50%';
    // let colors = ['blue', 'green', 'purple', 'grey', 'orange', 'yellow', 'red'];
    let rndNum = Math.floor(Math.random() * (Math.floor(7) - Math.ceil(0)) + Math.ceil(0));
    let projectColor = colors[rndNum];
    markerEl.style.background = projectColor;
    markerEl.projectColor = projectColor;
    markerEl.style.opacity = '70%';
    markerEl.style.position = 'absolute';
    let y = e.pageY.toString() + 'px';
    let x = e.pageX.toString() + 'px';
    markerEl.style.top = y;
    markerEl.style.left = x;
    markerEl.y = y;
    markerEl.x = x;
    root.appendChild(markerEl)
  });
  root.addEventListener('mousemove', function (e) {
    if (root.markingHoursEvent) {
      // console.log('re-draw div');
      let markerEl = document.getElementById('markerEl');
      let prevCursorY = parseInt((markerEl.y).split('px')[0]);
      let prevCursorX = parseInt((markerEl.x).split('px')[0]);
      let heightUpdateY = Math.abs(e.pageY - prevCursorY) + 'px';
      let heightUpdateX = Math.abs(e.pageX - prevCursorX) + 'px';
      markerEl.style.height = heightUpdateY;
      markerEl.style.width = heightUpdateX;
      if (e.pageY - parseInt((markerEl.y).split('px')[0]) < 0) {
        markerEl.style.top = e.pageY + 'px';
      }
      if (e.pageX - parseInt((markerEl.x).split('px')[0]) < 0) {
        markerEl.style.left = e.pageX + 'px';
      }
      // console.log('check if an hourtick is inside coordinates (math, < than)');
      // console.log('pre-mark hour ticks inside');
      // console.log('erase mark or set mark, depending on confirmation');
    }
    // Dispatch the event.
  });
  root.addEventListener('mouseup', function (e) {
    root.markingHoursEvent = false;
    let markerEl = document.getElementById('markerEl');
    let hourEls = document.getElementsByClassName('hourEl');
    if (hourEls && hourEls.length) {
      const event = new Event('requestCoords', {
        bubbles: false,
      });
      event.markerEl = markerEl;
      for (let i = 0; i < hourEls.length; i++) {
        hourEls[i].dispatchEvent(event);
      }
    }
    // Event listeners - ctrl f 'requestCoords'
    console.log('mouse drag select');
    markerEl.remove();
  });
});