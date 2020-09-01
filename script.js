

window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  // WEEK
  var week = document.createElement('div');
  week.className = 'week'; week.innerText = 'Week'; week.style.border = '1px solid grey'; week.style.display = 'inline-block';
  document.getElementById('root').appendChild(week);
  // DAYS
  var daysDATA = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  daysDATA.forEach(function(el){
    var day = document.createElement('div');
    day.innerText = el;
    week.appendChild(day);
  })
  


  // for (var i = 0; i < 100; i++) {
  //   var div = document.createElement('div');
  //   div.style.border = "1px solid white";
  //   div.style.margin = '15px';
  //   document.getElementById('root').appendChild(div);
  // }

});


