import { hideLoader, showLoader } from './loaderAction';
import { notifyError, notifySuccess } from './notifyAction';
import axios from 'axios';

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

const fetchUserFailed = () => {
  return {
    type: FETCH_USERS_FAILED,
  };
};

export const getUsers = () => {
  return dispatch => {
    dispatch(showLoader());
    dispatch(fetchUserStart());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch(fetchUserCompleted(response.data));
        dispatch(notifySuccess('Users Fetched Successfully!!!'))
      })
      .catch(error => {
        dispatch(fetchUserFailed());
        dispatch(notifyError(error))
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };
};
