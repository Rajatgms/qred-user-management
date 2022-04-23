import { hideLoader, showLoader } from './loaderAction';

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

const fetchUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
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

const updateUserFailed = (error) => {
  return {
    type: UPDATE_USER_FAILED,
    payload: error,
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
      })
      .catch(error => {
        dispatch(fetchUserFailed(error));
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
      })
      .catch(error => {
        dispatch(updateUserFailed(error));
      })
      .finally(() => {
        dispatch(hideLoader());
      });
  };
};
