// (!!!) CURRENTLY UNUSED. I'm leaving it here for now. Will want to test it later.
// Prolly not but maybe it's simpler/more practical for some scenarios.


// Code blocks uniform transport system
import appendManyHoursToDay from "./appendManyHoursToDay.js";
import appendNumberToSingleHour from "./appendNumberToSingleHour.js.js";
import appendSingleHourToDay from "./appendSingleHourToDay.js";
import clearAllHoursFromDay from "./clearAllHoursFromDay.js";
import createHourElement from "./createHourElement.js.js";
import createTickGraphic from "./createTickGraphic.js.js";

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
