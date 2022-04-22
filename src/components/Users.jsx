import React, { useEffect } from 'react';

const Users = ({ users = [], fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Users;
