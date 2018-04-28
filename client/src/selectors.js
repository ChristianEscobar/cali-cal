
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
    event: state.reducer.event,
    start: state.reducer.eventStart,
    end: state.reducer.eventEnd,
    dayId: state.reducer.selectedDay,
    taskId: state.reducer.currentTask,
  }
}

export const getEdit = (state) => {
  return {
    editEvent: state.reducer.editEvent,
  }
}
