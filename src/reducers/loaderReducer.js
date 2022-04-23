import { LOADER_START, LOADER_STOP } from '../actions/loaderAction';

const loaderReducer = (isLoading = false, action) => {
  if (action.type === LOADER_START) {
    return true;
  } else if (action.type === LOADER_STOP) {
    return false;
  }

  return isLoading;
};

export default loaderReducer;
