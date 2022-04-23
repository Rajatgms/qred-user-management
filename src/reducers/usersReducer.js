import { FETCH_USERS } from '../actions/usersAction';

const users = (users = [], action) => {
  if (action.type === FETCH_USERS) {
    return action.payload;
  }
  return users;
};

export default users;
