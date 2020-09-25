import getCSVWeekHours from './getCSVWeekHours.js';
import getCsvRow from './getCsvRow.js';

function getCSVMonthHours(month) {
  const weeks = month.getElementsByClassName('week');
  let monthHours = '';
  for (let i = 0; i < weeks.length; i++) {
    let weekHours = getCSVWeekHours(weeks[i]);
    monthHours += weekHours;
    monthHours += getCsvRow();
  }
  return monthHours;
}

export default getCSVMonthHours;