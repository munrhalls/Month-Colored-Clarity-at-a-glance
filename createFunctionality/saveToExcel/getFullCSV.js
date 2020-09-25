import { VALUES_monthNames } from "../../VALUES/VALUES.js";
import getCSVMonthHours from './getCSVMonthHours.js';
import getCSVDayNamesRow from './getCSVDayNamesRow.js';
import getCsvRow from './getCsvRow.js';

function getCSV() {
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

export default getCSV;