import React from 'react';
import Users from './containers/Users';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <h1>Users</h1>
      <Users />
    </Container>
  );
};

export default App;
