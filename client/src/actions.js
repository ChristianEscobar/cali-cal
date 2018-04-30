require('es6-promise').polyfill();
require('isomorphic-fetch');

export const actionNames = {
  changeDate: 'CHANGE_DATE',
  requestStarted: 'REQUEST_STARTED',
  requestComplete: 'REQUEST_COMPLETE',
  requestError: 'REQUEST_ERROR',
  setInitial: 'INITIAL_STATE',
  addEvent: 'ADD_EVENT',
  editEvent: "EDIT_EVENT",
  changeEventDetails: "CHANGE_EVENT_DETAILS",
  formErrors: "SET_FORM_ERRORS",
};

export const editEvent = (id, event, start, end) => ({
  type: actionNames.editEvent,
  payload: {
    editEvent: true,
    id: id,
    eventDetails: { event,
                start,
                end,
    },
  },
});

export const addEvent = () => ({
  type: actionNames.addEvent,
  payload: {
    editEvent: false,
    eventDetails: { event: "",
                  start: "",
                  end: "",
    },
  }
});

export const changeEventDetails = (eventDetails) => ({
  type: actionNames.changeEventDetails,
  payload: {
    eventDetails,
  }
});

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
    dispatch(requestStarted);
    setTimeout(()=>{
        dispatch({
            type: actionNames.requestComplete,
        });
    },1000);
  };

export const loadInitState = (dispatch) => {
  
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
};

export const updateTask = (data) => {
  // alert("new event ****: ",JSON.stringify(data));
  // dispatch(requestStarted);
  //  let taskId = state.currentTask;
  // console.log('********task id:', taskId);
  let newdata = {
    event:data.eventDetails.event,
    startTime: data.eventDetails.start,
    endTime: data.eventDetails.end,
    dayID: data.dayId,
  };
  
  return function(dispatch) {
    fetch('/api/tasks/'+ data.taskId, {
      method: "PUT",
      body: JSON.stringify(newdata),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
    .then(function(response) {
      if(response.status >= 400){
        throw new Error ("bad request")
      }
       return response;
    }) 
    .then(function(tasks) {

      console.log("some log: ",tasks);

      // Call dispatch to reset selected task to empty
      let eventDetails = {
        event: "",
        start: "",
        end: "",
      };

      console.log("action", eventDetails);

      dispatch({
        type: actionNames.changeEventDetails,
        payload: { eventDetails },
      });
    })
    .catch((error)=>console.log(error));
    };
  }

export const saveTask = (data) => {
  console.log("In saveTask");
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

export const setFormErrors = (formErrors) => ({
  type: actionNames.formErrors,
  payload: {
    formErrors,
  }
});

/*
export function saveEvent(edit, requestBody) {
  const url = (edit) ? "/api/task/:id"
}
*/
