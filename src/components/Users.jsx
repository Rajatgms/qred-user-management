import React, { useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';

const Users = ({ users = [], fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Users;
