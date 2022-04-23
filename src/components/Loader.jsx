import { Spinner } from 'react-bootstrap';

const Loader = ({ loader }) => {
  return (
    loader &&
    <div className='d-flex justify-content-center flex-fill mt-5'>
      <Spinner animation='border' />
    </div>
  );
};

export default Loader;
