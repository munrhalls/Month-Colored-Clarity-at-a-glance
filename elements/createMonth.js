function createMonth(monthNum) {
  function createMonthTitle() {
    //month title - append to the left of each 4-5 weeks
    const monthTitle = document.createElement('div');
    monthTitle.innerText = 'Deep work hours';
    monthTitle.style.color = '#fff';
    monthTitle.style.position = "absolute";
    monthTitle.style.transform = 'rotate(-90deg)';
    monthTitle.style.fontSize = '2.75rem';
    monthTitle.style.letterSpacing = '1rem';
    monthTitle.style.top = 'calc(50% - 0.75rem)';
    monthTitle.style.right = 'calc(100% - 14.75rem)';
    return monthTitle;
  }
  function createTitleSideways(sidewaysTitle, monthNum) {
    // 0. CREATE DEEP WORK HOURS COLUMN TO THE LEFT 
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flex = '1';
    container.style.position = "relative";
    container.style.minWidth = "142px";
    container.style.width = "100%"
    container.style.color = "#000";
    container.style.border = '1px solid gray';
    container.style.display = 'inline-block';
    container.style.height = '100vh';
    container.style.backgroundColor = '#000';
    container.style.textAlign = "center";
    container.style.paddingRight = '6rem';
    //title
    const title = document.createElement('div');
    title.innerText = sidewaysTitle;
    title.style.position = "absolute";
    title.style.marginLeft = 'calc(-200% + 60px)';
    title.style.transform = 'rotate(-90deg)';
    title.style.color = "#000071";
    title.style.fontSize = '60px';
    title.style.width = '400%';
    title.style.top = 'calc(50% - 40px)';
    title.style.left = "1.25rem";
    container.appendChild(title);
    return container;
  };
  function createContainer(monthNum) {
    const weeksContainer = document.createElement('div');
    weeksContainer.className = 'weeksContainer';
    weeksContainer.style.display = 'flex';
    weeksContainer.style.flex = '12';
    weeksContainer.style.overflow = 'auto';
    weeksContainer.style.whiteSpace = 'nowrap';
    return weeksContainer;
  }
  function assemble() {
    const container = document.createElement('div');
    container.classList.add('month');
    container.classList.add('monthContainer');
    container.classList.add([VALUES_monthNames[monthNum]]);
    container.style.display = 'flex';
    document.getElementById('root').appendChild(container);
    const titleSideways = createTitleSideways(VALUES_monthNames[monthNum], monthNum);
    const containerWeeks = createWeeksContainer(monthNum);
    const container = createContainer();
    // temporarily do it like this (mid-refactor)
    const week1 = createWeek(1, monthNum);
    const week2 = createWeek(2, monthNum);
    const week3 = createWeek(3, monthNum);
    const week4 = createWeek(4, monthNum);
    container.appendChild(week1);
    container.appendChild(week2);
    container.appendChild(week3);
    container.appendChild(week4);
    return container;
  }
  const month = assemble();
  return month;
}

export default createMonth;