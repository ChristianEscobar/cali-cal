require('es6-promise').polyfill();
require('isomorphic-fetch');

export const actionNames = {
  changeDate: 'CHANGE_DATE',
  requestStarted: 'REQUEST_STARTED',
  requestComplete: 'REQUEST_COMPLETE',
  requestError: 'REQUEST_ERROR',
  setInitial: 'INITIAL_STATE',
  addEvent: 'ADD_EVENT',
};

export const changeDateAction = (day) => ({
  type: actionNames.changeDate,
  payload: {
    day: day,
  },
});


export const requestStarted = {
  type: actionNames.requestStarted,
};

export const saveCal = (dispatch) => {
  fetch('/api/tasks/')
      .then(function(response) {
          return response.json();
        // dispatch({
        //   type: actionNames.setInitial,
        // })
      }) 
      .then(function(tasks) {
        console.log(tasks);
      })
      .catch((error)=>console.log(error));
  
  // dispatch(requestStarted);
  // setTimeout(() => {
  //   dispatch({
  //     type: actionNames.requestComplete,
  //   });
  // }, 1000);
  // dispatch(makeRequest({ theSecret: 42 }));
};

export function makeRequest (requestBody) {
  return function (dispatch) {
    fetch('/api/tasks/')
      .then((response) => {
          return response.json();
        // dispatch({
        //   type: actionNames.setInitial,
        // })
      }) 
      .then(function(tasks) {
        console.log(tasks);
      });

      // .catch(() => {
      //   dispatch()
      // });
  }
}

export function addEvent() {
  return (dispatch, getState) => {
    // Get values from state from the form reducer
    const form = getState().form;

    //console.log("in addEvent", form.eventForm.values.event);

    // Create object to hold the values from the form
    const newEvent = {
      // Use name assigned to the form
      event: form.eventForm.values.event,
    }

    dispatch({
      type: actionNames.addEvent,
      newEvent,

    });
  }
}
