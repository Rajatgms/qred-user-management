import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserCard from './UserCard';
import UserModal from './UserModal';

const User = ({ user, fetchUserInfo, updateUserInfo }) => {
  const id = useParams().id;
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchUserInfo(id);
  }, [id, fetchUserInfo]);

  const handleUpdate = (user) => {
    updateUserInfo(user);
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link to="/users">Back to Users</Link>
      <UserCard user={user} handleShow={handleShow} />
      {
        show && <UserModal user={user} show={show} handleClose={handleClose} handleUpdate={handleUpdate} />
      }
    </>
  );
};

export default User;
