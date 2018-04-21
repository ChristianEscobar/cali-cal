
export const getEventCounts = (state) => Object.keys(state.days)
  .sort()
  .map(day => state.days[day].events)
  .map(events => events.length);

export const getDayAndCounts = (state) =>
  Object.keys(state.days)
  .sort()
  .map(day => state.days[day]);


export const getTodaysEvents = (state) => state.currentDay === null ? [] : state.days[state.selectedDay].events;
