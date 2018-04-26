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
  const loadTasks = (tasks) => {
    
    const newDays = {0:[],1:[],2:[],3:[],4:[],5:[],6:[]};
    for(var i=0; i < tasks.length; i++){
      switch (tasks[i].dayID){
        case 0:
          newDays[0].push(tasks[i]);
          break;
        case 1:
          newDays[1].push(tasks[i]);
          break;
        case 2:
          newDays[2].push(tasks[i]);
          break;
        case 3:
          newDays[3].push(tasks[i]);
          break;
        case 4:
          newDays[4].push(tasks[i]);
          break;
        case 5:
          newDays[5].push(tasks[i]);
          break;
        case 6:
          newDays[6].push(tasks[i]);
          break;
        default:
          break;
      }  
    }
    // console.log(newDays);
    return newDays;
  }

  
  // dispatch(requestStarted);
  fetch('/api/tasks/')
      .then(function(response) {
          return response.json();
        // dispatch({
        //   type: actionNames.setInitial,
        // })
      }) 
      .then(function(tasks) {
        let days = loadTasks(tasks);
        dispatch({
          type: actionNames.setInitial,
          days: days,
        });
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
