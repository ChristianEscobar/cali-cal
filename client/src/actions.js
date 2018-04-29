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
  changeEvent: "CHANGE_EVENT",
  changeEventStart: "CHANGE_EVENT_START",
  changeEventEnd: "CHANGE_EVENT_END",
};

export const editEvent = (id,event, start, end) => ({
  type: actionNames.editEvent,
  payload: {
    editEvent: true,
    id:id,
    event:event,
    start:start,
    end:end,
  },
});

export const addEvent = () => ({
  type: actionNames.addEvent,
  payload: {
    editEvent: false,
    event: "",
    start: "",
    end: "",
  }
});

export const changeEvent = (event) => ({
  type: actionNames.changeEvent,
  payload: {
    event,
  }
});

export const changeEventStart = (eventStart) => ({
  type: actionNames.changeEventStart,
  payload: {
    eventStart,
  }
});

export const changeEventEnd = (eventEnd) => ({
  type: actionNames.changeEventEnd,
  payload: {
    eventEnd,
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
    event:data.event,
    startTime: data.start,
    endTime: data.end,
    dayID: data.dayId,
  };
 

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
     return response();
  }) 
  .then(function(tasks) {
    console.log("some log: ",tasks);
  })
  .catch((error)=>console.log(error));
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

/*
export function saveEvent(edit, requestBody) {
  const url = (edit) ? "/api/task/:id"
}
*/
