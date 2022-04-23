import React, { useEffect } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = ({ users: { data, error, isLoading }, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='text-center'>
      <h1>Users</h1>
      {
        isLoading ?
          <Spinner animation='border' /> :
          <ListGroup>
            {data.map((user) => (
              <ListGroup.Item key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
      }
    </div>
  );
};

export default Users;
