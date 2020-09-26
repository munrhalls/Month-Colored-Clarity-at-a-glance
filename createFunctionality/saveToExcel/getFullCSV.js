import { VALUES_monthNames } from '../../script.js';
import { getCSVMonthHours } from '../../script.js';
import { getCSVDayNamesRow } from '../../script.js';
import { getCsvRow } from '../../script.js';

function getFullCSV() {
  var CSV = 'sep=,' + '\r\n\n';
  const months = document.getElementsByClassName('month');
  const monthNames = VALUES_monthNames;
  for (let i = 0; i < months.length & i < 12; i++) {
    CSV += monthNames[i];
    CSV += getCsvRow();
    CSV += ',' + getCSVDayNamesRow();
    CSV += getCsvRow();
    CSV += getCSVMonthHours(months[i]);
    CSV += getCsvRow();
  }
  return CSV;
}

export { getFullCSV };