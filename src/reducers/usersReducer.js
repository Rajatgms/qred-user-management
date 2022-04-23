import { FETCH_USERS_COMPLETED, FETCH_USERS_FAILED, FETCH_USERS_START } from '../actions/usersAction';

const initialUsersState = {
  data: [],
};

const usersReducer = (users = initialUsersState, action) => {
  if (action.type === FETCH_USERS_START) {
    return { ...users };
  } else if (action.type === FETCH_USERS_COMPLETED) {
    return { data: action.payload };
  } else if (action.type === FETCH_USERS_FAILED) {
    return { ...initialUsersState };
  }
  return users;
};

export default usersReducer;
