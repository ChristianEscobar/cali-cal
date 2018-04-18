/*
import reducer, { initialState } from './reducer';
import * as actions from './actions';
import { createStore } from 'redux';

describe('actions', () => {
  it('changeDateAction', () => {
    const store = createStore(reducer);
    store.dispatch(actions.changeDateAction(1));
    const state = store.getState();
    expect(state).toEqual({
      days: {
        0: [ { name: 'special event' }, { name: 'regular event '} ],
        1: [],
        2: [ { name: 'house party'} ],
        3: [],
        4: [],
        5: [],
        6: [],
      },
      currentDay: 1,
      savingStateStatus: 'unknown',
    });
  });
})
*/