import { FETCH_USERS_COMPLETED, FETCH_USERS_FAILED, FETCH_USERS_START } from '../actions/usersAction';

const initialUsersState = {
  data: [],
  isLoading: false,
  error: null
};

const users = (users = initialUsersState, action) => {
  if (action.type === FETCH_USERS_START) {
    return { ...users, isLoading: true };
  } else if (action.type === FETCH_USERS_COMPLETED) {
    return { data: action.payload, isLoading: false };
  } else if (action.type === FETCH_USERS_FAILED) {
    return { ...initialUsersState, error: action.payload };
  }
  return users;
};

export default users;
