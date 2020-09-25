// (!!!) CURRENTLY UNUSED. I'm leaving it here for now. Will want to test it later.
// Prolly not but maybe it's simpler/more practical for some scenarios.


// Code blocks uniform transport system
import appendManyHoursToDay from  './script.js';
import appendNumberToSingleHour from  './script.js';
import appendSingleHourToDay from  './script.js';
import clearAllHoursFromDay from  './script.js';
import createHourElement from  './script.js';
import createTickGraphic from  './script.js';

function manageHours(name) {
  const functions = {
    appendManyHoursToDay: appendManyHoursToDay,
    appendNumberToSingleHour: appendNumberToSingleHour,
    appendSingleHourToDay: appendSingleHourToDay,
    clearAllHoursFromDay: clearAllHoursFromDay,
    createHourElement: createHourElement,
    createTickGraphic: createTickGraphic
  }
  return functions[name];
}

export default manageHours;
