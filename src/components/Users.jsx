import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Users;
