import { Button, Card } from 'react-bootstrap';
import React from 'react';

const UserCard = ({ user, handleShow }) => {
  return (
    <Card className='text-center'>
      <Card.Header>Profile Information</Card.Header>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          Address - {user.address.street}, {user.address.city}, {user.address.zipcode}
        </Card.Text>
        <Card.Text>
          Email - {user.email}
        </Card.Text>
        <Card.Text>
          Phone - {user.phone}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant='primary' onClick={handleShow}>Edit Profile</Button>
      </Card.Footer>
    </Card>
  );
};

export default UserCard;
