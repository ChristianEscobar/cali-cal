/*
import { actionNames } from './actions';

export const initialState = {
  days: {
    0: [ { name: 'special event' }, { name: 'regular event '} ],
    1: [],
    2: [ { name: 'house party'} ],
    3: [],
    4: [],
    5: [],
    6: [],
  },
  currentDay: 0,
  savingStateStatus: 'unknown',
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionNames.changeDate: 
      return Object.assign(
        {},   
        state,
        { currentDay: action.payload.day}
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
*/