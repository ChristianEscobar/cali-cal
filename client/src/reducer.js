import { actionNames } from './actions';

export const initialState = {
  days: {
    0: { name: "Sunday", events: []},
    1: { name: "Monday", events: [ {name: 'nap'} ]},
    2: { name: "Tuesday", events: [ { name: 'special event' }, { name: 'regular event '} ] },
    3: { name: "Wednesday", events: [] },
    4: { name: "Thursday", events: [ {name: 'house party'} ] },
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
    default:
      return state;
  }
}

export default reducer;
