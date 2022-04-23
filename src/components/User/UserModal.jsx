import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const UserModal = ({ user, show, handleClose, handleUpdate }) => {
  const [currentUser, setCurrentUser] = useState(user);
  const [validated, setValidated] = useState(false);

  const handleChange = (event, type) => {
    const { name, value } = event.target;
    setCurrentUser(user => {
      if (type === 'address') {
        user.address[name] = value;
      } else {
        user[name] = value;
      }
      return {...user} ;
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    handleUpdate(currentUser);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {currentUser.name} Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated}>
          <Form.Group className='mb-3' controlId='userStreetName'>
            <Form.Label>Street Name</Form.Label>
            <Form.Control type='text' name='street' placeholder='Enter Street Name' value={currentUser.address.street} onChange={e => handleChange(e, 'address')} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='userPostalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type='text' name='zipcode' placeholder='Enter Postal Code' value={currentUser.address.zipcode} onChange={e => handleChange(e, 'address')} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='userCity'>
            <Form.Label>City</Form.Label>
            <Form.Control type='text' name='city' placeholder='Enter City' value={currentUser.address.city} onChange={e => handleChange(e, 'address')} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='userEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' name='email' placeholder='Enter email' value={currentUser.email} onChange={handleChange} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='userPhone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control type='text' name='phone' placeholder='Enter Phone' value={currentUser.phone} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
        <Button variant='primary' onClick={handleSubmit}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserModal;
