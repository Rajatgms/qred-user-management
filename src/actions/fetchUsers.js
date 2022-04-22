export const FETCH_USERS = 'FETCH_USERS';

const addUsers = (response) => {
  return {
    type: FETCH_USERS,
    payload: response,
  };
};

export const fetchUsers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(response => {
        dispatch(addUsers(response));
      });
  };
};
