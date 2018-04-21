export const actionNames = {
  changeDate: 'CHANGE_DATE',
  requestStarted: 'REQUEST_STARTED',
  requestComplete: 'REQUEST_COMPLETE',
  requestError: 'REQUEST_ERROR',
};

export const changeDateAction = (day) => ({
  type: actionNames.changeDate,
  payload: {
    day: day,
  },
});

/*
export const requestStarted = {
  type: actionNames.requestStarted,
};


export const saveCal = (dispatch) => {
  dispatch(requestStarted);
  setTimeout(() => {
    dispatch({
      type: actionNames.requestComplete,
    });
  }, 1000);
  dispatch(makeRequest({ theSecret: 42 }));
};

export function makeRequest (requestBody) {
  return function (dispatch) {
    fetch('/hello')
      .then(() => {
        dispatch()
      })
      .catch(() => {
        dispatch()
      });
  }
}*/
