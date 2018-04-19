
export const getEventCounts = (state) => Object.keys(state.days)
  .sort()
  .map(date => state.days[date])
  .map(aDay => aDay.length);

export const getTodaysEvents = (state) => state.currentDay === null ? [] : state.days[state.currentDay];
