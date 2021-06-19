const date = new Date();
const year = date.getFullYear();
const DATA_Calendar = [];
for (let i = 1; i <= 12; i++) {
  // Each loop equals:
  // 1. get number of days in a month.
  const month = new Date(year, i, 0);
  let monthDATA = new Array();
  monthDATA.monthName = month.toLocaleString('default', { month: 'long' });
  const numDaysInMonth = month.getDate();
  // 2. get weeks with proper days as string, mark each week by comma
  let weeksByCommaString = '';
  for (let j = 1; j <= numDaysInMonth; j++) {
    const day = new Date(year, i - 1, j);
    const dayName = day.toLocaleDateString('en-EN', { weekday: 'long' });
    weeksByCommaString += dayName === 'Sunday' ? dayName + ',' : dayName + ' ';
  }
  // 3. gather weeks from the string, as arrays of days, push each into month array
  const weeks = weeksByCommaString.split(',');
  weeks.pop();
  let count = 1;
  weeks.forEach(function (week) {
    const weekInDays = week.split(' ');
    weekInDays.weekName = 'Week ' + count;
    monthDATA.push(weekInDays);
    count++;
  })
  // 4. push month array, filled with month's week arrays with days inside, into year array
  DATA_Calendar.push(monthDATA);
}


for (let i = 0; i < DATA_Calendar.length; i++) {
  const month = DATA_Calendar[i];
  for (let j = 0; j < month.length; j++) {
    const week = month[j];
    for (let y = 0; y < week.length; y++) {
      console.log(week[y])
    }
  }
}