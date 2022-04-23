import { NOTIFY_ERROR, NOTIFY_RESET, NOTIFY_SUCCESS } from '../actions/notifyAction';

const initialNotifyState = {
  variant: '',
  message: '',
};

const loaderReducer = (notify = initialNotifyState, action) => {
  if (action.type === NOTIFY_ERROR) {
    return { variant: 'error', message: action.payload };
  } else if (action.type === NOTIFY_SUCCESS) {
    return { variant: 'success', message: action.payload };
  } else if (action.type === NOTIFY_RESET) {
    return initialNotifyState;
  }

  return notify;
};

export default loaderReducer;
