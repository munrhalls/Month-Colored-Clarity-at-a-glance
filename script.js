window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  createWeek();
  createWeek();
  createWeek();
  createWeek();
});

function createWeek() {
  document.getElementById('root').style.display = "flex";
  // 0. CREATE DEEP WORK HOURS COLUMN TO THE LEFT
  var hours = document.createElement('div');
    hours.style.position = "relative";  
    hours.style.minWidth = "142px";
    hours.style.width = "100%"
    hours.style.color = "#000";
    hours.style.border = '1px solid gray'; 
    hours.style.display = 'inline-block';
    hours.style.height = '100vh'; 
    hours.style.backgroundColor = '#000';
    hours.style.textAlign = "center";

    var title = document.createElement('div');
    title.innerText = 'Deep work hours';
    title.style.position = "absolute";
    title.style.marginLeft = 'calc(-200% + 60px)';
    title.style.transform = 'rotate(-90deg)';
    title.style.color = "#000071";
    title.style.fontSize = '60px';
    title.style.width = '400%';
    title.style.top = 'calc(50% - 40px)';
    title.style.left = "0";

    hours.appendChild(title);

  document.getElementById('root').appendChild(hours);
  // 1. CREATE WEEK DIV
  var week = document.createElement('div');
    week.className = 'week';
    week.style.border = "60px solid #000"
    week.style.display = 'inline-block';
  document.getElementById('root').appendChild(week);
  // CREATE 


  // 2. CREATE DAYS DIVS
  var daysDATA = [
    {name: 'Monday', hours: 0},
    {name: 'Tuesday', hours: 0}, 
    {name: 'Wendesday', hours: 0},
    {name: 'Thursday', hours: 0},
    {name: 'Friday', hours: 0},
    {name: 'Saturday', hours: 0},
    {name: 'Sunday', hours: 0},
  ];
  //create: container divs -> corresponding divs: 1) day's title divs, 2) day's deep work hour ticks
  daysDATA.forEach(function(el){
    //day's column to add deep work hour ticks into
    var day = document.createElement('div');
      day.innerText = el['name'];
      //style
      day.style.width = "142px";
      day.style.textAlign = "center";
      day.style.border = '1px solid gray'; day.style.padding = '3px 30px'; 
    var dayContainer = document.createElement('div');
      dayContainer.appendChild(day);
      dayContainer.style.display = 'inline-block'; 
      week.appendChild(dayContainer);
    //3. APPEND ADD HOUR TICKS BUTTON TO EACH DAY
    var addBtn = document.createElement('input');
      addBtn.style.marginLeft = "auto";
      addBtn.style.backgroundColor = "#000";
      addBtn.style.color = "#000071";
      addBtn.style.border = "none";
      addBtn.style.fontWeight = "bold";
      addBtn.style.display = "inline-block";
      addBtn.style.height = "30px";
      addBtn.style.width = "100%";
      addBtn.style.maxWidth = "50%";
      addBtn.setAttribute('type', 'button');
      addBtn.setAttribute('value', '+');
      //4. COUNT HOURS WITH CLOSURE VAR
      var hourCountDATA = 0;
      // 5. (REPRESENT TICKS DATA) - CREATE HOURS TICKS ON BTN CLICK
      addBtn.onclick = (function(){
        hourCountDATA++;
        var parent = addBtn.parentNode;
        var svgDiv = document.createElement('div');
        svgDiv.className = "hour";
        svgDiv.style.backgroundColor = "#000071";
        svgDiv.style.padding = "7px 0";
        svgDiv.style.border = "1px solid darkblue";
        svgDiv.style.position = 'relative';
        //deep work hour count- visual representer
        var hourCount = document.createElement('div');
        hourCount.innerText = hourCountDATA;
        hourCount.style.color = "#000";
        hourCount.style.fontWeight = "bold";
        hourCount.style.fontSize = '1.25rem';
        hourCount.style.position = 'absolute';
        hourCount.style.left = '15px';
        svgDiv.appendChild(hourCount);
        // deep work hour count - visual representer
        var svg = document. createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.setAttribute("width", "100%");
          svg.setAttribute("height", "28");
          svg.setAttribute("width", "28");
          svg.setAttribute('display', 'block');
          svg.style.margin = "auto";
        var tick = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          tick.setAttributeNS(null, 'd', 'M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z   M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685  c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971  l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969  C156.146,65.765,156.146,74.362,150.862,79.646z');
          tick.style.scale = "0.14";
          tick.style.x = "50%";
          svg.appendChild(tick);
          svgDiv.appendChild(svg);
          parent.appendChild(svgDiv);
      });
      dayContainer.appendChild(addBtn);
      //6. APPEND SUBSTRACT HOURS BUTTON TO EACH DAY 
      var substractBtn = document.createElement('input');
        substractBtn.style.marginLeft = "auto";
        substractBtn.style.backgroundColor = "#000";
        substractBtn.style.border = "none";
        substractBtn.style.color = "#fff";
        substractBtn.style.fontWeight = "bold";
        substractBtn.style.display = "inline-block";
        substractBtn.style.height = "30px";
        substractBtn.style.width = "100%";
        substractBtn.style.maxWidth = "50%";
        substractBtn.setAttribute('type', 'button');
        substractBtn.setAttribute('value', '-');
      //7. (REPRESENT TICKS DATA) - SUBSTRACT HOURS TICKS ON BTN CLICK
      substractBtn.onclick = (function(){
        if (hourCountDATA > 0) {
          hourCountDATA--;
        }
        var parent = substractBtn.parentNode;
        if (parent.getElementsByClassName('hour').length) {
          parent.removeChild(parent.getElementsByClassName('hour')[parent.getElementsByClassName('hour').length - 1]);  
        }
      });
        dayContainer.appendChild(substractBtn);
  });
}
