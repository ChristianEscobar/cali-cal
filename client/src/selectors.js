
export const getEventCounts = (state) => Object.keys(state.days)
  .sort()
  .map(day => state.days[day])
  .map(events => events.length);

export const getDayAndCounts = (state) =>
  Object.keys(state.days)
  .sort()
  .map(day => state.days[day]);


export const getTodaysEvents = (state) => state.reducer.currentDay === null ? [] : state.reducer.days[state.reducer.selectedDay];
