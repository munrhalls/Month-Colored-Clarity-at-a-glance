function createMonths() {

  function createMonths() {
    function getDayName(dateStr, locale) {
      var date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'short' });
    }
    var dateStr = '05/23/2014';
    var day = getDayName(dateStr, "en-EN");
    console.log(day)
  }
  function assemble() {
    const months = createMonths();
    return months;
  }
  const months = assemble();
  return months;
}


export default createMonths;