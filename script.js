window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
  for (var i = 0; i < 12; i++) {
    createMonth(i);
  }
});
function createWeeksContainer(monthNum) {
  var weeksContainer = document.createElement('div');
  weeksContainer.className = 'weeksContainer';
  //WEEKS CONTAINER STYLEC
  weeksContainer.style.display = 'flex';
  weeksContainer.style.flex = '12';
  weeksContainer.style.overflow = 'auto';
  weeksContainer.style.whiteSpace = 'nowrap';
  document.getElementsByClassName('monthContainer')[monthNum].appendChild(weeksContainer);
}
function createSidewaysTitle(sidewaysTitle, monthNum) {
  // 0. CREATE DEEP WORK HOURS COLUMN TO THE LEFT
  var hours = document.createElement('div');
    hours.style.display = 'flex';
    hours.style.flex = '1';
    hours.style.position = "relative"; 
    hours.style.minWidth = "142px";
    hours.style.width = "100%"
    hours.style.color = "#000";
    hours.style.border = '1px solid gray'; 
    hours.style.display = 'inline-block';
    hours.style.height = '100vh'; 
    hours.style.backgroundColor = '#000';
    hours.style.textAlign = "center";
    hours.style.paddingRight = '6rem';
    //CREATE SAVE TO EXCEL BUTTON
    var saveToExcelBtn = document.createElement('input');
      saveToExcelBtn.style.marginLeft = "auto";
      saveToExcelBtn.style.backgroundColor = "#000";
      saveToExcelBtn.style.color = "#fff";
      saveToExcelBtn.style.border = "none";
      saveToExcelBtn.style.fontWeight = "bold";
      saveToExcelBtn.style.height = "30px";
      saveToExcelBtn.style.width = "100%";
      saveToExcelBtn.setAttribute('type', 'button');
      saveToExcelBtn.setAttribute('value', 'Save to Excel');
      hours.appendChild(saveToExcelBtn);
    //ACQUIRE DEEP WORK HOURS TO DAY TO WEEK TO MONTH DATA
    
    saveToExcelBtn.onclick = (function() {
      var totalDeepWorkHours = document.getElementsByClassName('hour').length;

      console.log(totalDeepWorkHours)
      JSONToCSVConvertor([{totalDeepWorkHours: totalDeepWorkHours}], 'ReportTitle', 'ShowLabel')
    });
    //title
    var title = document.createElement('div');
    title.innerText = sidewaysTitle;
    title.style.position = "absolute";
    title.style.marginLeft = 'calc(-200% + 60px)';
    title.style.transform = 'rotate(-90deg)';
    title.style.color = "#000071";
    title.style.fontSize = '60px';
    title.style.width = '400%';
    title.style.top = 'calc(50% - 40px)';
    title.style.left = "1.25rem";
    hours.appendChild(title);
    document.getElementsByClassName('monthContainer')[monthNum].appendChild(hours);
};
function createBtns(dayContainer) {
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
        substractBtn.style.color = 'rgb(225, 116, 0)';
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
}
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
  //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
  var CSV = 'sep=,' + '\r\n\n';
  //This condition will generate the Label/Header
  if (ShowLabel) {
      var row = "";
      //This loop will extract the label from 1st index of on array
      for (var index in arrData[0]) {
          //Now convert each value to string and comma-seprated
          row += index + ',';
      }
      row = row.slice(0, -1);
      //append Label row with line break
      CSV += row + '\r\n';
  }
  //1st loop is to extract each row
  for (var i = 0; i < arrData.length; i++) {
      var row = "";
      //2nd loop will extract each column and convert it in string comma-seprated
      for (var index in arrData[i]) {
          row += '"' + arrData[i][index] + '",';
      }
      row.slice(0, row.length - 1);
      //add a line break after each row
      CSV += row + '\r\n';
  }
  if (CSV == '') {        
      alert("Invalid data");
      return;
  }   
  //Generate a file name
  var fileName = "MyReport_";
  fileName += ReportTitle.replace(/ /g,"_");   
  //Initialize file format: csv or xls
  var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);
  var link = document.createElement("a");    
  link.href = uri;
  link.style = "visibility:hidden";
  link.download = fileName + ".csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function createDays(week) {
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
      dayContainer.classList.add('day');
      dayContainer.appendChild(day);
      dayContainer.style.display = 'inline-block'; 
      week.appendChild(dayContainer);
      createBtns(dayContainer);
  });
}
function createWeek(weekNum, monthNum) {
  // 1. CREATE WEEK DIV
  var week = document.createElement('div');
    week.classList.add('week');
    week.classList.add(weekNum);
    week.style.border = "90px solid #000"
    var weekName = document.createElement('div');
    weekName.innerText = 'Week ' + weekNum || 'Week';
    weekName.style.color = '#fff';
    weekName.style.position = 'absolute';
    weekName.style.top =  '-3rem';
    weekName.style.left = 'calc(50% - 5rem)';
    weekName.style.fontSize = '1.5rem'
    weekName.style.letterSpacing = '1rem';
    week.appendChild(weekName);
    week.style.display = 'inline-block';
    week.style.position = 'relative';
  //CREATE TITLE OF THE MONTH; APPEND TO THE LEFT OF EACH OF THE 4 WEEKS
  var monthTitle = document.createElement('div');
    monthTitle.innerText ='Deep work hours';  
    monthTitle.style.color = '#fff';
    monthTitle.style.position = "absolute";
    monthTitle.style.transform = 'rotate(-90deg)';
    monthTitle.style.fontSize = '2.75rem';
    monthTitle.style.letterSpacing = '1rem';
    monthTitle.style.top = 'calc(50% - 0.75rem)';
    monthTitle.style.right = 'calc(100% - 14.75rem)';
    week.appendChild(monthTitle);
  //CREATE NAVIGATIONAL BUTTONS BELOW THE WEEK - TO SCROLL HORIZONTALLY ON CLICK
  if (weekNum <= 3) {
    //create btn
    var navBtnRight = document.createElement('input');
      navBtnRight.style.position = 'absolute';
      navBtnRight.style.top = 'calc(100% + 15.5px)'; 
      navBtnRight.style.left = 'calc(50%)';
      navBtnRight.style.backgroundColor = "transparent";
      navBtnRight.style.color = "#fff";
      navBtnRight.style.border = "none";
      navBtnRight.style.fontWeight = "bold";
      navBtnRight.style.fontSize = "2.5rem"
      navBtnRight.style.display = "inline-block";
      navBtnRight.style.maxWidth = "50%";
      navBtnRight.setAttribute('type', 'button');
      navBtnRight.setAttribute('value', '>');
    week.appendChild(navBtnRight);
    //append callback
    navBtnRight.onclick = (function(e) {
      if (e.target.parentElement.parentElement.className !== 'weeksContainer') { console.log('error - navBtnRight.onclick e.trgt. parentElement is wrong');}
      var weeksContainer = e.target.parentElement.parentElement;
      var scrollToWeekNum = (Number(e.target.parentElement.classList[1]) + 1);
      var scrollToWeek = weeksContainer.getElementsByClassName(scrollToWeekNum)[0];
      weeksContainer.scrollTo({
        left: scrollToWeek.offsetLeft - scrollToWeek.clientWidth / 4,
        behavior: 'smooth'
      });
    });
  }
  if (weekNum > 1) {
    //create btn
    var navBtnLeft = document.createElement('input');
      navBtnLeft.style.position = 'absolute';
      navBtnLeft.style.top = 'calc(100% + 15.5px)'; 
      navBtnLeft.style.left = 'calc(50% - 4rem)';
      navBtnLeft.style.backgroundColor = "transparent";
      navBtnLeft.style.color = "#fff";
      navBtnLeft.style.border = "none";
      navBtnLeft.style.fontWeight = "bold";
      navBtnLeft.style.fontSize = "2.5rem"
      navBtnLeft.style.display = "inline-block";
      navBtnLeft.style.maxWidth = "50%";
      navBtnLeft.setAttribute('type', 'button');
      navBtnLeft.setAttribute('value', '<');
    week.appendChild(navBtnLeft);
    //append callback
    navBtnLeft.onclick = (function(e) {
      if (e.target.parentElement.parentElement.className !== 'weeksContainer') { console.log('error - navBtnRight.onclick e.trgt. parentElement is wrong');}
      var weeksContainer = e.target.parentElement.parentElement;
      var scrollToWeekNum = (Number(e.target.parentElement.classList[1]) - 1);
      var scrollToWeek = weeksContainer.getElementsByClassName(scrollToWeekNum)[0];
      weeksContainer.scrollTo({
        left: scrollToWeek.offsetLeft - scrollToWeek.clientWidth / 4,
        behavior: 'smooth'
      });
    });
  }

  document.getElementsByClassName('weeksContainer')[monthNum].appendChild(week);
  createDays(week);
}
function createMonth(monthNum) {
  var monthContainer = document.createElement('div');
  monthContainer.className = 'monthContainer';
  monthContainer.style.display = 'flex';
  document.getElementById('root').appendChild(monthContainer);

  var monthNamesDATA = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  createSidewaysTitle(monthNamesDATA[monthNum], monthNum);
  createWeeksContainer(monthNum);
  createWeek(1, monthNum);
  createWeek(2, monthNum);
  createWeek(3, monthNum);
  createWeek(4, monthNum);
}