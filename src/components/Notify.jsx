import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

const Notify = ({ notify: { variant, message }, notifyReset }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(variant && message);
  }, [variant, message]);

  const onClose = () => {
    setShow(false);
    notifyReset();
  };

  return (
    show ?
      <Alert variant={variant} className='text-center' onClose={onClose} dismissible>
        {message}
      </Alert> : null
  );
};

export default Notify;
