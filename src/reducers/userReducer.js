import { FETCH_USER, UPDATE_USER } from '../actions/userAction';

const initialUser = {
  address: {
    name: '',
    zipcode: '',
    city: '',
  },
  email: '',
  phone: '',
};
const user = (user = initialUser, action) => {
  if (action.type === FETCH_USER) {
    return action.payload;
  } else if (action.type === UPDATE_USER) {
    return action.payload;
  }
  return user;
};

export default user;
