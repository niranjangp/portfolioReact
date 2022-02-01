import React from 'react';
import { Link } from 'react-router-dom';

const csOne = () => {
  return (
    <div className='csOne'>
      <div>cs one app</div>
      <div><Link to="/enter-the-design">{'< Back'}</Link></div>
    </div>
  )
};

export default csOne;
