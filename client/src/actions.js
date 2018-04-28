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
  console.log(data);
  // dispatch(requestStarted);
  //  let taskId = state.currentTask;
  // console.log('********task id:', taskId);
  // let data = {
  //   event:"New event from react",
  //   startTime: "09:00:00",
  //   endTime: "10:00:00",
  //   dayID: 0
  // };
  // let data=this.data;
  // console.log("this is body *********",data);
  fetch('/api/tasks/2/', {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
  .then(function(response) {
    console.log("after db",response);
    if(response.status >= 400){
      throw new Error ("bad request")
    }
    
     return response;
  }) 
  .then(function(tasks) {
    // console.log("from dispatch",dispatch);
    // dispatch({
    //   type: actionNames.requestComplete,
    // });
  })
  // .catch((error)=>console.log(error));
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
