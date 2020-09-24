// code blocks uniform transport system
import appendManyHoursToDay from "./appendManyHoursToDay.js";
import appendNumberToSingleHour from "./appendNumberToSingleHour.js";
import AppendSingleHourToDay from "./AppendSingleHourToDay.js";
import clearAllHoursFromDay from "./clearAllHoursFromDay.js";
import createHourElement from "./createHourElement.js";
import createTickGraphic from "./createTickGraphic.js";

function manageHours(name) {
  const functions = {
    appendManyHoursToDay: appendManyHoursToDay,
    appendNumberToSingleHour: appendNumberToSingleHour,
    AppendSingleHourToDay: AppendSingleHourToDay,
    clearAllHoursFromDay: clearAllHoursFromDay,
    createHourElement: createHourElement,
    createTickGraphic: createTickGraphic
  }
  return functions[name];
}

export default manageHours;