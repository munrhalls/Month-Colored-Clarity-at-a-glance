

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
    //3. APPEND ADD HOUR TICK INPUT
    var button = document.createElement('button');
    button.style.width = "15px";
    button.style.height = '15px';
    button.onclick = (function(){
      console.log('xd')
    });
    
    dayContainer.appendChild(button);

  });
  // 4. (REPRESENT TICKS DATA) - CREATE DIVS FOR HOUR TICKS 
  for (var i = 0; i < daysDATA.length; i++) {
    var dayContainer = document.getElementById('root').getElementsByClassName('week')[0].children[i];
    var div = document.createElement('div'); 
    div.style.width = '15px';
    div.style.height = '15px';
    div.style.backgroundColor = '#000';
    dayContainer.appendChild(div);
  }
  // for (var i = 0; i < 100; i++) {
  //   var div = document.createElement('div');
  //   div.style.border = "1px solid white";
  //   div.style.margin = '15px';
  //   document.getElementById('root').appendChild(div);
  // }
});


