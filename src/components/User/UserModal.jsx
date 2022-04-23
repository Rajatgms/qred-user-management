import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const UserModal = ({ user, show, handleClose, handleUpdate }) => {
  const [currentUser, setCurrentUser] = useState(user);
  const [errors, setErrors] = useState({});

  const findFormErrors = () => {
    const currentErrors = {};
    const { address: { city, zipcode, street }, phone, email } = currentUser;
    if (!city || city === '') {
      currentErrors.city = 'City cannot be blank';
    }
    if (!zipcode || zipcode === '') {
      currentErrors.zipcode = 'Zipcode cannot be blank';
    }
    if (!street || street === '') {
      currentErrors.street = 'Street cannot be blank';
    }
    if (!phone || phone === '') {
      currentErrors.phone = 'Phone cannot be blank';
    }
    if (!email || email === '') {
      currentErrors.email = 'Email cannot be blank';
    } else if (/^\S+@\S+\.\S+$/.test(email) === false) {
      currentErrors.email = 'Invalid email address';
    }
    
    return currentErrors;
  };

  const handleChange = (event, type) => {
    const { name, value } = event.target;
    setCurrentUser(user => {
      if (type === 'address') {
        user.address[name] = value;
      } else {
        user[name] = value;
      }
      return { ...user };
    });
  };

  const handleSubmit = () => {
    const currentFormErrors = findFormErrors();
    if (Object.keys(currentFormErrors).length > 0) {
      setErrors(currentFormErrors);
    } else {
      handleUpdate(currentUser);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit {currentUser.name} Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate>
          <Form.Group className='mb-3' controlId='userStreetName'>
            <Form.Label>Street Name</Form.Label>
            <Form.Control isInvalid={errors.street} type='text' name='street' placeholder='Enter Street Name' value={currentUser.address.street} onChange={e => handleChange(e, 'address')} />
            <Form.Control.Feedback type='invalid'>{errors.street}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='userPostalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control isInvalid={errors.zipcode} type='text' name='zipcode' placeholder='Enter Postal Code' value={currentUser.address.zipcode} onChange={e => handleChange(e, 'address')} />
            <Form.Control.Feedback type='invalid'>{errors.zipcode}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='userCity'>
            <Form.Label>City</Form.Label>
            <Form.Control isInvalid={errors.city} type='text' name='city' placeholder='Enter City' value={currentUser.address.city} onChange={e => handleChange(e, 'address')} />
            <Form.Control.Feedback type='invalid'>{errors.city}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='userEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control isInvalid={errors.email} type='email' name='email' placeholder='Enter email' value={currentUser.email} onChange={handleChange} />
            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3' controlId='userPhone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control isInvalid={errors.phone} type='text' name='phone' placeholder='Enter Phone' value={currentUser.phone} onChange={handleChange} />
            <Form.Control.Feedback type='invalid'>{errors.phone}</Form.Control.Feedback>
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
