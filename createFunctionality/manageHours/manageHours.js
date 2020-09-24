// CURRENTLY UNUSED IDEA. I'm leaving it here for now, I'll want to test it later.
// Maybe, it can prove to be simpler and more practical for certain requirements. 
// Or help find something that's simpler.

// Code blocks uniform transport system
import appendManyHoursToDay from "./appendManyHoursToDay.js";
import appendNumberToSingleHour from "./appendNumberToSingleHour.js";
import appendSingleHourToDay from "./appendSingleHourToDay.js";
import clearAllHoursFromDay from "./clearAllHoursFromDay.js";
import createHourElement from "./createHourElement.js";
import createTickGraphic from "./createTickGraphic.js";

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
