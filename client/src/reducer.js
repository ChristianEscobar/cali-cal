
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
    // 0: { name: "Sunday", events: [
    //     { name: 'Team meeting', startTime: '8:00am' }, 
    //     { name: 'UAT definition', startTime: '3:00pm'}]},
    // 1: { name: "Monday", events: [ {name: 'nap', startTime: '3:00pm'} ]},
    // 2: { name: "Tuesday", events: [ { name: 'house party', startTime: '12:00pm'} ] },
    // 3: { name: "Wednesday", events: [] },
    // 4: { name: "Thursday", events: [ {name: 'house party', startTime: '8:00pm'} ] },
    // 5: { name: "Friday", events: [] },
    // 6: { name: "Saturday", events: [] },
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
        { days: action.days }
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
