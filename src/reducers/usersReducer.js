import { FETCH_USERS } from '../actions/fetchUsers';

const users = (users = [], action) => {
  if (action.type === FETCH_USERS) {
    return action.payload;
  }
  return users;
};

export default users;
