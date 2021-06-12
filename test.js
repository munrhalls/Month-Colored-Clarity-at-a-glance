let test = document.getElementById('test');
let el = document.createElement('div');
let el2 = document.createElement('div');
let el3 = document.createElement('div');

el.style.background = 'grey';
el.style.height = '100vh';
el.style.display = 'flex';
el.style.flexDirection = 'column';

el2.style.background = 'blue';
el2.style.flex = '1';

el3.style.background = 'purple';
el3.style.flex = '1';



el.appendChild(el2);
el.appendChild(el3);
test.appendChild(el);

