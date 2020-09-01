

window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  // 0. CREATE DEEP WORK HOURS COLUMN TO THE LEFT
  var hours = document.createElement('div');
  hours.className = 'hours'; 
  hours.innerText ='Hours'
  hours.style.color = "#fff";
  hours.style.border = '1px solid gray';   hours.style.padding = '3px 30px'; 
  hours.style.display = 'inline-block';
  hours.style.height = '100vh'; hours.style.backgroundColor = '#000';
  document.getElementById('root').appendChild(hours);
  // 1. CREATE WEEK DIV
  var week = document.createElement('div');
  week.className = 'week';
  week.style.display = 'inline-block';
  document.getElementById('root').appendChild(week);
  // 2. CREATE DAYS DIVS
  var daysDATA = [
    {name: 'Monday', hours: 3},
    {name: 'Tuesday', hours: 0}, 
    {name: 'Wendesday', hours: 0},
    {name: 'Thursday', hours: 0},
    {name: 'Friday', hours: 0},
    {name: 'Saturday', hours: 0},
    {name: 'Sunday', hours: 0},
  ];
  //create: container divs -> corresponding divs: 1) day's title divs, 2) day's deep work hour ticks
  daysDATA.forEach(function(el){
    //day div
    var day = document.createElement('div');
    day.innerText = el['name'];
    //style
    day.style.border = '1px solid gray'; day.style.padding = '3px 30px'; 
    var dayContainer = document.createElement('div');
    dayContainer.appendChild(day);
    dayContainer.style.display = 'inline-block'; 
    week.appendChild(dayContainer);
    //3. APPEND ADD HOUR TICKS BUTTON TO EACH DAY
    var button = document.createElement('button');
    button.style.width = "15px";
    button.style.height = '15px';
    button.onclick = (function(){
      var parent = button.parentNode;
      // 4. (REPRESENT TICKS DATA) - CREATE DIVS FOR HOUR TICKS 
      var svg = document. createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "28");
      svg.setAttribute('display', 'block');
      svg.style.marginTop = '7px';
      var tick = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      tick.setAttributeNS(null, 'cy', '50%');
      tick.setAttributeNS(null, 'cx', '50%');
      tick.setAttributeNS(null, 'r', '14');
      tick.setAttributeNS(null, 'fill', '#000');
      svg.appendChild(tick);

      parent.appendChild(svg);
    });
    
    dayContainer.appendChild(button);
  });
});


