
import { actionNames } from './actions';

export const initialState = {
  days: {
    0: { name: "Sunday", events: [
                                  { name: 'Team meeting', startTime: '8:00am' }, 
                                  { name: 'UAT definition', startTime: '3:00pm'}]},
    1: { name: "Monday", events: [ {name: 'nap', startTime: '3:00pm'} ]},
    2: { name: "Tuesday", events: [ { name: 'house party', startTime: '12:00pm'} ] },
    3: { name: "Wednesday", events: [] },
    4: { name: "Thursday", events: [ {name: 'house party', startTime: '8:00pm'} ] },
    5: { name: "Friday", events: [] },
    6: { name: "Saturday", events: [] },
  },
  selectedDay: 0,
  savingStateStatus: 'unknown',
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
        { savingStateStatus: 'hello' }
      );
    default:
      return state;
  }
}

export default reducer;
