import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../containers/Loader';
import Notify from '../containers/Notify';

const Users = ({ users: { data }, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='text-center'>
      <h1>Users</h1>
      <Notify />
      <Loader />
      <ListGroup>
        {data.map((user) => (
          <ListGroup.Item key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

    </div>
  );
};

export default Users;
