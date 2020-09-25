import createMenu from './createMenu/createMenu.js'; 
import {VALUES_dayNames, VALUES_monthNames} from './VALUES/VALUES.js';

window.addEventListener('load', function () {
  console.log('This function is executed once the page is fully loaded');
    createMenu();
  for (var i = 0; i < 12; i++) {
    createMonths(i);
  }
  createCopyrightNote();
  createCopyrightNote2();
});
// values //  values //  //  values  //  values  //  values  //  values  //  values  //  values  //  values  //  values  //
// top menu // top menu //  // top menu  // top menu  // top menu  // top menu  // top menu  // top menu  // top menu  // top menu  //

//main // main // main // main // main // main // main // main // main // main // main // main // main // main // main // main // main 
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
function createMonths(monthNum) {
  var monthContainer = document.createElement('div');
  monthContainer.classList.add('month');
  monthContainer.classList.add('monthContainer');
  monthContainer.classList.add([VALUES_monthNames[monthNum]]);
  monthContainer.style.display = 'flex';
  document.getElementById('root').appendChild(monthContainer);
  createSidewaysTitle(VALUES_monthNames[monthNum], monthNum);
  createWeeksContainer(monthNum);
  createWeek(1, monthNum);
  createWeek(2, monthNum);
  createWeek(3, monthNum);
  createWeek(4, monthNum);
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
function createDays(week) {
  //create: container divs -> corresponding divs: 1) day's title divs, 2) day's deep work hour ticks
  VALUES_dayNames.forEach(function(el){
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
      createAddSubstrctHourBtns(dayContainer);
  });
}
// feature - add/substract hours in a day //  feature - add/substract hours in a day //  feature - add/substract hours in a day //  
function createAddSubstrctHourBtns(dayContainer) {
  const addBtn = createAddBtn();
  //count day's hours - closure var
  var hourNum = 0;

  // (represent hours) - add btn click -> add hour element
  addBtn.onclick = function addHour(){
    hourNum++;
    const hour = createHourTick();
    appendNumToHour(hourNum, hour);
    const parent = addBtn.parentNode;
    parent.appendChild(hour);
  };  

  //(represent hours) - substract btn click -> substract hour element
  const substractBtn = createSubstractBtn();
  substractBtn.onclick = function substractHour(){
    if (hourNum > 0) {
      hourNum--;
    }
    const day = substractBtn.parentNode;
    deleteHourEl(day);
  };
  dayContainer.appendChild(addBtn);
  dayContainer.appendChild(substractBtn);
}
function createAddBtn() {
  const addBtn = document.createElement('input');
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
    return addBtn;
}
function createSubstractBtn() {
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
  return substractBtn;
}
 // feature - fill work hours per day from TEXT FILE // feature - fill work hours per day from text file // 
function clearHoursFromTheDay(day) {
  for (let r = day.getElementsByClassName('hour').length - 1; r >= 0; r--) {
    day.getElementsByClassName('hour')[r].remove();
  }
}
function appendHoursToDay(hoursNum, day) {
  for (let j = 1; j <= hoursNum; j++) {
    appendHour(j, day);
  }
}
function appendHour(hoursNum, day) {
  const hour = createHourTick();
  appendNumToHour(hoursNum, hour);
  day.appendChild(hour);
}
function createHourTick() {
  var hour = document.createElement('div');
  hour.className = "hour";
  hour.style.backgroundColor = "#000071";
  hour.style.padding = "7px 0";
  hour.style.border = "1px solid darkblue";
  hour.style.position = 'relative';
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
    hour.appendChild(svg);
    return hour;
};
function appendNumToHour(num, hour) {
  var numEl = document.createElement('div');
  numEl.style.color = '#000';
  numEl.style.fontWeight = "bold";
  numEl.style.fontSize = '1.6rem';
  numEl.style.position = 'absolute';
  numEl.style.left = '15px';
  numEl.style.top = '0.1rem';
  numEl.innerText = num;
  hour.appendChild(numEl);
}
function deleteHourEl(day) {
  if (day.getElementsByClassName('hour').length) {
    day.removeChild(day.getElementsByClassName('hour')[day.getElementsByClassName('hour').length - 1]);  
  }
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
