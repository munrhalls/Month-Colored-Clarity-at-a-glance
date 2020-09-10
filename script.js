window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
    createMenu();
  for (var i = 0; i < 12; i++) {
    createMonths(i);
  }
  createCopyrightNote();
});

function createMenu() {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');  
  menu.style.position = 'relative';
  const title = document.createElement('div');
    menu.style.color = '#fff';
    menu.style.height = '6rem';
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
  createSaveDATABtn();
  createFillDataBtn();

}
function createSaveDATABtn() {
    const saveDATABtnContainer = (function createSaveDataBtnContainer() {
      const saveDATABtnContainer = document.createElement('div');
        saveDATABtnContainer.style.border = "none";
        saveDATABtnContainer.style.fontWeight = "bold";
        saveDATABtnContainer.style.height = "100%";
        saveDATABtnContainer.style.borderLeft = '1px solid grey';
        saveDATABtnContainer.style.borderRight = '1px solid grey';
        saveDATABtnContainer.style.marginLeft = '1rem';
        saveDATABtnContainer.style.padding = '0 1.5rem';
        saveDATABtnContainer.style.textAlign = 'left';
        saveDATABtnContainer.style.color = "#fff";
        saveDATABtnContainer.style.position = 'relative';
        saveDATABtnContainer.style.display = 'flex';
        saveDATABtnContainer.style.flexDirection = 'column';
        saveDATABtnContainer.style.alignItems = 'center';
        saveDATABtnContainer.style.justifyContent = 'center';
        saveDATABtnContainer.style.flexDirection = 'column';
      return saveDATABtnContainer;
    })()

  const saveDATABtn = document.createElement('input');
      saveDATABtn.setAttribute('type', 'button');
      saveDATABtn.setAttribute('value', 'SAVE \nDATA');
      saveDATABtn.style.padding = '0.15rem 1rem'

  const saveIcon = resourceCreateSaveIcon();
    saveDATABtnContainer.appendChild(saveDATABtn);
    saveDATABtnContainer.appendChild(saveIcon);
  document.getElementById('menu').appendChild(saveDATABtnContainer);

  saveDATABtnContainer.onclick = (function() {
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
    // (!!!!!!!!!!!!!!) ADD DEBOUNCER FUNC 
    console.log('REMEMBER TO ADD DEBOUNCER FUNC LATER');
    createTextFile('Metrics: Deep work hours. Per day, week, month.');
  });
} 
function createFillDataBtn() {
  const saveDATABtnContainer = (function createSaveDataBtnContainer() {
    const saveDATABtnContainer = document.createElement('div');
      saveDATABtnContainer.style.border = "none";
      saveDATABtnContainer.style.fontWeight = "bold";
      saveDATABtnContainer.style.height = "100%";
      saveDATABtnContainer.style.borderLeft = '1px solid grey';
      saveDATABtnContainer.style.borderRight = '1px solid grey';
      saveDATABtnContainer.style.marginLeft = '1rem';
      saveDATABtnContainer.style.padding = '0 1.5rem';
      saveDATABtnContainer.style.textAlign = 'left';
      saveDATABtnContainer.style.color = "#fff";
      saveDATABtnContainer.style.position = 'relative';
      saveDATABtnContainer.style.display = 'flex';
      saveDATABtnContainer.style.flexDirection = 'column';
      saveDATABtnContainer.style.alignItems = 'center';
      saveDATABtnContainer.style.justifyContent = 'center';
      saveDATABtnContainer.style.flexDirection = 'column';
    return saveDATABtnContainer;
  })()

const saveDATABtn = document.createElement('input');
    saveDATABtn.setAttribute('type', 'button');
    saveDATABtn.setAttribute('value', 'SAVE \nDATA');
    saveDATABtn.style.padding = '0.15rem 1rem'

const saveIcon = resourceCreateSaveIcon();
  saveDATABtnContainer.appendChild(saveDATABtn);
  saveDATABtnContainer.appendChild(saveIcon);
document.getElementById('menu').appendChild(saveDATABtnContainer);

saveDATABtnContainer.onclick = (function() {
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
  // (!!!!!!!!!!!!!!) ADD DEBOUNCER FUNC 
  console.log('REMEMBER TO ADD DEBOUNCER FUNC LATER');
  createTextFile('Metrics: Deep work hours. Per day, week, month.');
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
    saveIcon.style.fill = '#fff';
    saveIcon.style.marginTop = '0.5rem'

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
function createCopyrightNote() {
  const copyrightNote = document.createElement('div');
  copyrightNote.id = 'copyright';
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