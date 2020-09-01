

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
    {name: 'Monday', count: 0},
    {name: 'Tuesday', count: 0}, 
    {name: 'Wendesday', count: 0},
    {name: 'Thursday', count: 0},
    {name: 'Friday', count: 0},
    {name: 'Saturday', count: 0},
    {name: 'Sunday', count: 0},
  ];
    
  daysDATA.forEach(function(el){
    var day = document.createElement('div');
    day.innerText = el['name'];
    //style
    day.style.border = '1px solid gray'; day.style.padding = '3px 30px'; 
    day.style.display = 'inline-block'; 
    week.appendChild(day);
  });
  
  var hoursCount = 

  // 3. CREATE TICKS 

  // for (var i = 0; i < 100; i++) {
  //   var div = document.createElement('div');
  //   div.style.border = "1px solid white";
  //   div.style.margin = '15px';
  //   document.getElementById('root').appendChild(div);
  // }

});


