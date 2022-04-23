import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Users from './containers/Users';
import User from './containers/User';

const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/:id' element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
