import { hideLoader, showLoader } from './loaderAction';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_COMPLETED = 'FETCH_USERS_COMPLETED';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

const fetchUserStart = () => {
  return {
    type: FETCH_USERS_START,
  };
};

const fetchUserCompleted = (response) => {
  return {
    type: FETCH_USERS_COMPLETED,
    payload: response,
  };
};

const fetchUserFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

export const getUsers = () => {
  return dispatch => {
    dispatch(showLoader());
    dispatch(fetchUserStart());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(response => {
        dispatch(fetchUserCompleted(response));
      })
      .catch(error => {
        dispatch(fetchUserFailed(error));
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };
};
