// code blocks uniform transport system
import manageHours_appendManyHoursToDay from "./manageHours_appendManyHoursToDay.js";
import manageHours_appendNumberToSingleHour from "./manageHours_appendNumberToSingleHour.js";
import manageHours_AppendSingleHourToDay from "./manageHours_AppendSingleHourToDay.js";
import manageHours_clearAllHoursFromDay from "./manageHours_clearAllHoursFromDay.js";
import manageHours_createHourElement from "./manageHours_createHourElement.js";
import manageHours_createTickGraphic from "./manageHours_createTickGraphic.js";

function manageHours(name) {
  const functions = {
    manageHours_appendManyHoursToDay: manageHours_appendManyHoursToDay,
    manageHours_appendNumberToSingleHour: manageHours_appendNumberToSingleHour,
    manageHours_AppendSingleHourToDay: manageHours_AppendSingleHourToDay,
    manageHours_clearAllHoursFromDay: manageHours_clearAllHoursFromDay,
    manageHours_createHourElement: manageHours_createHourElement,
    manageHours_createTickGraphic: manageHours_createTickGraphic
  }
  return functions[name];
}

export default manageHours;