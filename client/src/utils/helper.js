export const dayID = (dayID) => {
  switch (dayID) {
    case 0:
        return  "SUNDAY";
    case 1:
        return "MONDAY";
    case 2:
        return "TUESDAY";
    case 3:
        return "WEDNESDAY";
    case 4:
        return "THURSDAY";
    case 5:
        return "FRIDAY";
    case 6:
        return "SATURDAY";
    default:
        break;
  }
};

export const formValidation = (eventDetails) => {
  let errors = {};

  if(eventDetails.event === '') errors.event = "Value must be provided";
  if(eventDetails.start === '') errors.start = "Value must be provided";
  if(eventDetails.end === '') errors.end = "Value must be provided";

  return errors;
};