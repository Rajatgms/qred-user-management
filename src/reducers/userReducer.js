import {
  FETCH_USER_COMPLETED,
  FETCH_USER_FAILED,
  FETCH_USER_START,
  UPDATE_USER_COMPLETED, UPDATE_USER_FAILED,
  UPDATE_USER_START,
} from '../actions/userAction';

const initialUser = {
  data: null,
  isLoading: false,
  error: null,
};
const userReducer = (user = initialUser, action) => {
  if (action.type === FETCH_USER_START) {
    return { ...initialUser, isLoading: true };
  } else if (action.type === FETCH_USER_COMPLETED) {
    return { data: action.payload, isLoading: false };
  } else if (action.type === FETCH_USER_FAILED) {
    return { ...initialUser, error: action.payload };
  } else if (action.type === UPDATE_USER_START) {
    return { ...initialUser, isLoading: true };
  } else if (action.type === UPDATE_USER_COMPLETED) {
    return { data: action.payload, isLoading: false };
  } else if (action.type === UPDATE_USER_FAILED) {
    return { ...initialUser, error: action.payload };
  }
  return user;
};

export default userReducer;
