import VALUES_CSS from './VALUES_CSS.js';

function resourceCreateUnderLineGraphic() {
  const underLineGraphic = document.createElement('span');
    //display
    underLineGraphic.style.width = '90%'  
    underLineGraphic.style.position = 'absolute';
    underLineGraphic.style.bottom = VALUES_CSS['space_BottomTo1stElement']
    underLineGraphic.style.left = '5%';
    // aesthetic
    underLineGraphic.style.borderTop = '1px solid #fff';
    underLineGraphic.style.borderRadius = '50%'
  return underLineGraphic;
}

export default resourceCreateUnderLineGraphic;