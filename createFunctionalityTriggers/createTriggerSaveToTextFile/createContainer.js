import VALUES_CSS from '../../VALUES/VALUES_CSS.js'

const container = document.createElement('div');
// display
container.style.position = 'relative';
container.style.width = VALUES_CSS['width_menuSmallerBlock'];
// style
container.style.border = "none";
container.style.borderLeft = '1px solid grey';
container.style.borderRight = '1px solid grey';
container.style.fontWeight = "bold";
container.style.textAlign = 'left';
container.style.color = "#fff";

export default container;