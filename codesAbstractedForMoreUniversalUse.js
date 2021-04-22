// this guy enables a circle that expands from the cursor location upon dragging, for area selection and marking purposes  
// select area with mouse drag
const root = document.getElementById('root');
root.style.minHeight = '100vh';
root.style.userSelect = 'none';
root.markingHoursEvent = false;
root.style.position = 'relative';
root.addEventListener('mousedown', function (e) {
  root.markingHoursEvent = true;
  console.log('create div');
  let markerEl = document.createElement('div');
  markerEl.id = 'markerEl';
  markerEl.style.height = '1px';
  markerEl.style.width = '1px';
  markerEl.style.border = '1px solid #000000';
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
    console.log('re-draw div');
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
    console.log('check if an hourtick is inside coordinates (math, < than)');
    console.log('pre-mark hour ticks inside');
    console.log('erase mark or set mark, depending on confirmation');
  }
});
root.addEventListener('mouseup', function (e) {
  root.markingHoursEvent = false;
  let markerEl = document.getElementById('markerEl');
  markerEl.remove();
  console.log('delete div');
});