import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import userReducer from './userReducer';
import loaderReducer from './loaderReducer';

export default combineReducers({
  users: usersReducer,
  user: userReducer,
  loader: loaderReducer,
});
