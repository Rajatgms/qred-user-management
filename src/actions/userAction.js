export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';

const addUser = (response) => {
  return {
    type: FETCH_USER,
    payload: response,
  };
};

const updateUser = (response) => {
  return {
    type: UPDATE_USER,
    payload: response,
  };
};


export const fetchUserInfo = (id) => {
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(result => result.json())
      .then(response => {
        dispatch(addUser(response));
      });
  };
};

export const updateUserInfo = (user) => {
  const requestOption = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }
  return dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, requestOption)
      .then(result => result.json())
      .then(response => {
        dispatch(updateUser(response));
      });
  };
};
