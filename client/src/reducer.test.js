/*
import reducer, { initialState } from './reducer';
import * as actions from './actions';

describe('reducer', () => {
  it('REQUEST_STARTED', () => {
    const state = initialState;
    const newState = reducer(state, actions.requestStarted);
    expect(newState).toEqual({
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
      savingStateStatus: 'inprogress',
    });
  })
})
*/