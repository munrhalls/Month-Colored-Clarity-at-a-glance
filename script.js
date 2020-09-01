
window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  
  for (var i = 0; i < 100; i++) {
    var div = document.createElement('div');
    div.style.border = "1px solid white";
    div.style.margin = '15px';
    document.getElementById('root').appendChild(div);
  }

});


