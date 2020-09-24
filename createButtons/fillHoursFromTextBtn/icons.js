import { resourceCreateArrowGraphic, resourceCreateChartIcon, resourceCreateFillIcon, resourceCreateUnderLineGraphic } from '../../createResourceFunctions.js';

const arrowGraphic = resourceCreateArrowGraphic();
  arrowGraphic.style.bottom = '1.5rem';
  arrowGraphic.style.left = '9rem';
const chartIcon = resourceCreateChartIcon();
  chartIcon.style.fill = '#fff';
  chartIcon.style.position = 'absolute';
  chartIcon.style.top = '0.75rem';
  chartIcon.style.right = '1.5rem';
  chartIcon.style.height = '6rem';
  chartIcon.style.width = '6rem';
const fillIcon = resourceCreateFillIcon();
  fillIcon.style.position = 'absolute';
  fillIcon.style.top = '4.46rem';
  fillIcon.style.left = '6.1rem';
  fillIcon.style.fill = '#fff';
  fillIcon.style.height = '2.75rem';
  fillIcon.style.width = '2.75rem';
  fillIcon.style.transform = 'scale(-1,1) rotate(-12deg)';
const underLineGraphic = resourceCreateUnderLineGraphic();

export { arrowGraphic, chartIcon, fillIcon, underLineGraphic };