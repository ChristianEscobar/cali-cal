
export const getEventCounts = (state) => Object.keys(state.days)
  .sort()
  .map(day => state.days[day])
  .map(events => events.length);

export const getDayAndCounts = (state) =>
  Object.keys(state.days)
  .sort()
  .map(day => state.days[day]);


// export const getTodaysEvents = (state) => state.currentDay === null ? [] : state.days[state.selectedDay];

export const getCurrentTask = (state) => state.currentTask;
// export const getTodaysEvents = (state) => state.reducer.currentDay === null ? [] : state.reducer.days[state.reducer.selectedDay];
export const getTodaysEvents = (state) => state.reducer.currentDay === null ? [] : state.reducer.days[state.reducer.selectedDay];

export const getSelectedEvent = (state) => {
  return {
    eventDetails: state.reducer.eventDetails,
    dayId: state.reducer.selectedDay,
    taskId: state.reducer.currentTask,
  }
}

export const getEditValue = (state) => {
  return {
    editEvent: state.reducer.editEvent,
  }
}

export const getSelectedDay = (state) => {
  return {
    selectedDay: state.reducer.selectedDay,
  }
}

export const getFormErrors = (state) => {
  return {
    errors: state.reducer.formErrors,
  } 
}