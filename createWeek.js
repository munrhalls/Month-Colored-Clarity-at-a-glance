import { createDays } from './script.js';

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
  weekName.style.top = '-3rem';
  weekName.style.left = 'calc(50% - 5rem)';
  weekName.style.fontSize = '1.5rem'
  weekName.style.letterSpacing = '1rem';
  week.appendChild(weekName);
  week.style.display = 'inline-block';
  week.style.position = 'relative';
  //CREATE TITLE OF THE MONTH; APPEND TO THE LEFT OF EACH OF THE 4 WEEKS
  var monthTitle = document.createElement('div');
  monthTitle.innerText = 'Deep work hours';
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
    navBtnRight.onclick = (function (e) {
      if (e.target.parentElement.parentElement.className !== 'weeksContainer') { console.log('error - navBtnRight.onclick e.trgt. parentElement is wrong'); }
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
    navBtnLeft.onclick = (function (e) {
      if (e.target.parentElement.parentElement.className !== 'weeksContainer') { console.log('error - navBtnRight.onclick e.trgt. parentElement is wrong'); }
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

export { createWeek };