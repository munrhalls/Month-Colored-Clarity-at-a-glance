window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
    createMenu();
  for (var i = 0; i < 12; i++) {
    createMonths(i);
  }
  createCopyrightNote();
  createCopyrightNote2();
});


  const VALUES_MenuSharedCSS = {
    height_menuWhole: '9rem',
    width_menuSmallerBlock: '9rem',
    space_TopTo1stElement: '1.5rem',
    space_BottomTo1stElement: '0.25rem',
  }


function createMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');  
  menu.style.position = 'relative';
  const title = document.createElement('div');
    menu.style.color = '#fff';
    menu.style.height = VALUES_MenuSharedCSS['height_menuWhole'],
    menu.style.borderBottom = '1px solid gray';
    menu.style.backgroundColor = '#000';
    menu.style.display = 'flex';

    title.innerText = 'Metrics - Deep Work hours';
    title.style.display = 'flex';
    title.style.alignItems = 'center';
    title.style.paddingLeft = '3rem';
    title.style.fontWeight = 'bold';
    title.style.fontSize = '1.5rem'
    title.style.letterSpacing = '0.1rem';
  menu.appendChild(title);
  document.getElementById('root').appendChild(menu);
  createSaveTextFileBtn();
  createFillDataBtn();
}
function createSaveTextFileBtn() {

  // components
    const SaveTextFileBtnContainer = (function createSaveTextFileBtnContainer() {
      const SaveTextFileBtnContainer = document.createElement('div');
        // aesthethics
        SaveTextFileBtnContainer.style.border = "none";
        SaveTextFileBtnContainer.style.borderLeft = '1px solid grey';
        SaveTextFileBtnContainer.style.borderRight = '1px solid grey';
        SaveTextFileBtnContainer.style.fontWeight = "bold";
        SaveTextFileBtnContainer.style.textAlign = 'left';
        SaveTextFileBtnContainer.style.color = "#fff";
        // display
        SaveTextFileBtnContainer.style.position = 'relative';
        SaveTextFileBtnContainer.style.width = VALUES_MenuSharedCSS['width_menuSmallerBlock'];

      return SaveTextFileBtnContainer;
    })();
  const SaveTextFileBtn = document.createElement('input');
    SaveTextFileBtn.style.position = 'absolute';
    SaveTextFileBtn.style.top = VALUES_MenuSharedCSS['space_TopTo1stElement'];
    SaveTextFileBtn.style.width = '6rem'; 
    SaveTextFileBtn.style.left = '50%';
    SaveTextFileBtn.style.marginLeft = 'calc(-25% - 0.75rem)';
    SaveTextFileBtn.style.padding = '0.25rem 1rem';
    SaveTextFileBtn.setAttribute('type', 'button');
    SaveTextFileBtn.setAttribute('value', 'SAVE \nTEXT FILE');
  const underLineGraphic = resourceCreateUnderLineGraphic();
  const arrowGraphic = resourceCreateArrowGraphic();
  const saveHoursText = document.createElement('div');
    saveHoursText.innerText = 'TO KEEP HOURS DATA';
    saveHoursText.style.width = '100%';   
    saveHoursText.style.position = 'absolute';
    saveHoursText.style.bottom = '0.6rem';
    //text
    saveHoursText.style.fontSize = '0.6rem';   
    saveHoursText.style.fontWeight = 'lighter';
    saveHoursText.style.letterSpacing = '0.1rem';
    saveHoursText.style.textAlign = 'center';
  const saveIcon = resourceCreateSaveIcon();
    saveIcon.style.position = 'absolute';
    saveIcon.style.bottom = '1.66rem';
    saveIcon.style.left = '50%';
    saveIcon.style.marginLeft = 'calc(-12.5% + 6px)'
    saveIcon.style.fill = '#fff';
  //appends
  SaveTextFileBtnContainer.appendChild(SaveTextFileBtn);
  SaveTextFileBtnContainer.appendChild(saveIcon);
  SaveTextFileBtnContainer.appendChild(saveHoursText);
  SaveTextFileBtnContainer.appendChild(underLineGraphic);
  SaveTextFileBtnContainer.appendChild(arrowGraphic);
  document.getElementById('menu').appendChild(SaveTextFileBtnContainer);

  SaveTextFileBtnContainer.onclick = (function() {
    function createTextFile(filename, data) {
      var blob = new Blob([data], {type: 'text'});
      if(window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, filename);
      }
      else{
          var elem = window.document.createElement('a');
          elem.href = window.URL.createObjectURL(blob);
          elem.download = filename;        
          document.body.appendChild(elem);
          elem.click();        
          document.body.removeChild(elem);
      }
    }
    // (!!!!!!!!!!!!!!) ADD DEBOUNCER FUNC 
    // (!!!!!!!!!!!!!!) ADD DEBOUNCER FUNC 
    console.log('REMEMBER TO ADD DEBOUNCER FUNC LATER');
    createTextFile('Metrics: Deep work hours. Per day, week, month.');
  });
} 
function createFillDataBtn() {
  const fillDataBtnContainer = (function createFillDataContainer() {
    const fillDataBtnContainer = document.createElement('div');
      // aesthethics
      fillDataBtnContainer.style.color = "#fff";
      // fillDataBtnContainer.style.textAlign = 'left';
      fillDataBtnContainer.style.borderRight = '1px solid grey';
      fillDataBtnContainer.style.fontWeight = "bold";
      // display
      fillDataBtnContainer.style.height = "100%";
      fillDataBtnContainer.style.width = "18rem";
      fillDataBtnContainer.style.position = 'relative';
    return fillDataBtnContainer;
  })();

const dropTextFileBtn = document.createElement('input');
    dropTextFileBtn.setAttribute('type', 'button');
    dropTextFileBtn.setAttribute('value', 'DROP \nTEXT FILE');
    dropTextFileBtn.style.padding = '0.25rem 1rem'; 
    dropTextFileBtn.style.position = 'absolute';
    dropTextFileBtn.style.left = '1.5rem';
    dropTextFileBtn.style.top = VALUES_MenuSharedCSS['space_TopTo1stElement'];
const fillHoursText = document.createElement('div');
    //display
    fillHoursText.innerText = 'TO FILL HOURS DATA';
    fillHoursText.style.width = '100%';   
    fillHoursText.style.position = 'absolute';
    fillHoursText.style.bottom = '0.6rem';
    //text
    fillHoursText.style.fontSize = '0.6rem';   
    fillHoursText.style.fontWeight = 'lighter';
    fillHoursText.style.letterSpacing = '0.1rem';
    fillHoursText.style.textAlign = 'center';
const arrowGraphic = resourceCreateArrowGraphic();
  arrowGraphic.style.bottom = '1.5rem';
  arrowGraphic.style.left = '9rem';
const chartIcon = resourceCreateChartIcon();
  chartIcon.style.fill = '#fff';
  chartIcon.style.position = 'absolute';
  chartIcon.style.top = '0';
  chartIcon.style.right = '1rem';
  chartIcon.style.height = '6rem';
  chartIcon.style.width = '6rem';
const fillIcon = resourceCreateFillIcon();
  fillIcon.style.position = 'absolute';
  fillIcon.style.top = '4.46rem';
  fillIcon.style.left = '6.1rem';
  fillIcon.style.fill = '#fff';
  fillIcon.style.height = '2.75rem';
  fillIcon.style.width = '2.75rem';
  fillIcon.style.transform = 'scale(-1,1) rotate(-12deg)';

const underLineGraphic = resourceCreateUnderLineGraphic();
const column1 = document.createElement('div');
  column1.style.position = 'relative';
  column1.style.height = '100%';

column1.appendChild(dropTextFileBtn)
column1.appendChild(fillIcon)
column1.appendChild(fillHoursText);
column1.appendChild(underLineGraphic);

fillDataBtnContainer.appendChild(column1);
// fillDataBtnContainer.appendChild(column2);
fillDataBtnContainer.appendChild(arrowGraphic);
fillDataBtnContainer.appendChild(chartIcon);
document.getElementById('menu').appendChild(fillDataBtnContainer);

fillDataBtnContainer.onclick = (function() {
  console.log('ok')
});
} 
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
    var monthData = [];
    saveToExcelBtn.onclick = (function() {

      var month = document.getElementsByClassName('month')[0];
      var monthNamesDATA = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var weeks = month.getElementsByClassName('week'); 

      for (var i = 0; i < weeks.length; i++) {
        var weekObj = {};
        weekObj[monthNamesDATA[0]] = 'Week' + (i + 1);
        var week = weeks[i];
        var days = week.getElementsByClassName('day');

        for (var j = 0; j < days.length; j++) {
          var day = days[j];
          var hours = day.getElementsByClassName('hour');
        }
        monthData.push(weekObj)

      }
      var totalDeepWorkHours = document.getElementsByClassName('hour').length;
      
    JSONToCSVConvertor([
      {'January': 'Week 1',
       'Monday': 8,
       'Tuesday': 0,
       'Wendesday': 0,
       'Thursday': 0,
       'Friday': 0,
       'Saturday': 0,
       'Sunday': 0,
      },
      {'January': 'Week 2',
      'Monday': 10,
      'Tuesday': 0,
      'Wendesday': 0,
      'Thursday': 0,
      'Friday': 0,
      'Saturday': 0,
      'Sunday': 0,
      },
      {'Total': totalDeepWorkHours,
      },
    ], 'ReportTitle', 'ShowLabel');
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
  var daysDATA = ['Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  //create: container divs -> corresponding divs: 1) day's title divs, 2) day's deep work hour ticks
  daysDATA.forEach(function(el){
    //day's column to add deep work hour ticks into
    var day = document.createElement('div');
      day.innerText = el;
      //style
      day.style.width = "142px";
      day.style.textAlign = "center";
      day.style.border = '1px solid gray'; day.style.padding = '3px 30px'; 
    var dayContainer = document.createElement('div');
      dayContainer.classList.add('day');
      dayContainer.classList.add(el);
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
  // (!!! !!! !!!) TO REFACTOR - ABSTRACT BUTTONS CREATION TO DISTINCT FUNCTION THAT ISN'T COUPLED WITH CREATE WEEK FUNC IN ANY WAY
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
function createMonths(monthNum) {
  var monthContainer = document.createElement('div');
  monthContainer.classList.add('month');
  monthContainer.classList.add('monthContainer');
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

// RESOURCES (graphics and so on) 
function resourceCreateSaveIcon() {
  const saveIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    saveIcon.setAttributeNS(null, 'height', '24');
    saveIcon.setAttributeNS(null, 'width', '24');
    // saveIcon.setAttributeNS(null, 'enableBackground', 'new 0 0 24 24');
    saveIcon.setAttributeNS(null, 'viewBox', '0 0 24 24');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'm21.5 20h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.827 0 1.5-.673 1.5-1.5v-11c0-.827-.673-1.5-1.5-1.5h-11.5c-.133 0-.26-.053-.354-.146l-1.853-1.854h-5.293c-.827 0-1.5.673-1.5 1.5v13c0 .827.673 1.5 1.5 1.5h2c.276 0 .5.224.5.5s-.224.5-.5.5h-2c-1.379 0-2.5-1.122-2.5-2.5v-13c0-1.378 1.121-2.5 2.5-2.5h5.5c.133 0 .26.053.354.146l1.853 1.854h11.293c1.379 0 2.5 1.122 2.5 2.5v11c0 1.378-1.121 2.5-2.5 2.5z');
  const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'm12 18.75c-.276 0-.5-.224-.5-.5v-7.75c0-.276.224-.5.5-.5s.5.224.5.5v7.75c0 .277-.224.5-.5.5z');
  const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'm12 19c-.128 0-.256-.049-.354-.146l-2.5-2.5c-.195-.195-.195-.512 0-.707s.512-.195.707 0l2.147 2.146 2.146-2.146c.195-.195.512-.195.707 0s.195.512 0 .707l-2.5 2.5c-.097.097-.225.146-.353.146z');
  const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path4.setAttribute('d', 'm15.5 22h-7c-.827 0-1.5-.673-1.5-1.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .276.225.5.5.5h7c.275 0 .5-.224.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .827-.673 1.5-1.5 1.5z');

  saveIcon.appendChild(path);
  saveIcon.appendChild(path2);
  saveIcon.appendChild(path3);
  saveIcon.appendChild(path4);
  return saveIcon;
}
function resourceCreateChartIcon() {
  const chartIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  chartIcon.setAttributeNS(null, 'x', '0px');
  chartIcon.setAttributeNS(null, 'y', '0px');
  chartIcon.setAttributeNS(null, 'enableBackground', 'new 0 0 100 100');
  chartIcon.setAttributeNS(null, 'viewBox', '0 0 100 100');
  // chartIcon.setAttributeNS(null, 'xml:space', 'preserve');  

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M48,71h4v20c0,1.1-0.9,2-2,2s-2-0.9-2-2V71z M32.07,90.47c-0.29,1.07,0.34,2.17,1.4,2.46C33.65,92.98,33.83,93,34,93c0.88,0,1.69-0.58,1.93-1.47L41.53,71h-4.15L32.07,90.47z M62.62,71h-4.15l5.6,20.53C64.31,92.42,65.12,93,66,93c0.17,0,0.35-0.02,0.53-0.07c1.06-0.29,1.69-1.39,1.4-2.46L62.62,71z M80,7H20c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3h60c1.65,0,3-1.35,3-3C83,8.35,81.65,7,80,7z M23,17h54v48c0,1.1-0.9,2-2,2H25c-1.1,0-2-0.9-2-2V17z M32.59,47.41l4,4C36.98,51.8,37.49,52,38,52s1.02-0.2,1.41-0.59L48,42.83l4.59,4.58C52.98,47.8,53.49,48,54,48s1.02-0.2,1.41-0.59l7-7L64,38.83V44c0,1.1,0.9,2,2,2s2-0.9,2-2V34c0-0.13-0.01-0.26-0.04-0.39c-0.01-0.06-0.03-0.12-0.05-0.17c-0.02-0.07-0.04-0.14-0.06-0.2c-0.03-0.07-0.07-0.13-0.1-0.2c-0.03-0.05-0.05-0.1-0.09-0.15c-0.07-0.11-0.15-0.21-0.25-0.3c-0.09-0.1-0.19-0.18-0.3-0.25c-0.05-0.04-0.1-0.06-0.15-0.08c-0.06-0.04-0.13-0.08-0.2-0.11c-0.06-0.02-0.13-0.04-0.2-0.06c-0.05-0.02-0.11-0.04-0.17-0.05C66.26,32.01,66.13,32,66,32H56c-1.1,0-2,0.9-2,2c0,1.1,0.9,2,2,2h5.17l-1.58,1.59L54,43.17l-4.59-4.58c-0.78-0.79-2.04-0.79-2.82,0L38,47.17l-2.59-2.58c-0.78-0.79-2.04-0.79-2.82,0C31.8,45.37,31.8,46.63,32.59,47.41z');
  chartIcon.appendChild(path);
  return chartIcon; 
}
function resourceCreateFillIcon() {
  const fillIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  fillIcon.setAttributeNS(null, 'width', '512');
  fillIcon.setAttributeNS(null, 'height', '512');
  fillIcon.setAttributeNS(null, 'viewBox', '0 0 72 68');
  fillIcon.setAttributeNS(null, 'x', '0px');
  fillIcon.setAttributeNS(null, 'y', '0px');
  // fillIcon.setAttributeNS(null, 'xml:space', 'preserve');  






  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M28.215,32.394 C27.1130386,32.9344423 26.1973331,33.7913059 25.585,34.855 C25.563,34.897 25.542,34.939 25.521,34.981 C25.68,34.994 25.84,35 26,35 C30.963,35 35,29.168 35,22 C35,14.832 30.963,9 26,9 C21.037,9 17,14.832 17,22 C16.9598717,25.0644868 17.7717122,28.0798944 19.345,30.71 C19.394,30.656 19.45,30.605 19.5,30.552 C19.726,30.309 19.96,30.071 20.2,29.835 C20.29,29.748 20.378,29.662 20.47,29.576 C20.58,29.4726667 20.6913333,29.3703333 20.804,29.269 C19.578892,27.0448437 18.9569688,24.5388795 19,22 C19,15.42 22.619,11 26,11 C29.381,11 33,15.42 33,22 C33.0015429,22.6630805 32.9591165,23.3255336 32.873,23.983 L32.873,23.999 C32.6568842,26.1533604 31.9177978,28.2223218 30.72,30.026 C30.558,30.26 30.3883333,30.4836667 30.211,30.697 C30.1825396,30.7322977 30.1518077,30.7657019 30.119,30.797 C29.5851536,31.4391215 28.9402325,31.9800558 28.215,32.394 Z');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M30.887,23.756 C30.9638666,23.1738497 31.0016179,22.5872009 31,22 C31,16.424 28.088,13 26,13 C23.912,13 21,16.424 21,22 C20.9660325,24.0840079 21.4447371,26.1444293 22.394,28 C24.6887494,26.5286022 27.1912696,25.4098166 29.818,24.681 C30.157,24.571 30.464,24.467 30.779,24.361 C30.812,24.161 30.863,23.965 30.887,23.756 Z  ');
    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M47,9 L42.853,9 C44.041513,12.2637064 44.7345327,15.6870083 44.909,19.156 C46.2925409,19.6043842 47.1522761,20.9838117 46.9454312,22.4234119 C46.7385863,23.8630122 45.5252505,24.9445763 44.0714359,24.9852831 C42.6176214,25.0259899 41.3456664,24.014014 41.0585911,22.5882435 C40.7715159,21.162473 41.5527167,19.7370993 42.909,19.212 C42.7345809,15.7096113 41.9859448,12.2596691 40.693,9 L42.85,9 C42.67,8.52 42.48,8.05 42.27,7.59 C42.18,7.39 42.09,7.19 42,7 C39.85,2.54 36.78,0 33.5,0 C30.08,0 26.88,2.77 24.73,7.59 C24.5533254,7.97485924 24.6418458,8.42953221 24.95,8.72 C24.9814973,8.75581457 25.0186575,8.78621844 25.06,8.81 C25.1130436,8.8491413 25.1700173,8.88265521 25.23,8.91 C25.3588839,8.96829715 25.4985485,8.99895525 25.64,9 C26.0342739,9.00385978 26.392623,8.77152354 26.55,8.41 C26.77,7.91 27.01,7.44 27.24,7 C28.99,3.8 31.22,2 33.5,2 C35.78,2 38.01,3.8 39.76,7 C39.99,7.44 40.23,7.91 40.45,8.41 C40.5402704,8.60233091 40.6203807,8.79926863 40.69,9 L31.464,9 C34.767,11.591 37,16.442 37,22 C37,27.558 34.767,32.409 31.464,35 L47,35 C51.963,35 56,29.168 56,22 C56,14.832 51.963,9 47,9 Z');
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttributeNS(null, 'cx', '44');
      circle.setAttributeNS(null, 'cy', '22');
      circle.setAttributeNS(null, 'r', '1');
      circle.setAttributeNS(null, 'fill', '#fff');
    const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path4.setAttribute('d', 'M19,58 C30.2,58 38,54.574 38,51.5 C38,48.974 32.351,45.918 23.169,45.175 C23.172039,45.7486922 23.2466145,46.319766 23.391,46.875 C23.6366056,47.8721039 24.3561241,48.6850663 25.316,49.05 C25.8406705,49.224522 26.124522,49.7913295 25.95,50.316 C25.775478,50.8406705 25.2086705,51.124522 24.684,50.95 C23.0856382,50.3807309 21.8769051,49.0511996 21.462,47.406 C21.0346929,45.2077147 21.1095566,42.9412949 21.681,40.776 L21.767,40.316 C22.0599438,38.6229434 22.5243337,36.9640732 23.153,35.365 C23.359,34.858 23.579,34.377 23.81,33.935 C24.5984115,32.5192982 25.7946126,31.3736212 27.243,30.647 C27.78632,30.3304587 28.2661231,29.9157596 28.658,29.424 C28.6762968,29.4027057 28.6956547,29.3823465 28.716,29.363 L28.727,29.351 L28.739,29.339 C28.908,29.129 29.051,28.884 29.203,28.65 C29.303,28.493 29.422,28.35 29.516,28.186 C29.7214349,27.8107575 29.9031251,27.4229959 30.06,27.025 C30.085,26.964 30.118,26.912 30.141,26.85 C30.164,26.788 30.177,26.725 30.199,26.666 C27.515688,27.3871518 24.9884092,28.597059 22.744,30.235 C21.7545022,31.0478299 20.8526093,31.9617884 20.053,32.962 C18.8599554,34.4416559 17.9924075,36.1563067 17.507,37.994 C17.292,38.817 17.133,39.651 16.965,40.535 C16.7423191,41.8630506 16.4258607,43.1736627 16.018,44.457 L16.018,44.464 C15.7645872,45.2283578 15.4310665,45.9637792 15.023,46.658 C13.9545476,48.6927862 11.8628328,49.9842994 9.565,50.028 C9.34150624,50.028366 9.11816388,50.0163476 8.896,49.992 C8.34713304,49.9332668 7.94966644,49.4409096 8.008,48.892 C8.03307936,48.627092 8.16395331,48.3834992 8.3710001,48.216356 C8.57804689,48.0492127 8.84376056,47.9726512 9.108,48.004 C10.8531462,48.129949 12.5042238,47.1992486 13.3,45.641 C13.366,45.53 13.42,45.407 13.482,45.292 C5.007,46.22 0,49.087 0,51.5 C0,54.574 7.8,58 19,58 Z M5.143,52.485 C5.4267125,52.0128664 6.03880533,51.8590607 6.512,52.141 C6.56,52.169 11.384,54.951 19.89,54.006 C20.438971,53.9452487 20.9332487,54.341029 20.994,54.89 C21.0547513,55.438971 20.658971,55.9332487 20.11,55.994 C18.8691906,56.1333487 17.6216091,56.2037902 16.373,56.205 C9.49,56.205 5.673,53.968 5.485,53.857 C5.01177029,53.5725154 4.8586697,52.9583224 5.143,52.485 Z');
  fillIcon.appendChild(path);
  fillIcon.appendChild(path2);
  fillIcon.appendChild(path3);
  fillIcon.appendChild(circle);
  fillIcon.appendChild(path4);
  return fillIcon; 
}
function resourceCreateUnderLineGraphic() {
  const underLineGraphic = document.createElement('span');
    //display
    underLineGraphic.style.width = '90%'  
    underLineGraphic.style.position = 'absolute';
    underLineGraphic.style.bottom = VALUES_MenuSharedCSS['space_BottomTo1stElement']
    underLineGraphic.style.left = '5%';
    // aesthetic
    underLineGraphic.style.borderTop = '1px solid #fff';
    underLineGraphic.style.borderRadius = '50%'
  return underLineGraphic;
}
function resourceCreateArrowGraphic() {
  const arrowGraphic = document.createElement('span');
    arrowGraphic.style.borderTop = '3px solid #fff';
    arrowGraphic.style.borderRadius = '50%';
    arrowGraphic.style.height = '3.25rem';
    arrowGraphic.style.width = '6.5rem';
    arrowGraphic.style.position = 'absolute';
    arrowGraphic.style.left = 'calc(100% - 4.75rem)';
    arrowGraphic.style.bottom = '3rem';
    arrowGraphic.style.transform = 'rotate(-30deg)';
  return arrowGraphic;
}
function createCopyrightNote() {
  const copyrightNote = document.createElement('div');
  copyrightNote.classList.add('copyright');
  copyrightNote.style.letterSpacing = '0.25rem';
  copyrightNote.style.padding = '0.15rem';
  copyrightNote.innerText = 'Icons made by ';
  const link = document.createElement('a');
    link.href = 'https://icon54.com/';
    link.title = 'Pixel perfect';
    link.innerText = 'Pixel perfect';
    copyrightNote.appendChild(link);
  const betweenLinksText = document.createElement('span');
    betweenLinksText.innerText = ' from ';
    copyrightNote.appendChild(betweenLinksText);
  const linkTwo = document.createElement('a');
    linkTwo.href = 'https://www.flaticon.com/';
    linkTwo.title = 'Flaticon';
    linkTwo.innerText = 'www.flaticon.com';
  copyrightNote.appendChild(linkTwo);
  const dot = document.createElement('span');
    dot.innerText = '.';
    dot.style.color = 'blue';
    copyrightNote.appendChild(dot);
  copyrightNote.style.backgroundColor = '#000';
  copyrightNote.style.color = '#fff';
  copyrightNote.style.fontSize = '10px'
  copyrightNote.style.textAlign = 'center';
  document.getElementById('root').appendChild(copyrightNote);
}
function createCopyrightNote2() {
  const copyrightNote2 = document.createElement('div');
  copyrightNote2.classList.add('copyright');
  copyrightNote2.style.letterSpacing = '0.25rem';
  copyrightNote2.style.padding = '0.15rem';
  const link = document.createElement('a');
    link.href = 'https://www.iconbros.com/icons/ib-o-f-analysis/';
    link.title = 'IconBros';
    link.innerText = 'Analysis';
    link.target = '_blank';
    copyrightNote2.appendChild(link);
  const betweenLinksText = document.createElement('span');
    betweenLinksText.innerText = ' icon by ';
    copyrightNote2.appendChild(betweenLinksText);
  const linkTwo = document.createElement('a');
    linkTwo.href = 'https://iconbros.com';
    linkTwo.title = 'IconBros';
    linkTwo.innerText = 'IconBros';
    linkTwo.target = '_blank';
  copyrightNote2.appendChild(linkTwo);
  const dot = document.createElement('span');
    dot.innerText = '.';
    dot.style.color = 'blue';
    copyrightNote2.appendChild(dot);
  copyrightNote2.style.backgroundColor = '#000';
  copyrightNote2.style.color = '#fff';
  copyrightNote2.style.fontSize = '10px'
  copyrightNote2.style.textAlign = 'center';
  document.getElementById('root').appendChild(copyrightNote2);
}
