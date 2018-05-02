
import { actionNames } from './actions';

export const initialState = {
  days: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  },
  selectedDay: 0,
  eventDetails: {
    event: "",
    start: "",
    end: "",
  },
  savingStateStatus: 'unknown',
  currentTask:0,
  editEvent: false,
  formErrors: {},
  allDay: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionNames.changeDate: 
      return Object.assign(
        {},   
        state,
        { selectedDay: action.payload.day}
      );
    case actionNames.requestStarted:
      return Object.assign(
        {},
        state,
        { savingStateStatus: 'inprogress' }
      );
    case actionNames.requestComplete: 
      return Object.assign(
        {},
        state,
        { savingStateStatus: 'complete' }
      );
    case actionNames.requestError:
      return Object.assign(
        {},
        state,
        { savingStateStatus: 'error' }
      );
    case actionNames.setInitial:
      return Object.assign(
        {},
        state,
        { days: action.days, savingStateStatus:"calendar days loaded" }
      );
    case actionNames.editEvent:
      return Object.assign(
        {},
        state,
        { editEvent: action.payload.editEvent,
          currentTask:action.payload.id,
          eventDetails: action.payload.eventDetails,
        }
      );
    case actionNames.addEvent:
      return Object.assign(
        {},
        state,
        { editEvent: action.payload.editEvent,
          event: action.payload.event,
          eventStart: action.payload.start,
          eventEnd: action.payload.end,
        }
      );
    case actionNames.changeEventDetails:
      console.log("reducer", action.payload);
      return Object.assign(
        {},
        state,
        { 
          eventDetails: action.payload.eventDetails,
        }
    );
    case actionNames.changeSubmitted:
      return Object.assign(
        {},
        state,
        { 
          eventDetails: action.payload.eventDetails,
          savingStateStatus:"updated"
        }
    );
    case actionNames.formErrors:
      return Object.assign(
        {},
        state,
        { formErrors: action.payload.formErrors,}
    );
    case actionNames.settingEdit:
      return Object.assign(
        {},
        state,
        { editEvent: action.payload.editEvent,
          eventDetails: action.payload.eventDetails,
        }
    );
    case actionNames.setAllDay:
      return Object.assign(
        {},
        state,
        { 
          allDay: action.payload.allDay,
        }
    );
    default:
      return state;
  }
}

export default reducer;
