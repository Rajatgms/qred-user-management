import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserCard from './UserCard';
import UserModal from './UserModal';
import Loader from '../../containers/Loader';

const User = ({ user: { data }, fetchUserInfo, updateUserInfo }) => {
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
      <Link to='/users'>Back to Users</Link>
      <Loader />
      <div className='text-center'>
        {
          data && <>
            <UserCard user={data} handleShow={handleShow} />
            {
              show && <UserModal user={data} show={show} handleClose={handleClose} handleUpdate={handleUpdate} />
            }
          </>
        }
      </div>
    </>
  );
};

export default User;
