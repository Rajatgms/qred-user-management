import {
  FETCH_USER_COMPLETED,
  FETCH_USER_FAILED,
  FETCH_USER_START,
  UPDATE_USER_COMPLETED,
  UPDATE_USER_FAILED,
  UPDATE_USER_START,
} from '../actions/userAction';

const initialUserState = {
  data: null,
  error: null,
};
const userReducer = (user = initialUserState, action) => {
  if (action.type === FETCH_USER_START || action.type === UPDATE_USER_START) {
    return { ...initialUserState };
  } else if (action.type === FETCH_USER_COMPLETED || action.type === UPDATE_USER_COMPLETED) {
    return { data: action.payload };
  } else if (action.type === FETCH_USER_FAILED || action.type === UPDATE_USER_FAILED) {
    return { ...initialUserState };
  }
  return user;
};

export default userReducer;
