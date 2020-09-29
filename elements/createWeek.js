function createWeek(weekNum) {
  function createContainer() {
    const week = document.createElement('div');
    week.classList.add(weekNum);
    week.classList.add('week');
    week.style.border = "90px solid #000"
    week.style.display = 'inline-block';
    week.style.position = 'relative';
  }
  function createWeekName() {
    const weekName = document.createElement('div');
    weekName.innerText = 'Week ' + weekNum || 'Week';
    weekName.style.color = '#fff';
    weekName.style.position = 'absolute';
    weekName.style.top = '-3rem';
    weekName.style.left = 'calc(50% - 5rem)';
    weekName.style.fontSize = '1.5rem'
    weekName.style.letterSpacing = '1rem';
    return weekName;
  }
  function createNavBtnRight() {
    const navBtnRight = document.createElement('input');
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
    navBtnRight.onclick = (function (e) {
      if (e.target.parentElement.parentElement.className !== 'weeksContainer') { console.log('error - navBtnRight.onclick e.trgt. parentElement is wrong'); }
      const weeksContainer = e.target.parentElement.parentElement;
      const scrollToWeekNum = (Number(e.target.parentElement.classList[1]) + 1);
      const scrollToWeek = weeksContainer.getElementsByClassName(scrollToWeekNum)[0];
      weeksContainer.scrollTo({
        left: scrollToWeek.offsetLeft - scrollToWeek.clientWidth / 4,
        behavior: 'smooth'
      });
    });
  }
  function createNavBtnLeft() {
    const navBtnLeft = document.createElement('input');
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
      const weeksContainer = e.target.parentElement.parentElement;
      const scrollToWeekNum = (Number(e.target.parentElement.classList[1]) - 1);
      const scrollToWeek = weeksContainer.getElementsByClassName(scrollToWeekNum)[0];
      weeksContainer.scrollTo({
        left: scrollToWeek.offsetLeft - scrollToWeek.clientWidth / 4,
        behavior: 'smooth'
      });
    });
  }
  function assemble() {
    const btnNavRight = createBtnNavRight(); 
    const btnNavLeft = createBtnNavLeft(); 
    week.appendChild(weekName);
    week.appendChild(btnNavRight);
    week.appendChild(btnNavLeft);

  }
  const week = assemble();
  return week;
}

export default createWeek;