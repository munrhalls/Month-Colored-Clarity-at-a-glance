

window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  var svg = document.getElementsByTagName('svg')[0];
  svg.setAttribute('height', 300)
  var element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  element.setAttribute('cy', '100');
  element.setAttribute('cx', '100');
  element.setAttribute('r', '100');
  svg.appendChild(element);

  // for (var i = 0; i < 100; i++) {
  //   var div = document.createElement('div');
  //   div.style.border = "1px solid white";
  //   div.style.margin = '15px';
  //   document.getElementById('root').appendChild(div);
  // }

});


