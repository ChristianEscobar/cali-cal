require('es6-promise').polyfill();
require('isomorphic-fetch');

export const actionNames = {
  changeDate: 'CHANGE_DATE',
  requestStarted: 'REQUEST_STARTED',
  requestComplete: 'REQUEST_COMPLETE',
  requestError: 'REQUEST_ERROR',
  setInitial: 'INITIAL_STATE',
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
