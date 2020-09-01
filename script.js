

window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  var week = document.createElement('div');
  week.className = 'week';
  week.innerText = 'Week';
  week.style.border = '1px solid grey';
  week.style.display = 'inline-block';
  document.getElementById('root').appendChild(week);
  


  // for (var i = 0; i < 100; i++) {
  //   var div = document.createElement('div');
  //   div.style.border = "1px solid white";
  //   div.style.margin = '15px';
  //   document.getElementById('root').appendChild(div);
  // }

});


