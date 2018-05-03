import reducer, { initialState } from './reducer';
import * as actions from './actions';
import { createStore } from 'redux';

describe('actions', () => {
  /*
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
  */

  // editEvent action
  it('editEvent', () => {
    const store = createStore(reducer);
    
    store.dispatch(actions.editEvent(1, "my test event", "12:00", "13:00"));
    
    const state = store.getState();

    expect(state).toEqual({
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
        event: "my test event",
        start: "12:00",
        end: "13:00",
      },
      savingStateStatus: 'unknown',
      currentTask:1,
      editEvent: true,
      formErrors: {},
      allDay: false,
    });
  });

  // addEvent action
  it('addEvent', () => {
    const store = createStore(reducer);
    
    store.dispatch(actions.addEvent());
    
    const state = store.getState();

    expect(state).toEqual({
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
    });
  });

  // changeEventDetails action
  it('changeEventDetails', () => {
    const store = createStore(reducer);
    
    store.dispatch(actions.changeEventDetails({event: "test event", start: "18:00", end: "19:00"}));
    
    const state = store.getState();

    expect(state).toEqual({
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
        event: "test event",
        start: "18:00",
        end: "19:00",
      },
      savingStateStatus: 'unknown',
      currentTask: 0,
      editEvent: false,
      formErrors: {},
      allDay: false,
    });
  });
})