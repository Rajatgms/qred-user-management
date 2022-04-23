import { hideLoader, showLoader } from './loaderAction';
import { notifyError, notifySuccess } from './notifyAction';

export const FETCH_USER_START = 'FETCH_USER_STARTED';
export const FETCH_USER_COMPLETED = 'FETCH_USER_COMPLETED';
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_COMPLETED = 'UPDATE_USER_COMPLETED';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

const fetchUserStart = () => {
  return {
    type: FETCH_USER_START,
  };
};

const fetchUserCompleted = (response) => {
  return {
    type: FETCH_USER_COMPLETED,
    payload: response,
  };
};

const fetchUserFailed = () => {
  return {
    type: FETCH_USER_FAILED,
  };
};

const updateUserStart = () => {
  return {
    type: UPDATE_USER_START,
  };
};

const updateUserCompleted = (response) => {
  return {
    type: UPDATE_USER_COMPLETED,
    payload: response,
  };
};

const updateUserFailed = () => {
  return {
    type: UPDATE_USER_FAILED,
  };
};

export const fetchUserInfo = (id) => {
  return dispatch => {
    dispatch(fetchUserStart());
    dispatch(showLoader());
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(result => result.json())
      .then(response => {
        dispatch(fetchUserCompleted(response));
        dispatch(notifySuccess('User Details Fetched Successfully!!!'));
      })
      .catch(error => {
        dispatch(fetchUserFailed());
        dispatch(notifyError(error));
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };
};

export const updateUserInfo = (user) => {
  const requestOption = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  return dispatch => {
    dispatch(updateUserStart());
    dispatch(showLoader());
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, requestOption)
      .then(result => result.json())
      .then(response => {
        dispatch(updateUserCompleted(response));
        dispatch(notifySuccess('User Details Updated Successfully!!!'));
      })
      .catch(error => {
        dispatch(updateUserFailed());
        dispatch(notifyError(error));
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };
};
