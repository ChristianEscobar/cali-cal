
import { actionNames } from './actions';
// import API from "./utils/API";

// const loadTasks = () => {
//     API.getTasks()
//     .then(function(response) {
//       return response.json();
//   }) 
//   .then(function(tasks) {
//     const newDays = {0:[],1:[],2:[],3:[],4:[],5:[],6:[]};
//     for(var i=0; i < tasks.length; i++){
//       console.log(tasks[i].dayID);      
//       switch (tasks[i].dayID){
//         case 0:
//           newDays[0].push(tasks[i]);
//           break;
//         case 1:
//           newDays[1].push(tasks[i]);
//           break;
//         case 2:
//           newDays[2].push(tasks[i]);
//           break;
//         case 3:
//           newDays[3].push(tasks[i]);
//           break;
//         case 4:
//           newDays[4].push(tasks[i]);
//           break;
//         case 5:
//           newDays[5].push(tasks[i]);
//           break;
//         case 6:
//           newDays[6].push(tasks[i]);
//           break;
//         default:
//           break;
//       }  
//     }
//     // console.log(newDays);
//     return newDays;
//   })
//   .catch((error)=>console.log(error));
// };

export const initialState = {
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
  event: "",
  eventStart: "",
  eventEnd: "",
  savingStateStatus: 'unknown',
  currentTask:2,
  editEvent: false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionNames.changeDate: 
      return Object.assign(
        {},   
        state,
        { selectedDay: action.payload.day}
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
    case actionNames.setInitial:
      return Object.assign(
        {},
        state,
        { days: action.days, savingStateStatus:"calendar days loaded" }
      );
    case actionNames.editEvent:
      return Object.assign(
        {},
        state,
        { editEvent: action.payload.editEvent,
          event: action.payload.event,
          eventStart: action.payload.start,
          eventEnd: action.payload.end,
        }
      );
    case actionNames.addEvent:
      return Object.assign(
        {},
        state,
        { editEvent: action.payload.editEvent,
          event: action.payload.event,
          eventStart: action.payload.start,
          eventEnd: action.payload.end,
        }
      );
    case actionNames.changeEvent:
      return Object.assign(
        {},
        state,
        { event: action.payload.event,}
    );
    case actionNames.changeEventStart:
      return Object.assign(
        {},
        state,
        { eventStart: action.payload.eventStart,}
    );
    case actionNames.changeEventEnd:
      return Object.assign(
        {},
        state,
        { eventEnd: action.payload.eventEnd,}
    );
    default:
      return state;
  }
}

export default reducer;
