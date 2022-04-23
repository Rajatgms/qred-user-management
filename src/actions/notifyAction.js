export const NOTIFY_ERROR = 'NOTIFY_ERROR';
export const NOTIFY_SUCCESS = 'NOTIFY_SUCCESS';
export const NOTIFY_RESET = 'NOTIFY_RESET';

export const notifyError = (error) => {
  return {
    type: NOTIFY_ERROR,
    payload: error,
  };
};

export const notifySuccess = (success) => {
  return {
    type: NOTIFY_SUCCESS,
    payload: success,
  };
};

export const notifyReset = () => {
  return {
    type: NOTIFY_RESET,
  };
};
