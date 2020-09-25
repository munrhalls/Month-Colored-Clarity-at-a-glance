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

export default createSidewaysTitle