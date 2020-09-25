// deep work hour count - visual representer
function createTickGraphic() {
  const tickGraphic = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    tickGraphic.setAttribute("width", "100%");
    tickGraphic.setAttribute("height", "28");
    tickGraphic.setAttribute("width", "28");
    tickGraphic.setAttribute('display', 'block');
    tickGraphic.style.margin = "auto";
  const tick = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    tick.setAttributeNS(null, 'd', 'M95.833,0C42.991,0,0,42.99,0,95.833s42.991,95.834,95.833,95.834s95.833-42.991,95.833-95.834S148.676,0,95.833,0z   M150.862,79.646l-60.207,60.207c-2.56,2.56-5.963,3.969-9.583,3.969c-3.62,0-7.023-1.409-9.583-3.969l-30.685-30.685  c-2.56-2.56-3.97-5.963-3.97-9.583c0-3.621,1.41-7.024,3.97-9.584c2.559-2.56,5.962-3.97,9.583-3.97c3.62,0,7.024,1.41,9.583,3.971  l21.101,21.1l50.623-50.623c2.56-2.56,5.963-3.969,9.583-3.969c3.62,0,7.023,1.409,9.583,3.969  C156.146,65.765,156.146,74.362,150.862,79.646z');
    tick.style.scale = "0.14";
    tick.style.x = "50%";
    tickGraphic.appendChild(tick);
  return tickGraphic;
}

export default createTickGraphic;